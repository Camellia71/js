//放在宏任务中
// function sum(num) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let count = 0;
//       for (let i = 0; i < num; i++) {
//         count += num--;
//       }
//       resolve(count);
//     });
//   });
// }
// async function hd(num) {
//   let res = await sum(num);
//   console.log(res);
// }
// hd(987654321);
// console.log("后盾人");

//另一种写法:放在微任务中
async function hd(num) {
  let res = await Promise.resolve().then((_) => {
    let count = 0;
    for (let i = 0; i < num; i++) {
      count += num--;
    }
    return count;
  });
  console.log(res);
}
hd(987654321);
console.log("后盾人");
