class User {
  show() {
    console.log(this.uname);
  }
}
class Admin extends User {
  constructor(uname) {
    super();
    this.uname = uname;
  }
  show() {
    super.show(); //super 就是访问父级类;调用父级里面的方法
    console.log("admin show");
  }
}
console.log(Admin);
let a = new Admin("后盾人");
a.show();

//对象
let hd = {
  uname: "hd.uname",
  show() {
    // console.log("hd.show");
    console.log(this.uname);
  },
};
let xj = {
  __proto__: hd,
  uname: "xj.uname",
  show() {
    // this.show();  这样就是一直在自己调用，死循环
    this.__proto__.show.call(this); //其实是hd在调用，所以调用之后打印'hd.uname' ,所以加上call方法
    console.log("xj.show");
  },
};
console.log(xj);
