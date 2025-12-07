let lesson = {
    site: "后盾人",
    lists: ["js", "css", "mysql"],
    show: function () {
        // console.log(this.site);
        const self = this;
        return this.lists.map(function (value) {
            // console.log(this);  //window
            // console.log(self.lists);
            return `${self.site}-${value}`;
        }, this);  //map 的第二个参数就是指定回调时的this值
    }
}
console.log(lesson.show());         