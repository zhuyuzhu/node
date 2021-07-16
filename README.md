# node

### centos升级node
参考文章：https://www.html.cn/qa/node-js/10667.html
具体步骤：
- 查看node版本：`node -v`
- 安装node版本管理模块：n模块 `npm install -g n`
- 通过n模块安装最新稳定版node：`n stable`
- 或者安装最新版node：`n latest`
- 重启系统
- 再次查看node版本：`node -v`

通过`which node`命令可以查看node安装的位置：
```sh
/usr/local/bin/node
```
