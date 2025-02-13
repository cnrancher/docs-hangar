---
title: "Image List Formats"
---

`hangar mirror` command supports two different kinds of image list formats:

1. `Default` format (available for `mirror/save/load/sync/sign/scan/archive` subcommands):

    ```text title="Default format example"
    # <REGISTRY>/<PROJECT>/<NAME>:<TAG>

    docker.io/library/hello-world:latest
    hello-world:latest
    cnrancher/hangar:v1.9.0
    ```

1. `Mirror` format (only available for `mirror` subcommand):

    Each line contains **"[source image] [destination image] [TAG]"**, separated with white space `' '`:

    ```txt title="Mirror format example"
    # <SOURCE> <DESTINATION> <TAG>

    docker.io/hello-world private.io/library/mirrored-hello-world latest
    nginx                 example.io/library/mirrored-nginx       1.22
    mysql                 example.io/mysql/mirrored-mysql         8
    quay.io/skopeo/stable example.io/library/mirrored-skopeo      latest
    ```

    The `mirror` format is used for rename the copied destination image name,
    and it allows to mirror multiple images to different registry servers and projects.

    You can use hangar [convert-list](/docs/v1.9/advanced/convert-list) command to convert the image list file from `Default` format into `Mirror` format.

The line begin with `//` or `#` will be treated as comment.
