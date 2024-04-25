"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9703],{5191:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(5893),n=r(1151);const o={title:"Archive File Format"},t=void 0,s={id:"archive/specification",title:"Archive File Format",description:"Hangar uses the zip format archive file since version v1.7.0.",source:"@site/versioned_docs/version-v1.8/20-archive/01-specification.md",sourceDirName:"20-archive",slug:"/archive/specification",permalink:"/docs/v1.8/archive/specification",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/20-archive/01-specification.md",tags:[],version:"v1.8",lastUpdatedAt:1714013952,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:1,frontMatter:{title:"Archive File Format"},sidebar:"docs",previous:{title:"Archive",permalink:"/docs/v1.8/archive/"},next:{title:"List images in the archive file",permalink:"/docs/v1.8/archive/ls"}},c={},d=[{value:"Why using zip format?",id:"why-using-zip-format",level:2},{value:"Different with <code>docker save</code>",id:"different-with-docker-save",level:2}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Hangar uses the ",(0,a.jsx)(i.code,{children:"zip"})," format archive file since version ",(0,a.jsx)(i.code,{children:"v1.7.0"}),"."]}),"\n",(0,a.jsxs)(i.admonition,{type:"warning",children:[(0,a.jsx)(i.p,{children:(0,a.jsxs)(i.strong,{children:["The archive file created by older versions of hangar (",(0,a.jsx)(i.code,{children:"tar.gz"}),") are no longer compatible with new versions (",(0,a.jsx)(i.code,{children:"zip"}),")."]})}),(0,a.jsxs)(i.p,{children:["You can use ",(0,a.jsx)(i.a,{href:"/docs/v1.6/load/load",children:"hangar v1.6"})," to load the old ",(0,a.jsx)(i.code,{children:"tar.gz"})," format archive file."]})]}),"\n",(0,a.jsxs)(i.p,{children:["You can use ",(0,a.jsx)(i.a,{href:"/docs/v1.8/load/load",children:"load"})," command to load images from archive file to registry server."]}),"\n",(0,a.jsxs)(i.p,{children:["And you can also use the ",(0,a.jsx)(i.a,{href:"/docs/v1.8/archive/",children:"hangar archive"})," command to operate with the archive file."]}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/docs/v1.8/archive/ls",children:"hangar archive ls"}),": List the images in the archive file."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/docs/v1.8/archive/merge",children:"hangar archive merge"}),": Merge multiple archive files into a new archive file."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"/docs/v1.8/archive/export",children:"hangar archive export"}),": Export images from archive file."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"why-using-zip-format",children:"Why using zip format?"}),"\n",(0,a.jsxs)(i.p,{children:["Compared with the compressed tarball (",(0,a.jsx)(i.code,{children:"tar.gz"}),") format, the ",(0,a.jsx)(i.code,{children:"zip"})," archive format contains a file index (",(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/ZIP_(file_format)#Structure",children:"directory"}),") so it allows reading files from the ",(0,a.jsx)(i.code,{children:"zip"})," archive randomly, and it also allows appending new files into the ",(0,a.jsx)(i.code,{children:"zip"})," archive without decompressing and re-create the entire archive file. So Hangar 1.7 changed to ",(0,a.jsx)(i.code,{children:"zip"})," archive format to avoid extra disk storage usage when saving/loading/syncing container images."]}),"\n",(0,a.jsxs)(i.p,{children:["Therefore, this will cause Hangar to no longer support ",(0,a.jsx)(i.code,{children:"tar.gz"})," format compressed tarball, and the old ",(0,a.jsx)(i.code,{children:"saved-image-cache"})," directory will no longer exists."]}),"\n",(0,a.jsxs)(i.h2,{id:"different-with-docker-save",children:["Different with ",(0,a.jsx)(i.code,{children:"docker save"})]}),"\n",(0,a.jsxs)(i.p,{children:["The archive file created by Hangar is not compatible with ",(0,a.jsx)(i.code,{children:"docker save"})," or other tools (",(0,a.jsx)(i.code,{children:"podman"}),") archive files,\nand currently the Hangar ",(0,a.jsx)(i.a,{href:"/docs/v1.8/load/load",children:"load"})," command only supports to upload container images to registry server.\nIt does not support export container images from archive file to docker daemon, CRI-O and containerd daemon protocol."]}),"\n",(0,a.jsx)(i.p,{children:"The file size of the archive file created by Hangar is similar (or much smaller) than archive files created by other tools.\nIn addition, Hangar\u2019s archive files supports storing multi-architecture & platform container images."})]})}function l(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>s,a:()=>t});var a=r(7294);const n={},o=a.createContext(n);function t(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);