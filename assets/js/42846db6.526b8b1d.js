"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9475],{5060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"advanced/inspect","title":"Inspect the image manifest","description":"hangar inspect command allows to inspect the container image manifest (similar to skopeo inspect).","source":"@site/versioned_docs/version-v1.8/58-advanced/03-inspect.md","sourceDirName":"58-advanced","slug":"/advanced/inspect","permalink":"/docs/v1.8/advanced/inspect","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/58-advanced/03-inspect.md","tags":[],"version":"v1.8","lastUpdatedAt":1739438500000,"sidebarPosition":3,"frontMatter":{"title":"Inspect the image manifest"},"sidebar":"docs","previous":{"title":"Validate commands","permalink":"/docs/v1.8/advanced/validate"},"next":{"title":"Convert image list format","permalink":"/docs/v1.8/advanced/convert-list"}}');var i=t(4848),s=t(8453);const c={title:"Inspect the image manifest"},o=void 0,r={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"hangar inspect"})," command allows to inspect the container image manifest (similar to ",(0,i.jsx)(n.a,{href:"https://github.com/containers/skopeo/blob/main/docs/skopeo-inspect.1.md",children:"skopeo inspect"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"--raw"})," option to view the container image RAW manifest index of ",(0,i.jsx)(n.code,{children:"nginx"})," image on docker hub:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar inspect --raw docker://nginx:latest\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"--config"})," option to view the container image config manifest of ",(0,i.jsx)(n.code,{children:"nginx"})," image on docker hub:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar inspect --config docker://nginx:latest\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="hangar inspect --help"',children:"Inspect provides basic functions of 'skopeo inspect' to inspect image manifest\n\nUsage:\n  hangar inspect IMAGR_REFERENCE [flags]\n\nExamples:\n# Inspect image manifest:\nhangar inspect [image-reference]\n\n# Inspect RAW docker image maniefest:\nhangar inspect docker://docker.io/cnrancher/hangar:latest --raw\n\nFlags:\n      --config                    output raw configuration\n  -h, --help                      help for inspect\n      --override-arch string      use ARCH instead of the architecture of the machine for choosing images\n      --override-os string        use OS instead of the running OS for choosing images\n      --override-variant string   use VARIANT instead of the running variant for choosing images\n      --raw                       output raw manifest\n      --tls-verify                require HTTPS and verify certificates (default true)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(6540);const i={},s=a.createContext(i);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);