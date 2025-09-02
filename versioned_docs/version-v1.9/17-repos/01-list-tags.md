---
title: List tags
---

> Available from v1.9.3.

Use `hangar list-tags` to list tags from image repository.

## Quick start

Use following command to list image tags.

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
