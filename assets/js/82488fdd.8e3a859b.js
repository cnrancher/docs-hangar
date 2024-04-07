"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2372],{5623:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var a=n(5893),s=n(1151);const t={title:"Validate the signed image signature"},r=void 0,o={id:"sign/validate",title:"Validate the signed image signature",description:"Use hangar sign validate command for validate the signed image sigstore signature.",source:"@site/versioned_docs/version-v1.8/14-sign/03-validate.md",sourceDirName:"14-sign",slug:"/sign/validate",permalink:"/docs/v1.8/sign/validate",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/14-sign/03-validate.md",tags:[],version:"v1.8",lastUpdatedAt:1712484060,formattedLastUpdatedAt:"Apr 7, 2024",sidebarPosition:3,frontMatter:{title:"Validate the signed image signature"},sidebar:"docs",previous:{title:"Sign images with sigstore key-pair",permalink:"/docs/v1.8/sign/sign"},next:{title:"Scan images",permalink:"/docs/v1.8/scan/"}},c={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Validate the mirrored image signature",id:"validate-the-mirrored-image-signature",level:2},{value:"Use cosign to verify the signed image signature",id:"use-cosign-to-verify-the-signed-image-signature",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.p,{children:["Use ",(0,a.jsx)(i.code,{children:"hangar sign validate"})," command for validate the signed image sigstore signature."]}),"\n",(0,a.jsx)(i.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsxs)(i.p,{children:["Use following command to verify the signed image after executing the ",(0,a.jsx)(i.a,{href:"sign",children:"sign"})," command."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --jobs=4\n'})}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-txt",metastring:'title="hangar sign validate --help"',children:'Validate the signed images by sigstore public key with the\nmatchRepoDigestOrExact signedIdentity.\n\nUsage:\n  hangar sign validate -f IMAGE_LIST.txt [flags]\n\nExamples:\n# Validate the signed images by sigstore public key file.\nhangar validate \\\n        --file IMAGE_LIST.txt \\\n        --sigstore-pubkey SIGSTORE.pub \\\n        --arch amd64,arm64 \\\n        --os linux \\\n        --exact-repository "registry.example.io/library/NAME"\n\nFlags:\n  -a, --arch strings              architecture list of images (default [amd64,arm64])\n      --exact-repository string   validate the signed image with exactRepository signedIdentity\n  -o, --failed string             file name of the sign failed image list (default "sign-failed.txt")\n  -f, --file string               image list file\n  -h, --help                      help for validate\n  -j, --jobs int                  worker number, copy images parallelly (1-20) (default 1)\n      --os strings                OS list of images (default [linux])\n      --project string            override all image projects in image list\n      --registry string           override all image registry URL in image list\n  -p, --sigstore-pubkey string    sigstore public key file\n      --timeout duration          timeout when mirror each images (default 10m0s)\n      --tls-verify                require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})}),"\n",(0,a.jsx)(i.h2,{id:"validate-the-mirrored-image-signature",children:"Validate the mirrored image signature"}),"\n",(0,a.jsxs)(i.p,{children:["By default, the ",(0,a.jsx)(i.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," command will copy the sigstore signature when copying images. You can use the ",(0,a.jsx)(i.code,{children:"--remove-signatures"})," option of mirror command to disable signature copy, and use the ",(0,a.jsx)(i.a,{href:"sign",children:"sign"})," command to re-sign the container images with your own sigstore signature."]}),"\n",(0,a.jsxs)(i.p,{children:["You need to specify the ",(0,a.jsx)(i.code,{children:"--exact-repository"})," option of the ",(0,a.jsx)(i.code,{children:"sign validate"})," command to use ",(0,a.jsx)(i.a,{href:"https://github.com/containers/image/blob/main/docs/containers-policy.json.5.md#signedby",children:"exactRepository"})," signedBy identity when validating the image signature copied from other registry servers."]}),"\n",(0,a.jsx)(i.p,{children:"Here is an example:"}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Mirror images to your personal Docker Hub project and sign with sigstore signature."}),"\n",(0,a.jsx)(i.p,{children:"Prepare an example image list file."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"USERNAME/alpine:latest\n"})}),"\n",(0,a.jsx)(i.p,{children:"Mirror and sign images."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\n# Mirror container images to your Docker Hub personal project.\nhangar mirror \\\n    --file="example_image_list.txt" \\\n    --source="docker.io" \\\n    --destination="docker.io" \\\n    --source-project="library"\n\n# Sign images with sigstore private key.\nhangar sign \\\n    --file="example_image_list.txt" \\\n    --registry="docker.io" \\\n    --sigstore-key="sigstore.key"\n'})}),"\n",(0,a.jsxs)(i.p,{children:["Now the image ",(0,a.jsx)(i.code,{children:"USERNAME/alpine:latest"})," should have sigstore signature with its reference name ",(0,a.jsx)(i.code,{children:"docker.io/USERNAME/alpine:latest"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsx)(i.p,{children:"Mirror the signed images to your private registry server."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'hangar mirror \\\n    --file "example_image_list.txt" \\\n    --source "docker.io" \\\n    --destination "REGISTRY_SERVER_URL"\n'})}),"\n",(0,a.jsxs)(i.p,{children:["Now the reference of the image in the private registry server is ",(0,a.jsx)(i.code,{children:"REGISTRY_SERVER_URL/USERNAME/alpine:latest"}),", but its sigstore signature reference is still ",(0,a.jsx)(i.code,{children:"docker.io/USERNAME/alpine:latest"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"The validate command will fail if the signature reference is not match with the image reference."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL"\n\n[15:48:53] [ERRO] error occurred on [IMG: 1] [REGISTRY_SERVER_URL/USERNAME/alpine:latest]: failed to validate signature [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]:\nerror occurred when validate image [docker://REGISTRY_SERVER_URL/USERNAME/alpine:latest]: sign validate: None of the signatures were accepted, reasons:\nSignature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted;\nSignature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72bb0bf7cfb75df4f22e is not accepted\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The validate failed error message is like ",(0,a.jsx)(i.code,{children:"Signature for identity REGISTRY_SERVER_URL/USERNAME/alpine@sha256:... is not accepted"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Validate the copied image signature with ",(0,a.jsx)(i.code,{children:"--exact-repository"}),"."]}),"\n",(0,a.jsxs)(i.p,{children:["Use ",(0,a.jsx)(i.code,{children:"--exact-repository"})," to specify the signature exact repository."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --sigstore-pubkey="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --exact-repository="docker.io/USERNAME/alpine"\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"use-cosign-to-verify-the-signed-image-signature",children:"Use cosign to verify the signed image signature"}),"\n",(0,a.jsx)(i.p,{children:"You can use cosign to verify the Hangar signed sigstore signature."}),"\n",(0,a.jsxs)(i.ol,{children:["\n",(0,a.jsxs)(i.li,{children:["\n",(0,a.jsxs)(i.p,{children:["Use ",(0,a.jsx)(i.a,{href:"/docs/v1.8/advanced/inspect/",children:"inspect"})," to get the image digest to be verified."]}),"\n",(0,a.jsxs)(i.p,{children:["In this example, the digest is ",(0,a.jsx)(i.code,{children:"sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e"}),"."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar inspect --raw docker://REGISTRY_SERVER_URL/cnrancher/hangar:latest\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 528,\n      "digest": "sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(i.p,{children:["Use ",(0,a.jsx)(i.a,{href:"https://docs.sigstore.dev/verifying/verify/",children:"cosign verify"})," to verify the Hangar signed image."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-bash",children:'#!/bin/bash\n\ncosign verify \\\n    --key="./sigstore.pub" \\\n    --allow-http-registry=true \\\n    ---insecure-ignore-tlog \\\n    REGISTRY_SERVER_URL/cnrancher/hangar@sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e\n'})}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.code,{children:"--insecure-ignore-tlog"})," is for skip finding signature record from transparency log since Hangar does not upload the signature to the cosign transparency log server."]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>r});var a=n(7294);const s={},t=a.createContext(s);function r(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(t.Provider,{value:i},e.children)}}}]);