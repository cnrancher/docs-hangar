---
title: "Hangar Docker Image"
---

Docker images support `amd64` and `arm64` architectures.

```sh
docker pull cnrancher/hangar:${VERSION}

# Get help information
# The default entrypoint is hangar binary file
docker run cnrancher/hangar:${VERSION} hangar --help
```

Set `entrypoint` to `bash`, mount the local directory into the container, and execute mirror/load/save in the container:
```console
$ docker run --entrypoint bash -v $(pwd):/hangar -it cnrancher/hangar:${VERSION}
a455e1202691:/hangar # hangar -h
Usage: hangar COMMAND [OPTIONS]
...
```

## Run Mirror in CI

The Mirror command can be run automatically in a CI Pipeline, and the source registry, target registry, and username and password can be specified by setting the following environment variables:

- `SOURCE_USERNAME`: Source registry username
- `SOURCE_PASSWORD`: Source registry password
- `SOURCE_REGISTRY`: Source registry URL
- `DEST_USERNAME`: Destination registry username
- `DEST_PASSWORD`: Destination registry password
- `DEST_REGISTRY`: Destination registry URL

----

Example:

```bash
#!/bin/bash

docker run -v $(pwd):/hangar \
    -e SOURCE_REGISTRY="" \
    -e SOURCE_USERNAME=""\
    -e SOURCE_PASSWORD="" \
    -e DEST_REGISTRY=""\
    -e DEST_USERNAME=""\
    -e DEST_PASSWORD="" \
    cnrancher/hangar:${VERSION} \
    hangar mirror \
    -f /hangar/list.txt \
    -o /hangar/mirror-failed.txt

# check mirror-failed.txt
cat mirror-failed.txt
```
