"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[1097],{8432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=n(5893),a=n(1151),i=n(2991);const c={title:"Advanced Usage"},s=void 0,o={id:"advanced/index",title:"Advanced Usage",description:"",source:"@site/versioned_docs/version-v1.6/13-advanced/index.md",sourceDirName:"13-advanced",slug:"/advanced/",permalink:"/docs/v1.6/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/index.md",tags:[],version:"v1.6",lastUpdatedAt:1702281722,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{title:"Advanced Usage"},sidebar:"docs",previous:{title:"Load Validate Command",permalink:"/docs/v1.6/load/validate"},next:{title:"Validate commands",permalink:"/docs/v1.6/advanced/validate"}},d={},l=[];function u(e){return(0,r.jsx)(i.Z,{})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},2991:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var r=n(6905),a=n(2802),i=n(9960),c=n(3919),s=n(5999),o=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=n(5893);function u(e){let{href:t,children:n}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:a,description:i}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:a,children:[n," ",a]}),i&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,a.LM)(t);return n?(0,l.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,a.jA)();return(0,l.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,l.jsx)(v,{...e});const i=(0,a.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7294);const a={},i=r.createContext(a);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);