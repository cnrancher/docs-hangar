---
title: Merge Manifest
---

使用 `hangar merge-manifest` 命令整合多架构容器镜像 Manifest 索引。

## 快速上手

执行以下命令整合多架构容器镜像索引。

```bash
#!/bin/bash

hangar merge-manifest registry.io/library/image:latest \
    registry.io/library/image:amd64 \
    registry.io/library/image:arm64
```

可使用 [Inspect](/docs/v1.9/advanced/inspect) 命令查看生成的容器镜像 Manifest 索引。

## 使用方法

```txt title="hangar merge-manifest --help"
Merge multi-arch images manifest index

Usage:
  hangar merge-manifest [flags]

Examples:
# Merge multi-arch image manifest:
hangar merge-manifest [IMAGE_NAME] [IMAGES]

# Example:
hangar merge-manifest registry.io/library/image:latest \
        registry.io/library/image:amd64 \
        registry.io/library/image:arm64

Flags:
      --dry-run      dry run
  -h, --help         help for merge-manifest
      --tls-verify   require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
