// meeting place for all reducers
import { combineReducers } from "redux";
import auth_reducer from "./auth_reducers";
import { LOGOUT_SUCCESS } from "../actions/action_types";

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    localStorage.removeItem("token");
    state = undefined; // reset all reducers to init state
  }
  return appReducer(state, action);
};

const appReducer = combineReducers({
  auth_reducer,
});

export default rootReducer;
