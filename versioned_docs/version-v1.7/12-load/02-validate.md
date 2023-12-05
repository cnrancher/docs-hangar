---
title: "Load Validate Command"
---

The `hangar load validate` command (subcommand of `hangar load`) is used for ensuring the images were loaded to registry server.

## Quick Start

Verify the loaded images according to image list file after executing the [load](/docs/v1.7/load/load#quick-start) command:

```bash
#!/bin/bash

hangar load validate \
    --file="example_image_list.txt" \
    --source="save_example.zip" \
    --destination=DESTINATION_REGISTRY_URL \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar load validate --help"
Validate the loaded images, ensure images were loaded to registry server

Usage:
  hangar load validate -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]

Examples:

hangar load validate \
        --file IMAGE_LIST.txt \
        --source SAVED_ARCHIVE.zip \
        --destination REGISTRY_URL \
        --arch amd64,arm64 \
        --os linux

Flags:
  -h, --help   help for validate

Global Flags:
  -a, --arch strings             architecture list of images (default [amd64,arm64])
      --debug                    enable debug output
  -d, --destination string       destination registry url
  -o, --failed string            file name of the load failed image list (default "load-failed.txt")
  -f, --file string              image list file (optional: load all images from archive if not provided)
      --insecure-policy          run Hangar without policy check
  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)
      --os strings               OS list of images (default [linux])
      --project string           override all destination image projects
      --skip-login               skip check the destination registry is logged in (used in shell script)
  -s, --source string            saved archive filename
      --source-registry string   override the source registry of image list
      --timeout duration         timeout when save each images (default 10m0s)
      --tls-verify               require HTTPS and verify certificates
```
