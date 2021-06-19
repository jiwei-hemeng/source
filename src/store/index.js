import {
  createStore
} from "redux";
import Reducer from "./reducer.js";
let state = {
  num: 10,
  token: sessionStorage.getItem("token") || ""
};
let store = createStore(Reducer, state);
export default store;