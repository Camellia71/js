# 后盾人-JS

## DAY-1  变量，常量及作用域

### 1.声明三种方式

#### 共同点：

1.用于声明变量

2.可以在函数内部使用

3.支持变量提升（但是`let`和`const`存在变量提升）

```js
console.log(a); // undefined（var 提升并初始化为 undefined）
var a = 1;

console.log(b); // 报错：Cannot access 'b' before initialization（let/const 提升但未初始化）
let b = 2;
```

#### 区别：

![image-20250905211312651](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250905211312651.png)

> [!WARNING]
>
> `var`只提升声明，不提升赋值；提升声明后会初始化为`undefined`.

### 2.冻结变量：

在 JavaScript 中，**冻结变量**是指让变量或对象变得不可修改（immutable）；

#### 1.`const`声明常量

如果变量是对象或者数组，其内部属性还是可以被更改

```js
const hd = 99;
```

#### 2.`Object.freeze()`冻结对象

让对象不可以扩展，不可以删除，不可以更改属性（增删改都不可以）

```js
const user = { name: "Alice", age: 20 };
Object.freeze(user);

user.name = "Bob"; // ❌ 修改无效（严格模式会报错）
user.gender = "male"; // ❌ 添加无效
delete user.age; // ❌ 删除无效

console.log(user); // { name: "Alice", age: 20 }
```

**注意**：如果是嵌套对象，单层的冻结不会对内层起作用，此时就可以利用`for-in`实现冻结

```js
        const obj = {
            name: "houdunren",
            sing: {
                zhaolei: "gulou",
                xusong: "suyan",
            }
        }
        //封装函数
        function deepFreeze(obj) {
            Object.freeze(obj);
            for (const key in obj) {
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    deepFreeze(obj[key]);
                }
            }
        }
        const data = { uaer: { name: "Alice" } };
        deepFreeze(data);
        // data.user.name = "Bob";  不能修改
```

#### 3.`Object.seal()`密封对象

防止新增或删除，但是可以修改现有属性

```js
const user = { name: "Alice" };
Object.seal(user);

user.name = "Bob"; // ✅ 允许修改
user.age = 20; // ❌ 添加无效
delete user.name; // ❌ 删除无效
```

#### 4.`Object.preventExtensions()`禁止扩展

仅阻止新添加属性

```js
const user = { name: "Alice" };
Object.preventExtensions(user);

user.name = "Bob"; // ✅ 允许修改
user.age = 20; // ❌ 添加无效
delete user.name; // ✅ 允许删除
```

### 3.数据类型

#### 1.基本数据类型

**Number** - 数字（整数和浮点数），**String** - 字符串，**Boolean** - 布尔值（true/false），**Null** - 空值，**Undefined** - 未定义，**Symbol** - ES6 新增的唯一标识符，**BigInt** - ES11 新增的大整数类型

在这里区分`null`和`undefined`:

​    	null 表示“空值”：主动赋值给变量，明确表示没有值

​    	undefined  表示未定义：变量已声明但未赋值，或者访问了不存在的属性/数组索引

> [!NOTE]
>
> 基本数据类型储存在**栈**内存中，传值
>
> ```js
>         //重新开辟一块空间存放b  传值
>         let a = 1;
>         let b = a;
> ```

#### 2.引用数据类型

所有不是基本数据类型的都是对象类型，比如对象，数组，函数，正则表达式等；

> [!NOTE]
>
> 储存在**堆**内存内；传址
>
> ```js
>         //指向同一块空间  传址
>         let e = {};
>         let f = e;
> ```

#### 3.判断数据类型的方法

1.`typeof`

```js
typeof 42; // "number"
```

2.`instanceof` 检查对象类型，其实是检查*原型链上有没有这个属性*

```js
[] instanceof Array; // true
{} instanceof Object; // true
new Date() instanceof Date; // true
```

3.`Object.prototype.toString.call()`

```js
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call({}); // "[object Object]"
```

### 4.补充

#### 1.严格模式

```js
"use strict"
```

#### 2.避免延迟

```js
<script src="避免延迟.js"></script> 
```

放在`head`标签内部就在`body`前执行，所以一般放在`</body>`上方

#### 3.注释

两种注释方式

