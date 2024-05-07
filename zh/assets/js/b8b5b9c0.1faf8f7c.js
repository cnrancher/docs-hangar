"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[696],{7545:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var a=s(5893),r=s(1151);const c={title:"Sync \u547d\u4ee4"},d=void 0,t={id:"advanced/sync",title:"Sync \u547d\u4ee4",description:"sync \u547d\u4ee4\u5c06\u989d\u5916\u7684\u5bb9\u5668\u955c\u50cf\u4fdd\u5b58\u5728\u672a\u538b\u7f29\u7684 Save \u7f13\u5b58\u6587\u4ef6\u5939\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced/02-sync.md",sourceDirName:"13-advanced",slug:"/advanced/sync",permalink:"/zh/docs/v1.6/advanced/sync",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/02-sync.md",tags:[],version:"v1.6",lastUpdatedAt:1715074519,formattedLastUpdatedAt:"2024\u5e745\u67087\u65e5",sidebarPosition:2,frontMatter:{title:"Sync \u547d\u4ee4"},sidebar:"docs",previous:{title:"Validate \u5b50\u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/validate"},next:{title:"Compress \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/compress"}},i={},o=[{value:"\u5f00\u53d1\u80cc\u666f",id:"\u5f00\u53d1\u80cc\u666f",level:2},{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Others",id:"others",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"sync"})," \u547d\u4ee4\u5c06\u989d\u5916\u7684\u5bb9\u5668\u955c\u50cf\u4fdd\u5b58\u5728\u672a\u538b\u7f29\u7684 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/save/save",children:"Save"})," \u7f13\u5b58\u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5f00\u53d1\u80cc\u666f",children:"\u5f00\u53d1\u80cc\u666f"}),"\n",(0,a.jsxs)(n.p,{children:["Sync \u547d\u4ee4\u4ee5\u53ca Compress\u3001Decompress \u547d\u4ee4\u4e3a Hangar \u7684\u9ad8\u7ea7\u7279\u6027\uff0c\u4e3b\u8981\u7528\u4e8e\u8f85\u52a9 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/save/save",children:"Save"})," \u547d\u4ee4\u5728\u4fdd\u5b58\u955c\u50cf\u7684 Blobs \u65f6\u5b58\u5728\u90e8\u5206\u955c\u50cf\u4e0b\u8f7d\u5931\u8d25\u7684\u60c5\u51b5\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/save/save",children:"Hangar Save"})," \u4fdd\u5b58\u955c\u50cf\u7684 Blobs \u81f3\u7f13\u5b58\u6587\u4ef6\u5939\u65f6\uff0c\u6709\u4e9b\u955c\u50cf\u53ef\u80fd\u56e0\u7f51\u7edc\u6216\u5176\u4ed6\u539f\u56e0\u4e0b\u8f7d\u5931\u8d25\uff0c\u91cd\u65b0\u6267\u884c ",(0,a.jsx)(n.a,{href:"/docs/v1.6/save/save",children:"Hangar Save"})," \u547d\u4ee4\u4f1a\u5220\u9664\u6389\u4e4b\u524d\u5df2\u6709\u7684\u7f13\u5b58\u6587\u4ef6\uff0c\u5e76\u91cd\u65b0\u6309\u7167\u955c\u50cf\u5217\u8868\u4e0b\u8f7d\u955c\u50cf Blobs \u81f3\u7f13\u5b58\u6587\u4ef6\u5939\u4e2d\uff0c\u4f1a\u6d6a\u8d39\u66f4\u591a\u7684\u65f6\u95f4\uff0c\u56e0\u6b64 Hangar \u7684 Sync \u547d\u4ee4\u7528\u4e8e\u53ea\u5c06 Save \u5931\u8d25\u7684\u955c\u50cf\u9644\u52a0\u5230 ",(0,a.jsx)(n.code,{children:"saved-image-cache"})," \u7f13\u5b58\u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0cHangar \u7684 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/advanced/decompress",children:"Decompress"})," \u547d\u4ee4\u5355\u72ec\u63d0\u4f9b\u4e86\u89e3\u538b Hangar \u521b\u5efa\u7684\u538b\u7f29\u5305\u6587\u4ef6\u7684\u529f\u80fd\uff0c\u4e0e Load \u547d\u4ee4\u7684\u89e3\u538b\u538b\u7f29\u5305\u529f\u80fd\u4e00\u81f4\uff0c\u652f\u6301 ",(0,a.jsx)(n.code,{children:"gzip"}),", ",(0,a.jsx)(n.code,{children:"zstd"})," \u538b\u7f29\u683c\u5f0f\u548c\u5206\u7247\u538b\u7f29\u529f\u80fd\u3002 Hangar \u7684 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/advanced/compress",children:"Compress"})," \u547d\u4ee4\u5355\u72ec\u63d0\u4f9b\u4e86\u538b\u7f29 Hangar \u521b\u5efa\u7684\u7f13\u5b58\u6587\u4ef6\u5939\u529f\u80fd\uff0c\u4e0e Save \u547d\u4ee4\u7684\u521b\u5efa\u538b\u7f29\u5305\u7684\u529f\u80fd\u4e00\u81f4\uff0c\u652f\u6301\u5c06\u7f13\u5b58\u6587\u4ef6\u5939\u521b\u5efa\u4e3a ",(0,a.jsx)(n.code,{children:"gzip"}),", ",(0,a.jsx)(n.code,{children:"zstd"})," \u683c\u5f0f\u7684\u538b\u7f29\u5305\u6587\u4ef6\uff0c\u4e14\u652f\u6301\u5206\u7247\u538b\u7f29\u529f\u80fd\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5c06 Sync \u548c Compress \u547d\u4ee4\u7ed3\u5408\u4f7f\u7528\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# \u67e5\u770b Save \u547d\u4ee4\u521b\u5efa\u7684\u7f13\u5b58\u6587\u4ef6\u5939\u53ca\u538b\u7f29\u5305\u6587\u4ef6\nls -al\n-rw-r--r--@  1 user  staff    13B May  8 14:53 save-failed.txt\ndrwxr-xr-x@  6 user  staff   192B May  8 14:53 saved-image-cache\n-rw-r--r--@  1 user  staff   107M May  8 14:53 saved-images.tar.gz\n\n# \u9996\u5148\u5220\u6389 Save \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u6587\u4ef6\nrm saved-images.tar.gz\n\n# \u4f7f\u7528 Sync \u547d\u4ee4\u5c06 save-failed.txt \u4e2d\u7684\u955c\u50cf\u4e0b\u8f7d\u81f3\u7f13\u5b58\u6587\u4ef6\u5939 saved-image-cache\nhangar sync -f ./save-failed.txt -d saved-image-cache -j 10\n\n# \u4e4b\u540e\u4f7f\u7528 Compress \u547d\u4ee4\u521b\u5efa\u538b\u7f29\u6587\u4ef6\nhangar compress -f ./saved-image-cache\n"})}),"\n",(0,a.jsx)(n.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 Sync \u547d\u4ee4\uff0c\u5c06 ",(0,a.jsx)(n.code,{children:"save-failed.txt"})," \u4e2d\u7684\u955c\u50cf\u4fdd\u5b58\u5728 ",(0,a.jsx)(n.code,{children:"saved-image-cache"})," \u7f13\u5b58\u76ee\u5f55\u4e2d\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"hangar sync -f ./save-failed.txt -d ./saved-image-cache -j 10\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Sync \u5931\u8d25\u7684\u955c\u50cf\u4f1a\u4fdd\u5b58\u5728 ",(0,a.jsx)(n.code,{children:"sync-failed.txt"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"# \u4f7f\u7528 -f, --file \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u5217\u8868\u6587\u4ef6\n# \u4f7f\u7528 -d, --destination \u53c2\u6570\uff0c\u6307\u5b9a\u540c\u6b65\u955c\u50cf\u5230\u76ee\u6807\u6587\u4ef6\u5939\u76ee\u5f55\nhangar sync -f ./list.txt -d [DIRECTORY]\n\n# \u4f7f\u7528 -s, --source \u53c2\u6570\uff0c\u53ef\u5728\u4e0d\u4fee\u6539\u955c\u50cf\u5217\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u6307\u5b9a\u6e90\u955c\u50cf\u7684 registry\n# \u5982\u679c\u955c\u50cf\u5217\u8868\u4e2d\u7684\u6e90\u955c\u50cf\u6ca1\u6709\u5199 registry\uff0c\u4e14\u672a\u8bbe\u5b9a -s \u53c2\u6570\uff0c\u90a3\u4e48\u6e90\u955c\u50cf\u7684 registry \u4f1a\u88ab\u8bbe\u5b9a\u4e3a\u9ed8\u8ba4\u7684 docker.io\nhangar sync -f ./list.txt -s custom.registry.io -d [DIRECTORY]\n\n# \u4f7f\u7528 -a, --arch \u53c2\u6570\uff0c\u6307\u5b9a\u5bfc\u51fa\u7684\u955c\u50cf\u7684\u67b6\u6784\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a amd64,arm64\nhangar sync -f ./list.txt -d [DIRECTORY] -a amd64,arm64\n\n# \u4f7f\u7528 --os \u53c2\u6570\uff0c\u8bbe\u5b9a\u955c\u50cf\u7684 OS\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a linux,windows\nhangar sync -f ./list.txt --os linux -d [DIRECTORY]\n\n# \u4f7f\u7528 --no-arch-os-fail \u53c2\u6570\n# \u82e5\u955c\u50cf\u6240\u652f\u6301\u7684\u67b6\u6784\u4e0d\u5728 --arch \u53c2\u6570\u6240\u63d0\u4f9b\u7684\u67b6\u6784\u5217\u8868\u5185\uff0c\u4e14\u955c\u50cf\u7684 OS \u4e0d\u5728 --os \u53c2\u6570\u6240\u63d0\u4f9b\u7684\u7cfb\u7edf\u5217\u8868\u5185\uff0c\n# \u5219\u5c06\u5176\u89c6\u4e3a\u955c\u50cf Sync \u5931\u8d25\uff0c\u5e76\u8f93\u51fa\u9519\u8bef\u65e5\u5fd7\u3002\n# \u9ed8\u8ba4\u4e3a false \uff08\u4ec5\u8f93\u51fa Warn \u4fe1\u606f\uff0c\u4e0d\u89c6\u4e3a\u955c\u50cf Sync \u5931\u8d25\uff09\nhangar sync -f ./list.txt -d [DIRECTORY] -a arm64 --no-arch-os-fail\n\n# \u4f7f\u7528 -j, --jobs \u53c2\u6570\uff0c\u6307\u5b9a Worker \u6570\u91cf\uff0c\u5e76\u53d1\u4e0b\u8f7d\u955c\u50cf\u81f3\u672c\u5730\uff08\u652f\u6301 1~20 \u4e2a jobs\uff09\nhangar sync -f ./list.txt -d [DIRECTORY] -j 10 # \u542f\u52a8 10 \u4e2a Worker\n\n# \u82e5 Registry Server \u4e3a HTTP \u6216\u4f7f\u7528\u81ea\u7b7e\u540d TLS Certificate\uff0c\n# \u9700\u8981\u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 Registry \u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\nhangar sync -f ./list.txt -d [DIRECTORY] --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar sync -f ./list.txt -d [DIRECTORY] --debug\n"})}),"\n",(0,a.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 Sync \u5c06\u955c\u50cf\u8865\u5145\u81f3\u7f13\u5b58\u6587\u4ef6\u5939\u540e\uff0c\u53ef\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/docs/v1.6/advanced/compress",children:"compress"})," \u547d\u4ee4\u538b\u7f29\u7f13\u5b58\u6587\u4ef6\u5939\uff0c\u751f\u6210\u538b\u7f29\u5305\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var a=s(7294);const r={},c=a.createContext(r);function d(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);