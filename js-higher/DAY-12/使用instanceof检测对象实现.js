// function User() {}
// function Admin() {}
// Admin.prototype = Object.create(User.prototype);
// let hd = new Admin();
// console.log(hd instanceof Admin);
// console.log(hd instanceof User);
// console.log(hd.__proto__ == Admin.prototype);
// console.log(hd.__proto__.__proto__ == Admin.prototype.__proto__);

//递归调用实现判断
// function checkPrototype(obj, constructor) {
//   if (!obj.__proto__) return false;
//   if (obj.__proto__ == constructor.prototype) return true;
//   return checkPrototype(hd.__proto__, constructor);
// }
// console.log(checkPrototype(hd, User));

//class
class User {}
class Admin extends User {}
let hd = new Admin();
console.log(hd instanceof Admin);
console.log(hd instanceof User);
console.log(hd.__proto__ == Admin.prototype);
console.log(hd.__proto__.__proto__ == Admin.prototype.__proto__);
