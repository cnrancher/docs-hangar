"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9719],{4619:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),i=n(8453);const s={title:"Load Validate Command"},r=void 0,o={id:"load/validate",title:"Load Validate Command",description:"The hangar load validate command (subcommand of hangar load) is used for ensuring the images were loaded to registry server.",source:"@site/versioned_docs/version-v1.7/12-load/02-validate.md",sourceDirName:"12-load",slug:"/load/validate",permalink:"/docs/v1.7/load/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/12-load/02-validate.md",tags:[],version:"v1.7",lastUpdatedAt:1726803035e3,sidebarPosition:2,frontMatter:{title:"Load Validate Command"},sidebar:"docs",previous:{title:"Load Command",permalink:"/docs/v1.7/load/load"},next:{title:"Sync",permalink:"/docs/v1.7/sync/"}},d={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"hangar load validate"})," command (subcommand of ",(0,t.jsx)(a.code,{children:"hangar load"}),") is used for ensuring the images were loaded to registry server."]}),"\n",(0,t.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(a.p,{children:["Verify the loaded images according to image list file after executing the ",(0,t.jsx)(a.a,{href:"/docs/v1.7/load/load#quick-start",children:"load"})," command:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load validate \\\n    --file="example_image_list.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",metastring:'title="hangar load validate --help"',children:'Validate the loaded images, ensure images were loaded to registry server\n\nUsage:\n  hangar load validate -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]\n\nExamples:\n\nhangar load validate \\\n        --file IMAGE_LIST.txt \\\n        --source SAVED_ARCHIVE.zip \\\n        --destination REGISTRY_URL \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings             architecture list of images (default [amd64,arm64])\n      --debug                    enable debug output\n  -d, --destination string       destination registry url\n  -o, --failed string            file name of the load failed image list (default "load-failed.txt")\n  -f, --file string              image list file (optional: load all images from archive if not provided)\n      --insecure-policy          run Hangar without policy check\n  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)\n      --os strings               OS list of images (default [linux])\n      --project string           override all destination image projects\n      --skip-login               skip check the destination registry is logged in (used in shell script)\n  -s, --source string            saved archive filename\n      --source-registry string   override the source registry of image list\n      --timeout duration         timeout when save each images (default 10m0s)\n      --tls-verify               require HTTPS and verify certificates\n'})})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var t=n(6540);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);