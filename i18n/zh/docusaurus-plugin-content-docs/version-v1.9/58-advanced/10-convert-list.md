---
title: "转换镜像列表格式"
---

`hangar convert-list` 命令支持将镜像列表从 `Default` 格式转换为 `Mirror` 格式（参考 [镜像列表格式](/docs/v1.8/mirror/image-list-format)）。

:::note

`mirror` 命令目前已支持 `Default` 和 `Mirror` 两种格式的镜像列表，因此您可以直接使用 `mirror` 命令拷贝 `Default` 格式的镜像列表。

:::

## 快速上手

将镜像列表从 `Default` 格式转换为 `Mirror` 格式，并设定目标镜像仓库 Registry URL 为 `registry.example.io`：

1. 准备一份样例 `Default` 格式的镜像列表：
    ```txt title="example_image_list.txt"
    docker.io/library/mysql:8
    docker.io/library/nginx:latest
    ```

1. 使用以下命令将 `Default` 格式的镜像列表转换为 `Mirror` 格式，并设定目标镜像仓库的 Registry URL 为 `registry.example.io`。

    ```sh
    hangar convert-list \
        --input="example_image_list.txt" \
        --output="example_mirror_list.txt" \
        --source=docker.io \
        --destination=registry.example.io
    ```

1. 转换格式后的镜像列表：

    ```txt title="example_mirror_list.txt"
    docker.io/library/mysql registry.example.io/library/mysql 8
    docker.io/library/nginx registry.example.io/library/nginx latest
    ```

## 使用方法

```txt
Usage:
  hangar convert-list [flags]

Examples:
  hangar convert-list -i rancher-images.txt -o CONVERTED_MIRROR_LIST.txt

Flags:
  -d, --destination string   specify the destination registry
  -h, --help                 help for convert-list
  -i, --input string         input image list (required)
  -o, --output string        output image list (default "[INPUT_FILE].converted")
  -s, --source string        specify the source registry

Global Flags:
      --debug        enable debug output
      --tls-verify   enable https tls verify (default true)
```
