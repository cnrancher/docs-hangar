"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[6329],{1223:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=i(5893),n=i(1151);const a={title:"Mirror Validate Command"},o=void 0,s={id:"mirror/validate",title:"Mirror Validate Command",description:"The hangar mirror validate command (subcommand of hangar mirror) is used for ensuring the images were mirrored correctly.",source:"@site/docs/10-mirror/02-validate.md",sourceDirName:"10-mirror",slug:"/mirror/validate",permalink:"/docs/next/mirror/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/10-mirror/02-validate.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Mirror Validate Command"},sidebar:"tutorialSidebar",previous:{title:"Mirror Command",permalink:"/docs/next/mirror/mirror"},next:{title:"Image List Formats",permalink:"/docs/next/mirror/image-list-format"}},l={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"hangar mirror validate"})," command (subcommand of ",(0,t.jsx)(r.code,{children:"hangar mirror"}),") is used for ensuring the images were mirrored correctly."]}),"\n",(0,t.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(r.p,{children:["Verify the mirrored images according to image list file after executing the ",(0,t.jsx)(r.a,{href:"mirror#quick-start",children:"mirror"})," command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar mirror validate \\\n    --file="example_image_list.txt" \\\n    --source=SOURCE_REGISTRY_URL \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-txt",metastring:'title="hangar mirror validate --help"',children:'Ensure the images were mirrored correctly\n\nUsage:\n  hangar mirror validate -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]\n\nExamples:\n\nhangar mirror validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination DESTINATION_REGISTRY \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings                 architecture list of images (default [amd64,arm64])\n      --debug                        enable debug output\n  -d, --destination string           specify the destination image registry\n      --destination-project string   override all destination image projects\n  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")\n  -f, --file string                  image list file\n      --insecure-policy              run Hangar without policy check\n  -j, --jobs int                     worker number,copy images parallelly (1-20) (default 1)\n      --os strings                   OS list of images (default [linux])\n      --skip-login                   skip check the destination registry is logged in (used in shell script)\n  -s, --source string                override the source registry in image list\n      --source-project string        override all source image projects\n      --timeout duration             timeout when mirror each images (default 10m0s)\n      --tls-verify                   require HTTPS and verify certificates\n'})})]})}function m(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>s,a:()=>o});var t=i(7294);const n={},a=t.createContext(n);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);