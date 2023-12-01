"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[373],{990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(5893),i=t(1151);const s={title:"Inspect the image manifest"},c=void 0,r={id:"advanced-usage/inspect",title:"Inspect the image manifest",description:"hangar inspect command allows to inspect the container image manifest (similar to skopeo inspect).",source:"@site/docs/14-advanced-usage/03-inspect.md",sourceDirName:"14-advanced-usage",slug:"/advanced-usage/inspect",permalink:"/docs/next/advanced-usage/inspect",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/14-advanced-usage/03-inspect.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Inspect the image manifest"},sidebar:"tutorialSidebar",previous:{title:"List images in the archive file",permalink:"/docs/next/advanced-usage/archive-ls"},next:{title:"Convert image list format",permalink:"/docs/next/advanced-usage/convert-list"}},o={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"hangar inspect"})," command allows to inspect the container image manifest (similar to ",(0,a.jsx)(n.a,{href:"https://github.com/containers/skopeo/blob/main/docs/skopeo-inspect.1.md",children:"skopeo inspect"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"--raw"})," option to view the container image RAW manifest index of ",(0,a.jsx)(n.code,{children:"nginx"})," image on docker hub:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hangar inspect --raw docker://nginx:latest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"--config"})," option to view the container image config manifest of ",(0,a.jsx)(n.code,{children:"nginx"})," image on docker hub:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hangar inspect --config docker://nginx:latest\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="hangar inspect --help"',children:"Inspect provides basic functions of 'skopeo inspect' to inspect image manifest\n\nUsage:\n  hangar inspect IMAGR_REFERENCE [flags]\n\nExamples:\n# Inspect image manifest:\nhangar inspect [image-reference]\n\n# Inspect RAW docker image maniefest:\nhangar inspect docker://docker.io/cnrancher/hangar:latest --raw\n\nFlags:\n      --config                    output raw configuration\n  -h, --help                      help for inspect\n      --override-arch string      use ARCH instead of the architecture of the machine for choosing images\n      --override-os string        use OS instead of the running OS for choosing images\n      --override-variant string   use VARIANT instead of the running variant for choosing images\n      --raw                       output raw manifest\n      --tls-verify                require HTTPS and verify certificates (default true)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var a=t(7294);const i={},s=a.createContext(i);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);