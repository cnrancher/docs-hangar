---
title: 容器镜像加签
---

`hangar sign` 命令使用 Sigstore 私钥为容器镜像加签。

::: note

Hangar `1.8` 的 `sign` 命令在 `1.9` 中已重命名为 `signv1` 并标柱为已弃用。
若需要使用 `1.8` 对应的签名功能，请执行 `hangar signv1 --help`。

:::

## 快速上手

使用以下命令为容器镜像加签。

1. 准备一份样例镜像列表。

    ```txt title="example_image_list.txt"
    cnrancher/hangar:v1.9.0
    cnrancher/hangar:latest
    ```

    > 在加签之前，您可使用 [mirror](/docs/v1.9/mirror/mirror) 命令将容器镜像拷贝至 *私有镜像仓库* 中。

1. 使用 Sigstore 私钥对容器镜像加签。

    ```bash
    #!/bin/bash

    hangar sign \
        --file="example_image_list.txt" \
        --key="sigstore.key" \
        --arch amd64,arm64 \
        --os linux \
        --registry="REGISTRY_SERVER_URL" \
        --jobs=4
    ```

1. 您可以使用 [inspect](/docs/v1.9/advanced/inspect/) 命令查看容器镜像的 Sigstore 签名。

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

    可使用 [sign validate](/docs/v1.9/sign/validate) 命令对已加签的容器镜像进行校验。

## Usage

```txt title="hangar sign --help"
hangar sign --key cosign.key <IMAGE>

Usage:
  hangar sign [flags]
  hangar sign [command]

Available Commands:
  validate    Validate the signed images with cosign sigstore public key

Flags:
  -a, --arch strings             architecture list of images (default [amd64,arm64])
  -y, --auto-yes                 answer yes automatically (used in shell script)
  -o, --failed string            file name of the scan failed image list (default "scan-failed.txt")
  -f, --file string              image list file
  -h, --help                     help for sign
  -j, --jobs int                 worker number, scan images parallelly (1-20) (default 1)
  -p, --key string               path to the private key file, KMS URI or Kubernetes Secret
      --oidc-client-id string    OIDC client ID for application (default "sigstore")
      --oidc-issuer string       OIDC provider to be used to issue ID token (default "https://oauth2.sigstore.dev/auth")
      --oidc-provider string     Specify the provider to get the OIDC token from (Optional). If unset, all options will be tried. Options include: [spiffe, google, github-actions, filesystem, buildkite-agent]
      --os strings               OS list of images (default [linux])
      --passphrase-file string   private key passphrase file
      --project string           override all image projects in image list
      --registry string          override all image registry URL in image list
      --rekor-url string         address of rekor STL server (default "https://rekor.sigstore.dev")
      --sign-manifest-index      create cosign sigstore signature for manifest index (default true)
      --skip-login               skip check the registry is logged in (used in shell script)
      --timeout duration         timeout when scan each images (default 10m0s)
      --tlog-upload              whether or not to upload to the tlog (default true)
      --tls-verify               require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar sign [command] --help" for more information about a command.
```
