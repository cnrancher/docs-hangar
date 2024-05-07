"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[921],{9:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var n=a(5893),r=a(1151);const t={title:"Compress Command"},c=void 0,o={id:"advanced/compress",title:"Compress Command",description:"Use compress command to compress the cache folder.",source:"@site/versioned_docs/version-v1.6/13-advanced/03-compress.md",sourceDirName:"13-advanced",slug:"/advanced/compress",permalink:"/docs/v1.6/advanced/compress",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/03-compress.md",tags:[],version:"v1.6",lastUpdatedAt:1715074519,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:3,frontMatter:{title:"Compress Command"},sidebar:"docs",previous:{title:"Sync Command",permalink:"/docs/v1.6/advanced/sync"},next:{title:"Decompress Command",permalink:"/docs/v1.6/advanced/decompress"}},d={},i=[{value:"QuickStart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Use compress command to compress the cache folder."}),"\n",(0,n.jsx)(s.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,n.jsxs)(s.p,{children:["Compress the ",(0,n.jsx)(s.code,{children:"saved-image-cache"})," folder to ",(0,n.jsx)(s.code,{children:"tar.gz"})," format tarball file."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"hangar compress -f ./saved-image-cache\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can use ",(0,n.jsx)(s.code,{children:"--format"})," parameter to specify the compress format (same as ",(0,n.jsx)(s.code,{children:"--compress"})," parameter in ",(0,n.jsx)(s.a,{href:"/docs/v1.6/save/save",children:"Save"})," command)."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"hangar compress -f ./saved-image-cache --format=zstd\n"})}),"\n",(0,n.jsxs)(s.p,{children:["You can use ",(0,n.jsx)(s.code,{children:"--part"})," and ",(0,n.jsx)(s.code,{children:"--part-size"})," parameter to split the compressed file into multi-parts."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"# Split files by 4GB\nhangar compress -f ./saved-image-cache --part --part-size=4G\n"})}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-txt",children:"Usage:\n  hangar compress [flags]\n\nFlags:\n  -d, --destination string   file name of saved images\n                             (can use '--compress' to specify the output file format, default is gzip)\n                             (default \"saved-images.[FORMAT_SUFFIX]\")\n  -f, --file string          saved image cache folder (required)\n      --format string        compress format (available: 'gzip', 'zstd') (default \"gzip\")\n  -h, --help                 help for compress\n      --part                 enable segment compress\n      --part-size string     segment part size (number(Bytes), or a string with 'K', 'M', 'G' suffix) (default \"2G\")\n\nGlobal Flags:\n      --debug   enable debug output\n"})})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>c});var n=a(7294);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);