---
title: View image SBOM data
---

Use `hangar view sbom` command to view the [SBOM](https://docs.docker.com/build/metadata/attestations/sbom/) data of the image.

## Quick start

Use following command to view the image SBOM data.

```bash
#!/bin/bash

hangar view sbom cnrancher/rancher:v1.9.0
```

The container image should be built by Docker Buildx and the [SBOM](https://docs.docker.com/build/metadata/attestations/sbom/) output is enabled, or `hangar view sbom` will report unable to find the SBOM data of the image.

## Usage

```txt title="hangar view sbom --help"
View image SBOM data

Usage:
  hangar view sbom [flags]

Flags:
  -y, --auto-yes               answer yes automatically (used in shell script)
  -h, --help                   help for sbom
  -o, --output string          output filename (default: STDOUT)
      --override-arch string   use ARCH instead of the architecture of the machine for choosing images
      --override-os string     use OS instead of the running OS for choosing images
      --tls-verify             require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
