const userReducer = (state: any, action: any) => {
  const newState = { ...state };
  if (action.type == "SET_USERNAME") {
    newState.username = action.payload;
  }
  if (action.type == "SET_USERID") {
    newState.userId = action.payload;
  }
  if (action.type == "SET_BIO") {
    newState.bio = action.payload;
  }
  if (action.type == "SET_MONEY") {
    newState.money = action.payload;
  }
  if (action.type == "SET_NEW_ACCOUNT") {
    newState.newaccount = action.payload;
  }
  if (action.type == "SET_NEW_PORTFOLIO") {
    newState.newPortfolio = action.payload;
  }
  if (action.type == "SET_INITIAL_WATCHLIST") {
    newState.watchlist = action.payload;
  }
  if (action.type == "SET_INITIAL_POSTS") {
    newState.posts = action.payload;
  }
  if (action.type == "SET_INITIAL_COMMENTS") {
    newState.comments = action.payload;
  }
  if (action.type == "SET_INITIAL_PROGRESS") {
    newState.progress = action.payload;
  }
  if (action.type == "SET_INITIAL_PROGRESS_ELEMENTS") {
    newState.progressElements = action.payload;
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
  if (action.type == "SET_ALLOW_COMMENTS_ON_POSTS") {
    newState.allowCommentsOnPosts = action.payload;
  }
  if (action.type == "SET_STOCKS") {
    newState.stocks = action.payload;
  }
  if (action.type == "SET_PROFILE_IMAGE") {
    newState.profileImage = action.payload;
  }
  if (action.type == "SET_DAY") {
    newState.oneday = action.payload;
  }
  if (action.type == "SET_WEEK") {
    newState.oneweek = action.payload;
  }
  if (action.type == "SET_MONTH") {
    newState.onemonth = action.payload;
  }
  if (action.type == "SET_YEAR") {
    newState.oneyear = action.payload;
  }
  if (action.type == "SET_CURRENT_PRICES") {
    newState.currentPrices = action.payload;
  }
  if (action.type == "SET_FEED") {
    newState.feed = action.payload;
  }
  if (action.type == "SET_HISTORY") {
    newState.history = action.payload;
  }
  if (action.type == "SET_USER_ROUTES") {
    newState.userRoutes = action.payload;
  }
  return newState;
};

export default userReducer;
