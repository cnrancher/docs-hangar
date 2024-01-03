"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[8297],{9194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=s(5893),i=s(1151);const a={title:"Hangar Tutorial",sidebar_position:0},d=void 0,l={id:"index",title:"Hangar Tutorial",description:"Commands",source:"@site/versioned_docs/version-v1.6/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.6/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/index.md",tags:[],version:"v1.6",lastUpdatedAt:1704254310,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:0,frontMatter:{title:"Hangar Tutorial",sidebar_position:0},sidebar:"docs",next:{title:"Mirror",permalink:"/docs/v1.6/mirror/"}},t={},o=[{value:"Commands",id:"commands",level:2},{value:"Supported Registries",id:"supported-registries",level:2},{value:"Environment",id:"environment",level:2},{value:"Tests",id:"tests",level:2},{value:"FAQ",id:"faq",level:2},{value:"Build",id:"build",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"mirror/mirror",children:"mirror"}),": Mirror container images between image registries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"save/save",children:"save"}),": Download the container image to the local file and generate a compressed package."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"load/load",children:"load"}),": Load the file created by ",(0,r.jsx)(n.a,{href:"save/save",children:"save"})," command onto the private registry."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"advanced/convert-list",children:"convert-list"}),": Convert image list from ",(0,r.jsx)(n.code,{children:"rancher-images.txt"})," to format used by ",(0,r.jsx)(n.a,{href:"mirror/mirror",children:"mirror"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"mirror/validate",children:"mirror-validate"}),": Validate the mirrored image."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"load/validate",children:"load-validate"}),": Validate the loaded image."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"advanced/sync",children:"sync"}),": Sync extra images into image cache folder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"advanced/compress",children:"compress"}),": Compress the image cache folder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"advanced/decompress",children:"decompress"}),": Decompress tarball created by ",(0,r.jsx)(n.a,{href:"save/save",children:"save"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"advanced/generate-list",children:"generate-list"}),": Generate an image-list by KDM data and Chart repositories."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-registries",children:"Supported Registries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Docker Hub"}),"\n",(0,r.jsxs)(n.li,{children:["Harbor V2","\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Hangar does not support Harbor V1 registry"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Public cloud platforms: Tencent Cloud TCR, Alibaba Cloud ACR, etc"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,r.jsxs)(n.p,{children:["Hangar supports running in container, see ",(0,r.jsx)(n.a,{href:"docker-images",children:"docker-images"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["To install hangar in your system, please install ",(0,r.jsx)(n.code,{children:"skopeo"})," dependency:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Linux / macOS, architecture amd64 / arm64"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Install ",(0,r.jsx)(n.a,{href:"https://github.com/containers/skopeo/blob/main/install",children:"skopeo"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Set environment variables (optional):"}),"\n",(0,r.jsx)(n.p,{children:"When running Mirror / Save / Load, following environment variables sets the username, password and URL of the source / destination registry\n(used in CI scenario)."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SOURCE_USERNAME"}),": Source registry username"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SOURCE_PASSWORD"}),": Source registry password"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SOURCE_REGISTRY"}),": Source registry address"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DEST_USERNAME"}),": Destination registry username"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DEST_PASSWORD"}),": Destination registry password"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DEST_REGISTRY"}),": Destination registry address"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["If not specifying username / password, hangar will also try to obtain the username and password of the registry from the ",(0,r.jsx)(n.code,{children:"~/.docker/config.json"})," file."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If the user name and password are not set, hangar will prompt to enter the user name and password manually."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When the registry server is HTTP or using a self-signed insecure SSL Certificate, you can add ",(0,r.jsx)(n.code,{children:"--tls-verify=false"})," global option to skip tls verify."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"dev/test",children:"test docs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"questions",children:"FAQ"})}),"\n",(0,r.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The stable release can be obtained from the ",(0,r.jsx)(n.a,{href:"https://github.com/cnrancher/hangar/releases",children:"Releases page"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Build executable binaries: ",(0,r.jsx)(n.a,{href:"dev/build",children:"build"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var r=s(7294);const i={},a=r.createContext(i);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);