---
title: "Hangar Docker Image"
---

Hangar docker images support both `amd64` and `arm64` architectures.

```bash
docker pull cnrancher/hangar:${VERSION}
```

Execute hangar commands in the container:

```bash
docker run -v $(pwd):/hangar -it cnrancher/hangar:latest
```

::: note

Starting from hangar `v1.7.2`, the entrypoint of the hangar docker image was changed to [entrypoint.sh](https://github.com/cnrancher/hangar/blob/v1.7.2/package/entrypoint.sh).

:::

```bash
docker run cnrancher/hangar:latest hangar help
```

## Integrate Hangar with CI

You can use `cnrancher/hangar` docker image as base image to integrate hangar with CI, here is an example script:

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
    --failed="/hangar/mirror-failed.txt" \
    --skip-login

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
    --failed="/hangar/mirror-validate-failed.txt" \
    --skip-login

# Check mirror-validate-failed.txt
if [[ -e "mirror-validate-failed.txt" ]]; then
    echo "There are some images failed to validate after mirror:"
    cat mirror-validate-failed.txt
    exit 1
fi
```
