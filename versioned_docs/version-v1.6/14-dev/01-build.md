---
title: "Build Hangar"
---

## Dependencies

- Install `docker` and `make`
- Linux / macOS

## Build

Build Hangar using makefile:

```sh
# Get help information
make help

# Build binaries in the `build` folder
make build

# Build all platform & architecture binaries in the `build` folder
make build-all

# Execute unit tests
make test

# Delete compiled binaries
make clean
```
