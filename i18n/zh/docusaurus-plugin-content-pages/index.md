![](/images/logo.png)

# Hangar

Hangar 是一个灵活且易用的容器镜像拷贝工具，支持多架构 & 跨平台容器镜像拷贝，旨在简化复杂的批量拷贝容器镜像至私有镜像仓库过程。

Hangar 支持以下功能：
- 在镜像仓库（Registry）之间 Mirror 容器镜像（参考 [Mirror](#) 命令）。
- 从镜像仓库中下载容器镜像至本地压缩包中（参考 [Save](#) 命令），之后将压缩包中的镜像上传至镜像仓库服务器中（参考 [Load](#) 命令）。
- 验证已拷贝的容器镜像，确保容器镜像均被正确的拷贝（参考 [Validate](#) 命令）。
- 其他用于处理镜像列表文件以及压缩包文件的高级命令（参考 [高级用法](#)）。

## 使用文档

Hangar 使用文档可在本站的 [Documents](/zh/docs/) 页面获取。

## 依赖

自 Hangar `v1.7.0` 版本起，Hangar 移除了所有的第三方可执行二进制文件依赖。

## License

Copyright 2023 SUSE Rancher.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
