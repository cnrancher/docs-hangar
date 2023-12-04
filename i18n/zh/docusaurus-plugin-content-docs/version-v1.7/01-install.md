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

有关 Hangar Docker 镜像的更多使用介绍，请参考 [Hangar Docker 镜像](/v1.7/docker-image) 页面。

## 安装到 Linux 系统

### Arch Linux

Hangar 可在 Arch Linux [AUR](https://aur.archlinux.org/packages/hangar-bin) 仓库获取：

```sh
yay -S hangar-bin
```

### openSUSE

> Still working in progress.

## 从源代码中构建 Hangar

参考 [编译 Hangar](/v1.7/dev/build) 页面，手动构建 Hangar 可执行文件并安装到系统中。
