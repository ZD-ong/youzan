# Vue重构有赞商城
> A Vue.js project

1. 商品推荐列表数据获取、渲染、触底加载
    - 迁移静态页面
    - 数据请求：`axios`
    - [RAP](http://rapapi.org/org/index.do)：Mock数据
    - 安装[mint-ui](http://mint-ui.github.io/#!/zh-cn)，选择[infiniteSroll](http://mint-ui.github.io/docs/#/en2/infinite-scroll)组件加载数据效果
    - 配置`.babelrc`：在`.babelrc`中配置`plugins`，添加`mint-ui`组件
2. 底部导航组件
    - 在`src/compoents`下新建`Foot.vue`组件，重构底部导航
3. 轮播组件
    - 在`src/compoents`下新建`Swipe.vue`
    - 安装[Swiper](http://idangero.us/swiper/demos/)组件
    - 新建`Swiper`实例，配置自动无缝轮播
4. 分类页功能实现
    -   迁移静态页面
    -   侧边导航栏点击切换推荐页
    -   通过分页`index`绑定`active`
    ```
    :class="{active:index==topIndex}
    ```
    - 点击切换分页
    ```
    @click="getSubList(index,list.id)
    ```
    - 对价格数据进行处理（小数点后两位）
    ```
    filters: {
        number(price) {
            let priceStr = '' + price
            if (priceStr.indexOf('.') > -1) {
                let arr = priceStr.split('.')
                return arr[0] + '.' + (arr[1] + '0').substr(0, 2)
            } else {
                return priceStr + '.00'
            }
        }
    }
    ```
5. 列表页的开发
6. 详情页的开发
    - 入口数据获取和渲染
    - 选择规格弹框：过渡效果、数据增减
        - 数量为1时做处理，不能低于一件
        - 使用内置组件`transition`进行过渡效果的处理
    - 加入购物车：购物车按钮显示、信息提示
        - 判断是否已加入购物车
7. 购物车的开发
8. 地址列表和地址表单的开发

## vue实例
- `el`：挂载点，不能是body或html
- `data`：数据对象，推荐在创建实例之前，就声明所有的根级响应式属性
- `生命周期`：`create`实例已完成以下配置：数据观测、属性和方法的运算、watch/event 事件回调
- `methods`
- `components`：单vue组件，template必需，且只能有一个根节点，style可以有多个
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

