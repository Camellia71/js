let p1 = new Promise((resolve, reject) => {
  resolve("成功");
}).then(null, (a) => {});
new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("funfilled");
  //   }, 2000);
  resolve(p1); //p1返回Promise对象，他的状态会影响下方的进程
  reject("失败"); //后续的状态改变是没有意义的，只会执行第一次(最上方的)
  //也就是说Promise状态是单向的，后来的改变没有意义
}).then(
  (msg) => {
    console.log(msg);
  },
  (error) => {
    console.log("error" + error);
  }
);
console.log("houdunren.com");
