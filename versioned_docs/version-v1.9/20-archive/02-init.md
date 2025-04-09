---
title: "Archive init"
---

Initialize an empty hangar archive for [sync](/docs/v1.9/sync/sync) or [archive-store](/docs/v1.9/archive/store) commands use.

> Available from v1.9.2.

## Quick Start

```bash
hangar archive init ./example.zip
```

## Usage

```text title="hangar archive init --help"
Init an empty Archive file for use by sync/archive-store commands.

Usage:
  hangar archive init [flags]

Aliases:
  init, i

Examples:
hangar archive init ./ARCHIVE_NAME.zip

Flags:
  -h, --help   help for init

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```