---
title: Installation Guide
---

You can run Hangar by using [Hangar Docker Image](#hangar-docker-image) inside the container or install Hangar binary on your system.

## Hangar Docker Image

- Run Hangar with `docker`:

    ```sh
    # Docker
    docker pull cnrancher/hangar:latest

    docker run -it -v $(pwd):/hangar cnrancher/hangar:latest
    ```

- Run Hangar with `podman`:

    ```sh
    # Podman
    podman pull docker.io/cnrancher/hangar:latest

    podman run -it -v $(pwd):/hangar cnrancher/hangar:latest
    ```

For more information about Hangar Docker Image, see [Hangar Docker Image](/v1.7/docker-image) page.

## Installing on Linux

### Arch Linux

Hangar is available on Arch Linux [AUR](https://aur.archlinux.org/packages/hangar-bin) repository:

```sh
yay -S hangar-bin
```

### openSUSE

> Still working in progress.

## Building from Source

See [Build Hangar](/v1.7/dev/build) to build and install Hangar on your system manually.
