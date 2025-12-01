let hd = "houdunren789hdcms666";
//(?<=...)  正向向后查找语法
const reg = /(?<=houdunren)\d+/i;
console.log(hd.match(reg));
