"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[9740],{6301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(5893),r=n(1151);const s={title:"Generate Rancher image list"},i=void 0,o={id:"advanced/generate-list",title:"Generate Rancher image list",description:"The hangar generate-list command allows to generate a image list according to Rancher Version.",source:"@site/versioned_docs/version-v1.7/14-advanced/99-generate-list.md",sourceDirName:"14-advanced",slug:"/advanced/generate-list",permalink:"/v1.7/advanced/generate-list",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/14-advanced/99-generate-list.md",tags:[],version:"v1.7",sidebarPosition:99,frontMatter:{title:"Generate Rancher image list"},sidebar:"docs",previous:{title:"Shell Completion",permalink:"/v1.7/advanced/completion"},next:{title:"Development",permalink:"/v1.7/dev/"}},c={},l=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Customize KDM data file and Chart repositories",id:"customize-kdm-data-file-and-chart-repositories",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"hangar generate-list"})," command allows to generate a image list according to Rancher Version."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"hangar generate-list"})," command is only used for testing purpose. Please download the official ",(0,a.jsx)(t.code,{children:"rancher-images.txt"})," image list file on Rancher GitHub ",(0,a.jsx)(t.a,{href:"https://github.com/rancher/rancher/releases",children:"Release page"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(t.p,{children:"According to the Rancher version, get the latest KDM data, and clone chart repos to local to generate a image-list used by Rancher:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'hangar generate-list --rancher="v2.7.0"\n'})}),"\n",(0,a.jsx)(t.p,{children:"The image-list generated by this tool only includes images in the KDM data and Chart repositories that matching the Rancher version."}),"\n",(0,a.jsxs)(t.p,{children:["The generated image-list has some differences from ",(0,a.jsx)(t.code,{children:"rancher-images.txt"})," since the logic of checking the version constraint of chart images in this tool is different from Rancher generate image list functions."]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",children:'\'generate-list\' generates an image-list from KDM data and Chart repositories used by Rancher.\n\nGenerate image list by just specifying Rancher version:\n\n    hangar generate-list --rancher="v2.7.0-ent"\n\nGenerate image-list from custom cloned chart repos & KDM data.json file.\n\n    hangar generate-list \\\n        --rancher="v2.7.0-ent" \\\n        --chart="./chart-repo-dir" \\\n        --system-chart="./system-chart-repo-dir" \\\n        --kdm="./kdm-data.json"\n\nUsage:\n  hangar generate-list [flags]\n\nFlags:\n      --chart strings           cloned chart repo path (URL is not supported)\n      --dev                     switch to dev branch/URL of charts & KDM data\n  -h, --help                    help for generate-list\n      --kdm string              KDM file path or URL\n  -o, --output string           output generated image list file (default "[RANCHER_VERSION]-images.txt")\n      --output-linux string     generate linux image list\n      --output-source string    generate image list with image source\n      --output-windows string   generate windows image list\n      --rancher string          rancher version (semver with \'v\' prefix) (use \'-ent\' suffix to distinguish with RPM GC) (required)\n      --registry string         customize the registry URL of generated image list\n      --system-chart strings    cloned system chart repo path (URL is not supported)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})}),"\n",(0,a.jsx)(t.h3,{id:"customize-kdm-data-file-and-chart-repositories",children:"Customize KDM data file and Chart repositories"}),"\n",(0,a.jsxs)(t.p,{children:["When executing this tool, if only the ",(0,a.jsx)(t.code,{children:"--rancher"})," parameter is specified, hangar will obtain KDM data and\nclone chart repos to generate image list automatically."]}),"\n",(0,a.jsxs)(t.p,{children:["In addition, you can customize the KDM data.json file and Chart repository directory when generating the image-list by using ",(0,a.jsx)(t.code,{children:"--chart"}),", ",(0,a.jsx)(t.code,{children:"--system-chart"}),", ",(0,a.jsx)(t.code,{children:"--kdm"})," options."]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["You can use multiple ",(0,a.jsx)(t.code,{children:"--chart"})," and ",(0,a.jsx)(t.code,{children:"--system-chart"})," parameters to specify multiple chart repos."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'# Download KDM data.json and clone chart repository into local directory firstly.\nhangar generate-list \\\n    --rancher="v2.7.0" \\\n    --kdm ./data.json \\\n    --chart ./charts-1 \\\n    --chart ./charts-2 \\\n    --system-chart ./system-charts-1 \\\n    --system-chart ./system-charts-2\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);