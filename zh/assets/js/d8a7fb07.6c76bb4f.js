"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[479],{4054:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),c=n(1151),i=n(2991);const s={title:"Sync"},o=void 0,a={id:"sync/index",title:"Sync",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/13-sync/index.md",sourceDirName:"13-sync",slug:"/sync/",permalink:"/zh/docs/next/sync/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/13-sync/index.md",tags:[],version:"current",lastUpdatedAt:1700639240,formattedLastUpdatedAt:"2023\u5e7411\u670822\u65e5",frontMatter:{title:"Sync"},sidebar:"tutorialSidebar",previous:{title:"Load Validate \u547d\u4ee4",permalink:"/zh/docs/next/load/validate"},next:{title:"Sync \u547d\u4ee4",permalink:"/zh/docs/next/sync/sync"}},d={},l=[];function u(t){return(0,r.jsx)(i.Z,{})}function m(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u()}},2991:(t,e,n)=>{n.d(e,{Z:()=>y});n(7294);var r=n(6010),c=n(2802),i=n(9960),s=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(t){let{href:e,children:n}=t;return(0,l.jsx)(i.Z,{href:e,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:c,description:i}=t;return(0,l.jsxs)(u,{href:e,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:c,children:[n," ",c]}),i&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(t){let{item:e}=t;const n=(0,c.LM)(e);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const n=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(e.docId??void 0);return(0,l.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function f(t){let{item:e}=t;switch(e.type){case"link":return(0,l.jsx)(p,{item:e});case"category":return(0,l.jsx)(h,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,c.jA)();return(0,l.jsx)(y,{items:n.items,className:e})}function y(t){const{items:e,className:n}=t;if(!e)return(0,l.jsx)(x,{...t});const i=(0,c.MN)(e);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((t,e)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:t})},e)))})}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var r=n(7294);const c={},i=r.createContext(c);function s(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);