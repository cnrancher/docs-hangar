"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7173],{94:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=n(5893),r=n(1151);const t={title:"Load Command"},s=void 0,o={id:"load/load",title:"Load Command",description:"The hangar load command loads images from zip archive file created by save command to registry server, it allows to upload container images to registry server without a public internet connection,",source:"@site/versioned_docs/version-v1.7/12-load/01-load.md",sourceDirName:"12-load",slug:"/load/load",permalink:"/docs/v1.7/load/load",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/12-load/01-load.md",tags:[],version:"v1.7",sidebarPosition:1,frontMatter:{title:"Load Command"},sidebar:"docs",previous:{title:"Load",permalink:"/docs/v1.7/load/"},next:{title:"Load Validate Command",permalink:"/docs/v1.7/load/validate"}},l={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Harbor 2.X",id:"harbor-2x",level:2},{value:"Usage",id:"usage",level:2},{value:"Load from different architecture archives",id:"load-from-different-architecture-archives",level:2}];function c(e){const a={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"hangar load"})," command loads images from zip archive file created by ",(0,i.jsx)(a.a,{href:"/docs/v1.7/save/save",children:"save"})," command to registry server, it allows to upload container images to registry server without a public internet connection,\nand the ",(0,i.jsx)(a.code,{children:"load"})," command can be used in Air-Gapped (offline) installation scenarios."]}),"\n",(0,i.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(a.p,{children:["Use following command to load multiple container images from archive file created by ",(0,i.jsx)(a.a,{href:"/docs/v1.7/save/save#quick-start",children:"save"})," command to the ",(0,i.jsx)(a.em,{children:"destination registry server"})," parallelly."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load \\\n    --file="example_image_list.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n",(0,i.jsx)(a.h2,{id:"harbor-2x",children:"Harbor 2.X"}),"\n",(0,i.jsxs)(a.p,{children:["Hangar will try to create private ",(0,i.jsx)(a.strong,{children:"Harbor Project"})," automatically on ",(0,i.jsx)(a.code,{children:"load"})," command if the destination registry is harbor."]}),"\n",(0,i.jsxs)(a.p,{children:["You need to create ",(0,i.jsx)(a.strong,{children:"Harbor Project"})," manually if Hangar can't create the project automatically, or the image will fail to copy."]}),"\n",(0,i.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-txt",metastring:'title="hanagr load --help"',children:'Load images from zip archive created by \'save\' command to registry server.\n\nThe load command will create Harbor V2 projects for destination registry automatically.\n\nUsage:\n  hangar load -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]\n  hangar load [command]\n\nExamples:\n# Load images from SAVED_ARCHIVE.zip to REGISTRY SERVER.\nhangar load \\\n        --file IMAGE_LIST.txt \\\n        --source SAVED_ARCHIVE.zip \\\n        --destination REGISTRY_URL \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the loaded images, ensure images were loaded to registry server\n\nFlags:\n  -a, --arch strings             architecture list of images (default [amd64,arm64])\n  -d, --destination string       destination registry url\n  -o, --failed string            file name of the load failed image list (default "load-failed.txt")\n  -f, --file string              image list file (optional: load all images from archive if not provided)\n  -h, --help                     help for load\n  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)\n      --os strings               OS list of images (default [linux])\n      --project string           override all destination image projects\n      --skip-login               skip check the destination registry is logged in (used in shell script)\n  -s, --source string            saved archive filename\n      --source-registry string   override the source registry of image list\n      --timeout duration         timeout when save each images (default 10m0s)\n      --tls-verify               require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar load [command] --help" for more information about a command.\n'})}),"\n",(0,i.jsx)(a.h2,{id:"load-from-different-architecture-archives",children:"Load from different architecture archives"}),"\n",(0,i.jsx)(a.p,{children:"This feature allows you to sequentially load container images from multiple archive files containing different architectures."}),"\n",(0,i.jsx)(a.p,{children:"Here is an example:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Prepare an image list file."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"docker.io/library/nginx:1.22\ndocker.io/library/nginx:1.23\n"})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Save images by different architectures."}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# Save AMD64 (x86_64) architecture images only\nhangar save -f example_image_list.txt -d amd64-images.zip -a amd64\n"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"# Save ARM64 (aarch64) architecture images only\nhangar save -f example_image_list.txt -d arm64-images.zip -a arm64\n"})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Load the ",(0,i.jsx)(a.code,{children:"amd64"})," (x86_64) architecture images from archive file first."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"hangar load -s amd64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(a.p,{children:"The manifest of the loaded images only contains the AMD64 architecture:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Then load the ",(0,i.jsx)(a.code,{children:"arm64"})," (aarch64) architecture images from archive file."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"hangar load -s arm64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(a.p,{children:"Now the manifest of the loaded images contains both AMD64 and ARM64 architectures:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1230,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    },\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>s});var i=n(7294);const r={},t=i.createContext(r);function s(e){const a=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:a},e.children)}}}]);