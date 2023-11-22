---
title: "Q&A"
---

## About Hangar

Dependencies:

1. Hangar uses [comtainers/images](https://github.com/containers/image) dependecy to perform image copy operations.

    Since the [containers/signature](https://github.com/containers/signature) API uses C libraries, so CGO was enabled when building hangar binary, and the built binary file has dynamic link libraries.

1. Hangar uses [helm](https://github.com/helm/helm) dependencies to generate image list from helm chart.

## Hangar cache directory

Hangar uses `${HOME}/.cache/hangar_cache` to store temporary image blob files.

You need to delete `${HOME}/.cache/hangar_cache` directory manually if you force killed hangar when copying images.

## Harbor 2.X registry

Hangar will try to create **Harbor Project** automatically for [load](load/load) command if the destination registry is harbor.

You need to create **Harbor Project** manually if Hangar can't create the project automatically, or the image will fail to copy.

## Why using `zip` archive format?

See [archive](save/archive) page.

## Common Errors and Solutions

1. Since hangar uses the `zip` format archive file after version `v1.7.0`.

    The archive file created by older versions of hangar (`tar.gz`) are no longer compatible with new versions (`zip`).

    See [hangar archive](save/archive) for more information of the new archive format.

2. Error: `manifest unknown`

    The image to be copy does not exists. you can use `hangar inspect --raw docker://<IMAGE>` to check whether the image exists or not.

3. Error: `unsupported MIME type`

    The `mediaType` of the image manifest is not supported.

    Hangar supports following types of `mediaType`:

    - `application/vnd.docker.distribution.manifest.list.v2+json`
    - `application/vnd.docker.distribution.manifest.v2+json`
    - `application/vnd.docker.distribution.manifest.v1+json`
    - `application/vnd.oci.image.manifest.v1+json`
    - `application/vnd.oci.image.index.v1+json`

4. Warning: `no avaiable image for specified arch and os`

    The architecture / OS of the image to be copied does not match the architecture & OS specified by the `--arch` and `--os` parameter.
