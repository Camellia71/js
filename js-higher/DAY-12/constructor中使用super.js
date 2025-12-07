class User {
  constructor(uname) {
    super();
    this.uname = uname;
  }
}
class Admin extends User {
  constructor(...args) {
    super(...args);
    this.site = "houdunren.com"; //放在super下面，这样的话父级的先被用了，自己的就会覆盖掉父级中可能存在的site方法，最终达到“自己>继承”的效果
  }
}
let hd = new Admin();
console.log(hd);

//用构造函数的方式进行书写
// function User(uname) {
//   this.uname = uname;
// }
// function Admin(...args) {
//   User.call(this, ...args);
// }

// Admin.prototype = Object.create(User.prototype);
// let hd = new Admin("后盾人");
// console.log(hd);
