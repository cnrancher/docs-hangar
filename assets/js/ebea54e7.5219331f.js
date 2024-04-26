"use strict";(self.webpackChunkdocs_hangar=self.webpackChunkdocs_hangar||[]).push([[5450],{3469:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"v1.7","label":"v1.7","banner":null,"badge":true,"noIndex":false,"className":"docs-version-v1.7","isLast":false,"docsSidebars":{"docs":[{"type":"link","label":"Hangar Tutorial","href":"/docs/v1.7/","docId":"index","unlisted":false},{"type":"link","label":"Installation Guide","href":"/docs/v1.7/install","docId":"install","unlisted":false},{"type":"link","label":"Login & Logout","href":"/docs/v1.7/login-logout","docId":"login-logout","unlisted":false},{"type":"category","label":"Mirror","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Mirror Command","href":"/docs/v1.7/mirror/mirror","docId":"mirror/mirror","unlisted":false},{"type":"link","label":"Mirror Validate Command","href":"/docs/v1.7/mirror/validate","docId":"mirror/validate","unlisted":false},{"type":"link","label":"Image List Formats","href":"/docs/v1.7/mirror/image-list-format","docId":"mirror/image-list-format","unlisted":false}],"href":"/docs/v1.7/mirror/"},{"type":"category","label":"Save","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Save Command","href":"/docs/v1.7/save/save","docId":"save/save","unlisted":false},{"type":"link","label":"Save Validate Command","href":"/docs/v1.7/save/validate","docId":"save/validate","unlisted":false},{"type":"link","label":"Archive File","href":"/docs/v1.7/save/archive","docId":"save/archive","unlisted":false}],"href":"/docs/v1.7/save/"},{"type":"category","label":"Load","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Load Command","href":"/docs/v1.7/load/load","docId":"load/load","unlisted":false},{"type":"link","label":"Load Validate Command","href":"/docs/v1.7/load/validate","docId":"load/validate","unlisted":false}],"href":"/docs/v1.7/load/"},{"type":"category","label":"Sync","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Sync Command","href":"/docs/v1.7/sync/sync","docId":"sync/sync","unlisted":false},{"type":"link","label":"Sync Validate Command","href":"/docs/v1.7/sync/validate","docId":"sync/validate","unlisted":false}],"href":"/docs/v1.7/sync/"},{"type":"category","label":"Archive","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Archive File Format","href":"/docs/v1.7/archive/specification","docId":"archive/specification","unlisted":false},{"type":"link","label":"List images in the archive file","href":"/docs/v1.7/archive/ls","docId":"archive/ls","unlisted":false},{"type":"link","label":"Merge archive files","href":"/docs/v1.7/archive/merge","docId":"archive/merge","unlisted":false},{"type":"link","label":"Export images from archive files","href":"/docs/v1.7/archive/export","docId":"archive/export","unlisted":false}],"href":"/docs/v1.7/archive/"},{"type":"link","label":"Generate Rancher image list","href":"/docs/v1.7/generate-list/","docId":"generate-list/index","unlisted":false},{"type":"category","label":"Advanced Usage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Validate commands","href":"/docs/v1.7/advanced/validate","docId":"advanced/validate","unlisted":false},{"type":"link","label":"Inspect the image manifest","href":"/docs/v1.7/advanced/inspect","docId":"advanced/inspect","unlisted":false},{"type":"link","label":"Convert image list format","href":"/docs/v1.7/advanced/convert-list","docId":"advanced/convert-list","unlisted":false},{"type":"link","label":"Shell Completion","href":"/docs/v1.7/advanced/completion","docId":"advanced/completion","unlisted":false}],"href":"/docs/v1.7/advanced/"},{"type":"category","label":"Development","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Build Hangar","href":"/docs/v1.7/dev/build","docId":"dev/build","unlisted":false},{"type":"link","label":"Automation Test","href":"/docs/v1.7/dev/test","docId":"dev/test","unlisted":false}],"href":"/docs/v1.7/dev/"},{"type":"category","label":"Best Practice","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"K3s Air-Gapped Installation","href":"/docs/v1.7/bestpractice/k3s","docId":"bestpractice/k3s","unlisted":false},{"type":"link","label":"RKE2 Air-Gap Installation","href":"/docs/v1.7/bestpractice/rke2","docId":"bestpractice/rke2","unlisted":false},{"type":"link","label":"Rancher Air-Gap Installation","href":"/docs/v1.7/bestpractice/rancher","docId":"bestpractice/rancher","unlisted":false}],"href":"/docs/v1.7/bestpractice/"},{"type":"link","label":"Hangar Docker Image","href":"/docs/v1.7/docker-image","docId":"docker-image","unlisted":false},{"type":"link","label":"Q&A","href":"/docs/v1.7/questions","docId":"questions","unlisted":false}]},"docs":{"advanced/completion":{"id":"advanced/completion","title":"Shell Completion","description":"The hangar completion command allows to generate shell completion scripts for different shells.","sidebar":"docs"},"advanced/convert-list":{"id":"advanced/convert-list","title":"Convert image list format","description":"The hangar convert-list command allows to convert image list format from default format to the mirror format (see image list format specification).","sidebar":"docs"},"advanced/index":{"id":"advanced/index","title":"Advanced Usage","description":"","sidebar":"docs"},"advanced/inspect":{"id":"advanced/inspect","title":"Inspect the image manifest","description":"hangar inspect command allows to inspect the container image manifest (similar to skopeo inspect).","sidebar":"docs"},"advanced/validate":{"id":"advanced/validate","title":"Validate commands","description":"Hangar mirror/save/load/sync commands supports validate subcommands for validating the copied image.","sidebar":"docs"},"archive/export":{"id":"archive/export","title":"Export images from archive files","description":"The hangar archive export command is used for export images from archive file into a new archive file.","sidebar":"docs"},"archive/index":{"id":"archive/index","title":"Archive","description":"","sidebar":"docs"},"archive/ls":{"id":"archive/ls","title":"List images in the archive file","description":"The hangar archive ls command supports listing the images in the archive file.","sidebar":"docs"},"archive/merge":{"id":"archive/merge","title":"Merge archive files","description":"The hangar archive merge command is used for merging archive files into a new archive file.","sidebar":"docs"},"archive/specification":{"id":"archive/specification","title":"Archive File Format","description":"Hangar uses the zip format archive file since version v1.7.0.","sidebar":"docs"},"bestpractice/index":{"id":"bestpractice/index","title":"Best Practice","description":"","sidebar":"docs"},"bestpractice/k3s":{"id":"bestpractice/k3s","title":"K3s Air-Gapped Installation","description":"This example will guide you to setup a multi-arch private image registry server for K3s Air-Gapped installation.","sidebar":"docs"},"bestpractice/rancher":{"id":"bestpractice/rancher","title":"Rancher Air-Gap Installation","description":"This example will guide you to setup a multi-arch private image registry server for Rancher Air-Gapped installation.","sidebar":"docs"},"bestpractice/rke2":{"id":"bestpractice/rke2","title":"RKE2 Air-Gap Installation","description":"This example will guide you to setup a multi-arch private image registry server for RKE2 Air-Gapped installation.","sidebar":"docs"},"dev/build":{"id":"dev/build","title":"Build Hangar","description":"Hangar is written in Golang.","sidebar":"docs"},"dev/index":{"id":"dev/index","title":"Development","description":"","sidebar":"docs"},"dev/test":{"id":"dev/test","title":"Automation Test","description":"Hangar project source code includes unit tests and validation tests.","sidebar":"docs"},"docker-image":{"id":"docker-image","title":"Hangar Docker Image","description":"Hangar docker images support both amd64 and arm64 architectures.","sidebar":"docs"},"generate-list/index":{"id":"generate-list/index","title":"Generate Rancher image list","description":"The hangar generate-list command allows to generate a Rancher image list and K8s cluster version list according to the Rancher Version.","sidebar":"docs"},"index":{"id":"index","title":"Hangar Tutorial","description":"Getting Started","sidebar":"docs"},"install":{"id":"install","title":"Installation Guide","description":"You can run Hangar by using Hangar Docker Image inside the container or install Hangar binary on your system.","sidebar":"docs"},"load/index":{"id":"load/index","title":"Load","description":"","sidebar":"docs"},"load/load":{"id":"load/load","title":"Load Command","description":"The hangar load command loads images from zip archive file created by save command to registry server, it allows to upload container images to registry server without a public internet connection,","sidebar":"docs"},"load/validate":{"id":"load/validate","title":"Load Validate Command","description":"The hangar load validate command (subcommand of hangar load) is used for ensuring the images were loaded to registry server.","sidebar":"docs"},"login-logout":{"id":"login-logout","title":"Login & Logout","description":"You need to execute hangar login for SOURCE REGISTRY (if images in source registry are private) and DESTINATION REGISTRY before copying images.","sidebar":"docs"},"mirror/image-list-format":{"id":"mirror/image-list-format","title":"Image List Formats","description":"hangar mirror command supports two different kinds of image list formats:","sidebar":"docs"},"mirror/index":{"id":"mirror/index","title":"Mirror","description":"","sidebar":"docs"},"mirror/mirror":{"id":"mirror/mirror","title":"Mirror Command","description":"hangar mirror command is for mirror multiple container images between image registry servers. It allows you to specify architecture and platforms when copying image, and use multiple workers to copy images parallelly.","sidebar":"docs"},"mirror/validate":{"id":"mirror/validate","title":"Mirror Validate Command","description":"The hangar mirror validate command (subcommand of hangar mirror) is used for ensuring the images were mirrored correctly.","sidebar":"docs"},"questions":{"id":"questions","title":"Q&A","description":"About Hangar","sidebar":"docs"},"save/archive":{"id":"save/archive","title":"Archive File","description":"See Hangar Archive File specification for more detailed information about hangar archive.","sidebar":"docs"},"save/index":{"id":"save/index","title":"Save","description":"","sidebar":"docs"},"save/save":{"id":"save/save","title":"Save Command","description":"The hangar save command is similar to the mirror command. It allows you to copy multiple container images into an archive file for load command use.","sidebar":"docs"},"save/validate":{"id":"save/validate","title":"Save Validate Command","description":"The hangar save validate command (subcommand of hangar save) is used for ensuring the images were saved into archive file correctly.","sidebar":"docs"},"sync/index":{"id":"sync/index","title":"Sync","description":"","sidebar":"docs"},"sync/sync":{"id":"sync/sync","title":"Sync Command","description":"The hangar sync command is similar to the save command, it allows you to sync (append) extra images into the archive file without re-downloading all images.","sidebar":"docs"},"sync/validate":{"id":"sync/validate","title":"Sync Validate Command","description":"The hangar sync validate command (subcommand of hangar sync) is similar to save validate command. It is used for ensuring the extra images were added into archive file.","sidebar":"docs"}}}')}}]);