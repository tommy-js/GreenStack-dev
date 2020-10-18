export const mapStateToProps = (state: any) => {
  return {
    username: state.username,
  };
};

export const mapDispatchToProps = (dispatch: any) => {
  return {
    onUsernameSet: (username: string) =>
      dispatch({ type: "SET_USERNAME", payload: username }),
  };
};
