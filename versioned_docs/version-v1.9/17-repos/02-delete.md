---
title: Delete image tag
---

> Available from v1.9.3.

Use `hangar delete` to image from registry server.

## Quick start

Use following command to delete image.

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
