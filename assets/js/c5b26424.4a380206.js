"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2251],{3309:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(5893),n=t(1151);const a={title:"Export images from archive files"},s=void 0,o={id:"archive/export",title:"Export images from archive files",description:"The hangar archive export command is used for export images from archive file into a new archive file.",source:"@site/versioned_docs/version-v1.7/14-archive/04-export.md",sourceDirName:"14-archive",slug:"/archive/export",permalink:"/docs/v1.7/archive/export",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/14-archive/04-export.md",tags:[],version:"v1.7",lastUpdatedAt:1710300126,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:4,frontMatter:{title:"Export images from archive files"},sidebar:"docs",previous:{title:"Merge archive files",permalink:"/docs/v1.7/archive/merge"},next:{title:"Generate Rancher image list",permalink:"/docs/v1.7/generate-list/"}},c={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"hangar archive export"})," command is used for export images from archive file into a new archive file."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"Supported from Hangar v1.7.1."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(r.p,{children:["Use following command to export images from the archive file created by ",(0,i.jsx)(r.a,{href:"/docs/v1.7/save/save",children:"save"})," command:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar archive export \\\n    --file="IMAGE_LIST.txt" \\\n    --source="EXAMPLE_ARCHIVE.zip" \\\n    --destination="EXPORT_OUTPUT.zip"\n'})}),"\n",(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-text",metastring:'title="hangar archive export --help"',children:'Export some images from hangar archive file into a new archive file by image list file.\n\nUsage:\n  hangar archive export [flags]\n\nExamples:\n\n# Export images from archive file\nhangar archive export \\\n\t--file IMAGE_LIST.txt \\\n\t--source SAVED_ARCHIVE.zip \\\n\t--destination EXPORT_OUTPUT.zip\n\nFlags:\n  -y, --auto-yes                 answer yes automatically (used in shell script)\n  -d, --destination string       destination archive file\n      --failed string            export failed image list file name (default "export-failed.txt")\n  -f, --file string              image list file (required)\n  -h, --help                     help for export\n  -s, --source string            source archive file\n      --source-registry string   override the source registry of image list file\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\n\n'})})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var i=t(7294);const n={},a=i.createContext(n);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);