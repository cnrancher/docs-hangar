---
title: "Hangar Docker 镜像"
---

Hangar 的 Docker 镜像支持 `amd64` 和 `arm64` 架构。

:::note

自 Hangar `v1.7.0` 起，Hangar Docker 镜像的 Entrypoint 改为 `bash`，而非 `hangar` 可执行文件。

:::

```bash
docker pull cnrancher/hangar:${VERSION}
```

运行 Hangar 命令：

```bash
docker run cnrancher/hangar:${VERSION} hangar --help
```

将本地文件夹映射到容器镜像中，之后在容器镜像中执行 `mirror/save/load/sync` 等命令。

```bash
docker run -v $(pwd):/hangar -it cnrancher/hangar:${VERSION}
```

## 将 Hangar 集成至 CI

您可以将 `cnrancher/hangar` Docker 镜像作为基础镜像使用在 CI 中，以下是一份样例脚本：

```bash
#!/bin/bash

docker run -v $(pwd):/hangar cnrancher/hangar:${VERSION} mirror \
    --file="/hangar/list.txt" \
    --source="docker.io" \
    --destination="[DESTINATION_REGISTRY_URL]" \
    --jobs=8 \
    --failed="/hangar/mirror-failed.txt"

# Check mirror-failed.txt
if [[ -e "mirror-failed.txt" ]]; then
    echo "There are some images failed to copy:"
    cat mirror-failed.txt
    exit 1
fi

# Validate the mirrored images (optional)
docker run -v $(pwd):/hangar cnrancher/hangar:${VERSION} mirror validate \
    --file="/hangar/list.txt" \
    --source="docker.io" \
    --destination="[DESTINATION_REGISTRY_URL]" \
    --jobs=8 \
    --failed="/hangar/mirror-validate-failed.txt"

# Check mirror-validate-failed.txt
if [[ -e "mirror-validate-failed.txt" ]]; then
    echo "There are some images failed to validate after mirror:"
    cat mirror-validate-failed.txt
    exit 1
fi
```
