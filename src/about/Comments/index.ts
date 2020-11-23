import { CommentItem } from "../../types/types";

export function returnOrder(comments: CommentItem[]) {
  let arr = [...comments];
  arr.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });
  return arr;
}
