---
title: 列出镜像 Tags
---

> v1.9.3 及后续版本可用。

使用 `hangar list-tags` 列出镜像所有 Tags。

## 快速上手

使用以下命令查询镜像的 Tags 列表。

```bash
#!/bin/bash

hangar list tags cnrancher/hangar
```

## Usage

```txt title="hangar list-tags --help"
List image tags in the registry server

Usage:
  hangar list-tags IMAGE_NAME [flags]

Examples:
hangar list-tags IMAGE_NAME

Flags:
  -h, --help         help for list-tags
      --tls-verify   require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
