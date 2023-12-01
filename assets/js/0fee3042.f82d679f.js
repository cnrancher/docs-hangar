"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[8698],{7234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(5893),s=n(1151);const a={title:"convert-list Command"},i=void 0,o={id:"advanced-usage/convert-list",title:"convert-list Command",description:"The convert-list command converts the format of image list file rancher-images.txt to the list file used by the Mirror command.",source:"@site/versioned_docs/version-v1.6/13-advanced-usage/05-convert-list.md",sourceDirName:"13-advanced-usage",slug:"/advanced-usage/convert-list",permalink:"/docs/advanced-usage/convert-list",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced-usage/05-convert-list.md",tags:[],version:"v1.6",sidebarPosition:5,frontMatter:{title:"convert-list Command"},sidebar:"docs",previous:{title:"Decompress Command",permalink:"/docs/advanced-usage/decompress"},next:{title:"generate-list Command",permalink:"/docs/advanced-usage/generate-list"}},c={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usages",id:"usages",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"convert-list"})," command converts the format of image list file ",(0,r.jsx)(t.code,{children:"rancher-images.txt"})," to the list file used by the ",(0,r.jsx)(t.a,{href:"../mirror/mirror",children:"Mirror"})," command."]}),"\n",(0,r.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsxs)(t.p,{children:["Convert the list format from ",(0,r.jsx)(t.code,{children:"rancher-images.txt"})," into the format used for the ",(0,r.jsx)(t.a,{href:"../mirror/mirror",children:"mirror"})," command, and set the destination registry to ",(0,r.jsx)(t.code,{children:"custom.private.io"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"hangar convert-list -i rancher-images.txt -d custom.private.io\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This command will convert the images in ",(0,r.jsx)(t.code,{children:"rancher-images.txt"})," from format:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"# NAME:TAG\nrancher/rancher:v2.6.9\nnginx\n"})}),"\n",(0,r.jsxs)(t.p,{children:["to the format used by ",(0,r.jsx)(t.code,{children:"mirror"})," sub-command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"# SOURCE DEST TAG\nrancher/rancher custom.private.io/rancher/rancher v2.6.9\nnginx custom.private.io/nginx latest\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:'Usage:\n  hangar convert-list [flags]\n\nExamples:\n  hangar convert-list -i rancher-images.txt -o CONVERTED_MIRROR_LIST.txt\n\nFlags:\n  -d, --destination string   specify the destination registry\n  -h, --help                 help for convert-list\n  -i, --input string         input image list (required)\n  -o, --output string        output image list (default "[INPUT_FILE].converted")\n  -s, --source string        specify the source registry\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(7294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);