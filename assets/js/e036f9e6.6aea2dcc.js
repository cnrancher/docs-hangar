"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[552],{7650:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>c});var l=i(5893),s=i(1151);const d={title:"Build Hangar"},a=void 0,r={id:"dev/build",title:"Build Hangar",description:"Hangar is written in Golang.",source:"@site/versioned_docs/version-v1.7/19-dev/01-build.md",sourceDirName:"19-dev",slug:"/dev/build",permalink:"/docs/v1.7/dev/build",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/19-dev/01-build.md",tags:[],version:"v1.7",lastUpdatedAt:1710300126,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:1,frontMatter:{title:"Build Hangar"},sidebar:"docs",previous:{title:"Development",permalink:"/docs/v1.7/dev/"},next:{title:"Automation Test",permalink:"/docs/v1.7/dev/test"}},t={},c=[{value:"Building in a container",id:"building-in-a-container",level:2},{value:"Building without a container",id:"building-without-a-container",level:2},{value:"Disable CGO",id:"disable-cgo",level:2}];function o(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"Hangar is written in Golang."}),"\n",(0,l.jsx)(e.p,{children:"You can follow the below instructions to build hangar executable binary."}),"\n",(0,l.jsx)(e.h2,{id:"building-in-a-container",children:"Building in a container"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Requirements:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Ensure ",(0,l.jsx)(e.code,{children:"docker"}),", ",(0,l.jsx)(e.code,{children:"curl"}),", ",(0,l.jsx)(e.code,{children:"make"})," installed."]}),"\n",(0,l.jsx)(e.li,{children:"Hangar only supports Linux & Unix systems."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Clone the source code."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/hangar.git && cd hangar\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["Build hangar in container by executing ",(0,l.jsx)(e.code,{children:"make"})," commands:"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# Get help information\nmake help\n\n# Build hangar in container\nmake build\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["The built binary file is available in ",(0,l.jsx)(e.code,{children:"bin"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"building-without-a-container",children:"Building without a container"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Install following build dependencies:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Golang >= ",(0,l.jsx)(e.code,{children:"1.21.3"})]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sh",children:"# Arch Linux\nsudo pacman -S base-devel gpgme device-mapper btrfs-progs\n\n# Ubuntu\nsudo apt install libgpgme-dev libassuan-dev libbtrfs-dev libdevmapper-dev pkg-config\n\n# macOS\nbrew install gpgme\n\n# openSUSE\nsudo zypper install libgpgme-devel device-mapper-devel libbtrfs-devel glib2-devel\n\n# Fedora\nsudo dnf install gpgme-devel libassuan-devel btrfs-progs-devel device-mapper-devel\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Clone the source code."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"git clone https://github.com/hangar.git && cd hangar\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Build hangar by execute build scripts manually:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"./scripts/build.sh\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["The built binary file is available in the ",(0,l.jsx)(e.code,{children:"bin"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"disable-cgo",children:"Disable CGO"}),"\n",(0,l.jsxs)(e.p,{children:["You can add ",(0,l.jsx)(e.code,{children:"DISABLE_CGO=1"})," environment variable when building hangar with CGO disabled."]}),"\n",(0,l.jsxs)(e.admonition,{type:"note",children:[(0,l.jsx)(e.p,{children:"Keep in mind that the resulting binary is unsupported and might crash randomly. Only use if you know what you're doing!"}),(0,l.jsxs)(e.p,{children:["Refer: ",(0,l.jsx)(e.a,{href:"https://github.com/containers/skopeo/blob/main/install.md#building-a-static-binary",children:"skopeo - Building a static binary"})]})]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>r,a:()=>a});var l=i(7294);const s={},d=l.createContext(s);function a(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);