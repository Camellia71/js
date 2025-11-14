function A() {}
function B() {}
function C() {}
let c = new C();
B.prototype = c;
let b = new B();
A.prototype = b;
let a = new A();
//在原型链上就返回true
//这个是检测一个构造函数的 prototype 在不在 另一个对象的原型链上
console.log(a instanceof A); //true
console.log(a instanceof B); //true
console.log(a instanceof C); //true
console.log(b instanceof A); //false
