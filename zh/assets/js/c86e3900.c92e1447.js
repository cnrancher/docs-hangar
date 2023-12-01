"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[4640],{8089:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(5893),t=n(1151);const o={title:"Mirror \u547d\u4ee4"},s=void 0,a={id:"mirror/mirror",title:"Mirror \u547d\u4ee4",description:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/10-mirror/01-mirror.md",sourceDirName:"10-mirror",slug:"/mirror/mirror",permalink:"/zh/docs/mirror/mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/10-mirror/01-mirror.md",tags:[],version:"v1.6",sidebarPosition:1,frontMatter:{title:"Mirror \u547d\u4ee4"},sidebar:"docs",previous:{title:"Mirror",permalink:"/zh/docs/mirror/"},next:{title:"Mirror Validate \u547d\u4ee4",permalink:"/zh/docs/mirror/validate"}},l={},c=[{value:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",id:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",level:2},{value:"QuickStart",id:"quickstart",level:2},{value:"Harbor V2",id:"harbor-v2",level:3},{value:"Parameters",id:"parameters",level:2}];function d(r){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...r.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u955c\u50cf\u5217\u8868\u683c\u5f0f",children:"\u955c\u50cf\u5217\u8868\u683c\u5f0f"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"mirror"})," \u547d\u4ee4\u548c ",(0,i.jsx)(e.code,{children:"mirror-validate"})," \u547d\u4ee4\u6240\u8f93\u5165\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\u4e0e ",(0,i.jsx)(e.code,{children:"rancher-images.txt"})," \u683c\u5f0f\u4e0d\u4e00\u81f4\uff0c\u82e5\u9700\u8981\u5c06 ",(0,i.jsx)(e.code,{children:"rancher-images.txt"})," \u8f6c\u6362\u4e3a Mirror \u547d\u4ee4\u6240\u4f7f\u7528\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(e.a,{href:"../advanced-usage/convert-list",children:"convert-list"})," \u547d\u4ee4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6bcf\u4e00\u884c\u5305\u542b ",(0,i.jsx)(e.strong,{children:"\u201c\u6e90\u955c\u50cf \u76ee\u6807\u955c\u50cf TAG\u201d"}),"\uff0c\u4ee5\u7a7a\u683c\u5206\u9694\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-txt",children:"# <SOURCE> <DEST> <TAG>\ndocker.io/hello-world private.io/library/hello-world latest\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6e90\u955c\u50cf\u548c\u76ee\u6807\u955c\u50cf\u53ef\u4ee5\u4e3a\u4e0d\u5305\u542b registry \u524d\u7f00\u7684\u955c\u50cf\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-txt",children:"# <SOURCE> <DEST> <TAG>\nhello-world library/hello-world latest\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u82e5\u8be5\u884c\u4ee5 ",(0,i.jsx)(e.code,{children:"#"})," \u6216 ",(0,i.jsx)(e.code,{children:"//"})," \u5f00\u5934\uff0c\u90a3\u4e48\u8fd9\u4e00\u884c\u5c06\u88ab\u89c6\u4e3a\u6ce8\u91ca"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,i.jsxs)(e.p,{children:["\u5c06 ",(0,i.jsx)(e.code,{children:"image-list.txt"})," \u5217\u8868\u4e2d\u7684\u6240\u6709\u955c\u50cf\u6267\u884c Mirror\uff0c\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"-f"})," \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u5217\u8868\u540d\u79f0\uff0c",(0,i.jsx)(e.code,{children:"-d"})," \u6307\u5b9a\u76ee\u6807 registry"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"hangar mirror -f ./image-list.txt -d <DEST_REGISTRY_URL>\n"})}),"\n",(0,i.jsx)(e.h3,{id:"harbor-v2",children:"Harbor V2"}),"\n",(0,i.jsxs)(e.p,{children:["\u82e5\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7c7b\u578b\u4e3a Harbor V2\uff0c\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"--repo-type=harbor"})," \u53c2\u6570\uff0c\u81ea\u52a8\u4e3a Harbor V2 \u4ed3\u5e93\u521b\u5efa Project\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u82e5 Harbor V2 \u4e3a HTTP\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"--harbor-https=false"}),", ",(0,i.jsx)(e.code,{children:"--tls-verify=false"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u9664\u6b64\u4e4b\u5916\u82e5\u955c\u50cf\u5217\u8868\u4e2d\u7684\u76ee\u6807\u955c\u50cf\u4e0d\u5305\u542b ",(0,i.jsx)(e.code,{children:"Project"})," \uff08\u4f8b\u5982 ",(0,i.jsx)(e.code,{children:"mysql:8.0"}),", ",(0,i.jsx)(e.code,{children:"busybox:latest"}),"\uff09\uff0c\u90a3\u4e48\u5728 mirror \u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u4e3a\u5176\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"library"})," Project \u524d\u7f00\uff08",(0,i.jsx)(e.code,{children:"library/mysql:8.0"}),"\uff0c",(0,i.jsx)(e.code,{children:"library/busybox:latest"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(e.p,{children:["\u53ef\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"--default-project=library"})," \u53c2\u6570\u8bbe\u5b9a\u6dfb\u52a0 Project \u7684\u540d\u79f0 \uff08\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(e.code,{children:"library"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(e.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:'# \u4f7f\u7528 -f, --file \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u5217\u8868\u6587\u4ef6\nhangar mirror -f ./list.txt\n\n# \u4f7f\u7528 -d, --destination \u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539\u955c\u50cf\u5217\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u6307\u5b9a\u76ee\u6807\u955c\u50cf\u7684 registry\n# \u4f18\u5148\u7ea7\u4e3a\uff1a-d \u53c2\u6570 > DOCKER_REGISTRY \u73af\u5883\u53d8\u91cf > \u955c\u50cf\u5217\u8868\u4e2d\u5df2\u5199\u597d\u7684 registry\nhangar mirror -f ./list.txt -d private.registry.io\n\n# \u4f7f\u7528 -s, --source \u53c2\u6570\uff0c\u53ef\u4ee5\u5728\u4e0d\u4fee\u6539\u955c\u50cf\u5217\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u6307\u5b9a\u6e90\u955c\u50cf\u7684 registry\nhangar mirror -f ./list.txt -s docker.io\n\n# \u4f7f\u7528 -a, --arch \u53c2\u6570\uff0c\u8bbe\u5b9a\u62f7\u8d1d\u955c\u50cf\u7684\u67b6\u6784\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a amd64,arm64\nhangar mirror -f ./list.txt -a amd64,arm64\n\n# \u4f7f\u7528 --os \u53c2\u6570\uff0c\u8bbe\u5b9a\u62f7\u8d1d\u955c\u50cf\u7684 OS\uff08\u4ee5\u9017\u53f7\u5206\u9694\uff09\n# \u9ed8\u8ba4\u4e3a linux,windows\nhangar mirror -f ./list.txt --os linux # \u4ec5 Mirror Linux \u7cfb\u7edf\u7684\u955c\u50cf\n\n# \u4f7f\u7528 --no-arch-os-fail \u53c2\u6570\n# \u82e5\u955c\u50cf\u6240\u652f\u6301\u7684\u67b6\u6784\u4e0d\u5728 --arch \u53c2\u6570\u6240\u63d0\u4f9b\u7684\u67b6\u6784\u5217\u8868\u5185\uff0c\u4e14\u955c\u50cf\u7684 OS \u4e0d\u5728 --os \u53c2\u6570\u6240\u63d0\u4f9b\u7684\u7cfb\u7edf\u5217\u8868\u5185\uff0c\n# \u5219\u5c06\u5176\u89c6\u4e3a\u955c\u50cf Mirror \u5931\u8d25\uff0c\u5e76\u8f93\u51fa\u9519\u8bef\u65e5\u5fd7\u3002\n# \u9ed8\u8ba4\u4e3a false \uff08\u4ec5\u8f93\u51fa Warn \u4fe1\u606f\uff0c\u4e0d\u89c6\u4e3a\u955c\u50cf Mirror \u5931\u8d25\uff09\nhangar mirror -f ./list.txt -a arm64 --no-arch-os-fail\n\n# \u4f7f\u7528 -j, --jobs \u53c2\u6570\uff0c\u6307\u5b9a Worker \u6570\u91cf\uff0c\u5e76\u53d1\u62f7\u8d1d\u955c\u50cf\uff08\u652f\u6301 1~20 \u4e2a jobs\uff09\nhangar mirror -f ./list.txt -j 10    # \u542f\u52a8 10 \u4e2a Worker\n\n# \u4f7f\u7528 --repo-type \u6307\u5b9a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u53ef\u8bbe\u5b9a\u4e3a "harbor"\n# \u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7684\u7c7b\u578b\u4e3a harbor \u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u4e3a\u76ee\u6807\u955c\u50cf\u521b\u5efa project\nhangar mirror -f ./list.txt --repo-type=harbor\n\n# \u4f7f\u7528 --default-project \u53c2\u6570\u6307\u5b9a\u9ed8\u8ba4\u7684 project \u540d\u79f0\n# \u9ed8\u8ba4\u503c\u4e3a library\n# \u6b64\u53c2\u6570\u4f1a\u5c06 `private.io/mysql:5.8` \u8fd9\u79cd\u955c\u50cf\u91cd\u547d\u540d\u4e3a `private.io/library/mysql:5.8`\nhangar mirror -f ./list.txt --default-project=library\n\n# \u4f7f\u7528 -o, --failed \u53c2\u6570\uff0c\u5c06 mirror \u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u8f93\u51fa\u81f3\u6307\u5b9a\u6587\u4ef6\u4e2d\n# \u9ed8\u8ba4\u8f93\u51fa\u81f3 mirror-failed.txt\nhangar mirror -f image-list.txt -o failed-list.txt\n\n# \u82e5 Registry Server \u4e3a HTTP \u6216\u4f7f\u7528\u81ea\u7b7e\u540d TLS Certificate\uff0c\n# \u9700\u8981\u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 Registry \u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\nhangar mirror -f ./list.txt --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar mirror --debug\n'})})]})}function h(r={}){const{wrapper:e}={...(0,t.a)(),...r.components};return e?(0,i.jsx)(e,{...r,children:(0,i.jsx)(d,{...r})}):d(r)}},1151:(r,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var i=n(7294);const t={},o=i.createContext(t);function s(r){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function a(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:s(r.components),i.createElement(o.Provider,{value:e},r.children)}}}]);