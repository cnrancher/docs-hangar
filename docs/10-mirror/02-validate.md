---
title: "Mirror Validate Command"
---

The `hangar mirror validate` command (subcommand of `hangar mirror`) is used for ensuring the images were mirrored correctly.

## Quick Start

Verify the mirrored images according to image list file after executing the [mirror](mirror#quick-start) command:

```bash
hangar mirror validate \
    --file=example_image_list.txt \
    --source=[SOURCE_REGISTRY_URL] \
    --destination=[DESTINATION_REGISTRY_URL] \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar mirror validate --help"
Ensure the images were mirrored correctly

Usage:
  hangar mirror validate -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]

Examples:

hangar mirror validate \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination DESTINATION_REGISTRY \
        --arch amd64,arm64 \
        --os linux

Flags:
  -h, --help   help for validate

Global Flags:
  -a, --arch strings                 architecture list of images (default [amd64,arm64])
      --debug                        enable debug output
  -d, --destination string           specify the destination image registry
      --destination-project string   override all destination image projects
  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")
  -f, --file string                  image list file
      --insecure-policy              run Hangar without policy check
  -j, --jobs int                     worker number,copy images parallelly (1-20) (default 1)
      --os strings                   OS list of images (default [linux])
      --skip-login                   skip check the destination registry is logged in (used in shell script)
  -s, --source string                override the source registry in image list
      --source-project string        override all source image projects
      --timeout duration             timeout when mirror each images (default 10m0s)
      --tls-verify                   require HTTPS and verify certificates
```
