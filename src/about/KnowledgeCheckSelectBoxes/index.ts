interface Option {
  id: number;
  title: string;
  selected: boolean;
}

export function returnSelected(selected: Option[], id: number) {
  let arr = [...selected];
  let foundArr = arr.find((el: Option) => el.id === id);
  if (foundArr) {
    let ind = arr.indexOf(foundArr);
    let obj = {
      id: id,
      title: arr[ind].title,
      selected: !arr[ind].selected,
    };
    arr[ind] = obj;
    return arr;
  }
}
