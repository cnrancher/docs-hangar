"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2546],{5182:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=r(5893),s=r(1151);const c={title:"Rancher \u79bb\u7ebf\u5b89\u88c5"},t=void 0,i={id:"bestpractice/rancher",title:"Rancher \u79bb\u7ebf\u5b89\u88c5",description:"\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e Rancher Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/20-bestpractice/03-rancher.md",sourceDirName:"20-bestpractice",slug:"/bestpractice/rancher",permalink:"/zh/docs/v1.7/bestpractice/rancher",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/20-bestpractice/03-rancher.md",tags:[],version:"v1.7",lastUpdatedAt:1701849837,formattedLastUpdatedAt:"2023\u5e7412\u67086\u65e5",sidebarPosition:3,frontMatter:{title:"Rancher \u79bb\u7ebf\u5b89\u88c5"},sidebar:"docs",previous:{title:"RKE2 \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/v1.7/bestpractice/rke2"},next:{title:"Hangar Docker \u955c\u50cf",permalink:"/zh/docs/v1.7/docker-image"}},h={},l=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/",children:"Rancher"})," Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u60a8\u53ef\u6309\u7167 Rancher ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/pages-for-subheaders/air-gapped-helm-cli-install",children:"\u79bb\u7ebf Helm CLI \u5b89\u88c5"})," \u6587\u6863\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u90e8\u7f72\u4e00\u4e2a ",(0,a.jsx)(n.a,{href:"https://distribution.github.io/distribution/",children:"registry"})," \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b58\u50a8 Rancher \u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u672c\u4f8b\u4e2d\uff0c\u5c06 Rancher \u5bb9\u5668\u955c\u50cf Layer \u6587\u4ef6\u5b58\u50a8\u81f3\u672c\u5730\u76ee\u5f55\nmkdir -p registry\n\ndocker run -d \\\n    -p 5000:5000 \\\n    -v $(pwd)/registry:/var/lib/registry \\\n    --name registry \\\n    registry:2\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Registry \u670d\u52a1\u5668\u5efa\u8bae\u9884\u7559\u81f3\u5c11 100GB \u7684\u78c1\u76d8\u7a7a\u95f4\u4ee5\u5b58\u50a8 Rancher \u6240\u9700\u7684\u5168\u90e8\u955c\u50cf\u3002"})}),"\n",(0,a.jsx)(n.p,{children:"\u767b\u5f55\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"hangar login 'localhost:5000' --tls-verify=false\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRegistry \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"}),(0,a.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," \u914d\u7f6e Registry \u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u5e76\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://distribution.github.io/distribution/about/deploying/#get-a-certificate",children:"HTTPS certificate"})," \u914d\u7f6e HTTPS\u3002"]})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.a,{href:"https://github.com/rancher/rancher/releases",children:"Rancher GitHub Release"})," \u9875\u9762\u4e0b\u8f7d Rancher \u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6 ",(0,a.jsx)(n.code,{children:"rancher-images.txt"}),"\u3002"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4f7f\u7528\u7248\u672c\u4e3a ",(0,a.jsx)(n.code,{children:"v2.7.9"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"wget 'https://github.com/rancher/rancher/releases/download/v2.7.9/rancher-images.txt'\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"rancher-images.txt"})," \u955c\u50cf\u5217\u8868\u6587\u4ef6\u5305\u542b Rancher \u6838\u5fc3\u955c\u50cf\u3001Chart \u955c\u50cf\u3001\u4ee5\u53ca KDM\uff08Kontainer Driver Metadata\uff09\u955c\u50cf\uff08KDM \u955c\u50cf\u5305\u542b\u4e86 RKE\u3001RKE2 \u548c K3s \u955c\u50cf\uff09\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"cert-manager"})," \u751f\u6210 Rancher \u7684 HTTPS \u8bc1\u4e66\u3002\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images#2-%E6%94%B6%E9%9B%86-cert-manager-%E9%95%9C%E5%83%8F",children:"\u6536\u96c6 cert-manager \u955c\u50cf"})," \u6587\u6863\u5c06 ",(0,a.jsx)(n.code,{children:"cert-manager"})," \u955c\u50cf\u6dfb\u52a0\u81f3 ",(0,a.jsx)(n.code,{children:"rancher-images.txt"})," \u955c\u50cf\u5217\u8868\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\nhelm fetch jetstack/cert-manager --version v1.11.0\nhelm template ./cert-manager-v1.11.0.tgz | awk '$1 ~ /image:/ {print $2}' | sed s/\\\"//g >> ./rancher-images.txt\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u4e3b\u673a\u53ef\u4ee5\u8bbf\u95ee\u516c\u5171\u7f51\u7edc\uff0c\u60a8\u53ef\u4f7f\u7528 Hangar ",(0,a.jsx)(n.a,{href:"/docs/v1.7/mirror/mirror",children:"mirror"})," \u547d\u4ee4\uff0c\u5c06 ",(0,a.jsx)(n.code,{children:"amd64"})," \u548c ",(0,a.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u4ece\u516c\u5f00\u7684\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668 Mirror \u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror \\\n    -f 'rancher-images.txt' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/docs/v1.7/mirror/validate",children:"mirror validate"})," \u547d\u4ee4\u786e\u4fdd\u955c\u50cf\u5747\u88ab\u6b63\u786e\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror validate \\\n    -f 'rancher-images.txt' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u81f3\u516c\u5171\u7f51\u7edc\uff0c\u53ef\u5148\u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u4e3b\u673a\u4e0a\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"hangar save"})," \u547d\u4ee4\u4fdd\u5b58\u955c\u50cf\uff0c\u4e4b\u540e\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/docs/v1.7/load/load",children:"hangar load"})," \u547d\u4ee4\u5c06\u4fdd\u5b58\u7684\u5bb9\u5668\u955c\u50cf\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06\u955c\u50cf\u4fdd\u5b58\u5728 rancher-images.zip \u538b\u7f29\u5305\u4e2d\u3002\n# \u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\nhangar save \\\n    -f 'rancher-images.txt' \\\n    -d 'rancher-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4fdd\u5b58\u7684\u955c\u50cf\u3002\nhangar save validate \\\n    -f 'rancher-images.txt' \\\n    -d 'rancher-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"\u5728\u4e0b\u8f7d\u955c\u50cf\u65f6\u8bf7\u786e\u4fdd\u78c1\u76d8\u9884\u7559\u4e86\u8db3\u591f\u7684\u7a7a\u95f4\u3002\u4ee5\u4e0a\u547d\u4ee4\u6700\u7ec8\u4e0b\u8f7d\u7684\u955c\u50cf\u538b\u7f29\u5305\u4f53\u79ef\u53ef\u80fd\u4f1a\u8d85\u8fc7 50GB\u3002"}),(0,a.jsx)(n.p,{children:"\u5efa\u8bae\u81f3\u5c11\u9884\u7559 80GB \u7684\u78c1\u76d8\u7a7a\u95f4\u3002"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u751f\u6210\u7684 ",(0,a.jsx)(n.code,{children:"rancher-images.zip"})," \u538b\u7f29\u5305\u542b\u6709 ",(0,a.jsx)(n.code,{children:"amd64"})," \u548c ",(0,a.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06 rancher-images.zip \u4fdd\u5b58\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\n# \u53ef\u5728\u65e0\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u4e0a\u6267\u884c\u6b64\u547d\u4ee4\u3002\nhangar load \\\n    -s 'rancher-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4e0a\u4f20\u7684\u955c\u50cf\u3002\nhangar load validate \\\n    -s 'rancher-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5728\u90e8\u7f72\u5b8c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8be5\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u8fd0\u884c RKE\u3001RKE2 \u6216 K3s \u96c6\u7fa4\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\u4f7f\u7528 K3s \u7248\u672c ",(0,a.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.26.8%2Bk3s1",children:"v1.26.8+k3s1"})," \u4f5c\u4e3a Rancher \u7684 Kubernetes \u96c6\u7fa4\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"rancher-images.txt"})," \u955c\u50cf\u5217\u8868\u6587\u4ef6\u4e2d\u5df2\u5305\u542b\u4e86 K3s \u6240\u9700\u955c\u50cf\uff0c\u60a8\u65e0\u9700\u91cd\u65b0\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://docs.k3s.io/zh/installation/private-registry",children:"K3s \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"}),"\uff0c\u521b\u5efa ",(0,a.jsx)(n.code,{children:"/etc/rancher/k3s/registries.yaml"})," \u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c\u5047\u8bbe\u60a8\u7684\u955c\u50cf\u4ed3\u5e93\u7684 IP \u5730\u5740\u7ed1\u5b9a\u4e86\u57df\u540d ",(0,a.jsx)(n.code,{children:"registry.example.com"}),"\u3002"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"mkdir -p /etc/rancher/k3s\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/rancher/k3s/registries.yaml"',children:'mirrors:\n    docker.io:\n        endpoint:\n        - "http://registry.example.com:5000"\n    "registry.example.com:5000":\n        endpoint:\n        - "http://registry.example.com:5000"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://docs.k3s.io/zh/installation/airgap#%E5%AE%89%E8%A3%85-k3s",children:"\u79bb\u7ebf\u5b89\u88c5 K3s"}),"\uff0c\u4e0b\u8f7d K3s ",(0,a.jsx)(n.code,{children:"install.sh"})," \u4e00\u952e\u5b89\u88c5\u811a\u672c\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u4e4b\u540e\u5b89\u88c5 K3s\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'export INSTALL_K3S_SKIP_DOWNLOAD=true\nexport INSTALL_K3S_EXEC="--system-default-registry=registry.example.com:5000"\n\n./install.sh\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5b89\u88c5 K3s \u540e\uff0c\u60a8\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\uff0c\u4ee5\u786e\u4fdd ",(0,a.jsx)(n.code,{children:"registries.yaml"})," \u914d\u7f6e\u6b63\u786e\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"k3s crictl pull registry.example.com:5000/rancher/mirrored-pause:3.6\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5df2\u62c9\u53d6\u7684\u955c\u50cf\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell-session",children:"$ sudo k3s crictl images\nIMAGE                                                        TAG                    IMAGE ID            SIZE\nregistry.example.com:5000/rancher/klipper-helm               v0.8.2-build20230815   5f89cb8137ccb       90.9MB\nregistry.example.com:5000/rancher/local-path-provisioner     v0.0.24                b29384aeb4b13       14.9MB\n......\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",children:"\u79bb\u7ebf Helm CLI \u5b89\u88c5 Rancher"})," \u6587\u6863\uff0c\u5b89\u88c5 Rancher\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c\u5047\u8bbe\u60a8\u7684 Rancher \u670d\u52a1\u5668 IP \u5730\u5740\u7ed1\u5b9a\u4e86\u57df\u540d ",(0,a.jsx)(n.code,{children:"rancher.example.com"}),"\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:["\u5b89\u88c5 ",(0,a.jsx)(n.code,{children:"cert-manager"})," CRD \u5e76\u53c2\u8003 ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#3-%E8%8E%B7%E5%8F%96-cert-manager-chart",children:"\u83b7\u53d6 Cert-Manager Chart"})," \u6587\u6863\u5b89\u88c5 ",(0,a.jsx)(n.code,{children:"cert-manager"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\nkubectl create namespace cert-manager\nkubectl apply -f cert-manager-crd.yaml\n\nhelm install cert-manager ./cert-manager-v1.11.0.tgz \\\n    --namespace 'cert-manager' \\\n    --set image.repository='registry.example.com:5000/jetstack/cert-manager-controller' \\\n    --set webhook.image.repository='registry.example.com:5000/jetstack/cert-manager-webhook' \\\n    --set cainjector.image.repository='registry.example.com:5000/jetstack/cert-manager-cainjector' \\\n    --set startupapicheck.image.repository='registry.example.com:5000/jetstack/cert-manager-ctl'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4e4b\u540e ",(0,a.jsx)(n.a,{href:"https://ranchermanager.docs.rancher.com/zh/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha#1-%E6%B7%BB%E5%8A%A0-helm-chart-%E4%BB%93%E5%BA%93",children:"\u4e0b\u8f7d Rancher Helm Chart \u6587\u4ef6"})," \u5e76\u4f7f\u7528 Helm CLI \u5b89\u88c5 Rancher\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:'#!/bin/bash\n\nkubectl create namespace cattle-system\n\nhelm install rancher ./rancher-2.7.9.tgz \\\n    --namespace cattle-system \\\n    --set replicas=1 \\\n    --set bootstrapPassword="RancherForFun" \\\n    --set hostname="rancher.example.com" \\\n    --set rancherImage="registry.example.com:5000/rancher/rancher" \\\n    --set systemDefaultRegistry="registry.example.com:5000" \\\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u901a\u8fc7 Rancher Hostname \u94fe\u63a5\uff08\u672c\u4f8b\u4e3a ",(0,a.jsx)(n.code,{children:"rancher.example.com"}),"\uff09\u8bbf\u95ee Rancher\u3002"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0cBootstrapPassword \u4e3a ",(0,a.jsx)(n.code,{children:"RancherForFun"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var a=r(7294);const s={},c=a.createContext(s);function t(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);