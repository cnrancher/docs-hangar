"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[5779],{6422:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(5893),s=a(1151);const i={title:"Sync Validate \u547d\u4ee4"},r=void 0,c={id:"sync/validate",title:"Sync Validate \u547d\u4ee4",description:"hangar sync validate \u547d\u4ee4\uff08hangar save \u7684\u5b50\u547d\u4ee4\uff09 \u4e0e save validate \u547d\u4ee4\u76f8\u4f3c\uff0c\u7528\u4e8e\u9a8c\u8bc1 sync \u547d\u4ee4\u6b63\u786e\u7684\u5c06\u5bb9\u5668\u955c\u50cf\u9644\u52a0\u5230\u538b\u7f29\u5305\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/13-sync/02-validate.md",sourceDirName:"13-sync",slug:"/sync/validate",permalink:"/zh/docs/next/sync/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/13-sync/02-validate.md",tags:[],version:"current",lastUpdatedAt:1700639240,formattedLastUpdatedAt:"2023\u5e7411\u670822\u65e5",sidebarPosition:2,frontMatter:{title:"Sync Validate \u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"Sync \u547d\u4ee4",permalink:"/zh/docs/next/sync/sync"},next:{title:"\u9ad8\u7ea7\u7528\u6cd5",permalink:"/zh/docs/next/advanced-usage/"}},l={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"hangar sync validate"})," \u547d\u4ee4\uff08",(0,t.jsx)(n.code,{children:"hangar save"})," \u7684\u5b50\u547d\u4ee4\uff09 \u4e0e ",(0,t.jsx)(n.code,{children:"save validate"})," \u547d\u4ee4\u76f8\u4f3c\uff0c\u7528\u4e8e\u9a8c\u8bc1 ",(0,t.jsx)(n.code,{children:"sync"})," \u547d\u4ee4\u6b63\u786e\u7684\u5c06\u5bb9\u5668\u955c\u50cf\u9644\u52a0\u5230\u538b\u7f29\u5305\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsxs)(n.p,{children:["\u5728\u6267\u884c ",(0,t.jsx)(n.a,{href:"sync#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",children:"sync"})," \u547d\u4ee4\u540e\uff0c\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u9a8c\u8bc1:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'hangar sync validate \\\n    --file="extra_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="save_example.zip" \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sync validate --help"',children:'Validate the sync (append) images, ensure images were saved into archive file\n\nUsage:\n  hangar sync validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n\nExamples:\n\nhangar sync validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n      --debug                enable debug output\n  -d, --destination string   file name of the destination archive file\n  -o, --failed string        file name of the sync failed image list (default "sync-failed.txt")\n  -f, --file string          image list file\n      --insecure-policy      run Hangar without policy check\n  -j, --jobs int             worker number,copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);