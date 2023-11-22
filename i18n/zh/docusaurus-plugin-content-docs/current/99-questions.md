---
title: "常见问题"
---

## 关于 Hangar

使用的依赖：

1. Hangar 使用了 [comtainers/images](https://github.com/containers/image) API 执行容器镜像拷贝相关操作。

    因为 [containers/signature](https://github.com/containers/signature) API 使用了 C 库，因此在编译 Hangar 时需要启用 `CGO`，编译后的可执行文件存在动态链接库。

1. Hangar 使用 [helm](https://github.com/helm/helm) 依赖用于在 Helm Chart 中生成镜像列表。

## Hangar 缓存文件夹

Hangar 使用 `${HOME}/.cache/hangar_cache` 暂存下载的容器镜像 Blobs 文件。

如果您在执行镜像拷贝的过程中强行停止了 Hangar，请手动清理 `${HOME}/.cache/hangar_cache` 目录下的文件。

## Harbor 2.X 镜像仓库

若*目标镜像仓库*为 Harbor，Hangar `load` 命令将尝试自动为目标镜像仓库创建 **Harbor Project**。

若 Hangar 无法自动创建 **Harbor Project**，请手动创建。

## 为什么使用 `zip` 压缩包格式？

请参考 [压缩文件格式](save/archive) 页面。

## 常见报错及处理方法

1. 自 `v1.7.0` 起，Hangar 改为使用 `zip` 格式。

    **旧版本的 Hangar 创建的压缩包格式（`tar.gz`）将无法与新版本（`zip`）格式相兼容。**

    关于压缩文件的更多信息，请参考 [load](load/load) 和 [压缩文件格式](load/archive) 页面。

2. 报错：`manifest unknown`

    待拷贝的镜像不存在。请使用 `hangar inspect --raw docker://<IMAGE>` 检查镜像是否存在。

3. 报错：`unsupported MIME type`

    容器镜像的 `mediaType` 不被支持。

    Hangar 支持以下格式的 `mediaType`:

    - `application/vnd.docker.distribution.manifest.list.v2+json`
    - `application/vnd.docker.distribution.manifest.v2+json`
    - `application/vnd.docker.distribution.manifest.v1+json`
    - `application/vnd.oci.image.manifest.v1+json`
    - `application/vnd.oci.image.index.v1+json`

4. 警告：`no avaiable image for specified arch and os`

    待拷贝的镜像与 `--arch` 和 `--os` 参数指定的架构 & OS 信息不符时会出现此警告信息。

    例如待拷贝的镜像仅支持 `amd64` 架构，而 `--arch` 设定的是 `arm64` 时，会出现此 Warning 信息。

    此警告信息不会影响正常的镜像拷贝流程，当出现此警告时只用于提醒该镜像没有被拷贝。
