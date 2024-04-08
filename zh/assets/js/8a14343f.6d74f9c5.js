"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5222],{9281:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var r=n(5893),i=n(1151);const a={title:"K3s \u79bb\u7ebf\u5b89\u88c5"},t=void 0,c={id:"bestpractice/k3s",title:"K3s \u79bb\u7ebf\u5b89\u88c5",description:"\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e K3s Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/60-bestpractice/01-k3s.md",sourceDirName:"60-bestpractice",slug:"/bestpractice/k3s",permalink:"/zh/docs/v1.8/bestpractice/k3s",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/60-bestpractice/01-k3s.md",tags:[],version:"v1.8",lastUpdatedAt:1712559568,formattedLastUpdatedAt:"2024\u5e744\u67088\u65e5",sidebarPosition:1,frontMatter:{title:"K3s \u79bb\u7ebf\u5b89\u88c5"},sidebar:"docs",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/docs/v1.8/bestpractice/"},next:{title:"RKE2 \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/v1.8/bestpractice/rke2"}},l={},o=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e ",(0,r.jsx)(s.a,{href:"https://docs.k3s.io",children:"K3s"})," Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u6309\u7167 ",(0,r.jsx)(s.a,{href:"https://docs.k3s.io/zh/installation/airgap#%E7%A7%81%E6%9C%89%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93",children:"K3s \u79c1\u6709\u955c\u50cf\u4ed3\u5e93"})," \u6587\u6863\u5728\u79bb\u7ebf\u73af\u5883\u5b89\u88c5 K3s\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u90e8\u7f72\u4e00\u4e2a ",(0,r.jsx)(s.a,{href:"https://distribution.github.io/distribution/",children:"registry"})," \u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b58\u50a8 K3s \u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u672c\u4f8b\u4e2d\uff0c\u5c06 K3s \u5bb9\u5668\u955c\u50cf Layer \u6587\u4ef6\u5b58\u50a8\u81f3\u672c\u5730\u76ee\u5f55\nmkdir -p registry\n\ndocker run -d \\\n    -p 5000:5000 \\\n    -v $(pwd)/registry:/var/lib/registry \\\n    --name registry \\\n    registry:2\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u767b\u5f55\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"hangar login 'localhost:5000' --tls-verify=false\n"})}),"\n",(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRegistry \u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"}),(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," \u914d\u7f6e Registry \u7684\u8ba4\u8bc1\u4fe1\u606f\uff0c\u5e76\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"https://distribution.github.io/distribution/about/deploying/#get-a-certificate",children:"HTTPS certificate"})," \u914d\u7f6e HTTPS\u3002"]})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5728 ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases/",children:"K3s GitHub Release"})," \u9875\u9762\u4e0b\u8f7d K3s \u955c\u50cf\u5217\u8868\u3002"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u672c\u4f8b\u4f7f\u7528\u7248\u672c\u4e3a ",(0,r.jsx)(s.code,{children:"v1.27.6+k3s1"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"wget 'https://github.com/k3s-io/k3s/releases/download/v1.27.6%2Bk3s1/k3s-images.txt'\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u4e3b\u673a\u53ef\u4ee5\u8bbf\u95ee\u516c\u5171\u7f51\u7edc\uff0c\u60a8\u53ef\u4f7f\u7528 Hangar ",(0,r.jsx)(s.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," \u547d\u4ee4\uff0c\u5c06 ",(0,r.jsx)(s.code,{children:"amd64"})," \u548c ",(0,r.jsx)(s.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u4ece Docker Hub Mirror \u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror \\\n    -f 'k3s-images.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u53ef\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/docs/v1.8/mirror/validate",children:"mirror validate"})," \u547d\u4ee4\u786e\u4fdd\u955c\u50cf\u5747\u88ab\u6b63\u786e\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\nhangar mirror validate \\\n    -f 'k3s-images.txt' \\\n    -s 'docker.io' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u5982\u679c\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u81f3\u516c\u5171\u7f51\u7edc\uff0c\u53ef\u5148\u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u4e3b\u673a\u4e0a\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/docs/v1.8/save/save",children:"hangar save"})," \u547d\u4ee4\u4fdd\u5b58\u955c\u50cf\uff0c\u4e4b\u540e\u4f7f\u7528 ",(0,r.jsx)(s.a,{href:"/docs/v1.8/load/load",children:"hangar load"})," \u547d\u4ee4\u5c06\u4fdd\u5b58\u7684\u5bb9\u5668\u955c\u50cf\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06\u955c\u50cf\u4fdd\u5b58\u5728 k3s-images.zip \u538b\u7f29\u5305\u4e2d\u3002\n# \u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002\nhangar save \\\n    -f 'k3s-images.txt' \\\n    -s 'docker.io' \\\n    -d 'k3s-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4fdd\u5b58\u7684\u955c\u50cf\u3002\nhangar save validate \\\n    -f 'k3s-images.txt' \\\n    -s 'docker.io' \\\n    -d 'k3s-images.zip' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u751f\u6210\u7684 ",(0,r.jsx)(s.code,{children:"k3s-images.zip"})," \u538b\u7f29\u5305\u542b\u6709 ",(0,r.jsx)(s.code,{children:"amd64"})," \u548c ",(0,r.jsx)(s.code,{children:"arm64"})," \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"#!/bin/bash\n\n# \u5c06 k3s-images.zip \u4fdd\u5b58\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002\n# \u53ef\u5728\u65e0\u7f51\u7edc\u8fde\u63a5\u7684\u8bbe\u5907\u4e0a\u6267\u884c\u6b64\u547d\u4ee4\u3002\nhangar load \\\n    -s 'k3s-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n\n# \u5982\u6709\u9700\u8981\uff0c\u9a8c\u8bc1\u5df2\u4e0a\u4f20\u7684\u955c\u50cf\u3002\nhangar load validate \\\n    -s 'k3s-images.zip' \\\n    -d 'localhost:5000' \\\n    --arch 'amd64,arm64' \\\n    --os 'linux' \\\n    --jobs 5 \\\n    --tls-verify=false\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"https://docs.k3s.io/zh/installation/private-registry",children:"K3s \u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e"})," \u521b\u5efa ",(0,r.jsx)(s.code,{children:"/etc/rancher/k3s/registries.yaml"})," \u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["\u672c\u4f8b\u4e2d\uff0c\u5047\u8bbe\u60a8\u7684\u955c\u50cf\u4ed3\u5e93\u7684 IP \u5730\u5740\u7ed1\u5b9a\u4e86\u57df\u540d ",(0,r.jsx)(s.code,{children:"registry.example.com"}),"\u3002"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"mkdir -p /etc/rancher/k3s\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",metastring:'title="/etc/rancher/k3s/registries.yaml"',children:'mirrors:\n    docker.io:\n        endpoint:\n        - "http://registry.example.com:5000"\n    "registry.example.com:5000":\n        endpoint:\n        - "http://registry.example.com:5000"\n'})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53c2\u8003 ",(0,r.jsx)(s.a,{href:"https://docs.k3s.io/installation/airgap#install-k3s",children:"K3s \u79bb\u7ebf\u5b89\u88c5"})," \u6587\u6863\uff0c\u4e0b\u8f7d\u79bb\u7ebf\u73af\u5883\u5b89\u88c5 K3s \u6240\u9700\u7684 ",(0,r.jsx)(s.code,{children:"install.sh"})," \u548c K3s \u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:'export INSTALL_K3S_SKIP_DOWNLOAD=true\nexport INSTALL_K3S_EXEC="--system-default-registry=registry.example.com:5000"\n\n./install.sh\n'})}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5 K3s \u670d\u52a1\u7684\u8fd0\u884c\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"# \u68c0\u67e5 K3s systemd \u670d\u52a1\u72b6\u6001\nsystemctl status k3s\n\n# \u67e5\u770b K3s \u96c6\u7fa4\u7684\u6240\u6709 Pod\nk3s kubectl get pods -A\n"})}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["\u60a8\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u955c\u50cf\uff0c\u4ee5\u786e\u4fdd ",(0,r.jsx)(s.code,{children:"registries.yaml"})," \u914d\u7f6e\u6b63\u786e\uff1a"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"k3s crictl pull registry.example.com:5000/rancher/mirrored-pause:3.6\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u5df2\u62c9\u53d6\u7684\u955c\u50cf\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell-session",children:"$ sudo k3s crictl images\nIMAGE                                              TAG                    IMAGE ID            SIZE\nregistry.example.com:5000/rancher/klipper-helm               v0.8.2-build20230815   5f89cb8137ccb       90.9MB\nregistry.example.com:5000/rancher/local-path-provisioner     v0.0.24                b29384aeb4b13       14.9MB\n......\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var r=n(7294);const i={},a=r.createContext(i);function t(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);