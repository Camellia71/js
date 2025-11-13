// let arr = ["后盾人"];
// console.log(arr.concat("houdunren.com"));

// let hd = {};
// let xj = {};
// console.log(Object.getPrototypeOf(hd) == Object.getPrototypeOf(xj));

let xj = { uname: "向军" };
console.log(xj.hasOwnProperty("uname"));
//完全数据字典对象
let hd = Object.create(null, {
  //
  uname: {
    value: "后盾人",
  },
});
console.log(hd);
