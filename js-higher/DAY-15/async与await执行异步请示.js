async function get(name) {
  let host = ``;
  let user = await ajax(`${host}/user.php?name = ${name}`);
  let lessons = await ajax(`${host}/housunren.php?id=${user.id}`);
  console.log(lessons);
}
get("后盾人");
