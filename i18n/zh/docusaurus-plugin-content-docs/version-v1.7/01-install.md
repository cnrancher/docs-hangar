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

有关 Hangar Docker 镜像的更多使用介绍，请参考 [Hangar Docker 镜像](/docs/v1.7/docker-image) 页面。

## 安装到 Linux 系统

### Arch Linux

您可在 Arch Linux [AUR](https://aur.archlinux.org/packages/hangar-git) 仓库获取 `PKGBUILD`，在本地编译并安装 Hangar：

```sh
yay hangar-git
```

### openSUSE

Hangar 可在 [Open Build Service](https://build.opensuse.org/package/show/home:StarryWang/Hangar) 获取：

```sh
# openSUSE Tumbleweed
sudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo
sudo zypper ref
sudo zypper in hangar
```

## 从源代码中构建 Hangar

参考 [编译 Hangar](/docs/v1.7/dev/build) 页面，手动构建 Hangar 可执行文件并安装到系统中。
