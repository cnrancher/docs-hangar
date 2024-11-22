---
title: "Load Command"
---

The `hangar load` command loads images from zip archive file created by [save](/docs/v1.8/save/save) command to registry server, it allows to upload container images to registry server without a public internet connection,
and the `load` command can be used in Air-Gapped (offline) installation scenarios.

:::note

Hangar chaned to use the [zip archive format](/docs/v1.8/archive/specification) from version `v1.7.0`.

You can still use the [hangar v1.6.X](/docs/v1.6/load/load) to load the `tar.gz` format tarball.

:::

## Quick Start

1. Use following command to load multiple container images from archive file created by [save](/docs/v1.8/save/save#quick-start) command to the *destination registry server* parallelly.

    ```bash
    #!/bin/bash

    hangar load \
        --file="example_image_list.txt" \
        --source="save_example.zip" \
        --destination=DESTINATION_REGISTRY_URL \
        --arch=amd64,arm64 \
        --os=linux \
        --jobs=4
    ```

1. If error occured when loading some images from the archive file, the load failed images will output to `load-failed.txt` by default.

    You can use the `--failed` option to specify the output file of the load failed images, and then use the `--file` option of `hangar load` command to upload only these failed images from the archive file.

    ```bash
    #!/bin/bash

    hangar load \
        --file="load-failed.txt" \
        --source="save_example.zip" \
        --destination=DESTINATION_REGISTRY_URL \
        --arch=amd64,arm64 \
        --os=linux \
        --jobs=4
    ```

## Harbor 2.X

Hangar will try to create private **Harbor Project** automatically on `load` command if the destination registry is harbor.

You need to create **Harbor Project** manually if Hangar can't create the project automatically, or the image will fail to copy.

## Usage

```txt title="hanagr load --help"
Load images from zip archive created by 'save' command to registry server.

The load command will create Harbor V2 projects for destination registry automatically.

Usage:
  hangar load -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]
  hangar load [command]

Examples:
# Load images from SAVED_ARCHIVE.zip to REGISTRY server
# and sign the loaded images by sigstore private key file.
hangar load \
        --file IMAGE_LIST.txt \
        --source SAVED_ARCHIVE.zip \
        --destination REGISTRY_URL \
        --arch amd64,arm64 \
        --os linux \
        --sigstore-private-key SIGSTORE.key

Available Commands:
  validate    Validate the loaded images, ensure images were loaded to registry server

Flags:
  -a, --arch strings                      architecture list of images (default [amd64,arm64])
  -d, --destination string                destination registry url
  -o, --failed string                     file name of the load failed image list (default "load-failed.txt")
  -f, --file string                       image list file (optional: load all images from archive if not provided)
  -h, --help                              help for load
  -j, --jobs int                          worker number, copy images parallelly (1-20) (default 1)
      --os strings                        OS list of images (default [linux])
      --overwrite                         overwrite exist manifest index in destination registry
      --project string                    override all destination image projects
      --provenance                        copy SLSA provenance (default true)
      --sigstore-passphrase-file string   passphrase file of the sigstore private key
      --sigstore-private-key string       sign images by sigstore private key when mirroring
      --skip-login                        skip check the destination registry is logged in (used in shell script)
  -s, --source string                     saved archive filename
      --source-registry string            override the source registry of image list
      --timeout duration                  timeout when save each images (default 10m0s)
      --tls-verify                        require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar load [command] --help" for more information about a command.
```

## Load from different architecture archives

This feature allows you to sequentially load container images from multiple archive files containing different architectures.

Here is an example:

1. Prepare an image list file.

    ```txt title="example_image_list.txt"
    docker.io/library/nginx:1.22
    docker.io/library/nginx:1.23
    ```
2. Save images by different architectures.

    ```bash
    # Save AMD64 (x86_64) architecture images only
    hangar save -f example_image_list.txt -d amd64-images.zip -a amd64
    ```

    ```bash
    # Save ARM64 (aarch64) architecture images only
    hangar save -f example_image_list.txt -d arm64-images.zip -a arm64
    ```

3. Load the `amd64` (x86_64) architecture images from archive file first.

    ```bash
    hangar load -s amd64-images.zip -d DESTINATION_REGISTRY_URL
    ```

    The manifest of the loaded images only contains the AMD64 architecture:

    ```bash
    hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq
    {
      "schemaVersion": 2,
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "manifests": [
        {
          "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
          "size": 1235,
          "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",
          "platform": {
            "architecture": "amd64",
            "os": "linux"
          }
        }
      ]
    }
    ```

4. Then load the `arm64` (aarch64) architecture images from archive file.

    ```bash
    hangar load -s arm64-images.zip -d DESTINATION_REGISTRY_URL
    ```

    Now the manifest of the loaded images contains both AMD64 and ARM64 architectures:

    ```bash
    hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq
    {
      "schemaVersion": 2,
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "manifests": [
        {
          "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
          "size": 1230,
          "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",
          "platform": {
            "architecture": "arm64",
            "os": "linux",
            "variant": "v8"
          }
        },
        {
          "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
          "size": 1235,
          "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",
          "platform": {
            "architecture": "amd64",
            "os": "linux"
          }
        }
      ]
    }
    ```

5. If there are some unexpected error with the merged manifest list, use [`--overwrite` option](#overwrite-exist-manifest-index) of the `load` command to reload the manifest list.

## Override the project name or source registry URL when loading images

Hangar `load` command provides some advanced options to customize the project name or source registry URL of the image list file when loading images.

You can use the `--project` option to override all destination image projects when loading images.

Here is an example:

- The images in example `save_example.zip` archive file contains different projects (`library` and `cnrancher`).

    ```shell-session
    $ hangar archive ls -f save_example.zip
    [15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
    [15:58:34] [INFO] Index version: v1.2.0
    [15:58:34] [INFO] Images:
       1 | docker.io/library/nginx:latest | arm64,amd64 | linux
       2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux
    ```

- Load all images in the archive file to the Docker Hub `example` user.

    ```shell-session
    $ hangar load -s "save_example.zip" -d "docker.io" --project="example"
    [16:00:00] [INFO] Arch List: [amd64,arm64]
    [16:00:26] [INFO] OS List: [linux]
    [16:00:32] [INFO] [IMG:2] Loading [docker.io/cnrancher/hangar:latest] => [docker.io/example/hangar:latest]
    [16:00:32] [INFO] [IMG:1] Loading [docker.io/library/nginx:latest] => [docker.io/example/nginx:latest]
    ......
    ```

----

You can use the `--source-registry` option to override the registry URL of the image list file when loading images from archive file with an image list file specified.

Here is an example:

- The registry URL of images in the example `save_example.zip` file is `127.0.0.1:5000`.

    ```shell-session
    $ hangar archive ls -f save_example.zip
    [15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
    [15:58:34] [INFO] Index version: v1.2.0
    [15:58:34] [INFO] Images:
       1 | 127.0.0.1:5000/library/nginx:latest | arm64,amd64 | linux
       2 | 127.0.0.1:5000/cnrancher/hangar:latest | amd64,arm64 | linux
    ```

- The registry URL of images in the example image list file is `docker.io`.

    ```txt title="example.txt"
    docker.io/library/nginx:latest
    docker.io/library/hangar:latest
    ```

- You need to add `--source-registry='127.0.0.1:5000'` option when loading images from the archive file with the `example.txt` image list file specified.

    ```shell-session
    $ hangar load -f "example.txt" -s "save_example.zip" --source-registry="127.0.0.1:5000" -d "REGISTRY_URL"
    [16:00:00] [INFO] Arch List: [amd64,arm64]
    [16:00:00] [INFO] OS List: [linux]
    [16:00:00] [INFO] [IMG:2] Loading [127.0.0.1:5000/cnrancher/hangar:latest] => [REGISTRY_URL/cnrancher/hangar:latest]
    [16:00:00] [INFO] [IMG:1] Loading [127.0.0.1:5000/library/nginx:latest] => [REGISTRY_URL/library/nginx:latest]
    ......
    ```

## Sign images with sigstore private key when load

Starting from `v1.8.0`, you can specify the sigstore private key by with `--sigstore-private-key` option to sign images when loading images from archive file.

```bash
hangar load \
    --source "save_example.zip" \
    --destination REGISTRY_URL \
    --sigstore-private-key "sigstore.key"
```

## Overwrite exist manifest index

Starting from `v1.8.7`, you can use `--overwrite` option to overwrite existing manifest list in destination registry server when copy images.

```bash
hangar load \
    --source "save_example.zip" \
    --destination REGISTRY_URL \
    --overwrite=true
```

By default, hangar will merge the new images into existing manifest list in destination registry server, if unexpected problem with the manifest list of the image copied to the destination registry, use the `--overwrite` option to fix it.
