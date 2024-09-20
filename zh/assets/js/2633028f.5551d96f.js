"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[329],{9160:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var r=i(4848),s=i(8453);const o={title:"\u5e38\u89c1\u95ee\u9898"},c=void 0,d={id:"questions",title:"\u5e38\u89c1\u95ee\u9898",description:"\u5173\u4e8e Hangar",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/99-questions.md",sourceDirName:".",slug:"/questions",permalink:"/zh/docs/v1.7/questions",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/99-questions.md",tags:[],version:"v1.7",lastUpdatedAt:1726803035e3,sidebarPosition:99,frontMatter:{title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"docs",previous:{title:"Hangar Docker \u955c\u50cf",permalink:"/zh/docs/v1.7/docker-image"}},a={},t=[{value:"\u5173\u4e8e Hangar",id:"\u5173\u4e8e-hangar",level:2},{value:"Hangar \u7f13\u5b58\u6587\u4ef6\u5939",id:"hangar-\u7f13\u5b58\u6587\u4ef6\u5939",level:2},{value:"Harbor 2.X \u955c\u50cf\u4ed3\u5e93",id:"harbor-2x-\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 <code>zip</code> \u538b\u7f29\u5305\u683c\u5f0f\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-zip-\u538b\u7f29\u5305\u683c\u5f0f",level:2},{value:"Hangar \u62f7\u8d1d\u8fc7\u7684\u955c\u50cf Digest \u4f1a\u88ab\u6539\u53d8\u4e48\uff1f",id:"hangar-\u62f7\u8d1d\u8fc7\u7684\u955c\u50cf-digest-\u4f1a\u88ab\u6539\u53d8\u4e48",level:2},{value:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",id:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",level:2},{value:"\u62a5\u9519\uff1a<code>manifest unknown</code>",id:"\u62a5\u9519manifest-unknown",level:3},{value:"\u62a5\u9519\uff1a<code>unsupported MIME type</code>",id:"\u62a5\u9519unsupported-mime-type",level:3},{value:"\u62a5\u9519\uff1a<code>open /etc/containers/policy.json: no such file or directory</code>",id:"\u62a5\u9519open-etccontainerspolicyjson-no-such-file-or-directory",level:3},{value:"\u8b66\u544a\uff1a<code>no avaiable image for specified arch and os</code>",id:"\u8b66\u544ano-avaiable-image-for-specified-arch-and-os",level:3},{value:"\u5728\u5411 Harbor \u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519\uff1a<code>authentication required</code>",id:"\u5728\u5411-harbor-\u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519authentication-required",level:3},{value:"\u5728\u5411 Harbor \u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519\uff1a<code>unknown: http status code: 404, body: {&quot;errors&quot;:[{&quot;code&quot;:&quot;MANIFEST_UNKNOWN&quot;,&quot;message&quot;:&quot;manifest unknown&quot;...</code>",id:"\u5728\u5411-harbor-\u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519unknown-http-status-code-404-body-errorscodemanifest_unknownmessagemanifest-unknown",level:3},{value:"\u62a5\u9519\uff1a<code>server gave HTTP response to HTTPS client</code>",id:"\u62a5\u9519server-gave-http-response-to-https-client",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5173\u4e8e-hangar",children:"\u5173\u4e8e Hangar"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u7684\u4f9d\u8d56\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Hangar \u4f7f\u7528\u4e86 ",(0,r.jsx)(n.a,{href:"https://github.com/containers/image",children:"containers/images"})," API \u6267\u884c\u5bb9\u5668\u955c\u50cf\u62f7\u8d1d\u76f8\u5173\u64cd\u4f5c\u3002",(0,r.jsx)("br",{}),"\n\u56e0 ",(0,r.jsx)(n.a,{href:"https://github.com/containers/signature",children:"containers/signature"})," API \u4f7f\u7528\u4e86 C \u5e93\uff0c\u56e0\u6b64\u5728\u7f16\u8bd1 Hangar \u65f6\u9700\u8981\u542f\u7528 ",(0,r.jsx)(n.code,{children:"CGO"}),"\uff0c\u7f16\u8bd1\u540e\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5b58\u5728\u52a8\u6001\u94fe\u63a5\u5e93\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Hangar \u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/helm/helm",children:"Helm"})," API \u7528\u4e8e\u5728 Helm Chart \u4e2d\u751f\u6210\u955c\u50cf\u5217\u8868\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Hangar \u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://github.com/spf13/cobra",children:"cobra"})," \u5904\u7406\u547d\u4ee4\u884c\u4ea4\u4e92\uff0c\u751f\u6210 ",(0,r.jsx)(n.a,{href:"/docs/v1.7/advanced/completion",children:"\u547d\u4ee4\u884c\u8865\u5168\u811a\u672c"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"hangar-\u7f13\u5b58\u6587\u4ef6\u5939",children:"Hangar \u7f13\u5b58\u6587\u4ef6\u5939"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u6267\u884c Save / Sync / Load \u547d\u4ee4\u65f6\uff0cHangar \u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"${HOME}/.cache/hangar_cache"})," \u6682\u5b58\u4e0b\u8f7d\u7684\u5bb9\u5668\u955c\u50cf Blobs \u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u5728\u6267\u884c\u955c\u50cf\u62f7\u8d1d\u7684\u8fc7\u7a0b\u4e2d\u5f3a\u884c\u505c\u6b62\u4e86 Hangar\uff0c\u8bf7\u624b\u52a8\u6e05\u7406 ",(0,r.jsx)(n.code,{children:"${HOME}/.cache/hangar_cache"})," \u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"harbor-2x-\u955c\u50cf\u4ed3\u5e93",children:"Harbor 2.X \u955c\u50cf\u4ed3\u5e93"}),"\n",(0,r.jsxs)(n.p,{children:["\u82e5",(0,r.jsx)(n.em,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"}),"\u4e3a Harbor\uff0cHangar ",(0,r.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u5c06\u5c1d\u8bd5\u81ea\u52a8\u4e3a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u521b\u5efa\u79c1\u6709\u7684 ",(0,r.jsx)(n.strong,{children:"Harbor Project"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u82e5 Hangar \u65e0\u6cd5\u81ea\u52a8\u521b\u5efa ",(0,r.jsx)(n.strong,{children:"Harbor Project"}),"\uff0c\u8bf7\u624b\u52a8\u521b\u5efa\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-zip-\u538b\u7f29\u5305\u683c\u5f0f",children:["\u4e3a\u4ec0\u4e48\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"zip"})," \u538b\u7f29\u5305\u683c\u5f0f\uff1f"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8e\u538b\u7f29\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"/docs/v1.7/load/load",children:"load"})," \u548c ",(0,r.jsx)(n.a,{href:"/docs/v1.7/archive/specification",children:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f"})," \u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u65e7\u7248\u672c\u7684 Hangar \u521b\u5efa\u7684\u538b\u7f29\u5305\u683c\u5f0f\uff08",(0,r.jsx)(n.code,{children:"tar.gz"}),"\uff09\u5c06\u65e0\u6cd5\u4e0e\u65b0\u7248\u672c\uff08",(0,r.jsx)(n.code,{children:"zip"}),"\uff09\u683c\u5f0f\u76f8\u517c\u5bb9\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"hangar-\u62f7\u8d1d\u8fc7\u7684\u955c\u50cf-digest-\u4f1a\u88ab\u6539\u53d8\u4e48",children:"Hangar \u62f7\u8d1d\u8fc7\u7684\u955c\u50cf Digest \u4f1a\u88ab\u6539\u53d8\u4e48\uff1f"}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea Hangar ",(0,r.jsx)(n.code,{children:"v1.7.0"})," \u8d77\uff0cHangar \u4f1a\u5c3d\u53ef\u80fd\u7684\u786e\u4fdd\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u65f6\uff0c\u4e0d\u6539\u53d8\u5176 Digest\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ea\u6709\u5728\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u683c\u5f0f\u662f\u5df2\u5f03\u7528\u7684 ",(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/spec/deprecated-schema-v1/",children:"Docker manifest Version2 Schema1"}),"\uff08",(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v1+json"}),"\uff09\u65f6\uff0cHangar \u4f1a\u5728\u62f7\u8d1d\u955c\u50cf\u65f6\u5c06\u5176 ",(0,r.jsx)(n.code,{children:"mediaType"})," \u66f4\u65b0\u4e3a ",(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/spec/manifest-v2-2/",children:"Docker manifest Version2 Schema2"})," (",(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v2+json"}),")\uff0c\u6b64\u65f6\u62f7\u8d1d\u540e\u7684\u955c\u50cf Digest \u4f1a\u4e0e\u6e90\u955c\u50cf\u4e0d\u4e00\u81f4\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5",children:"\u5e38\u89c1\u62a5\u9519\u53ca\u5904\u7406\u65b9\u6cd5"}),"\n",(0,r.jsxs)(n.h3,{id:"\u62a5\u9519manifest-unknown",children:["\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:"manifest unknown"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4e0d\u5b58\u5728\u3002\u8bf7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"hangar inspect --raw docker://<IMAGE>"})," \u68c0\u67e5\u955c\u50cf\u662f\u5426\u5b58\u5728\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u62a5\u9519unsupported-mime-type",children:["\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:"unsupported MIME type"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5bb9\u5668\u955c\u50cf\u7684 ",(0,r.jsx)(n.code,{children:"mediaType"})," \u4e0d\u88ab\u652f\u6301\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Hangar \u652f\u6301\u4ee5\u4e0b\u683c\u5f0f\u7684 ",(0,r.jsx)(n.code,{children:"mediaType"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v2+json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.v1+json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.oci.image.manifest.v1+json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u62a5\u9519open-etccontainerspolicyjson-no-such-file-or-directory",children:["\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:"open /etc/containers/policy.json: no such file or directory"})]}),"\n",(0,r.jsxs)(n.p,{children:["Policy \u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"/etc/containers/policy.json"})," \u4e0d\u5b58\u5728\u3002\u53ef\u5728 ",(0,r.jsx)(n.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/default-policy.json",children:"default-policy.json"})," \u83b7\u53d6\u9ed8\u8ba4\u7684 Policy \u7b56\u7565\u914d\u7f6e\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\u53ef\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--insecure-policy"})," \u53c2\u6570\u8df3\u8fc7 Policy \u68c0\u6d4b\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u8b66\u544ano-avaiable-image-for-specified-arch-and-os",children:["\u8b66\u544a\uff1a",(0,r.jsx)(n.code,{children:"no avaiable image for specified arch and os"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4e0e ",(0,r.jsx)(n.code,{children:"--arch"})," \u548c ",(0,r.jsx)(n.code,{children:"--os"})," \u53c2\u6570\u6307\u5b9a\u7684\u67b6\u6784 & OS \u4fe1\u606f\u4e0d\u7b26\u65f6\u4f1a\u51fa\u73b0\u6b64\u8b66\u544a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\u5f85\u62f7\u8d1d\u7684\u955c\u50cf\u4ec5\u652f\u6301 ",(0,r.jsx)(n.code,{children:"amd64"})," \u67b6\u6784\uff0c\u800c ",(0,r.jsx)(n.code,{children:"--arch"})," \u8bbe\u5b9a\u7684\u662f ",(0,r.jsx)(n.code,{children:"arm64"})," \u65f6\uff0c\u4f1a\u51fa\u73b0\u6b64 Warning \u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u8b66\u544a\u4fe1\u606f\u4e0d\u4f1a\u5f71\u54cd\u6b63\u5e38\u7684\u955c\u50cf\u62f7\u8d1d\u6d41\u7a0b\uff0c\u5f53\u51fa\u73b0\u6b64\u8b66\u544a\u65f6\u53ea\u7528\u4e8e\u63d0\u9192\u8be5\u955c\u50cf\u6ca1\u6709\u88ab\u62f7\u8d1d\u3002"}),"\n",(0,r.jsxs)(n.h3,{id:"\u5728\u5411-harbor-\u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519authentication-required",children:["\u5728\u5411 Harbor \u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:"authentication required"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u68c0\u67e5\u955c\u50cf\u7684 Harbor Project \u662f\u5426\u5df2\u7ecf\u521b\u5efa\uff0c\u5728\u6267\u884c ",(0,r.jsx)(n.code,{children:"hangar mirror"})," \u547d\u4ee4\u65f6\u9700\u8981\u624b\u52a8\u521b\u5efa Harbor Project\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u5728\u5411-harbor-\u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519unknown-http-status-code-404-body-errorscodemanifest_unknownmessagemanifest-unknown",children:["\u5728\u5411 Harbor \u4ed3\u5e93\u62f7\u8d1d\u955c\u50cf\u65f6\u9047\u5230\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:'unknown: http status code: 404, body: {"errors":[{"code":"MANIFEST_UNKNOWN","message":"manifest unknown"...'})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605\u6b64 ",(0,r.jsx)(n.a,{href:"https://github.com/goharbor/harbor/issues/14902",children:"Issue"}),"\uff0c\u624b\u52a8\u6267\u884c Harbor \u7684 Garbage Collection\uff0c\u5c1d\u8bd5\u4fee\u590d\u6b64\u95ee\u9898\u3002"]}),"\n",(0,r.jsxs)(n.h3,{id:"\u62a5\u9519server-gave-http-response-to-https-client",children:["\u62a5\u9519\uff1a",(0,r.jsx)(n.code,{children:"server gave HTTP response to HTTPS client"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u82e5\u955c\u50cf\u4ed3\u5e93\u4f7f\u7528\u81ea\u7b7e\u540d HTTPS \u8bc1\u4e66\u6216 HTTP\uff0c\u8bf7\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"--tls-verify=false"})," \u53c2\u6570\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var r=i(6540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);