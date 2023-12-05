"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5450],{3469:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v1.7","label":"v1.7 (Preview)","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-v1.7","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Hangar \u4f7f\u7528\u6307\u5f15","href":"/zh/docs/v1.7/","docId":"index","unlisted":false},{"type":"link","label":"\u5b89\u88c5\u6307\u5357","href":"/zh/docs/v1.7/install","docId":"install","unlisted":false},{"type":"link","label":"Login & Logout","href":"/zh/docs/v1.7/login-logout","docId":"login-logout","unlisted":false},{"type":"category","label":"Mirror","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Mirror \u547d\u4ee4","href":"/zh/docs/v1.7/mirror/mirror","docId":"mirror/mirror","unlisted":false},{"type":"link","label":"Mirror Validate \u547d\u4ee4","href":"/zh/docs/v1.7/mirror/validate","docId":"mirror/validate","unlisted":false},{"type":"link","label":"\u955c\u50cf\u5217\u8868\u683c\u5f0f","href":"/zh/docs/v1.7/mirror/image-list-format","docId":"mirror/image-list-format","unlisted":false}],"href":"/zh/docs/v1.7/mirror/"},{"type":"category","label":"Save","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Save \u547d\u4ee4","href":"/zh/docs/v1.7/save/save","docId":"save/save","unlisted":false},{"type":"link","label":"Save Validate \u547d\u4ee4","href":"/zh/docs/v1.7/save/validate","docId":"save/validate","unlisted":false},{"type":"link","label":"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f","href":"/zh/docs/v1.7/save/archive","docId":"save/archive","unlisted":false}],"href":"/zh/docs/v1.7/save/"},{"type":"category","label":"Load","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Load \u547d\u4ee4","href":"/zh/docs/v1.7/load/load","docId":"load/load","unlisted":false},{"type":"link","label":"Load Validate \u547d\u4ee4","href":"/zh/docs/v1.7/load/validate","docId":"load/validate","unlisted":false}],"href":"/zh/docs/v1.7/load/"},{"type":"category","label":"Sync","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Sync \u547d\u4ee4","href":"/zh/docs/v1.7/sync/sync","docId":"sync/sync","unlisted":false},{"type":"link","label":"Sync Validate \u547d\u4ee4","href":"/zh/docs/v1.7/sync/validate","docId":"sync/validate","unlisted":false}],"href":"/zh/docs/v1.7/sync/"},{"type":"category","label":"\u9ad8\u7ea7\u7528\u6cd5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Validate \u5b50\u547d\u4ee4","href":"/zh/docs/v1.7/advanced/validate","docId":"advanced/validate","unlisted":false},{"type":"link","label":"\u83b7\u53d6\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f","href":"/zh/docs/v1.7/advanced/archive-ls","docId":"advanced/archive-ls","unlisted":false},{"type":"link","label":"\u83b7\u53d6\u955c\u50cf\u7684 Manifest","href":"/zh/docs/v1.7/advanced/inspect","docId":"advanced/inspect","unlisted":false},{"type":"link","label":"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f","href":"/zh/docs/v1.7/advanced/convert-list","docId":"advanced/convert-list","unlisted":false},{"type":"link","label":"\u547d\u4ee4\u884c\u8865\u5168","href":"/zh/docs/v1.7/advanced/completion","docId":"advanced/completion","unlisted":false},{"type":"link","label":"generate-list \u547d\u4ee4","href":"/zh/docs/v1.7/advanced/generate-list","docId":"advanced/generate-list","unlisted":false}],"href":"/zh/docs/v1.7/advanced/"},{"type":"category","label":"\u5f00\u53d1\u8c03\u8bd5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u7f16\u8bd1 Hangar","href":"/zh/docs/v1.7/dev/build","docId":"dev/build","unlisted":false},{"type":"link","label":"\u81ea\u52a8\u5316\u6d4b\u8bd5","href":"/zh/docs/v1.7/dev/test","docId":"dev/test","unlisted":false}],"href":"/zh/docs/v1.7/dev/"},{"type":"category","label":"\u6700\u4f73\u5b9e\u8df5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Rancher \u79bb\u7ebf\u5b89\u88c5","href":"/zh/docs/v1.7/bestpractice/rancher","docId":"bestpractice/rancher","unlisted":false},{"type":"link","label":"K3s \u79bb\u7ebf\u5b89\u88c5","href":"/zh/docs/v1.7/bestpractice/k3s","docId":"bestpractice/k3s","unlisted":false},{"type":"link","label":"RKE2 \u79bb\u7ebf\u5b89\u88c5","href":"/zh/docs/v1.7/bestpractice/rke2","docId":"bestpractice/rke2","unlisted":false}],"href":"/zh/docs/v1.7/bestpractice/"},{"type":"link","label":"Hangar Docker \u955c\u50cf","href":"/zh/docs/v1.7/docker-image","docId":"docker-image","unlisted":false},{"type":"link","label":"\u5e38\u89c1\u95ee\u9898","href":"/zh/docs/v1.7/questions","docId":"questions","unlisted":false}]},"docs":{"advanced/archive-ls":{"id":"advanced/archive-ls","title":"\u83b7\u53d6\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f","description":"\u53ef\u4f7f\u7528 hangar archive ls \u547d\u4ee4\u67e5\u770b\u538b\u7f29\u5305\u4e2d\u5b58\u50a8\u7684\u955c\u50cf\u4fe1\u606f\u3002","sidebar":"docs"},"advanced/completion":{"id":"advanced/completion","title":"\u547d\u4ee4\u884c\u8865\u5168","description":"hangar completion \u547d\u4ee4\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684 Shell \u751f\u6210\u547d\u4ee4\u884c\u8865\u5168\u811a\u672c\u3002","sidebar":"docs"},"advanced/convert-list":{"id":"advanced/convert-list","title":"\u8f6c\u6362\u955c\u50cf\u5217\u8868\u683c\u5f0f","description":"hangar convert-list \u547d\u4ee4\u652f\u6301\u5c06\u955c\u50cf\u5217\u8868\u4ece Default \u683c\u5f0f\u8f6c\u6362\u4e3a Mirror \u683c\u5f0f\uff08\u53c2\u8003 \u955c\u50cf\u5217\u8868\u683c\u5f0f\uff09\u3002","sidebar":"docs"},"advanced/generate-list":{"id":"advanced/generate-list","title":"generate-list \u547d\u4ee4","description":"hangar generate-list \u547d\u4ee4\u7528\u4e8e\u751f\u6210 Rancher \u955c\u50cf\u5217\u8868\u3002","sidebar":"docs"},"advanced/index":{"id":"advanced/index","title":"\u9ad8\u7ea7\u7528\u6cd5","description":"","sidebar":"docs"},"advanced/inspect":{"id":"advanced/inspect","title":"\u83b7\u53d6\u955c\u50cf\u7684 Manifest","description":"hangar inspect \u547d\u4ee4\u53ef\u83b7\u53d6\u955c\u50cf\u4ed3\u5e93\u4e2d\u955c\u50cf\u7684 Manifest\uff08\u6b64\u547d\u4ee4\u4e0e skopeo inspect \u529f\u80fd\u7c7b\u4f3c\uff09\u3002","sidebar":"docs"},"advanced/validate":{"id":"advanced/validate","title":"Validate \u5b50\u547d\u4ee4","description":"Hangar \u7684 mirror/save/load/sync \u547d\u4ee4\u652f\u6301 validate \u5b50\u547d\u4ee4\uff0c\u7528\u4e8e\u9a8c\u8bc1\u5df2\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u3002","sidebar":"docs"},"bestpractice/index":{"id":"bestpractice/index","title":"\u6700\u4f73\u5b9e\u8df5","description":"","sidebar":"docs"},"bestpractice/k3s":{"id":"bestpractice/k3s","title":"K3s \u79bb\u7ebf\u5b89\u88c5","description":"\u672c\u4f8b\u5c06\u5f15\u5bfc\u60a8\u4f7f\u7528 Hangar \u5feb\u901f\u642d\u5efa\u5305\u542b\u591a\u67b6\u6784\u5bb9\u5668\u955c\u50cf\u7684 Registry \u670d\u52a1\u5668\uff0c\u4ee5\u7528\u4e8e K3s Air-Gap\uff08\u79bb\u7ebf\u73af\u5883\uff09\u5b89\u88c5\u3002","sidebar":"docs"},"bestpractice/rancher":{"id":"bestpractice/rancher","title":"Rancher \u79bb\u7ebf\u5b89\u88c5","description":"WIP","sidebar":"docs"},"bestpractice/rke2":{"id":"bestpractice/rke2","title":"RKE2 \u79bb\u7ebf\u5b89\u88c5","description":"WIP","sidebar":"docs"},"dev/build":{"id":"dev/build","title":"\u7f16\u8bd1 Hangar","description":"Hangar \u7531 Go \u8bed\u8a00\u7f16\u5199\u3002","sidebar":"docs"},"dev/index":{"id":"dev/index","title":"\u5f00\u53d1\u8c03\u8bd5","description":"","sidebar":"docs"},"dev/test":{"id":"dev/test","title":"\u81ea\u52a8\u5316\u6d4b\u8bd5","description":"Hangar \u4ed3\u5e93\u4e2d\u5305\u542b\u4e86 Unit Test \uff08\u5355\u5143\u6d4b\u8bd5\uff09\u548c Validation Test\u3002","sidebar":"docs"},"docker-image":{"id":"docker-image","title":"Hangar Docker \u955c\u50cf","description":"Hangar \u7684 Docker \u955c\u50cf\u652f\u6301 amd64 \u548c arm64 \u67b6\u6784\u3002","sidebar":"docs"},"index":{"id":"index","title":"Hangar \u4f7f\u7528\u6307\u5f15","description":"\u5feb\u901f\u4e0a\u624b","sidebar":"docs"},"install":{"id":"install","title":"\u5b89\u88c5\u6307\u5357","description":"\u60a8\u53ef\u4f7f\u7528 Hangar Docker \u955c\u50cf\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c Hangar\u3002\u9664\u6b64\u4e4b\u5916\u60a8\u53ef\u5728\u7cfb\u7edf\u4e2d\u5b89\u88c5 Hangar \u53ef\u6267\u884c\u6587\u4ef6\u3002","sidebar":"docs"},"load/index":{"id":"load/index","title":"Load","description":"","sidebar":"docs"},"load/load":{"id":"load/load","title":"Load \u547d\u4ee4","description":"hangar load \u547d\u4ee4\u7528\u4e8e\u5c06 save \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e2d\u3002","sidebar":"docs"},"load/validate":{"id":"load/validate","title":"Load Validate \u547d\u4ee4","description":"hangar load validate \u547d\u4ee4\uff08hangar load \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u538b\u7f29\u5305\u4e2d\u7684\u955c\u50cf\u88ab\u6b63\u786e\u7684\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002","sidebar":"docs"},"login-logout":{"id":"login-logout","title":"Login & Logout","description":"\u60a8\u9700\u8981\u5728\u6267\u884c\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u64cd\u4f5c\u4e4b\u524d\u5bf9 \u6e90\u955c\u50cf\u4ed3\u5e93 \u548c \u76ee\u6807\u955c\u50cf\u4ed3\u5e93 \u6267\u884c hangar login\u3002","sidebar":"docs"},"mirror/image-list-format":{"id":"mirror/image-list-format","title":"\u955c\u50cf\u5217\u8868\u683c\u5f0f","description":"hangar mirror \u547d\u4ee4\u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7684\u955c\u50cf\u5217\u8868\u683c\u5f0f\uff1a","sidebar":"docs"},"mirror/index":{"id":"mirror/index","title":"Mirror","description":"","sidebar":"docs"},"mirror/mirror":{"id":"mirror/mirror","title":"Mirror \u547d\u4ee4","description":"hangar mirror \u547d\u4ee4\u7528\u4e8e\u5728\u955c\u50cf\u4ed3\u5e93\u670d\u52a1\u5668\u4e4b\u95f4\u6279\u91cf\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002Hangar \u5141\u8bb8\u60a8\u6307\u5b9a\u9700\u8981\u62f7\u8d1d\u7684\u5bb9\u5668\u955c\u50cf\u67b6\u6784 & \u5e73\u53f0\u53c2\u6570\uff0c\u542f\u7528\u591a\u7ebf\u7a0b\u5e76\u53d1\u62f7\u8d1d\u5bb9\u5668\u955c\u50cf\u3002","sidebar":"docs"},"mirror/validate":{"id":"mirror/validate","title":"Mirror Validate \u547d\u4ee4","description":"hangar mirror validate \u547d\u4ee4\u7528\u4e8e\u6821\u9a8c Mirror \u8fc7\u7684\u955c\u50cf\u662f\u5426\u62f7\u8d1d\u6b63\u786e\u3002","sidebar":"docs"},"questions":{"id":"questions","title":"\u5e38\u89c1\u95ee\u9898","description":"\u5173\u4e8e Hangar","sidebar":"docs"},"save/archive":{"id":"save/archive","title":"\u538b\u7f29\u6587\u4ef6\u683c\u5f0f","description":"\u4ece v1.7.0 \u8d77\uff0cHangar \u4f7f\u7528 zip \u683c\u5f0f\u3002","sidebar":"docs"},"save/index":{"id":"save/index","title":"Save","description":"","sidebar":"docs"},"save/save":{"id":"save/save","title":"Save \u547d\u4ee4","description":"hangar save \u547d\u4ee4\u4e0e mirror \u547d\u4ee4\u7c7b\u4f3c\uff0c\u7528\u4e8e\u5c06\u5bb9\u5668\u955c\u50cf\u4ece\u955c\u50cf\u4ed3\u5e93\u4e0b\u8f7d\u81f3\u672c\u5730\u7684\u538b\u7f29\u6587\u4ef6\u4e2d\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528 load \u547d\u4ee4\u5c06\u538b\u7f29\u6587\u4ef6\u4e2d\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002","sidebar":"docs"},"save/validate":{"id":"save/validate","title":"Save Validate \u547d\u4ee4","description":"hangar save validate \u547d\u4ee4\uff08hangar save \u7684\u5b50\u547d\u4ee4\uff09\u7528\u4e8e\u786e\u4fdd\u955c\u50cf\u5217\u8868\u4e2d\u7684\u6240\u6709\u955c\u50cf\u5747\u88ab\u6b63\u786e\u4fdd\u5b58\u5728\u538b\u7f29\u5305\u4e2d\u3002","sidebar":"docs"},"sync/index":{"id":"sync/index","title":"Sync","description":"","sidebar":"docs"},"sync/sync":{"id":"sync/sync","title":"Sync \u547d\u4ee4","description":"hangar sync \u547d\u4ee4\u4e0e save \u547d\u4ee4\u7c7b\u4f3c\uff0c\u5141\u8bb8\u60a8\u5c06\u989d\u5916\u7684\u955c\u50cf\u9644\u52a0\u5230 save \u547d\u4ee4\u521b\u5efa\u7684\u538b\u7f29\u5305\u4e2d\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u6240\u6709\u7684\u955c\u50cf\u521b\u5efa\u65b0\u7684\u538b\u7f29\u5305\u6587\u4ef6\u3002","sidebar":"docs"},"sync/validate":{"id":"sync/validate","title":"Sync Validate \u547d\u4ee4","description":"hangar sync validate \u547d\u4ee4\uff08hangar sync \u7684\u5b50\u547d\u4ee4\uff09 \u4e0e save validate \u547d\u4ee4\u76f8\u4f3c\uff0c\u7528\u4e8e\u9a8c\u8bc1 sync \u547d\u4ee4\u662f\u5426\u6b63\u786e\u7684\u5c06\u5bb9\u5668\u955c\u50cf\u9644\u52a0\u5230\u538b\u7f29\u5305\u4e2d\u3002","sidebar":"docs"}}}')}}]);