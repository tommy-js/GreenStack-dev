export function returnStyles(argument: boolean) {
  let obj;
  if (argument === true)
    obj = {
      display: "block",
    };
  else
    obj = {
      display: "none",
    };
  return obj;
}
