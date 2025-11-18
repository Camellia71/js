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
let xj = new Admin("向军", 18);
xj.show();

function Member(...args) {
  User.apply(this, args);
}
Member.prototype = Object.create(User.prototype);
let lisi = new Member("李四", 22);
lisi.show();
