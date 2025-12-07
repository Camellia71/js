// Promise.resolve
// console.log(Promise.resolve("1")); //默认是resolved状态
// Promise.resolve("后盾人").then((value) => {
//   console.log(value);
// });
Promise.hd = function (value) {
  return new Promise((resolve) => {
    resolve(value);
  });
};
Promise.hd("后盾人").then((value) => {
  console.log(value);
});
function query(name) {
  const cache = query.cache || (query.cache = new Map());
  if (cache.has(name)) {
    console.log("走缓存了");
    return Promise.resolve(cache.get(name));
  }
  return ajax(`http://localhost:8888/php/user.php?name=${name}`).then(
    (user) => {
      return user;
    }
  );
}
query("后盾人").then((user) => {
  //只有这一次没走缓存，以后的都走缓存，加定时器是为了给他一个反应时间
  cache.set(name, user);
  //   console.log(user);
  return user;
});
setTimeout(() => {
  query("后盾人").then((user) => {
    console.log(user);
  });
}, 1000);
setTimeout(() => {
  query("后盾人").then((user) => {
    console.log(user);
  });
}, 1000);
