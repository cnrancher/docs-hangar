---
title: Merge Manifest
---

Use `hangar merge-manifest` to merge multi-arch image manifest.

## Quick start

Use following command to merge multi-arch image manifest index.

```bash
#!/bin/bash

hangar merge-manifest registry.io/library/image:latest \
    registry.io/library/image:amd64 \
    registry.io/library/image:arm64
```

Use [inspect](/docs/v1.9/advanced/inspect) command to view the generated image manifest index.

## Usage

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
