let hd = "houdunren";
console.log(/hou|@/.test(hd)); //左右两边的表达式有一个满足就可以

let tel = "010-9999999";
// console.log(/010\-\d{7,8}|020\-\d{7,8}/.test(tel));
//使用原子组
console.log(/(010|020)\-\d{7,8}/.test(tel));