```js
        // console.log(111)
        /*
        hsirfwsfhdn
        cndsiodf
        cbsuofyse
        */  
```

## DAY-2 运算符，表达式，分支与循环语句

### 1.运算符

#### 1.比较运算符

```js
        let a = 1, b = 2, c = "1";
        console.log(a < b, a == c, a === c);
        console.log(typeof a)
```

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250905222603760.png" alt="image-20250905222603760" style="zoom:67%;" />

#### 2.赋值运算符

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250905222625368.png" alt="image-20250905222625368" style="zoom:67%;" />

#### 3.算术运算符

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250905222643446.png" alt="image-20250905222643446" style="zoom:67%;" />

自增与自减

```js
let x = 5;
let y = x++; // y = 5, x = 6（后置：先赋值再自增）

let a = 5;
let b = ++a; // b = 6, a = 6（前置：先自增再赋值）
```

#### 4.逻辑运算符

与，或，非——用于短路求值

```js
// && 找到第一个假值或最后一个值
0 && console.log("不会执行"); // 0
1 && 2 && console.log("会执行"); // 会执行

// || 找到第一个真值或最后一个值
null || undefined || "default"; // "default"
```

#### 5.位运算符

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250905223010454.png" alt="image-20250905223010454" style="zoom:67%;" />

#### 6.其他

1.类型运算符

```js
typeof "hello"
```

2.空值合并运算符

```js
let value = null ?? "default"; // "default"
let value2 = 0 ?? "default"; // 0（不同于 ||）
```

3.可选链运算符

```js
const user = { name: "Alice" };
console.log(user?.address?.street); // undefined（不会报错）
```

4.**展开运算符**  常用

```js
// 数组展开
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// 对象展开
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a:1, b:2, c:3 }
```

### 2.表达式

三元表达式补充一点——定位跳出

```js
        houdunren: for (let i = 1; i <= 10; i++) {
            hdcms: for (let n = 1; n <= 10; n++) {
                if (n % 2 == 0) {
                    console.log(i, n);
                }
                if (n + i > 10) {
                    break houdunren;  //跳出houdunren循环
                }
            }
        }
```

### 3.分支与循环

#### 1.分支

1.`if-else`

```js
            if (length > 10) {
                msg = '密码安全';
            } else if (length > 6) {
                msg = '一般';
            } else {
                msg = '不安全';
            }
```

2.`switch-case`

```js
        switch (error) {
            case "notice":
            // console.log("提示消息");
            case "waring":
                console.log("提示或警告消息");  //提示和警告使用同一个处理方式
                break;
            case "error":  //不加break就会向下执行 不中断 不跳出switch
            default:
                console.log("错误消息");
        }
```

#### 2.循环

1.`while`

```js
        while (tr-- !== 0) {
            document.write(`<tr>`);
            let td = 3;
            while (td-- !== 0) {
                document.write(`<td>${td}</td>`);
            }
            document.write(`</tr>`);
        }
        document.write(`</table>`);
```

2.`do-while`

```js
            do {
                let n = 0;
                do {
                    document.write("*")
                } while (++n <= start);
                document.write(`<br/>`);
            } while (++start <= 5);
```

3.`for`

```js
            for (let i = 1; i < row; i++) {
                for (let n = row - i; n > 0; n--) {
                    document.write(`<span>*</span>`);
                }
                for (let m = i * 2 - 1; m > 0; m--) {
                    document.write("*");
                }
                document.write("<br/>");
            }
```

#### 3.`continue,break`

<img src="C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\image-20250906122315200.png" alt="image-20250906122315200" style="zoom:67%;" />

```js
outerLoop: 
for (let i = 0; i < 3; i++) {
    innerLoop:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // 直接跳出外层循环
        }
        console.log(`i=${i}, j=${j}`);
    }
}
```

```js
outerLoop:
for (let i = 0; i < 3; i++) {
    innerLoop:
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            continue outerLoop; // 跳过外层循环的当前迭代
        }
        console.log(`i=${i}, j=${j}`);
    }
}
```

## DAY-3 字符串，日期与时间

### 1.字符串

#### 1.检索字符串

