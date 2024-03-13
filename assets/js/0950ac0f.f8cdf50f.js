"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2539],{2296:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=a(5893),t=a(1151);const i={title:"Sync Command"},o=void 0,r={id:"sync/sync",title:"Sync Command",description:"The hangar sync command is similar to the save command, it allows you to sync (append) extra images into the archive file without re-downloading all images.",source:"@site/versioned_docs/version-v1.7/13-sync/01-sync.md",sourceDirName:"13-sync",slug:"/sync/sync",permalink:"/docs/v1.7/sync/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/13-sync/01-sync.md",tags:[],version:"v1.7",lastUpdatedAt:1710300126,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{title:"Sync Command"},sidebar:"docs",previous:{title:"Sync",permalink:"/docs/v1.7/sync/"},next:{title:"Sync Validate Command",permalink:"/docs/v1.7/sync/validate"}},c={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"hangar sync"})," command is similar to the ",(0,s.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," command, it allows you to sync (append) extra images into the archive file without re-downloading all images."]}),"\n",(0,s.jsxs)(n.p,{children:["If some images fail to download when running the ",(0,s.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," command, you can use the ",(0,s.jsx)(n.code,{children:"sync"})," command to try to re-download the failed images to the archive file without re-downloading all images."]}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsxs)(n.p,{children:["Use following command to append new container images to the existing archive file created by ",(0,s.jsx)(n.a,{href:"/docs/v1.7/save/save#quick-start",children:"save"})," command parallelly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sync \\\n    --file="extra_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sync --help"',children:'Sync (append) images from registry server into local archive file\n\nUsage:\n  hangar sync -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n  hangar sync [command]\n\nExamples:\n\nhangar sync \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the sync (append) images, ensure images were saved into archive file\n\nFlags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -d, --destination string   file name of the destination archive file\n  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")\n  -f, --file string          image list file\n  -h, --help                 help for sync\n  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar sync [command] --help" for more information about a command.\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>o});var s=a(7294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);