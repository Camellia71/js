# JS-next

## js-1

### 1.作用域

作用域规定了变量能够被访问的“范围”，分为局部作用域和全局作用域

#### 1.局部作用域

局部作用域又分为函数作用域和块作用域；

函数作用域：

函数的参数也属于函数内部被声明的变量；函数执行完毕后，内部声明的变量实际被清空了

```js
        function timeID(e) {
            //函数作用域
            console.log(11)
        }
```

块作用域：

在`js`中被{ }包括的就称为代码块，在代码块内声明的变量 在外部就有可能无法被访问；

`const`和`let`声明的就不能被访问（产生块作用域）；但`var`声明的就可以被访问（不产生块作用域）

```js
        for (let i = 0; i < 3; i++) {
            //块作用域
            console.log(i)
        }
        console.log(i)  //报错

        for (var j = 0; j < 3; j++) {
            //块作用域
            console.log(j)
        }
        console.log(j)  //3
```

#### 2.全局作用域

`<script>`标签和`.js`文件最外层就是全局作用域，全局作用域中声明的变量在其他作用域中都能被访问

**注意**

1.为`windows`对象动态添加的属性默认是全局的

2.函数中不使用任何关键字声明的是全局变量

3.尽可能少的使用全局变量，防止全局变量被污染（与`js`的垃圾回收机制有关）

#### 3.作用域链

作用域链的本质是最底层的变量查找机制；

函数被执行时会优先在当前函数作用域中查找变量，如果当前作用域查找不到，则会依次逐级查找作用域直到全局作用域；嵌套的作用域形成了作用域链，子作用域能访问父作用域，父作用域不能访问子作用域。

#### 4.垃圾回收机制

垃圾回收机制（`Garbage Collection`）简称GC

JS中垃圾的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收

> [!CAUTION]
>
> 内存的生命周期：
>
> 1.内存分配：当我们声明变量，函数，对象的时候，系统会自动为他们分配内存
>
> 2.内存使用：即读写内存，也就是使用变量，函数等
>
> 3.内存回收：使用完毕，由垃圾回收器自动回收不再使用的内存
>
> 说明：
>
> 全局变量一般不会回收（关闭页面时回收）
>
> 一般情况下局部变量的值，不用了会被自动回收（函数执行完）
>
> 内存泄漏：
>
> 程序中分配的内存由于某种原因，程序未释放或无法释放叫做内存泄漏

**算法说明**

栈 ：由操作系统自动分配释放的如函数的参数值，局部变量等，**基本数据类型放到栈里面**

堆：一般由程序员分配释放，如果程序员不进行分配释放，那就由垃圾回收机制回收，**复杂数据类型存放到堆里面**

> [!CAUTION]
>
> 下面介绍两种浏览器垃圾回收算法：
>
> 引用计数法：
>
> <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250713225240874.png" alt="image-20250713225240874" style="zoom:50%;" />
>
> 这存在一个致命的问题就是嵌套引用（循环引用）：
>
> ```js
>         //js回收机制
>         //引用计数法
>         function fn () {
>             let o1 = {}
>             let o2 = {}
>             o1.a = o2
>             o2.a = o1
>             return "引用计数无法回收"
>         }
> ```
>
> 这样会造成严重的内存泄露
>
> 标记清除法：
>
> 现在大多数都是用的基于标记清除算法的改进算法，总体思想都是一致的
>
> <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250713230514655.png" alt="image-20250713230514655" style="zoom:50%;" />

#### 5.闭包

闭包：一个函数对周围状态的引用捆绑在一起，内层函数中访问到其外层函数的作用域

**闭包 = 内层函数 + 外层函数的变量**

```js
        function outer() {
            const a = 1
            function fn() {
                console.log(a)
            }
            fn()
        }
        outer()
```

应用：实现数据的私有

可能会有内存泄漏

#### 6.变量提升

变量提升就是把所有`var`声明的变量 提升到 当前作用域的最前面；但是只提升声明，不提升赋值

```js
        console.log(num + '件')  //undefined 件
        var num = 10

        //相当于
        var num
        console.log(num + '件')
        num = 10
```

### 2.函数进阶

#### 1.函数提升

会把所有函数声明提升到当前作用域的最前面；只提升声明，不提升调用

```js
        fn()
        function fn() {
            console.log('函数提升')
        }
        //相当于
        function fn() {
            console.log('函数提升')
        }
        fn()
```

#### 2.函数参数

