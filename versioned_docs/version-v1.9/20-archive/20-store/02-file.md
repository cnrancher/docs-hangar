---
title: "Store Custom Files"
---

The `hangar archive store file` command supports storaging OCI format custom files in archive file.

> Available from v1.9.2.

## Quick Start

```bash
#!/bin/bash

# Add files to archive
hangar archive store file \
        --file saved_images.zip \
        ./path/to/FILENAME
```

To extract the custom file stored in the zip archive, use [export file](/docs/v1.9/archive/store/export-file) command.

## Usage

```text title="hangar archive ls --help"
Store OCI format Custom File in archive

Usage:
  hangar archive store file [flags]

Aliases:
  file, files, f

Examples:
# Add files to archive
hangar archive store file \
        --file saved_images.zip \
        ./path/to/file1.txt \
        ./path/to/file2.txt \

# Add file from URL
hangar archive store file \
        --file saved_images.zip \
        https://example.com/path/to/file.txt

Flags:
  -f, --file string   Path to the Hangar archive file (zip)
  -h, --help          help for file
      --tls-verify    Require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
