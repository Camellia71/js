function User(uname, age) {
  this.uname = uname;
  this.age = age;
}
User.prototype.show = function () {
  console.log(this.uname, this.age);
};

function Admin(...args) {
  User.apply(this, args);
}
Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;  //这个方法有缺陷，我们要使constructor不能被遍历
Object.defineProperty(Admin.prototype, "enumerable", {
  value: Admin,
  enumerable: false,
});
let xj = new Admin("向军", 18);
xj.show();

function Member(...args) {
  User.apply(this, args);
}
Member.prototype = Object.create(User.prototype);
Object.defineProperty(Member.prototype, "enumerable", {
  value: Member,
  enumerable: false,
});
let lisi = new Member("李四", 22);
lisi.show();
