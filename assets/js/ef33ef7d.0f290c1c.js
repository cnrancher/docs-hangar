"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5987],{7803:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>t,toc:()=>d});var n=r(5893),o=r(1151);const s={title:"Q&A"},a=void 0,t={id:"questions",title:"Q&A",description:"About Hangar",source:"@site/versioned_docs/version-v1.8/99-questions.md",sourceDirName:".",slug:"/questions",permalink:"/docs/v1.8/questions",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/99-questions.md",tags:[],version:"v1.8",lastUpdatedAt:1715074519,formattedLastUpdatedAt:"May 7, 2024",sidebarPosition:99,frontMatter:{title:"Q&A"},sidebar:"docs",previous:{title:"Hangar Docker Image",permalink:"/docs/v1.8/docker-image"}},c={},d=[{value:"About Hangar",id:"about-hangar",level:2},{value:"Hangar cache directory",id:"hangar-cache-directory",level:2},{value:"Harbor 2.X registry",id:"harbor-2x-registry",level:2},{value:"Why using <code>zip</code> archive format?",id:"why-using-zip-archive-format",level:2},{value:"Will the image digest changed after copying by hangar?",id:"will-the-image-digest-changed-after-copying-by-hangar",level:2},{value:"Common Errors and Solutions",id:"common-errors-and-solutions",level:2},{value:"Error: <code>manifest unknown</code>",id:"error-manifest-unknown",level:3},{value:"Error: <code>unsupported MIME type</code>",id:"error-unsupported-mime-type",level:3},{value:"Error: <code>open /etc/containers/policy.json: no such file or directory</code>",id:"error-open-etccontainerspolicyjson-no-such-file-or-directory",level:3},{value:"Warning: <code>no avaiable image for specified arch and os</code>",id:"warning-no-avaiable-image-for-specified-arch-and-os",level:3},{value:"Error when copy images to Harbor 2.X registry: <code>authentication required</code>",id:"error-when-copy-images-to-harbor-2x-registry-authentication-required",level:3},{value:"Error: <code>server gave HTTP response to HTTPS client</code>",id:"error-server-gave-http-response-to-https-client",level:3},{value:"Error: <code>writing sigstore attachments is disabled by configuration</code>",id:"error-writing-sigstore-attachments-is-disabled-by-configuration",level:3},{value:"Error: <code>Signature for identity ... is not accepted</code>",id:"error-signature-for-identity--is-not-accepted",level:3}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"about-hangar",children:"About Hangar"}),"\n",(0,n.jsx)(i.p,{children:"Dependencies:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:["Hangar uses ",(0,n.jsx)(i.a,{href:"https://github.com/containers/image",children:"containers/images"})," dependecy to perform image copy and sign operations.",(0,n.jsx)("br",{}),"\nSince the ",(0,n.jsx)(i.a,{href:"https://github.com/containers/signature",children:"containers/signature"})," API uses C libraries, so CGO was enabled when building hangar binary, and the built binary file has dynamic link libraries."]}),"\n",(0,n.jsxs)(i.li,{children:["Hangar uses ",(0,n.jsx)(i.a,{href:"https://github.com/aquasecurity/trivy",children:"aquasecurity/trivy"})," dependency to scan container image vulnerabilities.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(i.li,{children:["Hangar uses ",(0,n.jsx)(i.a,{href:"https://github.com/helm/helm",children:"Helm"})," library for generating image list from Helm Chart."]}),"\n",(0,n.jsxs)(i.li,{children:["Hangar uses ",(0,n.jsx)(i.a,{href:"https://github.com/spf13/cobra",children:"cobra"})," library to handle commands and generate ",(0,n.jsx)(i.a,{href:"/docs/v1.8/advanced/completion",children:"shell completion scripts"}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"hangar-cache-directory",children:"Hangar cache directory"}),"\n",(0,n.jsxs)(i.p,{children:["Hangar uses ",(0,n.jsx)(i.code,{children:"${HOME}/.cache/hangar"})," to store temporary image blob files when saving / loading images into archive file."]}),"\n",(0,n.jsxs)(i.p,{children:["Hangar uses ",(0,n.jsx)(i.code,{children:"${HOME}/.cache/trivy"})," to store trivy databases when scanning images."]}),"\n",(0,n.jsxs)(i.p,{children:["You need to delete ",(0,n.jsx)(i.code,{children:"${HOME}/.cache/hangar"})," directory manually if you force killed hangar when copying images."]}),"\n",(0,n.jsx)(i.h2,{id:"harbor-2x-registry",children:"Harbor 2.X registry"}),"\n",(0,n.jsxs)(i.p,{children:["Hangar will try to create private ",(0,n.jsx)(i.strong,{children:"Harbor Project"})," automatically for ",(0,n.jsx)(i.a,{href:"/docs/v1.8/load/load",children:"load"})," command if the destination registry is harbor."]}),"\n",(0,n.jsxs)(i.p,{children:["You need to create ",(0,n.jsx)(i.strong,{children:"Harbor Project"})," manually if hangar can't create the project automatically, or the image will fail to copy."]}),"\n",(0,n.jsxs)(i.h2,{id:"why-using-zip-archive-format",children:["Why using ",(0,n.jsx)(i.code,{children:"zip"})," archive format?"]}),"\n",(0,n.jsxs)(i.p,{children:["See ",(0,n.jsx)(i.a,{href:"/docs/v1.8/archive/specification",children:"hangar archive"})," for more information of the new archive format."]}),"\n",(0,n.jsxs)(i.p,{children:["Since hangar uses the ",(0,n.jsx)(i.code,{children:"zip"})," format archive file after version ",(0,n.jsx)(i.code,{children:"v1.7.0"}),"."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsxs)(i.strong,{children:["The archive file created by older versions of hangar (",(0,n.jsx)(i.code,{children:"tar.gz"}),") are no longer compatible with new versions (",(0,n.jsx)(i.code,{children:"zip"}),")."]})}),"\n",(0,n.jsx)(i.h2,{id:"will-the-image-digest-changed-after-copying-by-hangar",children:"Will the image digest changed after copying by hangar?"}),"\n",(0,n.jsxs)(i.p,{children:["Starting from ",(0,n.jsx)(i.code,{children:"v1.7.0"}),", hangar will try to do not change the copied image digest."]}),"\n",(0,n.jsxs)(i.p,{children:["Only when the source image is deprecated ",(0,n.jsx)(i.a,{href:"https://distribution.github.io/distribution/spec/deprecated-schema-v1/",children:"Docker manifest Version2 Schema1"})," (",(0,n.jsx)(i.code,{children:"application/vnd.docker.distribution.manifest.v1+json"}),"), hangar will update its manifest ",(0,n.jsx)(i.code,{children:"mediaType"})," to ",(0,n.jsx)(i.a,{href:"https://distribution.github.io/distribution/spec/manifest-v2-2/",children:"Docker manifest Version2 Schema2"})," (",(0,n.jsx)(i.code,{children:"application/vnd.docker.distribution.manifest.v2+json"}),") when copying the container image, and the copied image digest will be changed."]}),"\n",(0,n.jsx)(i.h2,{id:"common-errors-and-solutions",children:"Common Errors and Solutions"}),"\n",(0,n.jsxs)(i.h3,{id:"error-manifest-unknown",children:["Error: ",(0,n.jsx)(i.code,{children:"manifest unknown"})]}),"\n",(0,n.jsxs)(i.p,{children:["The image to be copy does not exists. you can use ",(0,n.jsx)(i.code,{children:"hangar inspect --raw docker://<IMAGE>"})," to check whether the image exists or not."]}),"\n",(0,n.jsxs)(i.h3,{id:"error-unsupported-mime-type",children:["Error: ",(0,n.jsx)(i.code,{children:"unsupported MIME type"})]}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"mediaType"})," of the image manifest is not supported."]}),"\n",(0,n.jsxs)(i.p,{children:["Hangar supports following types of ",(0,n.jsx)(i.code,{children:"mediaType"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"application/vnd.docker.distribution.manifest.list.v2+json"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"application/vnd.docker.distribution.manifest.v2+json"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"application/vnd.docker.distribution.manifest.v1+json"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"application/vnd.oci.image.manifest.v1+json"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"application/vnd.oci.image.index.v1+json"})}),"\n"]}),"\n",(0,n.jsxs)(i.h3,{id:"error-open-etccontainerspolicyjson-no-such-file-or-directory",children:["Error: ",(0,n.jsx)(i.code,{children:"open /etc/containers/policy.json: no such file or directory"})]}),"\n",(0,n.jsxs)(i.p,{children:["The policy config file ",(0,n.jsx)(i.code,{children:"/etc/containers/policy.json"})," does not exists, you can obtain a default policy file at ",(0,n.jsx)(i.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/default-policy.json",children:"default-policy.json"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Or you can execute hangar with ",(0,n.jsx)(i.code,{children:"--insecure-policy"})," option."]}),"\n",(0,n.jsxs)(i.h3,{id:"warning-no-avaiable-image-for-specified-arch-and-os",children:["Warning: ",(0,n.jsx)(i.code,{children:"no avaiable image for specified arch and os"})]}),"\n",(0,n.jsxs)(i.p,{children:["The architecture / OS of the image to be copied does not match the architecture & OS specified by the ",(0,n.jsx)(i.code,{children:"--arch"})," and ",(0,n.jsx)(i.code,{children:"--os"})," parameter."]}),"\n",(0,n.jsxs)(i.p,{children:["Example\uff1athe image to be copied only contains ",(0,n.jsx)(i.code,{children:"amd64"})," architecture, but ",(0,n.jsx)(i.code,{children:"--arch"})," option of hangar is ",(0,n.jsx)(i.code,{children:"arm64"}),"."]}),"\n",(0,n.jsx)(i.p,{children:"This warning message will not affect the image copy process. When this warning message shows, it is only used to inform that this container image has not been copied."}),"\n",(0,n.jsxs)(i.h3,{id:"error-when-copy-images-to-harbor-2x-registry-authentication-required",children:["Error when copy images to Harbor 2.X registry: ",(0,n.jsx)(i.code,{children:"authentication required"})]}),"\n",(0,n.jsxs)(i.p,{children:["Check whether the Harbor Project exists. You need to create Harbor Project manually when running ",(0,n.jsx)(i.code,{children:"mirror"})," command."]}),"\n",(0,n.jsxs)(i.h3,{id:"error-server-gave-http-response-to-https-client",children:["Error: ",(0,n.jsx)(i.code,{children:"server gave HTTP response to HTTPS client"})]}),"\n",(0,n.jsxs)(i.p,{children:["Add ",(0,n.jsx)(i.code,{children:"--tls-verify=false"})," option if registry server is using self-signed certificate or HTTP."]}),"\n",(0,n.jsxs)(i.h3,{id:"error-writing-sigstore-attachments-is-disabled-by-configuration",children:["Error: ",(0,n.jsx)(i.code,{children:"writing sigstore attachments is disabled by configuration"})]}),"\n",(0,n.jsxs)(i.p,{children:["You need to explicitly set the ",(0,n.jsx)(i.code,{children:"use-sigstore-attachments"})," of ",(0,n.jsx)(i.a,{href:"https://github.com/containers/image/blob/main/docs/containers-registries.d.5.md#individual-configuration-sections",children:"registries configuration"})," to ",(0,n.jsx)(i.code,{children:"true"})," to allow Hangar upload sigstore signature when signing images."]}),"\n",(0,n.jsxs)(i.p,{children:["You can obtain the example ",(0,n.jsx)(i.code,{children:"/etc/containers/registries.d/default.yaml"})," registry configuration file from ",(0,n.jsx)(i.a,{href:"https://github.com/cnrancher/hangar/blob/main/package/registries.d/default.yaml",children:"here"}),"."]}),"\n",(0,n.jsxs)(i.h3,{id:"error-signature-for-identity--is-not-accepted",children:["Error: ",(0,n.jsx)(i.code,{children:"Signature for identity ... is not accepted"})]}),"\n",(0,n.jsxs)(i.p,{children:["See ",(0,n.jsx)(i.a,{href:"/docs/v1.8/sign/validate#validate-the-mirrored-image-signature",children:"validate the mirrored image signature"})," for more information."]})]})}function l(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,i,r)=>{r.d(i,{Z:()=>t,a:()=>a});var n=r(7294);const o={},s=n.createContext(o);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);