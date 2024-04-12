"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[3635],{6493:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(5893),n=s(1151);const r={title:"Save Command"},i=void 0,o={id:"save/save",title:"Save Command",description:"Save images from registry server into local file (compressed tarball or directory) and can be used by load command.",source:"@site/versioned_docs/version-v1.6/11-save/01-save.md",sourceDirName:"11-save",slug:"/save/save",permalink:"/docs/v1.6/save/save",draft:!1,unlisted:!1,editUrl:"https://github.com/cnrancher/docs-hangar/edit/main/versioned_docs/version-v1.6/11-save/01-save.md",tags:[],version:"v1.6",lastUpdatedAt:1712894136,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:1,frontMatter:{title:"Save Command"},sidebar:"docs",previous:{title:"Save",permalink:"/docs/v1.6/save/"},next:{title:"Load",permalink:"/docs/v1.6/load/"}},d={},c=[{value:"Image List Format",id:"image-list-format",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Usage",id:"usage",level:2},{value:"Save principle",id:"save-principle",level:2},{value:"Split the compressed file into multi part",id:"split-the-compressed-file-into-multi-part",level:2}];function l(e){const a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["Save images from registry server into local file (compressed tarball or directory) and can be used by ",(0,t.jsx)(a.a,{href:"/docs/v1.6/load/load",children:"load"})," command."]}),"\n",(0,t.jsx)(a.h2,{id:"image-list-format",children:"Image List Format"}),"\n",(0,t.jsxs)(a.p,{children:["Each line contains ",(0,t.jsx)(a.strong,{children:'"image name: TAG"'}),", and the image and TAG are separated by ",(0,t.jsx)(a.code,{children:":"}),", for example:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",children:"# <NAME>:<TAG>\nrancher/rancher:v2.7.0\n"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["Line starts with ",(0,t.jsx)(a.code,{children:"#"})," or ",(0,t.jsx)(a.code,{children:"//"})," will be treated as a comment."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsxs)(a.p,{children:["Download all the images in the ",(0,t.jsx)(a.code,{children:"rancher-images.txt"})," and create a ",(0,t.jsx)(a.code,{children:"tar.gz"})," archive:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"hangar save -f ./rancher-images.txt -d saved-images.tar.gz\n"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["This command will download the image to the ",(0,t.jsx)(a.code,{children:"saved-image-cache"})," cache folder firstly, and then create a compressed tarball of this folder."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-txt",children:"Usage:\n  hangar save [flags]\n\nExamples:\n  hangar save -f rancher-images.txt -j [WORKER_NUM] -d SAVED_FILE.tar.gz\n\nFlags:\n  -a, --arch string          architecture list of images, separate with ',' (default \"amd64,arm64\")\n  -c, --compress string      compress format, can be 'gzip', 'zstd' or 'dir' (set to 'dir' to disable compression, rename the cache directory only) (default \"gzip\")\n  -d, --destination string   file name of saved images\n                             (can use '--compress' to specify the output file format, default is gzip)\n                             (default \"saved-images.[FORMAT_SUFFIX]\")\n  -o, --failed string        file name of the save failed image list (default \"save-failed.txt\")\n  -f, --file string          image list file (the format as same as 'rancher-images.txt')\n  -h, --help                 help for save\n  -j, --jobs int             worker number, concurrent mode if larger than 1, max 20 (default 1)\n      --no-arch-os-fail      image copy failed when the OS and architecture of the image are not supported\n      --os string            OS list of images, separate with ',' (default \"linux,windows\")\n      --part                 enable segment compress\n      --part-size string     segment part size (number(Bytes), or a string with 'K', 'M', 'G' suffix) (default \"2G\")\n  -s, --source string        override the source registry defined in image list\n\nGlobal Flags:\n      --debug        enable debug output\n      --tls-verify   enable https tls verify (default true)\n"})}),"\n",(0,t.jsx)(a.h2,{id:"save-principle",children:"Save principle"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:(0,t.jsxs)(a.strong,{children:["The compressed tarball created by the Save command is not compatible with the compressed package created by ",(0,t.jsx)(a.code,{children:"docker save"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Hangar uses ",(0,t.jsx)(a.code,{children:"skopeo copy"})," to save the image blobs in the image list to the local ",(0,t.jsx)(a.code,{children:"saved-image-cache"})," folder in OCI format."]}),"\n",(0,t.jsxs)(a.p,{children:["The blobs files will be saved into the ",(0,t.jsx)(a.code,{children:"saved-image-cache/share"})," share folder."]}),"\n",(0,t.jsxs)(a.p,{children:["After all images are saved, create a compressed package for ",(0,t.jsx)(a.code,{children:"saved-image-cache"}),"\n(except for using ",(0,t.jsx)(a.code,{children:"--compress=dir"})," parameter)."]}),"\n",(0,t.jsxs)(a.p,{children:["After creating the compressed package, the ",(0,t.jsx)(a.code,{children:"saved-image-cache"})," folder will not be deleted automatically,\nyou can delete this folder to avoid disk usage."]}),"\n",(0,t.jsx)(a.h2,{id:"split-the-compressed-file-into-multi-part",children:"Split the compressed file into multi part"}),"\n",(0,t.jsxs)(a.p,{children:["If you need to copy the generated tarball into a small capacity flash drive,\nyou can use the ",(0,t.jsx)(a.code,{children:"--part"})," parameter to split the compressed tarball into multi-part,\nand use the ",(0,t.jsx)(a.code,{children:"--part-size"})," parameter to specify the size of each part (default is ",(0,t.jsx)(a.code,{children:"2G"}),"),\nthe size can be a number (byte) or a number with ",(0,t.jsx)(a.code,{children:"K"}),", ",(0,t.jsx)(a.code,{children:"M"}),", ",(0,t.jsx)(a.code,{children:"G"})," suffix."]}),"\n",(0,t.jsxs)(a.p,{children:["When ",(0,t.jsx)(a.code,{children:"--part"})," option specified, the created tarball filename will ended with ",(0,t.jsx)(a.code,{children:".partX"})," suffix."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["The way to split tarball into multi-part is same with the Linux command ",(0,t.jsx)(a.code,{children:"split"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Here are some ways to combine splitted files and decompress it in command line."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sh",children:"# Combine all file parts\ncat ./saved-images.tar.gz.part* > saved-images.tar.gz\n# Decompress the combined compressed package\ntar -zxvf ./saved-images.tar.gz\n\n# Or use the following command to decompress with one command\ncat ./saved-images.tar.gz.part* | tar -zxv\n"})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["You can use the ",(0,t.jsx)(a.code,{children:"load"})," command with the ",(0,t.jsx)(a.code,{children:"--compress=dir"})," parameter to load the image from the decompressed cache folder and upload it to the destination registry server."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>i});var t=s(7294);const n={},r=t.createContext(n);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);