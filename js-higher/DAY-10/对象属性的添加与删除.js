let hd = {};
hd.name = "后盾人";
hd["age"] = 18;
console.log(hd);

//删除
delete hd.name;
console.log(hd);

//检测
console.log(hd.hasOwnProperty("age"));
