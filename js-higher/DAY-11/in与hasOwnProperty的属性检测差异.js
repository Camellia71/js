let a = { url: "houdunren.com" };
let b = { uname: "后盾人" };
//in 检测是否在该对象及该对象的原型链上
Object.prototype.web = "hdcms.com";
Object.setPrototypeOf(a, b); //b 成为 a的protptype
console.log("url" in a);
console.log("web" in a);

//只检测是否在当前对象上
console.log(a.hasOwnProperty("uname")); //false

//for-in  会遍历当前对象及原型链内属性
for (const key in a) {
  //   console.log(key);
  //  如果想只遍历a 内的属性
  if (a.hasOwnProperty(key)) {
    console.log(key);
  }
}
