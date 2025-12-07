function query(num) {
  num.reduce((promise, n) => {
    return promise.then((_) => {
      return new Promise((resolve) => {
        console.log(n);
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    });
  }, Promise.resolve());
}
query([1, 2, 3, 4]);
