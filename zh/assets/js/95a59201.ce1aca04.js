"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9083],{1426:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"login-logout","title":"Login & Logout","description":"\u60a8\u9700\u8981\u5728\u6267\u884c\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u64cd\u4f5c\u4e4b\u524d\u5bf9 \u6e90\u955c\u50cf\u4ed3\u5e93 \u548c \u76ee\u6807\u955c\u50cf\u4ed3\u5e93 \u6267\u884c hangar login\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/02-login-logout.md","sourceDirName":".","slug":"/login-logout","permalink":"/zh/docs/v1.7/login-logout","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/02-login-logout.md","tags":[],"version":"v1.7","lastUpdatedAt":1739438500000,"sidebarPosition":2,"frontMatter":{"title":"Login & Logout"},"sidebar":"docs","previous":{"title":"\u5b89\u88c5\u6307\u5357","permalink":"/zh/docs/v1.7/install"},"next":{"title":"Mirror","permalink":"/zh/docs/v1.7/mirror/"}}');var o=r(4848),i=r(8453);const s={title:"Login & Logout"},a=void 0,l={},c=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["\u60a8\u9700\u8981\u5728\u6267\u884c\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u64cd\u4f5c\u4e4b\u524d\u5bf9 ",(0,o.jsx)(n.em,{children:"\u6e90\u955c\u50cf\u4ed3\u5e93"})," \u548c ",(0,o.jsx)(n.em,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"})," \u6267\u884c ",(0,o.jsx)(n.code,{children:"hangar login"}),"\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title="hangar login --help"',children:"Login to registry server\n\nUsage:\n  hangar login registry-url [flags]\n\nExamples:\n  hangar login docker.io\n\nFlags:\n      --authfile string    path of the authentication file. Use REGISTRY_AUTH_FILE environment variable to override\n      --cert-dir string    use certificates at the specified path to access the registry\n      --get-login          Return the current login user for the registry\n  -h, --help               help for login\n  -p, --password string    Password for registry\n      --password-stdin     Take the password from stdin\n      --retry-times int    the number of times to possibly retry (default 3)\n      --timeout duration   login timeout\n      --tls-verify         require HTTPS and verify certificates\n  -u, --username string    Username for registry\n  -v, --verbose            Write more detailed information to stdout\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Login to docker hub"',children:'hangar login "docker.io"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u82e5\u4f7f\u7528\u81ea\u7b7e\u540d HTTPS \u8bc1\u4e66\u6216 HTTP \u955c\u50cf\u4ed3\u5e93\uff0c\u53ef\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"--tls-verify=false"})," \u53c2\u6570\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'hangar login "127.0.0.1:5000" --tls-verify=false\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["Hangar \u4f1a\u5728\u6267\u884c ",(0,o.jsx)(n.code,{children:"mirror/load"})," \u547d\u4ee4\u65f6\u81ea\u52a8\u68c0\u6d4b ",(0,o.jsx)(n.em,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"})," \u662f\u5426\u5df2\u767b\u5f55\u3002\n\u4f46\u4e0d\u4f1a\u68c0\u6d4b ",(0,o.jsx)(n.em,{children:"\u6e90\u955c\u50cf\u4ed3\u5e93"})," \u662f\u5426\u5df2\u7ecf\u767b\u5f55\u3002"]}),(0,o.jsxs)(n.p,{children:["\u56e0\u6b64\u82e5 ",(0,o.jsx)(n.em,{children:"\u6e90\u955c\u50cf\u4ed3\u5e93"})," \u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4e3a\u79c1\u6709\u955c\u50cf\uff0c\u8bf7\u624b\u52a8\u5bf9\u5176\u6267\u884c ",(0,o.jsx)(n.code,{children:"hangar login"}),"\u3002"]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"hangar logout"})," \u4ee5\u79fb\u9664\u5b58\u50a8\u7684\u955c\u50cf\u4ed3\u5e93\u767b\u5f55\u51ed\u8bc1\u4fe1\u606f\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Logout from docker hub"',children:'hangar logout "docker.io"\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(6540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);