---
title: "Inspect image list"
---

Use `hangar inspect-list` command for inspect multiple container image information.

> Available from v1.9.3.

## Quick Start

Inspect the architecture information supported by image-list file and save the report.

```bash
hangar inspect-list \
      --file="image-list.txt" \
      --format="txt" \
      --report="inspect-report.txt"
```

保存报告支持 `json/yaml/csv/txt` 格式，使用 `json/yaml` 格式可查看更多信息。

The report supports `json/yaml/csv/txt` formats. You can use `json/yaml` format to view more information.

```bash
hangar inspect-list \
      --file="image-list.txt" \
      --format="json" \
      --report="inspect-report.json"
```

Report output example:

```json
{
  "list": [
    {
      "source": "registry.rancher.cn/cnrancher/hangar",
      "tag": "latest",
      "images": [
        {
          "arch": "arm64",
          "os": "linux",
          "mediaType": "application/vnd.oci.image.manifest.v1+json",
          "digest": "sha256:8f018c7973c85831ecf0b9..."
        },
        {
          "arch": "amd64",
          "os": "linux",
          "mediaType": "application/vnd.oci.image.manifest.v1+json",
          "digest": "sha256:a6ec3b05a21890f70d996a67..."
        },
      ]
    },
......
```

## Usage

```txt title="hangar inspect-list --help"
Inspect multiple container images by image-list file

Usage:
  hangar inspect-list -f IMAGE_LIST.txt [flags]

Examples:
# Inspect image list file:
hangar inspect-list --file=image-list.txt --report=inspect-report.txt

Flags:
  -y, --auto-yes           answer yes automatically (used in shell script)
  -o, --failed string      file name of the inspect failed image list (default "inspect-failed.txt")
  -f, --file string        image list file
      --format string      inspect report format (json/yaml/csv/txt)
  -h, --help               help for inspect-list
  -j, --jobs int           worker number, inspect images parallelly (1-20) (default 1)
      --project string     override the project in image list
      --registry string    override the registry in image list
  -r, --report string      inspect report filename (default: inspect-report.[FORMAT])
      --timeout duration   timeout when inspect each images (default 10m0s)
      --tls-verify         require HTTPS and verify certificates (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```
