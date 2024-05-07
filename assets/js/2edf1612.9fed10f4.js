"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[142],{8169:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(5893),s=i(1151);const t={title:"Hangar Tutorial",sidebar_position:0},a="Hangar Tutorial",o={id:"index",title:"Hangar Tutorial",description:"Getting Started",source:"@site/versioned_docs/version-v1.8/index.md",sourceDirName:".",slug:"/",permalink:"/docs/v1.8/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/index.md",tags:[],version:"v1.8",lastUpdatedAt:1715074519,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:0,frontMatter:{title:"Hangar Tutorial",sidebar_position:0},sidebar:"docs",next:{title:"Installation Guide",permalink:"/docs/v1.8/install"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Commands",id:"commands",level:2},{value:"Supported Registries",id:"supported-registries",level:2},{value:"Q&amp;A",id:"qa",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hangar-tutorial",children:"Hangar Tutorial"}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["Follow this instruction to setup a demo ",(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/about/deploying/",children:"distribution registry server"})," and use Hangar to copy images."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Setup a demo ",(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/about/deploying/",children:"registry"})," server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d -p 5000:5000 --restart=always --name registry registry:2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run Hangar inside the container image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -it -v $(pwd):/hangar --network=host cnrancher/hangar:latest\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Create an image list file for copy images from the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com",children:"Docker Hub"})," to the demo registry server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="example_image_list.txt"',children:"cnrancher/hangar:latest\ncnrancher/hangar:v1.8.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use Hangar ",(0,r.jsx)(n.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," command to copy images from Docker Hub to the demo registry server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hangar mirror \\\n    -f 'example_image_list.txt' \\\n    -s 'docker.io' \\\n    -d '127.0.0.1:5000' \\\n    --arch amd64,arm64 \\\n    --os linux \\\n    --tls-verify=false\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"By default, the registry server can be login with any username and password."}),(0,r.jsxs)(n.p,{children:["You can configure the authentication config of the registry server by refer to ",(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/spec/auth/",children:"Distribution Registry Token Authentication"}),"."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Use the hangar ",(0,r.jsx)(n.a,{href:"advanced/inspect",children:"inspect"})," command to inspect the copied image manifest index:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'hangar inspect docker://127.0.0.1:5000/cnrancher/hangar:latest --raw --tls-verify=false\n{\n  "mediaType": "application/vnd.docker.distribution.manifest.list.v2+json",\n  "schemaVersion": 2,\n  "manifests": [\n    {\n    "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n......\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,r.jsxs)(n.p,{children:["You can refer to the ",(0,r.jsx)(n.a,{href:"/docs/v1.8/install",children:"Installation Guide"})," to install hangar on your system."]}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed usage example of hangar to setup a private image registry server with Kubernetes clusters, see ",(0,r.jsx)(n.a,{href:"/docs/v1.8/bestpractice",children:"Hangar Best Practice"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file of hangar is compatible with the ",(0,r.jsx)(n.a,{href:"https://github.com/containers/image/tree/main/docs",children:"containers/image"})," configuration files."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/etc/containers/policy.json"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The default trust policy file, use ",(0,r.jsx)(n.code,{children:"--insecure-policy"})," option to skip policy check."]}),"\n",(0,r.jsxs)(n.p,{children:["The default policy file can be obtained at ",(0,r.jsx)(n.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/default-policy.json",children:"default-policy.json"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"/etc/containers/registries.d/default.yaml"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["The default ",(0,r.jsx)(n.a,{href:"https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md",children:"registries configuration"})," file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"commands",children:"Commands"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"mirror/mirror",children:"mirror"}),": Mirror container images between image registries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"save/save",children:"save"}),": Save container images from registry server into archive file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"load/load",children:"load"}),": Load container images from archive file to registry server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"sync/sync",children:"sync"}),": Sync (append) extra images into archive file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"sign/sign",children:"sign"}),": Sign container images with sigstore key-pair."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"scan/scan",children:"scan"}),": Scan container image vulnerabilities."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"archive/",children:"archive"}),": Operations for the Hangar archive file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"generate-list/",children:"generate-list"}),": Generate image list file for Rancher.\nHanagr also provides some extra commands for advanced usage, see ",(0,r.jsx)(n.a,{href:"advanced",children:"advanced usage"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-registries",children:"Supported Registries"}),"\n",(0,r.jsx)(n.p,{children:"Hangar can work with API V2 container image registries:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://distribution.github.io/distribution/",children:"Registry"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://hub.docker.com/",children:"Docker Hub"}),", ",(0,r.jsx)(n.a,{href:"https://quay.io/",children:"quay.io"}),", ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry",children:"ghcr.io"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goharbor.io/docs/",children:"Harbor 2.X"})}),"\n",(0,r.jsxs)(n.li,{children:["Other Public Cloud infrastructure providers: ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/ecr/",children:"AWS"}),", ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/artifact-registry",children:"Google Cloud"}),", ",(0,r.jsx)(n.a,{href:"https://www.tencentcloud.com/products/tcr",children:"Tencent Cloud TCR"}),", ",(0,r.jsx)(n.a,{href:"https://www.alibabacloud.com/help/en/acr/",children:"Alibaba Cloud ACR"}),", etc..."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You need to ensure that the registry supports following mediaTypes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://goharbor.io/docs/1.10/",children:"Harbor 1.X"})," does not support these mediaTypes, you need to ",(0,r.jsx)(n.a,{href:"https://goharbor.io/docs/2.3.0/administration/upgrade/",children:"upgrade to Harbor 2.X"})," to use hangar."]})}),"\n",(0,r.jsx)(n.h2,{id:"qa",children:"Q&A"}),"\n",(0,r.jsxs)(n.p,{children:["For frequently asked questions, see ",(0,r.jsx)(n.a,{href:"questions",children:"Q&A"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>a});var r=i(7294);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);