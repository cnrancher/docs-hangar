---
title: "压缩文件格式"
---

从 `v1.7.0` 起，Hangar 使用 `zip` 格式。

:::warning

**旧版本的 Hangar 创建的压缩包格式（`tar.gz`）将无法与新版本（`zip`）格式相兼容。**

您可使用 [Hangar v1.6.X](/docs/v1.6/load/load) 加载 `tar.gz` 格式的压缩包文件。

:::

您可以使用 [load](/docs/v1.8/load/load) 命令将压缩包中的镜像上传至镜像仓库中。

除此之外，您还可以使用 [hangar archive](/docs/v1.8/archive/) 命令，对镜像包文件进行处理：
- [hangar archive ls](/docs/v1.8/archive/ls) 命令：查看镜像包中存储的镜像信息。
- [hangar archive merge](/docs/v1.8/archive/merge) 命令：整合多个镜像包文件至一个新的镜像包文件。
- [hangar archive export](/docs/v1.8/archive/export) 命令：从镜像包文件中导出部分镜像至一个新的镜像包文件。

## 为什么使用 zip 格式？

相比压缩的 TAR 归档格式（`tar.gz`），`zip` 文件格式包含一份文件索引（[Directory](https://en.wikipedia.org/wiki/ZIP_(file_format)#Structure)) 记录了压缩包中存储的文件信息，因此 `zip` 格式支持随机读取，且支持向已有的压缩包文件中增添新的文件。因此 Hangar 1.7 改为使用 `zip` 文件格式，以减少执行 `save/load/sync` 命令时不必要的磁盘空间浪费。

因此，Hangar 将不再支持 `tar.gz` 格式的文件，旧版本中所使用的 `saved-image-cache` 缓存文件夹也将不复存在。

## 与 `docker save` 的区别

Hangar 创建的压缩包文件与 `docker save` 或其他工具（例如 `podman`）创建的压缩包并不兼容。
目前 Hangar [load](/docs/v1.8/load/load) 命令仅支持将压缩包中的容器镜像上传至镜像仓库中，不支持将容器镜像导出至任何容器运行时（Docker Daemon、CRI-O 以及 Containerd Daemon）中。

Hangar 压缩包的文件体积与其他工具导出的容器镜像压缩包体积几乎一致（甚至更小），除此之外 Hangar 的压缩包可以存储多架构 & 多平台的容器镜像。
