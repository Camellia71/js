//使用Symbol，禁止改动私人属性
const protecteds = Symbol("主机");
class Common {
  //   [HOST] = "https://www.houdunren.com";
  constructor() {
    this[protecteds] = {};
    this[protecteds].host = "https://houdunren.com";
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非法网址");
    }
    this[protecteds].host = url;
  }
  get host() {
    return this[protecteds].host;
  }
}
class User extends Common {
  //继承
  constructor(uname) {
    super(); //必须要调用一下父类的构造函数，否则会报错
    this[protecteds].uname = uname;
  }
  get uname() {
    return this[protecteds].uname;
  }
}
let hd = new User("后盾人");
hd.host = "https://abc";
console.log(hd);
console.log(hd.uname);
