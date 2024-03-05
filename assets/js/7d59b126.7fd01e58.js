"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2429],{8522:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(5893),s=a(1151);const i={title:"Installation Guide"},l=void 0,o={id:"install",title:"Installation Guide",description:"You can run Hangar by using Hangar Docker Image inside the container or install Hangar binary on your system.",source:"@site/versioned_docs/version-v1.7/01-install.md",sourceDirName:".",slug:"/install",permalink:"/docs/v1.7/install",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/01-install.md",tags:[],version:"v1.7",lastUpdatedAt:1709622376,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Installation Guide"},sidebar:"docs",previous:{title:"Hangar Tutorial",permalink:"/docs/v1.7/"},next:{title:"Login & Logout",permalink:"/docs/v1.7/login-logout"}},t={},c=[{value:"Hangar Docker Image",id:"hangar-docker-image",level:2},{value:"Installing on Linux",id:"installing-on-linux",level:2},{value:"Arch Linux",id:"arch-linux",level:3},{value:"openSUSE",id:"opensuse",level:3},{value:"Building from Source",id:"building-from-source",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["You can run Hangar by using ",(0,r.jsx)(e.a,{href:"#hangar-docker-image",children:"Hangar Docker Image"})," inside the container or install Hangar binary on your system."]}),"\n",(0,r.jsx)(e.h2,{id:"hangar-docker-image",children:"Hangar Docker Image"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Run Hangar with ",(0,r.jsx)(e.code,{children:"docker"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# Docker\ndocker pull cnrancher/hangar:latest\n\ndocker run -it -v $(pwd):/hangar cnrancher/hangar:latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Run Hangar with ",(0,r.jsx)(e.code,{children:"podman"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# Podman\npodman pull docker.io/cnrancher/hangar:latest\n\npodman run -it -v $(pwd):/hangar cnrancher/hangar:latest\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["For more information about Hangar Docker Image, see ",(0,r.jsx)(e.a,{href:"/docs/v1.7/docker-image",children:"Hangar Docker Image"})," page."]}),"\n",(0,r.jsx)(e.h2,{id:"installing-on-linux",children:"Installing on Linux"}),"\n",(0,r.jsx)(e.h3,{id:"arch-linux",children:"Arch Linux"}),"\n",(0,r.jsxs)(e.p,{children:["You can obtain the ",(0,r.jsx)(e.code,{children:"PKGBUILD"})," to build and install the latest Hangar binary file from the Arch Linux ",(0,r.jsx)(e.a,{href:"https://aur.archlinux.org/packages/hangar",children:"AUR"})," repository."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Install ",(0,r.jsx)(e.code,{children:"hangar"})," by using the ",(0,r.jsx)(e.a,{href:"https://github.com/Jguer/yay",children:"yay"})," AUR helper:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# Build and install from the latest stable release tag.\nyay hangar\n\n# Build and install from the latest upstream main git branch.\nyay hangar-git\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Or you can add the ",(0,r.jsx)(e.a,{href:"https://download.opensuse.org/repositories/home:/StarryWang/Arch/x86_64/",children:"Open Build Service"})," repository to install prebuilt hangar package."]}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Add custom repository in ",(0,r.jsx)(e.code,{children:"/etc/pacman.conf"}),":","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",metastring:'title="/etc/pacman.conf"',children:"[home_StarryWang_Arch]\nSigLevel = Never\nServer = https://download.opensuse.org/repositories/home:/StarryWang/Arch/$arch\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Install hangar:","\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"sudo pacman -Sy\nsudo pacman -S hangar\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"opensuse",children:"openSUSE"}),"\n",(0,r.jsxs)(e.p,{children:["Hangar is available on ",(0,r.jsx)(e.a,{href:"https://build.opensuse.org/package/show/home:StarryWang/Hangar",children:"Open Build Service"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"# openSUSE Tumbleweed\nsudo zypper ar https://download.opensuse.org/repositories/home:StarryWang/openSUSE_Tumbleweed/home:StarryWang.repo\nsudo zypper ref\nsudo zypper in hangar\n"})}),"\n",(0,r.jsx)(e.h2,{id:"building-from-source",children:"Building from Source"}),"\n",(0,r.jsxs)(e.p,{children:["See ",(0,r.jsx)(e.a,{href:"/docs/v1.7/dev/build",children:"Build Hangar"})," to build and install Hangar on your system manually."]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>l});var r=a(7294);const s={},i=r.createContext(s);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);