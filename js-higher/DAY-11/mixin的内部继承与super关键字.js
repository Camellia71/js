//获取积分也需要请求后台数据，所以做下改动
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

const Request = {
  ajax() {
    return "请求后台";
  },
};

const Credit = {
  __proto__: Request,
  total() {
    // console.log(this.__proto__.ajax() + "积分统计"); //太长了，可以用super代替
    console.log(super.ajax() + "积分统计");
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
Admin.prototype = Object.assign(Admin.prototype, Request, Credit);

let xj = new Admin("向军", 18);
xj.show();
xj.ajax();
xj.total(); //在这里其实还是访问原本函数（Admin）中的对象，this指的是原来的函数的对象原型

function Member(...args) {
  User.apply(this, args);
}
extend(Member, User);
Member.prototype = Object.assign(Member.prototype, Request, Credit, Address);
let hd = new Member();
hd.getAddress();
