---
title: "Build Hangar"
---

Hangar is written in Golang.

You can follow the below instructions to build hangar executable binary.

1. Requirements:

    - Ensure `docker` and `make` installed.
    - Hangar only supports Linux & Unix systems.

1. Clone the source code.
    ```bash
    git clone https://github.com/hangar.git && cd hangar
    ```
1. Build hangar in container by executing `make` commands:
    ```bash
    # Get help information
    make help

    # Build binaries in the `bin` folder
    make build

    # Clean up the generated files
    make clean
    ```
1. The built binary file is available in `bin` directory.
