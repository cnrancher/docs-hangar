---
title: 校验已加签的容器镜像
---

`hangar sign validate` 命令用于对已加签的容器镜像进行校验。

## 快速上手

使用以下命令对执行过 [sign](sign) 命令的容器镜像进行校验。

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

## 校验 Mirror 命令拷贝的容器镜像签名

默认情况下，[mirror](/docs/v1.8/mirror/mirror) 命令会将容器镜像的签名随着镜像本身一同拷贝。您可以使用 mirror 命令的 `--remove-signatures` 参数禁用 Sigstore 签名的拷贝，之后使用 [sign](sign) 命令重新为已拷贝的镜像加签。

如果待校验的容器镜像签名是从其他镜像仓库拷贝过来的，您需要指定 `sign validate` 的 `--exact-repository` 参数，以使用 [exactRepository](https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md#signedby) SignedBy Identity 进行签名的校验操作。

参考下方的例子：

1. 将容器镜像 Mirror 至您的 Docker Hub Project 中，并为其加签。

    创建一份样例镜像列表。
    ```txt title="example_image_list.txt"
    USERNAME/alpine:latest
    ```

    拷贝并对镜像加签
    ```bash
    #!/bin/bash

    # 将镜像拷贝至您的 Docker Hub Project 中。
    hangar mirror \
        --file="example_image_list.txt" \
        --source="docker.io" \
        --destination="docker.io" \
        --source-project="library"

    # 使用 Sigstore 私钥对镜像加签。
    hangar sign \
        --file="example_image_list.txt" \
        --registry="docker.io" \
        --sigstore-key="sigstore.key"
    ```

    此时，镜像 `USERNAME/alpine:latest` 的 Sigstore 签名对应的 Reference Name 为 `docker.io/USERNAME/alpine:latest`。

1. 将已加签的镜像拷贝至私有镜像仓库中。

    ```bash
    hangar mirror \
        --file "example_image_list.txt" \
        --source "docker.io" \
        --destination "REGISTRY_SERVER_URL"
    ```

    现在私有镜像仓库中镜像的 Reference Name 应当为 `REGISTRY_SERVER_URL/USERNAME/alpine:latest`，但它的 Sigstore 签名对应的 Reference Name 依旧为 `docker.io/USERNAME/alpine:latest`。

    此时执行 Validate 命令将会报错，因为签名的 Reference Name 与镜像实际的 Reference Name 不一致。

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

    报错的信息大致为 `Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:... is not accepted`。

3. 使用 `--exact-repository` 参数对已加签的镜像进行校验。

    `--exact-repository` 参数指定镜像签名的 Reference Name。

    ```bash
    #!/bin/bash

    hangar sign validate \
        --file="example_image_list.txt" \
        --sigstore-pubkey="sigstore.pub" \
        --registry="REGISTRY_SERVER_URL" \
        --exact-repository="docker.io/USERNAME/alpine"
    ```

## 使用 Cosign 校验已加签的容器镜像

您可以使用 Cosign 对 Hangar 加签的容器镜像进行校验。

1. 使用 [inspect](/docs/v1.8/advanced/inspect/) 命令获取待验证镜像的 SHA256 Digest。

    本例中，镜像的 Digest 为 `sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e`.

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

    使用 [cosign verify](https://docs.sigstore.dev/verifying/verify/) 命令对已加签的容器镜像进行校验。

    ```bash
    #!/bin/bash

    cosign verify \
        --key="./sigstore.pub" \
        --allow-http-registry=true \
        ---insecure-ignore-tlog \
        REGISTRY_SERVER_URL/cnrancher/hangar@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e
    ```

    `--insecure-ignore-tlog` 参数用于跳过 Cosign 在 Transparency 日志服务器中查找签名的信息，因为 Hangar 在对镜像加签时不会将签名信息上传至 Cosign 使用的 Transparency 日志服务器中。
