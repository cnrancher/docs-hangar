"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3935],{9911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(1151),s=n(2991);const c={title:"\u5f00\u53d1\u8c03\u8bd5"},o=void 0,a={id:"dev/index",title:"\u5f00\u53d1\u8c03\u8bd5",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/14-dev/index.md",sourceDirName:"14-dev",slug:"/dev/",permalink:"/zh/docs/v1.6/dev/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/14-dev/index.md",tags:[],version:"v1.6",lastUpdatedAt:1704254310,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",frontMatter:{title:"\u5f00\u53d1\u8c03\u8bd5"},sidebar:"docs",previous:{title:"generate-list \u547d\u4ee4",permalink:"/zh/docs/v1.6/advanced/generate-list"},next:{title:"\u6784\u5efa Hangar",permalink:"/zh/docs/v1.6/dev/build"}},d={},l=[];function u(e){return(0,r.jsx)(s.Z,{})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(6905),i=n(2802),s=n(9960),c=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const s=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(7294);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);