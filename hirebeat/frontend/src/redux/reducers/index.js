// meeting place for all reducers
import { combineReducers } from "redux";
import video_reducer from "./video_reducers";
import error_reducer from "./error_reducers";
import message_reducer from "./message_reducers";
import auth_reducer from "./auth_reducers";
import question_reducer from "./question_reducers";
import resume_reducer from "./resume_reducers";
import video_sentence_reducer from "./video_sentence_reducers";
import video_user_reducer from "./video_user_reducers";
import question_subcategory_reducer from "./question_subcategory_reducers";
import { LOGOUT_SUCCESS } from "../actions/action_types";

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem("token");
    state = undefined; // reset all reducers to init state
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  video_reducer,
  error_reducer,
  message_reducer,
  auth_reducer,
  question_reducer,
  resume_reducer,
  video_sentence_reducer,
  video_user_reducer,
  question_subcategory_reducer,
});

export default rootReducer;
