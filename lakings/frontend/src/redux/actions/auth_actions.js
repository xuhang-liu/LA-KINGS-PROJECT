import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./action_types";

// ********  LOAD USER  ********
export const loadUser = () => (dispatch, getState) => {
  // First isloading
  dispatch({
    type: USER_LOADING,
  });

  return axios
    .get("api/auth/user", tokenConfig(getState))
    .then((res) => {
      console.log("user loaded");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
      // Used to suppress error message printed by Chrome
      console.clear();
    });
};

// ********  LOGIN  ********
export const login = (username, password) => (dispatch) => {
  const token = '49d7176538f4e7d4d6799ff4c2cb31af850a77f1';
  const config = {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Token ${token}`
    },
  };
  const body = JSON.stringify({ username: username, password: password });

  axios
    .post("api/auth/login", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,    //update the data base and the state and front end;
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status)); //prevent the log out and then update the interface
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// ********  LOG OUT  ********
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

// ********  REGISTER  ********
export const register = (username, email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({ username, email, password });

  axios
    .post("api/auth/register", body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};