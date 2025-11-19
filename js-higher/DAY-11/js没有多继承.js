//js中不能实现原型 A继承原型 B 同时继承原型 C
//所以如果想继承两个原型中的方法的话，可以A->B->C
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, "enumerable", {
    value: sub,
    enumerable: false,
  });
}
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
