export const mapStateToProps = (state: any) => {
  return {
    username: state.username,
    userId: state.userId,
    bio: state.bio,
    money: state.money,
    progress: state.progress,
    profileImage: state.profileImage,
    newaccount: state.newaccount,
    newPortfolio: state.newPortfolio,
    watchlist: state.watchlist,
    stocks: state.stocks,
    posts: state.posts,
    progressElements: state.progressElements,
    trades: state.trades,
    followers: state.followers,
    following: state.following,
    notifications: state.notifications,
    darkmode: state.darkmode,
    allowCommentsOnPosts: state.allowCommentsOnPosts,
    invisible: state.invisible,
    oneday: state.oneday,
    oneweek: state.oneweek,
    onemonth: state.onemonth,
    oneyear: state.oneyear,
    currentPrices: state.currentPrices,
    feed: state.feed,
    history: state.history,
    userRoutes: state.userRoutes,
  };
};

type WatchListItem = {
  stockId: string;
  title: string;
  ticker: string;
  timestamp: number;
};

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

type UserComments = {
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

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onUsernameSet: (username: string) =>
      dispatch({ type: "SET_USERNAME", payload: username }),
    onUserIDSet: (userId: string) =>
      dispatch({ type: "SET_USERID", payload: userId }),
    onBioSet: (bio: string) => dispatch({ type: "SET_BIO", payload: bio }),
    onMoneySet: (money: number) =>
      dispatch({ type: "SET_MONEY", payload: money }),
    onNewAccountSet: (newacc: boolean) =>
      dispatch({ type: "SET_NEW_ACCOUNT", payload: newacc }),
    onNewPortfolioSet: (newPortfolio: boolean) =>
      dispatch({ type: "SET_NEW_PORTFOLIO", payload: newPortfolio }),
    onWatchlistSet: (watchlist: WatchListItem[]) =>
      dispatch({ type: "SET_INITIAL_WATCHLIST", payload: watchlist }),
    onInitialPostsSet: (posts: any) =>
      dispatch({ type: "SET_INITIAL_POSTS", payload: posts }),
    onInitialTradeSet: (trades: any) =>
      dispatch({ type: "SET_INITIAL_TRADES", payload: trades }),
    onInitialFollowerSet: (followers: any) =>
      dispatch({ type: "SET_INITIAL_FOLLOWERS", payload: followers }),
    onInitialFollowingSet: (following: any) =>
      dispatch({ type: "SET_INITIAL_FOLLOWING", payload: following }),
    onInitialNotificationsSet: (notifications: any) =>
      dispatch({ type: "SET_INITIAL_NOTIFICATIONS", payload: notifications }),
    onInitialProgressSet: (progress: any) =>
      dispatch({ type: "SET_INITIAL_PROGRESS", payload: progress }),
    onInitialProgressElementsSet: (progressElements: any) =>
      dispatch({
        type: "SET_INITIAL_PROGRESS_ELEMENTS",
        payload: progressElements,
      }),
    onInitialCommentsSet: (comments: UserComments) =>
      dispatch({ type: "SET_INITIAL_COMMENTS", payload: comments }),
    onDarkmodeSet: (darkmode: boolean) =>
      dispatch({ type: "SET_DARKMODE", payload: darkmode }),
    onInvisibleSet: (invisible: boolean) =>
      dispatch({ type: "SET_INVISIBLE", payload: invisible }),
    onAllowCommentsSet: (allowCommentsOnPosts: boolean) =>
      dispatch({
        type: "SET_ALLOW_COMMENTS_ON_POSTS",
        payload: allowCommentsOnPosts,
      }),
    onStocksSet: (stocks: StockItem[]) =>
      dispatch({ type: "SET_STOCKS", payload: stocks }),
    onProfileImageSet: (profileImage: any) =>
      dispatch({ type: "SET_PROFILE_IMAGE", payload: profileImage }),
    oneOneDaySet: (day: any) => dispatch({ type: "SET_DAY", payload: day }),
    onOneWeekSet: (week: any) => dispatch({ type: "SET_WEEK", payload: week }),
    onOneMonthSet: (month: any) =>
      dispatch({ type: "SET_MONTH", payload: month }),
    onOneYearSet: (year: any) => dispatch({ type: "SET_YEAR", payload: year }),
    onCurrentPricesSet: (currentPrices: any) =>
      dispatch({ type: "SET_CURRENT_PRICES", payload: currentPrices }),
    onFeedSet: (feed: any) => dispatch({ type: "SET_FEED", payload: feed }),
    onHistorySet: (history: any) =>
      dispatch({ type: "SET_HISTORY", payload: history }),
    onUserRouteSet: (userRoutes: any) =>
      dispatch({ type: "SET_USER_ROUTES", payload: userRoutes }),
  };
};
