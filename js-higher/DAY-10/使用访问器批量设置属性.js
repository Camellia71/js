"use strict";
const web = {
  uname: "后盾人",
  url: "houdunren.com",
  get site() {
    //读取
    return `${this.uname}的网址是${this.url}`;
  },
  set site(value) {
    //赋值
    // console.log(value);
    // value.split(",");
    [this.uname, this.url] = value.split(",");
  },
};
// web.uname = "hdcms";
// web.url = "www.hdcms.com";
web.site = "hdcms,www.hdcms.com";
console.log(web.site);
