let hd = `
https://www.houdunren.com
http://houdunwang.com
`;
let reg = /https?:\/\/((\w+\.)?\w+\.(?:com|org|cn))/gi;
//?:  就是不记录这个组
//?  零个或多个
// console.log(hd.match(reg));
// console.log(reg.exec(hd));
let urls = [];
while ((res = reg.exec(hd))) {
  urls.push(res[1]);
}
console.log(urls);
