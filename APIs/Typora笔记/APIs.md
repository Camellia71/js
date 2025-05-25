APIs-1

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

​	**css里面怎么写，引号里面就怎么写**，简而言之，' '里面就是css选择器，可以写后代选择器等；

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

生成的是行内样式表，权重比较高

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

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        h2 {
            text-align: center;
        }

        .box {
            width: 600px;
            margin: 50px auto;
            display: flex;
            font-size: 25px;
            line-height: 40px;

        }

        .qs {
            width: 450px;
            height: 40px;
            color: red;
        }

        .btns {
            text-align: center;
        }

        .btns button {
            width: 120px;
            height: 35px;
            margin: 0 50px;
        }
    </style>
</head>

<body>
    <h2>随机点名</h2>
    <div class="box">
        <span>名字是：</span>
        <div class="qs">这里显示姓名</div>
    </div>
    <div class="btns">
        <button class="start">开始</button>
        <button class="end">结束</button>
    </div>
    <script>
        const arr = ['马超', '黄忠', '赵云', '关羽', '张飞']
        //声明，便于关闭按钮
        let timeID = 0
        //随机号要全局变量
        let random = 0
        //1.开始按钮
        const start = document.querySelector('.start')
        const qs = document.querySelector('.qs')
        start.addEventListener('click', function () {
            timeID = setInterval(function () {
                random = Math.floor(Math.random() * arr.length)
                qs.innerHTML = arr[random]
            }, 100)
            //如果数组里面只有一个值了，那就不需要抽了
            if (arr.length === 1) {
                start.disabled = end.disabled = true
            }
        })

        //2.关闭按钮
        const end = document.querySelector('.end')
        end.addEventListener('click', function () {
            clearInterval(timeID)
            //结束了之后就要删除
            arr.splice(random, 1)
        })
    </script>
</body>

</html>
```

#### 3.事件监听版本

1.第一个版本，缺点是会被覆盖；只能做冒泡，不能做捕获

```js
	<button>点击</button>
    <script>
        const btn = document.querySelector('button')
        btn.onclick = function () {
            alert('11')
        }
        btn.onclick = function () {
            alert('22')
        }
        //显示22，说明上方的被覆盖
    </script>
```

2.第二个版本，捕获和冒泡都能做

```js
btn.addEventListener('click',function() {
            alert('33')
        })
btn.addEventListener('click',function() {
            alert('44')
        })
```

### 2.事件类型

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250502220159416.png" alt="image-20250502220159416" style="zoom: 50%;" />

鼠标：

```js
		const div = document.querySelector('div')
        div.addEventListener('mouseenter', function () {
            console.log('轻轻的我来了')
        })
        div.addEventListener('mouseleave', function () {
            console.log('轻轻的我走了')
        })
```

焦点：

```js
        const input = document.querySelector('input')
        input.addEventListener('focus', function () {
            console.log('有焦点触发')
        })
        input.addEventListener('blur', function () {
            console.log('失去焦点触发')
        })
```

键盘：

```js
         input.addEventListener('keydown', function () {
             console.log('键盘按下了')
         })
         input.addEventListener('keyup', function () {
             console.log('键盘弹起了')
         })
```

文本：

```js
        input.addEventListener('input',function(){
            console.log(input.value)
        })
```

#### 案例

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250506234421985.png" alt="image-20250506234421985" style="zoom: 50%;" />

代码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .wrapper {
            min-width: 400px;
            max-width: 800px;
            display: flex;
            justify-content: flex-end;
        }

        .avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            background: url(./images/avatar.jpg) no-repeat center / cover;
            margin-right: 20px;
        }

        .wrapper textarea {
            outline: none;
            border-color: transparent;
            resize: none;
            background: #f5f5f5;
            border-radius: 4px;
            flex: 1;
            padding: 10px;
            transition: all 0.5s;
            height: 30px;
        }

        .wrapper textarea:focus {
            border-color: #e4e4e4;
            background: #fff;
            height: 50px;
        }

        .wrapper button {
            background: #00aeec;
            color: #fff;
            border: none;
            border-radius: 4px;
            margin-left: 10px;
            width: 70px;
            cursor: pointer;
        }

        .wrapper .total {
            margin-right: 80px;
            color: #999;
            margin-top: 5px;
            opacity: 0;
            transition: all 0.5s;
        }

        .list {
            min-width: 400px;
            max-width: 800px;
            display: flex;
        }

        .list .item {
            width: 100%;
            display: flex;
        }

        .list .item .info {
            flex: 1;
            border-bottom: 1px dashed #e4e4e4;
            padding-bottom: 10px;
        }

        .list .item p {
            margin: 0;
        }

        .list .item .name {
            color: #FB7299;
            font-size: 14px;
            font-weight: bold;
        }

        .list .item .text {
            color: #333;
            padding: 10px 0;
        }

        .list .item .time {
            color: #999;
            font-size: 12px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <i class="avatar"></i>
        <textarea name="" id="tx" placeholder="发一条友善的评论" rows="2" maxlength="200"></textarea>
        <button>发布</button>
    </div>
    <div class="wrapper">
        <span class="total">0/200字</span>
    </div>
    <div class="list">
        <div class="item" style="display:none">
            <i class="avator"></i>
            <div class="info">
                <p class="name">清风徐来</p>
                <p class="text">大家都辛苦啦，感谢各位大大的努力，能圆满完成真是太好啦</p>
                <p class="time">2022-10-10 20:29:21</p>
            </div>
        </div>
    </div>
    <script>
        const tx = document.querySelector('#tx')
        const total = document.querySelector('.total')
        //1.当文本域获得焦点，就让total显示出来
        tx.addEventListener('focus', function () {
            total.style.opacity = 1
        })
        //2.当文本域失去焦点，就让total隐藏
        tx.addEventListener('blur', function () {
            total.style.opacity = 0
        })
        //3.检测用户输入
        tx.addEventListener('input', function () {
            // console.log(tx.value.length)
            total.innerHTML = `${tx.value.length}/200字`
        })

        //字符串也有长度
        // const str = 'andy'
        // console.log(str.length)
    </script>
</body>

</html>
```

