//函数可以访问到其他函数作用域中变量
let arr = [1,23,4,5,6,7,34,45,21,12,47];
function between(a,b) {
    return function(v) {
        return v>=a &&v<=b;
    }
}
console.log(arr.filter(between(2,5)));