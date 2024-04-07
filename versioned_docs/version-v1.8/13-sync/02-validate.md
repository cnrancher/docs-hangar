---
title: "Sync Validate Command"
---

The `hangar sync validate` command (subcommand of `hangar sync`) is similar to `save validate` command. It is used for ensuring the extra images were added into archive file.

## Quick Start

Verify the synced (appended) images according to image list file after executing the [sync](/docs/v1.8/sync/sync#quick-start) command:

```bash
#!/bin/bash

hangar sync validate \
    --file="extra_image_list.txt" \
    --source="docker.io" \
    --destination="save_example.zip" \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar sync validate --help"
Validate the sync (append) images, ensure images were saved into archive file

Usage:
  hangar sync validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]

Examples:

hangar sync validate \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Flags:
  -h, --help   help for validate

Global Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
      --debug                enable debug output
  -d, --destination string   file name of the destination archive file
  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")
  -f, --file string          image list file
      --insecure-policy      run Hangar without policy check
  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates
```
