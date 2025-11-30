// \d 被包含于 \w  ;\w表示字母数字下划线
let hd = "houdunren2010";
console.log(hd.match(/\w+/));

let email = "2077767215@qq.com";
console.log(email.match(/^\w+@\w+\.$/));

// \W  :除了字母数字下划线
let username = prompt("请输入用户名");
console.log(/^[a-z]\w{4,9}$/.test(username));

// .:包含除了换行符之外的所有字符，包括\d \w
let url = "https://www.houdunren.com";
console.log(url.match(/https?:\/\/\w+\.\w+\.\w+/));

let hs = `
https://www.houdunren.com
`;
console.log(hs.match(/.+/s)[0]); //s:视为单行匹配

let tel = "010 - 99999999";
console.log(tel.match(/\d+ - \d{8}/)); //空格也是字符
