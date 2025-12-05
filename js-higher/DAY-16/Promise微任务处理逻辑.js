setTimeout(() => {
  console.log("定时器");
  //第一轮只会走外层的setTimeOut宏任务，都走完一次之后才会再走里面的微任务，所以形式上出现先走宏任务再走微任务，但是宏任务的提升是个假象
  new Promise((resolve) => {
    console.log("settime Promise");
    resolve();
  }).then(() => {
    console.log("settime then");
  });
}, 0);
new Promise((resolve) => {
  //resolve里面的是同步代码，后续then，catch中是Promise微任务异步
  console.log("Promise");
  resolve();
}).then(() => {
  console.log("then");
});
console.log("后盾人");
