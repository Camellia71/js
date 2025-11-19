function User(uname, age) {
  this.uname = uname;
  this.age = age;
}
User.prototype.show = function () {
  console.log(this.uname, this.age);
};

let obj = {};
// console.log(obj.__proto__ == Object.prototype);  //true
function admin(uname, age) {
  const instance = Object.create(User.prototype);
  User.call(instance, uname, age);
  instance.role = function () {
    console.log("role");
  };
  return instance;
}

let xj = admin("向军", 18);
xj.show();
xj.role();

// function Member(...args) {
//   User.apply(this, args);
// }
// Member.prototype = Object.create(User.prototype);

function member(uname, age) {
  const instance = Object.create(User.prototype);
  User.call(instance, uname, age);
  return instance;
}
let lisi = member("李四", 23);
lisi.show();
