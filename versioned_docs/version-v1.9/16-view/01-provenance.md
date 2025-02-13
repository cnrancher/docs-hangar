---
title: View image SLSA Provenance
---

Use `hangar view provenance` to view the [SLSA Provenance](https://docs.docker.com/build/metadata/attestations/slsa-provenance/) data of container image。

## Quick start

Use following command to view SLSA Provenance of container image.

```bash
#!/bin/bash

hangar view provenance cnrancher/rancher:v1.9.0
```

The container image should be built by Docker Buildx and the [SLSA Provenance](https://docs.docker.com/build/metadata/attestations/slsa-provenance/) output is enabled, or `hangar view provenance` will report unable to find the provenance data of the image.

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
