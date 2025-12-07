setTimeout(() => {
  //宏任务
  console.log("setTimeOut");
}, 0);
console.log("后盾人1"); //同步立刻执行
new Promise((resolve) => {
  //promise构造函数中的代码是同步执行的
  resolve();
  console.log("promise");
}).then((value) => console.log("成功")); //微任务
console.log("后盾人2");
