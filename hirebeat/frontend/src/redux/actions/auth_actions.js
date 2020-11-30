import axios from "axios";
import { returnErrors } from "./message_actions";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  PROFILE_LOADED,
  PROFILE_UPDATED,
  UPGRADE_ACCOUNTS,
  RESEND_ACTIVATION_EMAIL,
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

// ********  LOAD PROFILE  ********
export const loadProfile = () => (dispatch, getState) => {
  axios
    .get("/get_profile", tokenConfig(getState))
    .then((res) => {
      console.log("profile loaded");
      dispatch({
        type: PROFILE_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      // Used to suppress error message printed by Chrome
      console.clear();
    });
};

// ********  LOGIN  ********
export const login = (username, password) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username: username, password: password });

  axios
    .post("api/auth/login", body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
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

export const exchangeToken = (token, backend) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ access_token: token });
  console.log("About to fire request");
  axios
    .post(`exchange_token/${backend}`, body, config)
    .then((res) => {
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// help function to setup config with token

export const tokenConfig = (getState) => {
  // Get token
  const token = getState().auth_reducer.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};

export const updateProfile = (profile) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(profile);
  axios
    .put(`/profile/${profile.id}/`, body, config)
    .then((res) => {
      dispatch({
        type: PROFILE_UPDATED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const upgradeAccounts = (email_suffix) => (dispatch, getState) => {
  axios
    .post("/api/upgrade-accounts", email_suffix, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: UPGRADE_ACCOUNTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const resendActivationEmail = (userId) => (dispatch, getState) => {
  axios
    .post("/api/resend-activation-email", userId, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: RESEND_ACTIVATION_EMAIL,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
