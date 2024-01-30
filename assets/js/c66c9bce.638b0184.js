"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3626],{3596:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(5893),n=t(1151);const a={title:"Mirror Command",slug:"/mirror/mirror"},o="Mirror",s={id:"mirror/mirror",title:"Mirror Command",description:"Image List Format",source:"@site/versioned_docs/version-v1.6/10-mirror/01-mirror.md",sourceDirName:"10-mirror",slug:"/mirror/mirror",permalink:"/docs/v1.6/mirror/mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/10-mirror/01-mirror.md",tags:[],version:"v1.6",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:1,frontMatter:{title:"Mirror Command",slug:"/mirror/mirror"},sidebar:"docs",previous:{title:"Mirror",permalink:"/docs/v1.6/mirror/"},next:{title:"Mirror Validate Command",permalink:"/docs/v1.6/mirror/validate"}},d={},l=[{value:"Image List Format",id:"image-list-format",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Harbor V2",id:"harbor-v2",level:3},{value:"Usage",id:"usage",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"mirror",children:"Mirror"}),"\n",(0,i.jsx)(r.h2,{id:"image-list-format",children:"Image List Format"}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["The image list format used by ",(0,i.jsx)(r.code,{children:"mirror"})," and ",(0,i.jsx)(r.code,{children:"mirror-validate"})," command are different from ",(0,i.jsx)(r.code,{children:"rancher-images.txt"}),". You can use ",(0,i.jsx)(r.a,{href:"/docs/v1.6/advanced/convert-list",children:"convert-list"})," command to convert the image list format."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Each line contains ",(0,i.jsx)(r.strong,{children:'"[source image] [destination image] [TAG]"'}),", separated by spaces:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-txt",children:"# <SOURCE> <DEST> <TAG>\ndocker.io/hello-world private.io/library/hello-world latest\n"})}),"\n",(0,i.jsx)(r.p,{children:"The registry URL of images is not force required and can be empty:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-txt",children:"# <SOURCE> <DEST> <TAG>\nhello-world library/hello-world latest\n"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["Line starts with ",(0,i.jsx)(r.code,{children:"//"})," or ",(0,i.jsx)(r.code,{children:"#"})," will be treated as a comment."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(r.p,{children:["Mirror images in the ",(0,i.jsx)(r.code,{children:"image-list.txt"}),", use ",(0,i.jsx)(r.code,{children:"-f"})," to specify the image list file name, and ",(0,i.jsx)(r.code,{children:"-d"})," to specify the destination registry URL."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sh",children:"hangar mirror -f ./image-list.txt -d <DESTINATION_REGISTRY_URL>\n"})}),"\n",(0,i.jsx)(r.h3,{id:"harbor-v2",children:"Harbor V2"}),"\n",(0,i.jsxs)(r.p,{children:["If the destination image registry is Harbor V2, you can use the ",(0,i.jsx)(r.code,{children:"--repo-type=harbor"})," parameter to automatically create the Harbor project (namespace)."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["Add ",(0,i.jsx)(r.code,{children:"--harbor-https=false"})," when Harbor registry is HTTP."]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["If the image in the image list does not have Project defined during Save (such as ",(0,i.jsx)(r.code,{children:"mysql:8.0"}),", ",(0,i.jsx)(r.code,{children:"busybox:latest"}),"), then the ",(0,i.jsx)(r.code,{children:"library"})," project will be automatically added to it during the Load process (",(0,i.jsx)(r.code,{children:"library/mysql:8.0"}),", ",(0,i.jsx)(r.code,{children:"library/busybox:latest"}),")."]}),"\n",(0,i.jsxs)(r.p,{children:["You can use ",(0,i.jsx)(r.code,{children:"--default-project=library"})," parameter to specify the name of the added Project (default is ",(0,i.jsx)(r.code,{children:"library"}),")."]}),"\n",(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-txt",children:"Usage:\n  hangar mirror [flags]\n\nExamples:\n  hangar mirror -f MIRROR_IMAGE_LIST.txt -s SOURCE_REGISTRY -d DEST_REGISTRY\n\nFlags:\n  -a, --arch string              architecture list of images, separate with ',' (default \"amd64,arm64\")\n      --default-project string   project name (also called 'namespace') when destination image project is empty (default \"library\")\n  -d, --destination string       override the destination registry defined in image list\n  -o, --failed string            file name of the mirror failed image list (default \"mirror-failed.txt\")\n  -f, --file string              image list file (should be 'mirror' format)\n      --harbor-https             use https when create harbor project (default true)\n  -h, --help                     help for mirror\n  -j, --jobs int                 worker number, concurrent mode if larger than 1 (default 1)\n      --no-arch-os-fail          image copy failed when the OS and architecture of the image are not supported\n      --os string                OS list of images, separate with ',' (default \"linux,windows\")\n      --repo-type string         repository type of dest registry server (can be 'harbor' or empty string)\n  -s, --source string            override the source registry defined in image list\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>o});var i=t(7294);const n={},a=i.createContext(n);function o(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);