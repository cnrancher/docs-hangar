"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[982],{6855:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"bestpractice/rke2","title":"RKE2 \u79bb\u7ebf\u5b89\u88c5","description":"\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e RKE2 Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/60-bestpractice/02-rke2.md","sourceDirName":"60-bestpractice","slug":"/bestpractice/rke2","permalink":"/zh/docs/v1.8/bestpractice/rke2","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/60-bestpractice/02-rke2.md","tags":[],"version":"v1.8","lastUpdatedAt":1739438500000,"sidebarPosition":2,"frontMatter":{"title":"RKE2 \u79bb\u7ebf\u5b89\u88c5"},"sidebar":"docs","previous":{"title":"K3s \u79bb\u7ebf\u5b89\u88c5","permalink":"/zh/docs/v1.8/bestpractice/k3s"},"next":{"title":"Rancher \u79bb\u7ebf\u5b89\u88c5","permalink":"/zh/docs/v1.8/bestpractice/rancher"}}');var i=r(4848),a=r(8453);const c={title:"RKE2 \u79bb\u7ebf\u5b89\u88c5"},l=void 0,t={},d=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e ",(0,i.jsx)(n.a,{href:"https://docs.rke2.io",children:"RKE2"})," Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u6309\u7167 ",(0,i.jsx)(n.a,{href:"https://docs.rke2.io/zh/install/airgap#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E6%96%B9%E6%B3%95",children:"RKE2 \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u65b9\u6cd5"})," \u5728\u79bb\u7ebf\u73af\u5883\u5b89\u88c5 RKE2\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u90e8\u7f72\u4e00\u4e2a ",(0,i.jsx)(n.a,{href:"https://distribution.github.io/distribution/",children:"registry"})," \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b58\u50a8 RKE2 \u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u672c\u4f8b\u4e2d\uff0c\u5c06 RKE2 \u5bb9\u5668\u955c\u50cf Layer \u6587\u4ef6\u5b58\u50a8\u81f3\u672c\u5730\u76ee\u5f55\nmkdir -p registry\n\ndocker run -d \\\n    -p 5000:5000 \\\n    -v $(pwd)/registry:/var/lib/registry \\\n    --name registry \\\n    registry:2\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u767b\u5f55\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"hangar login 'localhost:5000' --tls-verify=false\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRegistry \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"}),(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," \u914d\u7f6e Registry \u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u5e76\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://distribution.github.io/distribution/about/deploying/#get-a-certificate",children:"HTTPS certificate"})," \u914d\u7f6e HTTPS\u3002"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rke2/releases",children:"RKE2 GitHub Release"})," \u9875\u9762\u4e0b\u8f7d RKE2 \u955c\u50cf\u5217\u8868\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u4f7f\u7528\u7248\u672c\u4e3a ",(0,i.jsx)(n.code,{children:"v1.27.7+rke2r1"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# \u4e0b\u8f7d AMD64 \u67b6\u6784\u955c\u50cf\u5217\u8868\nwget 'https://github.com/rancher/rke2/releases/download/v1.27.7%2Brke2r1/rke2-images-all.linux-amd64.txt'\n\n# \u4e0b\u8f7d ARM64 \u67b6\u6784\u955c\u50cf\u5217\u8868\nwget 'https://github.com/rancher/rke2/releases/download/v1.27.7%2Brke2r1/rke2-images-all.linux-arm64.txt'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u5728 ",(0,i.jsx)(n.code,{children:"amd64"})," \u67b6\u6784\u548c ",(0,i.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u673a\u5668\u4e0a\u8fd0\u884c RKE2\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06 ",(0,i.jsx)(n.code,{children:"amd64"})," \u548c ",(0,i.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u955c\u50cf\u5217\u8868\u5408\u5e76\u4e3a\u4e00\u4e2a\u955c\u50cf\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"sort rke2-images-all.linux-*.txt | uniq > rke2-images-all.linux.txt\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u4e3b\u673a\u53ef\u4ee5\u8bbf\u95ee\u516c\u5171\u7f51\u7edc\uff0c\u60a8\u53ef\u4f7f\u7528 Hangar ",(0,i.jsx)(n.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," \u547d\u4ee4\uff0c\u5c06 ",(0,i.jsx)(n.code,{children:"amd64"})," \u548c ",(0,i.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u4ece Docker Hub Mirror \u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/v1.8/mirror/validate",children:"mirror validate"})," \u547d\u4ee4\u786e\u4fdd\u955c\u50cf\u5747\u88ab\u6b63\u786e\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror validate \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u81f3\u516c\u5171\u7f51\u7edc\uff0c\u53ef\u5148\u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u4e3b\u673a\u4e0a\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/v1.8/save/save",children:"hangar save"})," \u547d\u4ee4\u4fdd\u5b58\u955c\u50cf\uff0c\u4e4b\u540e\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/v1.8/load/load",children:"hangar load"})," \u547d\u4ee4\u5c06\u4fdd\u5b58\u7684\u5bb9\u5668\u955c\u50cf\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06\u955c\u50cf\u4fdd\u5b58\u5728 rke-images.zip \u538b\u7f29\u5305\u4e2d\u3002\n# \u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\nhangar save \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'rke2-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4fdd\u5b58\u7684\u955c\u50cf\u3002\nhangar save validate \\\n    -f 'rke2-images-all.linux.txt' \\\n    -s 'docker.io' \\\n    -d 'rke2-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u751f\u6210\u7684 ",(0,i.jsx)(n.code,{children:"rke2-images.zip"})," \u538b\u7f29\u5305\u542b\u6709 ",(0,i.jsx)(n.code,{children:"amd64"})," \u548c ",(0,i.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06 rke2-images.zip \u4fdd\u5b58\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\n# \u53ef\u5728\u65e0\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u4e0a\u6267\u884c\u6b64\u547d\u4ee4\u3002\nhangar load \\\n    -s 'rke2-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4e0a\u4f20\u7684\u955c\u50cf\u3002\nhangar load validate \\\n    -s 'rke2-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://docs.rke2.io/zh/install/containerd_registry_configuration",children:"RKE2 Containerd \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"})," \u6587\u6863\uff0c\u521b\u5efa ",(0,i.jsx)(n.code,{children:"/etc/rancher/rke2/registries.yaml"})," \u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c\u5047\u8bbe\u60a8\u7684\u955c\u50cf\u4ed3\u5e93\u7684 IP \u5730\u5740\u7ed1\u5b9a\u4e86\u57df\u540d ",(0,i.jsx)(n.code,{children:"registry.example.com"}),"\u3002"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"mkdir -p /etc/rancher/rke2\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/rancher/rke2/registries.yaml"',children:'mirrors:\n    docker.io:\n        endpoint:\n        - "http://registry.example.com:5000"\n    "registry.example.com:5000":\n        endpoint:\n        - "http://registry.example.com:5000"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://docs.rke2.io/zh/install/airgap#%E5%AE%89%E8%A3%85-rke2",children:"RKE2 \u79bb\u7ebf\u5b89\u88c5"})," \u6587\u6863\uff0c\u5b89\u88c5 RKE2\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u8bbe\u5b9a RKE2 \u7684 ",(0,i.jsx)(n.code,{children:"system-default-registry"})," \u4e3a ",(0,i.jsx)(n.code,{children:"registry.example.com"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="/etc/rancher/rke2/config.yaml"',children:'system-default-registry: "registry.example.com:5000"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 RKE2 \u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'# \u68c0\u67e5 RKE2 systemd \u670d\u52a1\u72b6\u6001\nsystemctl status rke2-server\n\n# \u67e5\u770b RKE2 \u96c6\u7fa4\u7684\u6240\u6709 Pod\n# \u9ed8\u8ba4\u7684 kubeconfig \u6587\u4ef6\u4e3a /etc/rancher/rke2/rke2.yaml\nexport KUBECONFIG="/etc/rancher/rke2/rke2.yaml"\nkubectl get pods -A\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b89\u88c5\u5e76\u542f\u52a8 RKE2 \u540e\uff0c\u60a8\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\uff0c\u4ee5\u786e\u4fdd ",(0,i.jsx)(n.code,{children:"registries.yaml"})," \u914d\u7f6e\u6b63\u786e\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'sudo /var/lib/rancher/rke2/bin/crictl \\\n    --config "/var/lib/rancher/rke2/agent/etc/crictl.yaml" \\\n    pull registry.example.com:5000/rancher/mirrored-pause:3.6\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5df2\u62c9\u53d6\u7684\u955c\u50cf\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ sudo /var/lib/rancher/rke2/bin/crictl --config "/var/lib/rancher/rke2/agent/etc/crictl.yaml" images\nIMAGE                                                   TAG                            IMAGE ID            SIZE\nregistry.example.com:5000/rancher/hardened-calico       v3.26.1-build20230802          a0e7293895577       195MB\nregistry.example.com:5000/rancher/hardened-etcd         v3.5.9-k3s1-build20230802      c6b7a4f2f79b2       64.4MB\n......\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>l});var s=r(6540);const i={},a=s.createContext(i);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);