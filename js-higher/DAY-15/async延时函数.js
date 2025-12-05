async function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
async function show() {
  for (const user of ["后盾人", "向军"]) {
    await sleep();
    console.log(user);
  }
}
