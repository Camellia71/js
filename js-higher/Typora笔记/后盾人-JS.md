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

## DAY-4 