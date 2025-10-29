let lesson = [
  { title: "盒子模型详解1", click: 11111, price: 100 },
  { title: "盒子模型详解22", click: 2222, price: 200 },
  { title: "盒子模型详解333", click: 333, price: 300 },
  { title: "盒子模型详解4444", click: 44, price: 400 },
  { title: "盒子模型详解55555", click: 5, price: 500 },
];
function order(field, type = "asc") {
  return function (a, b) {
    if (type == "asc") return a[field] > b[field] ? 1 : -1;
    return a[field] > b[field] ? -1 : 1;
  };
}
let hd = lesson.sort(order("click", "desc"));
console.log(hd);
// let hd = lesson.sort(function (a, b) {
//   return a.price > b.price ? 1 : -1;
// });
// console.table(hd);
// let a = lesson.sort(function (a, b) {
//   return a.click > b.click ? 1 : -1;
// });
// console.log(a);
