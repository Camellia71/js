let hd = { uname: "后盾人", url: "houdunren.com" };
// let cms = hd;
// cms.uname = "houdunren.com"; //也会改变hd
// console.log(hd);

// let cms = {
//   uname: hd.uname,
// };
// console.log(cms);
// cms.uname = "sinja.com.cn";
// console.log(cms);

浅拷贝;
let obj = {};
for (const key in hd) {
  obj[key] = hd[key] + "-向军";
}
// obj.uname = "向军";
console.log(obj);

//利用assign
// let obj = Object.assign({}, hd);
// console.log(obj);
// obj.uname = "tom";
// console.log(obj);

//使用展开语法
// let obj = { ...hd };
// obj.uname = "crom";
// console.log(obj);
