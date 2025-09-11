---
title: "Inspect image manifest"
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

Use the [inspect list](/docs/v1.9/view/inspect-list/) command to inspect multiple container image informations.

## Usage

```txt title="hangar inspect --help"
Inspect image manifests

Usage:
  hangar inspect IMAGE_REFERENCE [flags]
  hangar inspect [command]

Aliases:
  inspect, i

Examples:
# Inspect image manifest:
hangar inspect [image-reference]

# Inspect RAW docker image maniefest:
hangar inspect docker://docker.io/cnrancher/hangar:latest --raw

# Inspect multiple container image by image-list file:
hangar inspect list -f image-list.txt

Available Commands:
  list        Inspect multiple container images by image-list file

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

Use "hangar inspect [command] --help" for more information about a command.
```
