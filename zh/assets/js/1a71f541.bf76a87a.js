"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[4825],{2756:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(5893),t=r(1151);const i={title:"Hangar Docker \u955c\u50cf"},o=void 0,c={id:"docker-image",title:"Hangar Docker \u955c\u50cf",description:"Hangar \u7684 Docker \u955c\u50cf\u652f\u6301 amd64 \u548c arm64 \u67b6\u6784\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/97-docker-image.md",sourceDirName:".",slug:"/docker-image",permalink:"/zh/docs/v1.7/docker-image",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/97-docker-image.md",tags:[],version:"v1.7",lastUpdatedAt:1701769518,formattedLastUpdatedAt:"2023\u5e7412\u67085\u65e5",sidebarPosition:97,frontMatter:{title:"Hangar Docker \u955c\u50cf"},sidebar:"docs",previous:{title:"RKE2 \u79bb\u7ebf\u5b89\u88c5",permalink:"/zh/docs/v1.7/bestpractice/rke2"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/v1.7/questions"}},d={},s=[{value:"\u5c06 Hangar \u96c6\u6210\u81f3 CI",id:"\u5c06-hangar-\u96c6\u6210\u81f3-ci",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Hangar \u7684 Docker \u955c\u50cf\u652f\u6301 ",(0,a.jsx)(n.code,{children:"amd64"})," \u548c ",(0,a.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u81ea Hangar ",(0,a.jsx)(n.code,{children:"v1.7.0"})," \u8d77\uff0cHangar Docker \u955c\u50cf\u7684 Entrypoint \u6539\u4e3a ",(0,a.jsx)(n.code,{children:"bash"}),"\uff0c\u800c\u975e ",(0,a.jsx)(n.code,{children:"hangar"})," \u53ef\u6267\u884c\u6587\u4ef6\u3002"]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker pull cnrancher/hangar:${VERSION}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd0\u884c Hangar \u547d\u4ee4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run cnrancher/hangar:${VERSION} hangar --help\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5c06\u672c\u5730\u6587\u4ef6\u5939\u6620\u5c04\u5230\u5bb9\u5668\u955c\u50cf\u4e2d\uff0c\u4e4b\u540e\u5728\u5bb9\u5668\u955c\u50cf\u4e2d\u6267\u884c ",(0,a.jsx)(n.code,{children:"mirror/save/load/sync"})," \u7b49\u547d\u4ee4\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run -v $(pwd):/hangar -it cnrancher/hangar:${VERSION}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5c06-hangar-\u96c6\u6210\u81f3-ci",children:"\u5c06 Hangar \u96c6\u6210\u81f3 CI"}),"\n",(0,a.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5c06 ",(0,a.jsx)(n.code,{children:"cnrancher/hangar"})," Docker \u955c\u50cf\u4f5c\u4e3a\u57fa\u7840\u955c\u50cf\u4f7f\u7528\u5728 CI \u4e2d\uff0c\u4ee5\u4e0b\u662f\u4e00\u4efd\u6837\u4f8b\u811a\u672c\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ndocker run -v $(pwd):/hangar cnrancher/hangar:${VERSION} mirror \\\n    --file="/hangar/list.txt" \\\n    --source="docker.io" \\\n    --destination="[DESTINATION_REGISTRY_URL]" \\\n    --jobs=8 \\\n    --failed="/hangar/mirror-failed.txt"\n\n# Check mirror-failed.txt\nif [[ -e "mirror-failed.txt" ]]; then\n    echo "There are some images failed to copy:"\n    cat mirror-failed.txt\n    exit 1\nfi\n\n# Validate the mirrored images (optional)\ndocker run -v $(pwd):/hangar cnrancher/hangar:${VERSION} mirror validate \\\n    --file="/hangar/list.txt" \\\n    --source="docker.io" \\\n    --destination="[DESTINATION_REGISTRY_URL]" \\\n    --jobs=8 \\\n    --failed="/hangar/mirror-validate-failed.txt"\n\n# Check mirror-validate-failed.txt\nif [[ -e "mirror-validate-failed.txt" ]]; then\n    echo "There are some images failed to validate after mirror:"\n    cat mirror-validate-failed.txt\n    exit 1\nfi\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var a=r(7294);const t={},i=a.createContext(t);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);