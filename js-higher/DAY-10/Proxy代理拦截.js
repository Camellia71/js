//对象代理是对整个对象进行控制
"use strict";
const hd = { uname: "后盾人" };
const proxy = new Proxy(hd, {
  get(obj, property) {
    // console.log(obj);
    return obj[property];
  },
  set(obj, property, value) {
    obj[property] = value;
    return true;
  },
});
console.log(proxy.uname);
proxy.uname = "向军";
console.log(proxy);
