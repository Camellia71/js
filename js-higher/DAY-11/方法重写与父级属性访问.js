function User() {}
User.prototype.show = function () {
  console.log("user.uname");
};
User.prototype.site = function () {
  return "后盾人";
};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.show = function () {
  console.log(User.prototype.site() + "admin.show");
};
let hd = new Admin();
hd.show();
