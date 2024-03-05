"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2270],{7196:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var s=n(5893),t=n(1151);const d={title:"Sync Command"},r=void 0,c={id:"advanced/sync",title:"Sync Command",description:"The sync command syncs the extra container images into the cache folder created by Save command.",source:"@site/versioned_docs/version-v1.6/13-advanced/02-sync.md",sourceDirName:"13-advanced",slug:"/advanced/sync",permalink:"/docs/v1.6/advanced/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/02-sync.md",tags:[],version:"v1.6",lastUpdatedAt:1709622376,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:2,frontMatter:{title:"Sync Command"},sidebar:"docs",previous:{title:"Validate commands",permalink:"/docs/v1.6/advanced/validate"},next:{title:"Compress Command",permalink:"/docs/v1.6/advanced/compress"}},o={},i=[{value:"Background",id:"background",level:2},{value:"QuickStart",id:"quickstart",level:2},{value:"Usage",id:"usage",level:2},{value:"Others",id:"others",level:2}];function l(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["The sync command syncs the extra container images into the cache folder created by ",(0,s.jsx)(a.a,{href:"/docs/v1.6/save/save",children:"Save"})," command."]}),"\n",(0,s.jsx)(a.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(a.p,{children:["There may some images failed to save when running Save command, the save failed image list will output into ",(0,s.jsx)(a.code,{children:"save-failed.txt"}),". You can use Sync command to re-save these images into ",(0,s.jsx)(a.code,{children:"saved-image-cache"})," folder and use ",(0,s.jsx)(a.a,{href:"/docs/v1.6/advanced/compress",children:"Compress"})," to re-compress the tarball."]}),"\n",(0,s.jsxs)(a.p,{children:["Besides, the ",(0,s.jsx)(a.a,{href:"/docs/v1.6/advanced/decompress",children:"decompress"})," command supports to decompress the tarball created by hangar same as the decompress part of ",(0,s.jsx)(a.a,{href:"/docs/v1.6/load/load",children:"hangar load"})," command."]}),"\n",(0,s.jsx)(a.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,s.jsxs)(a.p,{children:["Re-save the images in ",(0,s.jsx)(a.code,{children:"saved-failed.txt"})," into ",(0,s.jsx)(a.code,{children:"saved-images-cache"})," folder:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:"hangar sync -f ./saved-failed.txt -d ./saved-images-cache -j 10\n"})}),"\n",(0,s.jsxs)(a.blockquote,{children:["\n",(0,s.jsxs)(a.p,{children:["Sync failed images will output to ",(0,s.jsx)(a.code,{children:"sync-failed.txt"})]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-txt",children:"Usage:\n  hangar sync [flags]\n\nExamples:\n  hangar sync -f save-failed.txt -d [DECOMPRESSED_FOLDER]\n\nFlags:\n  -a, --arch string          architecture list of images, separate with ',' (default \"amd64,arm64\")\n  -d, --destination string   decompressed saved images folder (required)\n  -o, --failed string        file name of the sync failed image list (default \"sync-failed.txt\")\n  -f, --file string          image list file (the format as same as 'rancher-images.txt') (required)\n  -h, --help                 help for sync\n  -j, --jobs int             worker number, concurrent mode if larger than 1, max 20 (default 1)\n      --no-arch-os-fail      image copy failed when the OS and architecture of the image are not supported\n      --os string            OS list of images, separate with ',' (default \"linux,windows\")\n  -s, --source string        override the source registry defined in image list\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n"})}),"\n",(0,s.jsx)(a.h2,{id:"others",children:"Others"}),"\n",(0,s.jsxs)(a.p,{children:["After syncing images into cache folder, you can use ",(0,s.jsx)(a.a,{href:"/docs/v1.6/advanced/compress",children:"compress"})," command to create tarball."]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>r});var s=n(7294);const t={},d=s.createContext(t);function r(e){const a=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(d.Provider,{value:a},e.children)}}}]);