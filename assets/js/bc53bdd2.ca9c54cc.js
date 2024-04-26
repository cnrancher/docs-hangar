"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3787],{2254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=i(5893),a=i(1151);const t={title:"Sign images with sigstore key-pair"},r=void 0,o={id:"sign/sign",title:"Sign images with sigstore key-pair",description:"hangar sign command is for signing container images with sigstore key-pair.",source:"@site/versioned_docs/version-v1.8/14-sign/02-sign.md",sourceDirName:"14-sign",slug:"/sign/sign",permalink:"/docs/v1.8/sign/sign",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/14-sign/02-sign.md",tags:[],version:"v1.8",lastUpdatedAt:1714097070,formattedLastUpdatedAt:"Apr 26, 2024",sidebarPosition:2,frontMatter:{title:"Sign images with sigstore key-pair"},sidebar:"docs",previous:{title:"Generate sigstore key",permalink:"/docs/v1.8/sign/generate-sigstore-key"},next:{title:"Validate the signed image signature",permalink:"/docs/v1.8/sign/validate"}},c={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function g(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hangar sign"})," command is for signing container images with sigstore key-pair."]}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You need to ensure the ",(0,s.jsx)(n.code,{children:"use-sigstore-attachments"})," of  ",(0,s.jsx)(n.a,{href:"https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md#individual-configuration-sections",children:"registries configuration"})," is set to ",(0,s.jsx)(n.code,{children:"true"})," to allow Hangar upload the sigstore signature to the registry server before signing images. You can obtain the example ",(0,s.jsx)(n.code,{children:"/etc/containers/registries.d/default.yaml"})," registry configuration file from ",(0,s.jsx)(n.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/registries.d/default.yaml",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Hangar does not support sign image on Harbor registry server, for more info please refer to ",(0,s.jsx)(n.a,{href:"https://github.com/cnrancher/hangar/issues/43",children:"issue#43"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"Use following command to sign images."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prepare an image list file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:v1.8.0\ncnrancher/hangar:latest\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["You may need to use ",(0,s.jsx)(n.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," command to copy container images to the ",(0,s.jsx)(n.em,{children:"DESTINATION REGISTRY SERVER"})," before signing images."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sign container images with sigstore private key."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign \\\n    --file="example_image_list.txt" \\\n    --sigstore-key="sigstore.key" \\\n    --arch amd64,arm64 \\\n    --os linux \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --jobs=4\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.a,{href:"/docs/v1.8/advanced/inspect/",children:"inspect"})," command to view the signed sigstore signature."]}),"\n",(0,s.jsxs)(n.p,{children:["Use inspect to get the image ",(0,s.jsx)(n.code,{children:"sha256"})," digest, in this example is ",(0,s.jsx)(n.code,{children:"sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar inspect --raw docker://REGISTRY_SERVER_URL/cnrancher/hangar:latest\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "manifests": [\n    {\n      "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n      "size": 528,\n      "digest": "sha256:25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e",\n      "platform": {\n        "architecture": "amd64",\n        "os": "linux"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Inspect the sigstore signature manifest by specifying the sigstore signature tag:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar inspect --raw "docker://REGISTRY_SERVER_URL/cnrancher/hangar:sha256-25fd8fc1aefcc8ae46aae23daefcd7dcb97f676fa0bc72ba0cf7c1b75df4f22e.sig"  | jq\n{\n  "schemaVersion": 2,\n  "mediaType": "application/vnd.oci.image.manifest.v1+json",\n  "config": {\n    "mediaType": "application/vnd.oci.image.config.v1+json",\n    "digest": "sha256:7abad20a44f07298df4f74a474baae8873f2009377cee2b468cf1dbad8275a31",\n    "size": 227\n  },\n  "layers": [\n    {\n      "mediaType": "application/vnd.dev.cosign.simplesigning.v1+json",\n      "digest": "sha256:af8fb401acf93b9ae2ef0be057d7e1ce9aa1044ef6744877aa16d693dc170c7e",\n      "size": 373,\n      "annotations": {\n        "dev.cosignproject.cosign/signature": "MEYCIQCZvL..."\n      }\n    },\n    {\n      "mediaType": "application/vnd.dev.cosign.simplesigning.v1+json",\n      "digest": "sha256:6f67c286b98255ee81ebf27af90bf8f1d980759fd8a64c7750cbb3d7d682c1d4",\n      "size": 373,\n      "annotations": {\n        "dev.cosignproject.cosign/signature": "MEUCIQ......"\n      }\n    }\n  ]\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Verify the signed image."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/v1.8/sign/validate",children:"sign validate"})," command provides signature verify functions of the signed container image."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sign --help"',children:'Sign multiple container images with sigstore private key\n\nUsage:\n  hangar sign -f IMAGE_LIST.txt --key SIGSTORE.key [flags]\n  hangar sign [command]\n\nExamples:\n# Sign the images with sigstore private key file.\nhangar sign \\\n        --file IMAGE_LIST.txt \\\n        --sigstore-key SIGSTORE.key \\\n        --sigstore-passphrase-file "/path/to/passphrase/file" \\\n        --arch amd64,arm64 \\\n        --os linux\n\nAvailable Commands:\n  validate    Validate the signed images with sigstore public key\n\nFlags:\n  -a, --arch strings                      architecture list of images (default [amd64,arm64])\n  -o, --failed string                     file name of the sign failed image list (default "sign-failed.txt")\n  -f, --file string                       image list file\n  -h, --help                              help for sign\n  -j, --jobs int                          worker number, sign images parallelly (1-20) (default 1)\n      --os strings                        OS list of images (default [linux])\n      --project string                    override all image projects in image list\n      --registry string                   override all image registry URL in image list\n  -k, --sigstore-key string               sigstore private key file\n      --sigstore-passphrase-file string   read the passphrase for the private key from file\n      --skip-login                        skip check the registry is logged in (used in shell script)\n      --timeout duration                  timeout when sign each images (default 10m0s)\n      --tls-verify                        require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar sign [command] --help" for more information about a command.\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const a={},t=s.createContext(a);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);