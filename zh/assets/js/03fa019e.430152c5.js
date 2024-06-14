"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7837],{4417:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>i});var n=a(5893),c=a(1151);const r={title:"Compress \u547d\u4ee4"},d=void 0,t={id:"advanced/compress",title:"Compress \u547d\u4ee4",description:"Compress \u547d\u4ee4\u7528\u6765\u538b\u7f29 Save \u547d\u4ee4\u751f\u6210\u7684\u672a\u538b\u7f29\u7684 saved-image-cache \u7f13\u5b58\u6587\u4ef6\u5939\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced/03-compress.md",sourceDirName:"13-advanced",slug:"/advanced/compress",permalink:"/zh/docs/v1.6/advanced/compress",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/03-compress.md",tags:[],version:"v1.6",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:3,frontMatter:{title:"Compress \u547d\u4ee4"},sidebar:"docs",previous:{title:"Sync \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/sync"},next:{title:"Decompress \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/decompress"}},o={},i=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Compress \u547d\u4ee4\u7528\u6765\u538b\u7f29 Save \u547d\u4ee4\u751f\u6210\u7684\u672a\u538b\u7f29\u7684 ",(0,n.jsx)(s.code,{children:"saved-image-cache"})," \u7f13\u5b58\u6587\u4ef6\u5939\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:["Compress \u547d\u4ee4\u901a\u5e38\u4e0e Sync \u547d\u4ee4\u4e00\u8d77\u4f7f\u7528\uff0c\u53ef\u53c2\u8003 Sync \u6587\u6863\u7684 ",(0,n.jsx)(s.a,{href:"/docs/v1.6/advanced/sync#%E5%BC%80%E5%8F%91%E8%83%8C%E6%99%AF",children:"\u5f00\u53d1\u80cc\u666f"}),"\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,n.jsxs)(s.p,{children:["\u5c06 ",(0,n.jsx)(s.code,{children:"saved-image-cache"})," \u538b\u7f29\u4e3a ",(0,n.jsx)(s.code,{children:"tar.gz"})," \u683c\u5f0f\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"hangar compress -f ./saved-image-cache\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"--format"})," \u53c2\u6570\u6307\u5b9a\u538b\u7f29\u6587\u4ef6\u683c\u5f0f\uff08\u7528\u6cd5\u7b49\u540c\u4e8e ",(0,n.jsx)(s.a,{href:"/docs/v1.6/save/save",children:"Save"})," \u547d\u4ee4\u7684 ",(0,n.jsx)(s.code,{children:"--compress"}),"\uff09\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"hangar compress -f ./saved-image-cache --format=zstd\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:"--part"})," \u548c ",(0,n.jsx)(s.code,{children:"--part-size"})," \u53c2\u6570\u542f\u7528\u5206\u7247\u538b\u7f29\u529f\u80fd\uff08\u53c2\u6570\u7684\u7528\u6cd5\u7b49\u540c\u4e8e ",(0,n.jsx)(s.a,{href:"/docs/v1.6/save/save",children:"Save"})," \u547d\u4ee4\uff09"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"# \u5c06\u538b\u7f29\u6587\u4ef6\u4ee5 4G \u4e3a\u5355\u4f4d\u8fdb\u884c\u5206\u5272\nhangar compress -f ./saved-image-cache --part --part-size=4G\n"})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"# -f, --file \u6307\u5b9a\u5f85\u538b\u7f29\u7684\u6587\u4ef6\u5939\u76ee\u5f55\n## \u82e5\u6587\u4ef6\u5939\u540d\u79f0\u4e0d\u662f saved-image-cache, \u5de5\u5177\u4f1a\u5148\u4e3a\u6587\u4ef6\u5939\u91cd\u547d\u540d\u518d\u538b\u7f29\nhangar compress -f ./saved-image-cache\n\n# --format \u6307\u5b9a\u538b\u7f29\u683c\u5f0f\n# \u53ef\u9009: gzip, zstd\n# \u9ed8\u8ba4: gzip\nhangar compress -f ./saved-image-cache --format=zstd\n\n# --part \u542f\u7528\u5206\u7247\u538b\u7f29\uff08\u5c06\u538b\u7f29\u6587\u4ef6\u6309\u4e00\u5b9a\u5927\u5c0f\u8fdb\u884c\u5206\u5272\uff09\n# --part-size \u6307\u5b9a\u5206\u7247\u538b\u7f29\u7684\u5927\u5c0f\uff08\u9ed8\u8ba4\u4e3a 2G\uff09\nhangar compress -f ./saved-image-cache --part --part-size=4G\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar compress -f ./saved-image-cache --debug\n\n# \u4f7f\u7528 -d, --destination \u547d\u4ee4\u6307\u5b9a\u8f93\u51fa\u7684\u538b\u7f29\u6587\u4ef6\u7684\u540d\u79f0\n# \u9ed8\u8ba4\u4e3a saved-images.[\u538b\u7f29\u683c\u5f0f\u540e\u7f00]\nhangar compress -f ./saved-image-cache -d compressed-images.tar.gz\n"})})]})}function p(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,a)=>{a.d(s,{Z:()=>t,a:()=>d});var n=a(7294);const c={},r=n.createContext(c);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);