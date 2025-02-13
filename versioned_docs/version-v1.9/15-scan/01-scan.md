---
title: "Scan image vulnerabilities"
---

Hangar has built-in [trivy](https://aquasecurity.github.io/trivy/)’s container image scanning function. You can use `hangar scan` command for scanning multi-platform container image vulnerabilities.

## Quick Start

Use following command to scan image vulnerabilities.

```bash
#!/bin/bash

hangar scan \
    --file="example_image_list.txt" \
    --format="csv" \
    --arch="amd64,arm64" \
    --os="linux" \
    --jobs=4
```

By default, the scan report is in `CSV` form format, you can customize the vulnerability scan report output `--format` option to `json` or `yaml` format, for usage of the `spdx-json` format, see [SBOM Output](#sbom-output) below.

If other errors occured when scan images (e.g. network connection timeout or manifest unknow), the scan failed images will output to `scan-failed.txt`.

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

## Scan in Air-Gapped mode

Follow these instructions to scan images in Air-Gapped environment.

1. Use [mirror](/docs/v1.9/mirror/mirror) command to mirror trivy database images to private image registry, this step requires the network connection.

    Create a image list file to copy [trivy-db](https://github.com/aquasecurity/trivy-db/pkgs/container/trivy-db) and [trivy-java-db](https://github.com/aquasecurity/trivy-java-db/pkgs/container/trivy-java-db) images.

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

1. Use `scan` command with `--offline-scan=true` and `--trivy-db-repo`, `--trivy-java-db-repo` options.

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

## Scan in trivy client mode

Trivy provides a [server-client mode](https://aquasecurity.github.io/trivy/v0.50/docs/references/modes/client-server/), Hangar can perform as a trivy client when scanning image.

1. Launch a [trivy server](https://aquasecurity.github.io/trivy/v0.50/docs/references/configuration/cli/trivy_server/).

    ```bash
    trivy server --listen "127.0.0.1:4954"
    ```

1. Use Hangar to scan images in trivy client mode.

    ```bash
    hangar scan \
        --file="example_image_list.txt" \
        --server="127.0.0.1:4954" \
        --tls-verify=false \
        --jobs=4
    ```

## SBOM Output

Hangar also supports to output container image [SBOM](https://cyclonedx.org/capabilities/sbom/) data in [SPDX](https://spdx.dev/) json format, you can specify the `--format` option to `spdx-json` or `spdx-csv` to output the SPDX SBOM data of images in JSON/CSV format.

When output format is set to `spdx-json`/`spdx-csv`, the vulnerability scanning function will be disabled.

```bash
hangar scan \
    --file="example_image_list.txt" \
    --format="spdx-json" \
    --jobs=4
```
