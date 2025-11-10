"use strict";
const DATA = Symbol();
class User {
  constructor(uname, age) {
    this[DATA] = { uname, age };
  }
  get uname() {
    return this[DATA].uname;
  }
  set uname(value) {
    if (value.trim() == "" || value.length > 20) {
      throw new Error("用户名不存在");
    }
    this[DATA].uname = value;
  }
  get age() {
    return this[DATA].age;
  }
  set age(value) {
    this[DATA].age = value;
  }
}
let xj = new User("向军", 17);
xj.uname = "后盾人";
console.log(xj);

// function User(uname, age) {
//   this.uname = uname;
//   this.age = age;
//   let data = { uname, age };
//   Object.defineProperties(this, {
//     uname: {
//       get() {
//         return data.uname;
//       },
//       set(value) {
//         // console.log(value + "set...");
//         if (value.trim() == "" || value.length > 20) {
//           throw new Error("用户名不合法");
//         }
//         data.uname = value;
//       },
//     },
//     age: {
//       get() {
//         return data.age;
//       },
//       set(value) {
//         data.age = value;
//       },
//     },
//   });
// }
// let xj = new User("向军", 17);
// xj.uname = "后盾人";
// console.log(xj);
