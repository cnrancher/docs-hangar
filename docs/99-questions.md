---
title: "Q&A"
---

## About Hangar

Dependencies:

1. Hangar uses [containers/images](https://github.com/containers/image) dependecy to perform image copy operations.<br />
    Since the [containers/signature](https://github.com/containers/signature) API uses C libraries, so CGO was enabled when building hangar binary, and the built binary file has dynamic link libraries.
1. Hangar uses [Helm](https://github.com/helm/helm) library for generating image list from Helm Chart.
1. Hangar uses [cobra](https://github.com/spf13/cobra) library to handle commands and generate [shell completion scripts](advanced-usage/completion).

## Hangar cache directory

Hangar uses `${HOME}/.cache/hangar_cache` to store temporary image blob files.

You need to delete `${HOME}/.cache/hangar_cache` directory manually if you force killed hangar when copying images.

## Harbor 2.X registry

Hangar will try to create private **Harbor Project** automatically for [load](load/load) command if the destination registry is harbor.

You need to create **Harbor Project** manually if Hangar can't create the project automatically, or the image will fail to copy.

## Why using `zip` archive format?

See [archive](save/archive) page.

## Common Errors and Solutions

1. Since hangar uses the `zip` format archive file after version `v1.7.0`.

    The archive file created by older versions of hangar (`tar.gz`) are no longer compatible with new versions (`zip`).

    See [hangar archive](save/archive) for more information of the new archive format.

1. Error: `manifest unknown`

    The image to be copy does not exists. you can use `hangar inspect --raw docker://<IMAGE>` to check whether the image exists or not.

1. Error: `unsupported MIME type`

    The `mediaType` of the image manifest is not supported.

    Hangar supports following types of `mediaType`:

    - `application/vnd.docker.distribution.manifest.list.v2+json`
    - `application/vnd.docker.distribution.manifest.v2+json`
    - `application/vnd.docker.distribution.manifest.v1+json`
    - `application/vnd.oci.image.manifest.v1+json`
    - `application/vnd.oci.image.index.v1+json`

1. Error: `open /etc/containers/policy.json: no such file or directory`

    The policy config file `/etc/containers/policy.json` does not exists, you can obtain a default policy file at [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json).

    Or you can execute hangar with `--insecure-policy` option.

1. Warning: `no avaiable image for specified arch and os`

    The architecture / OS of the image to be copied does not match the architecture & OS specified by the `--arch` and `--os` parameter.

    Example：the image to be copied only contains `amd64` architecture, but `--arch` option of hangar is `arm64`.

    This warning message will not affect the image copy process. When this warning message shows, it is only used to inform that this container image has not been copied.

1. Error when copy images to Harbor 2.X registry: `authentication required`

    Check whether the Harbor Project exists. You need to create Harbor Project manually when running `mirror` command.

1. Error: `server gave HTTP response to HTTPS client`

    Add `--tls-verify=false` option if registry server is using self-signed certificate or HTTP.
