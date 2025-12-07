//then就是对返回的Promise的处理
let p1 = new Promise((resolve, reject) => {
  resolve("fulfilled");
})
  .then(
    //这个then返回的是定时器的reject
    (value) => {
      //   return "houdunren";
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("处理失败");
        }, 3000);
      }).then(null, (reason) => {
        //这个then接收上方返回的定时器的Promise对象
        return "abc"; //返回abc
      });

      //上方一行代码等价于
      // promise.then(
      //   undefined, // 没有成功的处理器
      //   (reason) => {
      //     return Promise.resolve("abc"); // 自动包装成 resolved Promise
      //   }
      // );
    },
    (reason) => console.log("def" + reason) //因为最开始是resolve，所以这个不走
  )
  .then(
    //这个then接受的是abc的返回值
    // 当在 Promise 的 onRejected处理器（错误处理函数）中返回一个普通值时，它会创建一个新的 resolved 状态的 Promise。
    (value) => console.log("成功" + value),
    (reason) => console.log("fail")
  );
