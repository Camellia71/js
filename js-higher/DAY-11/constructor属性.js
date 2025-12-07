function User(uname) {
  this.uname = uname;
}

//添加一个属性
// User.prototype.show = function () {   //还是在原来的prototype上添加
//   console.log(this.uname);
// };

//添加多个属性
User.prototype = {
  //创建了新的对象prototype ，他是没有constructor属性的
  constructor: User, //所以自己添加上即可
  show() {
    console.log(this.uname);
  },
  site() {
    console.log("houdunren.com");
  },
};

// console.dir(User);
// console.log(User.prototype.__proto__ == Object.prototype);
// console.log(User.prototype.constructor == User);

let lisi = new User.prototype.constructor("李四");
console.log(lisi);