1. 动态参数

   动态参数arguments是一个伪数组，只存在于函数中；作用是动态获取函数的实参；可以通过for循环依次获取传递过来的实参

   ```js
           function getSum() {
               //arguments是动态参数，是伪数组
               // consoel.log(arguments)  [2,3,4]
               let sum = 0
               for (let i = 0; i < arguments.length; i++) {
                   sum += arguments[i]
               }
               console.log(sum)
           }
           getSum(2, 3, 4)
           getSum(1, 2, 3, 4, 5)
   ```

2. 剩余参数

   `...`是语法符号，置于最末的函数形参之前，用于获取多余的实参；借助`...`获取的实参是个真数组；并且在`...`之前的形参与实参是一一对应的，剩余的实参才放到数组中。

   ```js
           //剩余参数
           function sum(...arr) {
               // console.log(arr)
               let sum = 0
               for (let i = 0; i < arguments.length; i++) {
                   sum += arguments[i]
               }
               console.log(sum)
           }
           sum(2, 3, 4)
           sum(1, 2, 3, 4, 5)
   ```

   **实际开发中推荐使用剩余数组**

### 3.展开运算符

展开运算符`...`是将一个数组进行展开

主要应用是求数组最大值和合并数组

```js
        //展开运算符
        // const arr = [1, 2, 3]
        // console.log(...arr)  // 1 2 3

        //1.求最大值
        const arr1 = [1, 2, 3, 4, 5]
        console.log(Math.max(...arr1))
        console.log(Math.min(...arr1))

        //2.合并数组
        const arr2 = [6, 7, 8, 9]
        const arr = [...arr1, ...arr2]
        console.log(arr)
        console.log(...arr1, ...arr2)
```

![image-20250716210352002](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250716210352002.png)

### 4.箭头函数

箭头函数主要用来替代匿名函数

```js
        const fn = function() {
            console.log(111)
        }
        //箭头函数
        const fn = () => {
            console.log(111)
        }
        fn()
```

#### 1.相关语法

1. 省略小括号（只有一个形参）

```js
        // const fn1 = (x) => {
        //     console.log(x)
        // }
        // fn1(1)
        //1.只有一个形参的时候 可以省略小括号
        const fn1 = x => {
            console.log(x)
        }
        fn1(1)
```

2. 省略大括号 (只有一行代码)

```js
        // const fn2 = x => {
        //     console.log(x)
        // }
        // fn2(2)
        //2.只有一行代码的时候 可以省略大括号
        const fn2 = x => console.log(x)
        fn2(2)
```

3. 省略return

```js
        // const fn3 = x => {
        //     return x + x
        // }
        // console.log(fn3(3))
        //3.箭头函数可以省略return
        const fn3 = x => x + x
        console.log(fn3(3))
```

4. 返回对象 加小括号的函数体返回对象字面量表达式

```js
        //4.箭头函数可以直接返回一个对象
        //本来箭头函数的=>后面要跟大括号的，因为箭头函数大括号和对象的大括号冲突 
        // 所以用小括号包住 这样就是返回对象
        const fn4 = uname => ({ name: uname })
        console.log(fn4('刘德华'))
```

![image-20250717162109107](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250717162109107.png)

#### 2.箭头函数参数

箭头函数没有`arguments`动态参数，但是有剩余参数`...args`

```js
        //1.利用箭头函数求和
        const getSum = (...arr) => {
            let sum = 0
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            return sum
        }
        const result = getSum(2, 3)
        console.log(result)
```

#### 3.箭头函数this

箭头函数不会创建`this`，只会从自己作用域链的上一层沿用`this`；谁调用谁就是`this`

```js
window.fn()  //window
obj.fn()  //obj
```

```js
        //1.环境对象this
        console.log(this)   ///window
        //2.函数中的this
        function fn1() {
            console.log(this)   //window
        }
        fn1()
        //相当于 window.fn()
        //3.对象中的this
        const obj = {
            name: 'Camellia',
            sayBye: function () {
                console.log(this)   //Object
            }
        }
        obj.sayBye()

        //4.箭头函数中的this
        const fn = () => {
            console.log(this)   //window
        }
        fn()  //这里打印出来是window是因为 函数的上一级作用域的this指向window
        //5.对象+箭头函数
        const obj1 = {
            name: 'pink老师',
            SayHi: () => {
                console.log(this)  //window  是因为要找上一级 也就是obj1的this 而obj1的this是window
            }
        }
        obj1.SayHi()
```

![image-20250717231237214](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250717231237214.png)

DOM事件回调函数，不建议使用箭头函数（尤其是有`this`出现）

### 5.解构赋值

