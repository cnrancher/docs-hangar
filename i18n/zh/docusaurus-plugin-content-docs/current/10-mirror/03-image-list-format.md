---
title: "镜像列表格式"
---

`hangar mirror` 命令支持两种不同的镜像列表格式：

1. 默认（Default）镜像列表格式（此格式可用于 `mirror/save/load/sync`）命令：

    ```text title="默认镜像列表格式"
    # <REGISTRY>/<PROJECT>/<NAME>:<TAG>

    docker.io/library/hello-world:latest
    hello-world:latest
    cnrancher/hangar:v1.7.0
    ```

1. “Mirror” 格式（仅适用于 `mirror` 命令）：

    每行包含 **"[源镜像] [目标镜像] [TAG]"**，使用空格 `' '` 分隔。

    ```txt title="Mirror 格式"
    # <SOURCE> <DESTNATION> <TAG>

    docker.io/hello-world private.io/library/mirrored-hello-world latest
    nginx                 example.io/library/mirrored-nginx       1.22
    mysql                 example.io/mysql/mirrored-mysql         8
    quay.io/skopeo/stable example.io/library/mirrored-skopeo      latest
    ```

    “Mirror” 格式适用于需要重命名目标镜像的场景，除此之外此格式的镜像列表可以在不同的镜像仓库之间拷贝容器镜像。

镜像列表中以 `//` 或 `#` 起始的行将被忽略。
