let hd = {
  data: [1, 2, 3, 4, 5, 6],
};
Object.setPrototypeOf(hd, {
  max(data) {
    return data.sort((a, b) => b - a)[0];
  },
});
console.log(hd.max(hd.data));

// let xj = {
//   lessons: {
//     js: 87,
//     php: 63,
//     node: 99,
//     linux: 88,
//   },
//   get data() {
//     return Object.values(this.lessons);
//   },
// };
// console.log(hd.max.apply(xj));

//不在data中进行返回
let xj = {
  lessons: {
    js: 87,
    php: 63,
    node: 99,
    linux: 88,
  },
};
console.log(hd.max.call(null, Object.values(xj.lessons)));
//这个方法不能用apply
//使用apply 是将数组拆开作为一个一个参数传递，call 是将一整个数组传进去
