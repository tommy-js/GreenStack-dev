const graphql = require("graphql");
const { v4: uuidv4 } = require("uuid");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLBoolean,
  GraphQLSchema,
} = graphql;

const User = require("./models/user");
const Follower = require("./models/follower");
const Following = require("./models/following");
const Trade = require("./models/trade");
const Comment = require("./models/comment");
const Stock = require("./models/stock");
const Share = require("./models/share");
const Settings = require("./models/settings");
const Watchlist = require("./models/watchlist");
const Notifications = require("./models/notification");
const Progress = require("./models/progress");
const Post = require("./models/post");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    token: { type: GraphQLString },
    hash: { type: GraphQLString },
    salt: { type: GraphQLString },
    profileImage: { type: GraphQLString },
    membership: { type: GraphQLBoolean },
    money: { type: GraphQLFloat },
    darkmode: { type: GraphQLBoolean },
    invisible: { type: GraphQLBoolean },
    newaccount: { type: GraphQLBoolean },
    experience: { type: GraphQLInt },
    education: { type: GraphQLInt },
    motivations: { type: GraphQLInt },
    commentary: { type: GraphQLInt },
    allowCommentsOnTrades: { type: GraphQLBoolean },
    posts: { type: new GraphQLList(PostQuery) },
    following: { type: new GraphQLList(FollowingQuery) },
    followers: { type: new GraphQLList(FollowerQuery) },
    stocks: { type: new GraphQLList(ShareQuery) },
    trades: { type: new GraphQLList(TradeQuery) },
    comments: { type: new GraphQLList(CommentQuery) },
    watchlist: { type: new GraphQLList(WatchlistQuery) },
    notifications: { type: new GraphQLList(NotificationQuery) },
    progress: { type: new GraphQLList(ProgressQuery) },
  }),
});

const ProgressQuery = new GraphQLObjectType({
  name: "Progress",
  fields: () => ({
    title: { type: GraphQLString },
    percent: { type: GraphQLInt },
    id: { type: GraphQLID },
  }),
});

const NotificationQuery = new GraphQLObjectType({
  name: "Notifications",
  fields: () => ({
    content: { type: GraphQLString },
    timestamp: { type: GraphQLID },
    id: { type: GraphQLID },
    viewed: { type: GraphQLBoolean },
  }),
});

const WatchlistQuery = new GraphQLObjectType({
  name: "Watchlist",
  fields: () => ({
    stockId: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    timestamp: { type: GraphQLInt },
  }),
});

const SettingsQuery = new GraphQLObjectType({
  name: "Settings",
  fields: () => ({
    darkmode: { type: GraphQLBoolean },
    invisible: { type: GraphQLBoolean },
    allowCommentsOnTrades: { type: GraphQLBoolean },
  }),
});

const FollowerQuery = new GraphQLObjectType({
  name: "Follower",
  fields: () => ({
    followerId: { type: GraphQLID },
    id: { type: GraphQLID },
    followerName: { type: GraphQLString },
    blocked: { type: GraphQLBoolean },
  }),
});

const FollowingQuery = new GraphQLObjectType({
  name: "Following",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
  }),
});

const TradeQuery = new GraphQLObjectType({
  name: "Trade",
  fields: () => ({
    price: { type: GraphQLFloat },
    username: { type: GraphQLString },
    userId: { type: GraphQLID },
    type: { type: GraphQLString },
    tradeId: { type: GraphQLID },
    timestamp: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    shares: { type: GraphQLInt },
    gain: { type: GraphQLFloat },
    comments: { type: new GraphQLList(CommentQuery) },
  }),
});

const CommentQuery = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    userId: { type: GraphQLID },
    commentId: { type: GraphQLID },
    username: { type: GraphQLString },
    timestamp: { type: GraphQLID },
    text: { type: GraphQLString },
    likes: { type: GraphQLID },
    dislikes: { type: GraphQLID },
  }),
});

const StockQuery = new GraphQLObjectType({
  name: "Stock",
  fields: () => ({
    stockId: { type: GraphQLID },
    ticker: { type: GraphQLString },
    name: { type: GraphQLString },
    about: { type: GraphQLString },
    creation: { type: GraphQLString },
    prediction: { type: GraphQLInt },
    comments: { type: new GraphQLList(CommentQuery) },
  }),
});

