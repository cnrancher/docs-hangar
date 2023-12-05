"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1157],{7925:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(5893),o=n(1151);const s={title:"Q&A"},a=void 0,c={id:"questions",title:"Q&A",description:"About Hangar",source:"@site/versioned_docs/version-v1.7/99-questions.md",sourceDirName:".",slug:"/questions",permalink:"/v1.7/questions",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/99-questions.md",tags:[],version:"v1.7",sidebarPosition:99,frontMatter:{title:"Q&A"},sidebar:"docs",previous:{title:"Hangar Docker Image",permalink:"/v1.7/docker-image"}},t={},d=[{value:"About Hangar",id:"about-hangar",level:2},{value:"Hangar cache directory",id:"hangar-cache-directory",level:2},{value:"Harbor 2.X registry",id:"harbor-2x-registry",level:2},{value:"Why using <code>zip</code> archive format?",id:"why-using-zip-archive-format",level:2},{value:"Common Errors and Solutions",id:"common-errors-and-solutions",level:2},{value:"Error: <code>manifest unknown</code>",id:"error-manifest-unknown",level:3},{value:"Error: <code>unsupported MIME type</code>",id:"error-unsupported-mime-type",level:3},{value:"Error: <code>open /etc/containers/policy.json: no such file or directory</code>",id:"error-open-etccontainerspolicyjson-no-such-file-or-directory",level:3},{value:"Warning: <code>no avaiable image for specified arch and os</code>",id:"warning-no-avaiable-image-for-specified-arch-and-os",level:3},{value:"Error when copy images to Harbor 2.X registry: <code>authentication required</code>",id:"error-when-copy-images-to-harbor-2x-registry-authentication-required",level:3},{value:"Error: <code>server gave HTTP response to HTTPS client</code>",id:"error-server-gave-http-response-to-https-client",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"about-hangar",children:"About Hangar"}),"\n",(0,i.jsx)(r.p,{children:"Dependencies:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Hangar uses ",(0,i.jsx)(r.a,{href:"https://github.com/containers/image",children:"containers/images"})," dependecy to perform image copy operations.",(0,i.jsx)("br",{}),"\nSince the ",(0,i.jsx)(r.a,{href:"https://github.com/containers/signature",children:"containers/signature"})," API uses C libraries, so CGO was enabled when building hangar binary, and the built binary file has dynamic link libraries."]}),"\n",(0,i.jsxs)(r.li,{children:["Hangar uses ",(0,i.jsx)(r.a,{href:"https://github.com/helm/helm",children:"Helm"})," library for generating image list from Helm Chart."]}),"\n",(0,i.jsxs)(r.li,{children:["Hangar uses ",(0,i.jsx)(r.a,{href:"https://github.com/spf13/cobra",children:"cobra"})," library to handle commands and generate ",(0,i.jsx)(r.a,{href:"/v1.7/advanced/completion",children:"shell completion scripts"}),"."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"hangar-cache-directory",children:"Hangar cache directory"}),"\n",(0,i.jsxs)(r.p,{children:["Hangar uses ",(0,i.jsx)(r.code,{children:"${HOME}/.cache/hangar_cache"})," to store temporary image blob files when saving / loading images into archive file."]}),"\n",(0,i.jsxs)(r.p,{children:["You need to delete ",(0,i.jsx)(r.code,{children:"${HOME}/.cache/hangar_cache"})," directory manually if you force killed hangar when copying images."]}),"\n",(0,i.jsx)(r.h2,{id:"harbor-2x-registry",children:"Harbor 2.X registry"}),"\n",(0,i.jsxs)(r.p,{children:["Hangar will try to create private ",(0,i.jsx)(r.strong,{children:"Harbor Project"})," automatically for ",(0,i.jsx)(r.a,{href:"/v1.7/load/load",children:"load"})," command if the destination registry is harbor."]}),"\n",(0,i.jsxs)(r.p,{children:["You need to create ",(0,i.jsx)(r.strong,{children:"Harbor Project"})," manually if hangar can't create the project automatically, or the image will fail to copy."]}),"\n",(0,i.jsxs)(r.h2,{id:"why-using-zip-archive-format",children:["Why using ",(0,i.jsx)(r.code,{children:"zip"})," archive format?"]}),"\n",(0,i.jsxs)(r.p,{children:["See ",(0,i.jsx)(r.a,{href:"/v1.7/save/archive",children:"hangar archive"})," for more information of the new archive format."]}),"\n",(0,i.jsxs)(r.p,{children:["Since hangar uses the ",(0,i.jsx)(r.code,{children:"zip"})," format archive file after version ",(0,i.jsx)(r.code,{children:"v1.7.0"}),"."]}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsxs)(r.strong,{children:["The archive file created by older versions of hangar (",(0,i.jsx)(r.code,{children:"tar.gz"}),") are no longer compatible with new versions (",(0,i.jsx)(r.code,{children:"zip"}),")."]})}),"\n",(0,i.jsx)(r.h2,{id:"common-errors-and-solutions",children:"Common Errors and Solutions"}),"\n",(0,i.jsxs)(r.h3,{id:"error-manifest-unknown",children:["Error: ",(0,i.jsx)(r.code,{children:"manifest unknown"})]}),"\n",(0,i.jsxs)(r.p,{children:["The image to be copy does not exists. you can use ",(0,i.jsx)(r.code,{children:"hangar inspect --raw docker://<IMAGE>"})," to check whether the image exists or not."]}),"\n",(0,i.jsxs)(r.h3,{id:"error-unsupported-mime-type",children:["Error: ",(0,i.jsx)(r.code,{children:"unsupported MIME type"})]}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"mediaType"})," of the image manifest is not supported."]}),"\n",(0,i.jsxs)(r.p,{children:["Hangar supports following types of ",(0,i.jsx)(r.code,{children:"mediaType"}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"application/vnd.docker.distribution.manifest.v2+json"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"application/vnd.docker.distribution.manifest.v1+json"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"application/vnd.oci.image.manifest.v1+json"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,i.jsxs)(r.h3,{id:"error-open-etccontainerspolicyjson-no-such-file-or-directory",children:["Error: ",(0,i.jsx)(r.code,{children:"open /etc/containers/policy.json: no such file or directory"})]}),"\n",(0,i.jsxs)(r.p,{children:["The policy config file ",(0,i.jsx)(r.code,{children:"/etc/containers/policy.json"})," does not exists, you can obtain a default policy file at ",(0,i.jsx)(r.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/default-policy.json",children:"default-policy.json"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Or you can execute hangar with ",(0,i.jsx)(r.code,{children:"--insecure-policy"})," option."]}),"\n",(0,i.jsxs)(r.h3,{id:"warning-no-avaiable-image-for-specified-arch-and-os",children:["Warning: ",(0,i.jsx)(r.code,{children:"no avaiable image for specified arch and os"})]}),"\n",(0,i.jsxs)(r.p,{children:["The architecture / OS of the image to be copied does not match the architecture & OS specified by the ",(0,i.jsx)(r.code,{children:"--arch"})," and ",(0,i.jsx)(r.code,{children:"--os"})," parameter."]}),"\n",(0,i.jsxs)(r.p,{children:["Example\uff1athe image to be copied only contains ",(0,i.jsx)(r.code,{children:"amd64"})," architecture, but ",(0,i.jsx)(r.code,{children:"--arch"})," option of hangar is ",(0,i.jsx)(r.code,{children:"arm64"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"This warning message will not affect the image copy process. When this warning message shows, it is only used to inform that this container image has not been copied."}),"\n",(0,i.jsxs)(r.h3,{id:"error-when-copy-images-to-harbor-2x-registry-authentication-required",children:["Error when copy images to Harbor 2.X registry: ",(0,i.jsx)(r.code,{children:"authentication required"})]}),"\n",(0,i.jsxs)(r.p,{children:["Check whether the Harbor Project exists. You need to create Harbor Project manually when running ",(0,i.jsx)(r.code,{children:"mirror"})," command."]}),"\n",(0,i.jsxs)(r.h3,{id:"error-server-gave-http-response-to-https-client",children:["Error: ",(0,i.jsx)(r.code,{children:"server gave HTTP response to HTTPS client"})]}),"\n",(0,i.jsxs)(r.p,{children:["Add ",(0,i.jsx)(r.code,{children:"--tls-verify=false"})," option if registry server is using self-signed certificate or HTTP."]})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);