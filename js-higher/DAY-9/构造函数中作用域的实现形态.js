function Hd() {
    let n = 1;
    this.sum = function () {
        console.log((++n));
    };
    // function sum() {
    //     console.log(++n);
    // }
    // return {
    //     sum: sum
    // };
}
let a = new Hd();
// console.log(a);
a.sum();
a.sum();