function User(uname) {
  this.uname = uname;
  this.show = function () {
    console.log(this.uname);
  };
}
//直接添加到原型上
//   User.prototype.show()=function() {
//     console.log(this.uname);
//   }
//   User.prototype.get=function() {
//     console.log('get...');
//   }

//批量添加
User.prototype = {
  constructor: User,
  show() {
    console.log(this.uname);
  },
  get() {
    console.log("get...");
  },
};

let lisi = new User("李四");
let xj = new User("向军");
lisi.show();
xj.show();
