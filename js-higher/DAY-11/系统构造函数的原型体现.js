let hd = {}; //Object
console.log(hd.__proto__ == Object.prototype);

Array.prototype.show = function () {
  console.log("后盾人");
};
let arr = [];
console.log(arr.__proto__ == Array.prototype);
arr.show();

let bool = true;
console.log(bool.__proto__ == Boolean.prototype);
