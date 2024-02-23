---
title: "Hangar Docker Image"
---

Docker images support `amd64` and `arm64` architectures.

```sh
docker pull cnrancher/hangar:${VERSION}

# Set `entrypoint` to `bash`, mount the local directory into the container, and execute mirror/load/save in the container:
docker run -v $(pwd):/hangar -it --entrypoint=bash cnrancher/hangar:latest
```
