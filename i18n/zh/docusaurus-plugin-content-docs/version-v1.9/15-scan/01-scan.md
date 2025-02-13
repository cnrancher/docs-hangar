---
title: 容器镜像漏洞扫描
---

Hangar 内置了 [trivy](https://aquasecurity.github.io/trivy/) 的容器镜像扫描功能，您可使用 `hangar scan` 命令一键扫描多架构容器镜像漏洞。

## 快速上手

使用以下命令扫描容器镜像漏洞。

```bash
#!/bin/bash

hangar scan \
    --file="example_image_list.txt" \
    --format="csv" \
    --arch="amd64,arm64" \
    --os="linux" \
    --jobs=4
```

默认情况下，扫描结果会以 `CSV` 格式输出，您可以使用 `--format` 命令自定义漏洞扫描报告的输出格式为 `json` 或 `yaml`。有关 `spdx-json` 格式的介绍请参阅下方的 [SBOM 输出](#sbom-输出)。

如果在扫描容器镜像时遇到了其他错误（例如网络超时或镜像不存在），扫描失败的镜像列表将会输出至 `scan-failed.txt` 中。

## Usage

```txt title="hangar scan --help"
Scan container image vulnerabilities

Usage:
  hangar scan -f IMAGE_LIST.txt [flags]

Examples:
# Scan images by image list file and output CSV result.
hangar scan \
        --file IMAGE_LIST.txt \
        --format csv \
        --arch amd64,arm64 \
        --os linux

Flags:
  -a, --arch strings                 architecture list of images (default [amd64,arm64])
  -y, --auto-yes                     answer yes automatically (used in shell script)
      --cache string                 trivy database cache directory (default "/home/USERNAME/.cache/trivy")
  -o, --failed string                file name of the scan failed image list (default "scan-failed.txt")
  -f, --file string                  image list file
      --format string                output report format (available: json,yaml,csv,spdx-csv,spdx-json) (default "csv")
  -h, --help                         help for scan
  -j, --jobs int                     worker number, scan images parallelly (1-20) (default 1)
      --offline-scan                 scan in offline (air-gapped) mode
      --os strings                   OS list of images (default [linux])
      --project string               override all image projects in image list
      --registry string              override all image registry URL in image list
  -r, --report string                scan report output file (default "scan-report.[FORMAT]")
      --scanner strings              list of scanners (available: vuln,misconfig,secret,license) (default [vuln])
  -s, --server string                trivy server URL (scan as a trivy client mode)
      --skip-db-update               skip updating trivy vulnerability database
      --skip-java-db-update          skip updating trivy java index database
      --timeout duration             timeout when scan each images (default 10m0s)
      --tls-verify                   require HTTPS and verify certificates (default true)
      --trivy-db-repo strings        trivy vulnerability database repositories (default [public.ecr.aws/aquasecurity/trivy-db:2,ghcr.io/aquasecurity/trivy-db:2])
      --trivy-java-db-repo strings   trivy java database repositories (default [public.ecr.aws/aquasecurity/trivy-java-db:1,ghcr.io/aquasecurity/trivy-java-db:1])
      --trivy-log-output             show trivy log (only available in single worker mode)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```

## 在离线环境扫描容器镜像

参照以下步骤，在离线环境扫描容器镜像。

1. 使用 [mirror](/docs/v1.9/mirror/mirror) 命令，将 Trivy 数据库镜像拷贝至私有镜像仓库中，此步骤需要在有网络连接的环境中执行。

    创建一份镜像列表，用于拷贝 [trivy-db](https://github.com/aquasecurity/trivy-db/pkgs/container/trivy-db) 和 [trivy-java-db](https://github.com/aquasecurity/trivy-java-db/pkgs/container/trivy-java-db) 镜像。

    ```txt title="database_images.txt"
    ghcr.io/aquasecurity/trivy-db:latest
    ghcr.io/aquasecurity/trivy-java-db:1
    ```

    ```bash
    #!/bin/bash

    hangar mirror \
        --file="database_images.txt" \
        --destination="REGISTRY_SERVER_URL" \
        --jobs=2
    ```

1. 使用 `scan` 命令，指定 `--offline-scan=true`，`--trivy-db-repo` 和 `--trivy-java-db-repo` 参数，在离线环境扫描镜像。

    ```bash
    #!/bin/bash

    hangar scan \
        --file="example_image_list.txt" \
        --format="csv" \
        --offline-scan=true \
        --trivy-db-repo="REGISTRY_SERVER_URL/aquasecurity/trivy-db" \
        --trivy-java-db-repo="REGISTRY_SERVER_URL/aquasecurity/trivy-java-db" \
        --jobs=4
    ```

## 以 Trivy 客户端模式扫描容器镜像

Trivy 提供了[客户端/服务器模式](https://aquasecurity.github.io/trivy/v0.50/docs/references/modes/client-server/)，Hangar 支持以 Trivy 客户端模式进行容器镜像扫描操作。

1. 启动 [Trivy Server](https://aquasecurity.github.io/trivy/v0.50/docs/references/configuration/cli/trivy_server/)。

    ```bash
    trivy server --listen "127.0.0.1:4954"
    ```

1. 以 Trivy 客户端模式进行容器镜像扫描。

    ```bash
    hangar scan \
        --file="example_image_list.txt" \
        --server="127.0.0.1:4954" \
        --tls-verify=false \
        --jobs=4
    ```

## SBOM 输出

Hangar 还支持以 [SPDX](https://spdx.dev/) 格式输出容器镜像的 [SBOM](https://cyclonedx.org/capabilities/sbom/) 信息。您可以将 `--format` 参数设置为 `spdx-json` 或 `spdx-csv` 以 JSON / CSV 格式 输出镜像的 SPDX SBOM 数据。

当输出格式被设定为 `spdx-json`/`spdx-csv` 时，容器镜像漏洞扫描将被禁用。

```bash
hangar scan \
    --file="example_image_list.txt" \
    --format="spdx-json" \
    --jobs=4
```
