"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9487],{6024:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"questions","title":"Frequently asked questions","description":"Questions about Hangar","source":"@site/versioned_docs/version-v1.6/99-questions.md","sourceDirName":".","slug":"/questions","permalink":"/docs/v1.6/questions","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/99-questions.md","tags":[],"version":"v1.6","lastUpdatedAt":1739438500000,"sidebarPosition":99,"frontMatter":{"title":"Frequently asked questions"},"sidebar":"docs","previous":{"title":"Hangar Docker Image","permalink":"/docs/v1.6/docker-images"}}');var i=s(4848),r=s(8453);const o={title:"Frequently asked questions"},c=void 0,d={},l=[{value:"Questions about Hangar",id:"questions-about-hangar",level:2},{value:"Common errors",id:"common-errors",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"questions-about-hangar",children:"Questions about Hangar"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Principle of Mirror / Load / Save functions"}),"\n",(0,i.jsxs)(n.p,{children:["Hangar uses ",(0,i.jsx)(n.code,{children:"skopeo"})," to copy container images from source registry server to destination registry server / local file."]}),"\n",(0,i.jsxs)(n.p,{children:["It requires ",(0,i.jsx)(n.code,{children:"skopeo"})," installed when running Hangar."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"common-errors",children:"Common errors"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error ",(0,i.jsx)(n.code,{children:'this tool does not support template version "va.b.c"'})]}),"\n",(0,i.jsx)(n.p,{children:"The Template Version saved in the compressed package does not match the version supported by the current version."}),"\n",(0,i.jsx)(n.p,{children:"Please ensure that the version of the tool when saving the image to the compressed package is the same as that of the tool when loading the compressed package by load."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Template Version"}),(0,i.jsxs)(n.th,{style:{textAlign:"center"},children:[(0,i.jsx)(n.code,{children:"hangar"})," version"]})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"v1.0.0"})}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,i.jsx)(n.code,{children:"v1.0.0"})," ~ ",(0,i.jsx)(n.code,{children:"v1.2.3-rc1"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"center"},children:(0,i.jsx)(n.code,{children:"v1.1.0"})}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:[(0,i.jsx)(n.code,{children:"v1.3.0"})," ~ latest"]})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error ",(0,i.jsx)(n.code,{children:"manifest unknown: manifest unknown'"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"manifest unknown"})," means that the image was not found, please check the image in the image list."]}),"\n",(0,i.jsxs)(n.p,{children:["Try to use ",(0,i.jsx)(n.code,{children:"skopeo inspect docker:// --raw | jq"})," to check whether the Manifest of the image can be obtained."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error reporting ",(0,i.jsx)(n.code,{children:"unsupported MIME type"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"mediaType"})," format of the Manifest of the source image is not supported."]}),"\n",(0,i.jsxs)(n.p,{children:["This tool supports the following types of ",(0,i.jsx)(n.code,{children:"mediaType"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v2+json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v1+json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/vnd.oci.image.manifest.v1+json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"skopeo inspect docker:// --raw | jq"})," to get the ",(0,i.jsx)(n.code,{children:"mediaType"})," of the Manifest."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Error ",(0,i.jsx)(n.code,{children:"no image available for specified arch list"})]}),"\n",(0,i.jsxs)(n.p,{children:["The architecture of the image to be copied does not match the architecture specified by the ",(0,i.jsx)(n.code,{children:"-a"})," parameter."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);