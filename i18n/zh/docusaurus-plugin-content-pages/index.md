---
title: "Hangar - 快速批量拷贝容器镜像"
---

# Hangar

Hangar 是一个灵活且易用的容器镜像拷贝工具，支持多架构 & 多平台容器镜像拷贝，旨在简化复杂的批量拷贝容器镜像至私有镜像仓库过程。

- Hangar 不依赖任何容器运行时（Daemon）。
- 不受运行的系统和架构限制，支持 Linux/Unix 系统。
- 支持 Docker 镜像和 [OCI 镜像](https://github.com/opencontainers/image-spec)。
- 支持并发拷贝容器镜像，提高性能。
- 支持从压缩文件中导入/导出容器镜像，以应用在离线部署（Air-Gap）场景。

Hangar 提供了以下功能：

- 在镜像仓库（Registry）之间 Mirror 容器镜像（参考 [Mirror](/docs/v1.7/mirror/mirror) 命令）。
- 从镜像仓库中下载容器镜像至压缩包中（参考 [Save](/docs/v1.7/save/save) 命令），之后将压缩包中的镜像上传至镜像仓库服务器中（参考 [Load](/docs/v1.7/load/load) 命令），适用于离线部署（Air-Gap）镜像仓库。
- 验证已拷贝的容器镜像，确保容器镜像均被正确的拷贝（参考 [Validate](/docs/v1.7/advanced/validate) 命令）。
- 其他用于处理镜像列表文件以及处理压缩包的高级命令（参考 [高级用法](/docs/v1.7/advanced)）。

## 使用文档

Hangar 详细使用文档可在本站的 [使用文档](/docs/v1.7/) 页面获取。

## 依赖

自 Hangar `v1.7.0` 版本起，Hangar 移除了所有的第三方可执行二进制文件依赖，以提高容器镜像拷贝速度并减少性能损耗。

## 贡献代码

如果您在使用过程中遇到了 BUG 或对 Hangar 有任何建议，欢迎提交 [Issue](https://github.com/cnrancher/hangar/issues) 或 [PR](https://github.com/cnrancher/hangar/pulls)。
