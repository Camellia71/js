// let hd = {};
// let uname = "title";
// hd[uname] = "后盾人";
// console.log(hd.title);

// let id = 0;
// let hd = {};
// hd[`id-${++id}`] = id;
// hd[`id-${++id}`] = id;
// hd[`id-${++id}`] = id;
// hd[`id-${++id}`] = id;
// hd[`id-${++id}`] = id;
// console.log(hd);

// let lessons = [
//   {
//     title: "FLEX弹性布局",
//     category: "css",
//   },
//   {
//     title: "媒体查询",
//     category: "css",
//   },
//   {
//     title: "MYSQL多表查询随意操作",
//     category: "mysql",
//   },
// ];
// let res = lessons.reduce((obj, cur, index) => {
//   obj[`${cur["category"]}-${index}`] = cur;
//   return obj;
// });
// console.log(JSON.stringify(res, null, 2));

// let hd = Object.assign({ a: 1 }, { b: 2 });
// console.log(hd);

function upload(params) {
  let options = {
    size: 10000,
  };
  options = Object.assign(options, params);
  console.log(JSON.stringify(options, null, 2));
}

upload({ size: 99, type: "jpeg" });
