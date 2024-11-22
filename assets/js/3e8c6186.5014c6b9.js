"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2561],{1180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(4848),o=n(8453),s=n(5528);const c={title:"Advanced Usage"},a=void 0,i={id:"advanced/index",title:"Advanced Usage",description:"",source:"@site/versioned_docs/version-v1.6/13-advanced/index.md",sourceDirName:"13-advanced",slug:"/advanced/",permalink:"/docs/v1.6/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/13-advanced/index.md",tags:[],version:"v1.6",lastUpdatedAt:1732246766e3,frontMatter:{title:"Advanced Usage"},sidebar:"docs",previous:{title:"Load Validate Command",permalink:"/docs/v1.6/load/validate"},next:{title:"Validate commands",permalink:"/docs/v1.6/advanced/validate"}},l={},d=[];function u(e){return(0,r.jsx)(s.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},5528:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(6540),o=n(4164),s=n(9049),c=n(8774),a=n(4586);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var f=n(6654),h=n(1312),p=n(1107);const v={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function x(e){let{href:t,children:n}=e;return(0,g.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",v.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:s}=e;return(0,g.jsxs)(x,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,o.A)("text--truncate",v.cardTitle),title:r,children:[n," ",r]}),s&&(0,g.jsx)("p",{className:(0,o.A)("text--truncate",v.cardDescription),title:s,children:s})]})}function A(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,g.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(w,{item:t});case"category":return(0,g.jsx)(A,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const n=(0,s.$S)();return(0,g.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(C,{...e});const r=(0,s.d1)(t);return(0,g.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);