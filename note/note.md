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