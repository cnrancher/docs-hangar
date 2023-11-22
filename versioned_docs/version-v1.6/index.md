---
title: "Hangar Tutorial"
sidebar_position: 0
---

## Commands

- [mirror](mirror/mirror): Mirror container images between image registries.
- [save](save/save): Download the container image to the local file and generate a compressed package.
- [load](load/load): Load the file created by [save](save/save) command onto the private registry.
- [convert-list](advanced-usage/convert-list): Convert image list from `rancher-images.txt` to format used by [mirror](mirror/mirror) command.
- [mirror-validate](mirror/mirror-validate): Validate the mirrored image.
- [load-validate](load/load-validate): Validate the loaded image.
- [sync](advanced-usage/sync): Sync extra images into image cache folder.
- [compress](advanced-usage/compress): Compress the image cache folder.
- [decompress](advanced-usage/decompress): Decompress tarball created by [save](save/save) command.
- [generate-list](advanced-usage/generate-list): Generate an image-list by KDM data and Chart repositories.

## Supported Registries

- Docker Hub
- Harbor V2
    > Hangar does not support Harbor V1 registry
- Public cloud platforms: Tencent Cloud TCR, Alibaba Cloud ACR, etc

## Environment

Hangar supports running in container, see [docker-images](docker-images).

To install hangar in your system, please install `skopeo` dependency:

1. Linux / macOS, architecture amd64 / arm64
1. Install [skopeo](https://github.com/containers/skopeo/blob/main/install)
1. Set environment variables (optional):

    When running Mirror / Save / Load, following environment variables sets the username, password and URL of the source / destination registry
    (used in CI scenario).

    - `SOURCE_USERNAME`: Source registry username
    - `SOURCE_PASSWORD`: Source registry password
    - `SOURCE_REGISTRY`: Source registry address
    - `DEST_USERNAME`: Destination registry username
    - `DEST_PASSWORD`: Destination registry password
    - `DEST_REGISTRY`: Destination registry address

    > If not specifying username / password, hangar will also try to obtain the username and password of the registry from the `~/.docker/config.json` file.

    If the user name and password are not set, hangar will prompt to enter the user name and password manually.

1. When the registry server is HTTP or using a self-signed insecure SSL Certificate, you can add `--tls-verify=false` global option to skip tls verify.

## Tests

See [test docs](dev/test).

## FAQ

[FAQ](questions)

## Build

> The stable release can be obtained from the [Releases page](https://github.com/cnrancher/hangar/releases).

Build executable binaries: [build](dev/build)
