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
#### v-model结合radio单选按钮的操作
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
```
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