---
title: "Load 命令"
---

`hangar load` 命令用于将 [save](/docs/v1.9/save/save) 命令创建的压缩包中的镜像上传至镜像仓库服务器中。
您可以在没有公网连接的环境上传容器镜像至私有仓库，`load` 命令支持用于离线环境（Air-Gap）场景部署私有镜像仓库。

:::note

Hangar 自 `v1.7.0` 开始使用 [zip 压缩包格式](/docs/v1.9/archive/specification)。

若需要加载 `tar.gz` 格式的镜像包文件，请使用 [Hangar v1.6.X](/docs/v1.6/load/load)。

:::


## 快速上手

1. 使用以下命令将压缩包中存储的镜像批量上传至**目标镜像仓库**中：

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

1. 如果某些镜像在上传时出错失败，这些失败的镜像列表将保存在 `load-failed.txt`。

    您可使用 `--failed` 参数指定输出的上传失败的镜像列表文件名。之后使用 `--file` 参数，指定上传镜像时的列表文件，重新上传失败的镜像至镜像仓库中。

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

若*目标镜像仓库*为 Harbor，Hangar `load` 命令将尝试自动为目标镜像仓库创建私有 **Harbor Project**。

若 Hangar 无法自动创建 **Harbor Project**，请手动创建。

## 使用方法

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
  -a, --arch strings             architecture list of images (default [amd64,arm64])
  -d, --destination string       destination registry url
  -o, --failed string            file name of the load failed image list (default "load-failed.txt")
  -f, --file string              image list file (optional: load all images from archive if not provided)
  -h, --help                     help for load
  -j, --jobs int                 worker number, copy images parallelly (1-20) (default 1)
      --os strings               OS list of images (default [linux])
      --overwrite                overwrite exist manifest index in destination registry
      --project string           override all destination image projects
      --provenance               copy SLSA provenance (default true)
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

## 加载不同架构的压缩包文件

Hangar 的此特性允许依次从包含不同架构的容器镜像压缩包中上传镜像至镜像仓库服务器中。

请参考以下例子：

1. 准备一份镜像列表。

    ```txt title="example_image_list.txt"
    docker.io/library/nginx:1.22
    docker.io/library/nginx:1.23
    ```
2. 使用 `save` 分别创建包含不同架构的压缩包。

    ```bash
    # 仅下载 AMD64 (x86_64) 架构容器镜像
    hangar save -f example_image_list.txt -d amd64-images.zip -a amd64
    ```

    ```bash
    # 仅下载 ARM64 (aarch64) 架构容器镜像
    hangar save -f example_image_list.txt -d arm64-images.zip -a arm64
    ```

3. 先将 `amd64` (x86_64) 架构的镜像上传至镜像仓库中。

    ```bash
    hangar load -s amd64-images.zip -d DESTINATION_REGISTRY_URL
    ```

    已上传至镜像仓库的镜像 Manifest 索引如下，仅包含 AMD64 架构：

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

4. 再将包含 `arm64` (aarch64) 架构的容器镜像上传至镜像仓库。

    ```bash
    hangar load -s arm64-images.zip -d DESTINATION_REGISTRY_URL
    ```

    现在已上传至镜像仓库的镜像 Manifest 索引将包含 AMD64 和 ARM64 两种架构：

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

5. 如果镜像的 Manifest List 出现问题，您可使用 [`--overwrite` 参数](#覆盖已有的-manifest-index) 覆盖掉目标镜像仓库已有的 Manifest List，之后重新上传镜像至目标镜像仓库。

## 在上传镜像时自定义镜像的 Project 以及镜像列表的 Registry URL

Hangar 的 `load` 命令提供了一些高级参数，用于自定义 *目标镜像* 的 Project 以及源镜像列表的 Registry URL。

您可以在上传镜像时，使用 `--project` 参数自定义所有目标镜像的 Project。

以下是一个例子：

- 本例中，`save_example.zip` 压缩包文件中存储的镜像含有不同的 Project（`library` 和 `cnrancher`）。

    ```shell-session
    $ hangar archive ls -f save_example.zip
    [15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
    [15:58:34] [INFO] Index version: v1.2.0
    [15:58:34] [INFO] Images:
       1 | docker.io/library/nginx:latest | arm64,amd64 | linux
       2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux
    ```

- 将压缩包中的所有镜像上传至 Docker Hub 的 `example` 用户。

    ```shell-session
    $ hangar load -s "save_example.zip" -d "docker.io" --project="example"
    [16:00:00] [INFO] Arch List: [amd64,arm64]
    [16:00:26] [INFO] OS List: [linux]
    [16:00:32] [INFO] [IMG:2] Loading [docker.io/cnrancher/hangar:latest] => [docker.io/example/hangar:latest]
    [16:00:32] [INFO] [IMG:1] Loading [docker.io/library/nginx:latest] => [docker.io/example/nginx:latest]
    ......
    ```

----

您可使用 `--source-registry` 参数，自定义上传镜像时镜像列表中的 Registry URL。

以下是一个例子：

- 本例中，`save_example.zip` 压缩包中镜像的 Registry URL 是 `127.0.0.1:5000`。

    ```shell-session
    $ hangar archive ls -f save_example.zip
    [15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
    [15:58:34] [INFO] Index version: v1.2.0
    [15:58:34] [INFO] Images:
       1 | 127.0.0.1:5000/library/nginx:latest | arm64,amd64 | linux
       2 | 127.0.0.1:5000/cnrancher/hangar:latest | amd64,arm64 | linux
    ```

- 镜像列表文件中，镜像的 Registry URL 为 `docker.io`。

    ```txt title="example.txt"
    docker.io/library/nginx:latest
    docker.io/library/hangar:latest
    ```

- 当执行 `load` 命令并指定了上述镜像列表时，您需要添加 `--source-registry='127.0.0.1:5000'` 参数。

    ```shell-session
    $ hangar load -f "example.txt" -s "save_example.zip" --source-registry="127.0.0.1:5000" -d "REGISTRY_URL"
    [16:00:00] [INFO] Arch List: [amd64,arm64]
    [16:00:00] [INFO] OS List: [linux]
    [16:00:00] [INFO] [IMG:2] Loading [127.0.0.1:5000/cnrancher/hangar:latest] => [REGISTRY_URL/cnrancher/hangar:latest]
    [16:00:00] [INFO] [IMG:1] Loading [127.0.0.1:5000/library/nginx:latest] => [REGISTRY_URL/library/nginx:latest]
    ......
    ```

## 上传镜像时为容器镜像加签

参数 `--sigstore-private-key` 已在 `v1.9.x` 弃用，请使用 [hangar sign](/docs/v1.9/sign) 命令为容器镜像加签。

## 覆盖已有的 Manifest Index

自 `v1.8.7` 起，可使用 `--overwrite` 参数覆盖掉目标镜像仓库已有的 Manifest 列表。

```bash
hangar load \
    --source "save_example.zip" \
    --destination REGISTRY_URL \
    --overwrite=true
```

默认情况下，Hangar 会将新拷贝的镜像 Manifest 与目标镜像仓库已有的 Manifest List 相整合，如果目标镜像仓库的 Manifest List 出现问题，可使用 `--overwrite` 参数尝试修复。
