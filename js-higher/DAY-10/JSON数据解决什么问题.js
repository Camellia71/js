//以往使用 sml, 现在使用JSON
let data = {
  uname: "后盾人",
  data: {
    title: "php",
  },
};
let json = JSON.stringify(data);
console.log(json);

let phpJson = `{"uname":"\u540e\u76fe\u4eba","url":"hdcms"}`;
// console.log(JSON.parse(phpJson));
let obj = JSON.parse(phpJson);
console.log(obj.uname);
