let site = "后盾人";
console.log("后盾人.js");
export { site };

class Lesson {
  data = [];
  init() {
    this.data = [{ uname: "js" }, { uname: "vue.js" }];
  }
  get() {
    return this.data;
  }
}
let obj = new Lesson();
obj.init();
export { obj };
