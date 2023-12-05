"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2155],{1720:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=a(5893),i=a(1151);const r={title:"Save \u547d\u4ee4"},t=void 0,l={id:"save/save",title:"Save \u547d\u4ee4",description:"hangar save \u547d\u4ee4\u4e0e mirror \u547d\u4ee4\u7c7b\u4f3c\uff0c\u7528\u4e8e\u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u81f3\u672c\u5730\u7684\u538b\u7f29\u6587\u4ef6\u4e2d\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528 load \u547d\u4ee4\u5c06\u538b\u7f29\u6587\u4ef6\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/11-save/01-save.md",sourceDirName:"11-save",slug:"/save/save",permalink:"/zh/docs/v1.7/save/save",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/11-save/01-save.md",tags:[],version:"v1.7",sidebarPosition:1,frontMatter:{title:"Save \u547d\u4ee4"},sidebar:"docs",previous:{title:"Save",permalink:"/zh/docs/v1.7/save/"},next:{title:"Save Validate \u547d\u4ee4",permalink:"/zh/docs/v1.7/save/validate"}},o={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",id:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hangar save"})," \u547d\u4ee4\u4e0e ",(0,s.jsx)(n.a,{href:"/docs/v1.7/mirror/mirror",children:"mirror"})," \u547d\u4ee4\u7c7b\u4f3c\uff0c\u7528\u4e8e\u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u81f3\u672c\u5730\u7684\u538b\u7f29\u6587\u4ef6\u4e2d\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/docs/v1.7/load/load",children:"load"})," \u547d\u4ee4\u5c06\u538b\u7f29\u6587\u4ef6\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u955c\u50cf\u5217\u8868\u4e2d\u7684\u955c\u50cf\u4e0b\u8f7d\u81f3\u538b\u7f29\u6587\u4ef6\u4e2d\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u6837\u4f8b\u955c\u50cf\u5217\u8868\u6587\u4ef6:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:v1.7.0\ncnrancher/hangar:latest\n# Append some extra images here...\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5c06\u955c\u50cf\u4ece ",(0,s.jsx)(n.code,{children:"docker.io"})," \u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u81f3\u538b\u7f29\u5305 ",(0,s.jsx)(n.code,{children:"saved_example.zip"})," \u4e2d:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar save \\\n    --file="example_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u7ec8\u955c\u50cf\u6587\u4ef6\u5c06\u88ab\u4fdd\u5b58\u5728 ",(0,s.jsx)(n.code,{children:"saved_example.zip"})," \u538b\u7f29\u5305\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",children:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece ",(0,s.jsx)(n.code,{children:"v1.7.0"})," \u8d77\uff0cHangar \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"zip"})," \u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["\u65e7\u7248\u672c\u7684 Hangar \u521b\u5efa\u7684\u538b\u7f29\u5305\u683c\u5f0f\uff08",(0,s.jsx)(n.code,{children:"tar.gz"}),"\uff09\u5c06\u65e0\u6cd5\u4e0e\u65b0\u7248\u672c\uff08",(0,s.jsx)(n.code,{children:"zip"}),"\uff09\u683c\u5f0f\u76f8\u517c\u5bb9\u3002"]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u4e8e\u538b\u7f29\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"/docs/v1.7/load/load",children:"load"})," \u547d\u4ee4\u548c ",(0,s.jsx)(n.a,{href:"/docs/v1.7/save/archive",children:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f"})," \u9875\u9762\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar save --help"',children:'Save images from registry server into local archive file\n\nUsage:\n  hangar save -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n  hangar save [command]\n\nExamples:\n\nhangar save \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the saved images, ensure images were saved into archive file\n\nFlags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -y, --auto-yes             answer yes automatically (used in shell script)\n  -d, --destination string   file name of the output saved images (default "saved-images.zip")\n  -o, --failed string        file name of the save failed image list (default "save-failed.txt")\n  -f, --file string          image list file\n  -h, --help                 help for save\n  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar save [command] --help" for more information about a command.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>t});var s=a(7294);const i={},r=s.createContext(i);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);