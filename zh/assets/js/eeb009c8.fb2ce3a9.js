"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1562],{6035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(5893),i=n(1151),c=n(2991);const s={title:"Archive"},o=void 0,a={id:"archive/index",title:"Archive",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8/20-archive/index.md",sourceDirName:"20-archive",slug:"/archive/",permalink:"/zh/docs/v1.8/archive/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.8/20-archive/index.md",tags:[],version:"v1.8",lastUpdatedAt:1718331177,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",frontMatter:{title:"Archive"},sidebar:"docs",previous:{title:"\u5bb9\u5668\u955c\u50cf\u6f0f\u6d1e\u626b\u63cf",permalink:"/zh/docs/v1.8/scan/scan"},next:{title:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",permalink:"/zh/docs/v1.8/archive/specification"}},d={},l=[];function u(e){return(0,r.jsx)(c.Z,{})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(6905),i=n(2802),c=n(3692),s=n(3919),o=n(5999),a=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),c&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,l.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const c=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(7294);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);