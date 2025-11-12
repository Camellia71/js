let hd = {
  title: "后盾人",
  url: "houdunren.com",
  teacher: {
    uname: "向军",
  },
};
let json = JSON.stringify(hd, null, 2);
console.log(json);

let obj = JSON.parse(json, (key, value) => {
  //   console.log(value);
  if (key == title) {
    value = "[后盾]-" + value;
  }
  return value;
});
console.log(obj);
