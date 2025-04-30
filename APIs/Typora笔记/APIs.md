## APIs-1

在以后变量声明先用const，尤其是数组和对象

### 1.web API的基本认知

#### 1.作用和分类

作用：就是使用js来操作浏览器和html标签

分类：DOM（文档对象模型），BOM（浏览器对象模型）

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250413170712022.png" alt="image-20250413170712022" style="zoom:50%;" />

关于DOM：用来呈现以及与任意html或者xml文档交互的API；作用是开发网页内容特效以及实现用户交互

#### 2.DOM树

将html文件以树状结构表示出来，我们称之为文档树或DOM树，它是描述网页内容关系的名词；能够更直观地体现标签之间的关系

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250413212632568.png" alt="image-20250413212632568" style="zoom: 67%;" />

#### 3.DOM对象

其实是浏览器根据html标签生成的js对象

1.所有的标签对象都可以在这个对象上面找到

2.修改这个对象的属性会自动映射到标签身上

DOM的**核心思想**是将网页内容当作对象来处理

**document对象**是DOM里提供的一个对象，所以他提供的属性和方法都是用来访问和操作网页内容的，比如document.write()，而网页所有的内容都在document里面

### 2.获取DOM对象

##### 1.通过css选择器来获取DOM对象

1.获取匹配的第一个元素

​	css里面怎么写，引号里面就怎么写，可以写后代选择器等；

返回值：

​	返回css选择器匹配的第一个元素，即一个htmlElement对象

​	如果没有匹配到的话，就会返回null

```js
document.querySelector('css选择器')
//
<div class="box"></div>
    <p id="nav">xixixi</p>
    <script>
        const box = document.querySelector('.box')
        console.log(box)
        const nav =document.querySelector('#nav')
        console.log(nav) 
    </script>
```

2.选择匹配的多个元素

返回值：

​	返回匹配的NodeList对象合集，这其实是一个伪数组，它有长度和索引号，但是没有push()等数组方法，所以想要得到里面的每一个对象，则需要遍历(for)的方式

```js
const lis = document.querySelectorAll('.nav li')
        for(let i = 0;i<lis.length;i++) {
            console.log(lis[i])
            lis[i].style.color= 'green'
        }
```

##### 2.通过其他方式获取DOM对象

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250415161142393.png" alt="image-20250415161142393" style="zoom:50%;" />

### 3.操作元素内容

DOM对象都是根据标签生成的，所以操作标签本质上就是操作DOM对象；

操作对象使用点语法：

```js
div.style.color = 'red'
```

如果想要修改标签元素里面的内容，可以使用以下几种方式：

##### 1.对象.innerText属性

将文本内容添加或更新到任意标签位置

显示纯文本，不解析标签

```js
const box = document.querySelector('.box')
console.log(box.innerText)
box.innerText = '我是盒子'
console.log(box.innerText)
```

##### 2.对象.innerHTML属性

会解析标签，多标签建议使用模板字符

```js
const box1 = document.querySelector('.box1')
console.log(box1.innerHTML)
box1.innerHTML='<strong>我是innerHTML</strong>'
console.log(box1.innerHTML)
```

### 4.操作元素属性

#### 1.操作元素常用属性

常见的属性包括：href, title, src等

```js
对象.属性 = 值
```

#### 2.操作元素样式属性

学习路径：

**通过style属性操作css**

```js
对象.style.样式属性 = 值
```

```js
<div class="box"></div>
    <script>
        const box = document.querySelector('.box')
        box.style.width = '300px'//字符串加单位
        box.style.backgroundColor='hotpink'//-用大写代替
    </script>
```

多种情况用小驼峰命名法

**操作类名（className）操作css**

修改的样式比较多的话直接通过style属性修改就会很繁琐，这时候就要使用css类名的方式

```js
//active是一个css类名
元素.className = 'active'
```

className是使用新值换旧值，如果需要添加一个类，需要保留之前的类名

```js
<div class="nav">
    123
</div>
<script>
    const div = document.querySelector('div')
	div.className = 'nav box'
</script>
```

**通过classList操作类控制css**

为了解决className容易覆盖以前的类名，我们可以通过classList方式追加和删除类名

```js
const box = document.querySelector('.box')
box.classList.add('active')//类名不加点
box.classList.remove('box')//删除
box.classList.toggle('active')//有就删掉，没有就加上
```

#### 3.操作表单元素属性

获取：DOM对象.属性名

设置：DOM对象.属性名 = 新值

```js
表单.value = '用户名'
表单.type = 'password'
```

表单属性中添加就有效果，移除就没有效果，一律使用布尔值表示，是true和false

比如：disabled ,checked ,selected

```js
<input type="checkbox" name="" id="">
<button>点击</button>
<script>
	const ipt = document.querySelector('input')
	ipt.checked = true  //勾选
	const button = document.querySelector('button')
	button.disabled = true  //禁用点击
</script>
```

#### 4.自定义属性

标准属性是标签自带的属性，比如class id title等，可以直接使用点语法操作比如：disabled，checked，selected等

自定义属性：

​	在html5推出来了专门的data-自定义属性

​	标签一律以data-开头

​	在DOM对象上一律以dataset对象方式获取

```js
<div data-id="5" data-spm='buzhi'>5</div>
    <script>
        const one = document.querySelector('div')
        console.log(one.dataset)//set是集合的意思
		console.log(one.dataset.spm)
    </script>
```

#### 5.定时器-间歇函数

网页中用到的一种功能：每隔一段时间需要自动执行一段代码，不需要我们手动触发

**开启定时器**

```js
setInterval(函数,间隔时间)  //开启定时器，间隔时间的单位是毫秒
```

```js
setInterval(function(){
    console.log('一秒钟打印一次')
},1000)
有名函数
function fn() {
    console.log('2')
}
let n = setInterval(fn,100)或者         
setInterval('fn()',100)
```

开启定时器时函数名字不需要加括号，返回的是一个id数据

**关闭定时器**

```js
let n = setInterval(fn,1000)
clearInterval(n)
```

### 5.案例

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250428223822517.png" alt="image-20250428223822517" style="zoom: 33%;" />

## APIs-2

### 1.事件监听（绑定）

#### 1.事件监听

事件是在编程时系统内发生的动作或事情

事件监听是让程序检测是否有事件产生，一旦有事件触发，就立即调用一个函数做出响应，也称为绑定事件或者注册事件，比如鼠标经过显示下拉菜单等

```js
元素对象.addEventListener('事件类型',要执行的函数)
```

**三要素：**

事件源：要获取被事件触发的dom元素

事件类型：用什么方式触发，比如鼠标单击click，鼠标经过mouseover等

事件调用的函数：要做什么事

**注意：**

事件类型要加引号；函数是点击一次触发一次

#### 2.案例

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250430213711820.png" alt="image-20250430213711820" style="zoom: 50%;" />
