let hd = {
  uname: "hd",
};
// let xj = {};
let parent = {
  uname: "parent",
  show() {
    console.log("parent method:" + this.uname);
  },
};
// console.log(hd.__proto__ == Object.prototype);

//设置原型
Object.setPrototypeOf(hd, parent);
console.log(hd.show()); //parent method:hd
console.log(parent.show()); //parent method:parent

//获取原型
console.log(Object.getPrototypeOf(hd));
