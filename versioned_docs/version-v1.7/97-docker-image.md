---
title: "Hangar Docker Image"
---

Hangar docker images support both `amd64` and `arm64` architectures.

:::note

Starting form `v1.7.0`, the entrypoint of hangar image was changed to `bash` instead of `hangar` executable binary file.

:::

```bash
docker pull cnrancher/hangar:${VERSION}
```

Execute hangar commands:

```bash
docker run cnrancher/hangar:${VERSION} hangar --help
```

Mount the local directory into the container, and execute `mirror/load/save/sync` commands inside the container image:

```bash
docker run -v $(pwd):/hangar -it cnrancher/hangar:${VERSION}
```

## Integrate Hangar with CI

You can use `cnrancher/hangar` docker image as base image to integrate hangar with CI, here is an example script:

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
