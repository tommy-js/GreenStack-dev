import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const createUserMutation = gql`
  mutation(
    $userId: ID!
    $username: String!
    $hash: String!
    $salt: String!
    $token: String!
    $money: Float!
    $darkmode: Boolean!
    $invisible: Boolean!
    $allowCommentsOnTrades: Boolean!
    $timestamp: ID!
    $id: ID!
    $content: String!
    $viewed: Boolean!
    $prog1: Int!
    $prog2: Int!
    $prog3: Int!
  ) {
    createUser(
      userId: $userId
      username: $username
      hash: $hash
      salt: $salt
      token: $token
      money: $money
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnTrades: $allowCommentsOnTrades
      timestamp: $timestamp
      id: $id
      content: $content
      viewed: $viewed
      prog1: $prog1
      prog2: $prog2
      prog3: $prog3
    ) {
      userId
      username
      money
    }
  }
`;

const updateNewAccountMutation = gql`
  mutation($userId: ID!, $newaccount: Boolean!) {
    updateNewAccount(userId: $userId, newaccount: $newaccount) {
      userId
    }
  }
`;

const updateUserProgressMutation = gql`
  mutation($id: ID!, $percent: Int!) {
    updateUserProgress(id: $id, percent: $percent) {
      id
      percent
    }
  }
`;

const setProfileImageMutation = gql`
  mutation($userId: ID!, $profileImage: String!) {
    setProfileImage(userId: $userId, profileImage: $profileImage) {
      userId
    }
  }
`;

const pushTradeMutation = gql`
  mutation(
    $userId: ID!
    $username: String!
    $tradeId: ID!
    $price: Float!
    $timestamp: ID!
    $title: String!
    $ticker: String!
    $shares: Int!
    $gain: Float!
  ) {
    pushTrade(
      userId: $userId
      username: $username
      tradeId: $tradeId
      price: $price
      timestamp: $timestamp
      title: $title
      ticker: $ticker
      shares: $shares
      gain: $gain
    ) {
      userId
    }
  }
`;

const pushSharesToUserMutation = gql`
  mutation($shareId: ID!, $shares: Number!, $stockId: ID!) {
    pushSharesToUser(shareId: $shareId, shares: $shares, stockId: $stockId) {
      shares
    }
  }
`;

const queryTradeQuery = gql`
  query($tradeId: ID!) {
    getTrade(tradeId: $tradeId) {
      tradeId
      ticker
      title
      userId
      username
      price
      type
      timestamp
      shares
      gain
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const updateLikesMutation = gql`
  mutation($commentId: ID!, $likes: ID!) {
    updateLikesComment(commentId: $commentId, likes: $likes) {
      commentId
      likes
    }
  }
`;

const updateDislikesMutation = gql`
  mutation($commentId: ID!, $likes: ID!) {
    updateDislikesComment(commentId: $commentId, dislikes: $dislikes) {
      commentId
      dislikes
    }
  }
`;

const deleteCommentUserMutation = gql`
  mutation($userId: ID!, $commentId: ID!) {
    deleteCommentUser(userId: $userId, commentId: $commentId) {
      commentId
      userId
    }
  }
`;

const pushCommentMutation = gql`
  mutation($id: ID!) {
    pushComment(id: $id) {
      id
    }
  }
`;

const dropNotificationMutation = gql`
  mutation($userId: ID!, $id: ID!) {
    dropNotification(userId: $userId, id: $id) {
      id
    }
  }
`;

const deleteCommentStockMutation = gql`
  mutation($stockId: ID!, $commentId: ID!) {
    deleteCommentStock(stockId: $stockId, commentId: $commentId) {
      stockId
      commentId
    }
  }
`;

const updateUserSettingsMutation = gql`
  mutation(
    $userId: ID!
    $darkmode: Boolean!
    $invisible: Boolean!
    $allowCommentsOnTrades: Boolean!
  ) {
    updateUserSettings(
      userId: $userId
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnTrades: $allowCommentsOnTrades
    ) {
      darkmode
      invisible
      allowCommentsOnTrades
    }
  }
`;

const pushFollowerToUserMutation = gql`
  mutation(
    $userId: ID!
    $id: ID!
    $followerId: ID!
    $followerName: String!
    $blocked: Boolean!
  ) {
    followUser(
      userId: $userId
      id: $id
      followerId: $followerId
      followerName: $followerName
      blocked: $blocked
    ) {
      userId
    }
  }
`;

const unfollowUserMutation = gql`
  mutation($userId: ID!, $followerId: ID!) {
    unfollowUser(userId: $userId, followerId: $followerId) {
      userId
    }
  }
`;

const pushStockToWatchlistMutation = gql`
  mutation(
    $stockId: ID!
    $timestamp: Int!
    $userId: ID!
    $title: String!
    $ticker: String!
  ) {
    pushStockToWatchlist(
      stockId: $stockId
      timestamp: $timestamp
      ticker: $ticker
      title: $title
      userId: $userId
    ) {
      stockId
      title
      ticker
      timestamp
    }
  }
