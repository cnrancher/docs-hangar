"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2839],{3361:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=s(4848),r=s(8453);const i={title:"\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf"},t=void 0,c={id:"scan/scan",title:"\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf",description:"Hangar \u5185\u7f6e\u4e86 trivy \u7684\u5bb9\u5668\u955c\u50cf\u626b\u63cf\u529f\u80fd\uff0c\u60a8\u53ef\u4f7f\u7528 hangar scan \u547d\u4ee4\u4e00\u952e\u626b\u63cf\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/15-scan/01-scan.md",sourceDirName:"15-scan",slug:"/scan/scan",permalink:"/zh/docs/v1.8/scan/scan",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/15-scan/01-scan.md",tags:[],version:"v1.8",lastUpdatedAt:1732246766e3,sidebarPosition:1,frontMatter:{title:"\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf"},sidebar:"docs",previous:{title:"Scan",permalink:"/zh/docs/v1.8/scan/"},next:{title:"Archive",permalink:"/zh/docs/v1.8/archive/"}},l={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2},{value:"\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u5bb9\u5668\u955c\u50cf",id:"\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u5bb9\u5668\u955c\u50cf",level:2},{value:"\u4ee5 Trivy \u5ba2\u6237\u7aef\u6a21\u5f0f\u626b\u63cf\u5bb9\u5668\u955c\u50cf",id:"\u4ee5-trivy-\u5ba2\u6237\u7aef\u6a21\u5f0f\u626b\u63cf\u5bb9\u5668\u955c\u50cf",level:2},{value:"SBOM \u8f93\u51fa",id:"sbom-\u8f93\u51fa",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Hangar \u5185\u7f6e\u4e86 ",(0,a.jsx)(n.a,{href:"https://aquasecurity.github.io/trivy/",children:"trivy"})," \u7684\u5bb9\u5668\u955c\u50cf\u626b\u63cf\u529f\u80fd\uff0c\u60a8\u53ef\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"hangar scan"})," \u547d\u4ee4\u4e00\u952e\u626b\u63cf\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u626b\u63cf\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar scan \\\n    --file="example_image_list.txt" \\\n    --format="csv" \\\n    --arch="amd64,arm64" \\\n    --os="linux" \\\n    --jobs=4\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u626b\u63cf\u7ed3\u679c\u4f1a\u4ee5 ",(0,a.jsx)(n.code,{children:"CSV"})," \u683c\u5f0f\u8f93\u51fa\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"--format"})," \u547d\u4ee4\u81ea\u5b9a\u4e49\u6f0f\u6d1e\u626b\u63cf\u62a5\u544a\u7684\u8f93\u51fa\u683c\u5f0f\u4e3a ",(0,a.jsx)(n.code,{children:"json"})," \u6216 ",(0,a.jsx)(n.code,{children:"yaml"}),"\u3002\u6709\u5173 ",(0,a.jsx)(n.code,{children:"spdx-json"})," \u683c\u5f0f\u7684\u4ecb\u7ecd\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684 ",(0,a.jsx)(n.a,{href:"#sbom-%E8%BE%93%E5%87%BA",children:"SBOM \u8f93\u51fa"}),"\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u5728\u626b\u63cf\u5bb9\u5668\u955c\u50cf\u65f6\u9047\u5230\u4e86\u5176\u4ed6\u9519\u8bef\uff08\u4f8b\u5982\u7f51\u7edc\u8d85\u65f6\u6216\u955c\u50cf\u4e0d\u5b58\u5728\uff09\uff0c\u626b\u63cf\u5931\u8d25\u7684\u955c\u50cf\u5217\u8868\u5c06\u4f1a\u8f93\u51fa\u81f3 ",(0,a.jsx)(n.code,{children:"scan-failed.txt"})," \u4e2d\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="hangar scan --help"',children:'Scan container image vulnerabilities\n\nUsage:\n  hangar scan -f IMAGE_LIST.txt [flags]\n\nExamples:\n# Scan images by image list file and output CSV result.\nhangar scan \\\n        --file IMAGE_LIST.txt \\\n        --format csv \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -a, --arch strings                 architecture list of images (default [amd64,arm64])\n  -y, --auto-yes                     answer yes automatically (used in shell script)\n      --cache string                 trivy database cache directory (default "/Users/stwang/Library/Caches/trivy")\n  -o, --failed string                file name of the scan failed image list (default "scan-failed.txt")\n  -f, --file string                  image list file\n      --format string                output report format (available: json,yaml,csv,spdx-csv,spdx-json) (default "csv")\n  -h, --help                         help for scan\n  -j, --jobs int                     worker number, scan images parallelly (1-20) (default 1)\n      --offline-scan                 scan in offline (air-gapped) mode\n      --os strings                   OS list of images (default [linux])\n      --project string               override all image projects in image list\n      --registry string              override all image registry URL in image list\n  -r, --report string                scan report output file (default "scan-report.[FORMAT]")\n      --scanner strings              list of scanners (available: vuln,misconfig,secret,license) (default [vuln])\n  -s, --server string                trivy server URL (scan as a trivy client mode)\n      --skip-db-update               skip updating trivy vulnerability database\n      --skip-java-db-update          skip updating trivy java index database\n      --timeout duration             timeout when scan each images (default 10m0s)\n      --tls-verify                   require HTTPS and verify certificates (default true)\n      --trivy-db-repo strings        trivy vulnerability database repositories (default [public.ecr.aws/aquasecurity/trivy-db:2,ghcr.io/aquasecurity/trivy-db:2])\n      --trivy-java-db-repo strings   trivy java database repositories (default [public.ecr.aws/aquasecurity/trivy-java-db:1,ghcr.io/aquasecurity/trivy-java-db:1])\n      --trivy-log-output             show trivy log (only available in single worker mode)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u5bb9\u5668\u955c\u50cf",children:"\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u5bb9\u5668\u955c\u50cf"}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u5bb9\u5668\u955c\u50cf\u3002"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"/docs/v1.8/mirror/mirror",children:"mirror"})," \u547d\u4ee4\uff0c\u5c06 Trivy \u6570\u636e\u5e93\u955c\u50cf\u62f7\u8d1d\u81f3\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\uff0c\u6b64\u6b65\u9aa4\u9700\u8981\u5728\u6709\u7f51\u7edc\u8fde\u63a5\u7684\u73af\u5883\u4e2d\u6267\u884c\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4efd\u955c\u50cf\u5217\u8868\uff0c\u7528\u4e8e\u62f7\u8d1d ",(0,a.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy-db/pkgs/container/trivy-db",children:"trivy-db"})," \u548c ",(0,a.jsx)(n.a,{href:"https://github.com/aquasecurity/trivy-java-db/pkgs/container/trivy-java-db",children:"trivy-java-db"})," \u955c\u50cf\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="database_images.txt"',children:"ghcr.io/aquasecurity/trivy-db:latest\nghcr.io/aquasecurity/trivy-java-db:1\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar mirror \\\n    --file="database_images.txt" \\\n    --destination="REGISTRY_SERVER_URL" \\\n    --jobs=2\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"scan"})," \u547d\u4ee4\uff0c\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"--offline-scan=true"}),"\uff0c",(0,a.jsx)(n.code,{children:"--trivy-db-repo"})," \u548c ",(0,a.jsx)(n.code,{children:"--trivy-java-db-repo"})," \u53c2\u6570\uff0c\u5728\u79bb\u7ebf\u73af\u5883\u626b\u63cf\u955c\u50cf\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar scan \\\n    --file="example_image_list.txt" \\\n    --format="csv" \\\n    --offline-scan=true \\\n    --trivy-db-repo="REGISTRY_SERVER_URL/aquasecurity/trivy-db" \\\n    --trivy-java-db-repo="REGISTRY_SERVER_URL/aquasecurity/trivy-java-db" \\\n    --jobs=4\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u4ee5-trivy-\u5ba2\u6237\u7aef\u6a21\u5f0f\u626b\u63cf\u5bb9\u5668\u955c\u50cf",children:"\u4ee5 Trivy \u5ba2\u6237\u7aef\u6a21\u5f0f\u626b\u63cf\u5bb9\u5668\u955c\u50cf"}),"\n",(0,a.jsxs)(n.p,{children:["Trivy \u63d0\u4f9b\u4e86",(0,a.jsx)(n.a,{href:"https://aquasecurity.github.io/trivy/v0.50/docs/references/modes/client-server/",children:"\u5ba2\u6237\u7aef/\u670d\u52a1\u5668\u6a21\u5f0f"}),"\uff0cHangar \u652f\u6301\u4ee5 Trivy \u5ba2\u6237\u7aef\u6a21\u5f0f\u8fdb\u884c\u5bb9\u5668\u955c\u50cf\u626b\u63cf\u64cd\u4f5c\u3002"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u542f\u52a8 ",(0,a.jsx)(n.a,{href:"https://aquasecurity.github.io/trivy/v0.50/docs/references/configuration/cli/trivy_server/",children:"Trivy Server"}),"\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'trivy server --listen "127.0.0.1:4954"\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4ee5 Trivy \u5ba2\u6237\u7aef\u6a21\u5f0f\u8fdb\u884c\u5bb9\u5668\u955c\u50cf\u626b\u63cf\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'hangar scan \\\n    --file="example_image_list.txt" \\\n    --server="127.0.0.1:4954" \\\n    --tls-verify=false \\\n    --jobs=4\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sbom-\u8f93\u51fa",children:"SBOM \u8f93\u51fa"}),"\n",(0,a.jsxs)(n.p,{children:["Hangar \u8fd8\u652f\u6301\u4ee5 ",(0,a.jsx)(n.a,{href:"https://spdx.dev/",children:"SPDX"})," \u683c\u5f0f\u8f93\u51fa\u5bb9\u5668\u955c\u50cf\u7684 ",(0,a.jsx)(n.a,{href:"https://cyclonedx.org/capabilities/sbom/",children:"SBOM"})," \u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u5c06 ",(0,a.jsx)(n.code,{children:"--format"})," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,a.jsx)(n.code,{children:"spdx-json"})," \u6216 ",(0,a.jsx)(n.code,{children:"spdx-csv"})," \u4ee5 JSON / CSV \u683c\u5f0f \u8f93\u51fa\u955c\u50cf\u7684 SPDX SBOM \u6570\u636e\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u8f93\u51fa\u683c\u5f0f\u88ab\u8bbe\u5b9a\u4e3a ",(0,a.jsx)(n.code,{children:"spdx-json"}),"/",(0,a.jsx)(n.code,{children:"spdx-csv"})," \u65f6\uff0c\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf\u5c06\u88ab\u7981\u7528\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'hangar scan \\\n    --file="example_image_list.txt" \\\n    --format="spdx-json" \\\n    --jobs=4\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var a=s(6540);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);