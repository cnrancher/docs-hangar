---
title: "Mirror Command"
---

`hangar mirror` command is for mirror multiple container images between image registry servers. It allows you to specify architecture and platforms when copying image, and use multiple workers to copy images parallelly.

## Quick Start

Use following command to mirror multiple images between image registry servers parallelly:

```bash
hangar mirror \
    --file=IMAGE_LIST.txt \
    --source=[SOURCE_REGISTRY_URL] \
    --destination=[DESTINATION_REGISTRY_URL] \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## Usage

```txt title="hangar mirror --help"
Mirror images between registry servers

Usage:
  hangar mirror -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]
  hangar mirror [command]

Examples:
# Mirror images from SOURCE REGISTRY to DESTINATION REGISTRY.
hangar mirror \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination DESTINATION_REGISTRY \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Ensure the images were mirrored correctly

Flags:
  -a, --arch strings                 architecture list of images (default [amd64,arm64])
  -d, --destination string           specify the destination image registry
      --destination-project string   override all destination image projects
  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")
  -f, --file string                  image list file
  -h, --help                         help for mirror
  -j, --jobs int                     worker number, copy images parallelly (1-20) (default 1)
      --os strings                   OS list of images (default [linux])
      --skip-login                   skip check the destination registry is logged in (used in shell script)
  -s, --source string                override the source registry in image list
      --source-project string        override all source image projects
      --timeout duration             timeout when mirror each images (default 10m0s)
      --tls-verify                   require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar mirror [command] --help" for more information about a command.
```

## Image List Format

`hangar mirror` command supports two different kinds of image list formats, see [Image List Formats](image-list-format) for image list format specification.