`;

const removeStockFromWatchlistMutation = gql`
  mutation($stockId: ID!, $userId: ID!) {
    removeStockFromWatchlist(stockId: $stockId, userId: $userId) {
      stockId
      userId
    }
  }
`;

const blockUserMutation = gql`
  mutation($id: ID!, $blocked: Boolean!) {
    blockUser(id: $id, blocked: $blocked) {
      id
      blocked
    }
  }
`;

const postMutation = gql`
  mutation(
    $userId: ID!
    $postId: ID!
    $likes: Int!
    $dislikes: Int!
    $timestamp: Int!
    $title: String!
    $text: String!
  ) {
    post(
      userId: $userId
      postId: $postId
      likes: $likes
      dislikes: $dislikes
      timestamp: $timestamp
      title: $title
      text: $text
    ) {
      userId
      postId
      likes
      dislikes
      timestamp
      title
      text
    }
  }
`;

const dislikeStockMutation = gql`
  mutation($commentId: ID!, $dislikes: Int!) {
    dislikeStock(commentId: $commentId, dislikes: $dislikes) {
      dislikes
    }
  }
`;

const likeStockMutation = gql`
  mutation($commentId: ID!, $likes: Int!) {
    likeStock(commentId: $commentId, likes: $likes) {
      likes
    }
  }
`;

const updateMoneyMutation = gql`
  mutation($userId: ID!, $money: Float!) {
    updateMoney(userId: $userId, money: $money) {
      userId
      money
    }
  }
`;

const updateUserNotificationsViewedMutation = gql`
  mutation($id: ID!) {
    updateUserNotificationsViewed(id: $id) {
      id
    }
  }
`;

const addCommentTradeMutation = gql`
  mutation(
    $tradeId: ID!
    $userId: ID!
    $username: String!
    $text: String!
    $timestamp: Int!
  ) {
    addCommentTrade(
      tradeId: $tradeId
      userId: $userId
      username: $username
      text: $text
      timestamp: $timestamp
    ) {
      text
      username
      timestamp
      userId
    }
  }
`;

const addCommentStockMutation = gql`
  mutation(
    $stockId: ID!
    $userId: ID!
    $username: String!
    $timestamp: Int!
    $text: String!
  ) {
    addCommentStock(
      stockId: $stockId
      userId: $userId
      username: $username
      timestamp: $timestamp
      text: $text
    ) {
      username
      timestamp
      text
    }
  }
`;

const userLoginQuery = gql`
  query($username: String!) {
    userLogin(username: $username) {
      username
      userId
      hash
    }
  }
`;

const queryToken = gql`
  query($token: String!) {
    token(token: $token) {
      token
    }
  }
`;

const distinctUserQuery = gql`
  query($username: String!) {
    specUser(username: $username) {
      username
      userId
    }
  }
`;

const userQuery = gql`
  query($userId: ID!) {
    user(userId: $userId) {
      userId
      username
      money
      newaccount
      darkmode
      membership
      invisible
      allowCommentsOnTrades
      profileImage
      followed {
        followerId
        followerName
      }
      followers {
        id
        followerId
        followerName
        blocked
      }
      stocks {
        stockId
        ticker
        name
        about
        creation
        prediction
        comments {
          userId
          username
          timestamp
          text
          likes
          dislikes
        }
      }
      shares {
        stockId
        shareId
        shares
      }
      trades {
        price
        tradeId
        timestamp
        title
        ticker
        shares
        gain
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
      watchlist {
        stockId
        title
        ticker
        timestamp
      }
      notifications {
        content
        timestamp
        id
        viewed
      }
      progress {
        title
        id
        percent
      }
    }
  }
`;

const stockQuery = gql`
  query($stockId: ID!) {
    stock(stockId: $stockId) {
      stockId
      ticker
      name
      about
      creation
      prediction
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const queryPosts = gql`
  query($userId: ID!) {
    getPosts(userId: $userId) {
      userId
      postId
      likes
      dislikes
      timestamp
      title
      text
    }
  }
`;

export {
  createUserMutation,
  addCommentTradeMutation,
  updateUserNotificationsViewedMutation,
  updateLikesMutation,
  addCommentStockMutation,
  updateDislikesMutation,
  updateUserProgressMutation,
  deleteCommentUserMutation,
  dropNotificationMutation,
  pushCommentMutation,
  deleteCommentStockMutation,
  updateUserSettingsMutation,
  pushFollowerToUserMutation,
  unfollowUserMutation,
  dislikeStockMutation,
  likeStockMutation,
  postMutation,
  pushTradeMutation,
  blockUserMutation,
  updateMoneyMutation,
  setProfileImageMutation,
  pushSharesToUserMutation,
  pushStockToWatchlistMutation,
  removeStockFromWatchlistMutation,
  distinctUserQuery,
  userQuery,
  stockQuery,
  userLoginQuery,
  queryTradeQuery,
  queryPosts,
  queryToken,
};
