//按顺序执行Promise任务,队列中的成员每一个都要是Promise，并且下一个Promise的执行依赖上一个Promise的状态改变
let promise = Promise.resolve("后盾人");
promise
  .then((v) => {
    console.log(v);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 1000);
    });
  })
  .then((v) => {
    // console.log("ab");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  });
