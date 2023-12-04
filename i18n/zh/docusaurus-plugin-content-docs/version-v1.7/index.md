---
title: "Hangar 使用指引"
sidebar_position: 0
---

# Hangar 使用指引

## 快速上手

1. 使用 Docker 镜像 `cnrancher/hangar` 运行 Hangar：
    ```bash
    docker run -it -v $(pwd):/hangar cnrancher/hangar:latest
    ```
1. 创建镜像列表文件，用于在镜像仓库之间拷贝容器镜像：

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.7.0
    ```

    使用以下命令从 Docker Hub 公开镜像仓库中拷贝容器镜像至*目标镜像仓库*。

    ```bash
    hangar mirror \
        -f example_image_list.txt \
        -s docker.io \
        -d [DESTINATION_REGISTRY_URL] \
        --arch amd64,arm64 \
        --os linux
    ```

1. 你可以使用 [inspect](/v1.7/advanced/inspect) 命令查看已拷贝的容器镜像 Manifest 索引：

    ```sh
    hangar inspect docker://[DESTINATION_REGISTRY_URL]/cnrancher/hangar:latest --raw
    {
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "schemaVersion": 2,
      "manifests": [
        {
        "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
    ...
    ```

## 配置文件

Hangar 使用与 [containers/image](https://github.com/containers/image/tree/main/docs) 相同的配置文件：

- `/etc/containers/policy.json`: 默认的 Policy 配置文件。可使用 `--insecure-policy` 参数跳过策略检查步骤。

    默认的 Policy 配置文件可在 [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json) 获取。

## 命令

- [mirror](/v1.7/mirror/mirror): 在镜像仓库之间拷贝容器镜像。
- [save](/v1.7/save/save): 将容器镜像从镜像仓库下载至压缩归档文件中。
- [load](/v1.7/load/load): 将容器镜像从压缩归档文件上传到镜像仓库中。
- [sync](/v1.7/sync/sync): 向压缩归档文件中增添容器镜像。
- [validate](/v1.7/advanced/validate): 此命令为 `mirror/save/load/sync` 的子命令，用于验证容器镜像是否拷贝正确。

除此之外，Hangar 提供了一些高级指令，可参考 [高级用法](/v1.7/advanced) 页面。

## 支持的镜像仓库种类

Hangar 兼容 API V2 容器镜像仓库，例如：
- [Docker Registry](https://docs.docker.com/registry/)
- [Harbor 2.X](https://goharbor.io/docs/)
- 公有云平台提供的镜像仓库服务，例如: 腾讯云 TCR、阿里云 ACR 等...

您需要确保容器镜像仓库支持以下格式的 Manifest 索引（`mediaType`）：
- `application/vnd.docker.distribution.manifest.list.v2+json`
- `application/vnd.oci.image.index.v1+json`

> Harbor 1.X 不支持上述 `mediaType` 格式，如需要使用 Hangar，请升级至 Harbor 2.X。

## Q&A

有关常见问题及报错，请参考 [常见问题](/v1.7/questions) 页面。
