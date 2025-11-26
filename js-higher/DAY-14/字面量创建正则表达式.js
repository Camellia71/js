let hd = "houdunren.com";
let a = "u";
console.log(/u/.test(hd)); ///这里面不能存放变量，只能是要被查找的字符/
console.log(eval(`/${a}/`).test(hd)); //这样就能识别a了
