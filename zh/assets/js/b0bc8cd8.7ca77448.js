"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3221],{3141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(5893),r=n(1151),c=n(2991);const s={title:"Archive"},o=void 0,a={id:"archive/index",title:"Archive",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/14-archive/index.md",sourceDirName:"14-archive",slug:"/archive/",permalink:"/zh/docs/v1.7/archive/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/14-archive/index.md",tags:[],version:"v1.7",lastUpdatedAt:1706578472,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",frontMatter:{title:"Archive"},sidebar:"docs",previous:{title:"Sync Validate \u547d\u4ee4",permalink:"/zh/docs/v1.7/sync/validate"},next:{title:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",permalink:"/zh/docs/v1.7/archive/specification"}},d={},l=[];function u(e){return(0,i.jsx)(c.Z,{})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var i=n(6905),r=n(2802),c=n(3692),s=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:r,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),c&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,l.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,r.jA)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const c=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);