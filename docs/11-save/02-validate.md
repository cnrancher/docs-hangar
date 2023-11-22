---
title: "Save Validate Command"
---

The `hangar save validate` command (subcommand of `hangar save`) is used for ensuring the images were saved into archive file correctly.

## Quick Start

Verify the saved images according to image list file after executing the [save](save#quick-start) command:

```bash
hangar save validate \
    --file example_image_list.txt \
    --source=docker.io \
    --destination=save_example.zip \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar save validate --help"
Validate the saved images, ensure images were saved into archive file

Usage:
  hangar save validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]

Examples:

hangar save validate \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Flags:
  -h, --help   help for validate

Global Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
  -y, --auto-yes             answer yes automatically (used in shell script)
      --debug                enable debug output
  -d, --destination string   file name of the output saved images (default "saved-images.zip")
  -o, --failed string        file name of the save failed image list (default "save-failed.txt")
  -f, --file string          image list file
      --insecure-policy      run Hangar without policy check
  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates
```
