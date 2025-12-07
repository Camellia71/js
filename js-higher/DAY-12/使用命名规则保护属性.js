class User {
  //public=>可以在外部随意修改
  site = "后盾人";
  //加下划线：人为知道是私有属性
  _url = "https://www.houdunren.com";
  constructor(uname) {
    this.uname = uname;
  }
  set url(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非法网址");
    }
    this._url = url;
  }
}
let hd = new User("后盾人");
hd.uname = "李四";
hd.url = "https://hdcms";
//其实直接定义hd._url还是可以修改的，这个只是约定俗成“加了下划线就是私人属性，就不能认为修改”
console.log(hd);
