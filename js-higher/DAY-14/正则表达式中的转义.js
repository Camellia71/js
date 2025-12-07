let price = 23.34;
//.表示除换行外的所有字符；如果想表示字符.的话，就要转义（用\转义）
// d 代表字符串  \d 代表数字0~9
console.log(/\d+\.\d+/.test(price));

//在对象里面
let reg = new RegExp("\\d+\\.\\d+"); //对象传递的参数需要再加一个\
console.log(reg.test(price));

let url = "https://www.houdunren.com";
console.log(/https?:\/\/\w+\.\w+\.\w+/.test(url));
