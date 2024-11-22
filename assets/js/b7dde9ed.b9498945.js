"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1283],{9732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(4848),o=n(8453);const s={title:"Hangar Docker Image"},a=void 0,c={id:"docker-images",title:"Hangar Docker Image",description:"Docker images support amd64 and arm64 architectures.",source:"@site/versioned_docs/version-v1.6/97-docker-images.md",sourceDirName:".",slug:"/docker-images",permalink:"/docs/v1.6/docker-images",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/97-docker-images.md",tags:[],version:"v1.6",lastUpdatedAt:1732247558e3,sidebarPosition:97,frontMatter:{title:"Hangar Docker Image"},sidebar:"docs",previous:{title:"Automation Test",permalink:"/docs/v1.6/dev/test"},next:{title:"Frequently asked questions",permalink:"/docs/v1.6/questions"}},i={},d=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Docker images support ",(0,r.jsx)(t.code,{children:"amd64"})," and ",(0,r.jsx)(t.code,{children:"arm64"})," architectures."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"docker pull cnrancher/hangar:${VERSION}\n\n# Set `entrypoint` to `bash`, mount the local directory into the container, and execute mirror/load/save in the container:\ndocker run -v $(pwd):/hangar -it --entrypoint=bash cnrancher/hangar:latest\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(6540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);