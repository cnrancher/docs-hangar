"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[8538],{5998:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(5893),s=t(1151);const i={title:"Save Validate Command"},r=void 0,o={id:"save/validate",title:"Save Validate Command",description:"The hangar save validate command (subcommand of hangar save) is used for ensuring the images were saved into archive file correctly.",source:"@site/versioned_docs/version-v1.8/11-save/02-validate.md",sourceDirName:"11-save",slug:"/save/validate",permalink:"/docs/v1.8/save/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/11-save/02-validate.md",tags:[],version:"v1.8",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:2,frontMatter:{title:"Save Validate Command"},sidebar:"docs",previous:{title:"Save Command",permalink:"/docs/v1.8/save/save"},next:{title:"Archive File",permalink:"/docs/v1.8/save/archive"}},d={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"hangar save validate"})," command (subcommand of ",(0,n.jsx)(a.code,{children:"hangar save"}),") is used for ensuring the images were saved into archive file correctly."]}),"\n",(0,n.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(a.p,{children:["Verify the saved images according to image list file after executing the ",(0,n.jsx)(a.a,{href:"/docs/v1.8/save/save#quick-start",children:"save"})," command:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar save validate \\\n    --file="example_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",metastring:'title="hangar save validate --help"',children:'Validate the saved images, ensure images were saved into archive file\n\nUsage:\n  hangar save validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n\nExamples:\n\nhangar save validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -y, --auto-yes             answer yes automatically (used in shell script)\n      --debug                enable debug output\n  -d, --destination string   file name of the output saved images (default "saved-images.zip")\n  -o, --failed string        file name of the save failed image list (default "save-failed.txt")\n  -f, --file string          image list file\n      --insecure-policy      run Hangar without policy check\n  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n'})})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>r});var n=t(7294);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);