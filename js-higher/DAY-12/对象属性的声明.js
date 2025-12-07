class User {
  site = "后盾人";
  constructor(uname) {
    //加this关键字后就是新对象的声明方式，是每个新对象独有的
    this.uname = uname;
  }
  changeSite(value) {
    this.site = value;
  }
  show() {
    return `${this.site}:${this.uname}`;
  }
}
let hd = new User("后盾人");
console.log(hd);
let xj = new User("向军");
console.log(xj);
hd.changeSite("houdunren");
console.log(hd.show());
