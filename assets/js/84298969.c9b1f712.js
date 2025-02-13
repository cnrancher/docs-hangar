"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[350],{5782:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>i});const t=JSON.parse('{"id":"advanced/completion","title":"Shell Completion","description":"The hangar completion command allows to generate shell completion scripts for different shells.","source":"@site/versioned_docs/version-v1.7/18-advanced/05-completion.md","sourceDirName":"18-advanced","slug":"/advanced/completion","permalink":"/docs/v1.7/advanced/completion","draft":false,"unlisted":false,"editUrl":"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.7/18-advanced/05-completion.md","tags":[],"version":"v1.7","lastUpdatedAt":1739438500000,"sidebarPosition":5,"frontMatter":{"title":"Shell Completion"},"sidebar":"docs","previous":{"title":"Convert image list format","permalink":"/docs/v1.7/advanced/convert-list"},"next":{"title":"Development","permalink":"/docs/v1.7/dev/"}}');var s=o(4848),a=o(8453);const c={title:"Shell Completion"},r=void 0,l={},i=[{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"hangar completion"})," command allows to generate shell completion scripts for different shells."]}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(n.p,{children:"Execute following command to enable Hangar shell completion."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"bash"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'source <(hangar completion bash)' >> ~/.bashrc && source ~/.bashrc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"zsh"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo 'source <(hangar completion zsh)' >> ~/.zshrc && source ~/.zshrc\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",metastring:'title="hangar completion --help"',children:'Generate the autocompletion script for hangar for the specified shell.\nSee each sub-command\'s help for details on how to use the generated script.\n\nUsage:\n  hangar completion [command]\n\nAvailable Commands:\n  bash        Generate the autocompletion script for bash\n  fish        Generate the autocompletion script for fish\n  powershell  Generate the autocompletion script for powershell\n  zsh         Generate the autocompletion script for zsh\n\nFlags:\n  -h, --help   help for completion\n\nGlobal Flags:\n      --debug             enable debug output\n      --insecure-policy   run Hangar without policy check\n\nUse "hangar completion [command] --help" for more information about a command.\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(6540);const s={},a=t.createContext(s);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);