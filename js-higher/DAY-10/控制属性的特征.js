"use strict";
const user = {
  uname: "向军",
  age: 18,
};
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, "age")));
//批量设置
Object.defineProperties(user, {
  uname: {
    value: "后盾人",
    writable: true,
    enumerable: false,
    configurable: false,
  },
  age: {
    value: "后盾人",
    writable: true,
    enumerable: false,
    configurable: false,
  },
});
console.log(Object.keys(user));
//单个设置
// Object.defineProperty(user, "uname", {
//   value: "后盾人",
//   writable: true,
//   enumerable: true,
//   configurable: false, //禁止删除，禁止重新配置
// });
// console.log(user.uname);
// user.uname = "向军";
// console.log(user.uname);

// console.log(Object.keys(user));
// for (const key in user) {
//   console.log(key);
// }

// delete user.uname;
// console.log(user);
