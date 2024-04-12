"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9371],{8128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=r(5893),t=r(1151);const i={title:"Hangar Docker Image"},o=void 0,s={id:"docker-image",title:"Hangar Docker Image",description:"Hangar docker images support both amd64 and arm64 architectures.",source:"@site/versioned_docs/version-v1.8/97-docker-image.md",sourceDirName:".",slug:"/docker-image",permalink:"/docs/v1.8/docker-image",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/97-docker-image.md",tags:[],version:"v1.8",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:97,frontMatter:{title:"Hangar Docker Image"},sidebar:"docs",previous:{title:"Rancher Air-Gap Installation",permalink:"/docs/v1.8/bestpractice/rancher"},next:{title:"Q&A",permalink:"/docs/v1.8/questions"}},c={},d=[{value:"Integrate Hangar with CI",id:"integrate-hangar-with-ci",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Hangar docker images support both ",(0,a.jsx)(n.code,{children:"amd64"})," and ",(0,a.jsx)(n.code,{children:"arm64"})," architectures."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Starting form ",(0,a.jsx)(n.code,{children:"v1.7.0"}),", the entrypoint of hangar image was changed to ",(0,a.jsx)(n.code,{children:"bash"})," instead of ",(0,a.jsx)(n.code,{children:"hangar"})," executable binary file."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull cnrancher/hangar:${VERSION}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Execute hangar commands in the container:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -v $(pwd):/hangar -it cnrancher/hangar:latest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"-c"})," option of the bash to execute the hangar commands."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run cnrancher/hangar -c "hangar help"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"integrate-hangar-with-ci",children:"Integrate Hangar with CI"}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"cnrancher/hangar"})," docker image as base image to integrate hangar with CI, here is an example script:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:'title="mirror.sh"',children:'#!/bin/bash\n\n# Login to the destination registry server\n# (and source registry server if needed) before copy images.\nhangar login [DESTINATION_REGISTRY_URL] \\\n    --username="${USERNAME}" \\\n    --password="${PASSWORD}"\n\nhangar mirror \\\n    --file="/hangar/list.txt" \\\n    --source="docker.io" \\\n    --destination="[DESTINATION_REGISTRY_URL]" \\\n    --jobs=8 \\\n    --failed="/hangar/mirror-failed.txt" \\\n    --skip-login\n\n# Check mirror-failed.txt\nif [[ -e "mirror-failed.txt" ]]; then\n    echo "There are some images failed to copy:"\n\n    cat mirror-failed.txt\n    exit 1\nfi\n\n# Validate the mirrored images (optional)\nhangar mirror validate \\\n    --file="/hangar/list.txt" \\\n    --source="docker.io" \\\n    --destination="[DESTINATION_REGISTRY_URL]" \\\n    --jobs=8 \\\n    --failed="/hangar/mirror-validate-failed.txt" \\\n    --skip-login\n\n# Check mirror-validate-failed.txt\nif [[ -e "mirror-validate-failed.txt" ]]; then\n    echo "There are some images failed to validate after mirror:"\n    cat mirror-validate-failed.txt\n    exit 1\nfi\n'})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var a=r(7294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);