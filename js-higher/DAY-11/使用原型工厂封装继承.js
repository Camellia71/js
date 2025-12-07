//原型工厂把“继承”封装
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, "enumerable", {
    value: sub,
    enumerable: false,
  });
}
function User(uname, age) {
  this.uname = uname;
  this.age = age;
}
User.prototype.show = function () {
  console.log(this.uname, this.age);
};

function Admin(...args) {
  User.apply(this, args);
}
extend(Admin, User);

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;  //这个方法有缺陷，我们要使constructor不能被遍历
// Object.defineProperty(Admin.prototype, "enumerable", {
//   //为了使这里代码中的defineProperty能被封装起来复用
//   value: Admin,
//   enumerable: false,
// });
let xj = new Admin("向军", 18);
xj.show();

// function Member(...args) {
//   User.apply(this, args);
// }
// Member.prototype = Object.create(User.prototype);
