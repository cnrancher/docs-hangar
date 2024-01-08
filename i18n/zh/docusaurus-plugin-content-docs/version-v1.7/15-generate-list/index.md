---
title: "生成 Rancher 更新的镜像列表"
---

`hangar generate-list` 命令用于生成 Rancher 镜像列表以及 Rancher 所支持的 K8s 集群版本号列表。

> 仅 Hangar v1.7.1 及后续版本支持生成 Rancher K8s 集群版本列表功能。

## 快速上手

根据 Rancher 版本号，获取最新的 KDM 数据，自动克隆 Chart 仓库，生成镜像列表以及 K8s 集群（K3s, RKE, RKE2）版本列表：

```sh
hangar generate-list --rancher="v2.8.0-ent"
```

> 以 `-ent` 结尾的 Rancher 版本号表示 Rancher Prime Manager GC 版本。

生成的镜像列表文件名为 `v2.8.0-ent-images.txt`，支持的集群版本列表为 `v2.8.0-versions.txt`。

Hangar 的 `generate-list` 命令主要用于当 Rancher 的 KDM 数据和 Helm Chart 仓库存在更新时，获取并同步这些更新的镜像至私有镜像仓库中。

此工具生成的镜像列表仅包含 KDM 和 Helm Chart 仓库中与 Rancher 版本相匹配的镜像。因本工具筛选镜像的逻辑与 Rancher 生成的 `rancher-images.txt` 有差异，如需完整的 Rancher 镜像列表，请在 Rancher 官方的 GitHub [Release 页面](https://github.com/rancher/rancher/releases) 下载完整的镜像列表。

:::warning

**此工具生成镜像列表时需要访问 GitHub 仓库等资源，请确保网络链接畅通。**

:::

## 使用方法

```text title="hangar generate-list --help"
'generate-list' generates an image list and k8s version list from KDM data and Chart repos of Rancher.

Generate the image list by simply specifying the Rancher version:

    hangar generate-list --rancher="v2.8.0"

You can also download the KDM JSON file and clone chart repos manually:

    hangar generate-list \
        --rancher="v2.8.0" \
        --chart="./chart-repo-dir" \
        --system-chart="./system-chart-repo-dir" \
        --kdm="./kdm-data.json"

Usage:
  hangar generate-list [flags]

Flags:
  -y, --auto-yes                 answer yes automatically (used in shell script)
      --chart strings            cloned chart repo path (URL not supported)
      --dev                      switch to dev branch/URL of charts & KDM data
  -h, --help                     help for generate-list
      --kdm string               KDM file path or URL
  -o, --output string            output linux image list file (default "[RANCHER_VERSION]-images.txt")
      --output-source string     output the image list with image source if specified
      --output-versions string   output Rancher supported k8s versions (default "[RANCHER_VERSION]-k8s-versions.txt")
      --output-windows string    output the windows image list if specified
      --rancher string           rancher version (semver with 'v' prefix) (use '-ent' suffix to distinguish with Rancher Prime Manager GC) (required)
      --registry string          customize the registry URL of the generated image list
      --system-chart strings     cloned system chart repo path (URL not supported)
      --tls-verify               require HTTPS and verify certificates

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```

### 自定义 KDM 文件和 Chart 仓库

执行此工具时，如果只指定 `--rancher` 参数，将自动根据 Rancher 版本获取 KDM 数据并克隆 Chart 仓库，生成镜像列表文件。除此之外您可通过 `--chart`、`--system-chart`、`--kdm` 参数自定义生成镜像列表时读取的 KDM 数据文件和 Chart 仓库目录。

> 在有多个 chart 和 system-chart 仓库需要加载时，可指定多个 `--chart` 和 `--system-chart` 参数。

```sh
# 首先下载 KDM data.json，克隆 chart 仓库到本地

hangar generate-list \
    --rancher="v2.8.0" \
    --kdm="./data.json" \
    --chart="./charts-1" \
    --chart="./charts-2" \
    --system-chart="./system-charts-1" \
    --system-chart="./system-charts-2"
```
