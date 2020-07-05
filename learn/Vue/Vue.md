# options

# 生命周期

## 钩子函数

# 插值操作

## v-once

拥有这个占位属性的元素,将Vue中的数据展示出来之后,解除响应系统,后续Vue中数据改变,界面元素不作响应.

## v-html="" 

解析为html

## v-text=""

插入内容，覆盖mutache

## v-pre

不对Vue内容进行解,但依旧会解析html

## v-clock

在vue解析完成后，该属性会被删除。

利用这一点，配合CSS。

# 绑定属性

## v-bind:属性="值"

需要向属性绑定值时，不能使用mustache语法，需要使用v-bind。

## 语法糖

省略v-bind，直接`:属性="值"`。

## 绑定class

class与:class并列作用于元素

一般，key为施加的class名，而value则是boolean值，表示是否开启该样式。

## 绑定style

样式名不使用-连接，而使用驼峰是写法。

value值会默认被Vue解析为变量，所以需要单引号，表示是字符串。

## 对象语法&数组语法

对象语法 `:属性="{key:value...}"`

数组语法 `:属性="[var,var,var]"`

基本都使用对象语法，数组语法了解即可。

# 计算属性

计算属性用于存储多个数据操作后的结果。

options有一个computed，用于放置计算属性。

## setter&getter

计算属性一般没有set方法，没有setter的属性被称为只读属性。

由于计算属性一般没有setter，只有getter，所以就简写。

## 简写

计算属性有一个软规定，命名不用动词。

计算属性简写为一个函数，但在mustache中不需要小括号，直接使用函数名，即可使用。

## 与methods

compted是有缓存的，如果你计算的数据没有任何改变，那么compted直接将缓存的结果给。

而methods，每次调用，必定会进行计算，不管计算的数据有没有变化。

因此，computed的性能比methods高。

# 事件监听

`v-on:事件="动作(一般调用函数)"`

语法糖 `@事件="动作"`

## 参数

事件调用的函数不需要参数,那么直接使用函数名,不需要小括号.

事件调用的函数如果需要一个参数,而事件调用时未传入,也未加小括号,那么Vue默认会将浏览器生成的event事件对象传入.

事件调用的函数需要多个参数,其中一个为event,那么在调用时使用`$event`表示事件对象,传入函数.

## 修饰符

`@:事件.修饰符="动作"`

.stop 用于阻止事件冒泡

.prevent 阻止默认事件

.{keycode|keyAlias} - 当事件从特定按键时,才触发

​	keycode表示按键的键代码(数值)

​	keyAlias表示按键的键别名(字母表示)

.once 只调用一次

.native 监听组件元素的根元素事件

# 循环

## 遍历数组

`v-for=“item in array”` 或者 `v-for="item,index in array"`

## 遍历对象

`v-for="value in obj"` 或 

`v-for="(value,key) in obj"`或

`v-for="(value,key,index) in obj"`

## 数组响应的方法

- push 往数组末尾追加元素
- pop 删除数组中的最后一个元素
- shift 删除数组中的第一个元素
- unshift 在数组最前面添加元素
- split(start,length,) 删除/插入/替换
- sort 排序
- reverse 反转

并不是数组中的数据有变化，一定会被响应到界面，例如直接使用数组下标就不行。

# 过滤器

options中的filters，一般为函数。

使用时候 `{{...|filter}}`



# 表单绑定

v-model用于实现表单和数据的双向绑定，既数据改变会影响到表单，表单改变也将影响到数据。

v-model背后包含两个操作：

1. v-bind绑定value属性
2. v-on指令给当前元素绑定input事件，事件调用的函数中，传入event，然后event.target.value取得表单值。

## radio

radio表单需要name值相同，才能够互斥。而v-model运用于radio表单中能够到达相同的效果。

Vue管理的表单无法使用checked,需要为绑定的变量设置默认值,才能达到checked的效果;

