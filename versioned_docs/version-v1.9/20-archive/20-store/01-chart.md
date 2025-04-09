---
title: "Store Helm Charts"
---

The `hangar archive store chart` command supports storaging OCI format Helm Charts in archive file.

> Available from v1.9.2.

## Quick Start

```bash
#!/bin/bash

# Add OCI format Helm Chart to archive file
hangar archive store chart \
    --file saved_images.zip \
    oci://example.com/chart \
    --name CHART_NAME \
    --version CHART_VERSION

# Add Helm Chart from HTTP Helm Repo
hangar archive store chart \
        --file saved_images.zip \
        https://example.com/chart/repo \
        --name CHART_NAME \
        --version CHART_VERSION

# Add tgz Helm Chart tarball to archive file
hangar archive store chart \
        --file saved_images.zip \
        ./path/to/chart.tgz
```

## Usage

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
