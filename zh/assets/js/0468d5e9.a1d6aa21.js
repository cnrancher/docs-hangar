"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1194],{9944:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"load/validate","title":"Load Validate \u547d\u4ee4","description":"hangar load validate \u547d\u4ee4\uff08hangar load \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u88ab\u6b63\u786e\u7684\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/12-load/02-validate.md","sourceDirName":"12-load","slug":"/load/validate","permalink":"/zh/docs/v1.8/load/validate","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/12-load/02-validate.md","tags":[],"version":"v1.8","lastUpdatedAt":1739438500000,"sidebarPosition":2,"frontMatter":{"title":"Load Validate \u547d\u4ee4"},"sidebar":"docs","previous":{"title":"Load \u547d\u4ee4","permalink":"/zh/docs/v1.8/load/load"},"next":{"title":"Sync","permalink":"/zh/docs/v1.8/sync/"}}');var i=n(4848),s=n(8453);const l={title:"Load Validate \u547d\u4ee4"},o=void 0,r={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"hangar load validate"})," \u547d\u4ee4\uff08",(0,i.jsx)(a.code,{children:"hangar load"})," \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u88ab\u6b63\u786e\u7684\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,i.jsx)(a.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,i.jsxs)(a.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u9a8c\u8bc1 ",(0,i.jsx)(a.a,{href:"/docs/v1.8/load/load#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",children:"load"})," \u547d\u4ee4\u5c06\u5bb9\u5668\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load validate \\\n    --file="example_image_list.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,i.jsx)(a.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-txt",metastring:'title="hangar load validate --help"',children:'Validate the loaded images, ensure images were loaded to registry server\n\nUsage:\n  hangar load validate -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]\n\nExamples:\n\nhangar load validate \\\n        --file IMAGE_LIST.txt \\\n        --source SAVED_ARCHIVE.zip \\\n        --destination REGISTRY_URL \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings             architecture list of images (default [amd64,arm64])\n      --debug                    enable debug output\n  -d, --destination string       destination registry url\n  -o, --failed string            file name of the load failed image list (default "load-failed.txt")\n  -f, --file string              image list file (optional: load all images from archive if not provided)\n      --insecure-policy          run Hangar without policy check\n  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)\n      --os strings               OS list of images (default [linux])\n      --project string           override all destination image projects\n      --skip-login               skip check the destination registry is logged in (used in shell script)\n  -s, --source string            saved archive filename\n      --source-registry string   override the source registry of image list\n      --timeout duration         timeout when save each images (default 10m0s)\n      --tls-verify               require HTTPS and verify certificates\n'})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>o});var t=n(6540);const i={},s=t.createContext(i);function l(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);