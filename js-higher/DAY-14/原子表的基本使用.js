let hd = "houdunren";
//就是按照单一的字符进行匹配
console.log(hd.match(/[ue]/g));

console.log(hd.match(/[^ue]/g)); //在中括号里面加上^ 表示取反（排除）

//原子表字符不解析
let hs = "(houdunren).+";
//()放到外边是原子组的意思，放到[]里就表示()
console.log(hs.match(/[(.+)]/gi)); //[ '(', ')', '.', '+' ]
console.log(hs.match(/[.+]/gi)); //[ '.', '+' ]
console.log(hs.match(/.+/gi)); //[ '(houdunren).+' ]

//使用原子表匹配所有内容
let hf = `
    houdunren
    hdcms
`;
console.log(hf.match(/[\d\D]+/)[0]);