```js
        const hd = "houdunren.com";
        console.log(hd.includes("o", 2));  //从第几个开始查找
        console.log(hd.lastIndexOf("o", 8));  //从右向左

        console.log(hd.toLowerCase().startsWith("h"));  //以什么开始
        console.log(hd.toLowerCase().endsWith("h"));  //以什么结束
```

#### 2.截取字符串

```js
        let hd = "houdunren.com";
        console.log(hd.slice(1, 3));
        console.log(hd.substring(1, 3));  //ou
        console.log(hd.substr(1, 3));  //oud

        console.log(hd.slice(-3, -1));
        console.log(hd.substring(-3, -1));  //(0,0)
        console.log(hd.substr(-3, 1));  //(从第几个，截几个)
```

#### 3.替换字符串

```js
        const hd = "houdunren.com";
        console.log(hd.replace("houdunren", "hdcms"));
```

#### 4.字符串相关的类型转换

```js
        const string = "99";
        console.log(typeof string);
        console.log(string + 2);
        console.log(string * 2 + 66);
        console.log(Number(string) + 88);

        const number = 66;
        console.log(typeof number);
        const str = number + "";
        console.log(typeof str);
        console.log(typeof String(number));

        const string1 = "99houdunren";
        console.log(parseInt(string1));

        const cms = "hdcms";
        console.log(cms.split(""));

        const arr = ['hdcms', 'houdunren'];
        console.log(arr.join("|"));

        let str1 = "houdunren";
        console.log(typeof str1);  //string
        let cms1 = new String("hdcms");
        console.log(typeof cms1);  //object

        const num = 99;
        const newNumber = number.toString();
        console.log(newNumber + 22);  //6622
```

#### 5.模板字符串

```js
        let lessons = [
            { title: "媒体查询" },
            { title: "FLEX弹性盒模型" },
            { title: "GRID栅格系统" },
        ]
		function template() {
            return `<ul>${lessons.map(item => `<li>${item.title}</li>`).join("")}</ul>`
        }
        document.body.innerHTML = template();
```

### 2.日期与时间

#### 1.日期

```js
        const date = new Date();
        console.log(date);
        console.log(typeof date);
```

```js
        const hd = Date();
        console.log(hd);
        console.log(typeof hd);  //string
```

#### 2.时间戳

```js
        时间戳
        const date1 = Date.now();
        console.log(date1);  //1757041463056  后三位是毫秒
```

利用时间戳计算`for`循环时间

```js
        计算for循环执行时间
        console.time("for");
        for (let i = 0; i < 200000; i++) { };
        console.timeEnd("for");
```

数组转化为时间

```js
        const param = [1990, 2, 22, 13, 22, 19];
        const date = new Date(...param);
        console.log(date);  //Thu Mar 22 1990 13:22:19 GMT+0800 (中国标准时间)
```

#### 3.相互转换

```js
        const date = new Date("1990-2-22 08:19:18");
        //时间转化为时间戳  635645958000
        console.log(date * 1);
        console.log(Number(date));
        console.log(date.valueOf());
        console.log(date.getTime());

        //时间戳转化为日期
        const timestamp = date.valueOf();
        console.log(new Date(timestamp));
```

#### 4.日期对象方法

```js
        function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
            const config = {
                YYYY: date.getFullYear(),
                MM: date.getMonth() + 1,
                DD: date.getDate(),
                HH: date.getHours(),
                mm: date.getMinutes(),
                ss: date.getSeconds(),
            };
            for (const key in config) {
                format = format.replace(key, config[key]);
            }
            return format;
        }
        console.log(dateFormat(date));
```

#### 5.`moment.js`日期处理库

1.创建对象

```js
const now = moment(); // 当前时间

const date = moment("2023-10-01"); // 解析 ISO 格式
const date2 = moment("10/01/2023", "MM/DD/YYYY"); // 指定格式

//Date对象创建
const jsDate = new Date();
const momentDate = moment(jsDate);
```

2.格式化日期

```js
moment().format(); // "2023-10-01T12:00:00+08:00"
moment().format("YYYY-MM-DD"); // "2023-10-01"
moment().format("dddd, MMMM Do YYYY"); // "Sunday, October 1st 2023"
```

3.日期计算

