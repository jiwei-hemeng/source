// 返回reducer
const reducerAction = {
  add: (state, action) => {
    const newState = { ...state };
    newState.num += action.value;
    return newState;
  },
  setToken: (state, action) => {
    const newToken = { ...state };
    newToken.token = action.value;
    return newToken;
  },
  setJoinTime: (state, action) => {
    const newToken = { ...state };
    newToken.joinTime = action.value;
    return newToken;
  },
};
const Reducer = (state, action) => {
  return reducerAction[action.type]
    ? reducerAction[action.type](state, action)
    : state;
};
export default Reducer;
