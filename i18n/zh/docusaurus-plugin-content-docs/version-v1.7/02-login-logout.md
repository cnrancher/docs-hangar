---
title: "Login & Logout"
---

您需要在执行拷贝容器镜像操作之前对 *源镜像仓库* 和 *目标镜像仓库* 执行 `hangar login`。

## 使用方法

```txt title="hangar login --help"
Login to registry server

Usage:
  hangar login registry-url [flags]

Examples:
  hangar login docker.io

Flags:
      --authfile string    path of the authentication file. Use REGISTRY_AUTH_FILE environment variable to override
      --cert-dir string    use certificates at the specified path to access the registry
      --get-login          Return the current login user for the registry
  -h, --help               help for login
  -p, --password string    Password for registry
      --password-stdin     Take the password from stdin
      --retry-times int    the number of times to possibly retry (default 3)
      --timeout duration   login timeout
      --tls-verify         require HTTPS and verify certificates
  -u, --username string    Username for registry
  -v, --verbose            Write more detailed information to stdout

Global Flags:
      --debug             enable debug output
      --insecure-policy   run Hangar without policy check
```

## 例子

```bash title="Login to docker hub"
hangar login "docker.io"
```

若使用自签名 HTTPS 证书或 HTTP 镜像仓库，可使用 `--tls-verify=false` 参数。

```bash
hangar login "127.0.0.1:5000" --tls-verify=false
```

:::note

Hangar 会在执行 `mirror/load` 命令时自动检测 *目标镜像仓库* 是否已登录。
但不会检测 *源镜像仓库* 是否已经登录。

因此若 *源镜像仓库* 中存储的镜像为私有镜像，请手动对其执行 `hangar login`。

:::

----

使用 `hangar logout` 以移除存储的镜像仓库登录凭证信息。

```bash title="Logout from docker hub"
hangar logout "docker.io"
```
