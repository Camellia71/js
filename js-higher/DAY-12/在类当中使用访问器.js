//访问器：参数的设置都通过函数来进行操作
class Request {
  constructor(host) {
    this.data = { host };
  }
  set host(url) {
    if (!/^https?:\/\//i.test(url)) {
      throw new Error("地址错误");
    }
    this.data.host = url;
  }
  get host() {
    return this.data["host"];
  }
}
let hd = new Request("https://www.houdunren.com");
hd.host = "https://hdcms"; //直接这样更改是添了参数，导致程序运行异常，所以可以使用访问器
console.log(hd);
