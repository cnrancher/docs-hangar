---
title: "Archive File Format"
---

Hangar uses the `zip` format archive file since version `v1.7.0`.

:::warning

**The archive file created by older versions of hangar (`tar.gz`) are no longer compatible with new versions (`zip`).**

You can use [hangar v1.6](/docs/v1.6/load/load) to load the old `tar.gz` format archive file.

:::

You can use [load](/docs/v1.8/load/load) command to load images from archive file to registry server.

And you can also use the [hangar archive](/docs/v1.8/archive/) command to operate with the archive file.
- [hangar archive ls](/docs/v1.8/archive/ls): List the images in the archive file.
- [hangar archive merge](/docs/v1.8/archive/merge): Merge multiple archive files into a new archive file.
- [hangar archive export](/docs/v1.8/archive/export): Export images from archive file.

## Why using zip format?

Compared with the compressed tarball (`tar.gz`) format, the `zip` archive format contains a file index ([directory](https://en.wikipedia.org/wiki/ZIP_(file_format)#Structure)) so it allows reading files from the `zip` archive randomly, and it also allows appending new files into the `zip` archive without decompressing and re-create the entire archive file. So Hangar 1.7 changed to `zip` archive format to avoid extra disk storage usage when saving/loading/syncing container images.

Therefore, this will cause Hangar to no longer support `tar.gz` format compressed tarball, and the old `saved-image-cache` directory will no longer exists.


## Different with `docker save`

The archive file created by Hangar is not compatible with `docker save` or other tools (`podman`) archive files,
and currently the Hangar [load](/docs/v1.8/load/load) command only supports to upload container images to registry server.
It does not support export container images from archive file to docker daemon, CRI-O and containerd daemon protocol.

The file size of the archive file created by Hangar is similar (or much smaller) than archive files created by other tools.
In addition, Hangar’s archive files supports storing multi-architecture & platform container images.
