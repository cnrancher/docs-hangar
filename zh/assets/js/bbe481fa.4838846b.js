"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1855],{3640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var r=t(5893),a=t(1151);const s={title:"generate-list \u547d\u4ee4"},c=void 0,h={id:"advanced/generate-list",title:"generate-list \u547d\u4ee4",description:"QuickStart",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced/06-generate-list.md",sourceDirName:"13-advanced",slug:"/advanced/generate-list",permalink:"/zh/docs/v1.6/advanced/generate-list",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/06-generate-list.md",tags:[],version:"v1.6",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",sidebarPosition:6,frontMatter:{title:"generate-list \u547d\u4ee4"},sidebar:"docs",previous:{title:"convert-list \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/convert-list"},next:{title:"\u5f00\u53d1\u8c03\u8bd5",permalink:"/zh/docs/v1.6/dev/"}},i={},d=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2},{value:"\u81ea\u5b9a\u4e49 KDM \u6587\u4ef6\u548c Chart \u4ed3\u5e93",id:"\u81ea\u5b9a\u4e49-kdm-\u6587\u4ef6\u548c-chart-\u4ed3\u5e93",level:3}];function l(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,r.jsx)(n.p,{children:"\u6839\u636e Rancher \u7248\u672c\u53f7\uff0c\u83b7\u53d6\u6700\u65b0\u7684 KDM \u6570\u636e\uff0c\u5e76\u81ea\u52a8\u514b\u9686 Chart \u4ed3\u5e93\u5230\u672c\u5730\uff0c\u751f\u6210\u955c\u50cf\u5217\u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'hangar generate-list --rancher="v2.7.0-ent"\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4ee5 ",(0,r.jsx)(n.code,{children:"-ent"})," \u7ed3\u5c3e\u7684 Rancher \u7248\u672c\u53f7\u8868\u793a Rancher Prime Manager GC \u7248\u672c\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5de5\u5177\u751f\u6210\u7684\u955c\u50cf\u5217\u8868\u4ec5\u5305\u542b KDM \u548c Chart \u4ed3\u5e93\u4e2d\u4e0e Rancher \u7248\u672c\u76f8\u5339\u914d\u7684\u955c\u50cf\u3002\u56e0\u672c\u5de5\u5177\u7b5b\u9009\u955c\u50cf\u7684\u903b\u8f91\u4e0e\nRancher \u751f\u6210\u7684 ",(0,r.jsx)(n.code,{children:"rancher-images.txt"})," \u6709\u5dee\u5f02\uff0c\u4f1a\u4e0e\u6784\u5efa\u7269\u4e2d\u4e0b\u8f7d\u7684\u955c\u50cf\u5217\u8868\u5b58\u5728\u51fa\u5165\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# \u4f7f\u7528 --rancher \u53c2\u6570\uff0c\u6307\u5b9a Rancher \u7248\u672c\u53f7\uff0c\u4ee5 `-ent` \u7ed3\u5c3e\u4e3a Rancher Prime Manager GC \u7248\u672c\n# \u82e5\u53ea\u6307\u5b9a Rancher \u7248\u672c\u53f7\uff0c\u8be5\u5de5\u5177\u5c06\u81ea\u52a8\u6839\u636e Rancher \u7248\u672c\u53f7\u4e0b\u8f7d\u5bf9\u5e94\u7684 KDM \u6570\u636e\uff0c\n# \u5e76\u514b\u9686 charts \u4ed3\u5e93\u5230\u672c\u5730\uff0c\u4ece\u4e2d\u751f\u6210\u955c\u50cf\u5217\u8868\u6587\u4ef6\nhangar generate-list --rancher="v2.7.0"\n\n# \u4f7f\u7528 --registry \u53c2\u6570\uff0c\u6307\u5b9a\u751f\u6210\u955c\u50cf\u7684 Registry \u5730\u5740\uff08\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff09\nhangar generate-list --rancher="v2.7.0" --registry="docker.io"\n\n# \u4f7f\u7528 -o, --output \u53c2\u6570\uff0c\u6307\u5b9a\u8f93\u51fa\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u540d\u79f0\uff08\u9ed8\u8ba4\u4e3a generated-list.txt\uff09\nhangar generate-list --rancher="v2.7.0" -o ./generated-list.txt\n\n# \u4f7f\u7528 --output-linux \u53c2\u6570\uff0c\u6307\u5b9a\u8f93\u51fa\u7684 Linux \u955c\u50cf\u5217\u8868\u6587\u4ef6\u540d\u79f0\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u672c\u5de5\u5177\u4e0d\u4f1a\u5355\u72ec\u751f\u6210 Linux \u955c\u50cf\u5217\u8868\u6587\u4ef6\nhangar generate-list --rancher="v2.7.0" --output-linux ./generated-list-linux.txt\n\n# \u4f7f\u7528 --output-source \u53c2\u6570\uff0c\u6307\u5b9a\u8f93\u51fa\u7684\u5305\u542b\u955c\u50cf\u6765\u6e90\u7684\u5217\u8868\u6587\u4ef6\u540d\u79f0\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u672c\u5de5\u5177\u4e0d\u4f1a\u751f\u6210\u5305\u542b\u955c\u50cf\u6765\u6e90\u7684\u5217\u8868\u6587\u4ef6\nhangar generate-list --rancher="v2.7.0" --output-source ./generated-list-source.txt\n\n# \u4f7f\u7528 --output-windows \u53c2\u6570\uff0c\u6307\u5b9a\u8f93\u51fa\u7684 Windows \u955c\u50cf\u5217\u8868\u6587\u4ef6\u540d\u79f0\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u672c\u5de5\u5177\u4e0d\u4f1a\u5355\u72ec\u751f\u6210 Windows \u955c\u50cf\u5217\u8868\u6587\u4ef6\nhangar generate-list --rancher="v2.7.0" --output-windows ./generated-list-windows.txt\n\n# \u4f7f\u7528 --dev \u53c2\u6570\uff0c\u5728\u6ca1\u6709\u4f7f\u7528 --chart, --system-chart, --kdm \u53c2\u6570\u65f6\uff0c\n# \u81ea\u52a8\u4ece KDM \u548c chart \u7684 dev \u5206\u652f\u751f\u6210\u955c\u50cf\u5217\u8868\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6b64\u5de5\u5177\u4f1a\u4ece release \u5206\u652f\u751f\u6210\u955c\u50cf\u5217\u8868\nhangar generate-list --rancher="v2.7.0" --dev\n\n# \u4f7f\u7528 --chart \u53c2\u6570\uff0c\u6307\u5b9a chart \u4ed3\u5e93\u7684\u8def\u5f84\nhangar generate-list --rancher="v2.7.0" --chart ./charts\n\n# \u4f7f\u7528 --system-chart \u53c2\u6570\uff0c\u6307\u5b9a system-chart \u4ed3\u5e93\u7684\u8def\u5f84\nhangar generate-list --rancher="v2.7.0" --system-chart ./system-chart\n\n# \u4f7f\u7528 --kdm \u53c2\u6570\uff0c\u6307\u5b9a KDM Data \u6587\u4ef6\u7684\u4f4d\u7f6e\u6216 URL \u94fe\u63a5\nhangar generate-list --rancher="v2.7.0" --kdm ./data.json\nhangar generate-list --rancher="v2.7.0" --kdm https://releases.rancher.com/kontainer-driver-metadata/release-v2.7/data.json\n\n# \u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 URL \u94fe\u63a5\u7684 TLS \u9a8c\u8bc1\nhangar generate-list --rancher="v2.7.0" \\\n    --kdm "https://[insecure-https-url]/data.json" \\\n    --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar generate-list --rancher="v2.7.0" --debug\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49-kdm-\u6587\u4ef6\u548c-chart-\u4ed3\u5e93",children:"\u81ea\u5b9a\u4e49 KDM \u6587\u4ef6\u548c Chart \u4ed3\u5e93"}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u6b64\u5de5\u5177\u65f6\uff0c\u5982\u679c\u53ea\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"--rancher"})," \u547d\u4ee4\u884c\u53c2\u6570\uff0c\u5c06\u81ea\u52a8\u6839\u636e Rancher \u7248\u672c\u83b7\u53d6 KDM \u6570\u636e\u5e76\u514b\u9686 Chart \u4ed3\u5e93\u5230\u672c\u5730\u3002\u9664\u6b64\u4e4b\u5916\u53ef\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"--chart"}),"\u3001",(0,r.jsx)(n.code,{children:"--system-chart"}),"\u3001",(0,r.jsx)(n.code,{children:"--kdm"})," \u53c2\u6570\u81ea\u5b9a\u4e49\u751f\u6210\u955c\u50cf\u5217\u8868\u65f6\u8bfb\u53d6\u7684 KDM \u6570\u636e\u6587\u4ef6\u548c Chart \u4ed3\u5e93\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728\u6709\u591a\u4e2a chart \u548c system-chart \u4ed3\u5e93\u9700\u8981\u52a0\u8f7d\u65f6\uff0c\u53ef\u6307\u5b9a\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"--chart"})," \u548c ",(0,r.jsx)(n.code,{children:"--system-chart"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'# \u9996\u5148\u4e0b\u8f7d KDM data.json\uff0c\u514b\u9686 chart \u4ed3\u5e93\u5230\u672c\u5730\nhangar generate-list \\\n    --rancher="v2.7.0" \\\n    --kdm ./data.json \\\n    --chart ./charts-1 \\\n    --chart ./charts-2 \\\n    --system-chart ./system-charts-1 \\\n    --system-chart ./system-charts-2\n'})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>h,a:()=>c});var r=t(7294);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);