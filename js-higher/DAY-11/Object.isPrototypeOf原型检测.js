//这个是真的检测一个对象在不在另一个对象的原型链上
let a = {};
let b = {};
let c = {};
// console.log(Object.prototype == b.__proto__); //true
// console.log(b.__proto__.isPrototypeOf(a)); //true

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
console.log(b.isPrototypeOf(a)); //true
console.log(c.isPrototypeOf(b)); //true
console.log(c.isPrototypeOf(a)); //true
