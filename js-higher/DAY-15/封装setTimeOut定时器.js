setTimeout(() => {
  console.log("houdunren.com");
}, 2000);

//Promise 封装
function timeout(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
timeout(2000)
  .then(() => {
    console.log("houdunren.com");
    return timeout(2000);
  })
  .then((value) => {
    console.log("hdcms.com");
  });
