"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[5683],{6238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(5893),r=n(1151),s=n(2991);const i={title:"Advanced Usage"},c=void 0,o={id:"advanced-usage/index",title:"Advanced Usage",description:"",source:"@site/versioned_docs/version-v1.6/13-advanced-usage/index.md",sourceDirName:"13-advanced-usage",slug:"/advanced-usage/",permalink:"/docs/advanced-usage/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/hangar-docs/edit/main/versioned_docs/version-v1.6/13-advanced-usage/index.md",tags:[],version:"v1.6",lastUpdatedAt:1700626232,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"Advanced Usage"},sidebar:"docs",previous:{title:"Load Validate Command",permalink:"/docs/load/load-validate"},next:{title:"Validate commands",permalink:"/docs/advanced-usage/validate"}},d={},l=[];function u(e){return(0,a.jsx)(s.Z,{})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var a=n(6010),r=n(2802),s=n(9960),i=n(3919),c=n(5999),o=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,a.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,a.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),s&&(0,l.jsx)("p",{className:(0,a.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const s=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,a.Z)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);