"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[6076],{8110:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=r(5893),s=r(1151);const t={title:"Hangar Docker Image"},a=void 0,c={id:"docker-images",title:"Hangar Docker Image",description:"Docker images support amd64 and arm64 architectures.",source:"@site/versioned_docs/version-v1.6/97-docker-images.md",sourceDirName:".",slug:"/docker-images",permalink:"/docs/docker-images",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/97-docker-images.md",tags:[],version:"v1.6",sidebarPosition:97,frontMatter:{title:"Hangar Docker Image"},sidebar:"docs",previous:{title:"Automation Test",permalink:"/docs/dev/test"},next:{title:"Frequently asked questions",permalink:"/docs/questions"}},o={},d=[{value:"Run Mirror in CI",id:"run-mirror-in-ci",level:2}];function l(e){const n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Docker images support ",(0,i.jsx)(n.code,{children:"amd64"})," and ",(0,i.jsx)(n.code,{children:"arm64"})," architectures."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"docker pull cnrancher/hangar:${VERSION}\n\n# Get help information\n# The default entrypoint is hangar binary file\ndocker run cnrancher/hangar:${VERSION} --help\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Set ",(0,i.jsx)(n.code,{children:"entrypoint"})," to ",(0,i.jsx)(n.code,{children:"bash"}),", mount the local directory into the container, and execute mirror/load/save in the container:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"$ docker run --entrypoint bash -v $(pwd):/images -it cnrancher/hangar:${VERSION}\na455e1202691:/images # hangar -h\nUsage: hangar COMMAND [OPTIONS]\n...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-mirror-in-ci",children:"Run Mirror in CI"}),"\n",(0,i.jsx)(n.p,{children:"The Mirror command can be run automatically in a CI Pipeline, and the source registry, target registry, and username and password can be specified by setting the following environment variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SOURCE_USERNAME"}),": Source registry username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SOURCE_PASSWORD"}),": Source registry password"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SOURCE_REGISTRY"}),": Source registry URL"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DEST_USERNAME"}),": Destination registry username"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DEST_PASSWORD"}),": Destination registry password"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DEST_REGISTRY"}),": Destination registry URL"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ndocker run -v $(pwd):/images \\\n    -e SOURCE_REGISTRY="" \\\n    -e SOURCE_USERNAME=""\\\n    -e SOURCE_PASSWORD="" \\\n    -e DEST_REGISTRY=""\\\n    -e DEST_USERNAME=""\\\n    -e DEST_PASSWORD="" \\\n    cnrancher/hangar:${VERSION} mirror \\\n    -f /images/list.txt \\\n    -o /images/mirror-failed.txt\n\n# check mirror-failed.txt\ncat mirror-failed.txt\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var i=r(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);