//public 公共属性：所有都可以访问
//protecteds  受保护属性：自己及子类可以访问
//private  私有属性：只有自己可以访问并使用
class User {
  #host = "https://www.houdunren.com"; //加#即可
  constructor(uname) {
    this.uname = uname; //先赋值再验证，如果不想关注这个的顺序的话，就再下方check中传递参数uname,并且将check函数内容中的this.uname改为uname
    this.#check(uname);
  }
  set host(url) {
    //不能直接改，所以走访问器进行修改
    if (!/^https?:/i.test(url)) {
      throw new Error("非法网址");
    }
    this.#host = url;
  }
  //私有方法
  #check = () => {
    if (this.uname.length < 5) {
      throw new Error("名字长度不能小于5");
    }
    return true;
  };
}
let hd = new User("后盾人");
hd.host = "https://www.hdcms.com"; //通过访问器进行修改
// hd.#host = "https://www.hdcms.com"; //hd.#host = "https://www.hdcms.com";
// hd.#check(); //Private field '#check' must be declared in an enclosing class
console.log(hd);
