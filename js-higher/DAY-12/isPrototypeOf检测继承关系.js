// let a = {};
// let b = {
//   __proto__: a,
// };
// let c = {
//   __proto__: b,
// };
// console.log(a.isPrototypeOf(b));
// console.log(a.isPrototypeOf(c));
// console.log(c.isPrototypeOf(b)); //false

//class
class Common {}
class User extends Common {}
class Admin extends User {}
let hd = new Admin();
console.log(Admin.prototype.isPrototypeOf(hd)); //Admin 在不在hd 的原型链上
console.log(Common.prototype.isPrototypeOf(hd));

console.log(hd instanceof Common); //Common.prototype在不在hd的原型链上
