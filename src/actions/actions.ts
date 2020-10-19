const progress = [
  {
    id: "",
    title: "Basics of The Market",
    percent: 0,
  },
  {
    id: "",
    title: "Options",
    percent: 0,
  },
  {
    id: "",
    title: "Diversifying",
    percent: 0,
  },
];

export const mapStateToProps = (state: any) => {
  return {
    username: state.username,
    userId: state.userId,
    progress: progress,
    newaccount: state.newaccount,
    watchlist: state.watchlist,
    posts: state.posts,
    membership: state.membership,
    trades: state.trades,
    followers: state.followers,
    following: state.following,
    notifications: state.notifications,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onUsernameSet: (username: string) =>
      dispatch({ type: "SET_USERNAME", payload: username }),
    onNewAccountSet: (newacc: boolean) =>
      dispatch({ type: "SET_NEW_ACCOUNT", payload: newacc }),
    onWatchlistSet: (watchlist: any) =>
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
  };
};
