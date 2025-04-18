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
