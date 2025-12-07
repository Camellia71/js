const data = [
  { uname: "js", price: 100 },
  { uname: "mysql", price: 122 },
  { uname: "vue.js", price: 222 },
];
class Lesson {
  constructor(data) {
    this.model = data;
  }
  price() {
    return this.model.price;
  }
  static createBatch(data) {
    return data.map((item) => new Lesson(item));
  }
  static maxPrice(data) {
    return data.sort((a, b) => {
      //   console.log(a);
      return b.price() - a.price();
    })[0];
  }
}
// let obj1 = new Lesson(data[0]);
// console.log(obj1);
// let Lessons = Lesson.createBatch(data);
// console.log(Lessons);
let lessons = Lesson.createBatch(data);
console.log(Lesson.maxPrice(lessons).price());
