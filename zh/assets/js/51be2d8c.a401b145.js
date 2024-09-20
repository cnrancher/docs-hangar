"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1751],{7150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const a={title:"\u4ece\u955c\u50cf\u5305\u4e2d\u5bfc\u51fa\u90e8\u5206\u955c\u50cf"},s=void 0,o={id:"archive/export",title:"\u4ece\u955c\u50cf\u5305\u4e2d\u5bfc\u51fa\u90e8\u5206\u955c\u50cf",description:"hangar archive export \u547d\u4ee4\u7528\u4e8e\u4ece\u4e00\u4e2a\u955c\u50cf\u5305\u4e2d\uff0c\u6839\u636e\u955c\u50cf\u5217\u8868\u6587\u4ef6\u5bfc\u51fa\u90e8\u5206\u955c\u50cf\u81f3\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\u5305\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/14-archive/04-export.md",sourceDirName:"14-archive",slug:"/archive/export",permalink:"/zh/docs/v1.7/archive/export",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/14-archive/04-export.md",tags:[],version:"v1.7",lastUpdatedAt:1726803035e3,sidebarPosition:4,frontMatter:{title:"\u4ece\u955c\u50cf\u5305\u4e2d\u5bfc\u51fa\u90e8\u5206\u955c\u50cf"},sidebar:"docs",previous:{title:"\u5408\u5e76\u955c\u50cf\u5305",permalink:"/zh/docs/v1.7/archive/merge"},next:{title:"\u751f\u6210 Rancher \u66f4\u65b0\u7684\u955c\u50cf\u5217\u8868",permalink:"/zh/docs/v1.7/generate-list/"}},c={},l=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hangar archive export"})," \u547d\u4ee4\u7528\u4e8e\u4ece\u4e00\u4e2a\u955c\u50cf\u5305\u4e2d\uff0c\u6839\u636e\u955c\u50cf\u5217\u8868\u6587\u4ef6\u5bfc\u51fa\u90e8\u5206\u955c\u50cf\u81f3\u4e00\u4e2a\u65b0\u7684\u955c\u50cf\u5305\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Hangar v1.7.1 \u53ca\u540e\u7eed\u7248\u672c\u652f\u6301\u6b64\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ece Hangar ",(0,r.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," \u547d\u4ee4\u521b\u5efa\u7684\u955c\u50cf\u5305\u4e2d\u5bfc\u51fa\u90e8\u5206\u955c\u50cf\u81f3\u65b0\u7684\u955c\u50cf\u5305\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar archive export \\\n    --file="IMAGE_LIST.txt" \\\n    --source="EXAMPLE_ARCHIVE.zip" \\\n    --destination="EXPORT_OUTPUT.zip"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="hangar archive export --help"',children:'Export some images from hangar archive file into a new archive file by image list file.\n\nUsage:\n  hangar archive export [flags]\n\nExamples:\n\n# Export images from archive file\nhangar archive export \\\n\t--file IMAGE_LIST.txt \\\n\t--source SAVED_ARCHIVE.zip \\\n\t--destination EXPORT_OUTPUT.zip\n\nFlags:\n  -y, --auto-yes                 answer yes automatically (used in shell script)\n  -d, --destination string       destination archive file\n      --failed string            export failed image list file name (default "export-failed.txt")\n  -f, --file string              image list file (required)\n  -h, --help                     help for export\n  -s, --source string            source archive file\n      --source-registry string   override the source registry of image list file\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);