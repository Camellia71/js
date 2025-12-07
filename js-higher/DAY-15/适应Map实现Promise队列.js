function query(num) {
  let promise = Promise.resolve();
  num.map((v) => {
    promise = promise.then((_) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(v);
          resolve();
        }, 1000);
      });
    });
  });
}
query([1, 2, 3, 4, 5, 6]);

//example
function p1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("p1");
      resolve();
    }, 1000);
  });
}
function p2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("p2");
      resolve();
    }, 1000);
  });
}
function queue(num) {
  let promise = Promise.resolve();
  num.map((v) => {
    promise = promise.then((_) => {
      return v();
    });
  });
}
queue([p1, p2]);
