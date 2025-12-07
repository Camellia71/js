let tel = "2030/12/14";
console.log(tel.replace(/\//g, "-"));

let hd = "(010)99999999 (020)88888888";
let reg = /\((d{3,4})\)(\d{7,8})/;
console.log(hd.replace(reg, "$1-$2"));
//一个$ 代表一个原子组
//$`  代表匹配内容的左边
//$'  代表匹配内容的右边
//$&  代表匹配的内容
let hs = "%后盾人=";
console.log(hs.replace(/后盾人/, "$`")); //%%=
console.log(hs.replace(/后盾人/, "$'")); //%==
