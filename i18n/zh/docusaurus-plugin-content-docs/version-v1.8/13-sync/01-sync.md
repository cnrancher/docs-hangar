---
title: "Sync 命令"
---

`hangar sync` 命令与 [save](/docs/v1.8/save/save) 命令类似，允许您将额外的镜像附加到 [save](/docs/v1.8/save/save) 命令创建的压缩包中，而不需要重新下载所有的镜像创建新的压缩包文件。

[save](/docs/v1.8/save/save) 命令在创建压缩包时，可能会遇到镜像下载失败等情况，此时您可使用 `sync` 命令将失败的镜像尝试附加到已创建的压缩包中。

## 快速上手

使用以下命令，向 [save](/docs/v1.8/save/save#快速上手) 命令创建的压缩包中增添新的镜像:

```bash
#!/bin/bash

hangar sync \
    --file="extra_image_list.txt" \
    --source="docker.io" \
    --destination="save_example.zip" \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar sync --help"
Sync (append) images from registry server into local archive file

Usage:
  hangar sync -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]
  hangar sync [command]

Examples:

hangar sync \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the sync (append) images, ensure images were saved into archive file

Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
  -d, --destination string   file name of the destination archive file
  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")
  -f, --file string          image list file
  -h, --help                 help for sync
  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar sync [command] --help" for more information about a command.
```
