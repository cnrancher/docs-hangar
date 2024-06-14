"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5007],{581:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>g,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(5893),r=n(1151);const i={title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9"},a=void 0,o={id:"sign/generate-sigstore-key",title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9",description:"\u4f7f\u7528 hangar generate-sigstore-key \u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\uff0c\u4f9b sign \u547d\u4ee4\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/14-sign/01-generate-sigstore-key.md",sourceDirName:"14-sign",slug:"/sign/generate-sigstore-key",permalink:"/zh/docs/v1.8/sign/generate-sigstore-key",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/14-sign/01-generate-sigstore-key.md",tags:[],version:"v1.8",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:1,frontMatter:{title:"\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9"},sidebar:"docs",previous:{title:"Sign",permalink:"/zh/docs/v1.8/sign/"},next:{title:"\u5bb9\u5668\u955c\u50cf\u52a0\u7b7e",permalink:"/zh/docs/v1.8/sign/sign"}},g={},c=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(s.code,{children:"hangar generate-sigstore-key"})," \u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\uff0c\u4f9b ",(0,t.jsx)(s.a,{href:"/docs/v1.8/sign/sign",children:"sign"})," \u547d\u4ee4\u4f7f\u7528\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsx)(s.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u751f\u6210 Sigstore \u5bc6\u94a5\u5bf9\u3002"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar generate-sigstore-key --prefix="sigstore"\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u751f\u6210\u7684\u5bc6\u94a5\u5bf9\u6587\u4ef6\u4e3a ",(0,t.jsx)(s.code,{children:"sigstore.pub"})," \u548c ",(0,t.jsx)(s.code,{children:"sigstore.key"}),"\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-txt",metastring:'title="hangar generate-sigstore-key --help"',children:"Generate a sigstore key-pair for signing images\n\nUsage:\n  hangar generate-sigstore-key -p NAME [flags]\n\nExamples:\nhangar generate-sigstore-key --prefix sigstore\n\nFlags:\n  -y, --auto-yes                 answer yes automatically (used in shell script)\n  -h, --help                     help for generate-sigstore-key\n      --passphrase-file string   read the passphrase for the private key from file\n  -p, --prefix string            prefix name for the generated sigstore '.pub' and '.key' files (default \"sigstore\")\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function l(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var t=n(7294);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);