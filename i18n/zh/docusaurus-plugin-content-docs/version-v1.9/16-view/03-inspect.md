---
title: "获取镜像的 Manifest"
---

`hangar inspect` 命令可获取镜像仓库中镜像的 Manifest（此命令与 [skopeo inspect](https://github.com/containers/skopeo/blob/main/docs/skopeo-inspect.1.md) 功能类似）。

## 快速上手

使用 `--raw` 参数获取 DockerHub 的 `nginx` 容器镜像的原始 Manifest 文件：

```bash
hangar inspect --raw docker://nginx:latest
```

使用 `--config` 参数查看 DockerHub 仓库中的 `nginx` 容器镜像的 Config 原始文件：

```bash
hangar inspect --config docker://nginx:latest
```

如需要批量查看容器镜像信息，请使用 [inspect list](/docs/v1.9/view/inspect-list/) 命令。

## 使用方法

```txt title="hangar inspect --help"
Inspect image manifests

Usage:
  hangar inspect IMAGE_REFERENCE [flags]
  hangar inspect [command]

Aliases:
  inspect, i

Examples:
# Inspect image manifest:
hangar inspect [image-reference]

# Inspect RAW docker image maniefest:
hangar inspect docker://docker.io/cnrancher/hangar:latest --raw

# Inspect multiple container image by image-list file:
hangar inspect list -f image-list.txt

Available Commands:
  list        Inspect multiple container images by image-list file

Flags:
      --config                    output raw configuration
  -h, --help                      help for inspect
      --override-arch string      use ARCH instead of the architecture of the machine for choosing images
      --override-os string        use OS instead of the running OS for choosing images
      --override-variant string   use VARIANT instead of the running variant for choosing images
      --raw                       output raw manifest
      --tls-verify                require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar inspect [command] --help" for more information about a command.
```
