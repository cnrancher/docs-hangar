"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[7786],{6891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(5893),r=n(1151),c=n(2991);const s={title:"\u9ad8\u7ea7\u7528\u6cd5"},a=void 0,o={id:"advanced-usage/index",title:"\u9ad8\u7ea7\u7528\u6cd5",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.6/13-advanced-usage/index.md",sourceDirName:"13-advanced-usage",slug:"/advanced-usage/",permalink:"/zh/docs/advanced-usage/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced-usage/index.md",tags:[],version:"v1.6",frontMatter:{title:"\u9ad8\u7ea7\u7528\u6cd5"},sidebar:"docs",previous:{title:"Load Validate \u547d\u4ee4",permalink:"/zh/docs/load/validate"},next:{title:"Validate \u5b50\u547d\u4ee4",permalink:"/zh/docs/advanced-usage/validate"}},d={},l=[];function u(e){return(0,i.jsx)(c.Z,{})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6010),r=n(2802),c=n(9960),s=n(3919),a=n(5999),o=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(c.Z,{href:t,className:(0,i.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:c}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,i.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),c&&(0,l.jsx)("p",{className:(0,i.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function h(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,r.jA)();return(0,l.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(x,{...e});const c=(0,r.MN)(t);return(0,l.jsx)("section",{className:(0,i.Z)("row",n),children:c.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(p,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const r={},c=i.createContext(r);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);