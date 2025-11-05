// let o = {};
// console.log(o);

// let o = new Object();
// o.name = "后盾人";
// console.log(o);

let n = new Number(1);
console.log(n + 3);

let s = new String("houdunren");
console.log(s);

let b = new Boolean(true);
console.log(b);

console.log(s.valueOf());

let d = new Date();
console.log(d.valueOf());

let r = new RegExp("\\d+");
console.log(r.valueOf());

//构造函数创建函数
// function hd() {}
let cms = new Function(
  "uname",
  `
    this.uname = uname;
    this.show = function() {
    console.log(this.uname+'是通过构造函数创建的')
    }
    `
);
let xj = new cms("向军");
xj.show();
