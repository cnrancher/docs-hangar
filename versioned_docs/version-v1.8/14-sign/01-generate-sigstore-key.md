---
title: "Generate sigstore key"
---

Use `hangar generate-sigstore-key` to generate a sigstore key-pair for [sign](/docs/v1.8/sign/sign) command use.

## Quick Start

Use following command to generate a sigstore key-pair.

```bash
#!/bin/bash

hangar generate-sigstore-key --prefix="sigstore"
```

The generated sigstore key-pair is `sigstore.pub` and `sigstore.key`.

## Usage

```txt title="hangar generate-sigstore-key --help"
Generate a sigstore key-pair for signing images

Usage:
  hangar generate-sigstore-key -p NAME [flags]

Examples:
hangar generate-sigstore-key --prefix sigstore

Flags:
  -y, --auto-yes                 answer yes automatically (used in shell script)
  -h, --help                     help for generate-sigstore-key
      --passphrase-file string   read the passphrase for the private key from file
  -p, --prefix string            prefix name for the generated sigstore '.pub' and '.key' files (default "sigstore")

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
