const userReducer = (state: any, action: any) => {
  const newState = { ...state };
  if (action.type == "SET_USERNAME") {
    newState.username = action.payload;
  }
  if (action.type == "SET_NEW_ACCOUNT") {
    newState.newaccount = action.payload;
  }
  if (action.type == "SET_INITIAL_WATCHLIST") {
    newState.watchlist = action.payload;
  }
  if (action.type == "SET_INITIAL_POSTS") {
    newState.posts = action.payload;
  }
  if (action.type == "SET_INITIAL_TRADES") {
    newState.trades = action.trades;
  }
  if (action.type == "SET_INITIAL_FOLLOWERS") {
    newState.followers = action.payload;
  }
  if (action.type == "SET_INITIAL_FOLLOWING") {
    newState.following = action.payload;
  }
  if (action.type == "SET_INITIAL_NOTIFICATIONS") {
    newState.notifications = action.payload;
  }
  if (action.type == "SET_MEMBERSHIP") {
    newState.membership = action.payload;
  }
};

export default userReducer;
