"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[6285],{9209:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=t(5893),s=t(1151);const i={title:"Save Validate \u547d\u4ee4"},r=void 0,l={id:"save/validate",title:"Save Validate \u547d\u4ee4",description:"hangar save validate \u547d\u4ee4\uff08hangar save \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u955c\u50cf\u5217\u8868\u4e2d\u7684\u6240\u6709\u955c\u50cf\u5747\u88ab\u6b63\u786e\u4fdd\u5b58\u5728\u538b\u7f29\u5305\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/11-save/02-validate.md",sourceDirName:"11-save",slug:"/save/validate",permalink:"/zh/docs/next/save/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/11-save/02-validate.md",tags:[],version:"current",lastUpdatedAt:1700639240,formattedLastUpdatedAt:"2023\u5e7411\u670822\u65e5",sidebarPosition:2,frontMatter:{title:"Save Validate \u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"Save \u547d\u4ee4",permalink:"/zh/docs/next/save/save"},next:{title:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",permalink:"/zh/docs/next/save/archive"}},d={},o=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function c(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"hangar save validate"})," \u547d\u4ee4\uff08",(0,n.jsx)(a.code,{children:"hangar save"})," \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u955c\u50cf\u5217\u8868\u4e2d\u7684\u6240\u6709\u955c\u50cf\u5747\u88ab\u6b63\u786e\u4fdd\u5b58\u5728\u538b\u7f29\u5305\u4e2d\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,n.jsxs)(a.p,{children:["\u5728\u6267\u884c\u5b8c ",(0,n.jsx)(a.a,{href:"save#quick-start",children:"save"})," \u547d\u4ee4\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u9a8c\u8bc1\u5df2\u4fdd\u5b58\u7684\u538b\u7f29\u5305\u6587\u4ef6\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"hangar save validate \\\n    --file example_image_list.txt \\\n    --source=docker.io \\\n    --destination=save_example.zip \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n"})}),"\n",(0,n.jsx)(a.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",metastring:'title="hangar save validate --help"',children:'Validate the saved images, ensure images were saved into archive file\n\nUsage:\n  hangar save validate -f IMAGE_LIST.txt -d SAVED_ARCHIVE.zip [flags]\n\nExamples:\n\nhangar save validate \\\n        --file IMAGE_LIST.txt \\\n        --source SOURCE_REGISTRY \\\n        --destination SAVED_ARCHIVE.zip \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -h, --help   help for validate\n\nGlobal Flags:\n  -a, --arch strings         architecture list of images (default [amd64,arm64])\n  -y, --auto-yes             answer yes automatically (used in shell script)\n      --debug                enable debug output\n  -d, --destination string   file name of the output saved images (default "saved-images.zip")\n  -o, --failed string        file name of the save failed image list (default "save-failed.txt")\n  -f, --file string          image list file\n      --insecure-policy      run Hangar without policy check\n  -j, --jobs int             worker number, copy images parallelly (1-20) (default 1)\n      --os strings           OS list of images (default [linux])\n  -s, --source string        override the source registry in image list\n      --timeout duration     timeout when save each images (default 10m0s)\n      --tls-verify           require HTTPS and verify certificates\n'})})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>r});var n=t(7294);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);