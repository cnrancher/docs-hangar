"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9951],{7574:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=r(5893),n=r(1151);const s={title:"Load Command"},o="Load",d={id:"load/load",title:"Load Command",description:"The Load command uploads the saved file created by the save command into the destination registry server, and creates manifest list for imported images.",source:"@site/versioned_docs/version-v1.6/12-load/01-load.md",sourceDirName:"12-load",slug:"/load/load",permalink:"/docs/v1.6/load/load",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/12-load/01-load.md",tags:[],version:"v1.6",lastUpdatedAt:1701769518,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:1,frontMatter:{title:"Load Command"},sidebar:"docs",previous:{title:"Load",permalink:"/docs/v1.6/load/"},next:{title:"Load Validate Command",permalink:"/docs/v1.6/load/validate"}},i={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Harbor V2",id:"harbor-v2",level:3},{value:"Usage",id:"usage",level:2},{value:"Load the splitted compressed files",id:"load-the-splitted-compressed-files",level:2},{value:"Load from different architectures tarball",id:"load-from-different-architectures-tarball",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"load",children:"Load"}),"\n",(0,t.jsxs)(a.p,{children:["The Load command uploads the saved file created by the ",(0,t.jsx)(a.a,{href:"/docs/v1.6/save/save",children:"save"})," command into the destination registry server, and creates manifest list for imported images."]}),"\n",(0,t.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(a.p,{children:["Load the ",(0,t.jsx)(a.code,{children:"tar.gz"})," tarball created by the ",(0,t.jsx)(a.code,{children:"save"})," command to ",(0,t.jsx)(a.code,{children:"docker.io"})," registry server:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"hangar load -s ./saved-images.tar.gz -d docker.io\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Use ",(0,t.jsx)(a.code,{children:"--compress"})," to specify the input file format when the not ",(0,t.jsx)(a.code,{children:"tar.gz"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"# Load images from the decompressed cache directory\nhangar load -s ./saved-image-cache -d docker.io --compress=dir\n\n# Load images from tar.zstd tarball\nhangar load -s ./saved-images.tar.zstd -d docker.io --compress=zstd\n"})}),"\n",(0,t.jsxs)(a.p,{children:["If the loaded files were splited into multi-parts by save command, the Load command will identify the ",(0,t.jsx)(a.code,{children:".partX"})," suffix automatically:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x   6 root  root   192B  1  6 18:00 .\ndrwxr-x---+ 70 root  root   2.2K  1  6 18:00 ..\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part0\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part1\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part2\n-rw-r--r--   1 root  root   5.3M  1  6 17:59 saved-images.tar.gz.part3\n\n$ hangar load -s saved-images.tar.gz -d private.registry.io\n18:01:28 [INFO] Decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n......\n'})}),"\n",(0,t.jsx)(a.h3,{id:"harbor-v2",children:"Harbor V2"}),"\n",(0,t.jsxs)(a.p,{children:["If the destination image registry is Harbor V2, you can use the ",(0,t.jsx)(a.code,{children:"--repo-type=harbor"})," parameter to automatically create the Harbor project (namespace)."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["Add ",(0,t.jsx)(a.code,{children:"--harbor-https=false"})," when Harbor registry is HTTP."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["If the image in the image list does not have Project defined during save (such as ",(0,t.jsx)(a.code,{children:"mysql:8.0"}),", ",(0,t.jsx)(a.code,{children:"busybox:latest"}),"), then the ",(0,t.jsx)(a.code,{children:"library"})," project will be automatically added to it during the Load process (",(0,t.jsx)(a.code,{children:"library/mysql:8.0"}),", ",(0,t.jsx)(a.code,{children:"library/busybox:latest"}),")."]}),"\n",(0,t.jsxs)(a.p,{children:["You can use ",(0,t.jsx)(a.code,{children:"--default-project=library"})," parameter to specify the name of the added Project (default is ",(0,t.jsx)(a.code,{children:"library"}),")."]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",children:"Usage:\n  hangar load [flags]\n\nExamples:\n  hangar load -s SAVED_FILE.tar.gz -d REGISTRY_URL\n\nFlags:\n  -c, --compress string          compress format, can be 'gzip', 'zstd' or 'dir' (default \"gzip\")\n      --default-project string   project name (also called 'namespace') when destination image project is empty (default \"library\")\n  -d, --destination string       destination registry\n  -o, --failed string            file name of the load failed image list (default \"load-failed.txt\")\n      --harbor-https             use https when create harbor project (default true)\n  -h, --help                     help for load\n  -j, --jobs int                 worker number, concurrent mode if larger than 1, max 20 (default 1)\n      --repo-type string         repository type, can be 'harbor' or empty\n  -s, --source string            saved file to load (need to use '--compress' to specify the file format if not gzip)\n\nGlobal Flags:\n    --debug        enable debug output\n    --tls-verify   enable https tls verify (default true)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"load-the-splitted-compressed-files",children:"Load the splitted compressed files"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x 6 root root 192B 1 6 18:00 .\ndrwxr-x---+ 70 root root 2.2K 1 6 18:00 ..\n-rw-r--r-- 1 root root 50M 1 6 17:59 saved-images.tar.gz.part0\n-rw-r--r-- 1 root root 50M 1 6 17:59 saved-images.tar.gz.part1\n-rw-r--r-- 1 root root 50M 1 6 17:59 saved-images.tar.gz.part2\n-rw-r--r-- 1 root root 5.3M 1 6 17:59 saved-images.tar.gz.part3\n\n$ hangar load -s saved-images.tar.gz -d private.registry.io\n18:01:28 [INFO] Decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n\u2026\n'})}),"\n",(0,t.jsx)(a.h2,{id:"load-from-different-architectures-tarball",children:"Load from different architectures tarball"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["Support from ",(0,t.jsx)(a.code,{children:"v1.6.0"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:'# example image list\ncat list.txt\ndocker.io/library/nginx:1.22\ndocker.io/library/nginx:1.23\n\n# save AMD64 architecture images only\nhangar save -f list.txt -a "amd64" -d amd64-images.tar.gz\n\n# save ARM64 arhitexture images only\nhangar save -f list.txt -a "arm64" -d arm64-images.tar.gz\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Load command supports importing ",(0,t.jsx)(a.code,{children:"amd64-images.tar.gz"})," and ",(0,t.jsx)(a.code,{children:"arm64-images.tar.gz"})," in this example to the registry server, and the finally generated manifest list contains two architectures."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:'# Load the AMD64 tarball to Registry Server firstly\nhangar load -s amd64-images.tar.gz -d <REGISTRY_URL>\n\n# The manifest list of loaded image only contains the AMD64 architecture\nskopeo inspect docker://<REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n\n# Load the ARM64 image tarball to Registry Server\nhangar load -s arm64-images.tar.gz -d <REGISTRY_URL>\n\n# After importing the image tarball of the two architectures,\n# the manifest list including AMD64 and ARM64 architectures\nskopeo inspect docker://<REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1230,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    },\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>d,a:()=>o});var t=r(7294);const n={},s=t.createContext(n);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);