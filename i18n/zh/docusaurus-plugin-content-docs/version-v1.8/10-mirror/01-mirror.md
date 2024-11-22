---
title: "Mirror 命令"
---

`hangar mirror` 命令用于在镜像仓库服务器之间批量拷贝容器镜像。Hangar 允许您指定需要拷贝的容器镜像架构 & 平台参数，启用多线程并发拷贝容器镜像。

## 快速上手

使用以下命令在镜像仓库服务器之间多线程的批量拷贝容器镜像：

1. 准备一份样例镜像列表文件。

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.8.0
    # Add more images here...
    ```

    > Hangar `mirror` 命令支持两种镜像列表格式，本例中的镜像列表为 `Default` 格式，请参考 [镜像列表格式](/docs/v1.8/mirror/image-list-format) 页面获取镜像列表格式的详细定义。

1. 执行以下命令，将镜像列表中的 **amd64 & arm64, linux** 容器镜像从 *源镜像仓库* 拷贝至 *目标镜像仓库* 中。

    ```bash
    #!/bin/bash

    hangar mirror \
        --file="example_image_list.txt" \
        --source=SOURCE_REGISTRY_URL \
        --destination=DESTINATION_REGISTRY_URL \
        --arch=amd64,arm64 \
        --os=linux \
        --jobs=4
    ```

1. 使用 [Inspect](/docs/v1.8/advanced/inspect) 命令，查看已拷贝的镜像 Manifest。

    ```bash
    hangar inspect --raw docker://DESTINATION_REGISTRY_URL/cnrancher/hangar:latest
    ```

## 镜像列表格式

`hangar mirror` 支持两种不同的镜像列表格式，请参考 [镜像列表格式](/docs/v1.8/mirror/image-list-format) 页面获取镜像列表格式的详细定义。

## 使用方法

```txt title="hangar mirror --help"
Mirror images between registry servers

Usage:
  hangar mirror -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]
  hangar mirror [command]

Examples:
# Mirror images from SOURCE REGISTRY to DESTINATION REGISTRY.
hangar mirror \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination DESTINATION_REGISTRY \
        --arch amd64,arm64 \
        --os linux \
        --sigstore-private-key SIGSTORE.key

Available Commands:
  validate    Ensure the images were mirrored correctly

Flags:
  -a, --arch strings                      architecture list of images (default [amd64,arm64])
  -d, --destination string                specify the destination image registry
      --destination-project string        override all destination image projects
  -o, --failed string                     file name of the mirror failed image list (default "mirror-failed.txt")
  -f, --file string                       image list file
  -h, --help                              help for mirror
  -j, --jobs int                          worker number, copy images parallelly (1-20) (default 1)
      --os strings                        OS list of images (default [linux])
      --overwrite                         overwrite exist manifest index in destination registry
      --provenance                        copy SLSA provenance (default true)
      --remove-signatures                 do not copy image signatures when mirror images
      --sigstore-passphrase-file string   passphrase file of the sigstore private key
      --sigstore-private-key string       sign images by sigstore private key when mirror images
      --skip-login                        skip check the destination registry is logged in (used in shell script)
  -s, --source string                     override the source registry in image list
      --source-project string             override all source image projects
      --timeout duration                  timeout when mirror each images (default 10m0s)
      --tls-verify                        require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar mirror [command] --help" for more information about a command.
```

## Mirror 镜像时自定义 Project

Hangar 的 `mirror` 命令提供一些高级参数，可以用于自定义 *源镜像* 和 *目标镜像* 的 Project（Namespace）。

您可使用 `--source-project` 参数，自定义所有 *源镜像* 的 Project，并使用 `--destination-project` 参数，自定义所有 *目标镜像* 的 Project。

以下是一个例子：

- 本例中使用 `Default` 格式的镜像列表，包含了一些 Docker Hub 镜像，这些镜像的 Project 不一致（`library` 和 `cnrancher`）。

    ```txt title="example.txt"
    docker.io/library/nginx:latest
    docker.io/cnrancher/hangar:latest
    ```

- 使用 `--destination-project` 参数，将这些镜像拷贝至另一个 Docker Hub 用户。

    ```shell-session
    $ hangar mirror -f "example.txt" --destination-project="USERNAME"
    [17:00:00] [INFO] [IMG:1] Copying [docker.io/library/nginx:latest] => [docker.io/USERNAME/nginx:latest]
    [17:00:00] [INFO] [IMG:2] Copying [docker.io/cnrancher/hangar:latest] => [docker.io/USERNAME/hangar:latest]
    ......
    ```

## Mirror 镜像时为容器镜像加签

自 `v1.8.0` 起，可使用 `--sigstore-private-key` 参数指定 Sigstore 私钥，在拷贝镜像时对镜像进行加签。

```bash
hangar mirror \
    --file "example.txt" \
    --source "SOURCE_REGISTRY" \
    --destination "DESTINATION_REGISTRY" \
    --sigstore-private-key "sigstore.key"
```

默认情况下，如果被拷贝的镜像已经含有 Sigstore 签名，Mirror 命令在拷贝镜像时会拷贝它。您可使用 `--remove-signatures` 参数禁用拷贝容器镜像时的 Sigstore 签名拷贝。

## 覆盖已有的 Manifest Index

自 `v1.8.7` 起，可使用 `--overwrite` 参数覆盖掉目标镜像仓库已有的 Manifest 列表。

```bash
hangar mirror \
    --file "example.txt" \
    --source "SOURCE_REGISTRY" \
    --destination "DESTINATION_REGISTRY" \
    --overwrite=true
```

默认情况下，Hangar 会将新拷贝的镜像 Manifest 与目标镜像仓库已有的 Manifest List 相整合，如果目标镜像仓库的 Manifest List 出现问题，可使用 `--overwrite` 参数尝试修复。
