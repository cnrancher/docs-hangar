---
title: 镜像删除
---

> v1.9.3 及后续版本可用。

使用 `hangar delete` 删除镜像 Tag。

## 快速上手

使用以下命令删除镜像。

```bash
#!/bin/bash

hangar delete docker://REGISTRY/cnrancher/hangar:v1.9.3
```

## Usage

```txt title="hangar delete --help"
Delete image from the registry server

Usage:
  hangar delete IMAGE_NAME [flags]

Examples:
hangar delete IMAGE_NAME

Flags:
  -y, --auto-yes     answer yes automatically (used in shell script)
  -h, --help         help for delete
      --tls-verify   require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
