"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[6060],{7249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(4848),o=n(8453),s=n(5528);const c={title:"Load"},i=void 0,a={id:"load/index",title:"Load",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.7/12-load/index.md",sourceDirName:"12-load",slug:"/load/",permalink:"/zh/docs/v1.7/load/",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/12-load/index.md",tags:[],version:"v1.7",lastUpdatedAt:1732246766e3,frontMatter:{title:"Load"},sidebar:"docs",previous:{title:"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f",permalink:"/zh/docs/v1.7/save/archive"},next:{title:"Load \u547d\u4ee4",permalink:"/zh/docs/v1.7/load/load"}},l={},u=[];function d(e){return(0,r.jsx)(s.A,{})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},5528:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),o=n(4164),s=n(9049),c=n(8774),i=n(4586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var h=n(6654),f=n(1312),p=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function v(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(v,{href:t,children:[(0,x.jsxs)(p.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function w(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(k,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(b,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);