# js基础部分

### 1.js简介

组成：

ECMAscript

BOM

DOM

##### 1.1 输入输出

分号是结束符，可以不写；

```html
<body>
	<script>
		页面弹出警示框
		alert('xixixi')
	</script>
</body>
```

输入输出

```html
<body>
    <script>
    	document.write('我是div标签')
        document.write('<h1>我是标题</h1>')
        console.log('控制台打印')
    </script>
</body>
```

```html
<body>
    <script>
    	prompt('请输入：')
    </script>
</body>
```

js执行顺序：
1.按html文档流顺序执行js代码

2.alert( )和prompt( )会跳过页面渲染先被执行

##### 1.2 变量

是计算机用来储存数据的容器；变量不可以多次声明；输出变量名不加单引号

声明变量：

```html
let 变量名
```

赋值：（汉字加单引号）

```html
let 变量名 = prompt('请输入：')
```

```html
变量名 = 值
```

声明的同时赋值（变量的初始化）

```html
let 变量名 = 值
```

声明多个变量：

```html
let 变量1 = 1 ，变量2 = 2
```

打印多个变量：

```html
console.log(变量1，变量2)
```

变量的本质：

1.内存：计算机中存储数据的地方，相当于一个空间

2.变量本质是程序在内存中申请的一小块存放数据的空间

变量命名：

1.不能用关键字（let，if等）

2.只能由字母，数字，下划线和$构成，且数字不能开头

3.严格区分大小写

4.尽量用中间有大写字母命名（如userName)

var声明：

1.可以先使用，再声明（不合理）

2.var声明过的变量可以重复声明（不合理）

3.比如变量提升，全局变量，没有块级作用域等；

##### 1.3 数组

声明（数组是有序的）：

```html
let 数组名 = [数据1，数据2，数据3]
```

使用数组（索引号从0开始）：

```html
conlose.log(数组名[索引号])
```

数组长度：

```html
conlose.log(数组名.length)
```

##### 1.4 常量

常量赋值：（不允许再次赋值）

```html
const 常量名 = 值
```

输出：

显示NaN则是计算错误，他是一个数学操作错误或未定义得到的结果；且是粘性的

```html
console.log(常量名)
```

##### 1.5 数据类型

基本数据类型：

number      数字型（<u>蓝色</u>）

string          字符串型（黑色）

加引号，反引号都会是字符串；

```js
console.log('pink')
```

加号可以用来拼接字符串；还有转化为数字类型的作用

```js
let age = 15
document.write('pink老师' + 'age' + '岁了')
console.log(+'123')//123就是数字类型了
```

模板字符串

```js
let age = 18
document.write(`我今年${age}岁了`)
必须用反引号
```

boolean      布尔型（蓝色）

```js
let isColl = true
console.log(isColl)
```

undefined  未定义型(定义变量未给值)

```html
let num
```

null              空类型(内容为空)

```js
let obg = null
console.log(obg)
```

**检测数据类型**

```js
let num = 'pink'
console.log(typeof num)
也可以写成
console.log(typeof (num))
```

**数据类型转换**

因为prompt和表单等输入的内容都是字符串类型

（1）隐式转换

计算机内部自主转换，比如**+两边有一个是字符串的话另一个会自主转化成为字符串**；除了+以外，/，*，-都会把数据转化为数字类型

（2）显示转换

```html
console.log(Number(数据))
转换成数字类型；如果字符串内容中有非数字，转换失败结果为NaN；NaN也是number类型的数据，代表非数字
```

```html
parselnt(数据)
只保留整数
```

```js
parseFloat(数据)
可以保留小数
```

##### 1.6 案例展示

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250310220612481.png" alt="image-20250310220612481" style="zoom: 50%;" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h2 {
            text-align: center;
        }
        table {
            /* 合并单元格 */
            border-collapse: collapse;
            height: 100px;
            margin: 0 auto;
            text-align: center;
        }
        th {
            padding: 5px 30px;
        }
        table,
        th,
        td {
            border: 1px solid #000;
        }
    </style>
</head>
<body>
    <h2>订单确认</h2>
    
    <script>
        let price = +prompt('请输入商品价格：')
        let num = +prompt('请输入商品数量：')
        let address = prompt('请输入收货地址：')
        let total = price * num

        document.write(`
        <table>
        <tr>
            <th>商品名称</th>
            <th>商品价格</th>
            <th>商品数量</th>
            <th>总价</th>
            <th>收货地址</th>
        </tr>
        <tr>
            <td>小米手机青春plus</td>
            <td>${price}元</td>
            <td>${num}</td>
            <td>${total}元</td>
            <td>${address}</td>
        </tr>
    </table>
        `)
    </script>
