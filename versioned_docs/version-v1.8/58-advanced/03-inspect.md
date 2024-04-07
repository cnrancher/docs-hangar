---
title: "Inspect the image manifest"
---

`hangar inspect` command allows to inspect the container image manifest (similar to [skopeo inspect](https://github.com/containers/skopeo/blob/main/docs/skopeo-inspect.1.md)).

## Quick Start

Use `--raw` option to view the container image RAW manifest index of `nginx` image on docker hub:

```bash
hangar inspect --raw docker://nginx:latest
```

Use `--config` option to view the container image config manifest of `nginx` image on docker hub:

```bash
hangar inspect --config docker://nginx:latest
```

## Usage

```txt title="hangar inspect --help"
Inspect provides basic functions of 'skopeo inspect' to inspect image manifest

Usage:
  hangar inspect IMAGR_REFERENCE [flags]

Examples:
# Inspect image manifest:
hangar inspect [image-reference]

# Inspect RAW docker image maniefest:
hangar inspect docker://docker.io/cnrancher/hangar:latest --raw

Flags:
      --config                    output raw configuration
  -h, --help                      help for inspect
      --override-arch string      use ARCH instead of the architecture of the machine for choosing images
      --override-os string        use OS instead of the running OS for choosing images
      --override-variant string   use VARIANT instead of the running variant for choosing images
      --raw                       output raw manifest
      --tls-verify                require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
