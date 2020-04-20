#### v-on的参数传递问题
1.在事件定义时，写方法时省略了小括号，但是方法本身是需要一个参数，
这个时候Vue会默认将浏览器中产生的event事件对象传入到方法中。
2.方法定义时，我们需要event对象和其他参数时，只需要在event参数前面加上
$符号，Vue会解析为event事件对象。
#### v-on的修饰符
语法糖：@click="方法名" <br>
.stop(阻止事件冒泡)：@click.stop <br>
.prevent(阻止默认事件):@click.prevent <br>
监听键盘的敲击事件:@keyup="方法名" <br>
监听键盘的敲击事件修饰符:敲击enter键：@keyup.enter <br>
.once(执行一次回调):@click.once <br>
#### v-if、v-else-if、v-else
v-if="boolean值或者变量名"
如果v-if为false则执行v-else
#### v-show标签以及与v-if的区别
v-show:false将style中的display设置为none 
在显示和隐藏的频率较高时，推荐使用v-show<br>
v-if:当条件为false，包含v-if的标签元素，不会存在于网页DOM中
#### v-for标签的使用
1.在遍历对象的过程中，如果只是获取一个值，那么获取到的是value <br>
2.获取key和value 格式：(value,key)  <br>
3.获取key和value和index，格式：(value,key,index) <br>
 #### v-for标签中添加key属性
 小知识点：往数组删除元素,数组.splice() <br>
 官方推荐我们在使用v-for时，给对应的元素或组件添加上一个:key属性 <br>
 #### 哪些数组的方法是响应式的
以下方法都可以添加多个元素 <br>
数组.push('变量') <br>
数组.pop()   将数组最后一个元素删除 <br>
数组.shift()  将数组第一个元素删除 <br>
数组.unshift()  在数组最前面添加元素 <br>
数组.splice() 可以删除元素，插入元素，替换元素
数组.splice(start) 第一个参数表示从哪一个位置删除元素，插入元素，替换元素.<br>
第二个参数表示删除几个元素,第三个参数用于替换元素.<br>
插入元素：将第二个参数传入0，后面传入要插入的元素.<br>
数组.sort() 排序<br>
数组.reverse() 反转<br>
#### Vue过滤器语法
在new Vue创建对象时，编写filters过滤器
html页面语法：变量 | 过滤器名称
#### Javascript高阶函数的使用
数组.filter/map/reduce<br>
filter实现数组过滤
```
    const nums=[20,40,60,80,100,120,150]
    let filterNums=nums.filter(function (n) {
      return n<100
    })
    console.log(filterNums);
```
filter中的回调函数有一个要求：必须返回一个boolean值.<br>
当返回true时，函数内部会自动将这次回调的n加入到新的数组中.<br>
当返回false时，函数内部会过滤掉这次的n.<br> 
map实现数组变化:返回数组
```
    let mapNums=nums.map(function (n) {
      return n+2
    })
    console.log(mapNums);
```
reduce函数的使用：对数组所有的内容进行汇总<br>
第一个参数为回调函数,第二个参数为previousValue的初始值
```
    let reduceNums=nums.reduce(function (previousValue,currentValue) {
      return previousValue+currentValue
    },0)
```
#### v-model:实现数据的双向绑定-结合radio单选按钮的操作
v-model='vue的data变量名'
```
    <input type="radio" id="male" value="男" v-model="sex">男
    <input type="radio" id="female" value="女" v-model="sex">女
    <h2>选择的是:{{sex}}</h2>
```
#### v-model修饰符的使用
v-model.lazy:默认情况下是在input时间中同步输入框的数据的。lazy修饰符可以让数据在失去焦点或回车时才会更新.<br>
v-model.number:默认情况下，无论我们输入的是字母还是数组，都会被当做字符串来进行处理。但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字进行处理。number修饰符可以让在输入框中输入的内容自动转成数字类型.<br>
v-model.trim:如果输入的内容首尾有很多空格，通常我们希望将其去除，trim修饰符可以过滤左右两边的空格。<br>
#### Vue组件化的基本使用
##### 全局组件
```
    //1.创建组件构造器对象
        const cpnC = Vue.extend({
          template:`
            <div>
                <h2>我爱你傻婆！</h2>
                <h4>老婆我爱你！</h4>
            </div>`
        });
        //2.注册组件(全局组件，意味着可以在多个Vue的实例下面使用)
        Vue.component('my-cpn',cpnC);
```
注意Vue.component的标签变量名不支持驼峰规则，不能出现大写<br>
##### 局部组件
```js
const app = new Vue({
    el: '#app',
    data: {
      message: '你好，Vue!'
    },
    components: {
      //标签名：注册的组件变量名
      cpn: cpnC
    }
  })
```
##### 在组件中使用样式

