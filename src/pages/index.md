---
title: "Hangar - Container image command-line utility"
---

# What is Hangar?

Hangar is a command line utility for container images, it's main features are:
- Copy multi-platform container images between registry servers.
- Save and load multi-platform container images between archive files.
- Container image signing functions with sigstore key-pairs.
- Container image vulnerability scanning.

## Why use hangar?

- Hangar does not require any container runtime (daemon) to copy container images.
- Hangar is not restricted by the platform of the runtime system, it supports Linux/Unix systems.
- Hangar supports both [docker images](https://github.com/moby/docker-image-spec/blob/main/README.md) and [OCI images](https://github.com/opencontainers/image-spec).
- Hangar supports copy/save/load/sign/scan multi-platform images parallelly to increase speed.
- Hanagr is designed to save/load multi-platform container images with archve files in Air-Gapped environments.

## Getting started

The getting started instruction of Hangar is available in [documents](/docs/v1.8/).

## Contributing

Hangar is open-source and any [issues](https://github.com/cnrancher/hangar/issues) or [pull requests](https://github.com/cnrancher/hangar/pulls) are welcomed if you have any suggestions while using Hangar.
