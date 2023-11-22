---
title: 常见问题
---

## Hangar 的常见问题

1. Hangar 的 Mirror / Load / Save 功能的原理

    Hangar 使用 `skopeo` 拷贝容器镜像至目标镜像服务器或本地文件夹中。

    目前 Hangar 运行时使用了 `skopeo` 第三方依赖。

## 可能遇到的报错

1. 报错 `this tool does not support template version "va.b.c"`

    该工具 Load 时所加载的压缩包中保存的 Template Version 与当前工具所支持的版本不匹配。

    请确保 Save 镜像至压缩包时工具的版本与 Load 加载压缩包时工具的版本一致。

    | Template Version | `hangar` 版本 |
    | :--------------: | :---------------: |
    | `v1.0.0`         | `v1.0.0` ~ `v1.2.3-rc1` |
    | `v1.1.0`         | `v1.3.0` ~ latest |

2. 报错 `manifest unknown: manifest unknown"`

    `manifest unknown` 表示没有找到该镜像，请检查镜像列表中的镜像。

    尝试使用 `skopeo inspect docker://<image> --raw | jq` 检查是否能获取到该镜像的 Manifest。

3. 报错 `unsupported MIME type`

    源镜像的 Manifest 的 `mediaType` 格式不被支持。

    本工具支持以下类型的 `mediaType`：

    - `application/vnd.docker.distribution.manifest.list.v2+json`
    - `application/vnd.docker.distribution.manifest.v2+json`
    - `application/vnd.docker.distribution.manifest.v1+json`
    - `application/vnd.oci.image.manifest.v1+json`
    - `application/vnd.oci.image.index.v1+json`

    可使用 `skopeo inspect docker://<image> --raw | jq` 获取源镜像的 Manifest 的 `mediaType`。

4. 报错 `no image available for specified arch list`

    待拷贝镜像的架构与 `-a` 参数指定的架构不匹配。
