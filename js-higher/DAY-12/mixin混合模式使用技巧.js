//mixin
let Tool = {
  max(key) {
    return this.data.sort((a, b) => b[key] - a[key])[0];
  },
};
let Arr = {
  count(key) {
    return this.data.reduce((t, c) => t + c[key], 0);
  },
};
class Lesson {
  constructor(lessons) {
    this.lessons = lessons;
  }
  get data() {
    return this.lessons;
  }
}
const data = [
  { uname: "js", price: 100, click: 188 },
  { uname: "css", price: 222, click: 322 },
  { uname: "vue.js", price: 333, click: 434 },
];
Object.assign(Lesson.prototype, Tool, Arr);
let hd = new Lesson(data);
console.log(hd.max("price"));
console.log(hd.count("click"));
