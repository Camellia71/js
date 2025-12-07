let hd = {
  show() {
    console.log("后盾人");
  },
  render() {
    console.log("hd.render");
  },
};
hd.__proto__.render = function () {
  console.log("向军");
};
// console.dir(hd);
hd.render();
