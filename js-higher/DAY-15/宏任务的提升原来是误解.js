let promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("setTimeOut");
    resolve(); //这个微任务是在setTimeOut宏任务执行过程中创建出来的，所以如果不走宏任务的话就不会有微任务打印“成功”，这里不是宏任务有提升，而是嵌套的执行导致的
  }, 0);
  console.log("promise");
}).then((value) => console.log("成功"));
console.log("houdunren.com");
