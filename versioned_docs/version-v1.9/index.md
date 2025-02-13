---
title: "Hangar Tutorial"
sidebar_position: 0
---

# Hangar Tutorial

## Getting Started

Follow this instruction to setup a demo [distribution registry server](https://distribution.github.io/distribution/about/deploying/) and use Hangar to copy images.

1. Setup a demo [registry](https://distribution.github.io/distribution/about/deploying/) server.
    ```bash
    docker run -d -p 5000:5000 --restart=always --name registry registry:2
    ```
1. Run Hangar inside the container image:
    ```bash
    docker run -it -v $(pwd):/hangar --network=host cnrancher/hangar:latest
    ```
1. Create an image list file for copy images from the [Docker Hub](https://hub.docker.com) to the demo registry server:

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.9.0
    ```

    Use Hangar [mirror](/docs/v1.8/mirror/mirror) command to copy images from Docker Hub to the demo registry server:

    ```bash
    hangar mirror \
        -f 'example_image_list.txt' \
        -s 'docker.io' \
        -d '127.0.0.1:5000' \
        --arch amd64,arm64 \
        --os linux \
        --tls-verify=false
    ```

    :::note

    By default, the registry server can be login with any username and password.

    You can configure the authentication config of the registry server by refer to [Distribution Registry Token Authentication](https://distribution.github.io/distribution/spec/auth/).

    :::

1. Use the hangar [inspect](advanced/inspect) command to inspect the copied image manifest index:

    ```sh
    hangar inspect docker://127.0.0.1:5000/cnrancher/hangar:latest --raw --tls-verify=false
    {
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "schemaVersion": 2,
      "manifests": [
        {
        "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
    ......
    ```

## Best Practice

You can refer to the [Installation Guide](/docs/v1.8/install) to install hangar on your system.

For more detailed usage example of hangar to setup a private image registry server with Kubernetes clusters, see [Hangar Best Practice](/docs/v1.8/bestpractice).

## Configuration

The configuration file of hangar is compatible with the [containers/image](https://github.com/containers/image/tree/main/docs) configuration files.

- `/etc/containers/policy.json`:

    The default trust policy file, use `--insecure-policy` option to skip policy check.

    The default policy file can be obtained at [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json).

- `/etc/containers/registries.d/default.yaml`:

    The default [registries configuration](https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md) file.

## Commands

- [mirror](mirror/mirror): Mirror container images between image registries.
- [save](save/save): Save container images from registry server into archive file.
- [load](load/load): Load container images from archive file to registry server.
- [sync](sync/sync): Sync (append) extra images into archive file.
- [sign](sign/sign): Sign container images with sigstore key-pair.
- [scan](scan/scan): Scan container image vulnerabilities.
- [view](view): View container image SBOM/Provenance data.
- [archive](archive/): Operations for the Hangar archive file.
- [generate-list](generate-list/): Generate image list file for Rancher.
Hanagr also provides some extra commands for advanced usage, see [advanced usage](advanced).

## Supported Registries

Hangar can work with API V2 container image registries:
- [Registry](https://distribution.github.io/distribution/)
- [Docker Hub](https://hub.docker.com/), [quay.io](https://quay.io/), [ghcr.io](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Harbor 2.X](https://goharbor.io/docs/)
- Other Public Cloud infrastructure providers: [AWS](https://aws.amazon.com/ecr/), [Google Cloud](https://cloud.google.com/artifact-registry), [Tencent Cloud TCR](https://www.tencentcloud.com/products/tcr), [Alibaba Cloud ACR](https://www.alibabacloud.com/help/en/acr/), etc...

You need to ensure that the registry supports following mediaTypes:
- `application/vnd.docker.distribution.manifest.list.v2+json`
- `application/vnd.oci.image.index.v1+json`

:::note

[Harbor 1.X](https://goharbor.io/docs/1.10/) does not support these mediaTypes, you need to [upgrade to Harbor 2.X](https://goharbor.io/docs/2.3.0/administration/upgrade/) to use hangar.

:::

## Q&A

For frequently asked questions, see [Q&A](questions).
