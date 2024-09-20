"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1025],{6068:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(4848),t=n(8453);const s={title:"Mirror Validate \u547d\u4ee4"},a=void 0,d={id:"mirror/validate",title:"Mirror Validate \u547d\u4ee4",description:"mirror-validate \u547d\u4ee4\u7528\u6765\u6821\u9a8c\u5df2 Mirror \u7684\u955c\u50cf\u662f\u5426\u6b63\u786e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/10-mirror/02-validate.md",sourceDirName:"10-mirror",slug:"/mirror/validate",permalink:"/zh/docs/v1.6/mirror/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/10-mirror/02-validate.md",tags:[],version:"v1.6",lastUpdatedAt:1726803035e3,sidebarPosition:2,frontMatter:{title:"Mirror Validate \u547d\u4ee4"},sidebar:"docs",previous:{title:"Mirror \u547d\u4ee4",permalink:"/zh/docs/v1.6/mirror/mirror"},next:{title:"Save",permalink:"/zh/docs/v1.6/save/"}},o={},c=[{value:"QuickStart",id:"quickstart",level:2},{value:"Parameters",id:"parameters",level:2}];function l(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mirror-validate"})," \u547d\u4ee4\u7528\u6765\u6821\u9a8c\u5df2 Mirror \u7684\u955c\u50cf\u662f\u5426\u6b63\u786e\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u6267\u884c ",(0,i.jsx)(e.code,{children:"mirror"})," \u547d\u4ee4\u540e\uff0c\u5bf9\u5df2 Mirror \u8fc7\u7684\u955c\u50cf\u8fdb\u884c\u9a8c\u8bc1\uff0c\u786e\u4fdd\u955c\u50cf\u5df2\u7ecf\u88ab Mirror \u5230\u76ee\u6807\u4ed3\u5e93\uff0c\u9a8c\u8bc1\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u4f1a\u4fdd\u5b58\u5728 ",(0,i.jsx)(e.code,{children:"mirror-validate-failed.txt"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsxs)(e.strong,{children:["\u8f93\u5165\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\u5e94\u5f53\u7b49\u540c\u4e8e ",(0,i.jsx)(e.a,{href:"/docs/v1.6/mirror/mirror",children:"Mirror"})," \u547d\u4ee4\u6240\u652f\u6301\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\u3002"]})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"hangar mirror-validate -f ./list.txt -j 10\n"})}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(e.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"# \u4f7f\u7528 -f, --file \u6307\u5b9a\u955c\u50cf\u5217\u8868\u6587\u4ef6\nhangar mirror-validate -f ./list.txt\n\n# \u4f7f\u7528 -d, --destination \u53c2\u6570\uff0c\u8bbe\u5b9a\u76ee\u6807\u955c\u50cf registry\nhangar mirror-validate -f ./list.txt -d private.registry.io\n\n# \u4f7f\u7528 -s, --source \u53c2\u6570\uff0c\u8bbe\u5b9a\u6e90\u955c\u50cf registry\nhangar mirror-validate -f ./list.txt -s docker.io\n\n# \u4f7f\u7528 -a, --arch \u53c2\u6570\uff0c\u8bbe\u5b9a\u955c\u50cf\u7684\u67b6\u6784\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a amd64,arm64\nhangar mirror-validate -f ./list.txt -a amd64,arm64,arm\n\n# \u4f7f\u7528 --os \u53c2\u6570\uff0c\u8bbe\u5b9a\u955c\u50cf\u7684 OS\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a linux,windows\nhangar mirror-validate -f ./list.txt --os linux\n\n# \u4f7f\u7528 -j, --jobs \u53c2\u6570\uff0c\u8bbe\u5b9a\u534f\u7a0b\u6c60\u6570\u91cf\uff0c\u5e76\u53d1\u6821\u9a8c\u955c\u50cf\uff08\u652f\u6301 1~20 \u4e2a jobs\uff09\nhangar mirror-validate -f ./list.txt -j 20 # \u542f\u52a8 20 \u4e2a Worker\n\n# \u4f7f\u7528 -o, --output \u53c2\u6570\uff0c\u5c06\u6821\u9a8c\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u8f93\u51fa\u81f3\u6307\u5b9a\u6587\u4ef6\u4e2d\n# \u9ed8\u8ba4\u8f93\u51fa\u81f3 mirror-validate-failed.txt\nhangar mirror-validate -f ./list.txt -o validate-failed-list.txt\n\n# \u82e5 Registry Server \u4e3a HTTP \u6216\u4f7f\u7528\u81ea\u7b7e\u540d TLS Certificate\uff0c\n# \u9700\u8981\u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 Registry \u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\nhangar mirror-validate -f ./list.txt --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar mirror-validate -f ./list.txt --debug\n"})}),"\n",(0,i.jsx)(e.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u6821\u9a8c\u529f\u80fd\u65f6\u53ef\u80fd\u9047\u5230\u7684\u62a5\u9519\u53ca\u539f\u56e0\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,i.jsx)(e.code,{children:"Validate failed: destination manifest MIME type unknow: application/vnd.docker.distribution.manifest.v2+json"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u76ee\u6807\u955c\u50cf\u7684 Manifest \u7684 MediaType \u4e0d\u662f ",(0,i.jsx)(e.code,{children:'"application/vnd.docker.distribution.manifest.list.v2+json"'})," \u65f6\u4f1a\u51fa\u73b0\u6b64\u62a5\u9519\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"skopeo inspect docker://<dest-image>:<tag> --raw"})," \u68c0\u67e5\u76ee\u6807\u955c\u50cf\u7684 Manifest \u7684 MediaType \u79cd\u7c7b\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u62a5\u9519\uff1a ",(0,i.jsx)(e.code,{children:"destination manifest does not exists"}),"\uff0c\u8868\u793a\u76ee\u6807\u955c\u50cf\u4e0d\u5b58\u5728\uff0c\u8bf7\u68c0\u67e5\u76ee\u6807\u955c\u50cf\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,i.jsx)(e.code,{children:"destination manifest list length should be 1"})]}),"\n",(0,i.jsx)(e.p,{children:"\u8868\u793a\u6e90\u955c\u50cf\u7684 Manifest \u53ea\u542b\u6709\u4e00\u4e2a\u955c\u50cf\uff0c\u56e0\u6b64\u76ee\u6807\u955c\u50cf\u7684 Manifest List \u5217\u8868\u4e2d\u4e5f\u5e94\u8be5\u53ea\u6709\u4e00\u4e2a\u955c\u50cf\uff0c\u82e5\u76ee\u6807\u955c\u50cf\u7684 Manifest List \u5217\u8868\u6709\u591a\u4e2a\u955c\u50cf\u65f6\uff0c\u4f1a\u51fa\u73b0\u6b64\u62a5\u9519\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"skopeo inspect docker://<dest-image>:<tag> --raw"})," \u67e5\u770b\u76ee\u6807\u955c\u50cf\u7684 Manifest List \u5217\u8868\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u62a5\u9519\uff1a",(0,i.jsx)(e.code,{children:"source * != dest *"})," \u8868\u793a\u6e90\u955c\u50cf\u4e0e\u76ee\u6807\u955c\u50cf\u7684\u67d0\u4e9b\u4fe1\u606f\u4e0d\u5339\u914d\uff0c\u4f8b\u5982 Arch\u3001Variant\u3001OS \u7b49\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9047\u5230\u4e0b\u9762\u62a5\u9519\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-text",children:'11:22:33 [ERRO] [M_ID:1] srcSpec: [\n    {\n        "digest": "sha256:9997c2f450f51e5c5402854899c42354b7968ca8298815df812b00409533527c",\n        "platform": {\n            "architecture": "amd64",\n            "os": "linux"\n        }\n    }\n]\n11:22:33 [ERRO] [M_ID:1] dstSpec: [\n    {\n        "digest": "sha256:8ace038ea3a18057e865b81e5ccd12d75ddeec0fdbd331555d877d39ac3f45bb",\n        "platform": {\n            "architecture": "amd64",\n            "os": "linux"\n        }\n    }\n]\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u8868\u793a\u6e90\u955c\u50cf (srcSpec) \u7684 Manifest List \u4e0e\u76ee\u6807\u955c\u50cf (dstSpec) \u7684 Manifest List \u4e0d\u7b26\u5408\uff0c\u5982\u679c\u662f ",(0,i.jsx)(e.code,{children:"digest"})," \u4e0d\u5339\u914d\uff0c\u8868\u793a\u4e0a\u6e38\u955c\u50cf\u5df2\u66f4\u65b0\uff0c\u79c1\u6709\u4ed3\u5e93\u4e2d\u7684\u955c\u50cf\u8fd8\u6ca1\u6709\u88ab\u66f4\u65b0\uff0c\u53ef\u91cd\u65b0\u8fd0\u884c ",(0,i.jsx)(e.code,{children:"mirror"})," \u547d\u4ee4\uff1b\u82e5\u662f\u5176\u4ed6\u5b57\u6bb5\u4e0d\u5339\u914d (",(0,i.jsx)(e.code,{children:"variant"}),", ",(0,i.jsx)(e.code,{children:"os.version"}),") \u7b49\uff0c\u4e5f\u53ef\u901a\u8fc7\u91cd\u65b0\u8fd0\u884c ",(0,i.jsx)(e.code,{children:"mirror"})," \u547d\u4ee4\u5c1d\u8bd5\u4fee\u590d\u3002"]}),"\n"]}),"\n"]})]})}function h(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(l,{...r})}):l(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>d});var i=n(6540);const t={},s=i.createContext(t);function a(r){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function d(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:a(r.components),i.createElement(s.Provider,{value:e},r.children)}}}]);