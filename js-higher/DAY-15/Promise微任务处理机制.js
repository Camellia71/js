//先微任务，再宏任务

// //pending  准备阶段
// console.log(new Promise((resolve, reject) => {}));

// //resolved /fulfilled  成功状态
// console.log(
//   new Promise((resolve, reject) => {
//     resolve("成功状态");
//   })
// );

// //rejected  失败状态/拒绝状态
// console.log(
//   new Promise((resolve, reject) => {
//     reject("失败状态");
//   })
// );

//
new Promise((resolve, reject) => {
  resolve("成功");
  //   reject("失败");
})
  .then(
    (value) => {
      console.log("成功业务处理");
    },
    (reason) => {
      console.log("拒绝的业务处理");
    }
  )
  .then(
    (value) => {
      console.log("成功业务处理");
    },
    (reason) => {
      console.log("拒绝的业务处理");
    }
  );
