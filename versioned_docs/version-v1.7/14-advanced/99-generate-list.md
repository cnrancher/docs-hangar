---
title: "Generate Rancher image list"
---

The `hangar generate-list` command allows to generate a image list according to Rancher Version.

## Quick Start

According to the Rancher version, get the latest KDM data, and clone chart repos to local to generate a image-list used by Rancher:

```sh
hangar generate-list --rancher="v2.7.0"
```


:::warning

The image-list generated by this tool only includes images in the KDM (Kontainer Driver Metadata) and Chart repositories that matching the Rancher version.

The generated image-list has some differences from `rancher-images.txt` since the logic of checking the version constraint of chart images in this tool is different from Rancher generate image list functions.

Please download the official `rancher-images.txt` image list file on Rancher GitHub [Release page](https://github.com/rancher/rancher/releases).

:::

## Usage

```txt
'generate-list' generates an image-list from KDM data and Chart repositories used by Rancher.

Generate image list by just specifying Rancher version:

    hangar generate-list --rancher="v2.7.0-ent"

Generate image-list from custom cloned chart repos & KDM data.json file.

    hangar generate-list \
        --rancher="v2.7.0-ent" \
        --chart="./chart-repo-dir" \
        --system-chart="./system-chart-repo-dir" \
        --kdm="./kdm-data.json"

Usage:
  hangar generate-list [flags]

Flags:
      --chart strings           cloned chart repo path (URL is not supported)
      --dev                     switch to dev branch/URL of charts & KDM data
  -h, --help                    help for generate-list
      --kdm string              KDM file path or URL
  -o, --output string           output generated image list file (default "[RANCHER_VERSION]-images.txt")
      --output-linux string     generate linux image list
      --output-source string    generate image list with image source
      --output-windows string   generate windows image list
      --rancher string          rancher version (semver with 'v' prefix) (use '-ent' suffix to distinguish with RPM GC) (required)
      --registry string         customize the registry URL of generated image list
      --system-chart strings    cloned system chart repo path (URL is not supported)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```

### Customize KDM data file and Chart repositories

When executing this tool, if only the `--rancher` parameter is specified, hangar will obtain KDM data and
clone chart repos to generate image list automatically.

In addition, you can customize the KDM data.json file and Chart repository directory when generating the image-list by using `--chart`, `--system-chart`, `--kdm` options.

> You can use multiple `--chart` and `--system-chart` parameters to specify multiple chart repos.

Example:

```sh
# Download KDM data.json and clone chart repository into local directory firstly.
hangar generate-list \
    --rancher="v2.7.0" \
    --kdm ./data.json \
    --chart ./charts-1 \
    --chart ./charts-2 \
    --system-chart ./system-charts-1 \
    --system-chart ./system-charts-2
```