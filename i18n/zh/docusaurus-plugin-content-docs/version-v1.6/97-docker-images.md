---
title: Hangar Docker 镜像
---

Docker 镜像支持 `amd64` 和 `arm64` 架构。

```sh
# 获取镜像
docker pull cnrancher/hangar:${VERSION}

# Set `entrypoint` to `bash`, mount the local directory into the container, and execute mirror/load/save in the container:
docker run -v $(pwd):/hangar -it --entrypoint=bash cnrancher/hangar:latest
```
