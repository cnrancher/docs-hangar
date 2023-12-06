---
title: "常见问题"
---

## 关于 Hangar

使用的依赖：

1. Hangar 使用了 [containers/images](https://github.com/containers/image) API 执行容器镜像拷贝相关操作。<br />
    因 [containers/signature](https://github.com/containers/signature) API 使用了 C 库，因此在编译 Hangar 时需要启用 `CGO`，编译后的可执行文件存在动态链接库。
1. Hangar 使用 [Helm](https://github.com/helm/helm) API 用于在 Helm Chart 中生成镜像列表。
1. Hangar 使用 [cobra](https://github.com/spf13/cobra) 处理命令行交互，生成 [命令行补全脚本](/docs/v1.7/advanced/completion)。

## Hangar 缓存文件夹

在执行 Save / Sync / Load 命令时，Hangar 使用 `${HOME}/.cache/hangar_cache` 暂存下载的容器镜像 Blobs 文件。

如果您在执行镜像拷贝的过程中强行停止了 Hangar，请手动清理 `${HOME}/.cache/hangar_cache` 目录下的文件。

## Harbor 2.X 镜像仓库

若*目标镜像仓库*为 Harbor，Hangar `load` 命令将尝试自动为目标镜像仓库创建私有的 **Harbor Project**。

若 Hangar 无法自动创建 **Harbor Project**，请手动创建。

## 为什么使用 `zip` 压缩包格式？

关于压缩文件的更多信息，请参考 [load](/docs/v1.7/load/load) 和 [压缩文件格式](/docs/v1.7/save/archive) 页面。

**旧版本的 Hangar 创建的压缩包格式（`tar.gz`）将无法与新版本（`zip`）格式相兼容。**

## Hangar 拷贝过的镜像 Digest 会被改变么？

自 Hangar `v1.7.0` 起，Hangar 会尽可能的确保拷贝容器镜像时，不改变其 Digest。

只有在待拷贝的镜像格式是已弃用的 [Docker manifest Version2 Schema1](https://distribution.github.io/distribution/spec/deprecated-schema-v1/)（`application/vnd.docker.distribution.manifest.v1+json`）时，Hangar 会在拷贝镜像时将其 `mediaType` 更新为 [Docker manifest Version2 Schema2](https://distribution.github.io/distribution/spec/manifest-v2-2/) (`application/vnd.docker.distribution.manifest.v2+json`)，此时拷贝后的镜像 Digest 会与源镜像不一致。

## 常见报错及处理方法

### 报错：`manifest unknown`

    待拷贝的镜像不存在。请使用 `hangar inspect --raw docker://<IMAGE>` 检查镜像是否存在。

### 报错：`unsupported MIME type`

    容器镜像的 `mediaType` 不被支持。

    Hangar 支持以下格式的 `mediaType`:

    - `application/vnd.docker.distribution.manifest.list.v2+json`
    - `application/vnd.docker.distribution.manifest.v2+json`
    - `application/vnd.docker.distribution.manifest.v1+json`
    - `application/vnd.oci.image.manifest.v1+json`
    - `application/vnd.oci.image.index.v1+json`

### 报错：`open /etc/containers/policy.json: no such file or directory`

    Policy 配置文件 `/etc/containers/policy.json` 不存在。可在 [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json) 获取默认的 Policy 策略配置文件。

    除此之外可使用 `--insecure-policy` 参数跳过 Policy 检测。

### 警告：`no avaiable image for specified arch and os`

    待拷贝的镜像与 `--arch` 和 `--os` 参数指定的架构 & OS 信息不符时会出现此警告信息。

    例如待拷贝的镜像仅支持 `amd64` 架构，而 `--arch` 设定的是 `arm64` 时，会出现此 Warning 信息。

    此警告信息不会影响正常的镜像拷贝流程，当出现此警告时只用于提醒该镜像没有被拷贝。

### 在向 Harbor 仓库拷贝镜像时遇到报错：`authentication required`

    请检查镜像的 Harbor Project 是否已经创建，在执行 `hangar mirror` 命令时需要手动创建 Harbor Project。

### 报错：`server gave HTTP response to HTTPS client`

    若镜像仓库使用自签名 HTTPS 证书或 HTTP，请添加 `--tls-verify=false` 参数。
