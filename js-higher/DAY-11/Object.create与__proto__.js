let user = {
  show() {
    return this.uname;
  },
};
//prototype

//定义对象的原型
let hd = Object.create(user, {
  uname: {
    value: "后盾人",
  },
}); //给hd添加原型user
console.log(hd.show() + "111");
//不能获取

//定义与获取
let hdcms = { uname: "hdcms" };
hdcms.__proto__ = user;
console.log(hdcms.show());
console.log(hd.__proto__); //能获取

//标准的定义与获取
let xj = { uname: "向军" };
Object.setPrototypeOf(xj, user);
console.log(Object.getPrototypeOf(xj));
