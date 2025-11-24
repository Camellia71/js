// function Arr(...args) {
//   args.forEach((item) => this.push(item));
//   this.first = function () {
//     return this[0];
//   };
//   this.max = function () {
//     return this.sort((a, b) => b - a)[0];
//   };
// }
// Arr.prototype = Object.create(Array.prototype);
// let hd = new Arr(1, 2, 3, 4, 5, 6, 77);
// console.log(hd.first());
// console.log(hd.max());

class Arr extends Array {
  constructor(...args) {
    super(...args);
  }
  first() {
    return this[0];
  }
  max() {
    return this.sort((a, b) => b - a)[0];
  }
  add(item) {
    this.push(item);
  }
  remove(value) {
    let pos = this.findIndex((item) => item == value);
    this.splice(pos, 1);
  }
}
let hd = new Arr(1, 2, 3, 4, 5, 6, 77);
console.log(hd.first());
console.log(hd.max());
hd.add(88);
console.log(hd);
hd.remove(4);
console.log(hd);
