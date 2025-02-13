---
title: "从镜像包中导出部分镜像"
---

`hangar archive export` 命令用于从一个镜像包中，根据镜像列表文件导出部分镜像至一个新的镜像包中。

> Hangar v1.7.1 及后续版本支持此功能。

## 快速上手

使用以下命令，从 Hangar [save](/docs/v1.9/save/save) 命令创建的镜像包中导出部分镜像至新的镜像包中。

```bash
#!/bin/bash

hangar archive export \
    --file="IMAGE_LIST.txt" \
    --source="EXAMPLE_ARCHIVE.zip" \
    --destination="EXPORT_OUTPUT.zip"
```

## 使用方法

```text title="hangar archive export --help"
Export some images from hangar archive file into a new archive file by image list file.

Usage:
  hangar archive export [flags]

Examples:

# Export images from archive file
hangar archive export \
	--file IMAGE_LIST.txt \
	--source SAVED_ARCHIVE.zip \
	--destination EXPORT_OUTPUT.zip

Flags:
  -y, --auto-yes                 answer yes automatically (used in shell script)
  -d, --destination string       destination archive file
      --failed string            export failed image list file name (default "export-failed.txt")
  -f, --file string              image list file (required)
  -h, --help                     help for export
  -s, --source string            source archive file
      --source-registry string   override the source registry of image list file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