const ShareQuery = new GraphQLObjectType({
  name: "Share",
  fields: () => ({
    stockId: { type: GraphQLID },
    shareId: { type: GraphQLID },
    shares: { type: GraphQLInt },
  }),
});

const PostQuery = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    userId: { type: GraphQLID },
    postId: { type: GraphQLID },
    timestamp: { type: GraphQLInt },
    likes: { type: GraphQLInt },
    dislikes: { type: GraphQLInt },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    comments: { type: new GraphQLList(CommentQuery) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    user: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOne({ userId: args.userId });
      },
    },
    specUser: {
      type: UserQuery,
      args: {
        username: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findOne({ username: args.username });
      },
    },
    token: {
      type: UserQuery,
      args: {
        token: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findOne({ token: args.token });
      },
    },
    stock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.find({ stockId: args.stockId });
      },
    },
    userLogin: {
      type: UserQuery,
      args: {
        username: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findOne({
          username: args.username,
        });
      },
    },
    getTrade: {
      type: TradeQuery,
      args: {
        tradeId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Trade.findOne({ tradeId: args.tradeId });
      },
    },
    getPosts: {
      type: new GraphQLList(PostQuery),
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Post.find({ userId: args.userId });
      },
    },
    post: {
      type: PostQuery,
      args: {
        postId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Post.findOne({ postId: args.postId });
      },
    },
    searchUser: {
      type: UserQuery,
      args: {
        argument: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.findOne({ username: args.argument });
      },
    },
    searchStock: {
      type: StockQuery,
      args: {
        argument: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Stock.findOne({ name: args.argument });
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserQuery,
      args: {
        username: { type: GraphQLString },
        hash: { type: GraphQLString },
        token: { type: GraphQLString },
        salt: { type: GraphQLString },
      },
      resolve(parent, args) {
        let date = new Date();
        let currentTime = Math.floor(date.getTime() / 1000);
        let modUsername = args.username.toLowerCase();
        let user = new User({
          userId: uuidv4(),
          username: modUsername,
          token: args.token,
          hash: args.hash,
          salt: args.salt,
          money: 1000,
          timestamp: currentTime,
          membership: false,
          newaccount: true,
          darkmode: false,
          invisible: false,
          allowCommentsOnTrades: true,
          profileImage: 0,
          notifications: [
            {
              content: "Welcome to TIKR! Make your first trade...",
              timestamp: currentTime,
              id: uuidv4(),
              viewed: false,
            },
          ],
          progress: [
            {
              title: "Basics of The Market",
              percent: 0,
              id: uuidv4(),
            },
            {
              title: "Options",
              percent: 0,
              id: uuidv4(),
            },
            {
              title: "Long Term Success",
              percent: 0,
              id: uuidv4(),
            },
          ],
        });
        return user.save();
      },
    },
    newToken: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        token: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { $set: { token: args.token } }
        );
      },
    },
    saveSettings: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        experience: { type: GraphQLInt },
        education: { type: GraphQLInt },
        motivations: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              experience: args.experience,
              education: args.education,
              motivations: args.motivations,
            },
          }
        );
      },
    },
    savePreferredCommentary: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        commentaryStyle: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              commentary: args.commentaryStyle,
            },
          }
        );
      },
    },
    saveUserAsOld: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              newaccount: false,
            },
          }
        );
      },
    },
    likeStock: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
        likes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.update(
          { commentId: args.commentId },
          { $set: { likes: args.likes } }
        );
      },
    },
    dislikeStock: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
        dislikes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.update(
          { commentId: args.commentId },
          { $set: { dislikes: args.dislikes } }
        );
      },
    },
    updateNewAccount: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        newaccount: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { newaccount: args.newaccount }
        );
      },
    },
    updateUserNotificationsViewed: {
      type: NotificationQuery,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { "notifications.id": args.id },
          { $set: { "notifications.$.viewed": true } },
          { upsert: true, new: true }
        );
      },
    },
    updateUserProgress: {
      type: ProgressQuery,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { "progress.id": args.id },
          { $inc: { "progress.$.percent": 5 } },
          { upsert: true, new: true }
        );
      },
    },
    updateDarkMode: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              darkmode: !user.darkmode,
            },
          }
        );
      },
    },
    updateAllowComments: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              allowCommentsOnTrades: !user.allowCommentsOnTrades,
            },
          }
        );
      },
    },
    updateInvisible: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $set: {
              invisible: !user.invisible,
            },
          }
        );
      },
    },
    pushSharesToUser: {
      type: UserQuery,
      args: {
        stockId: { type: GraphQLID },
        shareId: { type: GraphQLID },
        shares: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { "stocks.shareId": args.shareId },
          { $set: { shares: args.shares, stockId: args.stockId } },
          { upsert: true, new: true }
        );
      },
    },
    pushStockToWatchlist: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        stockId: { type: GraphQLID },
        title: { type: GraphQLString },
        ticker: { type: GraphQLString },
      },
      resolve(parent, args) {
        let currentTime = Math.floor(Date.now() / 1000);
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $push: {
              watchlist: {
                stockId: args.stockId,
                title: args.title,
                ticker: args.ticker,
                timestamp: currentTime,
              },
            },
          }
        );
      },
    },
    removeStockFromWatchlist: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        stockId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $pull: {
              watchlist: {
                stockId: args.stockId,
              },
            },
          }
        );
      },
    },
    blockUser: {
      type: FollowerQuery,
      args: {
        id: { type: GraphQLID },
        blocked: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        return User.findOneAndUpdate(
          { "followers.id": args.id },
          { $set: { "followers.$.blocked": args.blocked } },
          { upsert: true, new: true }
        );
      },
    },
    post: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        title: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let currentTime = Math.floor(Date.now() / 1000);
        let id = uuidv4();

        let newPost = await new Post({
          userId: args.userId,
          postId: id,
          timestamp: currentTime,
          likes: 0,
          dislikes: 0,
          title: args.title,
          text: args.text,
        });
        await newPost.save();

        return User.findOneAndUpdate(
          { userId: args.userId },
          {
            $push: {
              posts: {
                userId: args.userId,
                postId: id,
                timestamp: currentTime,
                likes: 0,
                dislikes: 0,
                title: args.title,
                text: args.text,
              },
            },
          }
        );
      },
    },
    updateMoney: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        money: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { $set: { money: args.money } },
          { upsert: true, new: true }
        );
      },
    },
    updateShares: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        stockId: { type: GraphQLID },
        shares: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        if (args.shares === 0) {
          return null;
        } else {
          let user = await User.findOne({ userId: args.userId });
          let arr = user.stocks;
          let foundArr = arr.find((el) => el.stockId === args.stockId);
          if (foundArr) {
            let index = arr.indexOf(foundArr);
            arr[index].shares = arr[index].shares + args.shares;
          } else if (!foundArr) {
            let stockObj = { stockId: args.stockId, shares: args.shares };
            arr.push(stockObj);
          }
          return User.update(
            { userId: args.userId },
            {
              $set: {
                stocks: arr,
              },
            }
          );
        }
      },
    },
    pushTradeToHistory: {
      type: TradeQuery,
      args: {
        userId: { type: GraphQLID },
        tradeId: { type: GraphQLID },
        price: { type: GraphQLFloat },
        title: { type: GraphQLString },
        ticker: { type: GraphQLString },
        shares: { type: GraphQLInt },
        gain: { type: GraphQLInt },
      },
      resolve(parent, args) {
        let currentTime = Math.floor(Date.now() / 1000);
        return User.update(
          { userId: args.userId },
          {
            $push: {
              trades: {
                price: args.price,
                tradeId: args.tradeId,
                timestamp: currentTime,
                title: args.title,
                ticker: args.ticker,
                shares: args.shares,
                gain: args.gain,
              },
            },
          }
        );
      },
    },
    pushTrade: {
      type: TradeQuery,
      args: {
        userId: { type: GraphQLID },
        username: { type: GraphQLString },
        tradeId: { type: GraphQLID },
        price: { type: GraphQLFloat },
        title: { type: GraphQLString },
        ticker: { type: GraphQLString },
        shares: { type: GraphQLInt },
        gain: { type: GraphQLFloat },
      },
      resolve(parent, args) {
        let currentTime = Math.floor(Date.now() / 1000);
        let trade = new Trade({
          userId: args.userId,
          username: args.username,
          tradeId: args.tradeId,
          price: args.price,
          timestamp: currentTime,
          title: args.title,
          ticker: args.ticker,
          shares: args.shares,
          gain: args.gain,
        });
        return trade.save();
      },
    },
    pushCommentUser: {
      type: CommentQuery,
      args: {
        userId: { type: GraphQLID },
        username: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        text: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        let currentTime = Math.floor(Date.now() / 1000);

        return User.update(
          { userId: args.userId },
          {
            $push: {
              comments: {
                userId: args.userId,
                username: user.username,
                timestamp: currentTime,
                commentId: uuidv4(),
                text: args.text,
                likes: 0,
                dislikes: 0,
              },
            },
          }
        );
      },
    },
    pushCommentPost: {
      type: PostQuery,
      args: {
        userId: { type: GraphQLID },
        postId: { type: GraphQLID },
        text: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        let currentTime = Math.floor(Date.now() / 1000);
        return Post.update(
          { postId: args.postId },
          {
            $push: {
              comments: {
                userId: args.userId,
                username: user.username,
                timestamp: currentTime,
                commentId: uuidv4(),
                text: args.text,
                likes: 0,
                dislikes: 0,
              },
            },
          }
        );
      },
    },
    pushCommentStock: {
      type: StockQuery,
      args: {
        userId: { type: GraphQLID },
        postId: { type: GraphQLID },
        text: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        let currentTime = Math.floor(Date.now() / 1000);
        return Stock.update(
          { stockId: args.stockId },
          {
            $push: {
              comments: {
                userId: args.userId,
                username: user.username,
                timestamp: currentTime,
                commentId: uuidv4(),
                text: args.text,
                likes: 0,
                dislikes: 0,
              },
            },
          }
        );
      },
    },
    pushCommentTrade: {
      type: StockQuery,
      args: {
        userId: { type: GraphQLID },
        tradeId: { type: GraphQLID },
        text: { type: GraphQLString },
      },
      async resolve(parent, args) {
        let user = await User.findOne({ userId: args.userId });
        let currentTime = Math.floor(Date.now() / 1000);
        return Stock.update(
          { tradeId: args.tradeId },
          {
            $push: {
              comments: {
                userId: args.userId,
                username: user.username,
                commentId: uuidv4(),
                timestamp: currentTime,
                text: props.text,
                likes: 0,
                dislikes: 0,
              },
            },
          }
        );
      },
    },
    updateLikesComment: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
        likes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.update(
          { commentId: args.commentId },
          { $set: { likes: args.likes } }
        );
      },
    },
    updateDislikesComment: {
      type: CommentQuery,
      args: {
        commentId: { type: GraphQLID },
        dislikes: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Comment.update(
          { commentId: args.commentId },
          { $set: { dislikes: args.dislikes } }
        );
      },
    },
    deleteCommentUser: {
      type: CommentQuery,
      args: {
        userId: { type: GraphQLID },
        commentId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { $pull: { comments: { commentId: args.commentId } } }
        );
      },
    },
    dropNotification: {
      type: NotificationQuery,
      args: {
        userId: { type: GraphQLID },
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { $pull: { notifications: { id: args.id } } }
        );
      },
    },
    deleteCommentStock: {
      type: CommentQuery,
      args: {
        stockId: { type: GraphQLID },
        commentId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.update(
          { stockId: args.stockId },
          { $pull: { comments: { commentId: args.commentId } } }
        );
      },
    },
    followUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        followerId: { type: GraphQLID },
        followerName: { type: GraphQLString },
      },
      resolve(parent, args) {
        let id = uuidv4();
        return User.update(
          { userId: args.userId },
          {
            $push: {
              followers: {
                followerId: args.followerId,
                id: id,
                followerName: args.followerName,
                blocked: false,
              },
            },
          }
        );
      },
    },
    followingUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        followingId: { type: GraphQLID },
        username: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $push: {
              following: {
                userId: args.followingId,
                username: args.username,
              },
            },
          }
        );
      },
    },
    unfollowUser: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        followerId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $pull: { userId: args.followerId },
          }
        );
      },
    },
    setProfileImage: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        profileImage: { type: GraphQLString },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          { profileImage: args.profileImage }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
