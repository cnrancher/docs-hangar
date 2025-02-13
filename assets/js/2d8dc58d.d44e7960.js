"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9741],{8995:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"archive/merge","title":"Merge archive files","description":"The hangar archive merge command is used for merging archive files into a new archive file.","source":"@site/versioned_docs/version-v1.9/20-archive/03-merge.md","sourceDirName":"20-archive","slug":"/archive/merge","permalink":"/docs/v1.9/archive/merge","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.9/20-archive/03-merge.md","tags":[],"version":"v1.9","lastUpdatedAt":1739438500000,"sidebarPosition":3,"frontMatter":{"title":"Merge archive files"},"sidebar":"docs","previous":{"title":"List images in the archive file","permalink":"/docs/v1.9/archive/ls"},"next":{"title":"Export images from archive files","permalink":"/docs/v1.9/archive/export"}}');var a=r(4848),t=r(8453);const s={title:"Merge archive files"},c=void 0,o={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"hangar archive merge"})," command is used for merging archive files into a new archive file."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Supported from Hangar v1.7.1."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsxs)(n.p,{children:["Use following command to merge archive files created by ",(0,a.jsx)(n.a,{href:"/docs/v1.9/save/save",children:"save"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar archive merge \\\n    --file="ARCHIVE_FILE_1.zip" \\\n    --file="ARCHIVE_FILE_2.zip" \\\n    --output="MERGE_OUTPUT.zip"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",metastring:'title="hangar archive merge --help"',children:"Merge multiple hangar archive files into one new archive file\n\nUsage:\n  hangar archive merge [flags]\n\nExamples:\n\n# Merge multiple archive files\nhangar archive merge \\\n\t--file ARCHIVE_1.zip \\\n\t--file ARCHIVE_2.zip \\\n\t--output MERGE_OUTPUT.zip\n\nFlags:\n  -y, --auto-yes        answer yes automatically (used in shell script)\n  -f, --file strings    archive file path\n  -h, --help            help for merge\n  -o, --output string   output archive file\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var i=r(6540);const a={},t=i.createContext(a);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);