---
title: "Validate the signed image signature"
---

Use `hangar sign validate` command for validate the signed image sigstore signature.

## Quick Start

Use following command to verify the signed image after executing the [sign](sign) command.

```bash
#!/bin/bash

hangar sign validate \
    --file="example_image_list.txt" \
    --sigstore-pubkey="sigstore.pub" \
    --registry="REGISTRY_SERVER_URL" \
    --jobs=4
```

## Usage

```txt title="hangar sign validate --help"
Validate the signed images by sigstore public key with the
matchRepoDigestOrExact signedIdentity.

Usage:
  hangar sign validate -f IMAGE_LIST.txt [flags]

Examples:
# Validate the signed images by sigstore public key file.
hangar validate \
        --file IMAGE_LIST.txt \
        --sigstore-pubkey SIGSTORE.pub \
        --arch amd64,arm64 \
        --os linux \
        --exact-repository "registry.example.io/library/NAME"

Flags:
  -a, --arch strings              architecture list of images (default [amd64,arm64])
      --exact-repository string   validate the signed image with exactRepository signedIdentity
  -o, --failed string             file name of the sign failed image list (default "sign-failed.txt")
  -f, --file string               image list file
  -h, --help                      help for validate
  -j, --jobs int                  worker number, copy images parallelly (1-20) (default 1)
      --os strings                OS list of images (default [linux])
      --project string            override all image projects in image list
      --registry string           override all image registry URL in image list
  -p, --sigstore-pubkey string    sigstore public key file
      --timeout duration          timeout when mirror each images (default 10m0s)
      --tls-verify                require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```

## Validate the mirrored image signature

By default, the [mirror](/docs/v1.8/mirror/mirror) command will copy the sigstore signature when copying images. You can use the `--remove-signatures` option of mirror command to disable signature copy, and use the [sign](sign) command to re-sign the container images with your own sigstore signature.

You need to specify the `--exact-repository` option of the `sign validate` command to use [exactRepository](https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md#signedby) signedBy identity when validating the image signature copied from other registry servers.

Here is an example:

1. Mirror images to your personal Docker Hub project and sign with sigstore signature.

    Prepare an example image list file.
    ```txt title="example_image_list.txt"
    USERNAME/alpine:latest
    ```

    Mirror and sign images.
    ```bash
    #!/bin/bash

    # Mirror container images to your Docker Hub personal project.
    hangar mirror \
        --file="example_image_list.txt" \
        --source="docker.io" \
        --destination="docker.io" \
        --source-project="library"

    # Sign images with sigstore private key.
    hangar sign \
        --file="example_image_list.txt" \
        --registry="docker.io" \
        --sigstore-key="sigstore.key"
    ```

    Now the image `USERNAME/alpine:latest` should have sigstore signature with its reference name `docker.io/USERNAME/alpine:latest`.

1. Mirror the signed images to your private registry server.

    ```bash
    hangar mirror \
        --file "example_image_list.txt" \
        --source "docker.io" \
        --destination "REGISTRY_SERVER_URL"
    ```

    Now the reference of the image in the private registry server is `REGISTRY_SERVER_URL/USERNAME/alpine:latest`, but its sigstore signature reference is still `docker.io/USERNAME/alpine:latest`.

    The validate command will fail if the signature reference is not match with the image reference.

    ```bash
    #!/bin/bash

    hangar sign validate \
        --file="example_image_list.txt" \
        --sigstore-pubkey="sigstore.pub" \
        --registry="REGISTRY_SERVER_URL"

    [15:48:53] [ERRO] error occurred on [IMG: 1] [REGISTRY_SERVER_URL/USERNAME/alpine:latest]: failed to validate signature [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]:
    error occurred when validate image [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]: sign validate: None of the signatures were accepted, reasons:
    Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted;
    Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted
    ```

    The validate failed error message is like `Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:... is not accepted`.

3. Validate the copied image signature with `--exact-repository`.

    Use `--exact-repository` to specify the signature exact repository.

    ```bash
    #!/bin/bash

    hangar sign validate \
        --file="example_image_list.txt" \
        --sigstore-pubkey="sigstore.pub" \
        --registry="REGISTRY_SERVER_URL" \
        --exact-repository="docker.io/USERNAME/alpine"
    ```

## Use cosign to verify the signed image signature

You can use cosign to verify the Hangar signed sigstore signature.

1. Use [inspect](/docs/v1.8/advanced/inspect/) to get the image digest to be verified.

    In this example, the digest is `sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e`.

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

    Use [cosign verify](https://docs.sigstore.dev/verifying/verify/) to verify the Hangar signed image.

    ```bash
    #!/bin/bash

    cosign verify \
        --key="./sigstore.pub" \
        --allow-http-registry=true \
        ---insecure-ignore-tlog \
        REGISTRY_SERVER_URL/cnrancher/hangar@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e
    ```

    The `--insecure-ignore-tlog` is for skip finding signature record from transparency log since Hangar does not upload the signature to the cosign transparency log server.
