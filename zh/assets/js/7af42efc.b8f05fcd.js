"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5911],{5869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),c=n(1151),i=n(2991);const s={title:"Sync"},o=void 0,a={id:"sync/index",title:"Sync",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/13-sync/index.md",sourceDirName:"13-sync",slug:"/sync/",permalink:"/zh/docs/v1.8/sync/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/13-sync/index.md",tags:[],version:"v1.8",lastUpdatedAt:1712559568,formattedLastUpdatedAt:"2024\u5e744\u67088\u65e5",frontMatter:{title:"Sync"},sidebar:"docs",previous:{title:"Load Validate \u547d\u4ee4",permalink:"/zh/docs/v1.8/load/validate"},next:{title:"Sync \u547d\u4ee4",permalink:"/zh/docs/v1.8/sync/sync"}},d={},l=[];function u(e){return(0,r.jsx)(i.Z,{})}function m(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>y});n(7294);var r=n(6905),c=n(2802),i=n(3692),s=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:c,description:i}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:c,children:[n," ",c]}),i&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,c.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,c.jA)();return(0,l.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const i=(0,c.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const c={},i=r.createContext(c);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);