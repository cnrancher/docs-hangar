"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[790],{73:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=a(5893),s=a(1151);const r={title:"Load \u547d\u4ee4"},l=void 0,d={id:"load/load",title:"Load \u547d\u4ee4",description:"hangar load \u547d\u4ee4\u7528\u4e8e\u5c06 save \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/12-load/01-load.md",sourceDirName:"12-load",slug:"/load/load",permalink:"/zh/docs/v1.7/load/load",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/12-load/01-load.md",tags:[],version:"v1.7",lastUpdatedAt:1712484060,formattedLastUpdatedAt:"2024\u5e744\u67087\u65e5",sidebarPosition:1,frontMatter:{title:"Load \u547d\u4ee4"},sidebar:"docs",previous:{title:"Load",permalink:"/zh/docs/v1.7/load/"},next:{title:"Load Validate \u547d\u4ee4",permalink:"/zh/docs/v1.7/load/validate"}},c={},o=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Harbor 2.X",id:"harbor-2x",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\u6587\u4ef6",id:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\u6587\u4ef6",level:2},{value:"\u5728\u4e0a\u4f20\u955c\u50cf\u65f6\u81ea\u5b9a\u4e49\u955c\u50cf\u7684 Project \u4ee5\u53ca\u955c\u50cf\u5217\u8868\u7684 Registry URL",id:"\u5728\u4e0a\u4f20\u955c\u50cf\u65f6\u81ea\u5b9a\u4e49\u955c\u50cf\u7684-project-\u4ee5\u53ca\u955c\u50cf\u5217\u8868\u7684-registry-url",level:2}];function t(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"hangar load"})," \u547d\u4ee4\u7528\u4e8e\u5c06 ",(0,i.jsx)(n.a,{href:"/docs/v1.7/save/save",children:"save"})," \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e2d\u3002\n\u60a8\u53ef\u4ee5\u5728\u6ca1\u6709\u516c\u7f51\u8fde\u63a5\u7684\u73af\u5883\u4e0a\u4f20\u5bb9\u5668\u955c\u50cf\u81f3\u79c1\u6709\u4ed3\u5e93\uff0c",(0,i.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u652f\u6301\u7528\u4e8e\u79bb\u7ebf\u73af\u5883\uff08Air-Gap\uff09\u573a\u666f\u90e8\u7f72\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Hangar \u81ea ",(0,i.jsx)(n.code,{children:"v1.7.0"})," \u5f00\u59cb\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/v1.7/archive/specification",children:"zip \u538b\u7f29\u5305\u683c\u5f0f"}),"\u3002"]}),(0,i.jsxs)(n.p,{children:["\u82e5\u9700\u8981\u52a0\u8f7d ",(0,i.jsx)(n.code,{children:"tar.gz"})," \u683c\u5f0f\u7684\u955c\u50cf\u5305\u6587\u4ef6\uff0c\u8bf7\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/docs/v1.6/load/load",children:"Hangar v1.6.X"}),"\u3002"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5c06\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u6279\u91cf\u4e0a\u4f20\u81f3",(0,i.jsx)(n.strong,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"}),"\u4e2d\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load \\\n    --file="example_image_list.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u67d0\u4e9b\u955c\u50cf\u5728\u4e0a\u4f20\u65f6\u51fa\u9519\u5931\u8d25\uff0c\u8fd9\u4e9b\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u5c06\u4fdd\u5b58\u5728 ",(0,i.jsx)(n.code,{children:"load-failed.txt"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--failed"})," \u53c2\u6570\u6307\u5b9a\u8f93\u51fa\u7684\u4e0a\u4f20\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u6587\u4ef6\u540d\u3002\u4e4b\u540e\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--file"})," \u53c2\u6570\uff0c\u6307\u5b9a\u4e0a\u4f20\u955c\u50cf\u65f6\u7684\u5217\u8868\u6587\u4ef6\uff0c\u91cd\u65b0\u4e0a\u4f20\u5931\u8d25\u7684\u955c\u50cf\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar load \\\n    --file="load-failed.txt" \\\n    --source="save_example.zip" \\\n    --destination=DESTINATION_REGISTRY_URL \\\n    --arch=amd64,arm64 \\\n    --os=linux \\\n    --jobs=4\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"harbor-2x",children:"Harbor 2.X"}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5",(0,i.jsx)(n.em,{children:"\u76ee\u6807\u955c\u50cf\u4ed3\u5e93"}),"\u4e3a Harbor\uff0cHangar ",(0,i.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u5c06\u5c1d\u8bd5\u81ea\u52a8\u4e3a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u521b\u5efa\u79c1\u6709 ",(0,i.jsx)(n.strong,{children:"Harbor Project"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u82e5 Hangar \u65e0\u6cd5\u81ea\u52a8\u521b\u5efa ",(0,i.jsx)(n.strong,{children:"Harbor Project"}),"\uff0c\u8bf7\u624b\u52a8\u521b\u5efa\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="hanagr load --help"',children:'Load images from zip archive created by \'save\' command to registry server.\n\nThe load command will create Harbor V2 projects for destination registry automatically.\n\nUsage:\n  hangar load -s SAVED_ARCHIVE.zip -d REGISTRY_SERVER [flags]\n  hangar load [command]\n\nExamples:\n# Load images from SAVED_ARCHIVE.zip to REGISTRY SERVER.\nhangar load \\\n        --file IMAGE_LIST.txt \\\n        --source SAVED_ARCHIVE.zip \\\n        --destination REGISTRY_URL \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the loaded images, ensure images were loaded to registry server\n\nFlags:\n  -a, --arch strings             architecture list of images (default [amd64,arm64])\n  -d, --destination string       destination registry url\n  -o, --failed string            file name of the load failed image list (default "load-failed.txt")\n  -f, --file string              image list file (optional: load all images from archive if not provided)\n  -h, --help                     help for load\n  -j, --jobs int                 worker number,copy images parallelly (1-20) (default 1)\n      --os strings               OS list of images (default [linux])\n      --project string           override all destination image projects\n      --skip-login               skip check the destination registry is logged in (used in shell script)\n  -s, --source string            saved archive filename\n      --source-registry string   override the source registry of image list\n      --timeout duration         timeout when save each images (default 10m0s)\n      --tls-verify               require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar load [command] --help" for more information about a command.\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\u6587\u4ef6",children:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"Hangar \u7684\u6b64\u7279\u6027\u5141\u8bb8\u4f9d\u6b21\u4ece\u5305\u542b\u4e0d\u540c\u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u538b\u7f29\u5305\u4e2d\u4e0a\u4f20\u955c\u50cf\u81f3\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e2d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u53c2\u8003\u4ee5\u4e0b\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u51c6\u5907\u4e00\u4efd\u955c\u50cf\u5217\u8868\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"docker.io/library/nginx:1.22\ndocker.io/library/nginx:1.23\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"save"})," \u5206\u522b\u521b\u5efa\u5305\u542b\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u4ec5\u4e0b\u8f7d AMD64 (x86_64) \u67b6\u6784\u5bb9\u5668\u955c\u50cf\nhangar save -f example_image_list.txt -d amd64-images.zip -a amd64\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# \u4ec5\u4e0b\u8f7d ARM64 (aarch64) \u67b6\u6784\u5bb9\u5668\u955c\u50cf\nhangar save -f example_image_list.txt -d arm64-images.zip -a arm64\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5148\u5c06 ",(0,i.jsx)(n.code,{children:"amd64"})," (x86_64) \u67b6\u6784\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar load -s amd64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5df2\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf Manifest \u7d22\u5f15\u5982\u4e0b\uff0c\u4ec5\u5305\u542b AMD64 \u67b6\u6784\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u518d\u5c06\u5305\u542b ",(0,i.jsx)(n.code,{children:"arm64"})," (aarch64) \u67b6\u6784\u7684\u5bb9\u5668\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"hangar load -s arm64-images.zip -d DESTINATION_REGISTRY_URL\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u5df2\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u7684\u955c\u50cf Manifest \u7d22\u5f15\u5c06\u5305\u542b AMD64 \u548c ARM64 \u4e24\u79cd\u67b6\u6784\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar inspect docker://<DESTINATION_REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1230,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    },\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u5728\u4e0a\u4f20\u955c\u50cf\u65f6\u81ea\u5b9a\u4e49\u955c\u50cf\u7684-project-\u4ee5\u53ca\u955c\u50cf\u5217\u8868\u7684-registry-url",children:"\u5728\u4e0a\u4f20\u955c\u50cf\u65f6\u81ea\u5b9a\u4e49\u955c\u50cf\u7684 Project \u4ee5\u53ca\u955c\u50cf\u5217\u8868\u7684 Registry URL"}),"\n",(0,i.jsxs)(n.p,{children:["Hangar \u7684 ",(0,i.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ad8\u7ea7\u53c2\u6570\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49 ",(0,i.jsx)(n.em,{children:"\u76ee\u6807\u955c\u50cf"})," \u7684 Project \u4ee5\u53ca\u6e90\u955c\u50cf\u5217\u8868\u7684 Registry URL\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u4e0a\u4f20\u955c\u50cf\u65f6\uff0c\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--project"})," \u53c2\u6570\u81ea\u5b9a\u4e49\u6240\u6709\u76ee\u6807\u955c\u50cf\u7684 Project\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"save_example.zip"})," \u538b\u7f29\u5305\u6587\u4ef6\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u542b\u6709\u4e0d\u540c\u7684 Project\uff08",(0,i.jsx)(n.code,{children:"library"})," \u548c ",(0,i.jsx)(n.code,{children:"cnrancher"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ hangar archive ls -f save_example.zip\n[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST\n[15:58:34] [INFO] Index version: v1.2.0\n[15:58:34] [INFO] Images:\n   1 | docker.io/library/nginx:latest | arm64,amd64 | linux\n   2 | docker.io/cnrancher/hangar:latest | amd64,arm64 | linux\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5c06\u538b\u7f29\u5305\u4e2d\u7684\u6240\u6709\u955c\u50cf\u4e0a\u4f20\u81f3 Docker Hub \u7684 ",(0,i.jsx)(n.code,{children:"example"})," \u7528\u6237\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ hangar load -s "save_example.zip" -d "docker.io" --project="example"\n[16:00:00] [INFO] Arch List: [amd64,arm64]\n[16:00:26] [INFO] OS List: [linux]\n[16:00:32] [INFO] [IMG:2] Loading [docker.io/cnrancher/hangar:latest] => [docker.io/example/hangar:latest]\n[16:00:32] [INFO] [IMG:1] Loading [docker.io/library/nginx:latest] => [docker.io/example/nginx:latest]\n......\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"--source-registry"})," \u53c2\u6570\uff0c\u81ea\u5b9a\u4e49\u4e0a\u4f20\u955c\u50cf\u65f6\u955c\u50cf\u5217\u8868\u4e2d\u7684 Registry URL\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c",(0,i.jsx)(n.code,{children:"save_example.zip"})," \u538b\u7f29\u5305\u4e2d\u955c\u50cf\u7684 Registry URL \u662f ",(0,i.jsx)(n.code,{children:"127.0.0.1:5000"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:"$ hangar archive ls -f save_example.zip\n[15:58:34] [INFO] Created time: 2023-11-31 00:00:00 +0800 CST\n[15:58:34] [INFO] Index version: v1.2.0\n[15:58:34] [INFO] Images:\n   1 | 127.0.0.1:5000/library/nginx:latest | arm64,amd64 | linux\n   2 | 127.0.0.1:5000/cnrancher/hangar:latest | amd64,arm64 | linux\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u955c\u50cf\u5217\u8868\u6587\u4ef6\u4e2d\uff0c\u955c\u50cf\u7684 Registry URL \u4e3a ",(0,i.jsx)(n.code,{children:"docker.io"}),"\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="example.txt"',children:"docker.io/library/nginx:latest\ndocker.io/library/hangar:latest\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5f53\u6267\u884c ",(0,i.jsx)(n.code,{children:"load"})," \u547d\u4ee4\u5e76\u6307\u5b9a\u4e86\u4e0a\u8ff0\u955c\u50cf\u5217\u8868\u65f6\uff0c\u60a8\u9700\u8981\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"--source-registry='127.0.0.1:5000'"})," \u53c2\u6570\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell-session",children:'$ hangar load -f "example.txt" -s "save_example.zip" --source-registry="127.0.0.1:5000" -d "REGISTRY_URL"\n[16:00:00] [INFO] Arch List: [amd64,arm64]\n[16:00:00] [INFO] OS List: [linux]\n[16:00:00] [INFO] [IMG:2] Loading [127.0.0.1:5000/cnrancher/hangar:latest] => [REGISTRY_URL/cnrancher/hangar:latest]\n[16:00:00] [INFO] [IMG:1] Loading [127.0.0.1:5000/library/nginx:latest] => [REGISTRY_URL/library/nginx:latest]\n......\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>l});var i=a(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);