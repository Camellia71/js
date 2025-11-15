function User(uname) {
  this.uname = uname;
  this.show = function () {
    console.log(this.uname);
  };
}
let lisi = new User("李四");
let xj = new User("向军");
