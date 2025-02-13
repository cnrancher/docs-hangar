---
title: "编译 Hangar"
---

Hangar 由 Go 语言编写。

您可参照以下步骤编译 Hangar 可执行文件：

## 使用 GoReleaser 构建 Hangar

1. 安装以下依赖：

    - Golang >= `1.23.x`

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

1. 克隆 Hangar 源代码：

    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```

1. 使用 goreleaser 构建 hangar：

    ```bash
    make build
    ```

1. 编译的可执行文件可从 `dist/` 目录中获取。
