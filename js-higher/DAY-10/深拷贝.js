let obj = {
  uname: "后盾人",
  user: {
    uname: "hdcms",
  },
  arr: [],
};

//这里不能实现深拷贝
// let hd = {
//   uname: obj.uname,
//   user: obj.user,
// };
// hd.user.name = "向军";
// console.log(JSON.stringify(obj, null, 2));
// console.log(JSON.stringify(hd, null, 2)); ///将对象 hd以格式化的 JSON 字符串形式输出到控制台。
// JSON.stringify(要转换的目标对象,替换函数"（通常用于过滤或转换属性），null表示不进行任何替换",缩进空格数"，用于格式化输出，使 JSON 更易读");

//深拷贝
// function copy(objects) {
//   let res = {};
//   for (const key in objects) {
//     res[key] =
//       typeof objects[key] == "object" ? copy(objects[key]) : objects[key];
//   }
//   return res;
// }
// let hd = copy(obj);
// hd.user.uname = "向军";
// console.log(JSON.stringify(obj, null, 2));
// console.log(JSON.stringify(hd, null, 2));

//这里需要注意的一点是：利用typeof 只能判断object，[]也显示object，所以如果需要判断数组还是对象的话，需要使用[] instanceof Array
// console.log([] instanceof Array);

//考虑数组
function copy(obj) {
  let res = obj instanceof Array ? [] : {};
}
let hd = copy(obj);
console.log(JSON.stringify(obj, null, 2));
console.log(JSON.stringify(hd, null, 2));
