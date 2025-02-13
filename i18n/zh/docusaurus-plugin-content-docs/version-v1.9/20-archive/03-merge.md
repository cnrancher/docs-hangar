---
title: "合并镜像包"
---

`hangar archive merge` 命令用于将多个镜像包整合为一个新的镜像包文件。

> Hangar v1.7.1 及后续版本支持此功能。

## 快速上手

使用以下命令，将 Hangar [save](/docs/v1.9/save/save) 命令创建的多个镜像包文件整合为一个镜像包文件：

```bash
#!/bin/bash

hangar archive merge \
    --file="ARCHIVE_FILE_1.zip" \
    --file="ARCHIVE_FILE_2.zip" \
    --output="MERGE_OUTPUT.zip"
```

## 使用方法

```text title="hangar archive merge --help"
Merge multiple hangar archive files into one new archive file

Usage:
  hangar archive merge [flags]

Examples:

# Merge multiple archive files
hangar archive merge \
	--file ARCHIVE_1.zip \
	--file ARCHIVE_2.zip \
	--output MERGE_OUTPUT.zip

Flags:
  -y, --auto-yes        answer yes automatically (used in shell script)
  -f, --file strings    archive file path
  -h, --help            help for merge
  -o, --output string   output archive file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
