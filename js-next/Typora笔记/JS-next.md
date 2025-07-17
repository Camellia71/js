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
