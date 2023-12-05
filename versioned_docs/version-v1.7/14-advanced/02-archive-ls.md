---
title: "List images in the archive file"
---

The `hangar archive ls` command supports listing the images in the archive file.

## Quick Start

Use following command to list images in archive file created by [save](/docs/v1.7/save/save) command:

```bash
#!/bin/bash

hangar archive ls --file="save_example.zip"
```

The output information is like:

```txt title="hangar archive ls -f save_example.zip"
[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST
[15:58:34] [INFO] Index version: v1.2.0
[15:58:34] [INFO] Images:
   1 | docker.io/cnrancher/hangar:v1.7.0 | arm64,amd64 | linux
   2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux
```

## Usage

```text title="hangar archive --help"
Show images (index) in Hangar archive file

Usage:
  hangar archive ls [flags]

Examples:

# Show images in archive file:
hangar archive ls -f SAVED_ARCHIVE.zip

Flags:
  -f, --file string   Path to the Hangar archive file (.zip)
  -h, --help          help for ls
      --json          Output in json format

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
