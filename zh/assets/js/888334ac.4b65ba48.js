"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5946],{5530:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=s(5893),i=s(1151);const t={title:"Sync \u547d\u4ee4"},r=void 0,c={id:"sync/sync",title:"Sync \u547d\u4ee4",description:"hangar sync \u547d\u4ee4\u4e0e save \u547d\u4ee4\u7c7b\u4f3c\uff0c\u5141\u8bb8\u60a8\u5c06\u989d\u5916\u7684\u955c\u50cf\u9644\u52a0\u5230 save \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u6240\u6709\u7684\u955c\u50cf\u521b\u5efa\u65b0\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/13-sync/01-sync.md",sourceDirName:"13-sync",slug:"/sync/sync",permalink:"/zh/docs/v1.7/sync/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/13-sync/01-sync.md",tags:[],version:"v1.7",sidebarPosition:1,frontMatter:{title:"Sync \u547d\u4ee4"},sidebar:"docs",previous:{title:"Sync",permalink:"/zh/docs/v1.7/sync/"},next:{title:"Sync Validate \u547d\u4ee4",permalink:"/zh/docs/v1.7/sync/validate"}},o={},l=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"hangar sync"})," \u547d\u4ee4\u4e0e ",(0,a.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," \u547d\u4ee4\u7c7b\u4f3c\uff0c\u5141\u8bb8\u60a8\u5c06\u989d\u5916\u7684\u955c\u50cf\u9644\u52a0\u5230 ",(0,a.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u6240\u6709\u7684\u955c\u50cf\u521b\u5efa\u65b0\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," \u547d\u4ee4\u5728\u521b\u5efa\u538b\u7f29\u5305\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u955c\u50cf\u4e0b\u8f7d\u5931\u8d25\u7b49\u60c5\u51b5\uff0c\u6b64\u65f6\u60a8\u53ef\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"sync"})," \u547d\u4ee4\u5c06\u5931\u8d25\u7684\u955c\u50cf\u5c1d\u8bd5\u9644\u52a0\u5230\u5df2\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5411 ",(0,a.jsx)(n.a,{href:"/docs/v1.7/save/save#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",children:"save"})," \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u589e\u6dfb\u65b0\u7684\u955c\u50cf:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sync \\\n    --file="extra_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sync --help"',children:'Sync (append) images from registry server into local archive file\n\nUsage:\n  hangar sync -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n  hangar sync [command]\n\nExamples:\n\nhangar sync \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the sync (append) images, ensure images were saved into archive file\n\nFlags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -d, --destination string   file name of the destination archive file\n  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")\n  -f, --file string          image list file\n  -h, --help                 help for sync\n  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar sync [command] --help" for more information about a command.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var a=s(7294);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);