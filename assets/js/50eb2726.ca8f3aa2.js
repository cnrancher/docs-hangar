"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9519],{8842:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=a(5893),i=a(1151);const s={title:"Sync Validate Command"},r=void 0,c={id:"sync/validate",title:"Sync Validate Command",description:"The hangar sync validate command (subcommand of hangar sync) is similar to save validate command. It is used for ensuring the extra images were added into archive file.",source:"@site/versioned_docs/version-v1.7/13-sync/02-validate.md",sourceDirName:"13-sync",slug:"/sync/validate",permalink:"/docs/v1.7/sync/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/13-sync/02-validate.md",tags:[],version:"v1.7",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:2,frontMatter:{title:"Sync Validate Command"},sidebar:"docs",previous:{title:"Sync Command",permalink:"/docs/v1.7/sync/sync"},next:{title:"Archive",permalink:"/docs/v1.7/archive/"}},d={},o=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"hangar sync validate"})," command (subcommand of ",(0,t.jsx)(n.code,{children:"hangar sync"}),") is similar to ",(0,t.jsx)(n.code,{children:"save validate"})," command. It is used for ensuring the extra images were added into archive file."]}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(n.p,{children:["Verify the synced (appended) images according to image list file after executing the ",(0,t.jsx)(n.a,{href:"/docs/v1.7/sync/sync#quick-start",children:"sync"})," command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sync validate \\\n    --file="extra_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sync validate --help"',children:'Validate the sync (append) images, ensure images were saved into archive file\n\nUsage:\n  hangar sync validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n\nExamples:\n\nhangar sync validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n      --debug                enable debug output\n  -d, --destination string   file name of the destination archive file\n  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")\n  -f, --file string          image list file\n      --insecure-policy      run Hangar without policy check\n  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n'})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var t=a(7294);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);