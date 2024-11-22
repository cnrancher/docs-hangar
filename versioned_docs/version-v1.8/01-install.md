---
title: Installation Guide
---

You can run Hangar by using the [Hangar Docker Image](#hangar-docker-image) inside the container or install Hangar binary into your system.

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

For more information about Hangar Docker Image, see [Hangar Docker Image](/docs/v1.8/docker-image) page.

## Install to system

### Download the compiled binary

Starting from `v1.8.7`，you can download the compiled binary file from Hangar [GitHub Release page](https://github.com/cnrancher/hangar/releases).

```bash
wget https://github.com/cnrancher/hangar/releases/download/v1.8.7/hangar_Linux_x86_64.tar.gz
tar zxvf ./hangar_Linux_x86_64.tar.gz
cp hangar_Linux_x86_64/hangar /usr/local/bin/
```

### Arch Linux

You can obtain the `PKGBUILD` to build and install the latest Hangar binary file from the Arch Linux [AUR](https://aur.archlinux.org/packages/hangar) repository.

- Install `hangar` by using the [yay](https://github.com/Jguer/yay) AUR helper:

    ```sh
    # Build and install from the latest stable release tag.
    yay hangar

    # Build and install from the latest upstream main git branch.
    yay hangar-git
    ```

- Or you can add the [Open Build Service](https://download.opensuse.org/repositories/home:/StarryWang/Arch/x86_64/) repository to install prebuilt hangar package.

    1. Add custom repository in `/etc/pacman.conf`:
        ```txt title="/etc/pacman.conf"
        [home_StarryWang_Arch]
        SigLevel = Never
        Server = https://download.opensuse.org/repositories/home:/StarryWang/Arch/$arch
        ```
    1. Install hangar:
        ```sh
        sudo pacman -Sy
        sudo pacman -S hangar
        ```

### openSUSE

Hangar is available on [Open Build Service](https://build.opensuse.org/package/show/home:StarryWang/Hangar).

```sh
# openSUSE Tumbleweed
sudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo
sudo zypper ref
sudo zypper in hangar
```

## Building from Source

See [Build Hangar](/docs/v1.8/dev/build) to build and install Hangar on your system manually.
