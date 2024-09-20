"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[7118],{6281:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=i(4848),a=i(8453);const r={title:"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf"},t=void 0,c={id:"sign/validate",title:"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf",description:"hangar sign validate \u547d\u4ee4\u7528\u4e8e\u5bf9\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/14-sign/03-validate.md",sourceDirName:"14-sign",slug:"/sign/validate",permalink:"/zh/docs/v1.8/sign/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/14-sign/03-validate.md",tags:[],version:"v1.8",lastUpdatedAt:1726803035e3,sidebarPosition:3,frontMatter:{title:"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf"},sidebar:"docs",previous:{title:"\u5bb9\u5668\u955c\u50cf\u52a0\u7b7e",permalink:"/zh/docs/v1.8/sign/sign"},next:{title:"Scan",permalink:"/zh/docs/v1.8/scan/"}},l={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2},{value:"\u6821\u9a8c Mirror \u547d\u4ee4\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u7b7e\u540d",id:"\u6821\u9a8c-mirror-\u547d\u4ee4\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u7b7e\u540d",level:2},{value:"\u4f7f\u7528 Cosign \u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf",id:"\u4f7f\u7528-cosign-\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hangar sign validate"})," \u547d\u4ee4\u7528\u4e8e\u5bf9\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u6267\u884c\u8fc7 ",(0,s.jsx)(n.a,{href:"sign",children:"sign"})," \u547d\u4ee4\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --jobs=4\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sign validate --help"',children:'Validate the signed images by sigstore public key with the\nmatchRepoDigestOrExact signedIdentity.\n\nUsage:\n  hangar sign validate -f IMAGE_LIST.txt [flags]\n\nExamples:\n# Validate the signed images by sigstore public key file.\nhangar validate \\\n        --file IMAGE_LIST.txt \\\n        --sigstore-pubkey SIGSTORE.pub \\\n        --arch amd64,arm64 \\\n        --os linux \\\n        --exact-repository "registry.example.io/library/NAME"\n\nFlags:\n  -a, --arch strings              architecture list of images (default [amd64,arm64])\n      --exact-repository string   validate the signed image with exactRepository signedIdentity\n  -o, --failed string             file name of the sign failed image list (default "sign-failed.txt")\n  -f, --file string               image list file\n  -h, --help                      help for validate\n  -j, --jobs int                  worker number, copy images parallelly (1-20) (default 1)\n      --os strings                OS list of images (default [linux])\n      --project string            override all image projects in image list\n      --registry string           override all image registry URL in image list\n  -p, --sigstore-pubkey string    sigstore public key file\n      --timeout duration          timeout when mirror each images (default 10m0s)\n      --tls-verify                require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6821\u9a8c-mirror-\u547d\u4ee4\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u7b7e\u540d",children:"\u6821\u9a8c Mirror \u547d\u4ee4\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u7b7e\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(n.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," \u547d\u4ee4\u4f1a\u5c06\u5bb9\u5668\u955c\u50cf\u7684\u7b7e\u540d\u968f\u7740\u955c\u50cf\u672c\u8eab\u4e00\u540c\u62f7\u8d1d\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 mirror \u547d\u4ee4\u7684 ",(0,s.jsx)(n.code,{children:"--remove-signatures"})," \u53c2\u6570\u7981\u7528 Sigstore \u7b7e\u540d\u7684\u62f7\u8d1d\uff0c\u4e4b\u540e\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"sign",children:"sign"})," \u547d\u4ee4\u91cd\u65b0\u4e3a\u5df2\u62f7\u8d1d\u7684\u955c\u50cf\u52a0\u7b7e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5f85\u6821\u9a8c\u7684\u5bb9\u5668\u955c\u50cf\u7b7e\u540d\u662f\u4ece\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u62f7\u8d1d\u8fc7\u6765\u7684\uff0c\u60a8\u9700\u8981\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"sign validate"})," \u7684 ",(0,s.jsx)(n.code,{children:"--exact-repository"})," \u53c2\u6570\uff0c\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md#signedby",children:"exactRepository"})," SignedBy Identity \u8fdb\u884c\u7b7e\u540d\u7684\u6821\u9a8c\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u4e0b\u65b9\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06\u5bb9\u5668\u955c\u50cf Mirror \u81f3\u60a8\u7684 Docker Hub Project \u4e2d\uff0c\u5e76\u4e3a\u5176\u52a0\u7b7e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4efd\u6837\u4f8b\u955c\u50cf\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"USERNAME/alpine:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u62f7\u8d1d\u5e76\u5bf9\u955c\u50cf\u52a0\u7b7e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\n# \u5c06\u955c\u50cf\u62f7\u8d1d\u81f3\u60a8\u7684 Docker Hub Project \u4e2d\u3002\nhangar mirror \\\n    --file="example_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="docker.io" \\\n    --source-project="library"\n\n# \u4f7f\u7528 Sigstore \u79c1\u94a5\u5bf9\u955c\u50cf\u52a0\u7b7e\u3002\nhangar sign \\\n    --file="example_image_list.txt" \\\n    --registry="docker.io" \\\n    --sigstore-key="sigstore.key"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65f6\uff0c\u955c\u50cf ",(0,s.jsx)(n.code,{children:"USERNAME/alpine:latest"})," \u7684 Sigstore \u7b7e\u540d\u5bf9\u5e94\u7684 Reference Name \u4e3a ",(0,s.jsx)(n.code,{children:"docker.io/USERNAME/alpine:latest"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c06\u5df2\u52a0\u7b7e\u7684\u955c\u50cf\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'hangar mirror \\\n    --file "example_image_list.txt" \\\n    --source "docker.io" \\\n    --destination "REGISTRY_SERVER_URL"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684 Reference Name \u5e94\u5f53\u4e3a ",(0,s.jsx)(n.code,{children:"REGISTRY_SERVER_URL/USERNAME/alpine:latest"}),"\uff0c\u4f46\u5b83\u7684 Sigstore \u7b7e\u540d\u5bf9\u5e94\u7684 Reference Name \u4f9d\u65e7\u4e3a ",(0,s.jsx)(n.code,{children:"docker.io/USERNAME/alpine:latest"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6b64\u65f6\u6267\u884c Validate \u547d\u4ee4\u5c06\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u7b7e\u540d\u7684 Reference Name \u4e0e\u955c\u50cf\u5b9e\u9645\u7684 Reference Name \u4e0d\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL"\n\n[15:48:53] [ERRO] error occurred on [IMG: 1] [REGISTRY_SERVER_URL/USERNAME/alpine:latest]: failed to validate signature [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]:\nerror occurred when validate image [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]: sign validate: None of the signatures were accepted, reasons:\nSignature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted;\nSignature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u62a5\u9519\u7684\u4fe1\u606f\u5927\u81f4\u4e3a ",(0,s.jsx)(n.code,{children:"Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:... is not accepted"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"--exact-repository"})," \u53c2\u6570\u5bf9\u5df2\u52a0\u7b7e\u7684\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--exact-repository"})," \u53c2\u6570\u6307\u5b9a\u955c\u50cf\u7b7e\u540d\u7684 Reference Name\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --exact-repository="docker.io/USERNAME/alpine"\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528-cosign-\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf",children:"\u4f7f\u7528 Cosign \u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4f7f\u7528 Cosign \u5bf9 Hangar \u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"/docs/v1.8/advanced/inspect/",children:"inspect"})," \u547d\u4ee4\u83b7\u53d6\u5f85\u9a8c\u8bc1\u955c\u50cf\u7684 SHA256 Digest\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u672c\u4f8b\u4e2d\uff0c\u955c\u50cf\u7684 Digest \u4e3a ",(0,s.jsx)(n.code,{children:"sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar inspect --raw docker://REGISTRY_SERVER_URL/cnrancher/hangar:latest\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 528,\n      "digest": "sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://docs.sigstore.dev/verifying/verify/",children:"cosign verify"})," \u547d\u4ee4\u5bf9\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\ncosign verify \\\n    --key="./sigstore.pub" \\\n    --allow-http-registry=true \\\n    --insecure-ignore-tlog \\\n    REGISTRY_SERVER_URL/cnrancher/hangar@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--insecure-ignore-tlog"})," \u53c2\u6570\u7528\u4e8e\u8df3\u8fc7 Cosign \u5728 Transparency \u65e5\u5fd7\u670d\u52a1\u5668\u4e2d\u67e5\u627e\u7b7e\u540d\u7684\u4fe1\u606f\uff0c\u56e0\u4e3a Hangar \u5728\u5bf9\u955c\u50cf\u52a0\u7b7e\u65f6\u4e0d\u4f1a\u5c06\u7b7e\u540d\u4fe1\u606f\u4e0a\u4f20\u81f3 Cosign \u4f7f\u7528\u7684 Transparency \u65e5\u5fd7\u670d\u52a1\u5668\u4e2d\u3002"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var s=i(6540);const a={},r=s.createContext(a);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);