### 3.事件对象

#### 1.获取事件对象

这个对象里有事件触发的相关信息

在事件绑定的回调函数的第一个参数就是事件对象，一般命名为event，ev，e

```js
元素.addEvevtListener('click',function(e){

})
```

#### 2.事件对象常用属性

type:获取当前的事件类型

clientX/clientY：获取光标相对于浏览器可见窗口左上角的位置

offsetX/offsetY：获取光标相对于当前DOM元素左上角的位置

key：用户按下键盘的值，现在不提倡用keyCode

```js
        const input = document.querySelector('input')
        input.addEventListener('keyup', function (e) {
            // console.log(e.key)
            if(e.key==='Enter') {
                console.log('回车键')
            }
        })
```

去除字符串两侧的空格：

```js
    <script>
        const str = '       pink     '
        console.log(str.trim())
    </script>
```

### 4.环境对象

环境对象是指函数内部特殊的变量this，**它代表着当前函数运行时所处的环境**；弄清楚this的指向会让我们代码更简洁。

```js
        function fn() {
            console.log(this)
        }
        window.fn()
//每个函数都有this 环境对象，普通函数里面this指向的是window
```

函数调用方式不同的话，this指代的对象也不同

```js
<button>点击</button>
<script>
    const btn = document.querySelector('button')
    btn.addEventListener('click', function () {
        console.log(this)    // 指向btn
    })
</script>
```

**粗略规则：谁调用，this就指向谁。**

直接调用函数就是调用window.函数，所以this指代window

### 5.回调函数

如果**将函数A作为参数传给函数B**，我们就称函数A为回调函数

```js
//定时器就很常见
function fn() {
    console.log('我是回调函数')
}
//fn传递给了setInterval, fn就是回调函数
setInterval(fn,1000)//过了一秒钟，就回去再调用
```

定时器，事件监听都使用了回调函数

