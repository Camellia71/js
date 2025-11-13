//String  Number
let hd = new Object();
hd.uname = "后盾人";
// console.dir(Object);
Object.prototype.show = function () {
  console.log("后盾人...");
};
// hd.show();
function User() {}
let xj = new User();
// console.dir(User);
console.log(xj.__proto__.__proto__ == User.prototype.__proto__);
