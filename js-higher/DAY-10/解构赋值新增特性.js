// let user = { uname: "后盾人", age: 18 };
// // console.log(user);
// // let { name: n, age: a } = user;

// //简写
// let { uname, age } = user; //需要与键名保持一致

// console.log(uname, age);

h函数接返回值;
function hd() {
  return { uname: "Houdunren", age: 20 };
}
let { uname, age } = hd();
console.log(uname, age);

参数是对象;
function user({ name, age }) {
  console.log(name, age);
}
user({ name: "向军", age: 22 });

// Math = {
//   random: abs,
// };
// console.log(Math);
// // let { random } = Math;
// // console.log(random());
