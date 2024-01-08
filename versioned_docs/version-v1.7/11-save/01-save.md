---
title: "Save Command"
---

The `hangar save` command is similar to the [mirror](/docs/v1.7/mirror/mirror) command. It allows you to copy multiple container images into an archive file for [load](/docs/v1.7/load/load) command use.

## Quick Start

Use following command to save multiple container images from registry server into one local archive file parallelly:

1. Prepare an image list file:

    ```txt title="example_image_list.txt"
    cnrancher/hangar:v1.7.0
    cnrancher/hangar:latest
    # Append some extra images here...
    ```

2. Save images from `docker.io` registry server into local archive file:

    ```bash
    #!/bin/bash

    hangar save \
        --file="example_image_list.txt" \
        --source="docker.io" \
        --destination="save_example.zip" \
        --arch=amd64,arm64 \
        --os=linux \
        --jobs=4
    ```

    The images will saved into `saved_example.zip`.

3. If error occured when saving some images, the save failed images will output to `save-failed.txt` by default.

    You can use the `--failed` option to specify the output file of the save failed images, and then use hangar [sync](/docs/v1.7/sync/sync) command to re-download the save failed images in `save-failed.txt` to the archive file without re-creating the whole archive file again.

## Archive File

Hangar uses the `zip` format archive file since version `v1.7.0`.

**It should be noted that archive file created by older versions of hangar (`tar.gz`) are not compatible with new versions.**

For more information about hangar archive usage, see [load](/docs/v1.7/load/load) and [archive](/docs/v1.7/archive) page.

## Usage

```txt title="hangar save --help"
Save images from registry server into local archive file

Usage:
  hangar save -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]
  hangar save [command]

Examples:

hangar save \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination SAVED_ARCHIVE.zip \
        --arch amd64,arm64 \
        --os linux

Available Commands:
  validate    Validate the saved images, ensure images were saved into archive file

Flags:
  -a, --arch strings         architecture list of images (default [amd64,arm64])
  -y, --auto-yes             answer yes automatically (used in shell script)
  -d, --destination string   file name of the output saved images (default "saved-images.zip")
  -o, --failed string        file name of the save failed image list (default "save-failed.txt")
  -f, --file string          image list file
  -h, --help                 help for save
  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)
      --os strings           OS list of images (default [linux])
  -s, --source string        override the source registry in image list
      --timeout duration     timeout when save each images (default 10m0s)
      --tls-verify           require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar save [command] --help" for more information about a command.
```
