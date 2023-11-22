---
title: "获取压缩包中存储的镜像信息"
---

可使用 `hangar archive ls` 命令查看压缩包中存储的镜像信息。

## 快速上手

使用以下命令查看 [save](../save/save#快速上手) 创建的压缩包中包含的镜像信息：

```bash
hangar archive ls --file="save_example.zip"
```

输出的信息内容样例如下：

```txt title="hangar archive ls -f save_example.zip"
[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
[15:58:34] [INFO] Index version: v1.2.0
[15:58:34] [INFO] Images:
   1 | docker.io/cnrancher/hangar:v1.7.0 | arm64,amd64 | linux
   2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux
```

## 使用方法

```text title="hangar archive --help"
Show images (index) in Hangar archive file

Usage:
  hangar archive ls [flags]

Examples:

# Show images in archive file:
hangar archive ls -f SAVED_ARCHIVE.zip

Flags:
  -f, --file string   Path to the Hangar archive file (.zip)
  -h, --help          help for ls
      --json          Output in json format

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
