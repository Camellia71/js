function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
  apply(func, obj, args) {
    // console.log(obj);
    console.time("run");
    func.apply(this, args);
    console.timeEnd("run");
  },
});
proxy.apply(this, [500]);
