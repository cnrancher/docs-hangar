---
title: "Hangar Docker 镜像"
---

Hangar 的 Docker 镜像支持 `amd64` 和 `arm64` 架构。

```bash
docker pull cnrancher/hangar:${VERSION}
```

在容器中运行 Hangar：

```bash
docker run -v $(pwd):/hangar -it cnrancher/hangar:latest
```

::: note

自 Hangar `v1.7.2` 起，Hangar Docker 镜像的 Entrypoint 调整为 [entrypoint.sh](https://github.com/cnrancher/hangar/blob/v1.7.2/package/entrypoint.sh)。

:::

```bash
docker run cnrancher/hangar:latest hangar help
```

## 将 Hangar 集成至 CI

您可以将 `cnrancher/hangar` Docker 镜像作为基础镜像使用在 CI 中，以下是一份样例脚本：

```bash  title="mirror.sh"
#!/bin/bash

# Login to the destination registry server
# (and source registry server if needed) before copy images.
hangar login [DESTINATION_REGISTRY_URL] \
    --username="${USERNAME}" \
    --password="${PASSWORD}"

hangar mirror \
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
hangar mirror validate \
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
