"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5557],{1375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=t(5893),i=t(1151);const r={title:"Automation Test"},a=void 0,l={id:"dev/test",title:"Automation Test",description:"Hangar project source code includes unit tests and validation tests.",source:"@site/versioned_docs/version-v1.7/19-dev/02-test.md",sourceDirName:"19-dev",slug:"/dev/test",permalink:"/docs/v1.7/dev/test",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/19-dev/02-test.md",tags:[],version:"v1.7",lastUpdatedAt:1710300126,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:2,frontMatter:{title:"Automation Test"},sidebar:"docs",previous:{title:"Build Hangar",permalink:"/docs/v1.7/dev/build"},next:{title:"Best Practice",permalink:"/docs/v1.7/bestpractice/"}},c={},o=[{value:"Validation Test",id:"validation-test",level:2},{value:"In Container",id:"in-container",level:3},{value:"Without Container",id:"without-container",level:3},{value:"Unit Test",id:"unit-test",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cnrancher/hangar",children:"Hangar"})," project source code includes unit tests and validation tests."]}),"\n",(0,s.jsx)(n.h2,{id:"validation-test",children:"Validation Test"}),"\n",(0,s.jsx)(n.h3,{id:"in-container",children:"In Container"}),"\n",(0,s.jsx)(n.p,{children:"Use following commands to run hangar validation tests in a container."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"make build"})," to build hangar executable binary in container."]}),"\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"make validation-test"})," to run validation tests for all hangar subcommands."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"without-container",children:"Without Container"}),"\n",(0,s.jsx)(n.p,{children:"To run validation tests on your local machine:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build hangar on your local machine by following ",(0,s.jsx)(n.a,{href:"/docs/v1.7/dev/build#building-without-a-container",children:"Building without a container"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Install python dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"cd test/\npip install -r requirements.txt\npip install tox\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"scripts/registry.sh"}),", this will create a temporary ",(0,s.jsx)(n.em,{children:"private registry server"})," for tests."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"./scripts/registry.sh\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"To run specific test file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# Set REGISTRY_AUTH_FILE environment variable to avoid permission denied error during tests.\nexport REGISTRY_AUTH_FILE="${HOME}/.config/containers/auth.json"\n\n# Specify the REGISTRY_URL environment variable manually.\nexport REGISTRY_URL=127.0.0.1:5000\n\ncd suite/\n\n# Run specific test file.\npytest -s test_help.py\n# Run specific test case.\npytest -s test_help.py::test_help\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cleanup:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run ",(0,s.jsx)(n.code,{children:"scripts/clean.sh"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Delete the ",(0,s.jsx)(n.code,{children:"registry"})," directory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"unit-test",children:"Unit Test"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run unit tests in container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make test\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run unit tests on local machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./scripts/test.sh\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);