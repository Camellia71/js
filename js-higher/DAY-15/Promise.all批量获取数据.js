const hdcms = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第一个异步");
  }, 1000);
});
const houdunren = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("第二个异步");
  }, 1000);
});
