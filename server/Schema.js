const graphql = require("graphql");

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
const Trade = require("./models/trade");
const Comment = require("./models/comment");
const Stock = require("./models/stock");
const Share = require("./models/share");
const Reference = require("./models/referencetrade");
const Settings = require("./models/settings");

const UserQuery = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    userId: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    money: { type: GraphQLFloat },
    darkmode: { type: GraphQLBoolean },
    invisible: { type: GraphQLBoolean },
    allowCommentsOnTrades: { type: GraphQLBoolean },
    followed: { type: new GraphQLList(FollowerQuery) },
    following: { type: new GraphQLList(FollowerQuery) },
    stocks: { type: new GraphQLList(StockQuery) },
    shares: { type: new GraphQLList(ShareQuery) },
    trades: { type: new GraphQLList(TradeQuery) },
    referenceTrades: { type: new GraphQLList(ReferenceTradeQuery) },
    comments: { type: new GraphQLList(CommentQuery) },
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
    followerName: { type: GraphQLString },
  }),
});

const TradeQuery = new GraphQLObjectType({
  name: "Trade",
  fields: () => ({
    price: { type: GraphQLFloat },
    tradeId: { type: GraphQLID },
    timestamp: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    shares: { type: GraphQLInt },
    gain: { type: GraphQLInt },
  }),
});

const ReferenceTradeQuery = new GraphQLObjectType({
  name: "Reference",
  fields: () => ({
    tradeAuthorID: { type: GraphQLID },
    tradeAuthorUsername: { type: GraphQLString },
    price: { type: GraphQLInt },
    tradeId: { type: GraphQLID },
    timestamp: { type: GraphQLID },
    title: { type: GraphQLString },
    ticker: { type: GraphQLString },
    shares: { type: GraphQLInt },
    gain: { type: GraphQLInt },
  }),
});

const CommentQuery = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    userId: { type: GraphQLID },
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
    stock: {
      type: StockQuery,
      args: {
        stockId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.find({ stockId: args.stockId });
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
        userId: { type: GraphQLID },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        money: { type: GraphQLFloat },
        darkmode: { type: GraphQLBoolean },
        invisible: { type: GraphQLBoolean },
        allowCommentsOnTrades: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        let user = new User({
          userId: args.userId,
          username: args.username,
          password: args.password,
          money: args.money,
          darkmode: false,
          invisible: false,
          allowCommentsOnTrades: true,
        });
        return user.save();
      },
    },
    updateUserSettings: {
      type: UserQuery,
      args: {
        userId: { type: GraphQLID },
        darkmode: { type: GraphQLBoolean },
        invisible: { type: GraphQLBoolean },
        allowCommentsOnTrades: { type: GraphQLBoolean },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            darkmode: args.darkmode,
            invisible: args.invisible,
            allowCommentsOnTrades: args.allowCommentsOnTrades,
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
      resolve(parent, args) {
        return UserQuery.findOneAndUpdate(
          { shareId: args.shareId },
          {
            $set: {
              share: {
                userId: args.userId,
                stockId: args.stockId,
                shares: args.shares,
              },
            },
          }
        );
      },
    },
    pushTradeToHistory: {
      type: TradeQuery,
      args: {
        userId: { type: GraphQLID },
        tradeId: { type: GraphQLID },
        price: { type: GraphQLInt },
        timestamp: { type: GraphQLID },
        title: { type: GraphQLString },
        ticker: { type: GraphQLString },
        shares: { type: GraphQLInt },
        gain: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $push: {
              trades: {
                price: args.price,
                tradeId: args.tradeId,
                timestamp: args.timestamp,
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
    pushReferenceTrade: {
      type: TradeQuery,
      args: {
        userId: { type: GraphQLID },
        tradeId: { type: GraphQLID },
        tradeAuthorID: { type: GraphQLID },
        tradeAuthorUsername: { type: GraphQLString },
        price: { type: GraphQLInt },
        timestamp: { type: GraphQLID },
        title: { type: GraphQLString },
        ticker: { type: GraphQLString },
        shares: { type: GraphQLInt },
        gain: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $push: {
              referenceTrades: {
                userId: args.tradeAuthorID,
                username: args.tradeAuthorUsername,
                price: args.price,
                tradeId: args.tradeId,
                timestamp: args.timestamp,
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
    addCommentUser: {
      type: CommentQuery,
      args: {
        userId: { type: GraphQLID },
        username: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        comment: { type: GraphQLString },
        likes: { type: GraphQLID },
        dislikes: { type: GraphQLID },
      },
      resolve(parent, args) {
        return User.update(
          { userId: args.userId },
          {
            $push: {
              comments: {
                username: args.username,
                timestamp: args.timestamp,
                comment: args.comment,
                likes: args.likes,
                dislikes: args.dislikes,
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
    addCommentStock: {
      type: CommentQuery,
      args: {
        stockId: { type: GraphQLID },
        username: { type: GraphQLString },
        timestamp: { type: GraphQLID },
        comment: { type: GraphQLString },
        likes: { type: GraphQLID },
        dislikes: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Stock.update(
          { stockId: args.stockId },
          {
            $push: {
              comments: {
                username: args.username,
                timestamp: args.timestamp,
                comment: args.comment,
                likes: args.likes,
                dislikes: args.dislikes,
              },
            },
          }
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
        return User.update(
          { userId: args.userId },
          {
            $push: {
              followerId: args.followerId,
              followerName: args.followerName,
            },
          }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
