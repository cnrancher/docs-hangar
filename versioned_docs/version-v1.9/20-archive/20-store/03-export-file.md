---
title: "Export Custom File from Archive"
---

The `hangar archive export file` command exports custom file from archive file.

> Available from v1.9.2.

## Quick Start

```bash
#!/bin/bash

# Extract the custom file from archive file
hangar archive export file \
        --name FILENAME \
        --file ARCHIVE.zip
```

## Usage

```text title="hangar archive ls --help"
Extract the custom file from Hangar Archive

Usage:
  hangar archive export file [flags]

Aliases:
  file, f

Examples:
# Extract the custom file from archive file
hangar archive export file \
        --name FILENAME \
        --file ARCHIVE.zip

Flags:
  -y, --auto-yes      answer yes automatically (used in shell script)
  -f, --file string   hangar archive file
  -h, --help          help for file
  -n, --name string   file name to be extracted from archive file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
