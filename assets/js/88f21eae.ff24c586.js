"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[2063],{9840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(4848),o=n(8453),s=n(5528);const c={title:"Development"},i=void 0,l={id:"dev/index",title:"Development",description:"",source:"@site/versioned_docs/version-v1.6/14-dev/index.md",sourceDirName:"14-dev",slug:"/dev/",permalink:"/docs/v1.6/dev/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/14-dev/index.md",tags:[],version:"v1.6",lastUpdatedAt:1732246766e3,frontMatter:{title:"Development"},sidebar:"docs",previous:{title:"generate-list Command",permalink:"/docs/v1.6/advanced/generate-list"},next:{title:"Build Hangar",permalink:"/docs/v1.6/dev/build"}},a={},d=[];function u(e){return(0,r.jsx)(s.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},5528:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),o=n(4164),s=n(9049),c=n(8774),i=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const d={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),d}}),[e])}function m(){const e=u();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var p=n(6654),f=n(1312),h=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var v=n(4848);function x(e){let{href:t,children:n}=e;return(0,v.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:s}=e;return(0,v.jsxs)(x,{href:t,children:[(0,v.jsxs)(h.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,v.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function w(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,v.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,v.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,v.jsx)(b,{item:t});case"category":return(0,v.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const n=(0,s.$S)();return(0,v.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,v.jsx)(C,{...e});const r=(0,s.d1)(t);return(0,v.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,v.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,v.jsx)(y,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);