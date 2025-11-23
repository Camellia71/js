let common = {
  show() {
    console.log("common.show" + this.uname);
  },
};
let hd = {
  __proto__: common,
  uname: "hd.uname",
  show() {
    // console.log("hd.show");
    // console.log(this.uname);
    // this.__proto__.show.call(this);
    super.show();
  },
};
let xj = {
  __proto__: hd,
  uname: "xj.uname",
  show() {
    //只能这种方式使用，如果改成函数的话会报错
    // this.show();  这样就是一直在自己调用，死循环
    // this.__proto__.show.call(this); //其实是hd在调用，所以调用之后打印'hd.uname' ,所以加上call方法
    // console.log("xj.show");
    super.show();
  },
};
// console.log(xj);
xj.show();
