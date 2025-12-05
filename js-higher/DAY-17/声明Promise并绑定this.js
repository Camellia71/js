class HD {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = HD.PENDING;
    this.value = null;
    executor();
  }
  resolve() {}
  reject() {}
}
// new Promise((resolve, reject) => {
// resolve("解决");
// rejects("拒绝");
// });
