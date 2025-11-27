//元字符
// \d 匹配数值   \d+匹配多个符合要求的
let hd = "houdunren 2010";
console.log(hd.match(/d+/g));

let hs = `
张三:010-9999999,李四:020-8888888
`;
hd.match(/\d{3}--\d{7,8}/g); //{3} 匹配三个数值

// \D  除了数值之外的字符
let ha = "houdunren 2010";
console.log(hd.match(/\D+/));

let hf = `
张三:010-9999999,李四:020-8888888
`;
console.log(hd.match(/[-\d:,]/g)); //[]里面出现的我就要
console.log(hd.match(/[^-\d:,\s]+/g)); //加上^之后，除了[]里面出现的，剩下的我都要；加上+就表示多个

// \s就表示空白字符，空格 回车 换行符\n这种
console.log(/\s/.test("hd")); //返回布尔值

// \S表示除了空白
console.log(/\S/.test(" ")); //flase
