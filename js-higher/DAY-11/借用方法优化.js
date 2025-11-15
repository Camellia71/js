let arr = [1, 2, 3, 4];
console.log(Math.max(...arr));
let hd = {
  data: [1, 2, 3, 4, 5, 6],
};
//使用apply 是将数组拆开作为一个一个参数传递，call 是将一整个数组传进去
console.log(Math.max.apply(null, hd.data));
console.log(Math.max.call(null, ...hd.data)); //所以call搭配...点语法使用
let xj = {
  lessons: {
    js: 87,
    php: 63,
    node: 99,
    linux: 88,
  },
};
console.log(Math.max.apply(null, Object.values(xj.lessons)));
