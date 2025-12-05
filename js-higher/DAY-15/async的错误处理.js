new Promise((resolve, reject) => {
  throw new Error("fail");
}).catch((error) => {
  console.log(error);
});

async function hd() {
  throw new Error("fail");
}
hd().catch((error) => {
  console.log("error" + error);
});

//example
async function hdcms() {
  return ajax(`http://localhost:8888/php/user.php?name=${name}`);
}
hdcms("后盾人")
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log("error" + error);
  });
