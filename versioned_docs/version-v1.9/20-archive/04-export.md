---
title: "Export images from archive files"
---

The `hangar archive export` command is used for export images from archive file into a new archive file.

> Supported from Hangar v1.7.1.

## Quick Start

Use following command to export images from the archive file created by [save](/docs/v1.9/save/save) command:

```bash
#!/bin/bash

hangar archive export \
    --file="IMAGE_LIST.txt" \
    --source="EXAMPLE_ARCHIVE.zip" \
    --destination="EXPORT_OUTPUT.zip"
```

## Usage

```text title="hangar archive export --help"
Export some images from hangar archive file into a new archive file by image list file.

Usage:
  hangar archive export [flags]

Examples:

# Export images from archive file
hangar archive export \
	--file IMAGE_LIST.txt \
	--source SAVED_ARCHIVE.zip \
	--destination EXPORT_OUTPUT.zip

Flags:
  -y, --auto-yes                 answer yes automatically (used in shell script)
  -d, --destination string       destination archive file
      --failed string            export failed image list file name (default "export-failed.txt")
  -f, --file string              image list file (required)
  -h, --help                     help for export
  -s, --source string            source archive file
      --source-registry string   override the source registry of image list file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check


```
