---
title: "Rancher Air-Gap Installation"
---

This example will guide you to setup a multi-arch private image registry server for [Rancher](https://ranchermanager.docs.rancher.com/) Air-Gapped installation.

You can follow the Rancher [Air-Gapped Helm CLI Install](https://ranchermanager.docs.rancher.com/pages-for-subheaders/air-gapped-helm-cli-install) to install Rancher in Air-Gapped environment.

## Best Practice

1. Setup a private [registry](https://distribution.github.io/distribution/) server to host the container images used by Rancher.

    ```sh
    #!/bin/bash

    # In this example, we create a directory to store the container image layers.
    mkdir -p registry

    docker run -d \
        -p 5000:5000 \
        -v $(pwd)/registry:/var/lib/registry \
        --name registry \
        registry:2
    ```

    :::note

    It is recommended to reserve at least 100GB disk space for the registry server to store Rancher images.

    :::

    Login to the private image registry.

    ```sh
    hangar login 'localhost:5000' --tls-verify=false
    ```

    :::note

    By default, the registry server can be login with any username and password.

    You can configure the authentication config of the registry server by refer to [Distribution Registry Token Authentication](https://distribution.github.io/distribution/spec/auth/) and setup the [HTTPS certificate](https://distribution.github.io/distribution/about/deploying/#get-a-certificate) to use in production.

    :::

1. Download the Rancher image list file `rancher-images.txt` from [Rancher GitHub Release](https://github.com/rancher/rancher/releases) page.

    > We use version `v2.7.9` in this example.

    ```sh
    wget 'https://github.com/rancher/rancher/releases/download/v2.7.9/rancher-images.txt'
    ```

    The `rancher-images.txt` image list file contains both rancher core, charts, Kontainer Driver Metadata images (RKE, RKE2 and K3s images).

1. In this example, we use `cert-manager` to generate the HTTPS certificate for Rancher, refer to the Rancher [Collect the cert-manager image](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-collect-the-cert-manager-image) instruction to collect the cert-manager images into `rancher-images.txt` image list file.

    ```sh
    helm repo add jetstack https://charts.jetstack.io
    helm repo update
    helm fetch jetstack/cert-manager --version v1.11.0
    helm template ./cert-manager-v1.11.0.tgz | awk '$1 ~ /image:/ {print $2}' | sed s/\"//g >> ./rancher-images.txt
    ```

1. If the server has public internet connection, use hangar [mirror](/docs/v1.7/mirror/mirror) command to mirror both `amd64` and `arm64` container images from public registry server to your private image registry.

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

    Use the hangar [mirror validate](/docs/v1.7/mirror/validate) command to verify the copied container images if necessary.

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

1. If the server does not have public internet connection, use [hangar save](/docs/v1.7/save/save) and [hangar load](/docs/v1.7/load/load) command to copy container images to the private registry server.

    ```sh
    #!/bin/bash

    # Save images into rancher-images.zip.
    # Run these commands on a internet accessible machine.
    hangar save \
        -f 'rancher-images.txt' \
        -d 'rancher-images.zip' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5

    # Validate the saved images if necessary.
    hangar save validate \
        -f 'rancher-images.txt' \
        -d 'rancher-images.zip' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5
    ```

    :::note

    You need to reserve enough disk space when downloading all images of Rancher. The size of the saved archive file may larger than 50GB.

    It is recommended to reserve at least 80GB disk space.

    :::

    The saved `rancher-images.zip` archive file contains both `amd64` and `arm64` architecture container images.

    ```sh
    #!/bin/bash

    # Load images from rancher-images.zip to the private image registry server.
    # Run these commands on air-gapped machine.
    hangar load \
        -s 'rancher-images.zip' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false

    # Validate the loaded images if necessary.
    hangar load validate \
        -s 'rancher-images.zip' \
        -d 'localhost:5000' \
        --arch 'amd64,arm64' \
        --os 'linux' \
        --jobs 5 \
        --tls-verify=false
    ```

1. After setup the private image registry server used by Rancher, you can use this registry server to run RKE, RKE2 or K3s Kubernetes clusters.

    In this example, we use K3s version [v1.26.8+k3s1](https://github.com/k3s-io/k3s/releases/tag/v1.26.8%2Bk3s1) to prepare the Kurbernetes cluster used by Rancher.

    The rancher image list file `rancher-images.txt` already contains K3s images, you do not need to copy K3s images into your private image registry again.

    Create the `/etc/rancher/k3s/registries.yaml` configuration file by refer to [K3s Private Registry Configuration](https://docs.k3s.io/installation/private-registry).

    :::note

    In this example, we assume that the private image registry IP address was bind to the URL `registry.example.com`.

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

1. Download the K3s `install.sh` install script and binary file by refer to the guide of [Air Gap install K3s](https://docs.k3s.io/installation/airgap#install-k3s), then install K3s.

    ```sh
    export INSTALL_K3S_SKIP_DOWNLOAD=true
    export INSTALL_K3S_EXEC="--system-default-registry=registry.example.com:5000"

    ./install.sh
    ```

    You can execute following command to pull images from the private image registry server to ensure that the `registries.yaml` config is working properly:

    ```sh
    k3s crictl pull registry.example.com:5000/rancher/mirrored-pause:3.6
    ```

    Use following command to view pulled images from the private image registry:

    ```shell-session
    $ sudo k3s crictl images
    IMAGE                                                        TAG                    IMAGE ID            SIZE
    registry.example.com:5000/rancher/klipper-helm               v0.8.2-build20230815   5f89cb8137ccb       90.9MB
    registry.example.com:5000/rancher/local-path-provisioner     v0.0.24                b29384aeb4b13       14.9MB
    ......
    ```

1. Install Rancher on K3s cluster by refer to the Rancher [Air-Gapped Installation instruction](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha) page.

    :::note

    In this example, we assume that the IP address of rancher server was bind to the URL `rancher.example.com`.

    :::

    Apply the cert-manager CRD and then install [cert-manager Helm Chart](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#3-fetch-the-cert-manager-chart).

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

    Then [Download the Rancher Helm Chart file](https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#1-add-the-helm-chart-repository) and install Rancher via Helm CLI.

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

1. Visit the rancher hostname (in this example is `rancher.example.com`) to access Rancher.

    > The bootstrap password in this example is `RancherForFun`.
