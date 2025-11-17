//this 始终指向调用的对象
let hd = {
  uname: "后盾人",
};
let User = {
  uname: "向军",
  show() {
    console.log(this.uname);
  },
};
Object.setPrototypeOf(hd, {});
console.log(hd.show());
console.log(hd);
hd.show(); //show方法放到User里，调用它的仍然是hd，所以不影响this指向
