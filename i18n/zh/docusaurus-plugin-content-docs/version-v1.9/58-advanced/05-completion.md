---
title: "命令行补全"
---

`hangar completion` 命令可以为不同的 Shell 生成命令行补全脚本。

## 快速上手

执行以下命令，启用 Hangar 命令行补全。

- 使用 `bash`:

    ```bash
    echo 'source <(hangar completion bash)' >> ~/.bashrc && source ~/.bashrc
    ```

- 使用 `zsh`:

    ```bash
    echo 'source <(hangar completion zsh)' >> ~/.zshrc && source ~/.zshrc
    ```

## 使用方法

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
