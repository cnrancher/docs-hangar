"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6378],{3670:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var i=s(5893),a=s(1151);const l={title:"\u7f16\u8bd1 Hangar"},r=void 0,d={id:"dev/build",title:"\u7f16\u8bd1 Hangar",description:"Hangar \u7531 Go \u8bed\u8a00\u7f16\u5199\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/59-dev/01-build.md",sourceDirName:"59-dev",slug:"/dev/build",permalink:"/zh/docs/v1.8/dev/build",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/59-dev/01-build.md",tags:[],version:"v1.8",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:1,frontMatter:{title:"\u7f16\u8bd1 Hangar"},sidebar:"docs",previous:{title:"\u5f00\u53d1\u8c03\u8bd5",permalink:"/zh/docs/v1.8/dev/"},next:{title:"\u81ea\u52a8\u5316\u6d4b\u8bd5",permalink:"/zh/docs/v1.8/dev/test"}},c={},t=[{value:"\u5728\u5bb9\u5668\u4e2d\u6784\u5efa Hangar",id:"\u5728\u5bb9\u5668\u4e2d\u6784\u5efa-hangar",level:2},{value:"\u5728\u672c\u5730\u6784\u5efa Hangar",id:"\u5728\u672c\u5730\u6784\u5efa-hangar",level:2},{value:"\u7981\u7528 CGO",id:"\u7981\u7528-cgo",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Hangar \u7531 Go \u8bed\u8a00\u7f16\u5199\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u60a8\u53ef\u53c2\u7167\u4ee5\u4e0b\u6b65\u9aa4\u7f16\u8bd1 Hangar \u53ef\u6267\u884c\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(e.h2,{id:"\u5728\u5bb9\u5668\u4e2d\u6784\u5efa-hangar",children:"\u5728\u5bb9\u5668\u4e2d\u6784\u5efa Hangar"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u73af\u5883\u51c6\u5907\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5b89\u88c5 ",(0,i.jsx)(e.code,{children:"docker"}),"\u3001",(0,i.jsx)(e.code,{children:"curl"}),"\u3001",(0,i.jsx)(e.code,{children:"make"})," \u4f9d\u8d56\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"Hangar \u4ec5\u652f\u6301 Linux & Unix \u7cfb\u7edf\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u514b\u9686 Hangar \u6e90\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/hangar.git && cd hangar\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(e.code,{children:"make"}),"\uff0c\u5728\u5bb9\u5668\u4e2d\u6784\u5efa Hangar \u53ef\u6267\u884c\u6587\u4ef6:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# \u83b7\u53d6\u5e2e\u52a9\u4fe1\u606f\nmake help\n\n# \u5728\u5bb9\u5668\u4e2d\u6784\u5efa Hangar\nmake build\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u6587\u4ef6\u53ef\u4ece ",(0,i.jsx)(e.code,{children:"bin"})," \u76ee\u5f55\u4e2d\u83b7\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5728\u672c\u5730\u6784\u5efa-hangar",children:"\u5728\u672c\u5730\u6784\u5efa Hangar"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5b89\u88c5\u4ee5\u4e0b\u4f9d\u8d56\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Golang >= ",(0,i.jsx)(e.code,{children:"1.22.2"})]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sh",children:"# Arch Linux\nsudo pacman -S base-devel gpgme device-mapper btrfs-progs\n\n# Ubuntu/Debian\nsudo apt install libgpgme-dev libassuan-dev libbtrfs-dev libdevmapper-dev pkg-config gcc\n\n# macOS\nbrew install gpgme\n\n# openSUSE\nsudo zypper install libgpgme-devel device-mapper-devel libbtrfs-devel glib2-devel\n\n# Fedora\nsudo dnf install gpgme-devel libassuan-devel btrfs-progs-devel device-mapper-devel\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u514b\u9686 Hangar \u6e90\u4ee3\u7801\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/hangar.git && cd hangar\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u811a\u672c\u6784\u5efa Hangar\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./scripts/build.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7f16\u8bd1\u7684\u53ef\u6267\u884c\u6587\u4ef6\u53ef\u4ece ",(0,i.jsx)(e.code,{children:"bin"})," \u76ee\u5f55\u4e2d\u83b7\u53d6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u7981\u7528-cgo",children:"\u7981\u7528 CGO"}),"\n",(0,i.jsxs)(e.p,{children:["\u60a8\u53ef\u4ee5\u5728\u6784\u5efa Hangar \u65f6\u6dfb\u52a0 ",(0,i.jsx)(e.code,{children:"DISABLE_CGO=1"})," \u73af\u5883\u53d8\u91cf\u4ee5\u7981\u7528 CGO\uff0c\u7f16\u8bd1\u4e0d\u542b\u52a8\u6001\u94fe\u63a5\u7684 Hangar \u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsx)(e.p,{children:"\u7981\u7528 CGO \u7f16\u8bd1\u4ec5\u7528\u4e8e\u8bd5\u7528\u3002\u7f16\u8bd1\u540e\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u53ef\u80fd\u5728\u8fd0\u884c\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u6b64\u65b9\u5f0f\u5e76\u975e\u88ab\u5b98\u65b9\u652f\u6301\u3002"}),(0,i.jsxs)(e.p,{children:["\u53c2\u8003\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/containers/skopeo/blob/main/install.md#building-a-static-binary",children:"skopeo - Building a static binary"})]})]})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>r});var i=s(7294);const a={},l=i.createContext(a);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);