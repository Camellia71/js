//可以当作对象使用，也可以当作构造函数使用
//每个对象都有一个 prototype 属性，函数.prototype = 实例对象.__proto__
function User() {
  console.log("hanshu");
}
let hd = new User();
//无法打印父级
console.dir(User);
User.prototype.show = function () {
  console.log("后盾人");
};
hd.show();

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

// 1. 函数创建时自动获得 prototype 属性
console.log(Student.prototype); // {constructor: ƒ}

// 2. prototype 的 constructor 指向函数本身
console.log(Student.prototype.constructor === Student); // true

// 3. 实例通过 __proto__ 访问原型
const student1 = new Student("张三", 90);
console.log(student1.__proto__ === Student.prototype); // true
