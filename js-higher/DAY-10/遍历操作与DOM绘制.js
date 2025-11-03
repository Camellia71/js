let hd = {
  uname: "后盾人",
  year: "2010",
};
// console.log(Object.keys(hd));
// console.log(Object.values(hd));

// for (const key in hd) {
//   console.log(hd[key]);
// }

// for (const element of hd) {  //报错，默认情况下不能操作对象，
//   console.log(element);
// }
//可以转化为数组，再操作
for (const [key, value] of Object.entries(hd)) {
  console.log(key, value);
}

//数组
// let lessons = [{ name: "js", click: "99" }];
// for (const element of lessons) {
//   //但是能操作数组，因为数组有可迭代特性
//   console.log(element);
// }