```js
moment().add(7, 'days');    // 加 7 天
moment().subtract(1, 'year'); // 减 1 年

const start = moment("2023-10-01");
const end = moment("2023-10-10");
end.diff(start, 'days'); // 9（相差天数）

moment().year();    // 2023
moment().month();   // 9（0-11，10 月是 9）
moment().date();    // 1（1-31）
moment().hour();    // 12（0-23）
moment().minute();  // 30
moment().second();  // 45
```

4.日期比较

```js
//是否相同
moment('2023-10-01').isSame('2023-10-01'); // true
moment('2023-10-01').isSame('2023-10-02'); // false
//是否在之前/之后
moment('2023-10-01').isBefore('2023-10-02'); // true
moment('2023-10-02').isAfter('2023-10-01');  // true
//是否在范围内
const date = moment('2023-10-05');
date.isBetween('2023-10-01', '2023-10-10'); // true
```

5.时间戳

```js
moment().unix(); // 秒级时间戳（如 1633046400）
moment().valueOf(); // 毫秒级时间戳（如 1633046400000）
```

**由于`moment.js`已经停止维护，有以下代替方案**

#### 6.`Day.js`

1.基本用法

```js
import dayjs from 'dayjs';

// 基本用法
const now = dayjs();
console.log(now.format('YYYY-MM-DD')); // 2023-10-01

// 解析日期
const date = dayjs('2023-10-01');
const date2 = dayjs('10/01/2023', 'MM/DD/YYYY');

// 从 Date 对象创建
const jsDate = new Date();
const dayjsDate = dayjs(jsDate);
```

2.不可变性

```js
const date1 = dayjs('2023-10-01');
const date2 = date1.add(1, 'day'); // 返回新对象，不修改原对象

console.log(date1.format('YYYY-MM-DD')); // 2023-10-01
console.log(date2.format('YYYY-MM-DD')); // 2023-10-02
```

3.格式化

```js
dayjs().format('YYYY-MM-DD HH:mm:ss'); // 2023-10-01 14:30:45
dayjs().format('dddd, MMMM D YYYY');   // Sunday, October 1 2023
```

4.日期操作

```js
// 加减
dayjs().add(7, 'day');
dayjs().subtract(1, 'month');

// 比较
dayjs('2023-10-01').isBefore('2023-10-02');
dayjs('2023-10-02').isAfter('2023-10-01');
dayjs('2023-10-01').isSame('2023-10-01');

// 差值
const start = dayjs('2023-10-01');
const end = dayjs('2023-10-10');
end.diff(start, 'day'); // 9
```

#### 7.`Luxon`

1.基本用法

```js
import { DateTime } from 'luxon';

// 基本用法
const now = DateTime.now();
console.log(now.toFormat('yyyy-MM-dd')); // 2023-10-01

// 解析日期
const date = DateTime.fromISO('2023-10-01');
const date2 = DateTime.fromFormat('10/01/2023', 'MM/dd/yyyy');
```

2.核心特性

时区支持：

```js
// 时区处理
const nyTime = DateTime.now().setZone('America/New_York');
const londonTime = DateTime.now().setZone('Europe/London');

console.log(nyTime.toFormat('yyyy-MM-dd HH:mm:ss ZZZZ'));
// 2023-10-01 10:30:45 EDT

// 时区转换
const utcTime = DateTime.utc();
const localTime = utcTime.toLocal();
```

国际化：

```js
// 多语言支持
const date = DateTime.fromISO('2023-10-01');
console.log(date.setLocale('fr').toFormat('MMMM')); // octobre
console.log(date.setLocale('de').toFormat('MMMM')); // Oktober
console.log(date.setLocale('ja').toFormat('MMMM')); // 10月
```

持续时间：

```js
// 持续时间计算
const { Duration } = luxon;

const duration = Duration.fromObject({ 
    hours: 2, 
    minutes: 30 
});
console.log(duration.toISO()); // PT2H30M

// 日期区间
const start = DateTime.fromISO('2023-10-01');
const end = DateTime.fromISO('2023-10-10');
const interval = Interval.fromDateTimes(start, end);
console.log(interval.length('days')); // 9
```

3.其他

```js
// 工作日计算
const date = DateTime.fromISO('2023-10-01');
const isWeekend = date.weekday > 5;

// 季度
const quarter = Math.floor((date.month - 1) / 3) + 1;

// 周数（ISO标准）
const weekNumber = date.weekNumber;
```

