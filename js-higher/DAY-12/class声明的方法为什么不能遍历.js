function Hd() {}
Hd.prototype.show = function () {};
console.log(
  JSON.stringify(Object.getOwnPropertyDescriptor(Hd.prototype, "show", null, 2))
); //"enumerable":true
let h = new Hd();
for (const key in h) {
  console.log(key);
}

class User {
  constructor(uname) {
    this.uname = uname;
  }
  show() {}
}
console.log(
  JSON.stringify(
    Object.getOwnPropertyDescriptor(User.prototype, "show", null, 2)
  )
); //"enumerable":false
let u = new User("向军");
for (const key in u) {
  console.log(key); //uname 没有show， 因为class中的方法不能被遍历，只能遍历属性key
}
