---
title: "Hangar 使用指引"
sidebar_position: 0
---

# Hangar 使用指引

## 快速上手

参照以下指引，搭建一个 Demo [Registry](ttps://distribution.github.io/distribution/about/deploying/) 镜像仓库，使用 Hangar 拷贝容器镜像。

1. 搭建 Demo [Registry](https://distribution.github.io/distribution/about/deploying/) 镜像仓库。
    ```bash
    docker run -d -p 5000:5000 --restart=always --name registry registry:2
    ```
1. 在容器中运行 Hangar：
    ```bash
    docker run -it -v $(pwd):/hangar --network=host cnrancher/hangar:latest
    ```
1. 创建镜像列表文件，用于将 [Docker Hub](https://hub.docker.com) 镜像拷贝（Mirror）至 Demo 镜像仓库：

    ```txt title="example_image_list.txt"
    cnrancher/hangar:latest
    cnrancher/hangar:v1.9.0
    ```

    使用 Hangar [Mirror](/docs/v1.9/mirror/mirror) 命令从 Docker Hub 拷贝镜像。

    ```bash
    hangar mirror \
        -f 'example_image_list.txt' \
        -s 'docker.io' \
        -d '127.0.0.1:5000' \
        --arch amd64,arm64 \
        --os linux \
        --tls-verify=false
    ```

    :::note

    默认情况下，Demo Registry 镜像仓库可使用任意的用户名和密码登录。

    您可以参照 [Distribution Registry Token Authentication](https://distribution.github.io/distribution/spec/auth/) 配置 Registry 的认证信息。

    :::

1. 您可使用 [Inspect](/docs/v1.9/advanced/inspect) 命令查看已拷贝的容器镜像 Manifest 索引：

    ```sh
    hangar inspect docker://127.0.0.1:5000/cnrancher/hangar:latest --raw --tls-verify=false
    {
      "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",
      "schemaVersion": 2,
      "manifests": [
        {
        "mediaType": "application/vnd.docker.distribution.manifest.v2+json",
    ......
    ```

## 最佳实践

您可以参照 [安装指南](/docs/v1.9/install) 页面安装 Hangar 至您的系统中。

请访问 [Hangar 最佳实践](/docs/v1.9/bestpractice) 页面，获取更多 Hangar 搭建私有镜像仓库的例子。

## 配置文件

Hangar 的配置文件与 [containers/image](https://github.com/containers/image/tree/main/docs) 相同：

- `/etc/containers/policy.json`: 默认的 Policy 配置文件。可使用 `--insecure-policy` 参数跳过策略检查步骤。

    默认的 Policy 配置文件可在 [default-policy.json](https://github.com/cnrancher/hangar/blob/main/package/default-policy.json) 获取。

## 命令

- [mirror](/docs/v1.9/mirror/mirror): 在镜像仓库之间拷贝容器镜像。
- [save](/docs/v1.9/save/save): 将容器镜像从镜像仓库下载至压缩归档文件中。
- [load](/docs/v1.9/load/load): 将容器镜像从压缩归档文件上传到镜像仓库中。
- [sync](/docs/v1.9/sync/sync): 向压缩归档文件中增添容器镜像。
- [sign](sign/sign)：容器镜像加签。
- [scan](scan/scan)：容器镜像漏洞扫描。
- [view](/docs/v1.9/view): 查看容器镜像安全信息。
- [archive](archive/)：用于处理 Hangar 压缩包文件。
- [generate-list](generate-list/)：用于生成 Rancher 镜像列表。
除此之外，Hangar 提供了一些高级指令，可访问 [高级用法](/docs/v1.9/advanced) 页面获取更多信息。

## 支持的镜像仓库种类

Hangar 兼容 API V2 容器镜像仓库，例如：
- [Registry](https://distribution.github.io/distribution/)
- [Docker Hub](https://hub.docker.com/), [quay.io](https://quay.io/), [ghcr.io](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [Harbor 2.X](https://goharbor.io/docs/)
- 公有云平台提供的镜像仓库服务，例如: [AWS](https://aws.amazon.com/ecr/)，[Google Cloud](https://cloud.google.com/artifact-registry)，[腾讯云 TCR](https://www.tencentcloud.com/products/tcr)、[阿里云 ACR](https://www.alibabacloud.com/help/zh/acr/) 等...

您需要确保容器镜像仓库支持以下格式的 Manifest 索引（`mediaType`）：
- `application/vnd.docker.distribution.manifest.list.v2+json`
- `application/vnd.oci.image.index.v1+json`

:::note

[Harbor 1.X](https://goharbor.io/docs/1.10/) 不支持上述 `mediaType` 格式，如需要使用 Hangar，请[升级至 Harbor 2.X](https://goharbor.io/docs/2.3.0/administration/upgrade/)。

:::

## Q&A

有关常见问题及报错，请参阅 [常见问题](/docs/v1.9/questions) 页面。
