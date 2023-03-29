import { legacy_createStore as createStore } from "redux";
import Reducer from "./reducer.js";
const token =
  sessionStorage.getItem("token") === null
    ? ""
    : sessionStorage.getItem("token");
let state = {
  num: 10,
  token,
  joinTime: Date.now()
};
let store = createStore(Reducer, state);
export default store;
