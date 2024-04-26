---
title: "Build Hangar"
---

Hangar is written in Golang.

You can follow the below instructions to build hangar executable binary.

## Building in a container

1. Requirements:

    - Ensure `docker`, `curl`, `make` installed.
    - Hangar only supports Linux & Unix systems.

1. Clone the source code.
    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```
1. Build hangar in container by executing `make` commands:
    ```bash
    # Get help information
    make help

    # Build hangar in container
    make build
    ```
1. The built binary file is available in `bin` directory.

## Building without a container

1. Install following build dependencies:

    - Golang >= `1.22.2`

    ```sh
    # Arch Linux
    sudo pacman -S base-devel gpgme device-mapper btrfs-progs

    # Ubuntu/Debian
    sudo apt install libgpgme-dev libassuan-dev libbtrfs-dev libdevmapper-dev pkg-config gcc

    # macOS
    brew install gpgme

    # openSUSE
    sudo zypper install libgpgme-devel device-mapper-devel libbtrfs-devel glib2-devel

    # Fedora
    sudo dnf install gpgme-devel libassuan-devel btrfs-progs-devel device-mapper-devel
    ```

1. Clone the source code.

    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```

1. Build hangar by execute build scripts manually:

    ```bash
    ./scripts/build.sh
    ```

1. The built binary file is available in the `bin` directory.

## Disable CGO

You can add `DISABLE_CGO=1` environment variable when building hangar with CGO disabled.

:::note

Keep in mind that the resulting binary is unsupported and might crash randomly. Only use if you know what you're doing!

Refer: [skopeo - Building a static binary](https://github.com/containers/skopeo/blob/main/install.md#building-a-static-binary)

:::
