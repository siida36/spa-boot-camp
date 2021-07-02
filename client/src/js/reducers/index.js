import { combineReducers } from "redux";

import tweetsReducer from "./tweetsReducer";
import userReducer from "./userReducer";
import messageFormReducer from "./messageFormReducer";

export default combineReducers({
  tweetsReducer,
  userReducer,
  messageFormReducer
})
