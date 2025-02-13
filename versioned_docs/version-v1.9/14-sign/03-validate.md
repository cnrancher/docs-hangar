---
title: "Validate the signed image signature"
---

Use `hangar sign validate` command for validate the signed image sigstore signature.

:::note

The `hangar sign` command in version `1.8` is renamed to `signv1` in version `1.9` and marked as deprecated.

Use `hangar signv1 --help` to use the old sign V1 features.

:::

## Quick Start

Use following command to verify the signed image after executing the [sign](sign) command.

```bash
#!/bin/bash

hangar sign validate \
    --file="example_image_list.txt" \
    --sigstore-pubkey="sigstore.pub" \
    --registry="REGISTRY_SERVER_URL" \
    --jobs=4
```

## Usage

```txt title="hangar sign validate --help"
Validate the signed images with cosign sigstore public key

Usage:
  hangar sign validate -f IMAGE_LIST.txt [flags]

Examples:
# Validate the signed images by sigstore public key file.
hangar sign validate \
        --file IMAGE_LIST.txt \
        --key cosign.pub \
        --arch amd64,arm64 \
        --os linux

Flags:
  -a, --arch strings                     architecture list of images (default [amd64,arm64])
  -y, --auto-yes                         answer yes automatically (used in shell script)
      --certificate-identity string      The identity expected in a valid Fulcio certificate. Valid values include email address, DNS names, IP addresses, and URIs. Must be set for keyless flows.
      --certificate-oidc-issuer string   The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth. Must be set for keyless flows.
  -o, --failed string                    file name of the sign failed image list (default "sign-failed.txt")
  -f, --file string                      image list file
      --format string                    output report format (available: json,yaml,csv) (default "json")
  -h, --help                             help for validate
      --insecure-ignore-tlog             ignore transparency log verification, to be used when an artifact signature has not been uploaded to the transparency log. Artifacts cannot be publicly verified when not included in a log
  -j, --jobs int                         worker number, copy images parallelly (1-20) (default 1)
  -k, --key string                       path to the cosign public key file
      --offline                          only allow offline verification
      --os strings                       OS list of images (default [linux])
      --project string                   override all image projects in image list
      --registry string                  override all image registry URL in image list
      --rekor-url string                 address of rekor STL server (default "https://rekor.sigstore.dev")
  -r, --report string                    sign validate report output file (default "sign-validate-report.[FORMAT]")
      --timeout duration                 timeout when validate each images (default 10m0s)
      --tls-verify                       require HTTPS and verify certificates
      --validate-manifest-index          validate cosign sigstore signature of the manifest index (default true)

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```