---
title: "编译 Hangar"
---

Hangar 由 Go 语言编写。

您可参照以下步骤编译 Hangar 可执行文件：

1. 环境准备：

    - 安装 `docker` 和 `make` 依赖。
    - Hangar 仅支持 Linux & Unix 系统。

1. 克隆 Hangar 源代码：
    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```
1. 使用 `make`，在容器中构建 Hangar 可执行文件:
    ```bash
    # Get help information
    make help

    # Build binaries in the `bin` folder
    make build

    # Clean up the generated files
    make clean
    ```
1. 编译的可执行文件可从 `bin` 目录中获取。
