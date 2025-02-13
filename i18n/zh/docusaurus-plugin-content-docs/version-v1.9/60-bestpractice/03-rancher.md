---
title: "Rancher 离线安装"
---

本例将引导您使用 Hangar 快速搭建包含多架构容器镜像的 Registry 服务器，以用于 [Rancher](https://ranchermanager.docs.rancher.com/zh/) Air-Gap（离线环境）安装。

您可按照 Rancher [离线 Helm CLI 安装](https://ranchermanager.docs.rancher.com/zh/pages-for-subheaders/air-gapped-helm-cli-install) 文档在离线环境中安装 Rancher。

## 最佳实践

1. 部署一个 [registry](https://distribution.github.io/distribution/) 服务器，用于存储 Rancher 容器镜像。

    ```sh
    #!/bin/bash

    # 本例中，将 Rancher 容器镜像 Layer 文件存储至本地目录
    mkdir -p registry

    docker run -d \
        -p 5000:5000 \
        -v $(pwd)/registry:/var/lib/registry \
        --name registry \
        registry:2
    ```

    :::note

    Registry 服务器建议预留至少 100GB 的磁盘空间以存储 Rancher 所需的全部镜像。

    :::

    登录至私有镜像仓库：

    ```sh
    hangar login 'localhost:5000' --tls-verify=false
    ```

    :::note

    默认情况下，Registry 可以使用任意的用户名和密码登录。

    您可以参考 [Distribution Registry Token Authentication](https://distribution.github.io/distribution/spec/auth/) 配置 Registry 的认证信息，并参考 [HTTPS certificate](https://distribution.github.io/distribution/about/deploying/#get-a-certificate) 配置 HTTPS。

    :::

1. 在 [Rancher GitHub Release](https://github.com/rancher/rancher/releases) 页面下载 Rancher 的镜像列表文件 `rancher-images.txt`。

    > 本例使用版本为 `v2.7.9`。

    ```sh
    wget 'https://github.com/rancher/rancher/releases/download/v2.7.9/rancher-images.txt'
    ```

    `rancher-images.txt` 镜像列表文件包含 Rancher 核心镜像、Chart 镜像、以及 KDM（Kontainer Driver Metadata）镜像（KDM 镜像包含了 RKE、RKE2 和 K3s 镜像）。

1. 本例使用 `cert-manager` 生成 Rancher 的 HTTPS 证书。参考 [收集 cert-manager 镜像](https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-%E6%94%B6%E9%9B%86-cert-manager-%E9%95%9C%E5%83%8F) 文档将 `cert-manager` 镜像添加至 `rancher-images.txt` 镜像列表中。

    ```sh
    helm repo add jetstack https://charts.jetstack.io
    helm repo update
    helm fetch jetstack/cert-manager --version v1.11.0
    helm template ./cert-manager-v1.11.0.tgz | awk '$1 ~ /image:/ {print $2}' | sed s/\"//g >> ./rancher-images.txt
    ```

1. 如果私有镜像仓库的主机可以访问公共网络，您可使用 Hangar [mirror](/docs/v1.9/mirror/mirror) 命令，将 `amd64` 和 `arm64` 架构的容器镜像从公开的镜像仓库服务器 Mirror 至私有镜像仓库。

    ```sh
    #!/bin/bash

    hangar mirror \
        -f 'rancher-images.txt' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false
    ```

    可使用 [mirror validate](/docs/v1.9/mirror/validate) 命令确保镜像均被正确拷贝至私有镜像仓库中。

    ```sh
    #!/bin/bash

    hangar mirror validate \
        -f 'rancher-images.txt' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false
    ```

1. 如果主机无法访问至公共网络，可先在有网络连接的主机上使用 [hangar save](/docs/v1.9/save/save) 命令保存镜像，之后使用 [hangar load](/docs/v1.9/load/load) 命令将保存的容器镜像拷贝至私有镜像仓库中。

    ```sh
    #!/bin/bash

    # 将镜像保存在 rancher-images.zip 压缩包中。
    # 在有网络连接的设备执行以下命令。
    hangar save \
        -f 'rancher-images.txt' \
        -d 'rancher-images.zip' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5

    # 如有需要，验证已保存的镜像。
    hangar save validate \
        -f 'rancher-images.txt' \
        -d 'rancher-images.zip' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5
    ```

    :::note

    在下载镜像时请确保磁盘预留了足够的空间。以上命令最终下载的镜像压缩包体积可能会超过 50GB。

    建议至少预留 80GB 的磁盘空间。

    :::

    生成的 `rancher-images.zip` 压缩包含有 `amd64` 和 `arm64` 架构的容器镜像。

    ```sh
    #!/bin/bash

    # 将 rancher-images.zip 保存的镜像上传至私有镜像仓库。
    # 可在无网络连接的设备上执行此命令。
    hangar load \
        -s 'rancher-images.zip' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false

    # 如有需要，验证已上传的镜像。
    hangar load validate \
        -s 'rancher-images.zip' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false
    ```

1. 在部署完私有镜像仓库后，您可以使用该私有镜像仓库运行 RKE、RKE2 或 K3s 集群。

    本例中使用 K3s 版本 [v1.26.8+k3s1](https://github.com/k3s-io/k3s/releases/tag/v1.26.8%2Bk3s1) 作为 Rancher 的 Kubernetes 集群。

    `rancher-images.txt` 镜像列表文件中已包含了 K3s 所需镜像，您无需重新拷贝容器镜像至私有镜像仓库中。

    参考 [K3s 私有镜像仓库配置](https://docs.k3s.io/zh/installation/private-registry)，创建 `/etc/rancher/k3s/registries.yaml` 配置文件。

    :::note

    本例中，假设您的镜像仓库的 IP 地址绑定了域名 `registry.example.com`。

    :::

    ```sh
    mkdir -p /etc/rancher/k3s
    ```

    ```yaml title="/etc/rancher/k3s/registries.yaml"
    mirrors:
        docker.io:
            endpoint:
            - "http://registry.example.com:5000"
        "registry.example.com:5000":
            endpoint:
            - "http://registry.example.com:5000"
    ```

1. 参考 [离线安装 K3s](https://docs.k3s.io/zh/installation/airgap#%E5%AE%89%E8%A3%85-k3s)，下载 K3s `install.sh` 一键安装脚本和二进制文件，之后安装 K3s。

    ```sh
    export INSTALL_K3S_SKIP_DOWNLOAD=true
    export INSTALL_K3S_EXEC="--system-default-registry=registry.example.com:5000"

    ./install.sh
    ```

    在安装 Rancher 之前，您还需要安装 [kubectl](https://kubernetes.io/docs/reference/kubectl/) 和 [helm](https://helm.sh/docs/intro/install/) 工具。

1. 在安装 K3s 后，您可执行以下命令，从私有镜像仓库中拉取镜像，以确保 `registries.yaml` 配置正确：

    ```sh
    k3s crictl pull registry.example.com:5000/rancher/mirrored-pause:3.6
    ```

    使用以下命令查看已拉取的镜像：

    ```shell-session
    $ sudo k3s crictl images
    IMAGE                                                        TAG                    IMAGE ID            SIZE
    registry.example.com:5000/rancher/klipper-helm               v0.8.2-build20230815   5f89cb8137ccb       90.9MB
    registry.example.com:5000/rancher/local-path-provisioner     v0.0.24                b29384aeb4b13       14.9MB
    ......
    ```

1. 参考 [离线 Helm CLI 安装 Rancher](https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha) 文档，安装 Rancher。

    :::note

    本例中，假设您的 Rancher 服务器 IP 地址绑定了域名 `rancher.example.com`。

    :::

    安装 `cert-manager` CRD 并参考 [获取 Cert-Manager Chart](https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#3-%E8%8E%B7%E5%8F%96-cert-manager-chart) 文档安装 `cert-manager`。

    ```sh
    #!/bin/bash

    kubectl create namespace cert-manager
    kubectl apply -f cert-manager-crd.yaml

    helm install cert-manager ./cert-manager-v1.11.0.tgz \
        --namespace 'cert-manager' \
        --set image.repository='registry.example.com:5000/jetstack/cert-manager-controller' \
        --set webhook.image.repository='registry.example.com:5000/jetstack/cert-manager-webhook' \
        --set cainjector.image.repository='registry.example.com:5000/jetstack/cert-manager-cainjector' \
        --set startupapicheck.image.repository='registry.example.com:5000/jetstack/cert-manager-ctl'
    ```

    之后 [下载 Rancher Helm Chart 文件](https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#1-%E6%B7%BB%E5%8A%A0-helm-chart-%E4%BB%93%E5%BA%93) 并使用 Helm CLI 安装 Rancher。

    ```sh
    #!/bin/bash

    kubectl create namespace cattle-system

    helm install rancher ./rancher-2.7.9.tgz \
        --namespace cattle-system \
        --set replicas=1 \
        --set bootstrapPassword="RancherForFun" \
        --set hostname="rancher.example.com" \
        --set rancherImage="registry.example.com:5000/rancher/rancher" \
        --set systemDefaultRegistry="registry.example.com:5000" \
        --set useBundledSystemChart=true # Use the packaged Rancher system charts
    ```

1. 安装完成后，在浏览器通过 Rancher Hostname 链接（本例为 `rancher.example.com`）访问 Rancher。

    > 本例中，BootstrapPassword 为 `RancherForFun`。
