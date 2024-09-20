"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5454],{9793:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=r(4848),s=r(8453);const c={title:"convert-list \u547d\u4ee4"},i=void 0,a={id:"advanced/convert-list",title:"convert-list \u547d\u4ee4",description:"convert-list \u547d\u4ee4\u5c06 rancher-images.txt \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u8f6c\u6362\u4e3a Mirror \u547d\u4ee4\u6240\u4f7f\u7528\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced/05-convert-list.md",sourceDirName:"13-advanced",slug:"/advanced/convert-list",permalink:"/zh/docs/v1.6/advanced/convert-list",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/05-convert-list.md",tags:[],version:"v1.6",lastUpdatedAt:1726803035e3,sidebarPosition:5,frontMatter:{title:"convert-list \u547d\u4ee4"},sidebar:"docs",previous:{title:"Decompress \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/decompress"},next:{title:"generate-list \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/generate-list"}},o={},d=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"convert-list"})," \u547d\u4ee4\u5c06 ",(0,t.jsx)(n.code,{children:"rancher-images.txt"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u8f6c\u6362\u4e3a ",(0,t.jsx)(n.a,{href:"/docs/v1.6/mirror/mirror",children:"Mirror"})," \u547d\u4ee4\u6240\u4f7f\u7528\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c06\u4e0b\u8f7d\u7684 ",(0,t.jsx)(n.code,{children:"rancher-images.txt"})," \u955c\u50cf\u5217\u8868\u683c\u5f0f\u8f6c\u6362\u81f3 ",(0,t.jsx)(n.code,{children:"mirror"})," \u65f6\u8f93\u5165\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff0c\u5e76\u8bbe\u5b9a\u76ee\u6807\u955c\u50cf\u7684 registry \u4e3a ",(0,t.jsx)(n.code,{children:"custom.private.io"}),"\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"hangar convert-list -i rancher-images.txt -d custom.private.io\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u547d\u4ee4\u4f1a\u5c06 ",(0,t.jsx)(n.code,{children:"rancher-images.txt"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"# NAME:TAG\nrancher/rancher:v2.6.9\nnginx\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8f6c\u6362\u4e3a ",(0,t.jsx)(n.code,{children:"mirror"})," \u65f6\u8f93\u5165\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"# SOURCE DEST TAG\nrancher/rancher custom.private.io/rancher/rancher v2.6.9\nnginx custom.private.io/nginx latest\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# \u4f7f\u7528 -i, --input \u548c -d, --destination \u53c2\u6570\uff0c\n# \u6307\u5b9a\u8f93\u5165\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u540d\u548c\u76ee\u6807\u955c\u50cf\u7684 registry\nhangar convert-list -i list.txt -d private.registry.io\n\n# \u4f7f\u7528 -s, --source \u53c2\u6570\u6307\u5b9a\u8f6c\u6362\u683c\u5f0f\u540e\u7684\u955c\u50cf\u5217\u8868\u7684\u6e90 registry\nhangar convert-list -i list.txt -s source.io -d dest.io\n\n# \u4f7f\u7528 -o, --output \u53c2\u6570\uff0c\u6307\u5b9a\u8f93\u51fa\u955c\u50cf\u5217\u8868\u7684\u6587\u4ef6\u540d\n# \u9ed8\u8ba4\u4e3a\u8f93\u5165\u7684\u6587\u4ef6\u540d\u6dfb\u52a0 .converted \u540e\u7f00\nhangar convert-list -i list.txt -o converted.txt\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);