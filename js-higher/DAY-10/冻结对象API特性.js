"use strict";
const user = {
  uname: "后盾人",
  age: 18,
};
Object.freeze(user);
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user), null, 2));
// user.site = "houdunren.com";
// delete user.uname;
console.log(Object.isFrozen(user));
