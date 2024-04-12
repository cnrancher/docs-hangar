"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2991],{6014:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=a(5893),s=a(1151);const i={title:"\u83b7\u53d6\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f"},t=void 0,c={id:"archive/ls",title:"\u83b7\u53d6\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f",description:"\u53ef\u4f7f\u7528 hangar archive ls \u547d\u4ee4\u67e5\u770b\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/20-archive/02-ls.md",sourceDirName:"20-archive",slug:"/archive/ls",permalink:"/zh/docs/v1.8/archive/ls",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/20-archive/02-ls.md",tags:[],version:"v1.8",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"2024\u5e744\u670812\u65e5",sidebarPosition:2,frontMatter:{title:"\u83b7\u53d6\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f"},sidebar:"docs",previous:{title:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",permalink:"/zh/docs/v1.8/archive/specification"},next:{title:"\u5408\u5e76\u955c\u50cf\u5305",permalink:"/zh/docs/v1.8/archive/merge"}},l={},o=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u53ef\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"hangar archive ls"})," \u547d\u4ee4\u67e5\u770b\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b ",(0,r.jsx)(n.a,{href:"/docs/v1.8/save/save#%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B",children:"save"})," \u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u5305\u542b\u7684\u955c\u50cf\u4fe1\u606f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar archive ls --file="save_example.zip"\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u7684\u4fe1\u606f\u5185\u5bb9\u6837\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="hangar archive ls -f save_example.zip"',children:"[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST\n[15:58:34] [INFO] Index version: v1.2.0\n[15:58:34] [INFO] Images:\n   1 | docker.io/cnrancher/hangar:v1.8.0 | arm64,amd64 | linux\n   2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="hangar archive ls --help"',children:"Show images (index) in Hangar archive file\n\nUsage:\n  hangar archive ls [flags]\n\nExamples:\n\n# Show images in archive file:\nhangar archive ls -f SAVED_ARCHIVE.zip\n\nFlags:\n  -f, --file string   Path to the Hangar archive file (.zip)\n  -h, --help          help for ls\n      --json          Output in json format\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var r=a(7294);const s={},i=r.createContext(s);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);