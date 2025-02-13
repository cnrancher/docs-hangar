"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7520],{7266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"dev/test","title":"\u81ea\u52a8\u5316\u6d4b\u8bd5","description":"\u6b64\u9879\u76ee\u5305\u542b\u4e24\u79cd\u6d4b\u8bd5\uff0c\u5206\u522b\u4e3a Unit test \u548c Validation test\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/14-dev/02-test.md","sourceDirName":"14-dev","slug":"/dev/test","permalink":"/zh/docs/v1.6/dev/test","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/14-dev/02-test.md","tags":[],"version":"v1.6","lastUpdatedAt":1739438500000,"sidebarPosition":2,"frontMatter":{"title":"\u81ea\u52a8\u5316\u6d4b\u8bd5"},"sidebar":"docs","previous":{"title":"\u6784\u5efa Hangar","permalink":"/zh/docs/v1.6/dev/build"},"next":{"title":"Hangar Docker \u955c\u50cf","permalink":"/zh/docs/v1.6/docker-images"}}');var s=t(4848),i=t(8453);const o={title:"\u81ea\u52a8\u5316\u6d4b\u8bd5"},a=void 0,l={},c=[{value:"Validation test",id:"validation-test",level:2},{value:"\u6d4b\u8bd5\u73af\u5883\u51c6\u5907",id:"\u6d4b\u8bd5\u73af\u5883\u51c6\u5907",level:3},{value:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",id:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"Unit test",id:"unit-test",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6b64\u9879\u76ee\u5305\u542b\u4e24\u79cd\u6d4b\u8bd5\uff0c\u5206\u522b\u4e3a Unit test \u548c Validation test\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"validation-test",children:"Validation test"}),"\n",(0,s.jsx)(n.p,{children:"Validation Test \u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5 Hangar \u8f93\u51fa Version\u3001Help \u5e2e\u52a9\u4fe1\u606f\u7b49\u57fa\u672c\u7684\u6d4b\u8bd5\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u6700\u5148\u6267\u884c mirror, mirror-validate \u547d\u4ee4\u7684\u6d4b\u8bd5\uff0c\u5c06\u4e00\u4e9b\u5bb9\u5668\u955c\u50cf Mirror \u81f3\u65b0\u90e8\u7f72\u7684 Harbor Registry \u670d\u52a1\u5668\uff0c\u5e76\u9a8c\u8bc1 Mirror \u8fc7\u7684\u955c\u50cf\u662f\u5426\u6b63\u786e\u3002","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5148\u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u7b2c\u4e09\u65b9 Public Registry Mirror \u81f3 Harbor Private Registry\uff0c\u4e4b\u540e\u7684 Save/Load \u7b49\u6d4b\u8bd5\u5c06\u4f9d\u9760 Harbor Private Registry \u8fdb\u884c\uff0c\u4ee5\u907f\u514d\u89e6\u53d1 DockerHub \u7684 Rate Limit \u9650\u5236\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u4e4b\u540e\u6267\u884c save, load, load-validate, sync, compress, decompress \u7b49\u547d\u4ee4\u7684\u6d4b\u8bd5\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6d4b\u8bd5\u73af\u5883\u51c6\u5907",children:"\u6d4b\u8bd5\u73af\u5883\u51c6\u5907"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u642d\u5efa Harbor V2 Registry \u670d\u52a1\u5668\uff0c\u6d4b\u8bd5\u65f6\u4f1a\u5c06\u5bb9\u5668\u955c\u50cf Mirror \u81f3 Harbor \u4ed3\u5e93\u4e2d\uff0c\u907f\u514d\u89e6\u53d1 Docker Hub Rate Limit \u9650\u5236\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u5728\u6d4b\u8bd5\u65f6\u767b\u5f55\u81f3 Docker Hub \u548c Harbor V2\u3002","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'export SOURCE_REGISTRY="" # \u6e90 Registry \u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\nexport SOURCE_USERNAME="" # DockerHub \u7528\u6237\u540d (\u53ef\u9009)\nexport SOURCE_PASSWORD="" # DockerHub \u5bc6\u7801 (\u53ef\u9009)\n\nexport DEST_REGISTRY="" # harbor registry url\nexport DEST_USERNAME="" # harbor \u7528\u6237\u540d\nexport DEST_PASSWORD="" # harbor \u5bc6\u7801\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u82e5\u642d\u5efa\u7684 Harbor V2 \u4ed3\u5e93\u4e3a HTTP \u6216\u4f7f\u7528\u4e86\u81ea\u7b7e\u540d SSL \u8bc1\u4e66\uff0c\u8bf7\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\n",(0,s.jsx)(n.code,{children:'export TEST_SKIP_TLS="true"'})," \u4ee5\u542f\u7528 Hangar \u7684 ",(0,s.jsx)(n.code,{children:"--tls-verify=false"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u5728\u672c\u5de5\u7a0b\u7684\u6839\u76ee\u5f55\u4e2d\u6267\u884c ",(0,s.jsx)(n.code,{children:"make build"})," \u7f16\u8bd1\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u4f9b\u6d4b\u8bd5\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801",children:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728\u5bb9\u5668\u4e2d\u4e00\u952e\u8fd0\u884c\u6240\u6709\u5b50\u547d\u4ee4\u7684 Validation test\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ make test_all\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u53ef\u6267\u884c ",(0,s.jsx)(n.code,{children:"make test_[COMMAND_NAME]"}),"\uff0c\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u4e0d\u540c\u5b50\u547d\u4ee4\u7684 Validation test\uff1a"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65f6\u9700\u8981\u5148\u6267\u884c ",(0,s.jsx)(n.code,{children:"make test_mirror"}),"\uff0c\u4e4b\u540e\u518d\u6267\u884c\u5176\u4ed6\u547d\u4ee4\u7684\u6d4b\u8bd5\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# \u6d4b\u8bd5 mirror | mirror-validate \u5b50\u547d\u4ee4\nmake test_mirror\n\n# \u6d4b\u8bd5 save \u5b50\u547d\u4ee4\nmake test_save\n\n# \u6d4b\u8bd5 load | load-validate \u5b50\u547d\u4ee4\nmake test_load\n\n# \u6d4b\u8bd5 sync | compress | decompress \u5b50\u547d\u4ee4\nmake test_sync\n\n# \u4ee5\u6b64\u7c7b\u63a8\uff0c\u8fd0\u884c\u5176\u4ed6\u547d\u4ee4\u7684\u6d4b\u8bd5\u6307\u4ee4\u4e3a\uff1a\nmake test_[COMMAND_NAME]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unit-test",children:"Unit test"}),"\n",(0,s.jsx)(n.p,{children:"\u5355\u5143\u6d4b\u8bd5\u7528\u6765\u786e\u4fdd\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u51fd\u6570\u7684\u6267\u884c\u548c\u8f93\u51fa\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7a0b\u5e8f\u4ee3\u7801\u7684\u5355\u5143\u6d4b\u8bd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ make test\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);