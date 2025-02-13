---
title: "Q&A"
---

## About Hangar

Dependencies:

1. Hangar uses [containers/images](https://github.com/containers/image) dependecy to perform image copy and sign operations.<br />
    Since the [containers/signature](https://github.com/containers/signature) API uses C libraries, so CGO was enabled when building hangar binary, and the built binary file has dynamic link libraries.
1. Hangar uses [aquasecurity/trivy](https://github.com/aquasecurity/trivy) dependency to scan container image vulnerabilities.<br />
1. Hangar uses [Helm](https://github.com/helm/helm) library for generating image list from Helm Chart.
1. Hangar uses [cobra](https://github.com/spf13/cobra) library to handle commands and generate [shell completion scripts](/docs/v1.9/advanced/completion).

## Hangar cache directory

Hangar uses `${HOME}/.cache/hangar` to store temporary image blob files when saving / loading images into archive file.

Hangar uses `${HOME}/.cache/trivy` to store trivy databases when scanning images.

You need to delete `${HOME}/.cache/hangar` directory manually if you force killed hangar when copying images.

## Harbor 2.X registry

Hangar will try to create private **Harbor Project** automatically for [load](/docs/v1.9/load/load) command if the destination registry is harbor.

You need to create **Harbor Project** manually if hangar can't create the project automatically, or the image will fail to copy.

## Why using `zip` archive format?

See [hangar archive](/docs/v1.9/archive/specification) for more information of the new archive format.

Since hangar uses the `zip` format archive file after version `v1.7.0`.

**The archive file created by older versions of hangar (`tar.gz`) are no longer compatible with new versions (`zip`).**

## Will the image digest changed after copying by hangar?

Starting from `v1.7.0`, hangar will try to do not change the copied image digest.

Only when the source image is deprecated [Docker manifest Version2 Schema1](https://distribution.github.io/distribution/spec/deprecated-schema-v1/) (`application/vnd.docker.distribution.manifest.v1+json`), hangar will update its manifest `mediaType` to [Docker manifest Version2 Schema2](https://distribution.github.io/distribution/spec/manifest-v2-2/) (`application/vnd.docker.distribution.manifest.v2+json`) when copying the container image, and the copied image digest will be changed.

## Common Errors and Solutions

### Error: `manifest unknown`

The image to be copy does not exists. you can use `hangar inspect --raw docker://<IMAGE>` to check whether the image exists or not.

### Error: `unsupported MIME type`

The `mediaType` of the image manifest is not supported.

Hangar supports following types of `mediaType`:

- `application/vnd.docker.distribution.manifest.list.v2+json`
- `application/vnd.docker.distribution.manifest.v2+json`
- `application/vnd.docker.distribution.manifest.v1+json`
- `application/vnd.oci.image.manifest.v1+json`
- `application/vnd.oci.image.index.v1+json`

### Error: `open /etc/containers/policy.json: no such file or directory`

The policy config file `/etc/containers/policy.json` does not exists, you can obtain a default policy file at [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json).

Or you can execute hangar with `--insecure-policy` option.

### Warning: `no avaiable image for specified arch and os`

The architecture / OS of the image to be copied does not match the architecture & OS specified by the `--arch` and `--os` parameter.

Example：the image to be copied only contains `amd64` architecture, but `--arch` option of hangar is `arm64`.

This warning message will not affect the image copy process. When this warning message shows, it is only used to inform that this container image has not been copied.

### Error when copy images to Harbor 2.X registry: `authentication required`

Check whether the Harbor Project exists. You need to create Harbor Project manually when running `mirror` command.

### Error when copy images to Harbor 2.X registry: `unknown: http status code: 404, body: {"errors":[{"code":"MANIFEST_UNKNOWN","message":"manifest unknown"...`

By refer to [issue](https://github.com/goharbor/harbor/issues/14902), run garbage collection manually to resolve this problem.

### Error: `server gave HTTP response to HTTPS client`

Add `--tls-verify=false` option if registry server is using self-signed certificate or HTTP.

### Error: `writing sigstore attachments is disabled by configuration`

You need to explicitly set the `use-sigstore-attachments` of [registries configuration](https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md#individual-configuration-sections) to `true` to allow Hangar upload sigstore signature when signing images.

You can obtain the example `/etc/containers/registries.d/default.yaml` registry configuration file from [here](https://github.com/cnrancher/hangar/blob/main/package/registries.d/default.yaml).

### Error: `Signature for identity ... is not accepted`

See [validate the mirrored image signature](/docs/v1.8/sign/validate#validate-the-mirrored-image-signature) for more information.
