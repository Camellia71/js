let hd = {
  title: "后盾人",
  url: "houdunren.com",
  teacher: {
    uname: "向军",
  },
  //自定义toJSON
  toJSON: function () {
    return {
      title: this.title,
      teacher: this.teacher.uname,
    };
  },
};
let json = JSON.stringify(hd);
console.log(json);

//使用JSON 将数组转化为JSON形式
// let json = JSON.stringify(hd, ["title", "url"], 2);
// JSON.stringify(需要执行操作的对象，保留的属性，格式首行缩进)
// console.log(json);

// let arr = ["后盾人", "hdcms.com"];
// let arrJSon = JSON.stringify(arr, ["title", "url"], 2);
// console.log(arrJSon);