## DAY-4 数组相关方法

### 1.数组增删改查找

#### 1.数组创建

​	数组属于引用数据类型

```js
const arr = [ ];
const arr = new Array();
let arr  = Array.of();
```

以上三种方法都可以用于数组的创建，常用第一种；

#### 2.数组添加元素

1. `push()` 在数组末尾添加元素

```js
let fruits = ['apple', 'banana'];
fruits.push('kiwi', 'mango'); // 添加元素
// ['apple', 'banana', 'orange', 'kiwi', 'mango']
```

2. `unshift() ` 在数组开头添加元素

```js
let numbers = [2, 3, 4];
numbers.unshift(-1, 0); // 添加多个元素
// [-1, 0, 1, 2, 3, 4]
```

3. `splice()` 在指定位置添加元素

```js
let colors = ['red', 'blue', 'green'];
colors.splice(1, 0, 'yellow'); // 在索引1的位置添加'yellow'
// ['red', 'yellow', 'blue', 'green']

colors.splice(2, 0, 'purple', 'pink'); // 在索引2的位置添加多个元素
// ['red', 'yellow', 'purple', 'pink', 'blue', 'green']
```

4. `concat()` 合并数组（不改变原数组）

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let newArr = arr1.concat(arr2); // 返回新数组
// [1, 2, 3, 4]
```

5. 展开运算符

```js
let arr = [1, 2];
arr = [...arr, 3]; // 末尾添加
// [1, 2, 3]

arr = [0, ...arr]; // 开头添加
// [0, 1, 2, 3]

let newElements = [4, 5];
arr = [...arr, ...newElements]; // 合并数组
// [0, 1, 2, 3, 4, 5]
```

6. 可以通过索引赋值（不推荐）

```js
let arr = [1, 2];
arr[arr.length] = 3;  //等同于 push
///[1,2,3]
```

> [!CAUTION]
>
> 1. `unshift()`的性能较低，因为它需要移动数组中的所有元素
>
> 2. 大规模数据操作时，`push()`通常比 `concat()`更快

#### 3.数组删除元素

1. `pop()` 删除并返回数组的第一个元素

```js
let fruits = ['apple', 'banana', 'orange'];
let last = fruits.pop(); // 删除最后一个元素
console.log(fruits); // ['apple', 'banana']
console.log(last);   // 'orange'
```

2. `shift()`  删除并返回数组的第一个元素

```js
let numbers = [1, 2, 3, 4];
let first = numbers.shift(); // 删除第一个元素
console.log(numbers); // [2, 3, 4]
console.log(first);   // 1
```

3. `splice()`  删除指定位置的元素

```js
let colors = ['red', 'green', 'blue', 'yellow'];
// 从索引1开始删除1个元素
let removed = colors.splice(1, 1); 
console.log(colors);  // ['red', 'blue', 'yellow']
console.log(removed); // ['green']

// 从索引2开始删除2个元素
colors.splice(2, 2);
console.log(colors);  // ['red', 'blue']
```

4. `filter()`  创建新数组，过滤掉符合条件的元素（不改变原数组）

```js
let numbers = [1, 2, 3, 4, 5];
// 删除所有偶数
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]
console.log(numbers);     // [1, 2, 3, 4, 5] (原数组不变)
```

5. `delete()`  操作符（不推荐） 返回值是布尔值

```js
let arr = [1, 2, 3, 4];
delete arr[2]; // 删除索引2的元素
console.log(arr); // [1, 2, empty, 4]
console.log(arr.length); // 4 (长度不变)
```

6. `slice()与concat()结合`  （不改变原数组）

```js
let arr = [1, 2, 3, 4, 5];
// 删除索引2的元素
let newArr = arr.slice(0, 2).concat(arr.slice(3));
console.log(newArr); // [1, 2, 4, 5]
console.log(arr);    // [1, 2, 3, 4, 5] (原数组不变)
```

> [!CAUTION]
>
> 1. `shift()`和 `unshift()`操作数组开头元素时性能较低，因为需要移动所有元素
>
> 2. `splice()`在删除中间元素时也会导致后续元素移动
>
> 3. `filter()`会创建新数组，内存消耗较大但不会移动元素

#### 4.数组修改元素

1. 直接通过索引修改

```js
let fruits = ['apple', 'banana', 'orange'];
fruits[1] = 'grape'; // 修改索引1的元素
console.log(fruits); // ['apple', 'grape', 'orange']
```

2. `splice()` 替换指定位置的元素

```js
let colors = ['red', 'green', 'blue'];
// 从索引1开始删除1个元素，并插入'yellow'
colors.splice(1, 1, 'yellow'); 
console.log(colors); // ['red', 'yellow', 'blue']

