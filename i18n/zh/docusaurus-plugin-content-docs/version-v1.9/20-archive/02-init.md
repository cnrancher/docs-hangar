---
title: "Archive init"
---

初始化一个空的压缩包文件，以供 [sync](/docs/v1.9/sync/sync) 或 [archive-store](/docs/v1.9/archive/store) 命令使用。

> v1.9.2 及后续版本起可用。

## 快速上手

```bash
hangar archive init ./example.zip
```

## 使用方法

```text title="hangar archive init --help"
Init an empty Archive file for use by sync/archive-store commands.

Usage:
  hangar archive init [flags]

Aliases:
  init, i

Examples:
hangar archive init ./ARCHIVE_NAME.zip

Flags:
  -h, --help   help for init

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```