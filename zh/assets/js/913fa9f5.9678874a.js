"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[8811],{2791:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"install","title":"\u5b89\u88c5\u6307\u5357","description":"\u60a8\u53ef\u4f7f\u7528 Hangar Docker \u955c\u50cf\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c Hangar\u3002\u9664\u6b64\u4e4b\u5916\u60a8\u53ef\u5728\u7cfb\u7edf\u4e2d\u5b89\u88c5 Hangar \u53ef\u6267\u884c\u6587\u4ef6\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/01-install.md","sourceDirName":".","slug":"/install","permalink":"/zh/docs/v1.7/install","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/01-install.md","tags":[],"version":"v1.7","lastUpdatedAt":1739438500000,"sidebarPosition":1,"frontMatter":{"title":"\u5b89\u88c5\u6307\u5357"},"sidebar":"docs","previous":{"title":"Hangar \u4f7f\u7528\u6307\u5f15","permalink":"/zh/docs/v1.7/"},"next":{"title":"Login & Logout","permalink":"/zh/docs/v1.7/login-logout"}}');var s=r(4848),c=r(8453);const l={title:"\u5b89\u88c5\u6307\u5357"},i=void 0,o={},d=[{value:"Hangar Docker \u955c\u50cf",id:"hangar-docker-\u955c\u50cf",level:2},{value:"\u5b89\u88c5\u5230 Linux \u7cfb\u7edf",id:"\u5b89\u88c5\u5230-linux-\u7cfb\u7edf",level:2},{value:"Arch Linux",id:"arch-linux",level:3},{value:"openSUSE",id:"opensuse",level:3},{value:"\u4ece\u6e90\u4ee3\u7801\u4e2d\u6784\u5efa Hangar",id:"\u4ece\u6e90\u4ee3\u7801\u4e2d\u6784\u5efa-hangar",level:2}];function t(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u60a8\u53ef\u4f7f\u7528 Hangar Docker \u955c\u50cf\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c Hangar\u3002\u9664\u6b64\u4e4b\u5916\u60a8\u53ef\u5728\u7cfb\u7edf\u4e2d\u5b89\u88c5 Hangar \u53ef\u6267\u884c\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"hangar-docker-\u955c\u50cf",children:"Hangar Docker \u955c\u50cf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"docker"})," \u8fd0\u884c Hangar \u5bb9\u5668\u955c\u50cf:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# Docker\ndocker pull cnrancher/hangar:latest\n\ndocker run -it -v $(pwd):/hangar cnrancher/hangar:latest\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"podman"})," \u8fd0\u884c Hangar \u5bb9\u5668\u955c\u50cf:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# Podman\npodman pull docker.io/cnrancher/hangar:latest\n\npodman run -it -v $(pwd):/hangar cnrancher/hangar:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6709\u5173 Hangar Docker \u955c\u50cf\u7684\u66f4\u591a\u4f7f\u7528\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u8003 ",(0,s.jsx)(e.a,{href:"/docs/v1.7/docker-image",children:"Hangar Docker \u955c\u50cf"})," \u9875\u9762\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5b89\u88c5\u5230-linux-\u7cfb\u7edf",children:"\u5b89\u88c5\u5230 Linux \u7cfb\u7edf"}),"\n",(0,s.jsx)(e.h3,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,s.jsxs)(e.p,{children:["\u60a8\u53ef\u5728 Arch Linux ",(0,s.jsx)(e.a,{href:"https://aur.archlinux.org/packages/hangar",children:"AUR"})," \u4ed3\u5e93\u83b7\u53d6 ",(0,s.jsx)(e.code,{children:"PKGBUILD"}),"\uff0c\u5728\u672c\u5730\u7f16\u8bd1\u5e76\u5b89\u88c5 Hangar\u3002"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(e.a,{href:"https://github.com/Jguer/yay",children:"yay"})," AUR Helper \u5b89\u88c5 Hangar\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# \u4ece\u6700\u65b0\u7684 stable release tag \u6784\u5efa\u5e76\u5b89\u88c5 Hangar\u3002\nyay hangar\n\n# \u4ece\u6700\u65b0\u7684\u4e0a\u6e38 git main \u5206\u652f\u6e90\u7801\u6784\u5efa\u5e76\u5b89\u88c5 Hangar\u3002\nyay hangar-git\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0 ",(0,s.jsx)(e.a,{href:"https://download.opensuse.org/repositories/home:/StarryWang/Arch/x86_64/",children:"Open Build Service"})," \u4ed3\u5e93\u4ee5\u5b89\u88c5\u9884\u6784\u5efa\u7684 Hangar \u5b89\u88c5\u5305\u3002"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7f16\u8f91 ",(0,s.jsx)(e.code,{children:"/etc/pacman.conf"})," \u6dfb\u52a0\u81ea\u5b9a\u4e49\u8f6f\u4ef6\u6e90\uff1a","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-txt",metastring:'title="/etc/pacman.conf"',children:"[home_StarryWang_Arch]\nSigLevel = Never\nServer = https://download.opensuse.org/repositories/home:/StarryWang/Arch/$arch\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b89\u88c5 Hangar\uff1a","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"sudo pacman -Sy\nsudo pacman -S hangar\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"opensuse",children:"openSUSE"}),"\n",(0,s.jsxs)(e.p,{children:["Hangar \u53ef\u5728 ",(0,s.jsx)(e.a,{href:"https://build.opensuse.org/package/show/home:StarryWang/Hangar",children:"Open Build Service"})," \u83b7\u53d6\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sh",children:"# openSUSE Tumbleweed\nsudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo\nsudo zypper ref\nsudo zypper in hangar\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u4ece\u6e90\u4ee3\u7801\u4e2d\u6784\u5efa-hangar",children:"\u4ece\u6e90\u4ee3\u7801\u4e2d\u6784\u5efa Hangar"}),"\n",(0,s.jsxs)(e.p,{children:["\u53c2\u8003 ",(0,s.jsx)(e.a,{href:"/docs/v1.7/dev/build",children:"\u7f16\u8bd1 Hangar"})," \u9875\u9762\uff0c\u624b\u52a8\u6784\u5efa Hangar \u53ef\u6267\u884c\u6587\u4ef6\u5e76\u5b89\u88c5\u5230\u7cfb\u7edf\u4e2d\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>l,x:()=>i});var a=r(6540);const s={},c=a.createContext(s);function l(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);