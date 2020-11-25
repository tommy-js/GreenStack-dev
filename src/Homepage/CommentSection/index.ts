import { CommentItem } from "../../types/types";

export function sortComments(comments: CommentItem[]) {
  comments.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });
  return comments;
}
