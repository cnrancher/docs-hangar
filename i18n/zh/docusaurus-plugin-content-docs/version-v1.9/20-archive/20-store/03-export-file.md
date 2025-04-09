---
title: "从镜像包中导出自定义文件"
---

`hangar archive export file` 命令用于从镜像包中解压自定义文件。

> v1.9.2 及后续版本可用。

## 快速上手

```bash
#!/bin/bash

# 从镜像包中解压自定义文件
hangar archive export file \
        --name FILENAME \
        --file ARCHIVE.zip
```

## 使用方法

```text title="hangar archive ls --help"
Extract the custom file from Hangar Archive

Usage:
  hangar archive export file [flags]

Aliases:
  file, f

Examples:
# Extract the custom file from archive file
hangar archive export file \
        --name FILENAME \
        --file ARCHIVE.zip

Flags:
  -y, --auto-yes      answer yes automatically (used in shell script)
  -f, --file string   hangar archive file
  -h, --help          help for file
  -n, --name string   file name to be extracted from archive file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
