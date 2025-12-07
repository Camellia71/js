let arr = [];
// for(let i = 1;i<=3;i++){
//     // arr.push(function() {
//     // return i;
//     // })
//     console.log(i);
// }
// console.log(arr);

for(var i = 1;i<=3;i++) {
    (function(i) {
        arr.push(function() {
            return i;
        })
    })(i);
};
console.log(arr[1]());