### 6.案例

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250517003941329.png" alt="image-20250517003941329" style="zoom: 50%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .tab {
            width: 590px;
            height: 340px;
            margin: 20px;
            border: 1px solid #e4e4e4;
        }

        .tab-nav {
            width: 100%;
            height: 60px;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
        }

        .tab-nav h3 {
            font-size: 24px;
            font-weight: normal;
            margin-left: 20px;
        }

        .tab-nav ul {
            list-style: none;
            display: flex;
            justify-content: flex-end;
        }

        .tab-nav ul li {
            margin: 0 20px;
            font-size: 14px;
        }

        .tab-nav ul li a {
            text-decoration: none;
            border-bottom: 2px solid transparent;
            color: #333;
        }

        .tab-nav ul li a.active {
            border-color: #e1251b;
            color: #e1251b;
        }

        .tab-content {
            padding: 0 16px;
        }

        .tab-content .item {
            display: none;
        }

        .tab-content .item.active {
            display: block;
        }

        .tab-content .item img {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab-nav">
            <h3>每日特价</h3>
            <ul>
                <li><a class="active" href="javascript">精选</a></li>
                <li><a href="javascript">美食</a></li>
                <li><a href="javascript">百货</a></li>
                <li><a href="javascript">个护</a></li>
                <li><a href="javascript">预告</a></li>
            </ul>
        </div>
        <div class="tab-content">
            <div class="item active"><img src="../images/ao-1.jpg" alt=""></div>
            <div class="item"><img src="../images/ao-2.jpg" alt=""></div>
            <div class="item"><img src="../images/ao-3.jpg" alt=""></div>
            <div class="item"><img src="../images/ao-4.jpg" alt=""></div>
            <div class="item"><img src="../images/ao-5.jpg" alt=""></div>
        </div>
    </div>
    <script>
        //1.a 模块 要给5个链接绑定鼠标经过事件
        //1.1 获取元素
        const as = document.querySelectorAll('.tab-nav a')
        for (let i = 0; i < as.length; i++) {
            as[i].addEventListener('mouseenter', function () {
                //清除一开始的active类
                document.querySelector('.tab-nav .active').classList.remove('active')
                //经过的添加active类
                this.classList.add('active')

                //下面的五个盒子
                //清除一开始的active
                document.querySelector('.tab-content .active').classList.remove('active')
                //对应序号的item添加active类
                document.querySelector(`.tab-content .item:nth-child(${i + 1})`).classList.add('active')
            })
        }

    </script>
</body>

</html>
```

## APIs-3

### 1.案例

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250519235604259.png" alt="image-20250519235604259" style="zoom: 67%;" />

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px solid #c0c0c0;
            width: 500px;
            margin: 100px auto;
            text-align: center;
        }

        th {
            background-color: #09c;
            font: bold 16px "微软雅黑";
            color: #fff;
            height: 24px;
        }

        td {
            border: 1px solid #d0d0d0;
            color: #404060;
            padding: 10px;
        }

        .allCheck {
            width: 80px;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <th class="allCheck">
                <input type="checkbox" name="" id="checkAll"><span class="all">全选</span>
            </th>
            <th>商品</th>
            <th>商家</th>
            <th>价格</th>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="check" class="ck">
            </td>
            <td>小米手机</td>
            <td>小米</td>
            <td>￥1999</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="check" class="ck">
            </td>
            <td>小米净水器</td>
            <td>小米</td>
            <td>￥4999</td>
        </tr>
        <tr>
            <td>
                <input type="checkbox" name="check" class="ck">
            </td>
            <td>小米电视</td>
            <td>小米</td>
            <td>￥5999</td>
        </tr>
    </table>
    <script>
        //1.获取大复选框 
        const checkAll = document.querySelector('#checkAll')
        //2.获取所有的小复选框
        const cks = document.querySelectorAll('.ck')
        //3.点击大复选框
        checkAll.addEventListener('click', function () {
            //得到当前大复选框的选中状态
            // console.log(this.checked)//得到的是true或false
            //4.遍历所有的小复选框，使其与大复选框保持一致
            for (let i = 0; i < cks.length; i++) {
                cks[i].checked = this.checked  //checkAll.checked也可以
            }
        })
        //5.小复选框控制大复选框
        //5.1 给所有的小复选框添加点击事件
        for (let i = 0; i < cks.length; i++) {
            cks[i].addEventListener('click', function () {
                //判断选中的小复选框个数是否等于全部的小复选框个数
                //一定要写到点击里面，因为每次要获得新的个数
                // console.log(document.querySelectorAll('.ck:checked').length)//选中的小复选框的个数

                //用if判断
                // if (document.querySelectorAll('.ck:checked').length === cks.length) {
                //     checkAll.checked = this.checked
                // }
                //右侧返回true或false，则可以直接等于checkAll.checked
                checkAll.checked = (document.querySelectorAll('.ck:checked').length === cks.length)

            })
        }
    </script>
</body>

</html>
```

### 2.事件流

#### 1.简单介绍

事件流是时间完整执行过程中的流动路径；分为事件捕获和事件冒泡。

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250520234130987.png" alt="image-20250520234130987" style="zoom: 33%;" />

#### 2.事件捕获

从DOM的根目录开始去执行对应的事件（从外到里）

```js
DOM.addEventListener(事件类型，事件处理函数，是否使用捕获机制)
```

第三个参数传入true代表捕获阶段触发（很少使用）

```js
        son.addEventListener('click', function () {
            alert('我是儿子')
        },true)
```

#### 3.事件冒泡

当一个元素的事件被触发时，同样的事件将会在该元素的所有祖先元素中依次被触发

也就是说，当一个元素触发后，会依次向上调用所有父级元素的**同名事件（事件类型相同）**；

```
DOM.addEventListener(事件类型，事件处理函数，是否使用捕获机制)
```

若传入false代表冒泡阶段触发，默认就是false；事件冒泡是默认存在的

#### 4.阻止冒泡

若想把事件就限制在当前元素内，就要阻止事件冒泡；

```js
事件对象.stopPropagation()
```

此方法可以**阻止事件流动传播**，不光在冒泡阶段有效，捕获阶段也有效；

#### 5.解绑事件

（1）on事件

直接使用null覆盖偶就能实现事件的解绑

```js
btn.onclick = function() {
	alert('点击了')
}
//解绑事件
btn.onclick = null
```

（2）addEventListener 事件

这时就要使用removeEventListener(事件类型，事件处理函数，[获取捕获或冒泡阶段])

**注意：匿名函数无法被解绑；**

```js
        function fn() {
            alert('点击了了')
        }
        btn.addEventListener('click', fn)
        btn.removeEventListener('click', fn)
```

**鼠标经过事件**

通过mouseover和mouseout来实现

```js
        dad.addEventListener('mouseover', function () {
            console.log('鼠标经过')
        })
        dad.addEventListener('mouseout', function () {
            console.log('鼠标离开')
        })
```

