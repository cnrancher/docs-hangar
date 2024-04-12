"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3151],{2473:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(5893),i=r(1151);const o={title:"Login & Logout"},s=void 0,a={id:"login-logout",title:"Login & Logout",description:"You need to execute hangar login for SOURCE REGISTRY (if images in source registry are private) and DESTINATION REGISTRY before copying images.",source:"@site/versioned_docs/version-v1.8/02-login-logout.md",sourceDirName:".",slug:"/login-logout",permalink:"/docs/v1.8/login-logout",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/02-login-logout.md",tags:[],version:"v1.8",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:2,frontMatter:{title:"Login & Logout"},sidebar:"docs",previous:{title:"Installation Guide",permalink:"/docs/v1.8/install"},next:{title:"Mirror",permalink:"/docs/v1.8/mirror/"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["You need to execute ",(0,t.jsx)(n.code,{children:"hangar login"})," for ",(0,t.jsx)(n.em,{children:"SOURCE REGISTRY"})," (if images in source registry are private) and ",(0,t.jsx)(n.em,{children:"DESTINATION REGISTRY"})," before copying images."]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="hangar login --help"',children:"Login to registry server\n\nUsage:\n  hangar login registry-url [flags]\n\nExamples:\n  hangar login docker.io\n\nFlags:\n      --authfile string    path of the authentication file. Use REGISTRY_AUTH_FILE environment variable to override\n      --cert-dir string    use certificates at the specified path to access the registry\n      --get-login          Return the current login user for the registry\n  -h, --help               help for login\n  -p, --password string    Password for registry\n      --password-stdin     Take the password from stdin\n      --retry-times int    the number of times to possibly retry (default 3)\n      --timeout duration   login timeout\n      --tls-verify         require HTTPS and verify certificates\n  -u, --username string    Username for registry\n  -v, --verbose            Write more detailed information to stdout\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Login to docker hub"',children:'hangar login "docker.io"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"--tls-verify=false"})," option if the registry server is using insecure HTTPS certificate or HTTP."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'hangar login "127.0.0.1:5000" --tls-verify=false\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Hangar will check whether the destination registry is logged in when executing the ",(0,t.jsx)(n.code,{children:"mirror/load"})," command, but it won't check whether the source registry is logged in or not."]}),(0,t.jsx)(n.p,{children:"Therefore, you need to login to the source registry if the images in source registry are private."})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"hangar logout"})," to remove credentials of registry server."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Logout from docker hub"',children:'hangar logout "docker.io"\n'})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7294);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);