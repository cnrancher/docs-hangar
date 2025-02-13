"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5339],{9900:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"sign/validate","title":"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf","description":"hangar sign validate \u547d\u4ee4\u7528\u4e8e\u5bf9\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.9/14-sign/03-validate.md","sourceDirName":"14-sign","slug":"/sign/validate","permalink":"/zh/docs/v1.9/sign/validate","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.9/14-sign/03-validate.md","tags":[],"version":"v1.9","lastUpdatedAt":1739443627000,"sidebarPosition":3,"frontMatter":{"title":"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf"},"sidebar":"docs","previous":{"title":"\u5bb9\u5668\u955c\u50cf\u52a0\u7b7e","permalink":"/zh/docs/v1.9/sign/sign"},"next":{"title":"Scan","permalink":"/zh/docs/v1.9/scan/"}}');var s=i(4848),a=i(8453);const r={title:"\u6821\u9a8c\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf"},l=void 0,o={},d=[{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"hangar sign validate"})," \u547d\u4ee4\u7528\u4e8e\u5bf9\u5df2\u52a0\u7b7e\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Hangar ",(0,s.jsx)(n.code,{children:"1.8"})," \u7684 ",(0,s.jsx)(n.code,{children:"sign"})," \u547d\u4ee4\u5728 ",(0,s.jsx)(n.code,{children:"1.9"})," \u4e2d\u5df2\u91cd\u547d\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"signv1"})," \u5e76\u6807\u67f1\u4e3a\u5df2\u5f03\u7528\u3002\n\u82e5\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"1.8"})," \u5bf9\u5e94\u7684\u7b7e\u540d\u529f\u80fd\uff0c\u8bf7\u6267\u884c ",(0,s.jsx)(n.code,{children:"hangar signv1 --help"}),"\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bf9\u6267\u884c\u8fc7 ",(0,s.jsx)(n.a,{href:"sign",children:"sign"})," \u547d\u4ee4\u7684\u5bb9\u5668\u955c\u50cf\u8fdb\u884c\u6821\u9a8c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\n\nhangar sign validate \\\n    --file="example_image_list.txt" \\\n    --key="sigstore.pub" \\\n    --registry="REGISTRY_SERVER_URL" \\\n    --jobs=4\n'})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar sign validate --help"',children:'Validate the signed images with cosign sigstore public key\n\nUsage:\n  hangar sign validate -f IMAGE_LIST.txt [flags]\n\nExamples:\n# Validate the signed images by sigstore public key file.\nhangar sign validate \\\n        --file IMAGE_LIST.txt \\\n        --key cosign.pub \\\n        --arch amd64,arm64 \\\n        --os linux\n\nFlags:\n  -a, --arch strings                     architecture list of images (default [amd64,arm64])\n  -y, --auto-yes                         answer yes automatically (used in shell script)\n      --certificate-identity string      The identity expected in a valid Fulcio certificate. Valid values include email address, DNS names, IP addresses, and URIs. Must be set for keyless flows.\n      --certificate-oidc-issuer string   The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth. Must be set for keyless flows.\n  -o, --failed string                    file name of the sign failed image list (default "sign-failed.txt")\n  -f, --file string                      image list file\n      --format string                    output report format (available: json,yaml,csv) (default "json")\n  -h, --help                             help for validate\n      --insecure-ignore-tlog             ignore transparency log verification, to be used when an artifact signature has not been uploaded to the transparency log. Artifacts cannot be publicly verified when not included in a log\n  -j, --jobs int                         worker number, copy images parallelly (1-20) (default 1)\n  -k, --key string                       path to the cosign public key file\n      --offline                          only allow offline verification\n      --os strings                       OS list of images (default [linux])\n      --project string                   override all image projects in image list\n      --registry string                  override all image registry URL in image list\n      --rekor-url string                 address of rekor STL server (default "https://rekor.sigstore.dev")\n  -r, --report string                    sign validate report output file (default "sign-validate-report.[FORMAT]")\n      --timeout duration                 timeout when validate each images (default 10m0s)\n      --tls-verify                       require HTTPS and verify certificates\n      --validate-manifest-index          validate cosign sigstore signature of the manifest index (default true)\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n'})})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(6540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);