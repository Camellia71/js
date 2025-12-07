// let arr = [];
// console.log(arr.__proto__.__proto__ == Object.prototype);
// console.log(Object.prototype.__proto__); //null

//原型链 =》 继承
let a = { uname: "a" };
let c = { uname: "c" };
let b = {
  uname: "b",
  show() {
    console.log(this.uname);
  },
  view() {
    console.log("view method");
  },
};
Object.setPrototypeOf(a, b); //b称为a的父级
a.show();
a.view();
