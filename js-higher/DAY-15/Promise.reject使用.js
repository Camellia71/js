// let hd = {
//   then(resolve, reject) {
//     resolve("后盾人");
//   },
// };
// Promise.resolve(hd).then((value) => {
//   console.log(value);
// });

Promise.reject("fail").then((value) => {
  console.log(value);
});
new Promise((resolve, reject) => {
  resolve("成功");
})
  .then((value) => {
    // console.log(value);
    if (value != "成功") {
      //   throw new Error("fail");
      return Promise.reject("参数错误");
    }
  })
  .catch((error) => {
    console.log(error);
  });
// Promise.reject("fail")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
