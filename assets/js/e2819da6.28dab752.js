"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7697],{843:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=a(4848),r=a(8453);const s={title:"Load Command"},t=void 0,o={id:"load/load",title:"Load Command",description:"The hangar load command loads images from zip archive file created by save command to registry server, it allows to upload container images to registry server without a public internet connection,",source:"@site/versioned_docs/version-v1.8/12-load/01-load.md",sourceDirName:"12-load",slug:"/load/load",permalink:"/docs/v1.8/load/load",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/12-load/01-load.md",tags:[],version:"v1.8",lastUpdatedAt:1730474969e3,sidebarPosition:1,frontMatter:{title:"Load Command"},sidebar:"docs",previous:{title:"Load",permalink:"/docs/v1.8/load/"},next:{title:"Load Validate Command",permalink:"/docs/v1.8/load/validate"}},l={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Harbor 2.X",id:"harbor-2x",level:2},{value:"Usage",id:"usage",level:2},{value:"Load from different architecture archives",id:"load-from-different-architecture-archives",level:2},{value:"Override the project name or source registry URL when loading images",id:"override-the-project-name-or-source-registry-url-when-loading-images",level:2},{value:"Sign images with sigstore private key when load",id:"sign-images-with-sigstore-private-key-when-load",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"hangar load"})," command loads images from zip archive file created by ",(0,i.jsx)(n.a,{href:"/docs/v1.8/save/save",children:"save"})," command to registry server, it allows to upload container images to registry server without a public internet connection,\nand the ",(0,i.jsx)(n.code,{children:"load"})," command can be used in Air-Gapped (offline) installation scenarios."]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Hangar chaned to use the ",(0,i.jsx)(n.a,{href:"/docs/v1.8/archive/specification",children:"zip archive format"})," from version ",(0,i.jsx)(n.code,{children:"v1.7.0"}),"."]}),(0,i.jsxs)(n.p,{children:["You can still use the ",(0,i.jsx)(n.a,{href:"/docs/v1.6/load/load",children:"hangar v1.6.X"})," to load the ",(0,i.jsx)(n.code,{children:"tar.gz"})," format tarball."]})]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use following command to load multiple container images from archive file created by ",(0,i.jsx)(n.a,{href:"/docs/v1.8/save/save#quick-start",children:"save"})," command to the ",(0,i.jsx)(n.em,{children:"destination registry server"})," parallelly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load \\\n    --file="example_image_list.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If error occured when loading some images from the archive file, the load failed images will output to ",(0,i.jsx)(n.code,{children:"load-failed.txt"})," by default."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"--failed"})," option to specify the output file of the load failed images, and then use the ",(0,i.jsx)(n.code,{children:"--file"})," option of ",(0,i.jsx)(n.code,{children:"hangar load"})," command to upload only these failed images from the archive file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load \\\n    --file="load-failed.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"harbor-2x",children:"Harbor 2.X"}),"\n",(0,i.jsxs)(n.p,{children:["Hangar will try to create private ",(0,i.jsx)(n.strong,{children:"Harbor Project"})," automatically on ",(0,i.jsx)(n.code,{children:"load"})," command if the destination registry is harbor."]}),"\n",(0,i.jsxs)(n.p,{children:["You need to create ",(0,i.jsx)(n.strong,{children:"Harbor Project"})," manually if Hangar can't create the project automatically, or the image will fail to copy."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="hanagr load --help"',children:'Load images from zip archive created by \'save\' command to registry server.\n\nThe load command will create Harbor V2 projects for destination registry automatically.\n\nUsage:\n  hangar load -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]\n  hangar load [command]\n\nExamples:\n# Load images from SAVED_ARCHIVE.zip to REGISTRY server\n# and sign the loaded images by sigstore private key file.\nhangar load \\\n        --file IMAGE_LIST.txt \\\n        --source SAVED_ARCHIVE.zip \\\n        --destination REGISTRY_URL \\\n        --arch amd64,arm64 \\\n        --os linux \\\n        --sigstore-private-key SIGSTORE.key\n\nAvailable Commands:\n  validate    Validate the loaded images, ensure images were loaded to registry server\n\nFlags:\n  -a, --arch strings                      architecture list of images (default [amd64,arm64])\n  -d, --destination string                destination registry url\n  -o, --failed string                     file name of the load failed image list (default "load-failed.txt")\n  -f, --file string                       image list file (optional: load all images from archive if not provided)\n  -h, --help                              help for load\n  -j, --jobs int                          worker number, copy images parallelly (1-20) (default 1)\n      --os strings                        OS list of images (default [linux])\n      --project string                    override all destination image projects\n      --sigstore-passphrase-file string   passphrase file of the sigstore private key\n      --sigstore-private-key string       sign images by sigstore private key when mirroring\n      --skip-login                        skip check the destination registry is logged in (used in shell script)\n  -s, --source string                     saved archive filename\n      --source-registry string            override the source registry of image list\n      --timeout duration                  timeout when save each images (default 10m0s)\n      --tls-verify                        require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar load [command] --help" for more information about a command.\n'})}),"\n",(0,i.jsx)(n.h2,{id:"load-from-different-architecture-archives",children:"Load from different architecture archives"}),"\n",(0,i.jsx)(n.p,{children:"This feature allows you to sequentially load container images from multiple archive files containing different architectures."}),"\n",(0,i.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prepare an image list file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"docker.io/library/nginx:1.22\ndocker.io/library/nginx:1.23\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Save images by different architectures."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Save AMD64 (x86_64) architecture images only\nhangar save -f example_image_list.txt -d amd64-images.zip -a amd64\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Save ARM64 (aarch64) architecture images only\nhangar save -f example_image_list.txt -d arm64-images.zip -a arm64\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Load the ",(0,i.jsx)(n.code,{children:"amd64"})," (x86_64) architecture images from archive file first."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar load -s amd64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(n.p,{children:"The manifest of the loaded images only contains the AMD64 architecture:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Then load the ",(0,i.jsx)(n.code,{children:"arm64"})," (aarch64) architecture images from archive file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar load -s arm64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now the manifest of the loaded images contains both AMD64 and ARM64 architectures:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1230,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    },\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"override-the-project-name-or-source-registry-url-when-loading-images",children:"Override the project name or source registry URL when loading images"}),"\n",(0,i.jsxs)(n.p,{children:["Hangar ",(0,i.jsx)(n.code,{children:"load"})," command provides some advanced options to customize the project name or source registry URL of the image list file when loading images."]}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"--project"})," option to override all destination image projects when loading images."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The images in example ",(0,i.jsx)(n.code,{children:"save_example.zip"})," archive file contains different projects (",(0,i.jsx)(n.code,{children:"library"})," and ",(0,i.jsx)(n.code,{children:"cnrancher"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ hangar archive ls -f save_example.zip\n[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST\n[15:58:34] [INFO] Index version: v1.2.0\n[15:58:34] [INFO] Images:\n   1 | docker.io/library/nginx:latest | arm64,amd64 | linux\n   2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Load all images in the archive file to the Docker Hub ",(0,i.jsx)(n.code,{children:"example"})," user."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ hangar load -s "save_example.zip" -d "docker.io" --project="example"\n[16:00:00] [INFO] Arch List: [amd64,arm64]\n[16:00:26] [INFO] OS List: [linux]\n[16:00:32] [INFO] [IMG:2] Loading [docker.io/cnrancher/hangar:latest] => [docker.io/example/hangar:latest]\n[16:00:32] [INFO] [IMG:1] Loading [docker.io/library/nginx:latest] => [docker.io/example/nginx:latest]\n......\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"--source-registry"})," option to override the registry URL of the image list file when loading images from archive file with an image list file specified."]}),"\n",(0,i.jsx)(n.p,{children:"Here is an example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The registry URL of images in the example ",(0,i.jsx)(n.code,{children:"save_example.zip"})," file is ",(0,i.jsx)(n.code,{children:"127.0.0.1:5000"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ hangar archive ls -f save_example.zip\n[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST\n[15:58:34] [INFO] Index version: v1.2.0\n[15:58:34] [INFO] Images:\n   1 | 127.0.0.1:5000/library/nginx:latest | arm64,amd64 | linux\n   2 | 127.0.0.1:5000/cnrancher/hangar:latest | amd64,arm64 | linux\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The registry URL of images in the example image list file is ",(0,i.jsx)(n.code,{children:"docker.io"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="example.txt"',children:"docker.io/library/nginx:latest\ndocker.io/library/hangar:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You need to add ",(0,i.jsx)(n.code,{children:"--source-registry='127.0.0.1:5000'"})," option when loading images from the archive file with the ",(0,i.jsx)(n.code,{children:"example.txt"})," image list file specified."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ hangar load -f "example.txt" -s "save_example.zip" --source-registry="127.0.0.1:5000" -d "REGISTRY_URL"\n[16:00:00] [INFO] Arch List: [amd64,arm64]\n[16:00:00] [INFO] OS List: [linux]\n[16:00:00] [INFO] [IMG:2] Loading [127.0.0.1:5000/cnrancher/hangar:latest] => [REGISTRY_URL/cnrancher/hangar:latest]\n[16:00:00] [INFO] [IMG:1] Loading [127.0.0.1:5000/library/nginx:latest] => [REGISTRY_URL/library/nginx:latest]\n......\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"sign-images-with-sigstore-private-key-when-load",children:"Sign images with sigstore private key when load"}),"\n",(0,i.jsxs)(n.p,{children:["Starting from ",(0,i.jsx)(n.code,{children:"v1.8.0"}),", you can specify the sigstore private key by with ",(0,i.jsx)(n.code,{children:"--sigstore-private-key"})," option to sign images when loading images from archive file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar load \\\n    --source "save_example.zip" \\\n    --destination REGISTRY_URL \\\n    --sigstore-private-key "sigstore.key"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>o});var i=a(6540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);