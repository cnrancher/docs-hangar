"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[419],{250:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"generate-list/index","title":"Generate Rancher image list","description":"The hangar generate-list command allows to generate a Rancher image list and K8s cluster version list according to the Rancher Version.","source":"@site/versioned_docs/version-v1.7/15-generate-list/index.md","sourceDirName":"15-generate-list","slug":"/generate-list/","permalink":"/docs/v1.7/generate-list/","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/15-generate-list/index.md","tags":[],"version":"v1.7","lastUpdatedAt":1739438500000,"frontMatter":{"title":"Generate Rancher image list"},"sidebar":"docs","previous":{"title":"Export images from archive files","permalink":"/docs/v1.7/archive/export"},"next":{"title":"Advanced Usage","permalink":"/docs/v1.7/advanced/"}}');var i=s(4848),r=s(8453);const a={title:"Generate Rancher image list"},o=void 0,c={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Customize KDM data file and Chart repositories",id:"customize-kdm-data-file-and-chart-repositories",level:3},{value:"Options for KDM image list files",id:"options-for-kdm-image-list-files",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"hangar generate-list"})," command allows to generate a Rancher image list and K8s cluster version list according to the Rancher Version."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The generate K8s cluster version list function was supported from Hangar v1.7.1."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.p,{children:"Generate a Rancher image list and K8s cluster (K3s, RKE, RKE2) version list by specifying the Rancher version:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'hangar generate-list --rancher="v2.8.0"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The output file image list file is ",(0,i.jsx)(n.code,{children:"v2.8.0-images.txt"}),", and cluster version list is ",(0,i.jsx)(n.code,{children:"v2.8.0-versions.txt"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"The image list file generated by hangar only includes images from KDM (Kontainer Driver Metadata) and Chart repositories used by Rancher, and the generated image list file is only used to sync container images when Rancher KDM and Chart repo upgrades."}),(0,i.jsxs)(n.p,{children:["You need to download the official ",(0,i.jsx)(n.code,{children:"rancher-images.txt"})," image list file from Rancher GitHub ",(0,i.jsx)(n.a,{href:"https://github.com/rancher/rancher/releases",children:"Release page"})," if you need the complete image list file instead of the upgrade images of KDM and Helm Chart images."]})]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="hangar generate-list --help"',children:'\'generate-list\' generates an image list and k8s version list from KDM data and Chart repos of Rancher.\n\nGenerate the image list by simply specifying the Rancher version:\n\n    hangar generate-list --rancher="v2.8.0"\n\nYou can also download the KDM JSON file and clone chart repos manually:\n\n    hangar generate-list \\\n        --rancher="v2.8.0" \\\n        --chart="./chart-repo-dir" \\\n        --system-chart="./system-chart-repo-dir" \\\n        --kdm="./kdm-data.json"\n\nUsage:\n  hangar generate-list [flags]\n\nFlags:\n  -y, --auto-yes                     answer yes automatically (used in shell script)\n      --chart strings                cloned chart repo path (URL not supported)\n      --dev                          switch to dev branch/URL of charts & KDM data\n  -h, --help                         help for generate-list\n      --k3s-images string            output KDM K3s linux image list if specified\n      --kdm string                   KDM file path or URL\n      --kdm-remove-deprecated        remove deprecated k3s/rke2 k8s versions from KDM (default true)\n  -o, --output string                output linux image list file (default "[RANCHER_VERSION]-images.txt")\n      --output-source string         output the image list with image source if specified\n      --output-versions string       output Rancher supported k8s versions (default "[RANCHER_VERSION]-k8s-versions.txt")\n      --output-windows string        output the windows image list if specified\n      --rancher string               rancher version (semver with \'v\' prefix) (use \'-ent\' suffix to distinguish with Rancher Prime Manager GC) (required)\n      --registry string              customize the registry URL of the generated image list\n      --rke-images string            output KDM RKE linux image list if specified\n      --rke2-images string           output KDM RKE2 linux image list if specified\n      --rke2-windows-images string   output KDM RKE2 Windows image list if specified\n      --system-chart strings         cloned system chart repo path (URL not supported)\n      --tls-verify                   require HTTPS and verify certificates\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})}),"\n",(0,i.jsx)(n.h3,{id:"customize-kdm-data-file-and-chart-repositories",children:"Customize KDM data file and Chart repositories"}),"\n",(0,i.jsxs)(n.p,{children:["If you only specify the ",(0,i.jsx)(n.code,{children:"--rancher"})," option, hangar will fetch KDM data and clone chart repos used by Rancher to generate image list automatically."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, you can also customize the KDM ",(0,i.jsx)(n.code,{children:"data.json"})," file and Chart repository directories when generating the image-list by using ",(0,i.jsx)(n.code,{children:"--chart"}),", ",(0,i.jsx)(n.code,{children:"--system-chart"}),", ",(0,i.jsx)(n.code,{children:"--kdm"})," options."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["You can use multiple ",(0,i.jsx)(n.code,{children:"--chart"})," and ",(0,i.jsx)(n.code,{children:"--system-chart"})," options to specify multiple directories."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'# Download KDM data.json and clone chart repository into local directory before generate list.\n\nhangar generate-list \\\n    --rancher="v2.8.0" \\\n    --kdm="./data.json" \\\n    --chart="./charts-1" \\\n    --chart="./charts-2" \\\n    --system-chart="./system-charts-1" \\\n    --system-chart="./system-charts-2"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"options-for-kdm-image-list-files",children:"Options for KDM image list files"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Available from ",(0,i.jsx)(n.code,{children:"v1.7.3"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can use following options to output RKE/RKE2/K3s image list separately from KDM ",(0,i.jsx)(n.code,{children:"data.json"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--rke-images"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--rke2-images"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--k3s-images"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"--rke2-windows-images"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar generate-list \\\n    --rancher="v2.8.0" \\\n    --rke-images="rke-images.txt" \\\n    --k3s-images="k3s-images.txt" \\\n    --rke2-images="rke2-images.txt" \\\n    --rke2-windows-images="rke2-windows-images.txt"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Hangar removes the deprecated k8s versions when generating RKE2/K3s images by default,\nyou can use the ",(0,i.jsx)(n.code,{children:"--kdm-remove-deprecated=false"})," option to generate image list contains the\ndeprecated k8s versions."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'hangar generate-list \\\n    --rancher="v2.8.0" \\\n    --kdm-remove-deprecated=false\n\n# Now generated `v2.8.0-versions.txt` and `v2.8.0-images.txt`\n# will contain deprecated older k8s patch releases:\n\ncat v2.8.0-versions.txt\n# K3s Versions:\n# v1.25.13+k3s1\n# v1.25.15+k3s2\n# v1.25.16+k3s4\n# ...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);