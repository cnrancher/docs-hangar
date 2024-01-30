"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3668],{1890:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(5893),t=i(1151);const a={title:"Mirror Validate \u547d\u4ee4"},s=void 0,o={id:"mirror/validate",title:"Mirror Validate \u547d\u4ee4",description:"hangar mirror validate \u547d\u4ee4\u7528\u4e8e\u6821\u9a8c Mirror \u8fc7\u7684\u955c\u50cf\u662f\u5426\u62f7\u8d1d\u6b63\u786e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/10-mirror/02-validate.md",sourceDirName:"10-mirror",slug:"/mirror/validate",permalink:"/zh/docs/v1.7/mirror/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/10-mirror/02-validate.md",tags:[],version:"v1.7",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",sidebarPosition:2,frontMatter:{title:"Mirror Validate \u547d\u4ee4"},sidebar:"docs",previous:{title:"Mirror \u547d\u4ee4",permalink:"/zh/docs/v1.7/mirror/mirror"},next:{title:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",permalink:"/zh/docs/v1.7/mirror/image-list-format"}},l={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hangar mirror validate"})," \u547d\u4ee4\u7528\u4e8e\u6821\u9a8c Mirror \u8fc7\u7684\u955c\u50cf\u662f\u5426\u62f7\u8d1d\u6b63\u786e\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u6267\u884c\u5b8c ",(0,n.jsx)(r.a,{href:"/docs/v1.7/mirror/mirror#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",children:"mirror"})," \u547d\u4ee4\u540e\uff0c\u4f7f\u7528\u4e0b\u65b9\u547d\u4ee4\u6821\u9a8c\u5df2\u62f7\u8d1d\u7684\u955c\u50cf:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar mirror validate \\\n    --file="example_image_list.txt" \\\n    --source=SOURCE_REGISTRY_URL \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,n.jsx)(r.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="hangar mirror validate --help"',children:'Ensure the images were mirrored correctly\n\nUsage:\n  hangar mirror validate -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]\n\nExamples:\n\nhangar mirror validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination DESTINATION_REGISTRY \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings                 architecture list of images (default [amd64,arm64])\n      --debug                        enable debug output\n  -d, --destination string           specify the destination image registry\n      --destination-project string   override all destination image projects\n  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")\n  -f, --file string                  image list file\n      --insecure-policy              run Hangar without policy check\n  -j, --jobs int                     worker number,copy images parallelly (1-20) (default 1)\n      --os strings                   OS list of images (default [linux])\n      --skip-login                   skip check the destination registry is logged in (used in shell script)\n  -s, --source string                override the source registry in image list\n      --source-project string        override all source image projects\n      --timeout duration             timeout when mirror each images (default 10m0s)\n      --tls-verify                   require HTTPS and verify certificates\n'})})]})}function m(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>s});var n=i(7294);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);