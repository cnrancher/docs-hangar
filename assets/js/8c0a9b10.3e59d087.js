"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1405],{9377:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(5893),r=i(1151);const a={title:"Mirror Validate Command"},s=void 0,o={id:"mirror/validate",title:"Mirror Validate Command",description:"The mirror-validate subcommand is for validating the mirrored container images.",source:"@site/versioned_docs/version-v1.6/10-mirror/02-validate.md",sourceDirName:"10-mirror",slug:"/mirror/validate",permalink:"/docs/v1.6/mirror/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/10-mirror/02-validate.md",tags:[],version:"v1.6",lastUpdatedAt:1712484060,formattedLastUpdatedAt:"Apr 7, 2024",sidebarPosition:2,frontMatter:{title:"Mirror Validate Command"},sidebar:"docs",previous:{title:"Mirror Command",permalink:"/docs/v1.6/mirror/mirror"},next:{title:"Save",permalink:"/docs/v1.6/save/"}},d={},c=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"mirror-validate"})," subcommand is for validating the mirrored container images."]}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.p,{children:["After mirror images, verify the mirrored images to ensure that the images have been mirrored to the destination registry,\nthe validate failed images will output into ",(0,n.jsx)(t.code,{children:"mirror-validate-failed.txt"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["The input image list format should be same as the format used by the ",(0,n.jsx)(t.a,{href:"/docs/v1.6/mirror/mirror",children:"Mirror"})," command."]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"hangar mirror-validate -f ./list.txt -j 10\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-txt",children:"Usage:\n  hangar mirror-validate [flags]\n\nExamples:\n  hangar mirror-validate -f MIRROR_IMAGE_LIST.txt -s SOURCE -d DESTINATION\n\nFlags:\n  -a, --arch string              architecture list of images, separate with ',' (default \"amd64,arm64\")\n      --default-project string   project name (also called 'namespace') when destination image project is empty (default \"library\")\n  -d, --destination string       override the destination registry defined in image list\n  -o, --failed string            file name of the mirror validate failed image list (default \"mirror-validate-failed.txt\")\n  -f, --file string              image list file (should be 'mirror' format)\n  -h, --help                     help for mirror-validate\n  -j, --jobs int                 worker number, concurrent mode if larger than 1, max 20 (default 1)\n      --os string                OS list of images, separate with ',' (default \"linux,windows\")\n  -s, --source string            override the source registry defined in image list\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n"})}),"\n",(0,n.jsx)(t.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Error: ",(0,n.jsx)(t.code,{children:"Validate failed: destination manifest MIME type unknown: application/vnd.docker.distribution.manifest.v2+json"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["This error will occur when the destination image MediaType is not ",(0,n.jsx)(t.code,{children:'"application/vnd.docker.distribution.manifest.list.v2+json"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"skopeo inspect docker://<dest-image>:<tag> --raw"})," to check the MediaType type of the destination image."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Error: ",(0,n.jsx)(t.code,{children:"destination manifest does not exists"}),", indicates that the destination image does not exist, please check the destination image."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Error: ",(0,n.jsx)(t.code,{children:"destination manifest list length should be 1"})," indicates that the Manifest of the source image contains only one image, so there should be only one image in the Manifest List of the destination image. If there are multiple images in the Manifest List of the destination image, this error will appear."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"skopeo inspect docker://<dest-image>:<tag> --raw"})," to view the Manifest List of the destination image."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Error: ",(0,n.jsx)(t.code,{children:"source * != dest *"})," indicates that some information of the source image does not match the destination image, such as Arch, Variant, OS, etc."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Encountered the following error:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:'11:22:33 [ERRO] [M_ID:1] srcSpec: [\n{\n      "digest": "sha256:9997c2f450f51e5c5402854899c42354b7968ca8298815df812b00409533527c",\n      "platform": {\n            "architecture": "amd64",\n            "os": "linux"\n      }\n}\n]\n11:22:33 [ERRO] [M_ID:1] dstSpec: [\n{\n      "digest": "sha256:8ace038ea3a18057e865b81e5ccd12d75ddeec0fdbd331555d877d39ac3f45bb",\n      "platform": {\n            "architecture": "amd64",\n            "os": "linux"\n      }\n}\n]\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Indicates that the Manifest List of the source image (srcSpec) does not match the Manifest List of the destination image (dstSpec). If the ",(0,n.jsx)(t.code,{children:"digest"})," does not match, it means that the upstream image has been updated, and the image in the private registry has not been updated. You can re-run ",(0,n.jsx)(t.code,{children:"mirror "})," command; if other fields do not match (",(0,n.jsx)(t.code,{children:"variant"}),", ",(0,n.jsx)(t.code,{children:"os.version"}),"), etc., you can also try to fix it by re-running the ",(0,n.jsx)(t.code,{children:"mirror"})," command."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>s});var n=i(7294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);