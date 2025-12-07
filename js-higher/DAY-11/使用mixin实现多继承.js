//js中不能实现原型 A继承原型 B 同时继承原型 C
//所以如果想继承两个原型中的方法的话，可以A->B->C，但是这种方法有局限（会让原本没有关系的构造函数产生父子关系）
//所以使用php:trait mixin 混合功能
//将函数改为对象，直接用Object.assign往新创建的对象的原型里面压属性
function extend(sub, sup) {
  sub.prototype = Object.create(sup.prototype);
  Object.defineProperty(sub.prototype, "enumerable", {
    value: sub,
    enumerable: false,
  });
}
const Address = {
  getAddress() {
    console.log("获取地址");
  },
};

const Credit = {
  total() {
    console.log("积分统计");
  },
};

const Request = {
  ajax() {
    console.log("请求后台");
  },
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
// Admin.prototype.ajax = Request.ajax;
// Admin.prototype.total = Credit.total;
//整合
Admin.prototype = Object.assign(Admin.prototype, Request, Credit);

let xj = new Admin("向军", 18);
xj.show();
xj.ajax();
xj.total();

function Member(...args) {
  User.apply(this, args);
}
extend(Member, User);
Member.prototype = Object.assign(Member.prototype, Request, Credit, Address);
let hd = new Member();
hd.getAddress();