解构赋值其实是一种快速为变量赋值的简洁语法，本质上仍旧是为变量赋值

#### 1.数组解构

数组解构是将数组的单元值（数组元素）快速批量赋值给一系列变量的简洁语法

```js
        const arr = [100, 60, 80]
        const [max, min, avg] = arr
//
        const [max, min, avg] = [100, 60, 80]
        console.log(max)
```

典型应用：交换变量

```js
        //交换变量
        let a = 1
        let b = 2;
        [a, b] = [b, a]
        console.log(a, b)
```

> [!NOTE]
>
> JS中必须加分号的两种情况：
>
> 1. 立即执行函数
>
>    ```js
>            //1.立即执行函数
>            (function () { })();
>    ```
>
> 2. 数组解构
>
>    ```js
>            //2.数组解构
>            // const arr = [1, 2, 3]
>            // arr.map(function (item) {
>            //     console.log(item)
>            // })
>            const arr = [1, 2, 3];      //必须加分号 不然js不会认为是换行
>            [1, 2, 3].map(function (item) {
>                console.log(item)
>            })
>    ```

**特殊情况**

1.变量多，单元值少

```js
        //1.变量少 单元值多
        const [a, b, c, d] = [1, 2, 3]
        console.log(a, b, c, d)  //undefined
```

2.变量少，单元值多

```js
        //2.变量多 单元值少
        const [e, f, g] = [4, 5, 6, 7]
        console.log(e, f, g)  //不管
```

3.剩余参数 变量多，单元值少

```js
        //3.剩余参数 变量多
        const [h, i, ...j] = [9, 10, 11, 12]
        console.log(j)  //[11,12]  真数组
```

4.防止undefined传递

```js
        //4.防止undefined传递
        const [k = 0, l = 0, m = 0, n = 0] = [1, 2, 3]
        console.log(k, l, m, n)  //1,2,3,0
```

5.按需导入赋值

```js
        //5.按需导入赋值
        const [o, p, , q] = [1, 2, 3, 4]
        console.log(o, p, q)  //1,2,4
```

#### 2.对象解构

对象的属性必须与变量名一致；不一致时变量名为`undefined`

```js
        //对象解构
        // const obj = {
        //     uname: 'pink',
        //     age: 18
        // }
        const { uname, age } = { uname: 'pink', age: 18 }
        // 等价于 const uname = obj.uname
        console.log(uname)
```

更名： `旧变量名：新变量名`

```js
        //更名
        const { uname: username, age } = { uname: 'pink', age: 18 }
        console.log(username)
```

#### 3.数组对象解构

```js
        //数组对象解构
        const pig = [
            {
                uname: 'pink',
                age: 19
            }
        ]
        const [{ uname, age }] = pig
```

多级对象解构：

```js
        const pig = {
            name: '佩奇',
            family: {
                mother: '猪妈妈',
                father: '猪爸爸',
                bro: '乔治'
            },
            age: 6
        }
        //多级对象解构
        const { name, family: { mother, father, bro }, age } = pig
        console.log(name, mother, father, bro, age)
```

遍历数组方法（`foreach`）适合于遍历数组对象

遍历数组的每个元素，并将元素传递给回调函数；参数当前数组元素必须要写（`item`）

```js
        const arr = ['red', 'green', 'pink']
        arr.forEach(function (item, index) {
            console.log(item)    //数组元素
            console.log(index)   //索引号
        })
```

#### 4.筛选数组

`filter()`方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素

主要使用场景：筛选数组符合条件的元素，并返回筛选之后元素的新数组

```js
        const arr = [10, 20, 30]
        const newArr = arr.filter(function (item, index) {
            // console.log(item)
            // console.log(index)
            return item >= 20
        })
        console.log(newArr)
```

## js-2

### 1.深入对象

#### 1.创建对象的三种方式

1. 对象字面量

```js
        const obj = {
            uname: 'pink'
        }
```

2. new Object

```js
        const obj = new Object()
```

3. 构造函数

#### 2.构造函数

构造函数是一种特殊的函数，主要用来初始化对象；利用构造函数可以快速创建多个类似的的对象。

**约定**

（1）命名以大写字母开头

（2）只能通过`new`操作符来执行

```js
        //构造函数
        function Pig(uname, age) {
            this.uname = uname
            this.age = age
        }
        new Pig('佩奇', 18)
        console.log(new Pig('佩奇', 18))
		const peiqi = new Pig('佩奇',18)
```

