---
title: 查看镜像 SLSA Provenance
---

可使用 `hangar view provenance` 命令查看镜像的 [SLSA Provenance](https://docs.docker.com/build/metadata/attestations/slsa-provenance/) 信息。

## 快速上手

使用以下命令查看镜像 SLSA Provenance 信息。

```bash
#!/bin/bash

hangar view provenance cnrancher/rancher:v1.9.0
```

要求容器镜像由 Docker Buildx 构建且启用了 [SLSA Provenance](https://docs.docker.com/build/metadata/attestations/slsa-provenance/) 输出，否则执行 `hangar view provenance` 时将报错找不到 Provenance 数据。

## Usage

```txt title="hangar view provenance --help"
View image SLSA Provenance

Usage:
  hangar view provenance [flags]

Flags:
  -y, --auto-yes               answer yes automatically (used in shell script)
  -h, --help                   help for provenance
      --override-arch string   use ARCH instead of the architecture of the machine for choosing images
      --override-os string     use OS instead of the running OS for choosing images
      --tls-verify             require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
