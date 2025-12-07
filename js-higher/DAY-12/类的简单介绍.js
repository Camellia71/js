//两种声明形式
// class User {}
// let Hd = class {};
// console.log(Hd);

//属性和方法
class User {
  constructor(uname) {
    //传递参数专用的方法（函数）
    this.uname = uname;
  }
  show() {}
  get() {
    console.log("后盾人");
  }
  getuname() {
    return this.uname;
  }
}
let hd = new User("hdcms");
hd.get();
console.log(hd.uname);
console.log(hd.getuname());
