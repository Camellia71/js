let hd = "houdunren2010";
console.log(hd.match(/\p{L}/gu));

// Script 属性
console.log(hd.match(/\p{sc=Han}/gu));

//lastIndex属性：控制正则表达式开始搜索的位置
let hs = "houdunren";
// console.log(hd.match(/\w/g));
let reg = /\w/g;
console.log(reg.lastIndex); //会记住上一次搜索的点
console.log(reg.exec(hs));
console.log(reg.lastIndex);
console.log(reg.exec(hs));

let hdcms = `后盾人QQ群:11111111,99999999,88888888,
后盾人不断分享视频教程，网址是 houdunren.com`;
let regg = /(\d+),?/y;
regg.lastIndex = 7;
// console.log(regg.exec(hdcms));
// console.log(regg.exec(hdcms));
// console.log(regg.exec(hdcms));
// console.log(regg.exec(hdcms));
let qq = [];
while ((res = regg.exec(hdcms))) qq.push(res[1]);
console.log(qq);
