---
title: "Build Hangar"
---

Hangar is written in Golang.

You can follow the below instructions to build hangar executable binary.

## Building by goreleaser

1. Install following build dependencies:

    - Golang >= `1.22.2`

    - [goreleaser](https://goreleaser.com)

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

1. Build hangar by goreleaser:

    ```bash
    make build
    ```

1. The built binary file is available in the `dist/` directory.
