"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6643],{8326:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"index","title":"Hangar \u4f7f\u7528\u6307\u5f15","description":"\u5feb\u901f\u4e0a\u624b","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/index.md","sourceDirName":".","slug":"/","permalink":"/zh/docs/v1.8/","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/index.md","tags":[],"version":"v1.8","lastUpdatedAt":1739438500000,"sidebarPosition":0,"frontMatter":{"title":"Hangar \u4f7f\u7528\u6307\u5f15","sidebar_position":0},"sidebar":"docs","next":{"title":"\u5b89\u88c5\u6307\u5357","permalink":"/zh/docs/v1.8/install"}}');var s=i(4848),a=i(8453);const c={title:"Hangar \u4f7f\u7528\u6307\u5f15",sidebar_position:0},t="Hangar \u4f7f\u7528\u6307\u5f15",d={},l=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93\u79cd\u7c7b",id:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93\u79cd\u7c7b",level:2},{value:"Q&amp;A",id:"qa",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"hangar-\u4f7f\u7528\u6307\u5f15",children:"Hangar \u4f7f\u7528\u6307\u5f15"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,s.jsxs)(e.p,{children:["\u53c2\u7167\u4ee5\u4e0b\u6307\u5f15\uff0c\u642d\u5efa\u4e00\u4e2a Demo ",(0,s.jsx)(e.a,{href:"ttps://distribution.github.io/distribution/about/deploying/",children:"Registry"})," \u955c\u50cf\u4ed3\u5e93\uff0c\u4f7f\u7528 Hangar \u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u642d\u5efa Demo ",(0,s.jsx)(e.a,{href:"https://distribution.github.io/distribution/about/deploying/",children:"Registry"})," \u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c Hangar\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"docker run -it -v $(pwd):/hangar --network=host cnrancher/hangar:latest\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u521b\u5efa\u955c\u50cf\u5217\u8868\u6587\u4ef6\uff0c\u7528\u4e8e\u5c06 ",(0,s.jsx)(e.a,{href:"https://hub.docker.com",children:"Docker Hub"})," \u955c\u50cf\u62f7\u8d1d\uff08Mirror\uff09\u81f3 Demo \u955c\u50cf\u4ed3\u5e93\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:latest\ncnrancher/hangar:v1.8.0\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 Hangar ",(0,s.jsx)(e.a,{href:"/docs/v1.8/mirror/mirror",children:"Mirror"})," \u547d\u4ee4\u4ece Docker Hub \u62f7\u8d1d\u955c\u50cf\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"hangar mirror \\\n    -f 'example_image_list.txt' \\\n    -s 'docker.io' \\\n    -d '127.0.0.1:5000' \\\n    --arch amd64,arm64 \\\n    --os linux \\\n    --tls-verify=false\n"})}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsx)(e.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDemo Registry \u955c\u50cf\u4ed3\u5e93\u53ef\u4f7f\u7528\u4efb\u610f\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u767b\u5f55\u3002"}),(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u7167 ",(0,s.jsx)(e.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"})," \u914d\u7f6e Registry \u7684\u8ba4\u8bc1\u4fe1\u606f\u3002"]})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"/docs/v1.8/advanced/inspect",children:"Inspect"})," \u547d\u4ee4\u67e5\u770b\u5df2\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf Manifest \u7d22\u5f15\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:'hangar inspect docker://127.0.0.1:5000/cnrancher/hangar:latest --raw --tls-verify=false\n{\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "schemaVersion": 2,\n  "manifests": [\n    {\n    "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n......\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u53c2\u7167 ",(0,s.jsx)(e.a,{href:"/docs/v1.8/install",children:"\u5b89\u88c5\u6307\u5357"})," \u9875\u9762\u5b89\u88c5 Hangar \u81f3\u60a8\u7684\u7cfb\u7edf\u4e2d\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8bf7\u8bbf\u95ee ",(0,s.jsx)(e.a,{href:"/docs/v1.8/bestpractice",children:"Hangar \u6700\u4f73\u5b9e\u8df5"})," \u9875\u9762\uff0c\u83b7\u53d6\u66f4\u591a Hangar \u642d\u5efa\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["Hangar \u7684\u914d\u7f6e\u6587\u4ef6\u4e0e ",(0,s.jsx)(e.a,{href:"https://github.com/containers/image/tree/main/docs",children:"containers/image"})," \u76f8\u540c\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"/etc/containers/policy.json"}),": \u9ed8\u8ba4\u7684 Policy \u914d\u7f6e\u6587\u4ef6\u3002\u53ef\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"--insecure-policy"})," \u53c2\u6570\u8df3\u8fc7\u7b56\u7565\u68c0\u67e5\u6b65\u9aa4\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u9ed8\u8ba4\u7684 Policy \u914d\u7f6e\u6587\u4ef6\u53ef\u5728 ",(0,s.jsx)(e.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/default-policy.json",children:"default-policy.json"})," \u83b7\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u547d\u4ee4",children:"\u547d\u4ee4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"}),": \u5728\u955c\u50cf\u4ed3\u5e93\u4e4b\u95f4\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/v1.8/save/save",children:"save"}),": \u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u81f3\u538b\u7f29\u5f52\u6863\u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/v1.8/load/load",children:"load"}),": \u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u538b\u7f29\u5f52\u6863\u6587\u4ef6\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"/docs/v1.8/sync/sync",children:"sync"}),": \u5411\u538b\u7f29\u5f52\u6863\u6587\u4ef6\u4e2d\u589e\u6dfb\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"sign/sign",children:"sign"}),"\uff1a\u5bb9\u5668\u955c\u50cf\u52a0\u7b7e\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"scan/scan",children:"scan"}),"\uff1a\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"archive/",children:"archive"}),"\uff1a\u7528\u4e8e\u5904\u7406 Hangar \u538b\u7f29\u5305\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"generate-list/",children:"generate-list"}),"\uff1a\u7528\u4e8e\u751f\u6210 Rancher \u955c\u50cf\u5217\u8868\u3002\n\u9664\u6b64\u4e4b\u5916\uff0cHangar \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ad8\u7ea7\u6307\u4ee4\uff0c\u53ef\u8bbf\u95ee ",(0,s.jsx)(e.a,{href:"/docs/v1.8/advanced",children:"\u9ad8\u7ea7\u7528\u6cd5"})," \u9875\u9762\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93\u79cd\u7c7b",children:"\u652f\u6301\u7684\u955c\u50cf\u4ed3\u5e93\u79cd\u7c7b"}),"\n",(0,s.jsx)(e.p,{children:"Hangar \u517c\u5bb9 API V2 \u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://distribution.github.io/distribution/",children:"Registry"})}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"https://hub.docker.com/",children:"Docker Hub"}),", ",(0,s.jsx)(e.a,{href:"https://quay.io/",children:"quay.io"}),", ",(0,s.jsx)(e.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"ghcr.io"})]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://goharbor.io/docs/",children:"Harbor 2.X"})}),"\n",(0,s.jsxs)(e.li,{children:["\u516c\u6709\u4e91\u5e73\u53f0\u63d0\u4f9b\u7684\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\uff0c\u4f8b\u5982: ",(0,s.jsx)(e.a,{href:"https://aws.amazon.com/ecr/",children:"AWS"}),"\uff0c",(0,s.jsx)(e.a,{href:"https://cloud.google.com/artifact-registry",children:"Google Cloud"}),"\uff0c",(0,s.jsx)(e.a,{href:"https://www.tencentcloud.com/products/tcr",children:"\u817e\u8baf\u4e91 TCR"}),"\u3001",(0,s.jsx)(e.a,{href:"https://www.alibabacloud.com/help/zh/acr/",children:"\u963f\u91cc\u4e91 ACR"})," \u7b49..."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u9700\u8981\u786e\u4fdd\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\u7684 Manifest \u7d22\u5f15\uff08",(0,s.jsx)(e.code,{children:"mediaType"}),"\uff09\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://goharbor.io/docs/1.10/",children:"Harbor 1.X"})," \u4e0d\u652f\u6301\u4e0a\u8ff0 ",(0,s.jsx)(e.code,{children:"mediaType"})," \u683c\u5f0f\uff0c\u5982\u9700\u8981\u4f7f\u7528 Hangar\uff0c\u8bf7",(0,s.jsx)(e.a,{href:"https://goharbor.io/docs/2.3.0/administration/upgrade/",children:"\u5347\u7ea7\u81f3 Harbor 2.X"}),"\u3002"]})}),"\n",(0,s.jsx)(e.h2,{id:"qa",children:"Q&A"}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u5173\u5e38\u89c1\u95ee\u9898\u53ca\u62a5\u9519\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(e.a,{href:"/docs/v1.8/questions",children:"\u5e38\u89c1\u95ee\u9898"})," \u9875\u9762\u3002"]})]})}function o(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>t});var r=i(6540);const s={},a=r.createContext(s);function c(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);