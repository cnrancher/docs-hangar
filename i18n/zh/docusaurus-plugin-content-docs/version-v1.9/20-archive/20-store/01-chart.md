---
title: "存储 Helm Chart"
---

`hangar archive store chart` 命令用于向压缩包文件中存储 OCI 格式的 Helm Chart 镜像。

> v1.9.2 及后续版本可用。

## 快速上手

```bash
#!/bin/bash

# 添加 OCI 格式的 Helm Chart 镜像至压缩包文件中
hangar archive store chart \
    --file saved_images.zip \
    oci://example.com/chart \
    --name CHART_NAME \
    --version CHART_VERSION

# 从 HTTP Helm 仓库中添加 Helm Chart
hangar archive store chart \
        --file saved_images.zip \
        https://example.com/chart/repo \
        --name CHART_NAME \
        --version CHART_VERSION

# 将本地的 Helm Chart tgz 包添加至镜像包中
hangar archive store chart \
        --file saved_images.zip \
        ./path/to/chart.tgz
```

## 使用方法

```text title="hangar archive ls --help"
Store OCI format Helm Chart in archive

Usage:
  hangar archive store chart [flags]

Aliases:
  chart, charts, c

Examples:
# Add OCI Helm Chart to archive file
hangar archive store chart \
        --file saved_images.zip \
        oci://example.com/chart \
        --name NAME --version VERSION

# Add multiple tgz Helm Charts to archive file
hangar archive store chart \
        --file saved_images.zip \
        ./path/to/chart1.tgz \
        ./path/to/chart2.tgz

# Add Helm Chart from HTTP Helm Repo
hangar archive store chart \
        --file saved_images.zip \
        https://example.com/chart/repo \
        --name NAME --version VERSION

Flags:
  -f, --file string      Path to the Hangar archive file (zip)
  -h, --help             help for chart
  -n, --name string      Chart name of the helm repository
      --tls-verify       Require HTTPS and verify certificates (default true)
  -v, --version string   Chart version (optional)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
