"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[8203],{1597:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=o(5893),s=o(1151);const a={title:"Shell Completion"},r=void 0,c={id:"advanced/completion",title:"Shell Completion",description:"The hangar completion command allows to generate shell completion scripts for different shells.",source:"@site/versioned_docs/version-v1.7/18-advanced/05-completion.md",sourceDirName:"18-advanced",slug:"/advanced/completion",permalink:"/docs/v1.7/advanced/completion",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/18-advanced/05-completion.md",tags:[],version:"v1.7",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:5,frontMatter:{title:"Shell Completion"},sidebar:"docs",previous:{title:"Convert image list format",permalink:"/docs/v1.7/advanced/convert-list"},next:{title:"Development",permalink:"/docs/v1.7/dev/"}},l={},i=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"hangar completion"})," command allows to generate shell completion scripts for different shells."]}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:"Execute following command to enable Hangar shell completion."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"bash"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 'source <(hangar completion bash)' >> ~/.bashrc && source ~/.bashrc\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"zsh"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo 'source <(hangar completion zsh)' >> ~/.zshrc && source ~/.zshrc\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="hangar completion --help"',children:'Generate the autocompletion script for hangar for the specified shell.\nSee each sub-command\'s help for details on how to use the generated script.\n\nUsage:\n  hangar completion [command]\n\nAvailable Commands:\n  bash        Generate the autocompletion script for bash\n  fish        Generate the autocompletion script for fish\n  powershell  Generate the autocompletion script for powershell\n  zsh         Generate the autocompletion script for zsh\n\nFlags:\n  -h, --help   help for completion\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar completion [command] --help" for more information about a command.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var t=o(7294);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);