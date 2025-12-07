let users = `
向军电话：12345678901
后盾人电话：98765432123
`;
let reg = /(?<=\d{7})\d{4}/gi;
users = users.replace(reg, (v) => {
  return "*".repeat(4);
});
console.log(users);
