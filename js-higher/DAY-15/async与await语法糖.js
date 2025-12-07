// new Promise((resolve) => {
//   console.log("后盾人");
//   resolve("houdunren.com");
// }).then((v) => {
//   console.log(v);
// });

//async/await是基于Promise的语法糖，让异步代码看起来更像同步代码，提高可读性。
// async 函数总是返回一个Promise
async function getUser() {
  return { name: "张三" };
  // 等价于：return Promise.resolve({ name: '张三' });
}

getUser().then((user) => console.log(user));

async function fetchData() {
  // await 只能在async函数中使用,类似于then,只是写法上少了回调函数
  let name = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("后盾人");
    }, 1000);
  });
  let site = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("后盾人2");
    }, 2000);
  });
}
//对比then
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
