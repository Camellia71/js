// function User() {
//   this.show = function () {};  //这样写是不建议的，因为现在的方法会加到每一个new 的对象上
// }
// let hd = new User();
// console.log(hd);

//所以我们加到原型上
// function User() {}
// User.prototype.show = function () {
//   console.log("prototype.show");
// };
// User.__proto__.show = function () {
//   console.log(this == User.__proto__.constructor);
//   console.log("static.show"); //直接加在函数上，也就是静态方法
// };
// let hd = new User();
// // console.log(hd);
// hd.show();

//类
// class User {
//   show() {
//     console.log(["prototype.show"]);
//   }
//   static show = function () {  //静态方法
//     console.log("static.show");
//   };
// }
// //这样是静态方法，但是看起来不够整洁，所以放在class中
// // User.__proto__.show = function () {
// //   console.log("static.show");
// // };
// let hd = new User();
// console.log(hd);
// User.show();

class User {
  constructor(uname, age) {
    this.uname = uname;
    this.age = age;
  }
  static create(...args) {
    //静态方法
    return new this(...args);
  }
}
let xj = User.create("向军", 19);
console.log(xj);
