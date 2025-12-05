// function hd() {
//   for (let i = 0; i < num; i++) {
//     count += num--;
//   }
//   console.log(count);
// }
// let num = 9876544321;
// let count = 0;
// hd();
// console.log("后盾人");

//为了使上方for循环不影响下方“后盾人”打印，我们使用如下方法
function hd() {
  for (let i = 0; i < 100000000; i++) {
    if (num <= 0) break;
    count += num--;
  }
  if (num > 0) {
    // console.log(count);
    setTimeout(hd);
  } else {
    console.log(count);
  }
}
let num = 987654321;
let count = 0;
hd();
console.log("后盾人");
