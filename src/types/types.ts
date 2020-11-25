export type WatchListItem = {
  stockId: string;
  title: string;
  ticker: string;
  timestamp: number;
};

export type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

export type UserCommentItem = {
  userId: string;
  username: string;
  timestamp: number;
  commentId: string;
  profileImage: string;
  text: string;
  likes: number;
  dislikes: number;
  referenceId: string;
  reference: {
    postId: string;
    text: string;
    username: string;
    profileImage: string;
  };
};

export type PostItem = {
  userId: string;
  postId: string;
  profileImage: string;
  postImage: string;
  username: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  title: string;
  text: string;
  accompaniedURL: string;
  allowComments: boolean;
  allowLikes: boolean;
  comments: [
    {
      userId: string;
      username: string;
      commentId: string;
      timestamp: number;
      text: string;
      likes: number;
      dislikes: number;
      subComments: [
        {
          userId: string;
          commentId: string;
          username: string;
          timestamp: number;
          text: string;
          likes: number;
          dislikes: number;
          parentCommentId: string;
        }
      ];
    }
  ];
};

export type FollowerItem = {
  followerId: string;
  followerName: string;
  blocked: boolean;
};

export type FollowingItem = {
  userId: string;
  username: string;
  bio: string;
};

export type NotificationItem = {
  content: string;
  timestamp: number;
  id: string;
  viewed: boolean;
};

export type ProgressItem = {
  title: string;
  percent: number;
  id: string;
  progressElements: [
    {
      id: string;
      passed: boolean;
    }
  ];
};

export type FeedItem = {
  posts: {
    userId: string;
    postId: string;
    profileImage: string;
    postImage: string;
    username: string;
    timestamp: number;
    likes: number;
    dislikes: number;
    title: string;
    text: string;
    allowLikes: boolean;
    allowComments: boolean;
    comments: [
      {
        userId: string;
        username: string;
        commentId: string;
        timestamp: number;
        text: string;
        likes: number;
        dislikes: number;
        subComments: [
          {
            userId: string;
            commentId: string;
            username: string;
            timestamp: number;
            text: string;
            likes: number;
            dislikes: number;
            parentCommentId: string;
          }
        ];
      }
    ];
  };
  likes: [
    {
      username: string;
      timestamp: number;
      text: string;
      profileImage: string;
      reference: {
        postId: string;
        text: string;
        username: string;
        profileImage: string;
      };
    }
  ];
  comments: [
    {
      username: string;
      timestamp: number;
      text: string;
      profileImage: string;
      reference: {
        postId: string;
        text: string;
        username: string;
        profileImage: string;
      };
    }
  ];
};

export type UserRoute = {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
};

export type CommentItemRemSubComments = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
};

export type CommentItem = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  subComments: [
    {
      userId: string;
      commentId: string;
      username: string;
      timestamp: number;
      text: string;
      likes: number;
      dislikes: number;
      parentCommentId: string;
    }
  ];
};

export type SubCommentItem = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
};
