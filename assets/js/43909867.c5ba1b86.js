"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7805],{7445:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=o(4848),t=o(8453);const i={title:"Image List Formats"},s=void 0,a={id:"mirror/image-list-format",title:"Image List Formats",description:"hangar mirror command supports two different kinds of image list formats:",source:"@site/versioned_docs/version-v1.7/10-mirror/03-image-list-format.md",sourceDirName:"10-mirror",slug:"/mirror/image-list-format",permalink:"/docs/v1.7/mirror/image-list-format",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/10-mirror/03-image-list-format.md",tags:[],version:"v1.7",lastUpdatedAt:1726803035e3,sidebarPosition:3,frontMatter:{title:"Image List Formats"},sidebar:"docs",previous:{title:"Mirror Validate Command",permalink:"/docs/v1.7/mirror/validate"},next:{title:"Save",permalink:"/docs/v1.7/save/"}},l={},c=[];function d(e){const r={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"hangar mirror"})," command supports two different kinds of image list formats:"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Default"})," format (available for ",(0,n.jsx)(r.code,{children:"mirror/save/load/sync"})," subcommands):"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",metastring:'title="Default format example"',children:"# <REGISTRY>/<PROJECT>/<NAME>:<TAG>\n\ndocker.io/library/hello-world:latest\nhello-world:latest\ncnrancher/hangar:v1.7.0\n"})}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Mirror"})," format (only available for ",(0,n.jsx)(r.code,{children:"mirror"})," subcommand):"]}),"\n",(0,n.jsxs)(r.p,{children:["Each line contains ",(0,n.jsx)(r.strong,{children:'"[source image] [destination image] [TAG]"'}),", separated with white space ",(0,n.jsx)(r.code,{children:"' '"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="Mirror format example"',children:"# <SOURCE> <DESTINATION> <TAG>\n\ndocker.io/hello-world private.io/library/mirrored-hello-world latest\nnginx                 example.io/library/mirrored-nginx       1.22\nmysql                 example.io/mysql/mirrored-mysql         8\nquay.io/skopeo/stable example.io/library/mirrored-skopeo      latest\n"})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"mirror"})," format is used for rename the copied destination image name,\nand it allows to mirror multiple images to different registry servers and projects."]}),"\n",(0,n.jsxs)(r.p,{children:["You can use hangar ",(0,n.jsx)(r.a,{href:"/docs/v1.7/advanced/convert-list",children:"convert-list"})," command to convert the image list file from ",(0,n.jsx)(r.code,{children:"Default"})," format into ",(0,n.jsx)(r.code,{children:"Mirror"})," format."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The line begin with ",(0,n.jsx)(r.code,{children:"//"})," or ",(0,n.jsx)(r.code,{children:"#"})," will be treated as comment."]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>a});var n=o(6540);const t={},i=n.createContext(t);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);