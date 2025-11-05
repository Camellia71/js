// let xj = {
//   uname: "向军",
//   show: function () {
//     console.log(this.uname);
//   },
// };
// let hd = {
//   uname: "后盾人",
//   show: function () {
//     console.log(this.uname);
//   },
// };

//利用工厂函数
function user(uname, age) {
  return {
    uname,
    age,
    show: function () {
      console.log(this.uname + `-houdunren`);
    },
    info: function () {
      console.log(`${this.uname}的年龄是${this.age}`);
    },
  };
}
let xj = user("向军", 18);
console.log(xj);
