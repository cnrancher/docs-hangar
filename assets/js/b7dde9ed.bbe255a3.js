"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6076],{8110:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var a=r(5893),i=r(1151);const t={title:"Hangar Docker Image"},s=void 0,c={id:"docker-images",title:"Hangar Docker Image",description:"Docker images support amd64 and arm64 architectures.",source:"@site/versioned_docs/version-v1.6/97-docker-images.md",sourceDirName:".",slug:"/docker-images",permalink:"/docs/v1.6/docker-images",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/97-docker-images.md",tags:[],version:"v1.6",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:97,frontMatter:{title:"Hangar Docker Image"},sidebar:"docs",previous:{title:"Automation Test",permalink:"/docs/v1.6/dev/test"},next:{title:"Frequently asked questions",permalink:"/docs/v1.6/questions"}},o={},d=[{value:"Run Mirror in CI",id:"run-mirror-in-ci",level:2}];function l(e){const n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Docker images support ",(0,a.jsx)(n.code,{children:"amd64"})," and ",(0,a.jsx)(n.code,{children:"arm64"})," architectures."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"docker pull cnrancher/hangar:${VERSION}\n\n# Get help information\n# The default entrypoint is hangar binary file\ndocker run cnrancher/hangar:${VERSION} hangar --help\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Set ",(0,a.jsx)(n.code,{children:"entrypoint"})," to ",(0,a.jsx)(n.code,{children:"bash"}),", mount the local directory into the container, and execute mirror/load/save in the container:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"$ docker run --entrypoint bash -v $(pwd):/hangar -it cnrancher/hangar:${VERSION}\na455e1202691:/hangar # hangar -h\nUsage: hangar COMMAND [OPTIONS]\n...\n"})}),"\n",(0,a.jsx)(n.h2,{id:"run-mirror-in-ci",children:"Run Mirror in CI"}),"\n",(0,a.jsx)(n.p,{children:"The Mirror command can be run automatically in a CI Pipeline, and the source registry, target registry, and username and password can be specified by setting the following environment variables:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SOURCE_USERNAME"}),": Source registry username"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SOURCE_PASSWORD"}),": Source registry password"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SOURCE_REGISTRY"}),": Source registry URL"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DEST_USERNAME"}),": Destination registry username"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DEST_PASSWORD"}),": Destination registry password"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DEST_REGISTRY"}),": Destination registry URL"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ndocker run -v $(pwd):/hangar \\\n    -e SOURCE_REGISTRY="" \\\n    -e SOURCE_USERNAME=""\\\n    -e SOURCE_PASSWORD="" \\\n    -e DEST_REGISTRY=""\\\n    -e DEST_USERNAME=""\\\n    -e DEST_PASSWORD="" \\\n    cnrancher/hangar:${VERSION} \\\n    hangar mirror \\\n    -f /hangar/list.txt \\\n    -o /hangar/mirror-failed.txt\n\n# check mirror-failed.txt\ncat mirror-failed.txt\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var a=r(7294);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);