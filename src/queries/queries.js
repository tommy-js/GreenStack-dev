import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const createUserMutation = gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      userId
      username
      money
      token
    }
  }
`;

// May not be needed
const updateNewAccountMutation = gql`
  mutation($token: String!, $newaccount: Boolean!) {
    updateNewAccount(token: $token, newaccount: $newaccount) {
      newaccount
    }
  }
`;

const pushCommentNestMutation = gql`
  mutation($token: String!, $text: String!, $postId: ID!, $commentId: ID!) {
    pushCommentNest(
      token: $token
      text: $text
      postId: $postId
      commentId: $commentId
    ) {
      username
    }
  }
`;

const updateUserProgressMutation = gql`
  mutation($id: ID!, $specId: ID!, $increment: Int!) {
    updateUserProgress(id: $id, specId: $specId, increment: $increment) {
      id
    }
  }
`;

const setProfileImageMutation = gql`
  mutation($token: String!, $profileImage: String!) {
    setProfileImage(token: $token, profileImage: $profileImage) {
      profileImage
    }
  }
`;

const updateDarkModeMutation = gql`
  mutation($token: String!) {
    updateDarkMode(token: $token) {
      token
    }
  }
`;

const updateAllowCommentsMutation = gql`
  mutation($token: String!) {
    updateAllowComments(token: $token) {
      token
    }
  }
`;

const updateUserProfileImageMutation = gql`
  mutation($token: String!, $image: String!) {
    updateUserProfileImage(token: $token, image: $image) {
      username
    }
  }
`;

const updateInvisibleMutation = gql`
  mutation($token: String!) {
    updateInvisible(token: $token) {
      token
    }
  }
`;

const saveSettingsMutation = gql`
  mutation(
    $token: String!
    $experience: Int!
    $education: Int!
    $motivations: Int!
  ) {
    saveSettings(
      token: $token
      experience: $experience
      education: $education
      motivations: $motivations
    ) {
      experience
    }
  }
`;

const savePreferredCommentaryMutation = gql`
  mutation($token: String!, $commentaryStyle: Int!) {
    savePreferredCommentary(token: $token, commentaryStyle: $commentaryStyle) {
      username
    }
    saveUserAsOld(token: $token) {
      username
    }
  }
`;

const pushTradeMutation = gql`
  mutation(
    $token: String!
    $tradeId: ID!
    $price: Float!
    $title: String!
    $ticker: String!
    $shares: Int!
    $gain: Float!
  ) {
    pushTrade(
      token: $token
      tradeId: $tradeId
      price: $price
      title: $title
      ticker: $ticker
      shares: $shares
      gain: $gain
    ) {
      shares
    }
  }
`;

// Replace
const pushSharesToUserMutation = gql`
  mutation(
    $shareId: ID!
    $token: ID!
    $shares: Int!
    $title: String!
    $stockId: ID!
  ) {
    pushSharesToUser(
      shareId: $shareId
      shares: $shares
      title: $title
      stockId: $stockId
      token: $token
    ) {
      stocks {
        stockId
      }
    }
  }
`;

const updateNewPortfolioMutation = gql`
  mutation($token: String!, $stockId: ID!, $title: String!, $ticker: String!) {
    updateNewPortfolio(token: $token) {
      username
    }
    pushStockToWatchlist(
      token: $token
      stockId: $stockId
      title: $title
      ticker: $ticker
    ) {
      username
    }
  }
