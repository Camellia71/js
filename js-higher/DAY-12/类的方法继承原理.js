// function User() {}
// User.prototype.show = function () {
//   console.log("后盾人");
// };
// function Admin() {}
// Admin.prototype = Object.create(User.prototype);
// let hd = new Admin();
// hd.show();

//语法糖的形式:其实只是在结构上更简便，在具体作用上没有变化
class User {
  show() {
    console.log("后盾人");
  }
}
class Admin extends User {
  constructor(uname) {
    super();
    this.uname = uname;
  }
}
let hd = new Admin("向军");
hd.show();
console.log(hd);
