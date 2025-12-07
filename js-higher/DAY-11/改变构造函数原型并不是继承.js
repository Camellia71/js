// let f = {};
// console.log(f.__proto__);
// console.log(Object.setPrototypeOf(f, {}));

//可以利用constructor和__proto__的关系来用实例对象创建实例对象
// function Hd() {}
// let obj = new Hd();
// // console.dir(Hd);
// let obj2 = obj.__proto__.constructor;

//继承就是原型的继承，而不是改变构造函数的原型
// function User() {
//   this.uname = function () {
//     console.log("user.uname");
//   };
// }
//更推荐将方法封装到原型中，不然每创建一个对象就会开辟一块空间
function User() {}
User.prototype.uname = function () {
  console.log("user.uname");
};
let hd = new User();
console.log(hd);
hd.uname();

//想继承uname 方法,是改变了构造函数的原型,如果Admin本身就有自己的方法现在添加的话其实是添加到uname方法的同样位置，也就是说三个构造函数共用，而不是Admin自己的方法,这时如果Member也有role方法（两个方法不同）
function Admin() {}
// Admin.prototype = User.prototype;  //会有覆盖现象
// 为了解决覆盖现象，就在Admin.prototype.__proto__=User.prototype,这样的话就是在原型的原型上进行改动，但是a还是指向Admin.prototype的
//方法 1
Admin.prototype.__proto__ = User.prototype;
//方法 2
//create 有两层含义：一是创建对象，二是把第一个参数的对象作为新对象的原型
Admin.prototype = Object.create(User.prototype); //所以现在的a指向一个新创建的对象，如果想把role方法加在这个新对象上而不是之前的原型上，就要在这一行后方写role方法
//方法 2会让constructor丢失，但是由于继承（User）就会得到User.prototype.constructor,如果想让他与原来一致，就“指回来”

// Admin.prototype.constructor = Admin;
//再进行用实例对象创建对象时也会保留这一条（正常），现在还有一个小问题，这个constructor是可以被遍历的，会导致遍历原型链中的方法（constructor也会被遍历），所以换一种定义方法：控制属性
//也就是禁止constructor属性被遍历
Object.defineProperty(Admin.prototype, "constructor", {
  value: Admin,
  enumerable: false,
});

Admin.prototype.role = function () {
  console.log("admin.role");
};
let a = new Admin(); //这一行如果在构造函数后马上声明，那只有方法 1起作用
a.uname();
a.role();

function Member() {}
// Member.prototype = User.prototype;
Member.prototype.__proto__ = User.prototype;
Member.prototype.role = function () {
  //这个方法会覆盖掉上一个Admin.prototype.role方法
  console.log("member.role");
};
let m = new Member();
m.uname();
m.role();
