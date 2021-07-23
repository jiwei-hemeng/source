// 返回reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const newState = { ...state };
      newState.num += action.value;
      return newState;
    case "setToken":
      const newToken = { ...state };
      newToken.token = action.value;
      return newToken;
    default:
      return state;
  }
};
export default Reducer;
