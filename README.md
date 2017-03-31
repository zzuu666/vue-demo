# 手把手教你使用 vue 2 全家桶
## 写在前面
建议在看本教程之前阅读下尤大的 [新手向：Vue 2.0 的建议学习顺序](https://zhuanlan.zhihu.com/p/23134551) 


## [Vue - cli](https://github.com/vuejs/vue-cli) 官方脚手架
首先全局安装 vue-cli

``` bash
npm install -g vue-cli
```
创建工程的命令行如下

``` bash
vue init <template-name> <project-name>
```
我们使用

``` bash
vue init webpack vue-demo
```
这样我们创建出来的工程是使用 webpack 2 来作为打包工具，接下来命令行会咨询你很多问题，依次是：

``` bash
# 前三条就不解释了 
? Project name vue-demo
? Project description A Vue.js project
? Author zzuu
# 选择打包时的模式这里有 独立构建 和 运行时构建
# 差别详情 https://cn.vuejs.org/v2/guide/installation.html#独立构建-vs-运行时构建
? Vue build
❯ Runtime + Compiler: recommended for most users
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific H
TML) are ONLY allowed in .vue files - render functions are required elsewhere
# 是否配置 vue-router
? Install vue-router? (Y/n) Y
# 是否使用 Eslint 一个可以使你代码风格很优雅的插件 
? Use ESLint to lint your code? (Y/n) Y
# 选择使用哪种风格的 Eslint 本仓库使用的 Standard
? Pick an ESLint preset
❯ Standard (https://github.com/feross/standard)
  AirBNB (https://github.com/airbnb/javascript)
  none (configure it yourself)
# 是否使用 Karma + Mocha 作为单元测试
? Setup unit tests with Karma + Mocha? (Y/n) Y
# 是否使用 Nightwatch 作为 e2e 测试
? Setup e2e tests with Nightwatch? (Y/n)
 
vue-cli · Generated "vue-demo".

   To get started:
     # 然后运行以下三步
     cd vue-demo
     npm install
     npm run dev

   Documentation can be found at https://vuejs-templates.github.io/webpack

```
这样我们的基本的 vue 框架已经搭起来了，此时你的浏览器应该已经打开了 localhost:8080 并看到了 vue 的 logo


## Build Setup

1.  的
2

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