> [!NOTE]
>
> 1.使用`new`关键字调用函数的行为被称为实例化
>
> 2.实例化构造函数没有参数时可以省略 ( )
>
> 3.构造函数内不需要写`return`，写了也是无效的，其实新创建的对象就是返回值
>
> 4.`new Object()  new Data()`也是实例化构造函数

**实例化执行过程：**

1. 创建新的空对象
2. 构造函数的`this`指向新对象
3. 执行构造函数的代码，修改`this`，添加新的属性（其实相当于赋值操作）
4. 返回新对象

#### 3.实例成员

通过构造函数创建的对象称为实例对象，实例对象中的属性和方法叫做实例成员（实例属性和实例方法）

```js
        //1.实例对象：实例对象上的属性和方法叫做 实例成员
        function Pig(name) {
            this.name = name
        }
        const pei = new Pig('佩奇')
        const qiao = new Pig('乔治')

        pei.name = '小猪佩奇'  //实例属性
        pei.sayHi = () => {  //实例方法
            console.log('e')
        }
        console.log(pei)
        console.log(qiao)
        console.log(pei === qiao)
```

1.为构造函数传入参数，创建结构相同但是值不同的对象

2.构造函数创建的实例对象彼此独立互不影响

#### 4.静态成员

构造函数的属性和方法称为静态成员（静态属性和静态方法）

```js
        //2.静态成员：构造函数上的属性和方法
        function Dog(name) {
            this.name = name
        }
        Dog.eyes = 2   //静态成员
        Dog.sayHi = function () {  //静态方法
            console.log(this)  //指向Dog
        }
        Dog.sayHi()
        console.log(Dog.eyes)
        const dog = new Dog('猫猫', 3)
        console.log(dog)  //eyes没有添加到后来实例化的对象上
```

1.静态成员只能构造函数来访问

2.静态方法中的`this`指向构造函数

**比如：**`Date.now()  Math.PI()  Math.random()`

### 2.内置构造函数

#### 1.基本包装类型

`JS`中的主要数据类型有6种：字符串，数值，布尔值，`undefined`，`null`，对象（引用数据类型）

```js
        const str = 'pink'
        console.log(str.length)  //4
        //为什么简单数据类型也能使用方法？
        //因为js底层把简单数据类型包装成引用数据类型了
        const str = new String('pink')
```

其实字符串，数值，布尔值等也有专门的构造函数，这些我们称为包装类型

`js`中几乎所有数据类型都可以基于数据类型创建

> [!NOTE]
>
> 引用类型：
>
> `Object ,Array ,RegExp ,Date`等
>
> 包装类型：
>
> `String ,Number ,Boolean`等

#### 2.`Object`

`Object` 静态方法获取对象中所有属性（值）；返回的是数组

```js
        //Object静态方法
        //1.属性名
        const o = { name: 'pink', age: 18 }
        console.log(Object.keys(o))    //['name', 'age']
        //2.属性值
        console.log(Object.values(o))    //['pink', 18]
        //3.拷贝
        const oo = {}
        Object.assign(oo, o)
        console.log(oo)        //{name: 'pink', age: 18}
```

拷贝主要用于给对象添加属性

```js
        //拷贝主要用于对象添加属性
        const p = { name: 'red', age: 19 }
        // const pp = Object.assign(p, { gender: '女' })
        // console.log(pp)  
        Object.assign(p, { gender: '女' })
        console.log(p)
```

#### 3.`Array`

实际开发中还是建议使用字面量创建，而不用`Array`构造函数

```js
        const arr = new Array([1, 2, 3])
        console.log(arr)
		//
		const arr = [1,2,3]
```

> [!NOTE]
>
> ![image-20250723213424714](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250723213424714.png)
>
> ```js
>         arr.reduce(function(上一次值，当前值){},初始值)
> ```
>
> ```js
>         // 1.无初始值
>         const total = arr.reduce(function (prev, current) {
>             return prev + current
>         })
>         console.log(total)  //10
> ```
>
> <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250723215639228.png" alt="image-20250723215639228" style="zoom:67%;" />
>
> ```js
> 
>         //2.有初始值
>         const total = arr.reduce(function (prev, current) {
>             return prev + current
>         }, 10)
>         console.log(total)  //20
>         
>         //3.箭头函数
>         const total = arr.reduce((prev, current) => prev + current, 10)
>         console.log(total)  //20
> ```
>
> <img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250723215734036.png" alt="image-20250723215734036" style="zoom:67%;" />

案例：（对象数组的初始值）

