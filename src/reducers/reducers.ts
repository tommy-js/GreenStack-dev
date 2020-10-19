const initialState = {
  username: "",
};

const userReducer = (state: any = initialState, action: any) => {
  const newState = { ...state };
  if (action.type == "SET_USERNAME") {
    newState.username = action.payload;
  }
  if (action.type == "SET_USERID") {
    newState.userId = action.payload;
  }
  if (action.type == "SET_MONEY") {
    newState.money = action.payload;
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
  if (action.type == "SET_INITIAL_COMMENTS") {
    newState.comments = action.comments;
  }
  if (action.type == "SET_INITIAL_PROGRESS") {
    newState.progress = action.progress;
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
  if (action.type == "SET_DARKMODE") {
    newState.darkmode = action.payload;
  }
  if (action.type == "SET_INVISIBLE") {
    newState.invisible = action.payload;
  }
  if (action.type == "SET_ALLOW_COMMENTS_ON_TRADES") {
    newState.allowCommentsOnTrades = action.payload;
  }
  if (action.type == "SET_STOCKS") {
    newState.stocks = action.payload;
  }
  if (action.type == "SET_PROFILE_IMAGE") {
    newState.profileImage = action.payload;
  }
  return newState;
};

export default userReducer;
