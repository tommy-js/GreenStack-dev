import { ProgressItem } from "../../types/types";

type Learn = {
  title: string;
  subtitle: string;
  path: string;
  percent: number;
};

export function returnLearn(learn: Learn[], progress: ProgressItem[]) {
  let obj;
  let arr = [...learn];
  for (let i = 0; i < learn.length; i++) {
    obj = {
      title: learn[i].title,
      subtitle: learn[i].subtitle,
      path: learn[i].path,
      percent: progress[i].percent,
    };
    arr[i] = obj;
  }
  return arr;
}
