//函数
async function get(name) {
  return await ajax(`http://localhost:8888/php/user.php?name=${name}`);
}
get("后盾人").then((user) => {
  console.log(user);
});

//函数表达式
let get = async function (name) {
  return await ajax(`http://localhost:8888/php/user.php?name=${name}`);
};
get("后盾人").then((user) => {
  console.log(user);
});

//对象
let hd = {
  async get() {
    return await ajax(`http://localhost:8888/php/user.php?name=${name}`);
  },
};
hd.get("后盾人").then((user) => {
  console.log(user);
});

//类
class User {
  async get(name) {
    return await ajax(`http://localhost:8888/php/user.php?name=${name}`);
  }
}
new User().get("后盾人").then((user) => {
  console.log(user);
});
