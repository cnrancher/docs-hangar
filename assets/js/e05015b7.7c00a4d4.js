"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[2090],{9173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(1151),c=n(2991);const s={title:"Development"},o=void 0,a={id:"dev/index",title:"Development",description:"",source:"@site/docs/15-dev/index.md",sourceDirName:"15-dev",slug:"/dev/",permalink:"/docs/next/dev/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/hangar-docs/edit/main/docs/15-dev/index.md",tags:[],version:"current",lastUpdatedAt:1700626232,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"Development"},sidebar:"tutorialSidebar",previous:{title:"Generate Rancher image list",permalink:"/docs/next/advanced-usage/generate-list"},next:{title:"Build Hangar",permalink:"/docs/next/dev/build"}},d={},l=[];function u(e){return(0,r.jsx)(c.Z,{})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var r=n(6010),i=n(2802),c=n(9960),s=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),c&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const c=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);