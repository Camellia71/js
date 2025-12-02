let p1 = new Promise((resolve, reject) => {
  resolve("funfilled");
});
let p2 = p1
  .then(
    (value) => console.log(value),
    (reason) => console.log(reason)
  ) //这个then也是返回Promise对象，并且在默认状态下是成功的，所以会执行成功
  .then(
    (a) => console.log("成功"),
    (b) => console.log(b)
  );
//then 是对上一个Promise状态的处理

// console.log(p2); //Promise  pending
// console.log(p1);

setTimeout(() => {
  console.log(p1); //resolved 因为先执行微任务再执行宏任务，所以这时候微任务状态就是resolved
  console.log(p2);
});
