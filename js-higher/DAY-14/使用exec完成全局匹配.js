function search(string, reg) {
  let result = [];
  while ((res = reg.exec(string))) {
    result.push(res);
  }
  //   console.log(result);
  return result;
}
let matchs = search(document.body.innerHTML, /<(h[1-6])>[\s\S]+<\/\1>/gi);
console.log(matchs);
