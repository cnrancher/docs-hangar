---
title: "Convert image list format"
---

The `hangar convert-list` command allows to convert image list format from `default` format to the `mirror` format (see [image list format specification](/docs/v1.7/mirror/image-list-format)).

:::note

The `mirror` command supports both `default` and `mirror` format image list files. You can use the `mirror` command to copy container images with the `default` format image list file directly.

:::

## Quick Start

Convert the list from `default` format to `mirror` format, and set the destination registry to example `registry.example.io`:

1. Prepare an example image list in `default` format:
    ```txt title="example_image_list.txt"
    docker.io/library/mysql:8
    docker.io/library/nginx:latest
    ```

1. Use following command to convert the image list from `default` format to `mirror` format and override the destination registry server to `registry.example.io`.

    ```sh
    hangar convert-list \
        --input="example_image_list.txt" \
        --output="example_mirror_list.txt" \
        --source=docker.io \
        --destination=registry.example.io
    ```

1. The converted image list is like:

    ```txt title="example_mirror_list.txt"
    docker.io/library/mysql registry.example.io/library/mysql 8
    docker.io/library/nginx registry.example.io/library/nginx latest
    ```

## Usages

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
