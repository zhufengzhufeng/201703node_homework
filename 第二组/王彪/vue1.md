
# Vue 学习笔记

> 基于对 Vuejs 的一个 Todo 单页应用 [Lightodo](https://github.com/SuperAL/lightodo)，功能包括：添加待办事项卡片，对卡片或待办事项进行排序或删除操作，设置待办事项定时提醒，登录注册等

## Vue 简介

![](http://upload-images.jianshu.io/upload_images/448830-b5a8458eb83f7408.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> **提醒**：Vuejs 如今正处在快速发展中，很多资源随时都有可能过时（outdated），记得查看最新文档，使用最新资源。

### Vue 的[官方说明](https://vuejs.org.cn/guide/overview.html)

> 数据驱动的组件，为现代化的 Web 界面而生。
> Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的库。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
> Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时，Vue.js 也能完美地驱动复杂的单页应用。

### 关于 Vue 的作者

尤雨溪 / 昵称：[尤小右](http://weibo.com/arttechdesign) / 英文名：[Evan You](http://evanyou.me/)

是个介于设计师和程序员之间的大牛，设计能力比程序员好，编程能力比设计师（和普通程序员）好太多！
如今辞了工作，专心投入到了 Vuejs 的发展和推广中。

> 工作信息：
> Meteor (2014 - 2016)
> 地区：海外 ，美国
> 职位：Core dev
> Google (2012 - 2014)
> 地区：海外 ，美国
> 职位：Creative Lab

**相关信息**：
[JavaScript Air Episode 016: JavaScript Frameworks: Vue.js](http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html)
[和 Vue.js 框架的作者聊聊前端框架开发背后的故事 | Teahour.fm](http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html)

## Vue 的基本用法

> Vue 相比于 React 和 Angular 容易上手多了，因此我对 Vue 的学习主要以文档为主，视频为辅（只有像我这种菜鸟才看视频教程，真正的牛人文档瞄几眼就会了(-_-#)）。

### 下载使用（两种方式）

1.  直接下载并用 `<script>` 标签引入，`Vue` 会被注册为一个全局变量。

    > 平时对于 Dom 操作比较频繁的小项目可以直接这样使用。

2.  Vue.js 提供一个[官方命令行工具](https://github.com/vuejs/vue-cli)，可用于[快速搭建大型单页应用](https://vuejs.org.cn/guide/application.html)。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以及可用于生产环境的构建配置的项目：

    > 针对单页应用的构建推荐使用这种方式，可以更好的体验到 vue 所提供的组件化功能 （[单文件组件](https://vuejs.org.cn/guide/application.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6)），顺带着享受到 webpack 带来的流畅的自动化开发体验。
    > 
    > ```
    > # 全局安装 vue-cli
    > $ npm install -g vue-cli
    > # 创建一个基于 "webpack" 模板的新项目
    > $ vue init webpack my-project
    > # 安装依赖，走你
    > $ cd my-project
    > $ npm install
    > $ npm run dev
    > ```

### Vue 的使用教程
[官方文档](https://cn.vuejs.org/)

**针对相关问题的解决方法**：

* * *

**问题**：Vue 还未实例化前， HTML 模板中的 "{{ }}"( Mustache 标签) 会暴露在用户界面上，也就是说页面有那么一瞬间会将所有的 "{{ }}" 都显示出来，如何解决？
**解决**：
_方法一_：使用 `v-cloak` 指令，这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 `[v-cloak] { display: none }` 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
[v-cloak 文档说明](https://cn.vuejs.org/)

```
[v-cloak] { 
  display: none;
}
```

```
<div v-cloak>
  {{ message }}
</div>
```

_方法二_：使用 `v-text`
[v-text 文档说明](https://cn.vuejs.org/)
```
<span v-text="msg"></span>
<!-- same as -->
<span>{{msg}}</span>
```

* * *

**问题**：新增的 data 数据没法同步响应到页面？
**解决**：认真阅读官方文档里的[深入响应式原理](https://cn.vuejs.org/)。

在实例创建之后添加属性并且让它是响应的:

对于 Vue 实例，可以使用 $set(key, value) 实例方法：

```
vm.$set('b', 2)
// `vm.b` 和 `data.b` 现在是响应的
```

对于普通数据对象，可以使用全局方法 Vue.set(object, key, value)：

```
Vue.set(data, 'c', 3)
// `vm.c` 和 `data.c` 现在是响应的
```

* * *

**注意事项**：

*   注意如果 [prop](https://cn.vuejs.org/) 是一个对象或数组，是按引用传递。在子组件内修改它会影响父组件的状态，不管是使用哪种绑定类型
*   针对同一个元素的后一个 watch 会覆盖前一个 watch，无论是不是 deep
*   自定义指令内部可以通过 this.vm.someKey 来访问到组件的数据
*   自定义指令名不要有大写，props 命名也不要有大写

## Vue 的组件化实践

> [组件](https://cn.vuejs.org/)（Component）是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以是原生 HTML 元素的形式，以 `is` 特性扩展。

使用上文提到的[官方命令行工具](https://github.com/vuejs/vue-cli)：
目前可供使用的模板包括（模板名-说明）：

*   [webpack](https://github.com/vuejs-templates/webpack) - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.（全功能的 Webpack + vue-loader 设置，包括热加载，静态检测，测试，css 提取）
*   [webpack-simple](https://github.com/vuejs-templates/webpack-simple) - A simple Webpack + vue-loader setup for quick prototyping.（一个简易的 Webpack + vue-loader 设置，以便于快速开始）
*   [browserify](https://github.com/vuejs-templates/browserify) - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.（全功能的 Browserify + vueify 设置，包括热加载，静态检测，单元测试）
*   [browserify-simple](https://github.com/vuejs-templates/browserify-simple) - A simple Browserify + vueify setup for quick prototyping.（一个简易的 Browserify + vueify 设置，以便于快速开始）
*   [simple](https://github.com/vuejs-templates/simple) - The simplest possible Vue setup in a single HTML file

**相关阅读：**
[Announcing vue-cli](http://vuejs.org/2015/12/28/vue-cli/)
[（译）Vuejs 自己的构建工具 vue-cli](https://segmentfault.com/a/1190000004267935)

### webpack 基础入门

> **webpack** is a **module bundler**.
> webpack takes modules with dependencies and generates static assets representing those modules.

Webpack 主要特性如下：

*   同时支持 [CommonJS](http://wiki.commonjs.org/wiki/Modules/1.1) 和 [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) 模块（对于新项目，推荐直接使用 CommonJS）；
*   串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对 CoffeeScript、ES6 的支持；
*   可以基于配置或者智能分析打包成多个文件，实现公共模块或者按需加载；
*   支持对 CSS，图片等资源进行打包，从而无需借助 Grunt 或 Gulp；
*   开发时在内存中完成打包，性能更快，完全可以支持开发过程的实时打包需求；
*   对 sourcemap 有很好的支持，易于调试。

Webpack 将项目中用到的一切静态资源都视之为模块，模块之间可以互相依赖。Webpack 对它们进行统一的管理以及打包发布。

Webpack 一般作为全局的 npm 模块安装：

```
npm install -g webpack
```

安装成功后，在命令行输入 webpack -h 即可查看当前安装的版本信息，以及可以使用的指令。直接执行 webpack 命令会默认使用当前目录的 webpack.config.js 作为配置文件。如果要指定另外的配置文件，可以执行：

```
webpack —config webpack.custom.config.js
```

Webpack 可以通过直接命令行来指定参数：

```
# 命令 入口文件 生成文件
webpack entry.js bundle.js
```

但我们通常会将所有相关参数定义在配置文件中，配置文件通常放在项目根目录之下，其本身也是一个标准的 CommonJS 模块。一个最简单的 Webpack 配置文件 webpack.config.js 如下所示：

```
module.exports = {
  entry:[
    './app/entry.js'
  ],
  output: {
    path: __dirname + '/assets/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  }
};
```

其中 entry 参数定义了打包的入口文件，数组中的所有文件会按顺序打包。每个文件进行依赖的递归查找，直到所有相关模块都被打包。output 参数定义了输出文件的位置，其中常用的参数包括：

*   path: 打包文件存放的绝对路径
*   publicPath: 网站运行时的访问路径
*   filename: 打包后的文件名

Webpack 会分析**入口文件**，解析包含依赖关系的各个文件。这些文件（模块）都打包到 `bundle.js`（打包后的文件名） 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 `entry.js` 中的代码，其它模块会在运行依赖引入（require / import）代码的时候再执行。

官网首页的说明：

```
// webpack is a module bundler
// This means webpack takes modules with dependencies
//   and emits static assets representing those modules.

// dependencies can be written in CommonJs
var commonjs = require("./commonjs");
// or in AMD
define(["amd-module", "../file"], function(amdModule, file) {
    // while previous constructs are sync
    // this is async
    require(["big-module/big/file"], function(big) {
         // for async dependencies webpack splits
         //  your application into multiple "chunks".
         // This part of your application is
         //  loaded on demand (Code Splitting)
        var stuff = require("../my/stuff");
        // "../my/stuff" is also loaded on demand
        //  because it's in the callback function
        //  of the AMD require
    });
});

require("coffee!./cup.coffee");
// "Loaders" can be used to preprocess files.
// "Loaders" 可以用来对文件进行预处理
// They can be prefixed in the require call
// 可以写在 require 代码中
//  or configured in the configuration.
// 也可以在配置文件中进行配置
require("./cup");
// This does the same when you add ".coffee" to the extensions
//  and configure the "coffee" loader for /\.coffee$/

function loadTemplate(name) {
    return require("./templates/" + name + ".jade");
    // many expressions are supported in require calls
    // a clever parser extracts information and concludes
    //  that everything in "./templates" that matches
    //  /\.jade$/ should be included in the bundle, as it
    //  can be required.
}

// ... and you can combine everything
function loadTemplateAsync(name, callback) {
    require(["bundle?lazy!./templates/" + name + ".jade"], 
      function(templateBundle) {
        templateBundle(callback);
    });
}
```

更多信息可以参考 webpack 的[官方网站](http://webpack.github.io/)。


### .vue file

> 以 `.vue` 为后缀的文件 - 单文件组件
> 推荐使用 [vue-webpack-simple-boilerplate](https://github.com/vuejs-templates/webpack-simple) 这个模板来进行 vuejs 的组件化开发的学习。

命令行安装：

```
# 全局安装 vue-cli
npm install -g vue-cli
# 模板名为 webpack-simple（目前官方有 5 个模板可供选择，见上文） 
# 项目名为 my-project （自定义）
# 下面命令执行后会出现几个问题，用于配置你的项目信息，可以一路回车（即采用默认值）
vue init webpack-simple my-project
# 进入项目目录
cd my-project
# 执行模块的下载安装，所需模块的配置信息在 package.json 中
npm install
# 执行 dev 脚本（也在 package.json 中），即项目开发模式
npm run dev
# npm run build 执行 build 脚本，项目文件打包生成
```

*   `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload.

*   `npm run build`: Production build with HTML/CSS/JS minification.

> **提醒**：要是执行命令 `npm run dev` 后出现错误，有可能是 node 版本导致的，请将 node 更新到最新版，对于 win 用户来说，直接官网再下载一个最新版本的安装包来安装即可。

接下去每次要对项目进行开发时，就到项目根目录，右键+Shift 键，选择 `在此处打开命令窗口`，然后执行命令 `npm run dev`，即可在 `localhost:8080` 地址上看到运行的项目，修改代码并保存后页面还会自行更新（使用了热加载技术 `webpack-dev-server --inline --hot` ）。

> **Automatic Refresh**
> The webpack-dev-server supports multiple modes to automatic refresh the page:
> 
> *   Iframe mode (page is embedded in an iframe and reloaded on change)
> *   **Inline mode** (a small webpack-dev-server client entry is added to the bundle which refresh the page on change)
>     Each mode also supports Hot Module Replacement in which the bundle is notified that a change happened instead of a full page reload. A Hot Module Replacement runtime could then **load the updated modules and inject them into the running app**.

**相关阅读：**
[webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) - a Node.js based server that supports live reloading and is used for development of webpack powered applications.
[webpack入坑之旅（五）加载 vue 单文件组件](http://guowenfh.github.io/2016/03/25/vue-webpack-05-vue/)

### vue-loader

> vue-loader 用于 webpack 中，用来对以 `.vue` （单文件组件）结尾的文件进行处理。

### vue-router

> `vue-router` - 单页面应用路由
> 使用 Vue.js 和 vue-router 创建单页应用非常的简单，使用 Vue.js 开发，整个应用已经被拆分成了独立的组件。在使用 vue-router 时，我们需要做的就是把路由映射到各个组件，vue-router 会把各个组件渲染到正确的地方。

阅读 [vue-router 文档](http://vuejs.github.io/vue-router/zh-cn/index.html)

**相关阅读：**
[webpack入坑之旅（六）配合 vue-router 实现 SPA](http://guowenfh.github.io/2016/03/28/vue-webpack-06-router/)

## Vuex

阅读 [Vuex 文档](http://vuejs.github.io/vuex/en/index.html)，中文版的过时了，尽量阅读英文版的。

## Vue 2.0

<div class="image-package">![](http://upload-images.jianshu.io/upload_images/448830-955691249e9318ad.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

<div class="image-caption">一张脑图带你认识 Vue 2.0( 来源微博@勾三股四 )</div>

</div>

[Announcing Vue.js 2.0](https://medium.com/the-vue-point/announcing-vue-js-2-0-8af1bde7ab9#.vas0znnlf)
[（译）Announcing Vue.js 2.0](https://zhuanlan.zhihu.com/p/20814761?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
[Code Review for Vue 2.0 Preview](http://jiongks.name/blog/code-review-for-vue-next/)
[Vue 2.0 数据绑定实现一瞥](http://jimliu.net/2016/04/29/a-brief-look-at-vue-2-reactivity/)

## 框架对比

[对比其它框架](https://vuejs.org.cn/guide/comparison.html)

## Vue 视频教程（需科学上网）

1.  [Vue JS Intro](https://www.youtube.com/watch?v=DsuTwV0jwaY)

    > 最轻松简单的入门教程，可以初步对 Vuejs 的使用有个概念。

2.  [An Introduction into Vue.js: Building an Example App](https://www.youtube.com/watch?v=Oqs3Iuid8-8&ebc=ANyPxKrCplDh5ZJbFbDw-emYcLBqjCKa7XrKyeTPU6s8yEqnasaRXiFfqG3ZV8-jVLfM66jNBw8HWo9tS7G-AGMulNniaKSkZg)

3.  [Repository](https://bitbucket.org/alex_sterling/vue.js-demonstration)（该视频教程的代码资源文件）

    > 很棒的视频教程，可以最大化的接触到 Vuejs 所能做到的事情，是我当时看到的对我来说最好的 Vuejs 相关视频教程。

4.  [Vue Js Tutorial Intro with TodoList](https://www.youtube.com/playlist?list=PLZU0qJlzY07UBea4c6ctFd_WJn95MP1mE)

    > 就是对文档里展示的 [Todolist](http://cn.vuejs.org/guide/index.html#%E7%BB%BC%E5%90%88) 的视频化演示，文档理解了就没必要再看了。

5.  [Weather app with VueJS & OpenWeatherMap](https://www.youtube.com/watch?v=Ila5hl27a9A)

    *   Learn how to deal with JSON data with Vue / jQuery
    *   use $.getJSON

    > 随便看看。

6.  [Learning Vue 1.0: Step By Step](https://laracasts.com/series/learning-vue-step-by-step)

    > 没看过，但看目录好像不错，很多值得看一下，免得自己思路不清晰乱踩坑（而且视频是免费的）。

## 名词解释

### hot-reload（热加载）

> **Hot Reloading**
> The idea behind hot reloading is to keep the app running and to inject new versions of the files that you edited at runtime. This way, you don't lose any of your state which is especially useful if you are tweaking the UI.
> 在项目运行过程中，将修改的文件的新版本注入到页面中，只更新相应的模块，这样的话，你不会丢失页面的状态信息，这一点在你微调 UI 的时候尤其有用。

**相关信息：**
[Introducing Hot Reloading](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html)

## 资源

[加入 Vue 社区](https://vuejs.org.cn/guide/join.html#u793E_u533A) - 社区、第三方资源、参与 Vue 开发（参与规则，Vue 的主要组件）
[vue-devtools](https://github.com/vuejs/vue-devtools) - Chrome devtools extension for debugging Vue.js applications.
[Awesome Vue.js](https://github.com/vuejs/awesome-vue#podcasts) - A curated list of awesome things related to Vue.js
[coligo.io](https://coligo.io/) - 在学习 vuejs 的同学，可以看看这个网站，上面都是些 vuejs 不错的案例教程
