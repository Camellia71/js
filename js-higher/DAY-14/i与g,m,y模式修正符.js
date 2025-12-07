//模式修正符就是把正则表达式的运行方式发生改变
let hd = "houdUnren";
// i 不区分大小写
// g 匹配全部，找到一个后不会停止
console.log(hd.match(/u/gi));
console.log(hd.replace(/u/gi, "@"));

//m :多行匹配修正符
let hs = `
#1 js,200元 #
#1 php,300元 #
#1 houdunren.com # 后盾人
#1 node.js,180元 #
`;
//想得到 [{name:'js'},price:'200元'}] 的结构
let lessons = hs.match(/^\s*#\d+\s+[^#]+\s+#\s*$/gm)?.map((v) => {
  //   console.log(v);
  v = v.replace(/\s*#\d+\s*/, " ").replace(/\s*#\s*$/, "");
  let [uname, price] = v.split(",");
  return { uname, price };
});
console.log(JSON.stringify(lessons, null, 2));

//y与g
let hf = "udunren";
let reg = /u/y;
// y 的话，会挨个检测，检测到“d”的时候就会返回null，查找就结束了
// g 的话，会跳过不是“u”的字符，所以能检测到所有
console.log(reg.exec(hf));
console.log(reg.lastIndex);
console.log(reg.exec(hf));
console.log(reg.lastIndex);
