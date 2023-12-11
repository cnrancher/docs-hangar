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

For more information about Hangar Docker Image, see [Hangar Docker Image](/docs/v1.7/docker-image) page.

## Installing on Linux

### Arch Linux

You can obtain the `PKGBUILD` to build and install the latest Hangar binary file from the Arch Linux [AUR](https://aur.archlinux.org/packages/hangar-git) repository:

```sh
yay hangar-git
```

### openSUSE

Hangar is available on [Open Build Service](https://build.opensuse.org/package/show/home:StarryWang/Hangar):

```sh
# openSUSE Tumbleweed
sudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo
sudo zypper ref
sudo zypper in hangar
```

## Building from Source

See [Build Hangar](/docs/v1.7/dev/build) to build and install Hangar on your system manually.
