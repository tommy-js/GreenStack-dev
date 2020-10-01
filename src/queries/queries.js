import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const createUserMutation = gql`
  mutation(
    $username: String!
    $hash: String!
    $salt: String!
    $token: String!
  ) {
    createUser(username: $username, hash: $hash, salt: $salt, token: $token) {
      userId
      username
      money
    }
  }
`;

// May not be needed
const updateNewAccountMutation = gql`
  mutation($userId: ID!, $newaccount: Boolean!) {
    updateNewAccount(userId: $userId, newaccount: $newaccount) {
      userId
    }
  }
`;

const updateUserProgressMutation = gql`
  mutation($id: ID!) {
    updateUserProgress(id: $id) {
      id
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
      title: $title
      ticker: $ticker
      shares: $shares
      gain: $gain
    ) {
      userId
    }
  }
`;

// Replace
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

// Replace
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
    $followerId: ID!
    $followerName: String!
    $username: String!
  ) {
    followUser(
      userId: $userId
      followerId: $followerId
      followerName: $followerName
    ) {
      userId
    }
    followingUser(
      followingId: $userId
      userId: $followerId
      username: $username
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
  mutation($stockId: ID!, $userId: ID!, $title: String!, $ticker: String!) {
    pushStockToWatchlist(
      stockId: $stockId
      ticker: $ticker
      title: $title
      userId: $userId
    ) {
      stockId
      title
      ticker
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
  mutation($userId: ID!, $title: String!, $text: String!) {
    post(userId: $userId, title: $title, text: $text) {
      userId
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
  mutation($tradeId: ID!, $userId: ID!, $username: String!, $text: String!) {
    addCommentTrade(
      tradeId: $tradeId
      userId: $userId
      username: $username
      text: $text
    ) {
      text
      username
      userId
    }
  }
`;

const addCommentStockMutation = gql`
  mutation($stockId: ID!, $userId: ID!, $username: String!, $text: String!) {
    addCommentStock(
      stockId: $stockId
      userId: $userId
      username: $username
      text: $text
    ) {
      username
      text
    }
  }
`;

const newTokenMutation = gql`
  mutation($userId: ID!, $token: String!) {
    newToken(userId: $userId, token: $token) {
      userId
    }
  }
`;

const purchaseStockMutation = gql`
  mutation($userId: ID!, $stockId: ID!, $shares: Int, $money: Float!) {
    updateShares(userId: $userId, stockId: $stockId, shares: $shares) {
      userId
    }
    updateMoney(userId: $userId, money: $money) {
      money
    }
  }
`;

const sellStockMutation = gql`
  mutation($userId: ID!, $stockId: ID!, $shares: Int, $money: Float!) {
    updateShares(userId: $userId, stockId: $stockId, shares: $shares) {
      userId
    }
    updateMoney(userId: $userId, money: $money) {
      money
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
      userId
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

const otherUserQuery = gql`
  query($userId: ID!) {
    user(userId: $userId) {
      userId
      username
      money
      membership
      profileImage
      following {
        userId
        username
      }
      followers {
        id
        followerId
        followerName
        blocked
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
      following {
        userId
        username
      }
      followers {
        id
        followerId
        followerName
        blocked
      }
      stocks {
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

const individualPostQuery = gql`
  query($postId: ID!) {
    post(postId: $postId) {
      userId
      timestamp
      likes
      dislikes
      title
      text
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

const searchUserQuery = gql`
  query($username: String!) {
    searchUser(username: $username) {
      username
      userId
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
  newTokenMutation,
  purchaseStockMutation,
  sellStockMutation,
  distinctUserQuery,
  userQuery,
  stockQuery,
  userLoginQuery,
  queryTradeQuery,
  queryPosts,
  queryToken,
  individualPostQuery,
  searchUserQuery,
  otherUserQuery,
};