```js
        const arr = [{
            name: '张三',
            salary: 10000
        }, {
            name: '李四',
            salary: 10000
        }, {
            name: '王五',
            salary: 20000
        },
        ]
        //计算薪资
        const total = arr.reduce((prev, current) => {
            return prev + current.salary
        }, 0)
        //初始值必须是0，不然返回的第一个是对象（prev）
        console.log(total)
```

数组的其他方法：

![image-20250723223936008](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250723223936008.png)

`find`方法：

```js
        const phone = [
            {
                name: '小米',
                price: 1000
            },
            {
                name: '华为',
                price: 2000
            },
        ]
        // const mi = phone.find(function (item) {
        //     return item.name === '小米'
        // })
        const mi = phone.find(item => item.name === '小米')
        console.log(mi)
```

`every`方法：

```js
        //2.every 每一个都符合条件就返回true 否则false
        const arr1 = [10, 20, 30]
        const flag = arr1.every(item => item >= 20)
        console.log(flag)
```

伪数组转化为真数组

> [!CAUTION]
>
> 区别伪数组和真数组：
>
> ```js
>         //区别伪数组和真数组
>         //使用pop方法，能用就是真数组
>         const lis = document.querySelectorAll('li')
>         // console.log(lis)
>         lis.pop()
> ```
>
> ![image-20250724235829448](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250724235829448.png)
>
> 这就证明是伪数组。

```js
        const lis = document.querySelectorAll('li')
        // console.log(lis)
        // lis.pop() 报错
        let liss = Array.from(lis)   //伪数组转化为真数组
        liss.pop()
        console.log(liss)
```

#### 4.`String`

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250725161951848.png" alt="image-20250725161951848" style="zoom:80%;" />

1.`split()`

```js
        //1.把字符串转化为数组  str.split()
        const str = 'pink,red'
        const arr = str.split(',')
        console.log(arr)

        const str1 = '2025-07-25'
        const arr1 = str1.split('-')
        console.log(arr1)
```

2.`substring()`

```js
        //2.字符串截取   str.substring(开始的索引号[，结束的索引号])   结束的索引号不包括所指的那个
        const str2 = '今天要开会了'
        console.log(str2.substring(3, 5))   //开会
```

3.`startWith`

```js
        //3.判断是否以某个字符开头
        const str3 = 'pink老师上课中'
        console.log(str3.startsWith('pink'))
        console.log(str3.startsWith('老师', 4))  //true
```

4.`includes`

```js
        //4.判断字符串是否被包含
        const str4 = 'pink老师嘻嘻嘻'
        console.log(str4.includes('pink'))
        console.log(str4.includes('pink', 2))  //false
```

#### 5.`Number`

`toFixed()`指定保留的小数位数

```js
        // 指定保留的小数位数
        const num = 10.923
        console.log(num.toFixed(1))  //10.9
        const num1 = 10
        console.log(num1.toFixed(2))  //10.00
```

## js-3

### 1.编程思想

![image-20250725174256824](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250725174256824.png)

#### 1.面向过程

面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个依次调用就可以了。

#### 2.面向对象（`oop`）

面向对象是把事务分解成一个一个对象，然后对象之间分工合作

面向对象是以对象功能来划分问题，而不是步骤

> [!NOTE]
>
> 封装性
>
> 继承性
>
> 多态性

### 2.构造函数

1.`js`面向对象可以通过构造函数实现封装，即构造函数体现了面向对象的封装特性

2.构造函数实例创建的对象彼此相互独立，互不影响

​	但是存在浪费内存的问题：

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250726113833811.png" alt="image-20250726113833811" style="zoom:67%;" />

### 3.原型

`JavaScript`规定：每一个构造函数都有一个`prototype`属性，指向另一个对象，所以我们也称为原型对象

1. 构造函数通过原型分配的函数是所有对象所共享的
2. 这个对象可以挂载函数，对象实例化不会多次创建原型上函数，可以节约内存
3. 我们把不变的方法直接定义在`prototype`对象上，这样所有对象的实例就可以共享这些方法
4. 构造函数和原型对象中的`this`都指向实例化的对象

```js
        // 构造函数
        //1.属性挂载在构造函数内
        function Star(uname, age) {
            this.uname = uname
            this.age = age
        }
        //2.方法挂载在原型对象上
        Star.prototype.sing = function () {
            console.log('唱歌')
        }
        const ldh = new Star('刘德华', 55)
        const zxy = new Star('张学友', 58)
        console.log(ldh.sing === zxy.sing)
```

> [!NOTE]
>
> 构造函数和实例对象的`this`都指向实例化的对象
>
> 上方代码就是指向`ldh`和`zxy` ；因为调用的时候是`ldh.sing()`

