class Common {
  sum() {
    return this.data.reduce((t, c) => t + c.price, 0);
  }
  getByKey(key) {
    return this.data.filter((item) => item.uname.includes(key));
  }
}
class Controller extends Common {}
class Lesson extends Controller {
  constructor(data) {
    super();
    this.data = data;
  }
  info() {
    return {
      totalPrice: super.sum(),
      data: this.data,
    };
  }
  getByKey(key) {
    return super.getByKey(key).map((item) => item.uname); //方法继承加覆盖
  }
}
let data = [
  { uname: "js", price: 100 },
  { uname: "mysql", price: 122 },
  { uname: "vue.js", price: 333 },
];
// console.log(Lesson);
let hd = new Lesson(data);
// console.log(hd.info());
console.log(hd.getByKey("js"));
