"use strict";(self.webpackChunkhangar_docs=self.webpackChunkhangar_docs||[]).push([[8528],{4093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=r(5893),i=r(1151),o=r(2991);const c={title:"Mirror",slug:"xxx"},s=void 0,a={id:"mirror/index",title:"Mirror",description:"",source:"@site/docs/10-mirror/index.md",sourceDirName:"10-mirror",slug:"/mirror/xxx",permalink:"/docs/next/mirror/xxx",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/docs/10-mirror/index.md",tags:[],version:"current",frontMatter:{title:"Mirror",slug:"xxx"},sidebar:"tutorialSidebar",previous:{title:"Login & Logout",permalink:"/docs/next/login-logout"},next:{title:"Mirror Command",permalink:"/docs/next/mirror/mirror"}},d={},l=[];function u(e){return(0,n.jsx)(o.Z,{})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},2991:(e,t,r)=>{r.d(t,{Z:()=>g});r(7294);var n=r(6010),i=r(2802),o=r(9960),c=r(3919),s=r(5999),a=r(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=r(5893);function u(e){let{href:t,children:r}=e;return(0,l.jsx)(o.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:i,description:o}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.Z,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:i,children:[r," ",i]}),o&&(0,l.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function x(e){let{item:t}=e;const r=(0,i.LM)(t);return r?(0,l.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const r=(0,i.jA)();return(0,l.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,l.jsx)(p,{...e});const o=(0,i.MN)(t);return(0,l.jsx)("section",{className:(0,n.Z)("row",r),children:o.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>c});var n=r(7294);const i={},o=n.createContext(i);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);