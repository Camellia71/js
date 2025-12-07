"use strict";
const DATA = Symbol();
const user = {
  //   uname: "后盾人",
  [DATA]: { uname: "" },
  age: 18,
  set uname(value) {
    // console.log(value + "-后盾人"); //访问器的优先级高
    this[DATA].uname = value;
  },
  get uname() {
    return this[DATA].uname;
  },
};
user.uname = "hdcms";
// user.data.uname = "后盾人";
console.log(user);
