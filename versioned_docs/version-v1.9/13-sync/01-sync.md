---
title: "Sync Command"
---

The `hangar sync` command is similar to the [save](/docs/v1.9/save/save) command, it allows you to sync (append) extra images into the archive file without re-downloading all images.

If some images fail to download when running the [save](/docs/v1.9/save/save) command, you can use the `sync` command to try to re-download the failed images to the archive file without re-downloading all images.

## Quick Start

Use following command to append new container images to the existing archive file created by [save](/docs/v1.9/save/save#quick-start) command parallelly:

```bash
#!/bin/bash

hangar sync \
    --file="extra_image_list.txt" \
    --source="docker.io" \
    --destination="save_example.zip" \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar sync --help"
Sync (append) images from registry server into local archive file

Usage:
  hangar sync -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]
  hangar sync [command]

Examples:

hangar sync \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the sync (append) images, ensure images were saved into archive file

Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
  -d, --destination string   file name of the destination archive file
  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")
  -f, --file string          image list file
  -h, --help                 help for sync
  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
      --provenance           copy SLSA provenance (default true)
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar sync [command] --help" for more information about a command.
```
