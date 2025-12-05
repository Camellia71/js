// // 并行执行（推荐）
// async function getMultipleData() {
//   const [data1, data2] = await Promise.all([
//     fetch("api/data1").then((r) => r.json()),
//     fetch("api/data2").then((r) => r.json()),
//   ]);
//   return { data1, data2 };
// }

// // 或者使用async函数
// async function getMultipleData() {
//   const promise1 = fetch("api/data1").then((r) => r.json());
//   const promise2 = fetch("api/data2").then((r) => r.json());

//   const [data1, data2] = await Promise.all([promise1, promise2]);
//   return { data1, data2 };
// }

function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("houdunren");
    }, 2000);
  });
}
function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("houdunren");
    }, 2000);
  });
}
//1
// async function hd() {
//有等待时间
//   let h1 = await p1();
//   console.log(h1);
//   let h2 = await p2();
//   console.log(h2);

//   let h1 = p1();
//   let h2 = p2();
//   let h1value = await h1;
//   let h2value = await h2;
//   console.log(h1value, h2value);
// }
// hd();
//2
async function hd() {
  let res = await Promise.all([p1(), p2()]);
  console.log(res);
}
hd();
