---
title: "Sign images with sigstore key-pair"
---

`hangar sign` command is for signing container images with sigstore key-pair.

## Quick Start

:::note

You need to ensure the `use-sigstore-attachments` of  [registries configuration](https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md#individual-configuration-sections) is set to `true` to allow Hangar upload the sigstore signature to the registry server before signing images. You can obtain the example `/etc/containers/registries.d/default.yaml` registry configuration file from [here](https://github.com/cnrancher/hangar/blob/main/package/registries.d/default.yaml).

:::

:::warning

Hangar does not support sign image on Harbor registry server, for more info please refer to [issue#43](https://github.com/cnrancher/hangar/issues/43).

:::

Use following command to sign images.

1. Prepare an image list file.

    ```txt title="example_image_list.txt"
    cnrancher/hangar:v1.8.0
    cnrancher/hangar:latest
    ```

    > You may need to use [mirror](/docs/v1.8/mirror/mirror) command to copy container images to the *DESTINATION REGISTRY SERVER* before signing images.

1. Sign container images with sigstore private key.

    ```bash
    #!/bin/bash

    hangar sign \
        --file="example_image_list.txt" \
        --sigstore-key="sigstore.key" \
        --arch amd64,arm64 \
        --os linux \
        --registry="REGISTRY_SERVER_URL" \
        --jobs=4
    ```

1. You can use [inspect](/docs/v1.8/advanced/inspect/) command to view the signed sigstore signature.

    Use inspect to get the image `sha256` digest, in this example is `sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e`.

    ```bash
    #!/bin/bash

    hangar inspect --raw docker://REGISTRY_SERVER_URL/cnrancher/hangar:latest
    {
      "schemaVersion": 2,
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "manifests": [
        {
          "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
          "size": 528,
          "digest": "sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e",
          "platform": {
            "architecture": "amd64",
            "os": "linux"
          }
        }
      ]
    }
    ```

    Inspect the sigstore signature manifest by specifying the sigstore signature tag:

    ```bash
    #!/bin/bash

    hangar inspect --raw "docker://REGISTRY_SERVER_URL/cnrancher/hangar:sha256-25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e.sig"  | jq
    {
      "schemaVersion": 2,
      "mediaType": "application/vnd.oci.image.manifest.v1+json",
      "config": {
        "mediaType": "application/vnd.oci.image.config.v1+json",
        "digest": "sha256:7abad20a44f07298df4f74a474baae8873f2009377cee2b468cf1dbad8275a31",
        "size": 227
      },
      "layers": [
        {
          "mediaType": "application/vnd.dev.cosign.simplesigning.v1+json",
          "digest": "sha256:af8fb401acf93b9ae2ef0be057d7e1ce9aa1044ef6744877aa16d693dc170c7e",
          "size": 373,
          "annotations": {
            "dev.cosignproject.cosign/signature": "MEYCIQCZvL..."
          }
        },
        {
          "mediaType": "application/vnd.dev.cosign.simplesigning.v1+json",
          "digest": "sha256:6f67c286b98255ee81ebf27af90bf8f1d980759fd8a64c7750cbb3d7d682c1d4",
          "size": 373,
          "annotations": {
            "dev.cosignproject.cosign/signature": "MEUCIQ......"
          }
        }
      ]
    }
    ```

1. Verify the signed image.

    The [sign validate](/docs/v1.8/sign/validate) command provides signature verify functions of the signed container image.

## Usage

```txt title="hangar sign --help"
Sign multiple container images with sigstore private key

Usage:
  hangar sign -f IMAGE_LIST.txt --key SIGSTORE.key [flags]
  hangar sign [command]

Examples:
# Sign the images with sigstore private key file.
hangar sign \
        --file IMAGE_LIST.txt \
        --sigstore-key SIGSTORE.key \
        --sigstore-passphrase-file "/path/to/passphrase/file" \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the signed images with sigstore public key

Flags:
  -a, --arch strings                      architecture list of images (default [amd64,arm64])
  -o, --failed string                     file name of the sign failed image list (default "sign-failed.txt")
  -f, --file string                       image list file
  -h, --help                              help for sign
  -j, --jobs int                          worker number, sign images parallelly (1-20) (default 1)
      --os strings                        OS list of images (default [linux])
      --project string                    override all image projects in image list
      --registry string                   override all image registry URL in image list
  -k, --sigstore-key string               sigstore private key file
      --sigstore-passphrase-file string   read the passphrase for the private key from file
      --skip-login                        skip check the registry is logged in (used in shell script)
      --timeout duration                  timeout when sign each images (default 10m0s)
      --tls-verify                        require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar sign [command] --help" for more information about a command.
```
