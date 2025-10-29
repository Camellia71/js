let hd = {
  user: "后盾人",
  get: function () {
    return function () {
      //是函数而不是对象的方法；所以this是window在调用，在这里识别不到user
      //solution
      //1.声明一个this
      //   let This = this;
      return this.user;
    };
    //2.使用箭头函数（箭头函数特性）
    // return ()=>{
    //     return this.user;
    // }
  },
};
console.log(hd.get()());
