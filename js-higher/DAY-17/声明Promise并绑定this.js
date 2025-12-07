class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    this.callbacks = []; //储存状态标志
    // executor(this.resolve, this.reject);
    try {
      //加上try-catch，是为了html文件中发生声明等错误时调用catch捕获异常
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status == HD.PENDING) {
      //if判断，是为了使其符合“Promise结果不会由后来进行改变”这一特点，即只有当当前状态为pending时才会进行调用
      this.status = HD.FULFILLED;
      this.value = value;
      //加定时器是为了在Promise嵌套宏任务嵌套resolve或reject时执行顺序正确
      setTimeout(() => {
        //为了保证出现定时器这种宏任务之后也能顺利的进行剩余代码
        this.callbacks.map((callback) => {
          callback.onFulfilled(value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status == HD.PENDING) {
      this.status = HD.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(reason);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    //做外层判断：Promise.then在使用过程中可以不传用不到的参数，直接传null也可以
    if (typeof onFulfilled != "function") {
      //但是因为Promise中的then可以是链式的
      onFulfilled = () => {
        return this.value;
      };
    }
    if (typeof onRejected != "function") {
      onRejected = () => {
        return this.value;
      };
    }
    let promise = new HD((resolve, reject) => {
      if (this.status == HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.parse(onFulfilled(value), resolve, reject);
            //将所有的错误使用统一的捕获并处理
            // try {
            //   let result = onFulfilled(value);
            //   if (result instanceof HD) {
            //     result.then(resolve, reject);
            //   } else {
            //     resolve(result);
            //   }
            // } catch (error) {
            //   reject(error);
            // }
          },
          onRejected: (value) => {
            this.parse(onRejected(value), resolve, reject);
            // try {
            //   let result = onRejected(value);
            //   if (result instanceof HD) {
            //     result.then(resolve, reject);
            //   } else {
            //     resolve(result);
            //   }
            // } catch (error) {
            //   reject(error);
            // }
          },
        });
      }
      //调用then功能
      if (this.status == HD.FULFILLED) {
        //使用定时器是为了将其放入任务队列中，因为元笨的代码是同步代码，执行顺序与Promise相反
        setTimeout(() => {
          this.parse(onFulfilled(this.value), resolve, reject);
          //   try {
          //     //使用try-catch可以捕获then中的错误
          //     let result = onFulfilled(this.value);
          //     if (result instanceof HD) {
          //       result.then(resolve, reject);
          //       //   result.then(
          //       //     (value) => {
          //       //       resolve(value);
          //       //     },
          //       //     (reason) => {
          //       //       reject(reason);
          //       //     }
          //       //   );
          //     } else {
          //       resolve(result);
          //     }
          //   } catch (error) {
          //     reject(error);
          //   }
        });
      }
      if (this.status == HD.REJECTED) {
        setTimeout(() => {
          this.parse(onRejected(this.value), resolve, reject);
          //   try {
          //     let result = onRejected(this.value);
          //     if (result instanceof HD) {
          //       result.then(resolve, reject);
          //     } else {
          //       resolve(result);
          //     }
          //   } catch (error) {
          //     reject(error);
          //   }
        });
      }
    });
    return promise;
  }
  parse(result, resolve, reject) {
    try {
      if (result instanceof HD) {
        result.then(resolve, reject);
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}
