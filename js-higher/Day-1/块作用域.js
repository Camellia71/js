{
    let web = (window.web = {});
    web.web = "hdcms";
    let url = "hdcms.com";
    let site = "后盾人";
    web.getUrl = function () {
        return url
    }
}
//之前是使用立即执行函数 创造一个块作用域