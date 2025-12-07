new Promise((resolve, reject) => {
  //   reject("rejected");
  resolve("fulfilled");
  //几种错误处理
  //   reject(new Error("promise fail"));

  //   throw new Error("fail");

  //   hd + 1;
  //相当于
  //   try {
  //     hd + 1;
  //   } catch (error) {
  //     reject(error);
  //   }
})
  .then(
    (value) => {
      return new Promise((resolve, reject) => {
        reject("p2");
      });
    }
    //如果只需要resolve，但是不写reason会报错（uncaught），那就用catch
    // (reason) => console.log(reason)
  )
  .then(
    (value) => {
      console.log(value);
    }
    // (reason) => {
    //   console.log(reason);
    // }
  )
  .catch((error) => {
    console.log(error);
  });
//基本都是放在末尾，就会对前面所有没捕获的Promise做处理
//如果前面有对错误做处理，就走前面的处理