- 在组件中定义样式，组件里的样式会影响所有组件，如何设定，让样式只作用于当前组件？

- content组件中的style将会影响整个页面的元素，因此在组件的style标签里加入scoped关键字，让该样式只作用于
  当前组件。

- ```html
  <style scoped>
  div{
  	border: 1px solid red;
  }
  </style>
  ```

- 

#### Vue注册组件的语法糖(简写)

```
//注册全局组件的语法糖
    Vue.component('cpn1',{
      template:`
      <div>
            <h2>我爱你傻婆！</h2>
            <h4>老婆我爱你！</h4>
      </div>
      `
    })
    //注册局部组件的语法糖
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好，Vue!'
    },
    components:{
      'cpn2':{
        template: `
        <div>
            <h2>我爱你傻婆！</h2>
            <h4>老婆我爱你！</h4>
        </div>
        `
      }
    }
  })
```
#### Vue组件开发模板抽离的方法
HTML:
```
<template id="cpn">
    <div>
        <h2>我想你了傻婆！好想你！</h2>
    </div>
</template>
```
JS:
```
const app = new Vue({
    el: '#app',
    data: {
      message: '你好，Vue!'
    },
    components:{
      'cpn':{
        template:'#cpn'
      }
    }
  })
```
**模板中应该将组件包含在一个根元素div**
#### Vue组件数据的存放
```html
//注册一个全局组件
  Vue.component('cpn', {
    template: '#cpn',
    //注意是个函数
    data() {
      return {
        title: 'BossKing'
      }
    }
  })
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好，Vue!'
    }
  })
```
#### 父子组件的通信
通过props向子组件传递数据,即子组件中使用props负责接收数据 <br>
```
   //数据
   data: {
      message: '你好，Vue!',
      movies:["黑色的四叶草",'火影忍者','斗罗大陆']
    },
    //props接收数据
    props:{
      cMessage:{
       type:String,
       default:'',
       required:true
      },
      cmovie:{
        type:Array,
        default(){
          return ['电影']
        }
      }
    }
    //v-bind:动态绑定
    <cpn2  v-bind:c-message="message" :cmovie="movies"></cpn2>
    //模板中展示数据
    <template id="father">
        <div>
            <h2>我爱你傻婆！好想你！</h2>
            <h2>{{cMessage}}</h2>
            <li v-for="item in cmovie">{{item}}</li>
        </div>
    </template>
```
**编写代码注意点**:如果js中使用驼峰规则命名，在动态绑定时需要使用-连接，如cMessage转换为c-message<br>
通过事件向父组件发送消息 
#### 子组件向父组件传递数据
```
        btnClick(item){
          this.$emit('item-click',item);
        }
```
自定义事件传递数据，html中负责接收，不需要特地去接收参数，会默认传参
```
<div id="app">
    <cpn @item-click="cpnClick"></cpn>
</div>
```
JS中定义事件：
```
    const app = new Vue({
    el: '#app',
    data: {
      message: '你好，Vue!'
    },
    components:{
      cpn:cpn
    },
    methods: {
      cpnClick(item){
        console.log(item);
      }
    }
  })
```
#### 组件访问：父访问子
1.$children<br>
2.HTML:<标签 ref="变量名">   JS:$refs.变量名<br>
#### 组件访问：子组件访问父组件
1.this.$parent<br>
2.this.$root

