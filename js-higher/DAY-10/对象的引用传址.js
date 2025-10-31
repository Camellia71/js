// let user = {};
// let hd = user; // 内存地址相同

let user = { name: "后盾人" };
function show(a) {
  //   console.log(a);
  //   a = a + 100;
  a.age = "18";
  console.log(a);
}
let a = 1;
show(user);
console.log(a);
