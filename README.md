# egg+laycms2快速开发后台管理系统

### laycms2.0静态纯前端工程：https://github.com/BrotherMa/layuicms2.0

### 一、整合思路
   1、在egg中新建一个“http://localhost:7001/”路由，渲染View下的index.html界面,而index.html页面是后台管理系统的首页，所有页面将以此页面为基础，页面跳转、左侧导航栏等。

### 二、整合步骤
   #### 2.1 egg添加依赖-添加html依赖、静态文件依赖
   >"egg-view-ejs": "^2.0.0",  
   >"egg-static": "^2.1.1"
   #### 2.2 在config/config.default.js中进行如下配置
   > config.view = {    
   >    mapping: {'.html': 'ejs'} //左边写成.html后缀，会自动渲染.html文件   
   >};   
   >// static   
   > config.static = {   
   >    prefix: '/public/',   
   > };  
   ####  2.3 拷入layCMS2.0静态工程到egg项目的public中
   > 完成了了2.2的配置后，访问“http://localhost:7001/public”将访问egg工程的public目录，因此所有引入了静态文件的位置加上/public/,包括JS、css、json静态文件配置，确保所有静态在文件可以正常引用。
   
   #### 2.4 此时已经可以启动项目，查看效果。
   > 后续前后端数据交互，需要进行进行前后端开发，可以进行前后端分离开发，前端通过ajax调用API和后端进行交互。
   > 具体请求实例可以参考工程：https://github.com/dpc761218914/company_website
  

   
## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## 项目截图
![QQ截图20190112144204.jpg](https://upload-images.jianshu.io/upload_images/2227968-09431af529a51272.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![QQ截图20190112144216.jpg](https://upload-images.jianshu.io/upload_images/2227968-ad0c369df71ae2b5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![QQ截图20190112144230.jpg](https://upload-images.jianshu.io/upload_images/2227968-63f8c2004e7f6cda.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
