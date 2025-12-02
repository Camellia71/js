new Promise((resolve, reject) => {
  resolve("一瓶可乐");
  //   reject("不买");
  //如果只需要考虑其中一种情况，另一种情况对应的then中的内容可以用null代替
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
// 如果then不对状态做任何处理的话，就会一直向后传递
// new Promise((resolve, reject) => {
//   reject("no");
// })
//   .then()
//   .then(null, (reason) => {
//     console.log(reason);
//   });
//向后执行