checkbox和select也只能通过设置变量默认值的方式,才能为在界面上展示默认选中.

## checkbox

单个选框：v-model指向的变量保存true（选中）或false（未选中）。

多个选框：v-model指向的变量保存一个数组，而数组中每个元素值就算checkbox的value属性值。

## select

选单项：v-model指向的变量保存单选的value值。

选多项：v-model指向的数组，保存多项的值。

## 值绑定

v-bind:value，表单元素的value属性不再写死，而是动态绑定。

## 修饰符

v-model.修饰符

- lazy: 默认情况下，表单每次输入字符时对应的data中的数据就会自动发生改变。使用了lazy修饰符后，表单失焦或按下enter才会与数据同步。

- number: 使用typof检测表单中输入的数字时，返回的是一个string（默认转为字符串类型）。使用number之后，默认就转为number。
- trim: 去除左右两边的空格

# 组件

1. 创建组件构造器
   1.  `Vue.extend()`
   2. 传入options
   3. options的template元素值为html代码
   4.  template元素中的html代码，必须有一个根节点。
2. 注册组件`Vue.component("组件的标签名",组件)`
3. 使用组件

## 全局与局部

使用`Vue.component()`是注册全局组件，在所有Vue实例中都可以用。

局部组件在Vue实例的options对象的components元素中注册

## 父子组件

在组件(父组件)构造器中的components属性注册组件(子组件)，然后将父组件注册(全局或局部)。

如果将Vue实例(root)也看作组件，再结合组件的作用域，组件只能在父组件之内可访问。

- `Vue.component() `注册的是全局组件，在所有Vue实例或组件内都可以使用。
- `Vue实例的components`属性，注册的是Vue局部组件，在Vue实例管理的区域可以使用。
- `组件的conponents`属性，注册的是仅只能在局部组件内使用的组件。

## 语法糖

语法糖的写法可以省略`Vue.extends()`构造器。

直接使用`{template:...}`，然后将之放到相应的作用域(全局、局部、组件)。

## 模板抽离

在组件中写html代码，会让代码看上去混乱。将模板抽离：

1. 在html中使用`<script type="text/x-template" id="cpnt"></script>`，然后在template属性注册，通过id直接获取`template: "#cpnt"`。注意，type类型必须是 text/x-template。
2. 在html使用`<template id="idnumber">模板代码</template>`，注册方式，与第一种方式相同。

## 组件

### 数据

组件是一个单独模块的封装，它有自己的HTML模板，也有自己的数据。

顶层Vue实例的数据，在组件中无法被访问。而且就算能访问，那么将所有数据都放在顶层Vue中会导致它十分臃肿。

在组件中也有一个data属性，它是函数，然后由这个函数返回对象(对象中存储数据)。

- 如果data属性存储的是一个对象的话，会导致多个组件实例指向同一块内存区域，从而变成了数据共享。

### 方法

组件中定义函数的方式与Vue实例一样。

## props

Vue很多层级都可以向服务器发送数据请求，在开发中，往往是顶层发送数据请求，顶层或许不用这些数据，顶层只是向下层传递。

顶层发送数据请求后，多个底层都可以使用请求到的数据，不需要多个地层发送多次数据请求。

进行顶层与底层(父-子)通信

- 在子组件中使用props (properties) 得到父组件的数据，需要在模板中通过v-bind:接受的变量="传递的变量"
  - 数组方式
  - 对象方式，可以进行类型限制 `{变量:类型}`
  - 对象展开，可以对类型（type）、默认值（default）等进行设置
  - 类型为对象或数组时候，默认值必须是一个函数
- 在父组件通过child得到子组件数据
- 子组件也可以通过事件向父组件发送消息

## 自定义事件



## 驼峰

模板不支持驼峰，需要将驼峰改为连接，在子组件中，就可以通过驼峰获取；注意，这里是指属性和标签，而不是mustache中。