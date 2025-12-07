class User {
  //   then(resolve, reject) {}
  //   constructor(name) {
  //     this.name = name;
  //   }
  //   then(resolve, reject) {
  //     let user = ajax(``);
  //     resolve(user);
  //   }
  //   async function get() {
  //   let user = await new User("后盾人");
  //   console.log("houdunren.com");
  // }
  // get();

  async get(name) {
    let user = await ajax(``);
    user.name += "-houdunren.com";
    return user;
  }
}
new User.get("后盾人").then((user) => {
  console.log(user);
});
