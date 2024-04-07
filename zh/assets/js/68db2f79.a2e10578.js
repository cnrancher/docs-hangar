"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2896],{4841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(5893),i=t(1151);const s={title:"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f"},l=void 0,o={id:"advanced/convert-list",title:"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f",description:"hangar convert-list \u547d\u4ee4\u652f\u6301\u5c06\u955c\u50cf\u5217\u8868\u4ece Default \u683c\u5f0f\u8f6c\u6362\u4e3a Mirror \u683c\u5f0f\uff08\u53c2\u8003 \u955c\u50cf\u5217\u8868\u683c\u5f0f\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/18-advanced/04-convert-list.md",sourceDirName:"18-advanced",slug:"/advanced/convert-list",permalink:"/zh/docs/v1.7/advanced/convert-list",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/18-advanced/04-convert-list.md",tags:[],version:"v1.7",lastUpdatedAt:1712484060,formattedLastUpdatedAt:"2024\u5e744\u67087\u65e5",sidebarPosition:4,frontMatter:{title:"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f"},sidebar:"docs",previous:{title:"\u83b7\u53d6\u955c\u50cf\u7684 Manifest",permalink:"/zh/docs/v1.7/advanced/inspect"},next:{title:"\u547d\u4ee4\u884c\u8865\u5168",permalink:"/zh/docs/v1.7/advanced/completion"}},a={},c=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hangar convert-list"})," \u547d\u4ee4\u652f\u6301\u5c06\u955c\u50cf\u5217\u8868\u4ece ",(0,r.jsx)(n.code,{children:"Default"})," \u683c\u5f0f\u8f6c\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"Mirror"})," \u683c\u5f0f\uff08\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs/v1.7/mirror/image-list-format",children:"\u955c\u50cf\u5217\u8868\u683c\u5f0f"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"mirror"})," \u547d\u4ee4\u76ee\u524d\u5df2\u652f\u6301 ",(0,r.jsx)(n.code,{children:"Default"})," \u548c ",(0,r.jsx)(n.code,{children:"Mirror"})," \u4e24\u79cd\u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"mirror"})," \u547d\u4ee4\u62f7\u8d1d ",(0,r.jsx)(n.code,{children:"Default"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u955c\u50cf\u5217\u8868\u4ece ",(0,r.jsx)(n.code,{children:"Default"})," \u683c\u5f0f\u8f6c\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"Mirror"})," \u683c\u5f0f\uff0c\u5e76\u8bbe\u5b9a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93 Registry URL \u4e3a ",(0,r.jsx)(n.code,{children:"registry.example.io"}),"\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u51c6\u5907\u4e00\u4efd\u6837\u4f8b ",(0,r.jsx)(n.code,{children:"Default"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"docker.io/library/mysql:8\ndocker.io/library/nginx:latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06 ",(0,r.jsx)(n.code,{children:"Default"})," \u683c\u5f0f\u7684\u955c\u50cf\u5217\u8868\u8f6c\u6362\u4e3a ",(0,r.jsx)(n.code,{children:"Mirror"})," \u683c\u5f0f\uff0c\u5e76\u8bbe\u5b9a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7684 Registry URL \u4e3a ",(0,r.jsx)(n.code,{children:"registry.example.io"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'hangar convert-list \\\n    --input="example_image_list.txt" \\\n    --output="example_mirror_list.txt" \\\n    --source=docker.io \\\n    --destination=registry.example.io\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f6c\u6362\u683c\u5f0f\u540e\u7684\u955c\u50cf\u5217\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="example_mirror_list.txt"',children:"docker.io/library/mysql registry.example.io/library/mysql 8\ndocker.io/library/nginx registry.example.io/library/nginx latest\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:'Usage:\n  hangar convert-list [flags]\n\nExamples:\n  hangar convert-list -i rancher-images.txt -o CONVERTED_MIRROR_LIST.txt\n\nFlags:\n  -d, --destination string   specify the destination registry\n  -h, --help                 help for convert-list\n  -i, --input string         input image list (required)\n  -o, --output string        output image list (default "[INPUT_FILE].converted")\n  -s, --source string        specify the source registry\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(7294);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);