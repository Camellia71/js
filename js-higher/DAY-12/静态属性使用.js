//为构造函数创建的属性是静态属性
// function Web(url) {
//   this.url = url;
// }
// Web.url = "hdcms"; //静态属性

// let hd = new Web("houdunren.com");
// console.log(hd);

//类
//静态属性是属于类本身的属性，而不是类的实例的属性。所有实例共享同一个静态属性。
class Request {
  static host = "https://www.houdunren.com";
  //如果这个属性是所有对象都要使用的，就把他定为静态属性
  api(url) {
    return Request.host + `${url}`; //需要通过类名来访问属性
  }
}
let obj1 = new Request();
console.log(obj1.api("article"));
// let obj2 = new Request();
// obj1.host = "https://www.baidu.com";
// console.log(obj2);
