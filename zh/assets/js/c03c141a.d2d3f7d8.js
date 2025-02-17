"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6537],{8453:(r,e,n)=>{n.d(e,{R:()=>t,x:()=>l});var o=n(6540);const i={},s=o.createContext(i);function t(r){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function l(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(i):r.components||i:t(r.components),o.createElement(s.Provider,{value:e},r.children)}},8908:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"mirror/image-list-format","title":"\u955c\u50cf\u5217\u8868\u683c\u5f0f","description":"hangar mirror \u547d\u4ee4\u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/10-mirror/03-image-list-format.md","sourceDirName":"10-mirror","slug":"/mirror/image-list-format","permalink":"/zh/docs/v1.8/mirror/image-list-format","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/10-mirror/03-image-list-format.md","tags":[],"version":"v1.8","lastUpdatedAt":1739771998000,"sidebarPosition":3,"frontMatter":{"title":"\u955c\u50cf\u5217\u8868\u683c\u5f0f"},"sidebar":"docs","previous":{"title":"Mirror Validate \u547d\u4ee4","permalink":"/zh/docs/v1.8/mirror/validate"},"next":{"title":"Save","permalink":"/zh/docs/v1.8/save/"}}');var i=n(4848),s=n(8453);const t={title:"\u955c\u50cf\u5217\u8868\u683c\u5f0f"},l=void 0,c={},a=[];function d(r){const e={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"hangar mirror"})," \u547d\u4ee4\u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u9ed8\u8ba4\uff08",(0,i.jsx)(e.code,{children:"Default"}),"\uff09\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff08\u6b64\u683c\u5f0f\u9002\u7528\u4e8e ",(0,i.jsx)(e.code,{children:"mirror/save/load/sync/sign/scan"})," \u547d\u4ee4\uff09\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",metastring:'title="\u9ed8\u8ba4\u955c\u50cf\u5217\u8868\u683c\u5f0f"',children:"# <REGISTRY>/<PROJECT>/<NAME>:<TAG>\n\ndocker.io/library/hello-world:latest\nhello-world:latest\ncnrancher/hangar:v1.8.0\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Mirror"})," \u683c\u5f0f\uff08\u4ec5\u9002\u7528\u4e8e ",(0,i.jsx)(e.code,{children:"mirror"})," \u547d\u4ee4\uff09\uff1a"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6bcf\u884c\u5305\u542b ",(0,i.jsx)(e.strong,{children:'"[\u6e90\u955c\u50cf] [\u76ee\u6807\u955c\u50cf] [TAG]"'}),"\uff0c\u4f7f\u7528\u7a7a\u683c ",(0,i.jsx)(e.code,{children:"' '"})," \u5206\u9694\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-txt",metastring:'title="Mirror \u683c\u5f0f"',children:"# <SOURCE> <DESTNATION> <TAG>\n\ndocker.io/hello-world private.io/library/mirrored-hello-world latest\nnginx                 example.io/library/mirrored-nginx       1.22\nmysql                 example.io/mysql/mirrored-mysql         8\nquay.io/skopeo/stable example.io/library/mirrored-skopeo      latest\n"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Mirror"})," \u683c\u5f0f\u9002\u7528\u4e8e\u9700\u8981\u91cd\u547d\u540d\u76ee\u6807\u955c\u50cf\u7684\u573a\u666f\uff0c\u9664\u6b64\u4e4b\u5916\u6b64\u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u955c\u50cf\u4ed3\u5e93\u4e4b\u95f4\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"/docs/v1.8/advanced/convert-list",children:"convert-list"})," \u547d\u4ee4\u5c06 ",(0,i.jsx)(e.code,{children:"Default"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u8f6c\u6362\u4e3a ",(0,i.jsx)(e.code,{children:"Mirror"})," \u683c\u5f0f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u955c\u50cf\u5217\u8868\u4e2d\u4ee5 ",(0,i.jsx)(e.code,{children:"//"})," \u6216 ",(0,i.jsx)(e.code,{children:"#"})," \u8d77\u59cb\u7684\u884c\u5c06\u88ab\u5ffd\u7565\u3002"]})]})}function m(r={}){const{wrapper:e}={...(0,s.R)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(d,{...r})}):d(r)}}}]);