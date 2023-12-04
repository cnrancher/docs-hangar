---
title: "Login & Logout"
---

You need to execute `hangar login` for *SOURCE REGISTRY* (if images in source registry are private) and *DESTINATION REGISTRY* before copying images.

## Usage

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

## Example

```bash title="Login to docker hub"
hangar login "docker.io"
```

Add `--tls-verify=false` option if the registry server is using insecure HTTPS certificate or HTTP.

```bash
hangar login "127.0.0.1:5000" --tls-verify=false
```

:::note

Hangar will check whether the destination registry is logged in when executing the `mirror/load` command, but it won't check whether the source registry is logged in or not.

Therefore, you need to login to the source registry if the images in source registry are private.

:::

----

Use `hangar logout` to remove credentials of registry server.

```bash title="Logout from docker hub"
hangar logout "docker.io"
```
