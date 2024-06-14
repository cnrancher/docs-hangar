"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1665],{2794:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=n(5893),s=n(1151);const t={title:"Load Validate \u547d\u4ee4"},d=void 0,r={id:"load/validate",title:"Load Validate \u547d\u4ee4",description:"load-validate \u547d\u4ee4\u5728\u6267\u884c load \u540e\uff0c\u5bf9\u5df2\u5bfc\u5165\u7684\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\uff0c\u786e\u4fdd\u955c\u50cf\u5df2\u7ecf\u88ab\u52a0\u8f7d\u5230\u76ee\u6807 Registry\uff0c\u6821\u9a8c\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u4f1a\u4fdd\u5b58\u5728 load-validate-failed.txt \u6587\u4ef6\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/12-load/02-validate.md",sourceDirName:"12-load",slug:"/load/validate",permalink:"/zh/docs/v1.6/load/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/12-load/02-validate.md",tags:[],version:"v1.6",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:2,frontMatter:{title:"Load Validate \u547d\u4ee4"},sidebar:"docs",previous:{title:"Load \u547d\u4ee4",permalink:"/zh/docs/v1.6/load/load"},next:{title:"\u9ad8\u7ea7\u7528\u6cd5",permalink:"/zh/docs/v1.6/advanced/"}},o={},l=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"load-validate"})," \u547d\u4ee4\u5728\u6267\u884c ",(0,i.jsx)(a.code,{children:"load"})," \u540e\uff0c\u5bf9\u5df2\u5bfc\u5165\u7684\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\uff0c\u786e\u4fdd\u955c\u50cf\u5df2\u7ecf\u88ab\u52a0\u8f7d\u5230\u76ee\u6807 Registry\uff0c\u6821\u9a8c\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u4f1a\u4fdd\u5b58\u5728 ",(0,i.jsx)(a.code,{children:"load-validate-failed.txt"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,i.jsx)(a.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsx)(a.p,{children:"\u63d0\u4f9b Save \u547d\u4ee4\u751f\u6210\u7684\u6587\u4ef6\uff0c\u5e76\u6307\u660e\u76ee\u6807 Registry URL\u3002"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sh",children:"hangar load-validate -s ./saved-images.tar.gz -d private.registry.io\n"})}),"\n",(0,i.jsxs)(a.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u5728\u4f7f\u7528 Load \u547d\u4ee4\u52a0\u5728\u5bb9\u5668\u955c\u50cf\u540e\uff0c\u53ef\u4f7f\u7528 ",(0,i.jsx)(a.code,{children:"--compress=dir"})," \u548c ",(0,i.jsx)(a.code,{children:"-s ./saved-image-cache"})," \u6307\u5b9a\u8f93\u5165\u7684\u76ee\u5f55\u4e3a cache \u76ee\u5f55\uff0c\u8282\u7701\u91cd\u590d\u89e3\u538b\u7684\u65f6\u95f4\u3002"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sh",children:"hangar load-validate -s ./saved-image-cache -d private.registry.io --compress=dir\n"})}),"\n",(0,i.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(a.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-sh",children:"# \u4f7f\u7528 -s, --source \u53c2\u6570\uff0c\u8bbe\u5b9a Save \u4fdd\u5b58\u7684\u6587\u4ef6\u540d\u79f0\n# \u4f7f\u7528 -d, --destination \u53c2\u6570\uff0c\u8bbe\u5b9a\u76ee\u6807\u955c\u50cf registry\nhangar load-validate -s ./saved-images.tar.gz -d private.registry.io\n\n# \u4f7f\u7528 -j, --jobs \u53c2\u6570\uff0c\u8bbe\u5b9a Worker \u6570\u91cf\uff0c\u5e76\u53d1\u6821\u9a8c\u955c\u50cf\uff08\u652f\u6301 1~20 \u4e2a jobs\uff09\nhangar load-validate -s ./saved-images.tar.gz -d private.registry.io -j 10 # \u542f\u52a8 10 \u4e2a Worker\n\n# \u4f7f\u7528 --compress \u53c2\u6570\uff0c\u6307\u5b9a\u5bfc\u5165\u7684\u6587\u4ef6\u7684\u538b\u7f29\u7c7b\u578b\n# \u53ef\u9009\uff1agzip, zstd, dir\n# \u9ed8\u8ba4\u4e3a gzip \u683c\u5f0f\uff0c\u82e5\u4e3a dir \u683c\u5f0f\u5219\u8868\u793a\u4ece\u6587\u4ef6\u5939\u4e2d\u52a0\u8f7d\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\uff0c\u4e0d\u5bf9\u5176\u89e3\u538b\nhangar load-validate -s ./saved-image-cache -d private.registry.io -compress=dir\n\n# \u4f7f\u7528 --default-project \u53c2\u6570\u6307\u5b9a\u9ed8\u8ba4\u7684 project \u540d\u79f0\n# \u9ed8\u8ba4\u503c\u4e3a library\n# \u6b64\u53c2\u6570\u4f1a\u5c06 `docker.io/mysql:5.8` \u8fd9\u79cd\u955c\u50cf\u91cd\u547d\u540d\u4e3a `docker.io/library/mysql:5.8`\nhangar load-validate -s ./saved-image-cache -d private.registry.io --default-project=library\n\n# \u4f7f\u7528 -o, -output \u53c2\u6570\uff0c\u5c06\u6821\u9a8c\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u8f93\u51fa\u81f3\u6307\u5b9a\u6587\u4ef6\u4e2d\n# \u9ed8\u8ba4\u8f93\u51fa\u81f3 load-validate-failed.txt\nhangar load-validate -s ./saved-images.tar.gz -d private.registry.io -o failed.txt\n\n# \u82e5 Registry Server \u4e3a HTTP \u6216\u4f7f\u7528\u81ea\u7b7e\u540d TLS Certificate\uff0c\n# \u9700\u8981\u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 Registry \u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\nhangar load-validate -s ./saved-images.tar.gz --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar load-validate -s ./saved-images.tar.gz -d private.registry.io --debug\n"})}),"\n",(0,i.jsx)(a.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(a.p,{children:"\u4f7f\u7528\u6821\u9a8c\u529f\u80fd\u65f6\u53ef\u80fd\u9047\u5230\u7684\u62a5\u9519\u53ca\u539f\u56e0\uff1a"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["\u62a5\u9519\uff1a",(0,i.jsx)(a.code,{children:"Validate failed: destination manifest MIME type unknow: application/vnd.docker.distribution.manifest.v2+json"})]}),"\n",(0,i.jsxs)(a.p,{children:["\u5728\u76ee\u6807\u955c\u50cf\u7684 Manifest \u7684 MediaType \u4e0d\u662f ",(0,i.jsx)(a.code,{children:'"application/vnd.docker.distribution.manifest.list.v2+json"'})," \u65f6\u4f1a\u51fa\u73b0\u6b64\u62a5\u9519\u3002"]}),"\n",(0,i.jsxs)(a.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(a.code,{children:"skopeo inspect docker://<dest-image>:<tag> --raw"})," \u68c0\u67e5\u76ee\u6807\u955c\u50cf\u7684 Manifest \u7684 MediaType \u79cd\u7c7b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["\u62a5\u9519\uff1a ",(0,i.jsx)(a.code,{children:"destination manifest does not exists"}),"\uff0c\u8868\u793a\u76ee\u6807\u955c\u50cf\u4e0d\u5b58\u5728\uff0c\u8bf7\u68c0\u67e5\u76ee\u6807\u955c\u50cf\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"\u9047\u5230\u4e0b\u9762\u62a5\u9519\uff1a"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-text",children:'11:22:33 [ERRO] [M_ID:1] srcSpec: [\n    {\n        "digest": "",\n        "platform": {\n            "architecture": "amd64",\n            "os": "linux"\n        }\n    }\n]\n11:22:33 [ERRO] [M_ID:1] dstSpec: [\n    {\n        "digest": "",\n        "platform": {\n            "architecture": "amd64",\n            "os": "windows"\n            "os.version": "1.0.10"\n        }\n    }\n]\n'})}),"\n",(0,i.jsx)(a.p,{children:"\u8868\u793a\u672c\u5730\u7684\u955c\u50cf (srcSpec) \u4e0e\u670d\u52a1\u5668\u4e2d\u7684\u955c\u50cf (dstSpec) \u7684\u67d0\u4e9b\u5b57\u6bb5\u4e0d\u7b26\u5408"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>d});var i=n(7294);const s={},t=i.createContext(s);function d(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);