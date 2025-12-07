//js中不能实现原型 A继承原型 B 同时继承原型 C
//所以如果想继承两个原型中的方法的话，可以A->B->C，但是这种方法有局限（会让原本没有关系的构造函数产生父子关系）
//所以使用php:trait mixin 混合功能
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, "enumerable", {
    value: sub,
    enumerable: false,
  });
}
function Address() {}
// extend(Credit, Address);
Access.prototype.fetAddress = function () {
  console.log("获取地址");
};

function Credit() {}
extend(Request, Credit);
Credit.prototype.total = function () {
  console.log("积分统计");
};

function Request() {}
extend(User, Request);
Request.prototype.ajax = function () {
  console.log("请求后台");
};

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

let xj = new Admin("向军", 18);
xj.show();
xj.ajax();
xj.total();

function Member(...args) {
  Admin.apply(this, args);
}
extend(Member, Admin);
