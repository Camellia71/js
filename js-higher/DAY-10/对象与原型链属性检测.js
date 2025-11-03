// let arr = ["houdunren.com", "hdcms"];
// console.log(arr.hasOwnProperty("length"));
// console.log(arr.hasOwnProperty("concat")); //不能检测父级中的

// //检测父级
// console.log("concat" in arr);

let a = {
  name: "后盾人",
};
let b = {
  url: "houdunren.com",
};
Object.setPrototypeOf(a, b); //将b 设置为a 的父级
console.log(a);
console.log(a.hasOwnProperty("url")); //f
console.log("url" in a); //t

//example
function oss(options) {
  if (!options.hasOwnProperty("hosts")) {
    throw new Error("必须设置主机地址");
  }
}
oss({ user: "admin" });
