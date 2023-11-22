"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[1391],{6874:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(5893),t=n(1151);const a={title:"Mirror \u547d\u4ee4"},o=void 0,s={id:"mirror/mirror",title:"Mirror \u547d\u4ee4",description:"hangar mirror \u547d\u4ee4\u7528\u5728\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e4b\u95f4\u4e8e\u6279\u91cf\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002Hangar \u5141\u8bb8\u60a8\u6307\u5b9a\u9700\u8981\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u67b6\u6784 & \u5e73\u53f0\u53c2\u6570\uff0c\u542f\u7528\u591a\u7ebf\u7a0b\u5e76\u53d1\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/10-mirror/01-mirror.md",sourceDirName:"10-mirror",slug:"/mirror/mirror",permalink:"/zh/docs/next/mirror/mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/10-mirror/01-mirror.md",tags:[],version:"current",lastUpdatedAt:1700639240,formattedLastUpdatedAt:"2023\u5e7411\u670822\u65e5",sidebarPosition:1,frontMatter:{title:"Mirror \u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"Mirror",permalink:"/zh/docs/next/mirror/xxx"},next:{title:"Mirror Validate \u547d\u4ee4",permalink:"/zh/docs/next/mirror/validate"}},l={},c=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",id:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function d(r){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hangar mirror"})," \u547d\u4ee4\u7528\u5728\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e4b\u95f4\u4e8e\u6279\u91cf\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002Hangar \u5141\u8bb8\u60a8\u6307\u5b9a\u9700\u8981\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u67b6\u6784 & \u5e73\u53f0\u53c2\u6570\uff0c\u542f\u7528\u591a\u7ebf\u7a0b\u5e76\u53d1\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e4b\u95f4\u591a\u7ebf\u7a0b\u7684\u6279\u91cf\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"hangar mirror \\\n    --file=IMAGE_LIST.txt \\\n    --source=[SOURCE_REGISTRY_URL] \\\n    --destination=[DESTINATION_REGISTRY_URL] \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",children:"\u955c\u50cf\u5217\u8868\u683c\u5f0f"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hangar mirror"})," \u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(e.a,{href:"image-list-format",children:"\u955c\u50cf\u5217\u8868\u683c\u5f0f"})," \u9875\u9762\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-txt",metastring:'title="hangar mirror --help"',children:'Mirror images between registry servers\n\nUsage:\n  hangar mirror -f IMAGE_LIST.txt -d DESTINATION_REGISTRY [flags]\n  hangar mirror [command]\n\nExamples:\n# Mirror images from SOURCE REGISTRY to DESTINATION REGISTRY.\nhangar mirror \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination DESTINATION_REGISTRY \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Ensure the images were mirrored correctly\n\nFlags:\n  -a, --arch strings                 architecture list of images (default [amd64,arm64])\n  -d, --destination string           specify the destination image registry\n      --destination-project string   override all destination image projects\n  -o, --failed string                file name of the mirror failed image list (default "mirror-failed.txt")\n  -f, --file string                  image list file\n  -h, --help                         help for mirror\n  -j, --jobs int                     worker number, copy images parallelly (1-20) (default 1)\n      --os strings                   OS list of images (default [linux])\n      --skip-login                   skip check the destination registry is logged in (used in shell script)\n  -s, --source string                override the source registry in image list\n      --source-project string        override all source image projects\n      --timeout duration             timeout when mirror each images (default 10m0s)\n      --tls-verify                   require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar mirror [command] --help" for more information about a command.\n'})})]})}function m(r={}){const{wrapper:e}={...(0,t.a)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(d,{...r})}):d(r)}},1151:(r,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var i=n(7294);const t={},a=i.createContext(t);function o(r){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:o(r.components),i.createElement(a.Provider,{value:e},r.children)}}}]);