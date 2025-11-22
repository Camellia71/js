//使用WeakMap保护属性
const host = new WeakMap(); //外边看不见
class User {
  constructor(uname) {
    this.uname = uname;
    host.set(this, "https://houdunren.com");
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非法网址");
    }
    host.set(this, url);
  }
  get host() {
    return host.get(this);
  }
}
let hd = new User("后盾人");
let xj = new User("向军");
xj.host = "https://hdcms.com";
console.log(xj.host);
