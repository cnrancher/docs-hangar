---
title: "Mirror 命令"
---

`hangar mirror` 命令用于在镜像仓库服务器之间批量拷贝容器镜像。Hangar 允许您指定需要拷贝的容器镜像架构 & 平台参数，启用多线程并发拷贝容器镜像。

## 快速上手

使用以下命令在镜像仓库服务器之间多线程的批量拷贝容器镜像：

1. 准备一份样例镜像列表文件。

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.7.0
    # Add more images here...
    ```

    > Hangar `mirror` 命令支持两种镜像列表格式，本例中的镜像列表为 `Default` 格式，请参考 [镜像列表格式](/v1.7/mirror/image-list-format) 页面获取镜像列表格式的详细定义。

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

1. 使用 [Inspect](/v1.7/advanced/inspect) 命令，查看已拷贝的镜像 Manifest。

    ```bash
    hangar inspect --raw docker://DESTINATION_REGISTRY_URL/cnrancher/hangar:latest
    ```

## 镜像列表格式

`hangar mirror` 支持两种不同的镜像列表格式，请参考 [镜像列表格式](/v1.7/mirror/image-list-format) 页面获取镜像列表格式的详细定义。

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
        --os linux

Available Commands:
  validate    Ensure the images were mirrored correctly

Flags:
  -a, --arch strings                 architecture list of images (default [amd64,arm64])
  -d, --destination string           specify the destination image registry
      --destination-project string   override all destination image projects
  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")
  -f, --file string                  image list file
  -h, --help                         help for mirror
  -j, --jobs int                     worker number, copy images parallelly (1-20) (default 1)
      --os strings                   OS list of images (default [linux])
      --skip-login                   skip check the destination registry is logged in (used in shell script)
  -s, --source string                override the source registry in image list
      --source-project string        override all source image projects
      --timeout duration             timeout when mirror each images (default 10m0s)
      --tls-verify                   require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar mirror [command] --help" for more information about a command.
```
