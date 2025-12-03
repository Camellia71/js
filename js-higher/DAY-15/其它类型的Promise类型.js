let p1 = new Promise((resolve, reject) => {
  resolve("fulfilled");
})
  .then(
    (value) => {
      //可以使用newPromise封装，可以使用“返回值”，可以使用类
      // return new Promise((resolve, reject) => {
      //   resolve("成功");
      // });

      // return "abc";

      //   class Hd {
      //     //这里返回的相当于一个Promise对象
      //     then(resolve, reject) {
      //       setTimeout(() => {
      //         resolve("这是对象");
      //       }, 2000);
      //     }
      //   }
      //   return new Hd();

      return class {
        static then(resolve, reject) {
          //   resolve("success");
          reject("fail");
        }
      };
    },
    (reason) => {}
  )
  .then(
    (value) => {
      console.log(value);
    },
    (reason) => {
      console.log("error" + reason);
    }
  );
