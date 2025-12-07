let hd = `
<h1>houdunren</h1>
<h2>hdcms</h2>
`;
let reg = /<(h[1-6])>([\s\S]*)<\/\1>/gi;
console.log(hd.match(reg));

//别名
// ?<> 起别名
