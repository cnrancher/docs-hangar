---
title: "自动化测试"
---

[Hangar](https://github.com/cnrancher/hangar) 仓库中包含了 Unit Test （单元测试）和 Validation Test。

## Validation Test

### 在容器中运行 Validation Test

使用以下命令在容器中运行 Validation Test：

1. `make build`: 构建 Hangar 可执行文件。
1. `make validation-test`：执行 Hangar 所有子命令的 Validation Test。

### 在本地运行 Validation Test

按照以下步骤在本地运行 Hangar Validation Test：

1. 在本地构建 Hangar 可执行文件，参考 [在本地构建 Hangar](build#在本地构建-hangar)。
1. 安装 Python 依赖：

    ```sh
    cd test/
    pip install -r requirements.txt
    pip install tox
    ```

1. 执行 `scripts/registry.sh` 脚本，创建一个临时的 *私有镜像仓库服务器*，供测试使用。

    ```sh
    ./scripts/registry.sh
    ```

1. 执行某个指定的测试文件 / 测试用例：

    ```sh
    # 设定 REGISTRY_AUTH_FILE 环境变量，指定存储登录凭证的文件位置
    export REGISTRY_AUTH_FILE="${HOME}/.config/containers/auth.json"

    # 设定 REGISTRY_URL 环境变量
    export REGISTRY_URL=127.0.0.1:5000

    cd suite/

    # 运行指定的测试文件
    pytest -s test_help.py
    # 运行某个测试用例
    pytest -s test_help.py::test_help
    ```

1. 清理测试产生的文件：

    - 执行 `scripts/clean.sh`。
    - 手动删除 `registry` 文件夹。

## 单元测试

- 在容器中运行代码单元测试：

    ```bash
    make test
    ```

- 在本地运行代码单元测试：

    ```bash
    ./scripts/test.sh
    ```
