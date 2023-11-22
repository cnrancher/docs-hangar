---
title: "Image List Formats"
---

`hangar mirror` command supports two different kinds of image list formats:

1. The default format (available for `mirror/save/load/sync` subcommands):

    ```text title="Default format example"
    # <REGISTRY>/<PROJECT>/<NAME>:<TAG>

    docker.io/library/hello-world:latest
    hello-world:latest
    cnrancher/hangar:v1.7.0
    ```

1. "Mirror" format (only available for `mirror` subcommand):

    Each line contains **"[source image] [destination image] [TAG]"**, separated with white space `' '`:

    ```txt title="Mirror format example"
    # <SOURCE> <DEST> <TAG>

    docker.io/hello-world private.io/library/hello-world latest
    nginx                 example.io/library/nginx       1.22
    mysql                 example.io/mysql/mysql         8
    ```

    The "mirror" format is used for mirror multiple images to different registry servers and projects.

The line begin with `//` or `#` will be treated as comment.
