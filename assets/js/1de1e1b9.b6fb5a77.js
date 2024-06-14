"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3459],{4233:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(5893),s=n(1151);const r={title:"Save Command"},t=void 0,o={id:"save/save",title:"Save Command",description:"The hangar save command is similar to the mirror command. It allows you to copy multiple container images into an archive file for load command use.",source:"@site/versioned_docs/version-v1.8/11-save/01-save.md",sourceDirName:"11-save",slug:"/save/save",permalink:"/docs/v1.8/save/save",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/11-save/01-save.md",tags:[],version:"v1.8",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:1,frontMatter:{title:"Save Command"},sidebar:"docs",previous:{title:"Save",permalink:"/docs/v1.8/save/"},next:{title:"Save Validate Command",permalink:"/docs/v1.8/save/validate"}},l={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Archive File",id:"archive-file",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"hangar save"})," command is similar to the ",(0,i.jsx)(a.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," command. It allows you to copy multiple container images into an archive file for ",(0,i.jsx)(a.a,{href:"/docs/v1.8/load/load",children:"load"})," command use."]}),"\n",(0,i.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(a.p,{children:"Use following command to save multiple container images from registry server into one local archive file parallelly:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Prepare an image list file:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:v1.7.0\ncnrancher/hangar:latest\n# Append some extra images here...\n"})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Save images from ",(0,i.jsx)(a.code,{children:"docker.io"})," registry server into local archive file:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar save \\\n    --file="example_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,i.jsxs)(a.p,{children:["The images will saved into ",(0,i.jsx)(a.code,{children:"saved_example.zip"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["If error occured when saving some images, the save failed images will output to ",(0,i.jsx)(a.code,{children:"save-failed.txt"})," by default."]}),"\n",(0,i.jsxs)(a.p,{children:["You can use the ",(0,i.jsx)(a.code,{children:"--failed"})," option to specify the output file of the save failed images, and then use hangar ",(0,i.jsx)(a.a,{href:"/docs/v1.8/sync/sync",children:"sync"})," command to re-download the save failed images in ",(0,i.jsx)(a.code,{children:"save-failed.txt"})," to the archive file without re-creating the whole archive file again."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"archive-file",children:"Archive File"}),"\n",(0,i.jsxs)(a.p,{children:["Hangar uses the ",(0,i.jsx)(a.code,{children:"zip"})," format archive file since version ",(0,i.jsx)(a.code,{children:"v1.7.0"}),"."]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsxs)(a.strong,{children:["It should be noted that archive file created by older versions of hangar (",(0,i.jsx)(a.code,{children:"tar.gz"}),") are not compatible with new versions."]})}),"\n",(0,i.jsxs)(a.p,{children:["For more information about hangar archive usage, see ",(0,i.jsx)(a.a,{href:"/docs/v1.8/load/load",children:"load"})," and ",(0,i.jsx)(a.a,{href:"/docs/v1.8/archive",children:"archive"})," page."]}),"\n",(0,i.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-txt",metastring:'title="hangar save --help"',children:'Save images from registry server into local archive file\n\nUsage:\n  hangar save -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n  hangar save [command]\n\nExamples:\n\nhangar save \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the saved images, ensure images were saved into archive file\n\nFlags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -y, --auto-yes             answer yes automatically (used in shell script)\n  -d, --destination string   file name of the output saved images (default "saved-images.zip")\n  -o, --failed string        file name of the save failed image list (default "save-failed.txt")\n  -f, --file string          image list file\n  -h, --help                 help for save\n  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar save [command] --help" for more information about a command.\n'})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>t});var i=n(7294);const s={},r=i.createContext(s);function t(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);