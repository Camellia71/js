let lesson = `
js,200元,300次
php,300.00元,100次
node.js,180元,260次
`;
let reg = /(\d+)(.00)?(?=元)/gi;
lesson = lesson.replace(reg, (v, ...args) => {
  args[1] = args[1] || ".00";
  return args.splice(0, 2).join("");
});
console.log(lesson);
