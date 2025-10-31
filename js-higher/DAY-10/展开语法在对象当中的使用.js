// let arr = [1, 2, 3];
// let a = [...arr, 5, 6, 7];
// console.log(a);

// let user = { name: "向军", sge: 23 };
// let hd = { ...user, lang: "zh" };
// console.log(hd);

function upload(params) {
  let config = {
    type: "*.jpeg,*png",
    size: 10000,
  };
  config = { ...config, ...params };
  console.log(config);
}
console.log(upload({ size: 99, type: "*.gif" }));
