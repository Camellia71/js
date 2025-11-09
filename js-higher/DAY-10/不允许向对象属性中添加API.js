"use strict";
const user = {
  uname: "后盾人",
  age: 18,
};
Object.preventExtensions(user); //不能向对象中添加属性了
//判断方法，来判断是否能添加属性
if (Object.isExtensible(user)) {
  user.site = "houdunren.com";
  console.log(user);
}
