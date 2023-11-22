---
title: "Automation Test"
---

# Test

[Hangar](https://github.com/cnrancher/hangar) project source code includes Unit tests & Validation tests.

## Validation test

1. Test the output of version, help message, etc.
1. Run mirror & mirror-validate test first, mirror container images from public registry server to the Harbor private regitry server.
1. Then run tests for save, load, load-validate, sync, compress, decompress etc commands.

### Prepare

1. Clone the source code and build the executable binary:
    ```
    $ git clone https://github.com/cnrancher/hangar && cd hangar
    $ make build
    ```
1. Prepare a Harbor V2 Registry server.
1. Setup environment variables.
    ```sh
    export SOURCE_REGISTRY="" # set to empty string
    export SOURCE_USERNAME="" # docker hub username (optional)
    export SOURCE_PASSWORD="" # docker hub password (optional)

    export DEST_REGISTRY="" # harbor registry url
    export DEST_USERNAME="" # harbor username
    export DEST_PASSWORD="" # harbor password
    ```
    > If the Harbor v2 uses HTTP or insecure TLS certificate,
    > set `export TEST_SKIP_TLS="true"` to skip tls verify.

### Run tests in container

Run tests of all commands in container:

```console
$ make test_all
```

Besides, you can run `make test_[COMMAND_NAME]` to test the command.

> Need to run `make test_mirror` before running tests of other commands.

```sh
# mirror | mirror-validate command
make test_mirror

# save command
make test_save

# load | load-validate command
make test_load

# sync | compress | decompress command
make test_sync

# Test other commands...
make test_[COMMAND_NAME]
```

## Unit test

Run unit tests in container:

```console
$ make test
```