// 替换多个元素
colors.splice(0, 2, 'black', 'white');
console.log(colors); // ['black', 'white', 'blue']
```

3. `map()` 创建新数组并修改元素（不改变原数组）

```js
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (原数组不变)
```

4. `fill()`  填充/替换原数组

```js
let arr = [1, 2, 3, 4, 5];
// 将所有元素替换为0
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// 从索引2到4(不包括)替换为8
arr.fill(8, 2, 4);
console.log(arr); // [0, 0, 8, 8, 0]
```

5. 使用展开运算符修改特定元素

```js
let students = ['Alice', 'Bob', 'Charlie'];
// 修改索引1的元素
students = [...students.slice(0, 1), 'David', ...students.slice(2)];
console.log(students); // ['Alice', 'David', 'Charlie']
```

6. `slice()`  从数组中提取指定范围的元素，不会修改原数组

```js
array.slice([begin[, end]])；

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// 提取从索引1开始到结束的所有元素
console.log(fruits.slice(1)); // ['banana', 'orange', 'grape', 'kiwi']

// 提取从索引1到3（不包括3）的元素
console.log(fruits.slice(1, 3)); // ['banana', 'orange']

// 不传参数，复制整个数组
console.log(fruits.slice()); // ['apple', 'banana', 'orange', 'grape', 'kiwi']
```

7. `forEach()`  遍历并修改元素（会改变原数组）

```js
let prices = [10, 20, 30];
prices.forEach((price, index, array) => {
  array[index] = price * 1.1; // 涨价10%
});
console.log(prices); // [11, 22, 33]
```

> [!CAUTION]
>
> 1. `map()`会创建新数组，内存消耗较大但不会影响原数组
> 2. `splice()`在修改中间元素时会导致后续元素移动
> 3. `fill()`是修改原数组最快的方法之一

#### 5.数组查找元素

1. `indexOf()`  查找元素索引（严格相等）

```js
const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('pear'));   // -1 (未找到)
```

2. `landIndexOf()`  从后向前查找

```js
const numbers = [1, 2, 3, 4, 2, 5];

console.log(numbers.lastIndexOf(2)); // 4
console.log(numbers.lastIndexOf(6)); // -1
```

3. `includes() ` 检查是否包含

```js
const colors = ['red', 'green', 'blue'];

console.log(colors.includes('green')); // true
console.log(colors.includes('yellow')); // false
```

4. `find()`  查找第一个符合条件的元素

```js
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: 'Bob' }
```

5. `findIndex()`  查找第一个符合条件的元素索引

```js
const ages = [18, 22, 25, 30];

const index = ages.findIndex(age => age > 25);
console.log(index); // 3
```

6. `filter()`  查找所有符合条件的元素，返回新数组

```js
const products = [
  { name: 'Laptop', price: 999 },
  { name: 'Phone', price: 699 },
  { name: 'Tablet', price: 499 }
];

const expensive = products.filter(p => p.price > 500);
console.log(expensive); 
// [{ name: 'Laptop', price: 999 }, { name: 'Phone', price: 699 }]
```

7. `some()`  检查是否有元素符合条件

```js
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true
```

8. `every()`  检查所有元素是否符合条件

```js
const scores = [85, 90, 78, 92];

const allPassed = scores.every(score => score >= 60);
        
