let site = "houdunren.com";
export { site }; //或者在这里使用as进行修改

//默认导出
export default class User {
  static render() {
    return "user static render";
  }
}
