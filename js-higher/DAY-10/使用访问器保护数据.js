"use strict";
//访问器（Accessor Properties）是 JavaScript 中一种特殊的对象属性，它通过 getter 和 setter 方法来控制属性的读取和赋值行为。
const user = {
  data: { uname: "后盾人", age: 18 },
  set age(value) {
    if (typeof value !== "number" || value < 10 || value > 100) {
      throw new Error("年龄格式错误");
    }
    this.data.age = value;
  },
  get age() {
    // console.log("get...");
    return this.data.age + "岁";
  },
};
user.age = 79;
console.log(user.age);
