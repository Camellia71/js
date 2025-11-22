// function User(uname) {
//   this.uname = uname;
// }
// function Admin(uname) {
//   //   this.uname = uname;
//   User.call(this, uname);
// }
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.show = function () {};
// let hd = new Admin("后盾人");
// console.log(hd);

class User {
  constructor(uname) {
    this.uname = uname;
  }
}
class Admin extends User {
  constructor(uname) {
    super(uname);
  }
}
let hd = new Admin("后盾人");
console.log(hd);
