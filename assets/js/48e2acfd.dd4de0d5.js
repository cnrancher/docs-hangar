"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[4272],{1172:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>m});var n=i(5893),a=i(1151);const t={title:"Mirror Command"},s=void 0,o={id:"mirror/mirror",title:"Mirror Command",description:"hangar mirror command is for mirror multiple container images between image registry servers. It allows you to specify architecture and platforms when copying image, and use multiple workers to copy images parallelly.",source:"@site/versioned_docs/version-v1.7/10-mirror/01-mirror.md",sourceDirName:"10-mirror",slug:"/mirror/mirror",permalink:"/docs/v1.7/mirror/mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/10-mirror/01-mirror.md",tags:[],version:"v1.7",lastUpdatedAt:1701769518,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:1,frontMatter:{title:"Mirror Command"},sidebar:"docs",previous:{title:"Mirror",permalink:"/docs/v1.7/mirror/"},next:{title:"Mirror Validate Command",permalink:"/docs/v1.7/mirror/validate"}},l={},m=[{value:"Quick Start",id:"quick-start",level:2},{value:"Image List Format",id:"image-list-format",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hangar mirror"})," command is for mirror multiple container images between image registry servers. It allows you to specify architecture and platforms when copying image, and use multiple workers to copy images parallelly."]}),"\n",(0,n.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(r.p,{children:"Use following command to mirror multiple images between image registry servers parallelly:"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsx)(r.p,{children:"Prepare an example image list file."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:latest\ncnrancher/hangar:v1.7.0\n# Add more images here...\n"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Hangar ",(0,n.jsx)(r.code,{children:"mirror"})," command supports two kinds of image list file formats, the image list file in this example is in ",(0,n.jsx)(r.code,{children:"default"})," format. See ",(0,n.jsx)(r.a,{href:"/docs/v1.7/mirror/image-list-format",children:"Image List Formats"})," for image list format specification."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Run following command to mirror ",(0,n.jsx)(r.strong,{children:"amd64 & arm64, linux"})," container images by image list file from ",(0,n.jsx)(r.em,{children:"SOURCE REGISTRY"})," to ",(0,n.jsx)(r.em,{children:"DESTINATION REGISTRY"})," parallelly."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar mirror \\\n    --file="example_image_list.txt" \\\n    --source=SOURCE_REGISTRY_URL \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:["Use ",(0,n.jsx)(r.a,{href:"/docs/v1.7/advanced/inspect",children:"inspect"})," command to view the copied image manifest."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"hangar inspect --raw docker://DESTINATION_REGISTRY_URL/cnrancher/hangar:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"image-list-format",children:"Image List Format"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hangar mirror"})," command supports two different kinds of image list formats, see ",(0,n.jsx)(r.a,{href:"/docs/v1.7/mirror/image-list-format",children:"Image List Formats"})," for image list format specification."]}),"\n",(0,n.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="hangar mirror --help"',children:'Mirror images between registry servers\n\nUsage:\n  hangar mirror -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]\n  hangar mirror [command]\n\nExamples:\n# Mirror images from SOURCE REGISTRY to DESTINATION REGISTRY.\nhangar mirror \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination DESTINATION_REGISTRY \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Ensure the images were mirrored correctly\n\nFlags:\n  -a, --arch strings                 architecture list of images (default [amd64,arm64])\n  -d, --destination string           specify the destination image registry\n      --destination-project string   override all destination image projects\n  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")\n  -f, --file string                  image list file\n  -h, --help                         help for mirror\n  -j, --jobs int                     worker number, copy images parallelly (1-20) (default 1)\n      --os strings                   OS list of images (default [linux])\n      --skip-login                   skip check the destination registry is logged in (used in shell script)\n  -s, --source string                override the source registry in image list\n      --source-project string        override all source image projects\n      --timeout duration             timeout when mirror each images (default 10m0s)\n      --tls-verify                   require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar mirror [command] --help" for more information about a command.\n'})})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>s});var n=i(7294);const a={},t=n.createContext(a);function s(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);