</body>
</html>
```

#### 2.运算符与语句

##### 2.1 赋值运算符

包括+=  -=  *=  /=  %=等

```js
let num = 1
num +=3
console.log(num)
```

##### 2.2 一元运算符

自增：++

```html
i++  //后置（先运算）
++i  //前置（先自加）
```

自减：--

##### 2.3 比较运算符

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250310224032998.png" alt="image-20250310224032998" style="zoom:50%;" />

字符串比较是挨个比较，并且是比较ASCII值

##### 2.4 逻辑运算符

逻辑与：&&

逻辑或：||

逻辑非：！

```js
console.log(true && true)
console.log(true || false)
console.log(!true)
```

##### 2.5 运算符优先级

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250311220907190.png" alt="image-20250311220907190" style="zoom:50%;" />

##### 2.6 分支语句

‘ '内部可以加div标签

###### 1. if单分支

```js
if (条件-除了0，所有数字都为真；除了空字符串，所有字符串都为真) {
	console.log('###')
}
```

###### 2.if else 双分支

```html
if () {

}
else {

}
```

###### 3. 三元运算符

```html
条件 ? 满足条件执行的代码 : 不满足条件执行的代码
let sum = 3 < 5 ? alert('yes') : alert('no')
```

###### 4. switch 分支语句

```js
switch (数值) {
	case 1:
	代码1
	break
	case 2:
	...
	default :
	代码
}
```

###### 5. while循环

```js
while(循环条件) {
	代码
	自增或自减
}
```

break和continue的区别：

break是退出整个循环；continue是结束当前循环，继续下一次循环

###### 6. for循环

```html
for（变量起始值；终止条件；变量变换量）{
	document.write('')
}
```

![image-20250330195540099](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250330195540099.png)

代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            display: inline-block;
            width: 100px;
            padding: 5px 10px;
            border: 1px solid pink;
            border-radius: 5px;
            margin: 5px;
            box-shadow: 2px 2px 2px rgba(255, 192, 203, .5);
            background-color: rgba(255, 192, 203, .1);
            text-align: center;
            color: hotpink;
        }
    </style>
</head>

<body>
    <script>
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= i; j++) {
                document.write(`<span>${j} × ${i} = ${i * j}</span>`)
            }
            document.write('<br>')
        }
    </script>
</body>

</html>
```

#### 3. 数组

##### 1.声明

字面量声明数组

```js
let arr = ['111','222','333','444']
for(let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i])
}
```

使用new Array构造函数声明数组

```js
let arr1 = new Array(1,2,3,4,'pink',true)
```

如果要**换行**，在打印的变量后加逗号；

```js
document.write(sum,'<br>')
```

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250330201348171.png" alt="image-20250330201348171" style="zoom: 50%;" />

##### 2.修改

```js
let arr1 = ['pink', 'red', 'green']
  arr1[0] = 'hotpink'
  console.log(arr1)
  for (let i = 0; i < arr1.length; i++) {
  // arr1[i] = arr1[i] + '老师'
  arr1[i]+='老师'
        }
```

##### 3.增添

添加到结尾

```js
 let arr = ['pink', 'red']
 // console.log(arr.push('deeppink'))//返回数组新的长度
 arr.push('deeppink')
 console.log(arr)
```

添加到开头

```js
let arr = ['pink', 'red']
 // console.log(arr.unshift('deeppink'))//返回数组新的长度
 arr.unshift('deeppink')
 console.log(arr)
```

##### 4.删除

```js
let arr = [1,2,3,4]
arr.pop()//只能删除最后一个
```

```js
let arr = [1,2,3,4]
arr.shift()//只能删除第一个元素
```

```js
let arr = [1,2,3,4,5,6]
arr.splice(起始位置,删除几个元素)
```

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250331200404580.png" alt="image-20250331200404580" style="zoom:50%;" />

代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .box {
            display: flex;
            width: 700px;
            height: 300px;
            border-left: 1px solid pink;
            border-bottom: 1px solid pink;
            margin: 50px auto;
            justify-content: space-around;
            align-items: flex-end;
            text-align: center;
        }

        .box>div {
            display: flex;
            width: 50px;
            background-color: pink;
            flex-direction: column;
            justify-content: space-between;
        }

        .box div span {
            margin-top: -20px;
        }

        .box div h4 {
            margin-bottom: -35px;
            width: 70px;
            margin-left: -10px;
        }
    </style>
</head>

<body>
    <script>
        let arr = []
        for (let i = 1; i <= 4; i++) {
            arr.push(prompt(`请输入第${i}季度的数据：`))
        }
        document.write(`<div class="box">`)
        for (let i = 0; i < arr.length; i++) {
            document.write(`
                <div style="height: ${arr[i]}px;">
                <span>${arr[i]}</span>
                <h4>第${i + 1}季度</h4>
                </div> 
                `)
        }
        document.write(`</div>`)
    </script>
</body>

</html>
```

#### 4. 函数

执行特定任务的代码块

##### 1.声明与调用

```js
//声明
fuction 函数名() {
	函数内容
}
//调用
函数名()
```

##### 2.参数

```js
function add(end) {
      let sum = 0
      for (let i = 1; i <= end; i++) {
      sum += i
          }
      console.log(sum)
 })
```

```js
function getsum(start, end) {
        let sum = 0
        for (let i = start; i <= end; i++) {
        sum += i
          }
        document.write(sum)
   }
getsum(100, 200)
```

实参可以是变量

```js
function getSum(m = 0, n = 0) {
        let sum = 0
        for (let i = m; i <= n; i++) {
        sum += i
         }
        document.write(sum)
      }
   let num1 = +prompt('请输入第一个值：')
   let num2 = +prompt('请输入第二个值：')
   getSum(num1, num2)
```

返回值

```js
function fn() {
	return 20
}
console.log(fn())
```

return后面的函数不会被执行

```js
function fn() {
            return 20
        }
        console.log(fn())
        let re = fn()
        document.write(re)
```

##### 3.返回值

如果要返回多个值，可以选择返回数组

```js
return [min,max]
```
