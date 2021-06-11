// 返回reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const newState = { ...state };
      newState.num += action.value;
      return newState;
    default:
      return state;
  }
};
export default Reducer;
