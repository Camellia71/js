// let web = { uname: "后盾人", url: "houdunren.com" };
// // let { uname: uname, url: url } = web; //{原内容:赋值给新的内容}  所以名字相同就可以不加后边
// let { uname, url } = web;
// console.log(uname);

//数组
// let arr = ["houdunren", "houdunren.com"];
// let [a, b] = arr;
// console.log(a);

//
let uname = "后盾人",
  url = "houdunren.com";
let opt = { uname, url }; //键和值名字相同，可以简写
console.log(opt);