```

> [!CAUTION]
>
> 1. **​查找简单值​**​：使用 `indexOf()`或 `includes()`
> 2. **查找对象**：使用 `find()`或 `findIndex()`
> 3. **查找多个匹配项**：使用 `filter()`
> 4. **检查条件**：使用 `some()`或 `every()`
> 5. **性能考虑**：`find()`和 `some()`在找到匹配项后会立即停止遍历

### 2.其他

1. `join()`  数组转化字符串

```js
const fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.join(' | ')); // "Apple | Banana | Orange"
```

2. `Array.from()`  从类对象数组创建数组

```js
const str = 'hello';
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']
```

3. `Array.of()`  创建具有可变数量参数的新数组

```js
const nums = Array.of(1, 2, 3);
console.log(nums); // [1, 2, 3]
```

4. `sort()`  数组排序

```js
const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // 升序
console.log(numbers); // [1, 2, 3, 4]
```

5. `reverse()`  反转数组排序

```js
const letters = ['a', 'b', 'c'];
letters.reverse();
console.log(letters); // ['c', 'b', 'a']
```

6. `concat()`  合并多个数组

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]
```

7. `flat()`  数组扁平化：创建一个新数组，其中所有子数组元素递归地连接到指定深度

```js
//基本语法
array.flat([depth])；

const nested = [1, [2, [3, [4]]]];  //跨过两个层次
console.log(nested.flat(2)); // [1, 2, 3, [4]]

//无限深度扁平化
const deeplyNested = [1, [2, [3, [4, [5]]]]];
console.log(deeplyNested.flat(Infinity)); // [1, 2, 3, 4, 5]
```

可以用来移除空项：

```js
const arrWithHoles = [1, 2, , 4, 5];
console.log(arrWithHoles.flat()); // [1, 2, 4, 5]
```

8. `faltMap()` 映射后扁平化：首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

   **相当于 `map()`后跟深度为1的 `flat()`**

```js
//基本语法
array.flatMap(callback(currentValue[, index[, array]])[, thisArg])；
//currentValue：当前元素
//thisArg(可选): 执行回调时使用的 this值
const phrases = ["hello world", "good morning"];
const words = phrases.flatMap(phrase => phrase.split(' '));
console.log(words); // ["hello", "world", "good", "morning"]
```

9. `copyWithin()`  复制数组元素

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]
```

10. `fill()`  填充数组元素

```js
const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]
```

11. `entries()/keys()/values()` 获取迭代器

```js
const arr = ['a', 'b', 'c'];

// 获取索引-值对的迭代器
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}

// 获取键（索引）迭代器
for (const key of arr.keys()) {
  console.log(key);
}

// 获取值迭代器
for (const value of arr.values()) {
  console.log(value);
}
```

12. `at()`  获取指定位置的元素

```js
const arr = [5, 12, 8, 130, 44];
console.log(arr.at(2)); // 8
console.log(arr.at(-2)); // 130（支持负索引）
```

13. `Array.isArray()`  检查是否为数组

```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({})); // false
```

14. `toLocaleString()`  本地化字符串表示，常用数字格式化（例子），日期格式化；不会修改原数组

```js
//基本语法
array.toLocaleString([locales[, options]])；
//locales:指定语言环境的字符串或字符串数组
//options:配置对象，控制格式化行为

const prices = [1000, 2000, 3000];
//德国欧元模式
console.log(prices.toLocaleString('de-DE', { 
  style: 'currency', 
  currency: 'EUR' 
}));
// "1.000,00 €,2.000,00 €,3.000,00 €"
```

新增：

15. `with()`  非破坏性修改数组元素，即原数组不变

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]（原数组不变）
```

16. `toReversed()/toSorted()/toSpliced()`  非破坏性数组操作

```js
const original = [3, 1, 2];

// 非破坏性排序
const sorted = original.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(original); // [3, 1, 2]

// 非破坏性反转
const reversed = original.toReversed();
console.log(reversed); // [2, 1, 3]
```

17. `reduce()`  归约数组：将数组中的所有元素通过指定的回调函数归约为单个值

```js
//基本语法：
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]);
//accumulator：累积器，累积回调函数的返回值
//initialValue]：作为第一次调用回调函数的初始值

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

//数组去重
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = duplicates.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(unique); // [1, 2, 3, 4, 5]
```

18. `reduceRight()`  从右向左归约数组

```js
const flattened = [[0, 1], [2, 3], [4, 5]]
  .reduceRight((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [4, 5, 2, 3, 0, 1]
```

19. `toString()`  转为字符串

```js
const arr = [1, 2, 'a', '1a'];
console.log(arr.toString()); // "1,2,a,1a"
```

## DAY-5 
