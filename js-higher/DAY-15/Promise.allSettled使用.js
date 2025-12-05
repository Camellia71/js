const p1 = new Promise((resolve, reject) => {
  //   resolve("resolved");
  reject("rejected");
});
const p2 = new Promise((resolve, reject) => {
  resolve("resolved");
});
Promise.allSettled([p1, p2]).then((results) => {
  //不管是成功状态还是失败状态，都能获取到
  console.log(results);
});

//example
let promises = ["后盾人", "lisi"].map((name) => {
  return ajax(``);
});
Promise.allSettled(promises).then((values) => {
  let users = values.filter((user) => {
    return user.status == "fulfilled";
  });
  console.log(users);
});
