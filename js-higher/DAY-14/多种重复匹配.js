let hd = "hdddddddd";
console.log(hd.match(/hd+/g)); //+  1个或多个
console.log(hd.match(/hd*/g)); //*  0个或多个
console.log(hd.match(/hd{0,100/)); //0-100个
console.log(hd.match(/hd?/)); //0个或1个
