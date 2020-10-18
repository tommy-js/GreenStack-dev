const userReducer = (state: any, action: any) => {
  const newState = { ...state };
  if (action.type == "SET_USERNAME") {
    newState.username = action.payload;
  }
};
