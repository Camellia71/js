"use strict";
let Lessons = {
  list: [
    { name: "js", price: 100 },
    { name: "mysql", price: 200 },
    { name: "vue.js", price: 300 },
  ],
  get total() {
    return this.list.reduce((t, l) => t + l.price, 0);
  },
};
console.log(Lessons.total);
Lessons.total = 8888;
console.log(Lessons.total);
