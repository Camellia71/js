function Arr(...args) {
  args.forEach((item) => this.push(item));
  this.first = function () {
    return this[0];
  };
  this.max = function () {
    return this.sort((a, b) => b - a)[0];
  };
}
Arr.prototype = Object.create(Array.prototype);
let hd = new Arr(1, 2, 3, 4, 5, 6, 77);
console.log(hd.first());
console.log(hd.max());
