---
title: "Load Command"
---

The `hangar load` command loads images from zip archive file created by [save](../save/save) command to registry server, it allows to upload container images to registry server without a public internet connection,
and the `load` command can be used in Air-Gapped (offline) installation scenarios.

## Quick Start

Use following command to load multiple container images from archive file created by [save](../save/save#quick-start) command to the *destination registry server* parallelly.

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

## Harbor 2.X

Hangar will try to create **Harbor Project** automatically on `load` command if the destination registry is harbor.

You need to create **Harbor Project** manually if Hangar can't create the project automatically, or the image will fail to copy.

## Usage

```txt title="hanagr load --help"
Load images from zip archive created by 'save' command to registry server.

The load command will create Harbor V2 projects for destination registry automatically.

Usage:
  hangar load -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]
  hangar load [command]

Examples:
# Load images from SAVED_ARCHIVE.zip to REGISTRY SERVER.
hangar load \
        --file IMAGE_LIST.txt \
        --source SAVED_ARCHIVE.zip \
        --destination REGISTRY_URL \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the loaded images, ensure images were loaded to registry server

Flags:
  -a, --arch strings             architecture list of images (default [amd64,arm64])
  -d, --destination string       destination registry url
  -o, --failed string            file name of the load failed image list (default "load-failed.txt")
  -f, --file string              image list file (optional: load all images from archive if not provided)
  -h, --help                     help for load
  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)
      --os strings               OS list of images (default [linux])
      --project string           override all destination image projects
      --skip-login               skip check the destination registry is logged in (used in shell script)
  -s, --source string            saved archive filename
      --source-registry string   override the source registry of image list
      --timeout duration         timeout when save each images (default 10m0s)
      --tls-verify               require HTTPS and verify certificates

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
