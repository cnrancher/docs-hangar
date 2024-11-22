"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6360],{3881:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var i=n(4848),s=n(8453);const a={title:"RKE2 Air-Gap Installation"},t=void 0,c={id:"bestpractice/rke2",title:"RKE2 Air-Gap Installation",description:"This example will guide you to setup a multi-arch private image registry server for RKE2 Air-Gapped installation.",source:"@site/versioned_docs/version-v1.7/20-bestpractice/02-rke2.md",sourceDirName:"20-bestpractice",slug:"/bestpractice/rke2",permalink:"/docs/v1.7/bestpractice/rke2",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/20-bestpractice/02-rke2.md",tags:[],version:"v1.7",lastUpdatedAt:1732247558e3,sidebarPosition:2,frontMatter:{title:"RKE2 Air-Gap Installation"},sidebar:"docs",previous:{title:"K3s Air-Gapped Installation",permalink:"/docs/v1.7/bestpractice/k3s"},next:{title:"Rancher Air-Gap Installation",permalink:"/docs/v1.7/bestpractice/rancher"}},l={},o=[{value:"Best Practice",id:"best-practice",level:2}];function d(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["This example will guide you to setup a multi-arch private image registry server for ",(0,i.jsx)(r.a,{href:"https://docs.rke2.io/",children:"RKE2"})," Air-Gapped installation."]}),"\n",(0,i.jsxs)(r.p,{children:["You can use the ",(0,i.jsx)(r.a,{href:"https://docs.rke2.io/install/airgap#private-registry-method",children:"RKE2 Private Registry Method"})," to prepare the private image registry server used by RKE2."]}),"\n",(0,i.jsx)(r.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Setup a private ",(0,i.jsx)(r.a,{href:"https://distribution.github.io/distribution/",children:"registry"})," server to host the container images used by RKE2."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# In this example, we create a directory to store the container image layers.\nmkdir -p registry\n\ndocker run -d \\\n    -p 5000:5000 \\\n    -v $(pwd)/registry:/var/lib/registry \\\n    --name registry \\\n    registry:2\n"})}),"\n",(0,i.jsx)(r.p,{children:"Login to the private image registry."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"hangar login 'localhost:5000' --tls-verify=false\n"})}),"\n",(0,i.jsxs)(r.admonition,{type:"note",children:[(0,i.jsx)(r.p,{children:"By default, the registry server can be login with any username and password."}),(0,i.jsxs)(r.p,{children:["You can configure the authentication config of the registry server by refer to ",(0,i.jsx)(r.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," and setup the ",(0,i.jsx)(r.a,{href:"https://distribution.github.io/distribution/about/deploying/#get-a-certificate",children:"HTTPS certificate"})," to use in production."]})]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Download the RKE2 image list file from ",(0,i.jsx)(r.a,{href:"https://github.com/rancher/rke2/releases",children:"RKE2 GitHub Release"})," page."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["We use version ",(0,i.jsx)(r.code,{children:"v1.27.7+rke2r1"})," in this example."]}),"\n"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"# Download the AMD64 image list file\nwget 'https://github.com/rancher/rke2/releases/download/v1.27.7%2Brke2r1/rke2-images-all.linux-amd64.txt'\n\n# Download the ARM64 image list file\nwget 'https://github.com/rancher/rke2/releases/download/v1.27.7%2Brke2r1/rke2-images-all.linux-arm64.txt'\n"})}),"\n",(0,i.jsxs)(r.p,{children:["You can use following command to merge ",(0,i.jsx)(r.code,{children:"amd64"})," and ",(0,i.jsx)(r.code,{children:"arm64"})," image list into one file if you need to run RKE2 on both ",(0,i.jsx)(r.code,{children:"amd64"})," and ",(0,i.jsx)(r.code,{children:"arm64"})," architectures."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"sort rke2-images-all.linux-*.txt | uniq > rke2-images-all.linux.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["If the server has the ability to access Docker Hub registry server (with internet connection), use Hangar ",(0,i.jsx)(r.a,{href:"/docs/v1.7/mirror/mirror",children:"mirror"})," command to mirror both ",(0,i.jsx)(r.code,{children:"amd64"})," and ",(0,i.jsx)(r.code,{children:"arm64"})," container images from Docker Hub to your private image registry."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Use the Hangar ",(0,i.jsx)(r.a,{href:"/docs/v1.7/mirror/validate",children:"mirror validate"})," command to verify the copied container images if necessary."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror validate \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["If the server can't access Docker Hub (without internet connection), use ",(0,i.jsx)(r.a,{href:"/docs/v1.7/save/save",children:"hangar save"})," and ",(0,i.jsx)(r.a,{href:"/docs/v1.7/load/load",children:"hangar load"})," command to copy container image to the private registry server."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# Save images into rke2-images.zip.\n# Run these commands on a internet accessible machine.\nhangar save \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'rke2-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n\n# Validate the saved images if necessary.\nhangar save validate \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'rke2-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n"})}),"\n",(0,i.jsxs)(r.p,{children:["The saved ",(0,i.jsx)(r.code,{children:"rke2-images.zip"})," archive file contains both ",(0,i.jsx)(r.code,{children:"amd64"})," and ",(0,i.jsx)(r.code,{children:"arm64"})," container images."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"#!/bin/bash\n\n# Load images from rke2-images.zip to the private image registry server.\n# Run these commands on air-gapped machine.\nhangar load \\\n    -s 'rke2-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n\n# Validate the loaded images if necessary.\nhangar load validate \\\n    -s 'rke2-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Create the ",(0,i.jsx)(r.code,{children:"/etc/rancher/rke2/registries.yaml"})," configuration file by refer to ",(0,i.jsx)(r.a,{href:"https://docs.rke2.io/install/containerd_registry_configuration",children:"RKE2 Containerd Registry Configuration"}),"."]}),"\n",(0,i.jsx)(r.admonition,{type:"note",children:(0,i.jsxs)(r.p,{children:["In this example, we assume that the private image registry IP address was bind to the URL ",(0,i.jsx)(r.code,{children:"registry.example.com"}),"."]})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"mkdir -p /etc/rancher/rke2\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",metastring:'title="/etc/rancher/rke2/registries.yaml"',children:'mirrors:\n    docker.io:\n        endpoint:\n        - "http://registry.example.com:5000"\n    "registry.example.com:5000":\n        endpoint:\n        - "http://registry.example.com:5000"\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["Install RKE2 by refer to the guide of ",(0,i.jsx)(r.a,{href:"https://docs.rke2.io/install/airgap#install-rke2",children:"RKE2 Air-Gap Install"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Configure the RKE2 system default registry to ",(0,i.jsx)(r.code,{children:"registry.example.com"}),"."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yaml",metastring:'title="/etc/rancher/rke2/config.yaml"',children:'system-default-registry: "registry.example.com:5000"\n'})}),"\n",(0,i.jsx)(r.p,{children:"You can use following commands to view the status of RKE2 server."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:'# Check the RKE2 systemd service status\nsystemctl status rke2-server\n\n# View all pods of the RKE2 cluster\n# The default kube config file is /etc/rancher/rke2/rke2.yaml.\nexport KUBECONFIG="/etc/rancher/rke2/rke2.yaml"\nkubectl get pods -A\n'})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:["After install and launch RKE2 server, you can execute following command to pull images from the private image registry server to ensure that the ",(0,i.jsx)(r.code,{children:"registries.yaml"})," config is working properly:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:'sudo /var/lib/rancher/rke2/bin/crictl \\\n    --config "/var/lib/rancher/rke2/agent/etc/crictl.yaml" \\\n    pull registry.example.com:5000/rancher/mirrored-pause:3.6\n'})}),"\n",(0,i.jsx)(r.p,{children:"Use following command to view pulled images from the private image registry:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell-session",children:'$ sudo /var/lib/rancher/rke2/bin/crictl --config "/var/lib/rancher/rke2/agent/etc/crictl.yaml" images\nIMAGE                                                   TAG                            IMAGE ID            SIZE\nregistry.example.com:5000/rancher/hardened-calico       v3.26.1-build20230802          a0e7293895577       195MB\nregistry.example.com:5000/rancher/hardened-etcd         v3.5.9-k3s1-build20230802      c6b7a4f2f79b2       64.4MB\n......\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>c});var i=n(6540);const s={},a=i.createContext(s);function t(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);