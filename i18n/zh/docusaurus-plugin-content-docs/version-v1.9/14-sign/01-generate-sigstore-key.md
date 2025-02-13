---
title: "生成 Sigstore 密钥对"
---

使用 `hangar generate-sigstore-key` 生成 Sigstore 密钥对，供 [sign](/docs/v1.9/sign/sign) 命令使用。

## 快速上手

使用以下命令生成 Sigstore 密钥对。

```bash
#!/bin/bash

hangar generate-sigstore-key --prefix="sigstore"
```

生成的密钥对文件为 `sigstore.pub` 和 `sigstore.key`。

## Usage

```txt title="hangar generate-sigstore-key --help"
Generate a cosign sigstore key-pair for signing images

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
