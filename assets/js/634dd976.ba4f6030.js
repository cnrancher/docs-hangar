"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[8089],{602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(5893),r=t(1151);const o={title:"Automation Test"},i="Test",a={id:"dev/test",title:"Automation Test",description:"Hangar project source code includes Unit tests & Validation tests.",source:"@site/versioned_docs/version-v1.6/14-dev/02-test.md",sourceDirName:"14-dev",slug:"/dev/test",permalink:"/docs/dev/test",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/14-dev/02-test.md",tags:[],version:"v1.6",lastUpdatedAt:1700642431,formattedLastUpdatedAt:"Nov 22, 2023",sidebarPosition:2,frontMatter:{title:"Automation Test"},sidebar:"docs",previous:{title:"Build Hangar",permalink:"/docs/dev/build"},next:{title:"Hangar Docker Image",permalink:"/docs/docker-images"}},c={},d=[{value:"Validation test",id:"validation-test",level:2},{value:"Prepare",id:"prepare",level:3},{value:"Run tests in container",id:"run-tests-in-container",level:3},{value:"Unit test",id:"unit-test",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"test",children:"Test"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cnrancher/hangar",children:"Hangar"})," project source code includes Unit tests & Validation tests."]}),"\n",(0,s.jsx)(n.h2,{id:"validation-test",children:"Validation test"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Test the output of version, help message, etc."}),"\n",(0,s.jsx)(n.li,{children:"Run mirror & mirror-validate test first, mirror container images from public registry server to the Harbor private regitry server."}),"\n",(0,s.jsx)(n.li,{children:"Then run tests for save, load, load-validate, sync, compress, decompress etc commands."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"prepare",children:"Prepare"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Clone the source code and build the executable binary:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ git clone https://github.com/cnrancher/hangar && cd hangar\n$ make build\n"})}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Prepare a Harbor V2 Registry server."}),"\n",(0,s.jsxs)(n.li,{children:["Setup environment variables.","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'export SOURCE_REGISTRY="" # set to empty string\nexport SOURCE_USERNAME="" # docker hub username (optional)\nexport SOURCE_PASSWORD="" # docker hub password (optional)\n\nexport DEST_REGISTRY="" # harbor registry url\nexport DEST_USERNAME="" # harbor username\nexport DEST_PASSWORD="" # harbor password\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If the Harbor v2 uses HTTP or insecure TLS certificate,\nset ",(0,s.jsx)(n.code,{children:'export TEST_SKIP_TLS="true"'})," to skip tls verify."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"run-tests-in-container",children:"Run tests in container"}),"\n",(0,s.jsx)(n.p,{children:"Run tests of all commands in container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ make test_all\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Besides, you can run ",(0,s.jsx)(n.code,{children:"make test_[COMMAND_NAME]"})," to test the command."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Need to run ",(0,s.jsx)(n.code,{children:"make test_mirror"})," before running tests of other commands."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# mirror | mirror-validate command\nmake test_mirror\n\n# save command\nmake test_save\n\n# load | load-validate command\nmake test_load\n\n# sync | compress | decompress command\nmake test_sync\n\n# Test other commands...\nmake test_[COMMAND_NAME]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unit-test",children:"Unit test"}),"\n",(0,s.jsx)(n.p,{children:"Run unit tests in container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"$ make test\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);