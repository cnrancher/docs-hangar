---
title: "编译 Hangar"
---

Hangar 由 Go 语言编写。

您可参照以下步骤编译 Hangar 可执行文件：

## 在容器中构建 Hangar

1. 环境准备：

    - 安装 `docker`、`curl`、`make` 依赖。
    - Hangar 仅支持 Linux & Unix 系统。

1. 克隆 Hangar 源代码：
    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```
1. 使用 `make`，在容器中构建 Hangar 可执行文件:
    ```bash
    # 获取帮助信息
    make help

    # 在容器中构建 Hangar
    make build
    ```
1. 编译的可执行文件可从 `bin` 目录中获取。

## 在本地构建 Hangar

1. 安装以下依赖：

    - Golang >= `1.21.3`

    ```sh
    # Arch Linux
    sudo pacman -S base-devel gpgme device-mapper btrfs-progs

    # Ubuntu
    sudo apt install libgpgme-dev libassuan-dev libbtrfs-dev libdevmapper-dev pkg-config

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

1. 执行脚本构建 Hangar。

    ```bash
    ./scripts/build.sh
    ```
1. 编译的可执行文件可从 `bin` 目录中获取。

## 禁用 CGO

您可以在构建 Hangar 时添加 `DISABLE_CGO=1` 环境变量以禁用 CGO，编译不含动态链接的 Hangar 可执行文件。

:::note

禁用 CGO 编译仅用于试用。编译后的二进制文件可能在运行时出现问题，此方式并非被官方支持。

参考：[skopeo - Building a static binary](https://github.com/containers/skopeo/blob/main/install.md#building-a-static-binary)

:::
