type Comment = {
  userId: string;
  username: string;
  commentId: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
};

export function returnOrderedComments(comments: Comment[]) {
  comments.sort(function (a, b) {
    return b.timestamp - a.timestamp;
  });
  return comments;
}
