import { CommentItem } from "../../types/types";

export function returnSortedComments(comments: CommentItem[]) {
  let coms = [...comments];
  coms.sort(function (a: any, b: any) {
    return b.timestamp - a.timestamp;
  });
  return coms;
}
