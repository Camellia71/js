//构造函数
// function User() {}
// User.site = "后盾人";
// User.show = function () {
//   console.log("User.static.method");
// };

// function Admin() {}
// Admin.__proto__ = User;
// Admin.show();

//class：本质上还是原型继承相关
class User {
  static site = "houdunren.com";
  static show() {
    console.log("User.static show");
  }
}
class Admin extends User {
  //   constructor() {
  //     super();
  //   }
}
Admin.show(); //不向里传参数就能使用静态方法
