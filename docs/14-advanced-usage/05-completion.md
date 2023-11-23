---
title: "Shell Completion"
---

The `hangar completion` command allows to generate shell completion scripts for different shells.

## Quick Start

Execute following command to enable Hangar shell completion.

- For `bash`:

    ```bash
    echo 'source <(hangar completion bash)' >> ~/.bashrc && source ~/.bashrc
    ```

- For `zsh`:

    ```bash
    echo 'source <(hangar completion zsh)' >> ~/.zshrc && source ~/.zshrc
    ```

## Usage

```txt title="hangar completion --help"
Generate the autocompletion script for hangar for the specified shell.
See each sub-command's help for details on how to use the generated script.

Usage:
  hangar completion [command]

Available Commands:
  bash        Generate the autocompletion script for bash
  fish        Generate the autocompletion script for fish
  powershell  Generate the autocompletion script for powershell
  zsh         Generate the autocompletion script for zsh

Flags:
  -h, --help   help for completion

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check

Use "hangar completion [command] --help" for more information about a command.
```
