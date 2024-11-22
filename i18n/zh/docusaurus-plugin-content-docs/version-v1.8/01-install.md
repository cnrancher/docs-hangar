---
title: 安装指南
---

您可使用 Hangar Docker 镜像在容器中运行 Hangar。除此之外您可在系统中安装 Hangar 可执行文件。

## Hangar Docker 镜像

- 使用 `docker` 运行 Hangar 容器镜像:

    ```sh
    # Docker
    docker pull cnrancher/hangar:latest

    docker run -it -v $(pwd):/hangar cnrancher/hangar:latest
    ```

- 使用 `podman` 运行 Hangar 容器镜像:

    ```sh
    # Podman
    podman pull docker.io/cnrancher/hangar:latest

    podman run -it -v $(pwd):/hangar cnrancher/hangar:latest
    ```

有关 Hangar Docker 镜像的更多使用介绍，请参考 [Hangar Docker 镜像](/docs/v1.8/docker-image) 页面。

## 安装到 Linux 系统

### 下载二进制文件

自 `v1.8.7` 起，Hangar 可在 [GitHub Release 页面](https://github.com/cnrancher/hangar/releases)下载已编译的二进制文件。

```bash
wget https://github.com/cnrancher/hangar/releases/download/v1.8.7/hangar_Linux_x86_64.tar.gz
tar zxvf ./hangar_Linux_x86_64.tar.gz
cp hangar_Linux_x86_64/hangar /usr/local/bin/
```

### Arch Linux

您可在 Arch Linux [AUR](https://aur.archlinux.org/packages/hangar) 仓库获取 `PKGBUILD`，在本地编译并安装 Hangar。

- 使用 [yay](https://github.com/Jguer/yay) AUR Helper 安装 Hangar：

    ```sh
    # 从最新的 stable release tag 构建并安装 Hangar。
    yay hangar

    # 从最新的上游 git main 分支源码构建并安装 Hangar。
    yay hangar-git
    ```

- 除此之外，您可以添加 [Open Build Service](https://download.opensuse.org/repositories/home:/StarryWang/Arch/x86_64/) 仓库以安装预构建的 Hangar 安装包。

    1. 编辑 `/etc/pacman.conf` 添加自定义软件源：
        ```txt title="/etc/pacman.conf"
        [home_StarryWang_Arch]
        SigLevel = Never
        Server = https://download.opensuse.org/repositories/home:/StarryWang/Arch/$arch
        ```
    1. 安装 Hangar：
        ```sh
        sudo pacman -Sy
        sudo pacman -S hangar
        ```

### openSUSE

Hangar 可在 [Open Build Service](https://build.opensuse.org/package/show/home:StarryWang/Hangar) 获取。

```sh
# openSUSE Tumbleweed
sudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo
sudo zypper ref
sudo zypper in hangar
```

## 从源代码中构建 Hangar

参考 [编译 Hangar](/docs/v1.8/dev/build) 页面，手动构建 Hangar 可执行文件并安装到系统中。
