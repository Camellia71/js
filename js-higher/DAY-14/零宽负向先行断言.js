//?= 后面是什么   ?!  后面不是什么
let hd = "houdunren2010hdcms";
let reg = /[a-z]+(?!\d+)$/i;
console.log(hd.match(reg));
