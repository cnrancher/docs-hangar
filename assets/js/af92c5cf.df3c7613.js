"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2740],{7746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"advanced/convert-list","title":"Convert image list format","description":"The hangar convert-list command allows to convert image list format from default format to the mirror format (see image list format specification).","source":"@site/versioned_docs/version-v1.9/58-advanced/04-convert-list.md","sourceDirName":"58-advanced","slug":"/advanced/convert-list","permalink":"/docs/v1.9/advanced/convert-list","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.9/58-advanced/04-convert-list.md","tags":[],"version":"v1.9","lastUpdatedAt":1739438500000,"sidebarPosition":4,"frontMatter":{"title":"Convert image list format"},"sidebar":"docs","previous":{"title":"Inspect the image manifest","permalink":"/docs/v1.9/advanced/inspect"},"next":{"title":"Shell Completion","permalink":"/docs/v1.9/advanced/completion"}}');var i=n(4848),s=n(8453);const o={title:"Convert image list format"},a=void 0,l={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usages",id:"usages",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"hangar convert-list"})," command allows to convert image list format from ",(0,i.jsx)(t.code,{children:"default"})," format to the ",(0,i.jsx)(t.code,{children:"mirror"})," format (see ",(0,i.jsx)(t.a,{href:"/docs/v1.9/mirror/image-list-format",children:"image list format specification"}),")."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"mirror"})," command supports both ",(0,i.jsx)(t.code,{children:"default"})," and ",(0,i.jsx)(t.code,{children:"mirror"})," format image list files. You can use the ",(0,i.jsx)(t.code,{children:"mirror"})," command to copy container images with the ",(0,i.jsx)(t.code,{children:"default"})," format image list file directly."]})}),"\n",(0,i.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(t.p,{children:["Convert the list from ",(0,i.jsx)(t.code,{children:"default"})," format to ",(0,i.jsx)(t.code,{children:"mirror"})," format, and set the destination registry to example ",(0,i.jsx)(t.code,{children:"registry.example.io"}),":"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Prepare an example image list in ",(0,i.jsx)(t.code,{children:"default"})," format:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"docker.io/library/mysql:8\ndocker.io/library/nginx:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Use following command to convert the image list from ",(0,i.jsx)(t.code,{children:"default"})," format to ",(0,i.jsx)(t.code,{children:"mirror"})," format and override the destination registry server to ",(0,i.jsx)(t.code,{children:"registry.example.io"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'hangar convert-list \\\n    --input="example_image_list.txt" \\\n    --output="example_mirror_list.txt" \\\n    --source=docker.io \\\n    --destination=registry.example.io\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"The converted image list is like:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",metastring:'title="example_mirror_list.txt"',children:"docker.io/library/mysql registry.example.io/library/mysql 8\ndocker.io/library/nginx registry.example.io/library/nginx latest\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"usages",children:"Usages"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-txt",children:'Usage:\n  hangar convert-list [flags]\n\nExamples:\n  hangar convert-list -i rancher-images.txt -o CONVERTED_MIRROR_LIST.txt\n\nFlags:\n  -d, --destination string   specify the destination registry\n  -h, --help                 help for convert-list\n  -i, --input string         input image list (required)\n  -o, --output string        output image list (default "[INPUT_FILE].converted")\n  -s, --source string        specify the source registry\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n'})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);