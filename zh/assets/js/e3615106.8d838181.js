"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[6096],{8492:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var r=i(5893),s=i(1151);const c={title:"\u5e38\u89c1\u95ee\u9898"},d=void 0,a={id:"questions",title:"\u5e38\u89c1\u95ee\u9898",description:"\u5173\u4e8e Hangar",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/99-questions.md",sourceDirName:".",slug:"/questions",permalink:"/zh/docs/next/questions",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/99-questions.md",tags:[],version:"current",lastUpdatedAt:1700716418,formattedLastUpdatedAt:"2023\u5e7411\u670823\u65e5",sidebarPosition:99,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"Hangar Docker \u955c\u50cf",permalink:"/zh/docs/next/docker-image"}},l={},o=[{value:"\u5173\u4e8e Hangar",id:"\u5173\u4e8e-hangar",level:2},{value:"Hangar \u7f13\u5b58\u6587\u4ef6\u5939",id:"hangar-\u7f13\u5b58\u6587\u4ef6\u5939",level:2},{value:"Harbor 2.X \u955c\u50cf\u4ed3\u5e93",id:"harbor-2x-\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 <code>zip</code> \u538b\u7f29\u5305\u683c\u5f0f\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-zip-\u538b\u7f29\u5305\u683c\u5f0f",level:2},{value:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",id:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",level:2}];function t(n){const e={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5173\u4e8e-hangar",children:"\u5173\u4e8e Hangar"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u7684\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Hangar \u4f7f\u7528\u4e86 ",(0,r.jsx)(e.a,{href:"https://github.com/containers/image",children:"comtainers/images"})," API \u6267\u884c\u5bb9\u5668\u955c\u50cf\u62f7\u8d1d\u76f8\u5173\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u56e0\u4e3a ",(0,r.jsx)(e.a,{href:"https://github.com/containers/signature",children:"containers/signature"})," API \u4f7f\u7528\u4e86 C \u5e93\uff0c\u56e0\u6b64\u5728\u7f16\u8bd1 Hangar \u65f6\u9700\u8981\u542f\u7528 ",(0,r.jsx)(e.code,{children:"CGO"}),"\uff0c\u7f16\u8bd1\u540e\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u5728\u52a8\u6001\u94fe\u63a5\u5e93\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Hangar \u4f7f\u7528 ",(0,r.jsx)(e.a,{href:"https://github.com/helm/helm",children:"helm"})," \u4f9d\u8d56\u7528\u4e8e\u5728 Helm Chart \u4e2d\u751f\u6210\u955c\u50cf\u5217\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"hangar-\u7f13\u5b58\u6587\u4ef6\u5939",children:"Hangar \u7f13\u5b58\u6587\u4ef6\u5939"}),"\n",(0,r.jsxs)(e.p,{children:["Hangar \u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"${HOME}/.cache/hangar_cache"})," \u6682\u5b58\u4e0b\u8f7d\u7684\u5bb9\u5668\u955c\u50cf Blobs \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c\u60a8\u5728\u6267\u884c\u955c\u50cf\u62f7\u8d1d\u7684\u8fc7\u7a0b\u4e2d\u5f3a\u884c\u505c\u6b62\u4e86 Hangar\uff0c\u8bf7\u624b\u52a8\u6e05\u7406 ",(0,r.jsx)(e.code,{children:"${HOME}/.cache/hangar_cache"})," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"harbor-2x-\u955c\u50cf\u4ed3\u5e93",children:"Harbor 2.X \u955c\u50cf\u4ed3\u5e93"}),"\n",(0,r.jsxs)(e.p,{children:["\u82e5",(0,r.jsx)(e.em,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"}),"\u4e3a Harbor\uff0cHangar ",(0,r.jsx)(e.code,{children:"load"})," \u547d\u4ee4\u5c06\u5c1d\u8bd5\u81ea\u52a8\u4e3a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u521b\u5efa ",(0,r.jsx)(e.strong,{children:"Harbor Project"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u82e5 Hangar \u65e0\u6cd5\u81ea\u52a8\u521b\u5efa ",(0,r.jsx)(e.strong,{children:"Harbor Project"}),"\uff0c\u8bf7\u624b\u52a8\u521b\u5efa\u3002"]}),"\n",(0,r.jsxs)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-zip-\u538b\u7f29\u5305\u683c\u5f0f",children:["\u4e3a\u4ec0\u4e48\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"zip"})," \u538b\u7f29\u5305\u683c\u5f0f\uff1f"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"save/archive",children:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f"})," \u9875\u9762\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",children:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u81ea ",(0,r.jsx)(e.code,{children:"v1.7.0"})," \u8d77\uff0cHangar \u6539\u4e3a\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"zip"})," \u683c\u5f0f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.strong,{children:["\u65e7\u7248\u672c\u7684 Hangar \u521b\u5efa\u7684\u538b\u7f29\u5305\u683c\u5f0f\uff08",(0,r.jsx)(e.code,{children:"tar.gz"}),"\uff09\u5c06\u65e0\u6cd5\u4e0e\u65b0\u7248\u672c\uff08",(0,r.jsx)(e.code,{children:"zip"}),"\uff09\u683c\u5f0f\u76f8\u517c\u5bb9\u3002"]})}),"\n",(0,r.jsxs)(e.p,{children:["\u5173\u4e8e\u538b\u7f29\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(e.a,{href:"load/load",children:"load"})," \u548c ",(0,r.jsx)(e.a,{href:"load/archive",children:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f"})," \u9875\u9762\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,r.jsx)(e.code,{children:"manifest unknown"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4e0d\u5b58\u5728\u3002\u8bf7\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"hangar inspect --raw docker://<IMAGE>"})," \u68c0\u67e5\u955c\u50cf\u662f\u5426\u5b58\u5728\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,r.jsx)(e.code,{children:"unsupported MIME type"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5bb9\u5668\u955c\u50cf\u7684 ",(0,r.jsx)(e.code,{children:"mediaType"})," \u4e0d\u88ab\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["Hangar \u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\u7684 ",(0,r.jsx)(e.code,{children:"mediaType"}),":"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"application/vnd.docker.distribution.manifest.v2+json"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"application/vnd.docker.distribution.manifest.v1+json"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"application/vnd.oci.image.manifest.v1+json"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,r.jsx)(e.code,{children:"open /etc/containers/policy.json: no such file or directory"})]}),"\n",(0,r.jsxs)(e.p,{children:["Policy \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(e.code,{children:"/etc/containers/policy.json"})," \u4e0d\u5b58\u5728\u3002\u53ef\u5728 ",(0,r.jsx)(e.a,{href:"https://github.com/cnrancher/hangar/blob/main/default-policy.json",children:"default-policy.json"})," \u83b7\u53d6\u9ed8\u8ba4\u7684 Policy \u7b56\u7565\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u9664\u6b64\u4e4b\u5916\u53ef\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"--insecure-policy"})," \u53c2\u6570\u8df3\u8fc7 Policy \u68c0\u6d4b\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u8b66\u544a\uff1a",(0,r.jsx)(e.code,{children:"no avaiable image for specified arch and os"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4e0e ",(0,r.jsx)(e.code,{children:"--arch"})," \u548c ",(0,r.jsx)(e.code,{children:"--os"})," \u53c2\u6570\u6307\u5b9a\u7684\u67b6\u6784 & OS \u4fe1\u606f\u4e0d\u7b26\u65f6\u4f1a\u51fa\u73b0\u6b64\u8b66\u544a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f8b\u5982\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4ec5\u652f\u6301 ",(0,r.jsx)(e.code,{children:"amd64"})," \u67b6\u6784\uff0c\u800c ",(0,r.jsx)(e.code,{children:"--arch"})," \u8bbe\u5b9a\u7684\u662f ",(0,r.jsx)(e.code,{children:"arm64"})," \u65f6\uff0c\u4f1a\u51fa\u73b0\u6b64 Warning \u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b64\u8b66\u544a\u4fe1\u606f\u4e0d\u4f1a\u5f71\u54cd\u6b63\u5e38\u7684\u955c\u50cf\u62f7\u8d1d\u6d41\u7a0b\uff0c\u5f53\u51fa\u73b0\u6b64\u8b66\u544a\u65f6\u53ea\u7528\u4e8e\u63d0\u9192\u8be5\u955c\u50cf\u6ca1\u6709\u88ab\u62f7\u8d1d\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(t,{...n})}):t(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>d});var r=i(7294);const s={},c=r.createContext(s);function d(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);