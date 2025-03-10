---
title: "Hangar - A command-line utility for container images"
---

# What is Hangar?

Hangar is a command line utility for container images with following features:

- Multi-platform container images
- Copy container images between registry servers.
- Export container images as archive files and import them into image repositories.
- Sign container images with sigstore key-pairs.
- Scan container image vulnerabilities.

## Why use hangar?

- Hangar does not require any container runtime (daemon) to copy container images.
- Hangar is cross-platform and works in all Unix-like operating systems.
- Hangar supports both [docker images](https://github.com/moby/docker-image-spec/blob/main/README.md) and [OCI images](https://github.com/opencontainers/image-spec).
- Hangar supports copying/saving/loading/signing/scanning images in parallel to increase speed.
- Hanagr is designed to export container images as archive files and import them into image repositories in Air-Gapped environments.

## Getting started

The getting started instruction of Hangar is available in [documentation](/docs/v1.8/).

## Contributing

Hangar is open-source and any [issues](https://github.com/cnrancher/hangar/issues) or [pull requests](https://github.com/cnrancher/hangar/pulls) are welcomed if you have any suggestions while using Hangar.
