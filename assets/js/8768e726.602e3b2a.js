"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6134],{4877:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"view/provenance","title":"View image SLSA Provenance","description":"Use hangar view provenance to view the SLSA Provenance data of container image\u3002","source":"@site/versioned_docs/version-v1.9/16-view/01-provenance.md","sourceDirName":"16-view","slug":"/view/provenance","permalink":"/docs/v1.9/view/provenance","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.9/16-view/01-provenance.md","tags":[],"version":"v1.9","lastUpdatedAt":1739438500000,"sidebarPosition":1,"frontMatter":{"title":"View image SLSA Provenance"},"sidebar":"docs","previous":{"title":"View security information","permalink":"/docs/v1.9/view/"},"next":{"title":"View image SBOM data","permalink":"/docs/v1.9/view/sbom"}}');var r=a(4848),i=a(8453);const o={title:"View image SLSA Provenance"},s=void 0,c={},d=[{value:"Quick start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"hangar view provenance"})," to view the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/build/metadata/attestations/slsa-provenance/",children:"SLSA Provenance"})," data of container image\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,r.jsx)(n.p,{children:"Use following command to view SLSA Provenance of container image."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nhangar view provenance cnrancher/rancher:v1.9.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The container image should be built by Docker Buildx and the ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/build/metadata/attestations/slsa-provenance/",children:"SLSA Provenance"})," output is enabled, or ",(0,r.jsx)(n.code,{children:"hangar view provenance"})," will report unable to find the provenance data of the image."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="hangar view provenance --help"',children:"View image SLSA Provenance\n\nUsage:\n  hangar view provenance [flags]\n\nFlags:\n  -y, --auto-yes               answer yes automatically (used in shell script)\n  -h, --help                   help for provenance\n      --override-arch string   use ARCH instead of the architecture of the machine for choosing images\n      --override-os string     use OS instead of the running OS for choosing images\n      --tls-verify             require HTTPS and verify certificates (default true)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n"})})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var t=a(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);