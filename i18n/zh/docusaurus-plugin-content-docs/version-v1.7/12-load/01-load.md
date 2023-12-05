---
title: "Load 命令"
---

`hangar load` 命令用于将 [save](/docs/v1.7/save/save) 命令创建的压缩包中的镜像上传至镜像仓库服务器中。
您可以在没有公网连接的环境上传容器镜像至私有仓库，`load` 命令支持用于离线环境（Air-Gap）场景部署私有镜像仓库。

## 快速上手

使用以下命令将压缩包中存储的镜像批量上传至**目标镜像仓库**中：

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
