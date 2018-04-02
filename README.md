# Vue重构有赞商城
> A Vue.js project

1. 商品推荐列表数据获取、渲染、触底加载
    - 迁移静态页面
    - 数据请求： `axios`
    - `RAP` `Mock`数据
    - 使用`mint-u`的`infiniteSroll`组件加载数据效果
2. 底部导航组件
    - 在`src/compoents`下新建`Foot`组件，重构底部导航
3. 轮播组件
4. 分类页功能实现
5. 列表页的开发
6. 详情页的开发
7. 购物车的开发
8. 地址列表和地址表单的开发

## vue实例
- `el`：挂载点，不能是body或html
- `data`：数据对象，推荐在创建实例之前，就声明所有的根级响应式属性
- `生命周期`：`create`实例已完成以下配置：数据观测、属性和方法的运算、watch/event 事件回调
- `methods`
- `components`：单vue组件，template必需，且只能又一个根节点，style可以有多个
## 模版语法
- 文本插值：`{{}}`
- 指令：`v-bind` `v-for` `v-show`
## 列表渲染
## 条件渲染
- `v-if
- `v-show`
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

