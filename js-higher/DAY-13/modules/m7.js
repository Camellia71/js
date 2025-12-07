export let site = "后盾人";
export function show() {
  return "show function";
}
export class User {
  static render() {
    return "user static render";
  }
}

//或者不在函数/类前边写，统一写在下方
// export { site, show, User };
