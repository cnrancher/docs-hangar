"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[2844],{6575:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(5893),t=n(1151);const r={},a="Hangar",s={type:"mdx",permalink:"/",source:"@site/src/pages/index.md",description:"Hangar is a simple and easy-to-use command line utility for mirroring multi-architecture & multi-platform container images between container image registries. Aiming to simplify the process of copying container images between image registries.",frontMatter:{},unlisted:!1},o={},c=[{value:"Documents",id:"documents",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Contributing",id:"contributing",level:2}];function d(A){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(1709).Z+"",width:"1000",height:"300"})}),"\n",(0,i.jsx)(e.h1,{id:"hangar",children:"Hangar"}),"\n",(0,i.jsxs)(e.p,{children:["Hangar is a ",(0,i.jsx)(e.strong,{children:"simple"})," and ",(0,i.jsx)(e.strong,{children:"easy-to-use"})," command line utility for mirroring multi-architecture & multi-platform container images between container image registries. Aiming to simplify the process of copying container images between image registries."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Hangar allows to copy container images without container runtime (daemon)."}),"\n",(0,i.jsx)(e.li,{children:"Not restricted by the architecture and OS of the runtime system, it supports running on Linux/Unix systems."}),"\n",(0,i.jsxs)(e.li,{children:["Supports both docker images and ",(0,i.jsx)(e.a,{href:"https://github.com/opencontainers/image-spec",children:"OCI images"}),"."]}),"\n",(0,i.jsx)(e.li,{children:"Hangar supports to copy container images parallelly to improve performance."}),"\n",(0,i.jsx)(e.li,{children:"Save and load images with archive files to allow the setup of registry server in Air-Gapped installation."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"It provides the following functions\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Mirror container images between image registries (see ",(0,i.jsx)(e.a,{href:"/docs/mirror/mirror",children:"mirror"})," command)."]}),"\n",(0,i.jsxs)(e.li,{children:["Save container images into an archive file, and then upload them to the image registry server (see ",(0,i.jsx)(e.a,{href:"/docs/save/save",children:"save"})," and ",(0,i.jsx)(e.a,{href:"/docs/load/load",children:"load"})," commands). Designed to use for Air-Gapped (offline) installation."]}),"\n",(0,i.jsxs)(e.li,{children:["Validate commands to verify that the container images were copied correctly (see ",(0,i.jsx)(e.a,{href:"/docs/advanced-usage/validate",children:"validate"})," subcommands)."]}),"\n",(0,i.jsxs)(e.li,{children:["Other advanced commands for image list files and archive files (see ",(0,i.jsx)(e.a,{href:"/docs/advanced-usage/",children:"advanced usage"}),")."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"documents",children:"Documents"}),"\n",(0,i.jsxs)(e.p,{children:["The detailed usage of Hangar and getting started instruction is available in ",(0,i.jsx)(e.a,{href:"/docs/",children:"Documents"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(e.p,{children:["Starting from ",(0,i.jsx)(e.code,{children:"v1.7.0"}),", Hangar has removed all third-party executable binary dependencies to improve the speed of container image copying and reduce performance consumption."]}),"\n",(0,i.jsx)(e.h2,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsxs)(e.p,{children:["If you encounter any issues or have suggestions for improvement while using Hangar, feel free to open an ",(0,i.jsx)(e.a,{href:"https://github.com/cnrancher/hangar/issues",children:"issue"})," or ",(0,i.jsx)(e.a,{href:"https://github.com/cnrancher/hangar/pulls",children:"pull request"}),". Your contributions are welcomed!"]})]})}function g(A={}){const{wrapper:e}={...(0,t.a)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(d,{...A})}):d(A)}},1709:(A,e,n)=>{n.d(e,{Z:()=>i});const i="data:image/png;base64,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"},1151:(A,e,n)=>{n.d(e,{Z:()=>s,a:()=>a});var i=n(7294);const t={},r=i.createContext(t);function a(A){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(t):A.components||t:a(A.components),i.createElement(r.Provider,{value:e},A.children)}}}]);