---
title: "Hangar Tutorial"
sidebar_position: 0
---

# Hangar Tutorial

## Getting Started

1. Setup a private image [registry](https://distribution.github.io/distribution/).
    ```bash
    docker run -d -p 5000:5000 --name registry registry:2
    ```
1. Run hangar in `cnrancher/hangar` docker image:
    ```bash
    docker run -it -v $(pwd):/hangar --network=host cnrancher/hangar:latest
    ```
1. Create an example image list file for mirror images from Docker Hub to your private image registry:

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.7.0
    ```

    Use Hangar [mirror](/v1.7/mirror/mirror) command to mirror images from Docker Hub public registry to your *destination registry server*:

    ```bash
    hangar mirror \
        -f example_image_list.txt \
        -s 'docker.io' \
        -d '127.0.0.1:5000' \
        --arch amd64,arm64 \
        --os linux \
        --tls-verify=false
    ```

1. You can use the [inspect](advanced/inspect) command to inspect the copied image manifest in the destination registry:

    ```sh
    hangar inspect docker://127.0.0.1:5000/cnrancher/hangar:latest --raw
    {
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "schemaVersion": 2,
      "manifests": [
        {
        "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
    ...
    ```

## Configuration

The configuration file of hangar is compatible with [containers/image](https://github.com/containers/image/tree/main/docs) configuration files.

- `/etc/containers/policy.json`: The default trust policy file, use `--insecure-policy` option to skip policy check.

    The default policy file can be obtained at [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json).

## Commands

- [mirror](mirror/mirror): Mirror container images between image registries.
- [save](save/save): Save container images from registry server into archive file.
- [load](load/load): Load container images from archive file to registry server.
- [sync](sync/sync): Sync (append) extra images into archive file.
- [validate](advanced/validate): Subcommands of `mirror/save/load/sync` commands for validating the copied images.

Hanagr also provides some extra commands for advanced usage, see [advanced](advanced).

## Supported Registries

Hangar can work with API V2 container image registries:
- [Docker Registry](https://docs.docker.com/registry/)
- [Harbor 2.X](https://goharbor.io/docs/)
- Other Public Cloud Registries: Tencent Cloud TCR, Alibaba Cloud ACR, etc...

You need to ensure that the registry supports following mediaTypes:
- `application/vnd.docker.distribution.manifest.list.v2+json`
- `application/vnd.oci.image.index.v1+json`

> Harbor 1.X does not support these mediaTypes, you need to upgrade to Harbor 2.X to use Hangar.

## Q&A

For frequently asked questions, see [Q&A](questions).
