function User(uname) {
  this.uname = uname;
  this.show = function () {
    console.log(this.uname);
  };
  //   return this; //系统会自动return this
}
let xj = new User("向军");
console.log(xj);
xj.show();
