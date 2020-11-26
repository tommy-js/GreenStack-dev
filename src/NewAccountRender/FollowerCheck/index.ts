type FollowerCheckItem = {
  name: string;
  text: string;
  classification: string;
  selected: boolean;
  index: number;
};

export function selectedFollower(
  followers: FollowerCheckItem[],
  index: number
) {
  let obj = followers[index];
  let follow = [...followers];
  follow.map((el: FollowerCheckItem) => (el.selected = false));
  obj = {
    ...followers[index],
    selected: true,
  };
  follow[index] = obj;
  return follow;
}
