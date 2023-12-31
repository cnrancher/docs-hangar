---
title: "generate-list Command"
---

## QuickStart

According to the Rancher version, get the latest KDM data, and clone chart repos to local to generate a image-list used by Rancher:

```sh
hangar generate-list -rancher="v2.7.0"
```

The image-list generated by this tool only includes images in the KDM data and Chart repositories that matching the Rancher version.

The generated image-list has some differences from `rancher-images.txt` since the logic of checking the version constraint of chart images in this tool is different from Rancher generate image list functions.

## Usage

```txt
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
      --debug        enable debug output
      --tls-verify   enable https tls verify (default true)
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
