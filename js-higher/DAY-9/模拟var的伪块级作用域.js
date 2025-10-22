for (var i = 1; i <= 3; i++) {
    (function (i) {
        // console.log(i);
        setTimeout(function () {
            console.log(i);
        }, 1000)
    })(i);
};