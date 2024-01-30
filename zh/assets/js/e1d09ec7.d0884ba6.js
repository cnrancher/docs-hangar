"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9773],{4573:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var a=r(5893),n=r(1151);const t={title:"Decompress \u547d\u4ee4"},d=void 0,o={id:"advanced/decompress",title:"Decompress \u547d\u4ee4",description:"Decompress \u547d\u4ee4\u7528\u6765\u89e3\u538b Save \u547d\u4ee4\u6216 Compress \u751f\u6210\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced/04-decompress.md",sourceDirName:"13-advanced",slug:"/advanced/decompress",permalink:"/zh/docs/v1.6/advanced/decompress",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/04-decompress.md",tags:[],version:"v1.6",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",sidebarPosition:4,frontMatter:{title:"Decompress \u547d\u4ee4"},sidebar:"docs",previous:{title:"Compress \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/compress"},next:{title:"convert-list \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/convert-list"}},c={},i=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2}];function p(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Decompress \u547d\u4ee4\u7528\u6765\u89e3\u538b ",(0,a.jsx)(s.a,{href:"/docs/v1.6/save/save",children:"Save"})," \u547d\u4ee4\u6216 ",(0,a.jsx)(s.a,{href:"/docs/v1.6/advanced/compress",children:"Compress"})," \u751f\u6210\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u6709\u5173 Compress \u548c Decompress \u547d\u4ee4\u7684\u5f00\u53d1\u80cc\u666f\u53ef\u53c2\u8003 ",(0,a.jsx)(s.a,{href:"/docs/v1.6/advanced/sync#%E5%BC%80%E5%8F%91%E8%83%8C%E6%99%AF",children:"Sync\u6587\u6863"}),"\u3002"]}),"\n",(0,a.jsx)(s.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,a.jsxs)(s.p,{children:["\u5c06 ",(0,a.jsx)(s.code,{children:"saved-images.tar.gz"})," \u6587\u4ef6\u89e3\u538b\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"hangar decompress -f ./saved-images.tar.gz\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u4e0e Load \u547d\u4ee4\u5728\u5bfc\u5165\u955c\u50cf\u65f6\u89e3\u538b\u7684\u65b9\u5f0f\u4e00\u81f4\uff0cDecompress \u547d\u4ee4\u652f\u6301\u8bc6\u522b\u5206\u7247\u538b\u7f29\u751f\u6210\u7684 ",(0,a.jsx)(s.code,{children:".partX"})," \u540e\u7f00\u7684\u6587\u4ef6\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x   6 root  root   192B  1  6 18:00 .\ndrwxr-x---+ 70 root  root   2.2K  1  6 18:00 ..\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part0\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part1\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part2\n-rw-r--r--   1 root  root   5.3M  1  6 17:59 saved-images.tar.gz.part3\n\n$ hangar decompress -f saved-images.tar.gz\n18:01:28 [INFO] decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n......\n'})}),"\n",(0,a.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(s.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"# -f, --file \u6307\u5b9a\u5f85\u89e3\u538b\u7684\u6587\u4ef6\nhangar decompress -f ./saved-images.tar.gz\n\n# --format \u6307\u5b9a\u5f85\u89e3\u538b\u7684\u6587\u4ef6\u7684\u538b\u7f29\u683c\u5f0f\n# \u53ef\u9009: gzip, zstd\n# \u9ed8\u8ba4: gzip\nhangar decompress -f ./saved-images.tar.zstd --format=zstd\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar decompress -f ./saved-images.tar.gz --debug\n"})})]})}function m(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>o,a:()=>d});var a=r(7294);const n={},t=a.createContext(n);function d(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);