const hdcms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第一个Promise");
  }, 2000);
});
const houdunren = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第二个异步");
  }, 1000);
});
Promise.race([hdcms, houdunren])
  //取加载的快的那个
  .then((results) => {
    console.log(results);
  })
  .catch((msg) => {
    console.log(msg);
  });

//example
let promises = [
  ajax(``),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("请求超时");
    }, 2000);
  }),
];
Promise.race(promises)
  .then((value) => {
    console.log(value);
  })
  .catah((error) => {
    console.log(error);
  });

//封装
function query(url, delay = 2000) {
  let promises = [
    ajax(url),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("请求超时");
      }, delay);
    }),
  ];
  return Promise.race(promises);
}
query(``, 1000)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
