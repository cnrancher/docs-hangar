---
title: 容器镜像加签
---

`hangar sign` 命令使用 Sigstore 私钥为容器镜像加签。

## 快速上手

:::note

您需要确保 [registries 配置文件](https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md#individual-configuration-sections) 的 `use-sigstore-attachments` 设置为 `true` 以允许 Hangar 上传 Sigstore 签名至镜像仓库服务器中。您可以在 [此处](https://github.com/cnrancher/hangar/blob/main/package/registries.d/default.yaml) 获取到样例 `/etc/containers/registries.d/default.yaml` 配置文件。

:::

:::warning

Hangar 暂不支持 Harbor 镜像仓库的镜像加签功能，请参阅 [issue#43](https://github.com/cnrancher/hangar/issues/43)。

:::

使用以下命令为容器镜像加签。

1. 准备一份样例镜像列表。

    ```txt title="example_image_list.txt"
    cnrancher/hangar:v1.8.0
    cnrancher/hangar:latest
    ```

    > 在加签之前，您可使用 [mirror](/docs/v1.8/mirror/mirror) 命令将容器镜像拷贝至 *私有镜像仓库* 中。

1. 使用 Sigstore 私钥对容器镜像加签。

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

1. 您可以使用 [inspect](/docs/v1.8/advanced/inspect/) 命令查看容器镜像的 Sigstore 签名。

    首先查看镜像的 SHA256 Digest，本例为 `sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e`。

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

    根据 Sigstore 镜像签名 TAG，查看 Sigstore 签名 Manifest：

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

1. 校验已加签的镜像。

    可使用 [sign validate](/docs/v1.8/sign/validate) 命令对已加签的容器镜像进行校验。

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
