//字数控制
const lessons = [
  {
    title: "媒体查询响应式布局1",
    category: "css1",
  },
  {
    title: "媒体查询响应式布局2",
    category: "css2",
  },
  {
    title: "媒体查询响应式布局3",
    category: "css3",
  },
];
let proxy = new Proxy(lessons, {
  get(array, key) {
    // console.log(key);
    const title = array[key].title;
    console.log(title);
    const len = 5;
    array[key].title =
      title.length > len ? title.substr(0, len) + ".".repeat(3) : title;
    return array[key];
  },
});
console.log(JSON.stringify(proxy[1], null, 2));
