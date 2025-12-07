function User(uname) {
  this.uname = uname;
  this.show = function () {
    console.log(this.uname);
  };
}
User.prototype = {
  constructor: User, //批量添加一定要找回constructor
  show() {
    console.log(this.uname);
  },
};
let hd = new User("后盾人");
console.log(hd);

function creatByObject(obj, ...args) {
  const constructor = Object.getPrototypeOf(obj).constructor;
  return new constructor(...args);
}
let xj = creatByObject(hd, "向军");
xj.show();
