"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[8857],{3909:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=r(5893),i=r(1151);const c={title:"Hangar Docker \u955c\u50cf"},t=void 0,a={id:"docker-images",title:"Hangar Docker \u955c\u50cf",description:"Docker \u955c\u50cf\u652f\u6301 amd64 \u548c arm64 \u67b6\u6784\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/97-docker-images.md",sourceDirName:".",slug:"/docker-images",permalink:"/zh/docs/v1.6/docker-images",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/97-docker-images.md",tags:[],version:"v1.6",lastUpdatedAt:1701769518,formattedLastUpdatedAt:"2023\u5e7412\u67085\u65e5",sidebarPosition:97,frontMatter:{title:"Hangar Docker \u955c\u50cf"},sidebar:"docs",previous:{title:"\u81ea\u52a8\u5316\u6d4b\u8bd5",permalink:"/zh/docs/v1.6/dev/test"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/v1.6/questions"}},o={},d=[{value:"\u5728 CI \u4e2d\u8fd0\u884c Mirror",id:"\u5728-ci-\u4e2d\u8fd0\u884c-mirror",level:2}];function l(e){const n={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Docker \u955c\u50cf\u652f\u6301 ",(0,s.jsx)(n.code,{children:"amd64"})," \u548c ",(0,s.jsx)(n.code,{children:"arm64"})," \u67b6\u6784\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# \u83b7\u53d6\u955c\u50cf\ndocker pull cnrancher/hangar:${VERSION}\n\n# \u83b7\u53d6\u5e2e\u52a9\u4fe1\u606f\n## \u9ed8\u8ba4\u60c5\u51b5\u4e0b entrypoint \u4e3a hangar \u53ef\u6267\u884c\u6587\u4ef6\ndocker run cnrancher/hangar:${VERSION} --help\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbe\u5b9a ",(0,s.jsx)(n.code,{children:"entrypoint"})," \u4e3a ",(0,s.jsx)(n.code,{children:"bash"}),", \u5c06\u672c\u5730\u76ee\u5f55\u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\uff0c\u53ef\u5728\u5bb9\u5668\u5185\u6267\u884c Mirror / Load / Save\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ docker run --entrypoint bash -v $(pwd):/images -it cnrancher/hangar:${VERSION}\na455e1202691:/images # hangar -h\nUsage:\thangar COMMAND [OPTIONS]\n......\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5728-ci-\u4e2d\u8fd0\u884c-mirror",children:"\u5728 CI \u4e2d\u8fd0\u884c Mirror"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 CI Pipeline \u4e2d\u53ef\u81ea\u52a8\u8fd0\u884c Mirror \u547d\u4ee4\uff0c\u53ef\u901a\u8fc7\u8bbe\u5b9a\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6307\u5b9a\u6e90\u955c\u50cf Registry \u548c\u76ee\u6807 Registry \u4ee5\u53ca\u7528\u6237\u540d\u5bc6\u7801\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SOURCE_USERNAME"}),": \u6e90 Registry \u7528\u6237\u540d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SOURCE_PASSWORD"}),": \u6e90 Registry \u5bc6\u7801"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SOURCE_REGISTRY"}),": \u6e90 Registry \u5730\u5740"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEST_USERNAME"}),": \u76ee\u6807 Registry \u7528\u6237\u540d"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEST_PASSWORD"}),": \u76ee\u6807 Registry \u5bc6\u7801"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEST_REGISTRY"}),": \u76ee\u6807 Registry \u5730\u5740"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ndocker run -v $(pwd):/images \\\n    -e SOURCE_REGISTRY="" \\\n    -e SOURCE_USERNAME="" \\\n    -e SOURCE_PASSWORD="" \\\n    -e DEST_REGISTRY="" \\\n    -e DEST_USERNAME="" \\\n    -e DEST_PASSWORD="" \\\n    cnrancher/hangar:${VERSION} mirror \\\n    -f /images/list.txt \\\n    -o /images/mirror-failed.txt\n\n# check mirror-failed.txt\ncat mirror-failed.txt\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>t});var s=r(7294);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);