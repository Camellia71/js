// __proto__ getter setter

let hd = {
  uname: "后盾人",
};
hd.__proto__ = {
  show() {
    console.log(this.uname);
  },
};
hd.__proto__ = 99;
hd.show(); //后盾人
// 还是能使用show方法,会自己判断：是对象就执行
// 所以__proto__不是完全意义的属性，他可以自己判断，更像访问器

//如果就想设置他的属性为 非对象,就让它的原型为空
let hd = Object.create(null);
console.dir(hd);
hd.__proto__ = "后盾人";
console.log(hd.__proto__);

//访问器的写法
// let hd = {
//   action: {},
//   get proto() {
//     return this.action;
//   },
//   set proto(obj) {
//     if (obj instanceof Object) {
//       this.action = obj;
//     }
//   },
// };
// hd.proto = { view: function () {} };
// hd.proto = "abc";
// console.log(hd.proto);
