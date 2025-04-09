---
title: "存储自定义文件"
---

`hangar archive store file` 命令用于将自定义文件保存至镜像包中。

> v1.9.2 及后续版本可用。

## 快速上手

```bash
#!/bin/bash

# 添加自定义文件至镜像包中
hangar archive store file \
        --file saved_images.zip \
        ./path/to/FILENAME
```

可使用 [export file](/docs/v1.9/archive/store/export-file) 命令导出已保存的自定义文件。

## 使用方法

```text title="hangar archive ls --help"
Store OCI format Custom File in archive

Usage:
  hangar archive store file [flags]

Aliases:
  file, files, f

Examples:
# Add files to archive
hangar archive store file \
        --file saved_images.zip \
        ./path/to/file1.txt \
        ./path/to/file2.txt \

# Add file from URL
hangar archive store file \
        --file saved_images.zip \
        https://example.com/path/to/file.txt

Flags:
  -f, --file string   Path to the Hangar archive file (zip)
  -h, --help          help for file
      --tls-verify    Require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
