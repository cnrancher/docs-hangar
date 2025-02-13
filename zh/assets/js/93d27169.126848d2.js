"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2458],{3306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"advanced/inspect","title":"\u83b7\u53d6\u955c\u50cf\u7684 Manifest","description":"hangar inspect \u547d\u4ee4\u53ef\u83b7\u53d6\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684 Manifest\uff08\u6b64\u547d\u4ee4\u4e0e skopeo inspect \u529f\u80fd\u7c7b\u4f3c\uff09\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/58-advanced/03-inspect.md","sourceDirName":"58-advanced","slug":"/advanced/inspect","permalink":"/zh/docs/v1.8/advanced/inspect","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/58-advanced/03-inspect.md","tags":[],"version":"v1.8","lastUpdatedAt":1739438500000,"sidebarPosition":3,"frontMatter":{"title":"\u83b7\u53d6\u955c\u50cf\u7684 Manifest"},"sidebar":"docs","previous":{"title":"Validate \u5b50\u547d\u4ee4","permalink":"/zh/docs/v1.8/advanced/validate"},"next":{"title":"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f","permalink":"/zh/docs/v1.8/advanced/convert-list"}}');var a=t(4848),i=t(8453);const c={title:"\u83b7\u53d6\u955c\u50cf\u7684 Manifest"},r=void 0,o={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"hangar inspect"})," \u547d\u4ee4\u53ef\u83b7\u53d6\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684 Manifest\uff08\u6b64\u547d\u4ee4\u4e0e ",(0,a.jsx)(n.a,{href:"https://github.com/containers/skopeo/blob/main/docs/skopeo-inspect.1.md",children:"skopeo inspect"})," \u529f\u80fd\u7c7b\u4f3c\uff09\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"--raw"})," \u53c2\u6570\u83b7\u53d6 DockerHub \u7684 ",(0,a.jsx)(n.code,{children:"nginx"})," \u5bb9\u5668\u955c\u50cf\u7684\u539f\u59cb Manifest \u6587\u4ef6\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hangar inspect --raw docker://nginx:latest\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"--config"})," \u53c2\u6570\u67e5\u770b DockerHub \u4ed3\u5e93\u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"nginx"})," \u5bb9\u5668\u955c\u50cf\u7684 Config \u539f\u59cb\u6587\u4ef6\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hangar inspect --config docker://nginx:latest\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="hangar inspect --help"',children:"Inspect provides basic functions of 'skopeo inspect' to inspect image manifest\n\nUsage:\n  hangar inspect IMAGR_REFERENCE [flags]\n\nExamples:\n# Inspect image manifest:\nhangar inspect [image-reference]\n\n# Inspect RAW docker image maniefest:\nhangar inspect docker://docker.io/cnrancher/hangar:latest --raw\n\nFlags:\n      --config                    output raw configuration\n  -h, --help                      help for inspect\n      --override-arch string      use ARCH instead of the architecture of the machine for choosing images\n      --override-os string        use OS instead of the running OS for choosing images\n      --override-variant string   use VARIANT instead of the running variant for choosing images\n      --raw                       output raw manifest\n      --tls-verify                require HTTPS and verify certificates (default true)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);