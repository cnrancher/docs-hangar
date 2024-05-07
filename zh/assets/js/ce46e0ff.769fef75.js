"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7916],{2332:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>t,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=r(5893),s=r(1151);const d={title:"Load \u547d\u4ee4"},t=void 0,o={id:"load/load",title:"Load \u547d\u4ee4",description:"Load \u547d\u4ee4\u5c06 Save \u547d\u4ee4\u4fdd\u5b58\u7684\u955c\u50cf\u6587\u4ef6\u5bfc\u5165\u81f3\u76ee\u6807 Registry \u4ed3\u5e93\u4e2d\uff0c\u5e76\u4e3a\u5bfc\u5165\u7684\u955c\u50cf\u521b\u5efa Manifest \u5217\u8868\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/12-load/01-load.md",sourceDirName:"12-load",slug:"/load/load",permalink:"/zh/docs/v1.6/load/load",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/12-load/01-load.md",tags:[],version:"v1.6",lastUpdatedAt:1715074519,formattedLastUpdatedAt:"2024\u5e745\u67087\u65e5",sidebarPosition:1,frontMatter:{title:"Load \u547d\u4ee4"},sidebar:"docs",previous:{title:"Load",permalink:"/zh/docs/v1.6/load/"},next:{title:"Load Validate \u547d\u4ee4",permalink:"/zh/docs/v1.6/load/validate"}},i={},c=[{value:"QuickStart",id:"quickstart",level:2},{value:"Harbor V2",id:"harbor-v2",level:3},{value:"Parameters",id:"parameters",level:2},{value:"\u52a0\u8f7d\u5206\u5377\u538b\u7f29\u5305",id:"\u52a0\u8f7d\u5206\u5377\u538b\u7f29\u5305",level:2},{value:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u955c\u50cf\u5305",id:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u955c\u50cf\u5305",level:2}];function l(e){const a={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Load \u547d\u4ee4\u5c06 Save \u547d\u4ee4\u4fdd\u5b58\u7684\u955c\u50cf\u6587\u4ef6\u5bfc\u5165\u81f3\u76ee\u6807 Registry \u4ed3\u5e93\u4e2d\uff0c\u5e76\u4e3a\u5bfc\u5165\u7684\u955c\u50cf\u521b\u5efa Manifest \u5217\u8868\u3002"}),"\n",(0,n.jsx)(a.h2,{id:"quickstart",children:"QuickStart"}),"\n",(0,n.jsxs)(a.p,{children:["\u5c06 ",(0,n.jsx)(a.code,{children:"save"})," \u6307\u4ee4\u4fdd\u5b58\u7684\u538b\u7f29\u6587\u4ef6\u5bfc\u5165\u81f3 ",(0,n.jsx)(a.code,{children:"docker.io"})," \u4e2d\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"hangar load -s ./saved-images.tar.gz -d docker.io\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u82e5\u5f85\u5bfc\u5165\u7684\u6587\u4ef6\u683c\u5f0f\u4e0d\u662f ",(0,n.jsx)(a.code,{children:"tar.gz"})," \u65f6\uff0c\u8bf7\u4f7f\u7528 ",(0,n.jsx)(a.code,{children:"--compress"})," \u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u683c\u5f0f\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:"# \u6587\u4ef6\u683c\u5f0f\u4e3a\u89e3\u538b\u540e\u7684 cache \u6587\u4ef6\u5939\nhangar load -s ./saved-image-cache -d docker.io --compress=dir\n\n# \u6587\u4ef6\u538b\u7f29\u683c\u5f0f\u4e3a zstd\nhangar load -s ./saved-images.tar.zstd -d docker.io --compress=zstd\n"})}),"\n",(0,n.jsxs)(a.p,{children:["\u82e5\u5f85\u5bfc\u5165\u7684\u6587\u4ef6\u4e3a Save \u547d\u4ee4\u751f\u6210\u7684\u5206\u7247\u538b\u7f29\u6587\u4ef6\u65f6\uff0cLoad \u547d\u4ee4\u4f1a\u81ea\u52a8\u8bc6\u522b\u538b\u7f29\u6587\u4ef6\u540d\u79f0\u7684 ",(0,n.jsx)(a.code,{children:".partX"}),"  \u540e\u7f00\uff1a"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x   6 root  root   192B  1  6 18:00 .\ndrwxr-x---+ 70 root  root   2.2K  1  6 18:00 ..\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part0\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part1\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part2\n-rw-r--r--   1 root  root   5.3M  1  6 17:59 saved-images.tar.gz.part3\n\n$ hangar load -s saved-images.tar.gz -d private.registry.io\n18:01:28 [INFO] Decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n......\n'})}),"\n",(0,n.jsx)(a.h3,{id:"harbor-v2",children:"Harbor V2"}),"\n",(0,n.jsxs)(a.p,{children:["\u82e5\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7c7b\u578b\u4e3a Harbor V2\uff0c\u90a3\u4e48\u53ef\u4f7f\u7528 ",(0,n.jsx)(a.code,{children:"--repo-type=harbor"})," \u53c2\u6570\uff0c\u8be5\u53c2\u6570\u4f1a\u5728\u5bfc\u5165\u65f6\u81ea\u52a8\u4e3a Harbor V2 \u4ed3\u5e93\u521b\u5efa Project\u3002"]}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:["\u82e5 Harbor V2 \u4e3a HTTP\uff0c\u8fd8\u9700\u8981\u6dfb\u52a0 ",(0,n.jsx)(a.code,{children:"--harbor-https=false"})," \u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["\u82e5 Save \u65f6\u955c\u50cf\u5217\u8868\u4e2d\u7684\u76ee\u6807\u955c\u50cf\u4e0d\u5305\u542b ",(0,n.jsx)(a.code,{children:"Project"})," \uff08\u4f8b\u5982 ",(0,n.jsx)(a.code,{children:"mysql:8.0"}),", ",(0,n.jsx)(a.code,{children:"busybox:latest"}),"\uff09\uff0c\u90a3\u4e48\u5728 Load \u7684\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u4e3a\u5176\u6dfb\u52a0 ",(0,n.jsx)(a.code,{children:"library"})," Project \u524d\u7f00\uff08",(0,n.jsx)(a.code,{children:"library/mysql:8.0"}),"\uff0c",(0,n.jsx)(a.code,{children:"library/busybox:latest"}),"\uff09\u3002"]}),"\n",(0,n.jsxs)(a.p,{children:["\u53ef\u4f7f\u7528 ",(0,n.jsx)(a.code,{children:"--default-project=library"})," \u53c2\u6570\u8bbe\u5b9a\u6dfb\u52a0 Project \u7684\u540d\u79f0 \uff08\u9ed8\u8ba4\u4e3a ",(0,n.jsx)(a.code,{children:"library"}),"\uff09\u3002"]}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(a.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:'# \u4f7f\u7528 -s, --source \u53c2\u6570\u6307\u5b9a\u5bfc\u5165\u7684\u6587\u4ef6\uff08\u5fc5\u9009\u53c2\u6570\uff09\nhangar load -s ./saved-images.tar.gz\n\n# \u4f7f\u7528 -d, --destination \u53c2\u6570\uff0c\u6307\u5b9a\u76ee\u6807\u955c\u50cf\u7684 registry\n# \u4f18\u5148\u7ea7\u4e3a\uff1a-d \u53c2\u6570 > DOCKER_REGISTRY \u73af\u5883\u53d8\u91cf\nhangar load -s ./saved-images.tar.gz -d private.registry.io\n\n# \u4f7f\u7528 --compress \u53c2\u6570\uff0c\u6307\u5b9a\u5bfc\u5165\u6587\u4ef6\u7684\u538b\u7f29\u683c\u5f0f\n# \u53ef\u9009\uff1agzip, zstd, dir\n# \u9ed8\u8ba4\u4e3a gzip \u683c\u5f0f\uff0c\u82e5\u4e3a dir \u683c\u5f0f\u5219\u8868\u793a\u4ece\u6587\u4ef6\u5939\u4e2d\u52a0\u8f7d\u955c\u50cf\uff0c\u4e0d\u5bf9\u5176\u8fdb\u884c\u89e3\u538b\nhangar load -s ./saved-images.tar.zstd --compress=zstd\n\n# \u4f7f\u7528 --repo-type \u6307\u5b9a\u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7684\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u53ef\u8bbe\u5b9a\u4e3a "harbor"\n# \u76ee\u6807\u955c\u50cf\u4ed3\u5e93\u7684\u7c7b\u578b\u4e3a harbor \u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u4e3a\u76ee\u6807\u955c\u50cf\u521b\u5efa project\nhangar load -s ./saved-images.tar.gz -d private.registry.io --repo-type=harbor\n\n# \u4f7f\u7528 --default-project \u53c2\u6570\u6307\u5b9a\u9ed8\u8ba4\u7684 project \u540d\u79f0\n# \u9ed8\u8ba4\u503c\u4e3a library\n# \u6b64\u53c2\u6570\u4f1a\u5c06 `docker.io/mysql:5.8` \u8fd9\u79cd\u955c\u50cf\u91cd\u547d\u540d\u4e3a `docker.io/library/mysql:5.8`\nhangar load -s ./saved-images.tar.gz -d private.registry.io --default-project=library\n\n# \u4f7f\u7528 -j, --jobs \u53c2\u6570\uff0c\u6307\u5b9a\u534f\u7a0b\u6c60\u6570\u91cf\uff0c\u5e76\u53d1\u5bfc\u5165\u955c\u50cf\uff08\u652f\u6301 1~20 \u4e2a jobs\uff09\nhangar load -s ./saved-images.tar.gz -j 10    # \u542f\u52a8 10 \u4e2a\u534f\u7a0b\n\n# \u4f7f\u7528 -o, --output \u53c2\u6570\uff0c\u5c06 load \u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u8f93\u51fa\u81f3\u6307\u5b9a\u6587\u4ef6\u4e2d\n# \u9ed8\u8ba4\u8f93\u51fa\u81f3 mirror-failed.txt\nhangar load -s ./saved-images.tar.gz -o failed-list.txt\n\n# \u82e5 Registry Server \u4e3a HTTP \u6216\u4f7f\u7528\u81ea\u7b7e\u540d TLS Certificate\uff0c\n# \u9700\u8981\u4f7f\u7528 --tls-verify=false \u53c2\u6570\uff0c\u8df3\u8fc7 Registry \u4ed3\u5e93\u7684 TLS \u9a8c\u8bc1\nhangar load -s ./saved-images.tar.gz --tls-verify=false\n\n# \u4f7f\u7528 --debug \u53c2\u6570\uff0c\u8f93\u51fa\u66f4\u8be6\u7ec6\u7684\u8c03\u8bd5\u65e5\u5fd7\nhangar load -s ./saved-images.tar.gz --debug\n'})}),"\n",(0,n.jsx)(a.h2,{id:"\u52a0\u8f7d\u5206\u5377\u538b\u7f29\u5305",children:"\u52a0\u8f7d\u5206\u5377\u538b\u7f29\u5305"}),"\n",(0,n.jsxs)(a.p,{children:["Load \u5b50\u547d\u4ee4\u652f\u6301\u52a0\u8f7d Save \u751f\u6210\u7684\u5206\u5377 (part) \u538b\u7f29\u5305\uff0c\u6587\u4ef6\u540d\u5e94\u5f53\u4ee5 ",(0,n.jsx)(a.code,{children:".partX"})," \u4e3a\u540e\u7f00\uff0c\u4ee5 ",(0,n.jsx)(a.code,{children:".part0"}),"\u3001",(0,n.jsx)(a.code,{children:".part1"}),"\u3001",(0,n.jsx)(a.code,{children:".part2"}),"\u2026\u2026\u987a\u5e8f\u6392\u5217\u3002\u5728\u52a0\u8f7d\u5206\u5377\u538b\u7f29\u5305\u65f6\uff0c",(0,n.jsx)(a.code,{children:"-s"})," \u53c2\u6570\u6307\u5b9a\u7684\u6e90\u6587\u4ef6\u540d\u5e94\u5f53\u4e0d\u5305\u542b ",(0,n.jsx)(a.code,{children:".partX"})," \u540e\u7f00\uff08\u4f8b\u5982 ",(0,n.jsx)(a.code,{children:"saved-images.tar.gz"}),"\uff09\uff0c\u8be5\u5de5\u5177\u4f1a\u81ea\u52a8\u8bc6\u522b\u5206\u5377\u538b\u7f29\u5305\u5e76\u6309\u987a\u5e8f\u4ece ",(0,n.jsx)(a.code,{children:"part0"}),"\u3001",(0,n.jsx)(a.code,{children:"part1"}),"\u2026\u2026\u8bfb\u53d6\u6570\u636e\u89e3\u538b\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-console",children:'$ ls -alh\ndrwxr-xr-x   6 root  root   192B  1  6 18:00 .\ndrwxr-x---+ 70 root  root   2.2K  1  6 18:00 ..\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part0\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part1\n-rw-r--r--   1 root  root    50M  1  6 17:59 saved-images.tar.gz.part2\n-rw-r--r--   1 root  root   5.3M  1  6 17:59 saved-images.tar.gz.part3\n\n$ hangar load -s saved-images.tar.gz -d private.registry.io\n18:01:28 [INFO] Decompressing saved-images.tar.gz...\n18:01:28 [INFO] Read "saved-images.tar.gz.part0"\n18:01:28 [INFO] Read "saved-images.tar.gz.part1"\n18:01:28 [INFO] Read "saved-images.tar.gz.part2"\n18:01:28 [INFO] Read "saved-images.tar.gz.part3"\n......\n'})}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsx)(a.p,{children:"\u8bf7\u4e0d\u8981\u5c1d\u8bd5\u5355\u72ec Load \u67d0\u4e00\u4e2a Part \u6587\u4ef6\uff0c\u56e0\u6587\u4ef6\u4e0d\u5b8c\u6574\uff0c\u65e0\u6cd5\u89e3\u538b\u3002"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u955c\u50cf\u5305",children:"\u52a0\u8f7d\u4e0d\u540c\u67b6\u6784\u7684\u955c\u50cf\u5305"}),"\n",(0,n.jsxs)(a.blockquote,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"v1.6.0"})," \u53ca\u540e\u7eed\u7248\u672c\u652f\u6301\u6b64\u529f\u80fd"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Load \u547d\u4ee4\u652f\u6301\u5bfc\u5165\u4e0d\u540c\u67b6\u6784\u7684\u955c\u50cf\u5305\uff0c\u8bf7\u53c2\u7167\u4e0b\u9762\u7684\u4f8b\u5b50\u4e86\u89e3\u6b64\u7279\u6027\u7684\u7528\u6cd5\uff1a"}),"\n",(0,n.jsx)(a.p,{children:"\u4f7f\u7528 Hangar Save \u547d\u4ee4\u521b\u5efa\u4e86\u591a\u4e2a\u4e0d\u540c\u67b6\u6784\u7684\u538b\u7f29\u5305\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:'# \u6837\u4f8b\u955c\u50cf\u5217\u8868\ncat list.txt\ndocker.io/library/nginx:1.22\ndocker.io/library/nginx:1.23\n\n# \u4ec5\u751f\u6210\u5305\u542b AMD64 \u67b6\u6784\u7684\u955c\u50cf\u5305\nhangar save -f list.txt -a "amd64" -d amd64-images.tar.gz\n\n# \u4ec5\u751f\u6210\u5305\u542b ARM64 \u67b6\u6784\u7684\u955c\u50cf\u5305\nhangar save -f list.txt -a "arm64" -d arm64-images.tar.gz\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Hangar \u7684 Load \u547d\u4ee4\u652f\u6301\u4f9d\u6b21\u5bfc\u5165\u6b64\u4f8b\u5b50\u4e2d\u7684 ",(0,n.jsx)(a.code,{children:"amd64-images.tar.gz"})," \u548c ",(0,n.jsx)(a.code,{children:"arm64-images.tar.gz"})," \u81f3 Registry Server \u4e2d\uff0c\u6700\u7ec8\u6784\u5efa\u7684 Manifest List \u5305\u542b\u4e24\u79cd\u67b6\u6784\u7684\u955c\u50cf\u7d22\u5f15\u3002"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sh",children:'# \u5148\u5bfc\u5165\u4ec5\u5305\u542b ARM64 \u67b6\u6784\u7684\u955c\u50cf\u5305\u81f3 Registry Server\nhangar load -s arm64-images.tar.gz -d <REGISTRY_URL>\n\n# \u6b64\u65f6\u67e5\u770b\u5df2\u5bfc\u5165\u7684\u955c\u50cf\u7684 Manifest List\uff0c\u4ec5\u5305\u542b ARM64 \u67b6\u6784\nskopeo inspect docker://<REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    }\n  ]\n}\n\n# \u518d\u5bfc\u5165\u5305\u542b ARM64 \u67b6\u6784\u7684\u955c\u50cf\u5305\u81f3 Registry Server\nhangar load -s arm64-images.tar.gz -d <REGISTRY_URL>\n\n# \u5bfc\u5165\u4e24\u79cd\u67b6\u6784\u7684\u955c\u50cf\u5305\u540e\uff0c\u67e5\u770b\u5bfc\u5165\u540e\u7684\u955c\u50cf\u7684 Manifest List\uff0c\u5305\u542b AMD64 \u548c ARM64 \u4e24\u79cd\u67b6\u6784\nskopeo inspect docker://<REGISTRY_URL>/library/nginx:1.22 --raw | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:66f1a9ae96f5a18068fcbd53e0171c78b40adffa3d70f565341eb453a34bb099",\n      "platform": {\n        "architecture": "arm64",\n        "os": "linux",\n        "variant": "v8"\n      }\n    },\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 1235,\n      "digest": "sha256:7dcde3f4d7eec9ccd22f2f6873a1f0b10be189405dcbfbaac417487e4fb44c4b",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})})]})}function g(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,a,r)=>{r.d(a,{Z:()=>o,a:()=>t});var n=r(7294);const s={},d=n.createContext(s);function t(e){const a=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(d.Provider,{value:a},e.children)}}}]);