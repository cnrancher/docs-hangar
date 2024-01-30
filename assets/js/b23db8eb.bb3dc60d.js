"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2902],{2284:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>d,toc:()=>i});var r=s(5893),t=s(1151);const n={title:"Decompress Command"},o=void 0,d={id:"advanced/decompress",title:"Decompress Command",description:"Decompress the compressed tarball created by save command.",source:"@site/versioned_docs/version-v1.6/13-advanced/04-decompress.md",sourceDirName:"13-advanced",slug:"/advanced/decompress",permalink:"/docs/v1.6/advanced/decompress",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/04-decompress.md",tags:[],version:"v1.6",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:4,frontMatter:{title:"Decompress Command"},sidebar:"docs",previous:{title:"Compress Command",permalink:"/docs/v1.6/advanced/compress"},next:{title:"convert-list Command",permalink:"/docs/v1.6/advanced/convert-list"}},c={},i=[{value:"QuickStart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Decompress the compressed tarball created by ",(0,r.jsx)(a.a,{href:"/docs/v1.6/save/save",children:"save"})," command."]}),"\n",(0,r.jsx)(a.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,r.jsxs)(a.p,{children:["Decompress the ",(0,r.jsx)(a.code,{children:"saved-images.tar.gz"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-sh",children:"hangar decompress -f ./saved-images.tar.gz\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Same as Load command, The Decompress command can identify the spilted ",(0,r.jsx)(a.code,{children:".partX"})," file suffix."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x   6 root  root   192B  1  6 18:00 .\ndrwxr-x---+ 70 root  root   2.2K  1  6 18:00 ..\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part0\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part1\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part2\n-rw-r--r--   1 root  root   5.3M  1  6 17:59 saved-images.tar.gz.part3\n\n$ hangar decompress -f saved-images.tar.gz\n18:01:28 [INFO] decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n......\n'})}),"\n",(0,r.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-txt",children:"Usage:\n  hangar decompress [flags]\n\nFlags:\n  -f, --file string     file name to be decompressed (required)\n      --format string   compress format (available: 'gzip', 'zstd') (default \"gzip\")\n  -h, --help            help for decompress\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n"})})]})}function l(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>d,a:()=>o});var r=s(7294);const t={},n=r.createContext(t);function o(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);