"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9571],{8561:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=n(5893),s=n(1151);const t={title:"Rancher Air-Gap Installation"},i=void 0,c={id:"bestpractice/rancher",title:"Rancher Air-Gap Installation",description:"This example will guide you to setup a multi-arch private image registry server for Rancher Air-Gapped installation.",source:"@site/versioned_docs/version-v1.8/60-bestpractice/03-rancher.md",sourceDirName:"60-bestpractice",slug:"/bestpractice/rancher",permalink:"/docs/v1.8/bestpractice/rancher",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/60-bestpractice/03-rancher.md",tags:[],version:"v1.8",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:3,frontMatter:{title:"Rancher Air-Gap Installation"},sidebar:"docs",previous:{title:"RKE2 Air-Gap Installation",permalink:"/docs/v1.8/bestpractice/rke2"},next:{title:"Hangar Docker Image",permalink:"/docs/v1.8/docker-image"}},l={},o=[{value:"Best Practice",id:"best-practice",level:2}];function h(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["This example will guide you to setup a multi-arch private image registry server for ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/",children:"Rancher"})," Air-Gapped installation."]}),"\n",(0,a.jsxs)(r.p,{children:["You can follow the Rancher ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/air-gapped-helm-cli-install",children:"Air-Gapped Helm CLI Install"})," to install Rancher in Air-Gapped environment."]}),"\n",(0,a.jsx)(r.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Setup a private ",(0,a.jsx)(r.a,{href:"https://distribution.github.io/distribution/",children:"registry"})," server to host the container images used by Rancher."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# In this example, we create a directory to store the container image layers.\nmkdir -p registry\n\ndocker run -d \\\n    -p 5000:5000 \\\n    -v $(pwd)/registry:/var/lib/registry \\\n    --name registry \\\n    registry:2\n"})}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsx)(r.p,{children:"It is recommended to reserve at least 100GB disk space for the registry server to store Rancher images."})}),"\n",(0,a.jsx)(r.p,{children:"Login to the private image registry."}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"hangar login 'localhost:5000' --tls-verify=false\n"})}),"\n",(0,a.jsxs)(r.admonition,{type:"note",children:[(0,a.jsx)(r.p,{children:"By default, the registry server can be login with any username and password."}),(0,a.jsxs)(r.p,{children:["You can configure the authentication config of the registry server by refer to ",(0,a.jsx)(r.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," and setup the ",(0,a.jsx)(r.a,{href:"https://distribution.github.io/distribution/about/deploying/#get-a-certificate",children:"HTTPS certificate"})," to use in production."]})]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Download the Rancher image list file ",(0,a.jsx)(r.code,{children:"rancher-images.txt"})," from ",(0,a.jsx)(r.a,{href:"https://github.com/rancher/rancher/releases",children:"Rancher GitHub Release"})," page."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["We use version ",(0,a.jsx)(r.code,{children:"v2.7.9"})," in this example."]}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"wget 'https://github.com/rancher/rancher/releases/download/v2.7.9/rancher-images.txt'\n"})}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"rancher-images.txt"})," image list file contains both rancher core, charts, Kontainer Driver Metadata images (RKE, RKE2 and K3s images)."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["In this example, we use ",(0,a.jsx)(r.code,{children:"cert-manager"})," to generate the HTTPS certificate for Rancher, refer to the Rancher ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-collect-the-cert-manager-image",children:"Collect the cert-manager image"})," instruction to collect the cert-manager images into ",(0,a.jsx)(r.code,{children:"rancher-images.txt"})," image list file."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v1.11.0\nhelm template ./cert-manager-v1.11.0.tgz | awk '$1 ~ /image:/ {print $2}' | sed s/\\\"//g >> ./rancher-images.txt\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["If the server has public internet connection, use hangar ",(0,a.jsx)(r.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," command to mirror both ",(0,a.jsx)(r.code,{children:"amd64"})," and ",(0,a.jsx)(r.code,{children:"arm64"})," container images from public registry server to your private image registry."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror \\\n    -f 'rancher-images.txt' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Use the hangar ",(0,a.jsx)(r.a,{href:"/docs/v1.8/mirror/validate",children:"mirror validate"})," command to verify the copied container images if necessary."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror validate \\\n    -f 'rancher-images.txt' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["If the server does not have public internet connection, use ",(0,a.jsx)(r.a,{href:"/docs/v1.8/save/save",children:"hangar save"})," and ",(0,a.jsx)(r.a,{href:"/docs/v1.8/load/load",children:"hangar load"})," command to copy container images to the private registry server."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# Save images into rancher-images.zip.\n# Run these commands on a internet accessible machine.\nhangar save \\\n    -f 'rancher-images.txt' \\\n    -d 'rancher-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n\n# Validate the saved images if necessary.\nhangar save validate \\\n    -f 'rancher-images.txt' \\\n    -d 'rancher-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n"})}),"\n",(0,a.jsxs)(r.admonition,{type:"note",children:[(0,a.jsx)(r.p,{children:"You need to reserve enough disk space when downloading all images of Rancher. The size of the saved archive file may larger than 50GB."}),(0,a.jsx)(r.p,{children:"It is recommended to reserve at least 80GB disk space."})]}),"\n",(0,a.jsxs)(r.p,{children:["The saved ",(0,a.jsx)(r.code,{children:"rancher-images.zip"})," archive file contains both ",(0,a.jsx)(r.code,{children:"amd64"})," and ",(0,a.jsx)(r.code,{children:"arm64"})," architecture container images."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# Load images from rancher-images.zip to the private image registry server.\n# Run these commands on air-gapped machine.\nhangar load \\\n    -s 'rancher-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n\n# Validate the loaded images if necessary.\nhangar load validate \\\n    -s 'rancher-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"After setup the private image registry server used by Rancher, you can use this registry server to run RKE, RKE2 or K3s Kubernetes clusters."}),"\n",(0,a.jsxs)(r.p,{children:["In this example, we use K3s version ",(0,a.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.26.8%2Bk3s1",children:"v1.26.8+k3s1"})," to prepare the Kurbernetes cluster used by Rancher."]}),"\n",(0,a.jsxs)(r.p,{children:["The rancher image list file ",(0,a.jsx)(r.code,{children:"rancher-images.txt"})," already contains K3s images, you do not need to copy K3s images into your private image registry again."]}),"\n",(0,a.jsxs)(r.p,{children:["Create the ",(0,a.jsx)(r.code,{children:"/etc/rancher/k3s/registries.yaml"})," configuration file by refer to ",(0,a.jsx)(r.a,{href:"https://docs.k3s.io/installation/private-registry",children:"K3s Private Registry Configuration"}),"."]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["In this example, we assume that the private image registry IP address was bind to the URL ",(0,a.jsx)(r.code,{children:"registry.example.com"}),"."]})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"mkdir -p /etc/rancher/k3s\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yaml",metastring:'title="/etc/rancher/k3s/registries.yaml"',children:'mirrors:\n    docker.io:\n        endpoint:\n        - "http://registry.example.com:5000"\n    "registry.example.com:5000":\n        endpoint:\n        - "http://registry.example.com:5000"\n'})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Download the K3s ",(0,a.jsx)(r.code,{children:"install.sh"})," install script and binary file by refer to the guide of ",(0,a.jsx)(r.a,{href:"https://docs.k3s.io/installation/airgap#install-k3s",children:"Air Gap install K3s"}),", then install K3s."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'export INSTALL_K3S_SKIP_DOWNLOAD=true\nexport INSTALL_K3S_EXEC="--system-default-registry=registry.example.com:5000"\n\n./install.sh\n'})}),"\n",(0,a.jsxs)(r.p,{children:["You also need to install ",(0,a.jsx)(r.a,{href:"https://kubernetes.io/docs/reference/kubectl/",children:"kubectl"})," and ",(0,a.jsx)(r.a,{href:"https://helm.sh/docs/intro/install/",children:"helm"})," command line tools before installing Rancher."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["You can execute following command to pull images from the private image registry server to ensure that the ",(0,a.jsx)(r.code,{children:"registries.yaml"})," config is working properly:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"k3s crictl pull registry.example.com:5000/rancher/mirrored-pause:3.6\n"})}),"\n",(0,a.jsx)(r.p,{children:"Use following command to view pulled images from the private image registry:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell-session",children:"$ sudo k3s crictl images\nIMAGE                                                        TAG                    IMAGE ID            SIZE\nregistry.example.com:5000/rancher/klipper-helm               v0.8.2-build20230815   5f89cb8137ccb       90.9MB\nregistry.example.com:5000/rancher/local-path-provisioner     v0.0.24                b29384aeb4b13       14.9MB\n......\n"})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Install Rancher on K3s cluster by refer to the Rancher ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",children:"Air-Gapped Installation instruction"})," page."]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["In this example, we assume that the IP address of rancher server was bind to the URL ",(0,a.jsx)(r.code,{children:"rancher.example.com"}),"."]})}),"\n",(0,a.jsxs)(r.p,{children:["Apply the cert-manager CRD and then install ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#3-fetch-the-cert-manager-chart",children:"cert-manager Helm Chart"}),"."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\nkubectl create namespace cert-manager\nkubectl apply -f cert-manager-crd.yaml\n\nhelm install cert-manager ./cert-manager-v1.11.0.tgz \\\n    --namespace 'cert-manager' \\\n    --set image.repository='registry.example.com:5000/jetstack/cert-manager-controller' \\\n    --set webhook.image.repository='registry.example.com:5000/jetstack/cert-manager-webhook' \\\n    --set cainjector.image.repository='registry.example.com:5000/jetstack/cert-manager-cainjector' \\\n    --set startupapicheck.image.repository='registry.example.com:5000/jetstack/cert-manager-ctl'\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Then ",(0,a.jsx)(r.a,{href:"https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#1-add-the-helm-chart-repository",children:"Download the Rancher Helm Chart file"})," and install Rancher via Helm CLI."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sh",children:'#!/bin/bash\n\nkubectl create namespace cattle-system\n\nhelm install rancher ./rancher-2.7.9.tgz \\\n    --namespace cattle-system \\\n    --set replicas=1 \\\n    --set bootstrapPassword="RancherForFun" \\\n    --set hostname="rancher.example.com" \\\n    --set rancherImage="registry.example.com:5000/rancher/rancher" \\\n    --set systemDefaultRegistry="registry.example.com:5000" \\\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n'})}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Visit the rancher hostname (in this example is ",(0,a.jsx)(r.code,{children:"rancher.example.com"}),") to access Rancher."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:["The bootstrap password in this example is ",(0,a.jsx)(r.code,{children:"RancherForFun"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>i});var a=n(7294);const s={},t=a.createContext(s);function i(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);