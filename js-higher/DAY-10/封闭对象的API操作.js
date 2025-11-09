"use strict";
const user = {
  uname: "后盾人",
  age: 18,
};
Object.seal(uaer); //封闭对象之后就不能操作任何属性
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user), null, 2));
//判断
if (Object.isSealed(user)) {
  user.site = "houdunren.com";
  delete user.uname;
}
console.log(user);
