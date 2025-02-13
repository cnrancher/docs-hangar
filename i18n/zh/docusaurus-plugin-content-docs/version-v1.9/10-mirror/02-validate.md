---
title: "Mirror Validate 命令"
---

`hangar mirror validate` 命令用于校验 Mirror 过的镜像是否拷贝正确。

## 快速上手

在执行完 [mirror](/docs/v1.8/mirror/mirror#快速上手) 命令后，使用下方命令校验已拷贝的镜像:

```bash
#!/bin/bash

hangar mirror validate \
    --file="example_image_list.txt" \
    --source=SOURCE_REGISTRY_URL \
    --destination=DESTINATION_REGISTRY_URL \
    --arch=amd64,arm64 \
    --os=linux \
    --jobs=4
```

## 使用方法

```txt title="hangar mirror validate --help"
Ensure the images were mirrored correctly

Usage:
  hangar mirror validate -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]

Examples:

hangar mirror validate \
        --file IMAGE_LIST.txt \
        --source SOURCE_REGISTRY \
        --destination DESTINATION_REGISTRY \
        --arch amd64,arm64 \
        --os linux

Flags:
  -h, --help   help for validate

Global Flags:
  -a, --arch strings                 architecture list of images (default [amd64,arm64])
      --debug                        enable debug output
  -d, --destination string           specify the destination image registry
      --destination-project string   override all destination image projects
  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")
  -f, --file string                  image list file
      --insecure-policy              run Hangar without policy check
  -j, --jobs int                     worker number, copy images parallelly (1-20) (default 1)
      --os strings                   OS list of images (default [linux])
      --overwrite                    overwrite exist manifest index in destination registry
      --provenance                   copy SLSA provenance (default true)
      --remove-signatures            do not copy image signatures when mirror images
      --skip-login                   skip check the destination registry is logged in (used in shell script)
  -s, --source string                override the source registry in image list
      --source-project string        override all source image projects
      --timeout duration             timeout when mirror each images (default 10m0s)
      --tls-verify                   require HTTPS and verify certificates
```
