---
title: "Merge archive files"
---

The `hangar archive merge` command is used for merging archive files into a new archive file.

> Supported from Hangar v1.7.1.

## Quick Start

Use following command to merge archive files created by [save](/docs/v1.7/save/save) command:

```bash
#!/bin/bash

hangar archive merge \
    --file="ARCHIVE_FILE_1.zip" \
    --file="ARCHIVE_FILE_2.zip" \
    --output="MERGE_OUTPUT.zip"
```

## Usage

```text title="hangar archive merge --help"
Merge multiple hangar archive files into one new archive file

Usage:
  hangar archive merge [flags]

Examples:

# Merge multiple archive files
hangar archive merge \
	--file ARCHIVE_1.zip \
	--file ARCHIVE_2.zip \
	--output MERGE_OUTPUT.zip'

Flags:
  -y, --auto-yes        answer yes automatically (used in shell script)
  -f, --file strings    archive file path
  -h, --help            help for merge
  -o, --output string   output archive file

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

```
