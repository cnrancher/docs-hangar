---
title: "Hangar - 容器镜像命令行工具"
---

# 什么是 Hangar？

Hangar 是一个对容器镜像执行操作的命令行工具，它的主要功能有：
- 在镜像仓库服务器之间拷贝多架构容器镜像。
- 在镜像仓库服务器和压缩包文件之间导入/导出镜像。
- 使用 Sigstore 密钥进行容器镜像签名功能。
- 容器镜像安全扫描功能。

## 为什么使用 Hangar？

1. Hangar 不依赖任何容器运行时拷贝镜像。
1. Hangar 不受运行系统的架构限制，支持 Linux/Unix 系统。
1. Hangar 支持 [Docker 镜像](https://github.com/moby/docker-image-spec/blob/main/README.md)和 [OCI 镜像](https://github.com/opencontainers/image-spec)。
1. Hangar 支持对容器镜像的批量并发拷贝/导入/导出/签名/扫描功能，以提高速度。
1. Hangar 的导入/导出多架构容器镜像功能专为离线环境设计。

## 开始使用

有关 Hangar 的快速上手指南，请参阅[文档页面](/docs/v1.8/)。

## 贡献代码

Hangar 是一个开源工具，如果您在使用过程中遇到了 BUG 或对 Hangar 有任何建议，欢迎提交 [Issue](https://github.com/cnrancher/hangar/issues) 或 [PR](https://github.com/cnrancher/hangar/pulls)。
