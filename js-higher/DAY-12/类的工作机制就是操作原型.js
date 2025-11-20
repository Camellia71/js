class User {
  constructor(uname) {
    this.uname = uname;
  } //给实例化出来的对象一个初始值
  show() {} //语法糖的形式会自动把方法放到User的原型当中
}
// console.log(typeof User);
// console.log(User == User.prototype.constructor); //true
let u = new User("后盾人");
console.log(Object.getOwnPropertyNames(u));
console.log(Object.getOwnPropertyNames(User.prototype));

function Hd(uname) {
  this.uname = uname;
}
console.log(typeof Hd);
Hd.prototype.show = function () {}; //添加到原型当中
let h = new Hd("向军");
console.log(Object.getOwnPropertyNames(h));
console.log(Object.getOwnPropertyNames(Hd.prototype));
