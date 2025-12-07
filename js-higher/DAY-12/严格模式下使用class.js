"use strict";
function User() {}
User.prototype.show = function () {
  function test() {
    console.log(this);
  }
  test();
};
let u = new User();
u.show(); //undefined

//默认运行在严格模式
class Hd {
  show() {
    function test() {
      console.log(this);
    }
    test();
  }
}
let h = new Hd();
h.show();
