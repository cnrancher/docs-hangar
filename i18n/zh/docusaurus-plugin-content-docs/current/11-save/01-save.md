---
title: "Save 命令"
---

`hangar save` 命令与 [mirror](../mirror/mirror) 命令类似，用于将容器镜像从镜像仓库下载至本地的压缩文件中，之后可使用 [load](../load/load) 命令将压缩文件中的镜像上传到镜像仓库中。

## 快速上手

使用以下命令将镜像列表中的镜像下载至压缩文件中：

1. 创建样例镜像列表文件:

    ```txt title="example_image_list.txt"
    cnrancher/hangar:v1.7.0
    cnrancher/hangar:latest
    # Append some extra images here...
    ```

2. 将镜像从 `docker.io` 镜像仓库下载至压缩包 `saved_example.zip` 中:

    ```bash
    hangar save \
        --file example_image_list.txt \
        --source=docker.io \
        --destination=save_example.zip \
        --arch=amd64,arm64 \
        --os=linux \
        --jobs=4
    ```

## 使用方法

```txt title="hangar save --help"
Save images from registry server into local archive file

Usage:
  hangar save -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]
  hangar save [command]

Examples:

hangar save \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the saved images, ensure images were saved into archive file

Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
  -y, --auto-yes             answer yes automatically (used in shell script)
  -d, --destination string   file name of the output saved images (default "saved-images.zip")
  -o, --failed string        file name of the save failed image list (default "save-failed.txt")
  -f, --file string          image list file
  -h, --help                 help for save
  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar save [command] --help" for more information about a command.
```

## 压缩文件格式

从 `v1.7.0` 起，Hangar 使用 `zip` 格式。

**旧版本的 Hangar 创建的压缩包格式（`tar.gz`）将无法与新版本（`zip`）格式相兼容。**

关于压缩文件的更多信息，请参考 [load](../load/load) 和 [压缩文件格式](archive) 页面。