#### 插槽的基本使用
放在template中的插槽使用：slot<br>
如果有多个元素则一起进行插槽替换

#### Vue开发模式

##### 1.vue-cli骨架

​	CLI（command line interfaces ）命令行接口。在进行Vue项目开发时，可以选择不同的Vue模板进行项目的搭建，比如simple、webpack-simple、webpack、browserify/browserify-simple等；vue-cli是官方提供的一个脚手架（预先定义好的目录结构及基础代码，咱们在创建 Maven 项目时可以选择创建一个骨架项目，这个骨架项目就是脚手架），用于快速生成一个 vue 的项目模板。

- 使用vue list命令查看当前可用的vue骨架

- 使用vue命令创建基于vue-webpack-simple骨架的项目,vue-cli-demo是项目名，过程中需要输入一些参数，回车是使用提示的值。

- ```shell
  vue init webpack-simple vue-cli-demo
  ```

- 进入到项目文件中，安装依赖环境

- ```shell
  npm install
  ```

- ```shell
  npm run dev
  ```

##### 2.演示图

![](.//image//vue_init.png)



#### http请求--ajax

##### 1.什么是Axios

- Axios 是一个开源的可以用在浏览器端和 NodeJS 的异步通信框架，她的主要作用就是实现 A JAX 异步通信，其功能特点如下：
- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF （跨站请求伪造）

##### 2.Axios的使用

1.安装vue axios

```node
npm install --save axios vue-axios
```

2.在main.js引入

在项目中使用axios模块

```js
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
```

3.发送ajax请求

```js
this.axios({
	method:'get',
	url:'http://bit.ly/2mTM3nY',
	data:{}
}).then(function (response) {
	console.log(response.data)
	});
```

4.后端解决跨域问题

```xml
<mvc:cors>
<mvc:mapping path="/**"
	allowed-origins="*"
	allowed-methods="POST, GET, OPTIONS, DELETE, 		PUT,PATCH"
	allowed-headers="Content-Type, Access-Control-		Allow-Headers, Authorization, X-Requested-
	With"
	allow-credentials="true" />
</mvc:cors>
```

在spring-mvc.xml中加入上述这一段。其中，allowed-origins指的是允许的访问源的域名，"*"表示任何人都可以访问，也可以指明具体的域名。

#### 路由（组件之间的跳转）

##### 1.安装路由模块

`npm install vue-router --save-dev`

##### 2.设计路由界面(添加组件)

![](.//image//add_component.png)

![](.//image//vue_router.png)

##### 3. 创建路由表

```js
import Home from './views/Home'   //引入路由界面
import Products from "./views/Products";

export const routes=[
  {
    path:'/Home',
    component:Home
  },
  {
    path:'/Products',
    component: Products
  }
]

```

![](.//image//vue_routes.png)

##### 4.main.js引入

```js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  // 1.引入路由模块
import {routes} from "./routes";  //2.引入静态路由表


Vue.use(VueRouter); //3.使用路由模块

//4.创建路由实例
const router=new VueRouter({
  routes:routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router   //5.把路由实例放入Vue中
})

```

##### 5. 在App.vue中添加标签

![](.//image//vue_router_view.png)

`<router-view></router-view>`

##### 6.展示

![](.//image//routes_url.png)

##### 7.使用路由链接标签router-link标签实现路由跳转

```git
<template>
  <div id="app">
    <span>
      <router-link to="/Home">首页</router-link>
    </span>
    <span>
      <router-link to="/Products">内容</router-link>
    </span>

    <router-view></router-view>
  </div>
</template>
```

#### 路由之间的参数传递

##### 设置参数

设置路由表中的变量名：

```js
export const routes=[
  {
    path:'/Home/:userid',
    component:Home
  },
  {
    path:'/Products/:username',
    component: Products
  }
]
```

##### 传递参数

![](.//image//app_vue_route.png)

##### 接收参数

```js
data(){
      return {
        id:this.$route.params.userid
      }
}
```

<img src=".//image//accept.png"  />

注：`this.$route.params.userid`中的userid应该与设置参数中的变量名相对应！