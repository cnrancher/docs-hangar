---
title: "Hangar - Copy container images fastly"
---

# Hangar

Hangar is a **simple** and **easy-to-use** command line utility for mirroring multi-architecture & multi-platform container images between container image registries. Aiming to simplify the process of copying container images between image registries.

- Hangar allows to copy container images without container runtime (daemon).
- Not restricted by the architecture and OS of the runtime system, it supports running on Linux/Unix systems.
- Supports both docker images and [OCI images](https://github.com/opencontainers/image-spec).
- Hangar supports to copy container images parallelly to improve performance.
- Save and load images with archive files to allow the setup of registry server in Air-Gapped installation.

Hangar provides following functions：

- Mirror container images between image registries (see [mirror](/docs/v1.7/mirror/mirror) command).
- Save container images into an archive file, and then upload them to the image registry server (see [save](/docs/v1.7/save/save) and [load](/docs/v1.7/load/load) commands). Designed to use for Air-Gapped (offline) installation.
- Validate commands to verify that the container images were copied correctly (see [validate](/docs/v1.7/advanced/validate) subcommands).
- Other advanced commands for image list files and archive files (see [advanced usage](/docs/v1.7/advanced/)).

## Documents

The detailed usage of Hangar and getting started instruction is available in [Documents](/docs/v1.7/).

## Dependencies

Starting from `v1.7.0`, Hangar has removed all third-party executable binary dependencies to improve the speed of container image copying and reduce performance consumption.

## Contributing

If you encounter any issues or have suggestions for improvement while using Hangar, feel free to open an [issue](https://github.com/cnrancher/hangar/issues) or [pull request](https://github.com/cnrancher/hangar/pulls). Your contributions are welcomed!