`;

const setBioMutation = gql`
  mutation($token: ID!, $bio: String!) {
    setBio(token: $token, bio: $bio) {
      bio
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
  mutation($token: String!, $commentId: ID!) {
    deleteCommentUser(token: $token, commentId: $commentId) {
      commentId
    }
  }
`;

const pushCommentPostMutation = gql`
  mutation(
    $userId: ID!
    $content: String!
    $token: String!
    $text: String!
    $postId: ID!
    $taggedUsers: [String]!
  ) {
    pushCommentPost(token: $token, text: $text, postId: $postId) {
      username
    }
    pushUserNotifications(userId: $userId, content: $content) {
      username
    }
    pushMultiUserNotifications(taggedUsers: $taggedUsers, text: $text) {
      username
    }
    comment(token: $token, postId: $postId, text: $text) {
      username
    }
  }
`;

const pushCommentTutorialMutation = gql`
  mutation($id: ID!, $text: String!, $token: String!, $taggedUsers: [String]!) {
    pushCommentTutorial(id: $id, text: $text, token: $token) {
      id
    }
    pushMultiUserNotifications(taggedUsers: $taggedUsers, text: $text) {
      username
    }
  }
`;

const pushCommentStockMutation = gql`
  mutation(
    $token: String!
    $text: String!
    $stockId: ID!
    $taggedUsers: [String]!
  ) {
    pushCommentStock(token: $token, text: $text, stockId: $stockId) {
      text
    }
    pushCommentUser(token: $token, text: $text) {
      text
    }
    pushMultiUserNotifications(taggedUsers: $taggedUsers, text: $text) {
      username
    }
  }
`;

const pushStockToUserMutation = gql`
  mutation($token: String!, $stockId: ID!, $shares: Int!) {
    pushStockToUser(token: $token, stockId: $stockId, shares: $shares) {
      username
    }
  }
`;

const pushCommentTradeMutation = gql`
  mutation($token: String!, $text: String!, $stockId: ID!) {
    pushCommentTrade(token: $token, text: $text, stockId: $stockId) {
      text
    }
    pushCommentUser(token: $token, text: $text) {
      text
    }
  }
`;

const pushUserNotificationsMutation = gql`
  mutation($content: String!, $userId: String!) {
    pushUserNotifications(content: $content, userId: $userId) {
      username
    }
  }
`;

const dropNotificationMutation = gql`
  mutation($token: String!, $id: ID!) {
    dropNotification(token: $token, id: $id) {
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
    $allowCommentsOnPosts: Boolean!
  ) {
    updateUserSettings(
      userId: $userId
      darkmode: $darkmode
      invisible: $invisible
      allowCommentsOnPosts: $allowCommentsOnPosts
    ) {
      darkmode
      invisible
      allowCommentsOnPosts
    }
  }
`;

const pushFollowerToUserMutation = gql`
  mutation($token: String!, $followId: ID!, $followName: String!) {
    followUser(token: $token, followId: $followId, followName: $followName) {
      username
    }
  }
`;

const unfollowUserMutation = gql`
  mutation($token: String!, $followerId: ID!) {
    unfollowUser(token: $token, followerId: $followerId) {
      userId
    }
  }
`;

const pushStockToWatchlistMutation = gql`
  mutation($stockId: ID!, $token: String!, $title: String!, $ticker: String!) {
    pushStockToWatchlist(
      stockId: $stockId
      ticker: $ticker
      title: $title
      token: $token
    ) {
      username
    }
  }
`;

const removeStockFromWatchlistMutation = gql`
  mutation($stockId: ID!, $token: String!) {
    removeStockFromWatchlist(stockId: $stockId, token: $token) {
      username
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
    $token: String!
    $title: String!
    $text: String!
    $postImage: String!
    $accompaniedURL: String!
    $allowComments: Boolean!
    $allowLikes: Boolean!
    $taggedUsers: [String!]!
  ) {
    post(
      token: $token
      title: $title
      postImage: $postImage
      text: $text
      accompaniedURL: $accompaniedURL
      allowComments: $allowComments
      allowLikes: $allowLikes
    ) {
      username
    }
    pushMultiUserNotifications(taggedUsers: $taggedUsers, text: $text) {
      username
    }
  }
`;

const dislikeStockMutation = gql`
  mutation(
    $token: String!
    $text: String!
    $style: String!
    $commentId: ID!
    $dislikes: Int!
  ) {
    dislikeStock(commentId: $commentId, dislikes: $dislikes) {
      stockId
    }
  }
`;

const likeStockMutation = gql`
  mutation(
    $token: String!
    $text: String!
    $style: String!
    $commentId: ID!
    $likes: Int!
  ) {
    likeStock(commentId: $commentId, likes: $likes) {
      stockId
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
  mutation($tradeId: ID!, $text: String!, $token: String!) {
    addCommentTrade(text: $text) {
      text
    }
  }
`;

const addCommentStockMutation = gql`
  mutation($stockId: ID!, $token: String!, $text: String!) {
    addCommentStock(stockId: $stockId, token: $token, text: $text) {
      title
    }
  }
`;

const newTokenMutation = gql`
  mutation($token: String!, $newToken: String!) {
    newToken(token: $token, newToken: $newToken) {
      token
    }
  }
`;

const purchaseStockMutation = gql`
  mutation($token: String!, $stockId: ID!, $shares: Int, $money: Float!) {
    updateShares(token: $token, stockId: $stockId, shares: $shares) {
      userId
    }
    updateMoney(token: $token, money: $money) {
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

const likeCommentMutation = gql`
  mutation($postId: ID!, $commentId: ID!) {
    likeComment(postId: $postId, commentId: $commentId) {
      username
    }
  }
`;

const dislikeCommentMutation = gql`
  mutation($postId: ID!, $commentId: ID!) {
    dislikeComment(postId: $postId, commentId: $commentId) {
      username
    }
  }
`;

const likeSubCommentMutation = gql`
  mutation($postId: ID!, $commentId: ID!, $parentCommentId: ID!) {
    likeSubComment(
      postId: $postId
      commentId: $commentId
      parentCommentId: $parentCommentId
    ) {
      username
    }
  }
`;

const dislikeSubCommentMutation = gql`
  mutation($postId: ID!, $commentId: ID!, $parentCommentId: ID!) {
    dislikeSubComment(
      postId: $postId
      commentId: $commentId
      parentCommentId: $parentCommentId
    ) {
      username
    }
  }
`;

const likePostMutation = gql`
  mutation(
    $userId: ID!
    $token: String!
    $content: String!
    $likeText: String!
    $postId: ID!
  ) {
    likePost(postId: $postId) {
      username
    }
    pushUserNotifications(userId: $userId, content: $content) {
      username
    }
    postLike(token: $token, postId: $postId, text: $likeText) {
      username
    }
  }
`;

const dislikePostMutation = gql`
  mutation($userId: ID!, $content: String!, $postId: String!) {
    dislikePost(postId: $postId) {
      username
    }
    pushUserNotifications(userId: $userId, content: $content) {
      username
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

const userCommentLookup = gql`
  query($username: String!) {
    specUser(username: $username) {
      username
      userId
      bio
      profileImage
    }
  }
`;

const otherUserQuery = gql`
  query($userId: ID!) {
    altUser(userId: $userId) {
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
        followerId
        followerName
        blocked
      }
      posts {
        userId
        profileImage
        postId
        username
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        allowComments
        allowLikes
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
        reference {
          postId
          text
          username
          profileImage
        }
      }
      likes {
        userId
        username
        profileImage
        likeId
        timestamp
        text
        reference {
          postId
          text
          username
          profileImage
        }
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

const nonTokenModifyUserQuery = gql`
  query($token: String!) {
    noTokenMod(token: $token) {
      userId
      username
      bio
      money
      newUser {
        newLog
        newPortfolio
      }
      darkmode
      membership
      invisible
      allowCommentsOnPosts
      profileImage
      token
      following {
        userId
        username
      }
      followers {
        followerId
        followerName
        blocked
      }
      stocks {
        stockId
        title
        shares
        color
        ticker
      }
      posts {
        userId
        postId
        profileImage
        username
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        allowComments
        allowLikes
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
        reference {
          postId
          text
          username
          profileImage
        }
      }
      likes {
        userId
        username
        profileImage
        likeId
        timestamp
        text
        reference {
          postId
          text
          username
          profileImage
        }
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
        progressElements {
          id
          passed
        }
      }
    }
  }
`;

const userProgressQuery = gql`
  query($token: String!) {
    user(token: $token) {
      progress {
        title
        id
        percent
        progressElements {
          id
          passed
        }
      }
    }
  }
`;

const userQuery = gql`
  query($token: String!) {
    user(token: $token) {
      userId
      username
      bio
      money
      newUser {
        newLog
        newPortfolio
      }
      darkmode
      membership
      invisible
      allowCommentsOnPosts
      profileImage
      token
      following {
        userId
        username
      }
      followers {
        followerId
        followerName
        blocked
      }
      stocks {
        stockId
        title
        shares
        color
        ticker
      }
      posts {
        userId
        postId
        profileImage
        username
        timestamp
        likes
        dislikes
        title
        text
        accompaniedURL
        allowLikes
        allowComments
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
        }
      }
      comments {
        userId
        username
        timestamp
        text
        likes
        dislikes
        reference {
          postId
          text
          username
          profileImage
        }
      }
      likes {
        userId
        username
        profileImage
        likeId
        timestamp
        text
        reference {
          postId
          text
          username
          profileImage
        }
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
        progressElements {
          id
          passed
        }
      }
    }
  }
`;

const stockQuery = gql`
  query($stockId: ID!) {
    stock(stockId: $stockId) {
      stockId
      ticker
      title
      description
      country
      sector
      comments {
        userId
        commentId
        username
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

const getStocksQuery = gql`
  query {
    getStocks {
      stockId
      ticker
      title
      description
      country
      sector
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
      profileImage
      postId
      likes
      dislikes
      timestamp
      title
      text
      accompaniedURL
    }
  }
`;

const individualPostQuery = gql`
  query($postId: ID!) {
    post(postId: $postId) {
      userId
      timestamp
      profileImage
      postId
      likes
      dislikes
      title
      text
      accompaniedURL
      allowLikes
      allowComments
      comments {
        userId
        commentId
        username
        timestamp
        text
        likes
        dislikes
        subComments {
          userId
          commentId
          username
          timestamp
          text
          likes
          dislikes
          parentCommentId
        }
      }
    }
  }
`;

const searchQuery = gql`
  query($argument: String!) {
    searchUser(argument: $argument) {
      username
      profileImage
      userId
      bio
    }
    searchStock(argument: $argument) {
      title
      ticker
      stockId
      description
      country
    }
  }
`;

const returnFeedQuery = gql`
  query($token: String!) {
    returnFollowerFeed(token: $token) {
      posts {
        userId
        postId
        profileImage
        postImage
        username
        timestamp
        likes
        dislikes
        title
        text
        allowLikes
        allowComments
        comments {
          userId
          username
          commentId
          timestamp
          text
          likes
          dislikes
          subComments {
            userId
            commentId
            username
            timestamp
            text
            likes
            dislikes
            parentCommentId
          }
        }
      }
      likes {
        username
        timestamp
        text
        profileImage
        reference {
          postId
          text
          username
          profileImage
        }
      }
      comments {
        username
        timestamp
        text
        profileImage
        reference {
          postId
          text
          username
          profileImage
        }
      }
    }
  }
`;

const requestDataSetQuery = gql`
  query($tickers: [String!]) {
    requestData(tickers: $tickers) {
      title
      elements {
        x
        y
      }
    }
  }
`;

const returnNewsQuery = gql`
  query($title: String!) {
    returnNews(title: $title) {
      articles {
        source {
          id
          name
        }
        author
        title
        description
        url
        publishedAt
        content
      }
    }
  }
`;

const tutorialQuery = gql`
  query($id: ID!) {
    tutorial(id: $id) {
      id
      comments {
        userId
        username
        commentId
        timestamp
        text
        likes
        dislikes
      }
    }
  }
`;

export {
  createUserMutation,
  pushCommentNestMutation,
  updateDarkModeMutation,
  updateAllowCommentsMutation,
  updateUserProfileImageMutation,
  updateInvisibleMutation,
  addCommentTradeMutation,
  updateUserNotificationsViewedMutation,
  updateLikesMutation,
  addCommentStockMutation,
  updateDislikesMutation,
  updateUserProgressMutation,
  deleteCommentUserMutation,
  pushUserNotificationsMutation,
  dropNotificationMutation,
  pushCommentPostMutation,
  pushCommentTutorialMutation,
  pushCommentStockMutation,
  pushStockToUserMutation,
  deleteCommentStockMutation,
  updateUserSettingsMutation,
  pushFollowerToUserMutation,
  unfollowUserMutation,
  saveSettingsMutation,
  savePreferredCommentaryMutation,
  dislikeStockMutation,
  likeStockMutation,
  dislikeCommentMutation,
  likeSubCommentMutation,
  dislikeSubCommentMutation,
  postMutation,
  pushTradeMutation,
  blockUserMutation,
  updateMoneyMutation,
  setProfileImageMutation,
  pushSharesToUserMutation,
  updateNewPortfolioMutation,
  setBioMutation,
  pushStockToWatchlistMutation,
  removeStockFromWatchlistMutation,
  newTokenMutation,
  purchaseStockMutation,
  likeCommentMutation,
  sellStockMutation,
  likePostMutation,
  dislikePostMutation,
  distinctUserQuery,
  userCommentLookup,
  userQuery,
  userProgressQuery,
  nonTokenModifyUserQuery,
  stockQuery,
  getStocksQuery,
  userLoginQuery,
  queryTradeQuery,
  queryPosts,
  queryToken,
  individualPostQuery,
  searchQuery,
  otherUserQuery,
  returnFeedQuery,
  requestDataSetQuery,
  returnNewsQuery,
  tutorialQuery,
};
