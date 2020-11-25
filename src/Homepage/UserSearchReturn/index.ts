export function returnUserList(list: any, query: string) {
  let rmAt = query.slice(1, query.length);
  let res = list.filter((el: any) => el.username.includes(rmAt));
  return res;
}
