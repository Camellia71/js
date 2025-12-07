// let xj = {};
// xj.uname = "向军";
// xj.show = function (uname) {
//   console.log(uname);
// };

function User(uname, age) {
  //   this.uname = uname;
  //   this.age = this.age;
  let data = { uname, age };
  //抽象处理
  let info = function () {
    return data.age > 50 ? "老年" : "青年";
  };
  this.show = function () {
    console.log(data.uname + info());
  };
}
let xj = new User("向军");
// xj.info = function () {
//   return "";
// };
xj.show();
