"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5724],{8147:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(4848),r=s(8453);const i={title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9"},a=void 0,o={id:"sign/generate-sigstore-key",title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9",description:"\u4f7f\u7528 hangar generate-sigstore-key \u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\uff0c\u4f9b sign \u547d\u4ee4\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/14-sign/01-generate-sigstore-key.md",sourceDirName:"14-sign",slug:"/sign/generate-sigstore-key",permalink:"/zh/docs/v1.8/sign/generate-sigstore-key",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/14-sign/01-generate-sigstore-key.md",tags:[],version:"v1.8",lastUpdatedAt:1726803035e3,sidebarPosition:1,frontMatter:{title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9"},sidebar:"docs",previous:{title:"Sign",permalink:"/zh/docs/v1.8/sign/"},next:{title:"\u5bb9\u5668\u955c\u50cf\u52a0\u7b7e",permalink:"/zh/docs/v1.8/sign/sign"}},g={},c=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"hangar generate-sigstore-key"})," \u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\uff0c\u4f9b ",(0,t.jsx)(n.a,{href:"/docs/v1.8/sign/sign",children:"sign"})," \u547d\u4ee4\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar generate-sigstore-key --prefix="sigstore"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\u6587\u4ef6\u4e3a ",(0,t.jsx)(n.code,{children:"sigstore.pub"})," \u548c ",(0,t.jsx)(n.code,{children:"sigstore.key"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="hangar generate-sigstore-key --help"',children:"Generate a sigstore key-pair for signing images\n\nUsage:\n  hangar generate-sigstore-key -p NAME [flags]\n\nExamples:\nhangar generate-sigstore-key --prefix sigstore\n\nFlags:\n  -y, --auto-yes                 answer yes automatically (used in shell script)\n  -h, --help                     help for generate-sigstore-key\n      --passphrase-file string   read the passphrase for the private key from file\n  -p, --prefix string            prefix name for the generated sigstore '.pub' and '.key' files (default \"sigstore\")\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);