import axios from "axios";
import { returnErrors } from "./message_actions";
import {
  USER_LOADED,
  USER_LOADING,
  USER_FULLNAME_LOADED,
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
  UPDATE_USER_EMAIL,
  UPDATE_USER_PASSWORD,
  GET_ZP_JOBS,
  CHECK_USER_REGISTRATION,
  GET_COMPANY_NAME,
  UPDATE_RECORD,
  GET_RECORD_STATUS,
  GET_RECEIVED_INTERVIEW,
  UPDATE_RECORD_REFRESH,
  EMPLOYER_NOTIFICATION,
  GET_PROFILE_DETAIL,
  UPDATE_PERSONAL_INFO,
  UPDATE_SOCIAL_MEDIA,
  UPDATE_BASIC_INFO,
  UPDATE_VIDEO,
  UPDATE_SUMMARY,
  UPDATE_RESUME,
  UPDATE_EDUCATION,
  UPDATE_WORK_EXP,
  UPDATE_PROFILE_RATE,
  SUBREVIEWER_UPDATE_COMMENT,
  GET_EMPLOYER_PROFILE_DETAIL,
  UPDATE_EMPLOYER_INFO,
  UPDATE_EMPLOYER_SOCIAL_MEDIA,
  UPDATE_EMPLOYER_BASIC_INFO,
  UPDATE_EMPLOYER_VIDEO,
  UPDATE_EMPLOYER_SUMMARY,
  ADD_EMPLOYER_POST,
  UPDATE_EMPLOYER_POST,
  GET_EMPLOYER_POST,
  DELETE_EMPLOYER_POST,
  UPDATE_EMPLOYER_LOGO,
  UPDATE_USER_LOGO,
  CHECK_USER_EXISTENCE,
  CHECK_COMPANY_NAME_EXISTENCE,
  CREATE_PROFILE,
  UPDATE_JOB_TYPE,
  UPDATE_SKILLS,
  UPDATE_LANGUAGES,
  UPDATE_PROFILE_SHARING,
  CREATE_EMPLOYER_PROFILE,
  GET_SOURCING_DATA,
  DELETE_PROFILE_EDUCATION,
  DELETE_PROFILE_WORK_EXP,
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

// ********  LOAD USER FULLNAME  ********
export const loadUserFullname = (user) => (dispatch, getState) => {

  return axios
    .post("api/userfullname", user, tokenConfig(getState))
    .then((res) => {
      console.log("user fullname loaded");
      dispatch({
        type: USER_FULLNAME_LOADED,
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

// ******** EMPLOYER REGISTER  ********
export const employer_register = (firstname, lastname, username, email, password, company_name) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({firstname, lastname, username, email, password, company_name });

  axios
    .post("api/auth/employer_register", body, config)
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

export const updateUserEmail = (user) => (dispatch, getState) => {
  axios
    .post("/api/update-user-email", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_USER_EMAIL,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateUserPassword = (user) => (dispatch, getState) => {
  axios
    .post("api/update-user-password", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_USER_PASSWORD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getZipRecruiterJobs = (search, location, daysAgo, minSalary) => (dispatch, getState) => {
  axios
    .get(`get-ziprecruiter-jobs?search=${search}&location=${location}&days_ago=${daysAgo}&refine_by_salary=${minSalary}`)
    .then((res) => {
      dispatch({
        type: GET_ZP_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const checkUserRegistration = (email) => (dispatch, getState) => {
  axios
    .post("check-user-registration", email)
    .then((res) => {
      dispatch({
        type: CHECK_USER_REGISTRATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getCompanyName = (positionId) => (dispatch, getState) => {
  axios
    .get(`get-company-name?position_id=${positionId}`)
    .then((res) => {
      dispatch({
        type: GET_COMPANY_NAME,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateRecord = (user) => (dispatch, getState) => {
  axios
    .post("update-record", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_RECORD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const employerNotification = (user) => (dispatch, getState) => {
  axios
    .post("employer-notification", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EMPLOYER_NOTIFICATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateRecordRefresh = (user) => (dispatch, getState) => {
  axios
    .post("update-record-refresh", user, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_RECORD_REFRESH,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getRecordStatus = (positionId, email) => (dispatch, getState) => {
  axios
    .get(`get-record-status?position_id=${positionId}&email=${email}`, tokenConfig(getState))
    .then((res) => {
      console.log("get record status");
      dispatch({
        type: GET_RECORD_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getReceivedInterview = (email) => (dispatch, getState) => {
  axios
    .get(`get-received-interview?email=${email}`)
    .then((res) => {
      dispatch({
        type: GET_RECEIVED_INTERVIEW,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getProfileDetail = (user_id) => (dispatch, getState) => {
  axios
    .get(`get-profile-detail?user_id=${user_id}`)
    .then((res) => {
      dispatch({
        type: GET_PROFILE_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updatePersonalInfo = (data) => (dispatch, getState) => {
  axios
    .post("/update-personal-info", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_PERSONAL_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateSocialMedia = (data) => (dispatch, getState) => {
  axios
    .post("/update-social-media", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SOCIAL_MEDIA,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateBasicInfo = (data) => (dispatch, getState) => {
  axios
    .post("/update-basic-info", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_BASIC_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateVideo = (data) => (dispatch, getState) => {
  axios
    .post("/update-video", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateSummary = (data) => (dispatch, getState) => {
  axios
    .post("/update-summary", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUMMARY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateResume = (data) => (dispatch, getState) => {
  axios
    .post("/update-resume", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_RESUME,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEducation = (data) => (dispatch, getState) => {
  axios
    .post("/update-education", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EDUCATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateWorkExp = (data) => (dispatch, getState) => {
  axios
    .post("/update-work-exp", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_WORK_EXP,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateProfileRate = (data) => (dispatch, getState) => {
  axios
    .post("/update-profile-rate", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE_RATE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const subreviewerUpdateComment = (subreviewr_update) => (dispatch, getState) => {
  axios
    .post("subreviewer_update_comment", subreviewr_update, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SUBREVIEWER_UPDATE_COMMENT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getEmployerProfileDetail = (user_id) => (dispatch, getState) => {
  axios
    .get(`get-employer-profile-detail?user_id=${user_id}`)
    .then((res) => {
      dispatch({
        type: GET_EMPLOYER_PROFILE_DETAIL,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerInfo = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-info", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerSocialMedia = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-social-media", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_SOCIAL_MEDIA,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerBasicInfo = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-basic-info", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_BASIC_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerVideo = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-video", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerSummary = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-summary", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_SUMMARY,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getEmployerPost = (user_id, index) => (dispatch, getState) => {
  axios
    .get(`get-employer-post?user_id=${user_id}&index=${index}`)
    .then((res) => {
      dispatch({
        type: GET_EMPLOYER_POST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addEmployerPost = (data) => (dispatch, getState) => {
  axios
    .post("/add-employer-post", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_EMPLOYER_POST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerPost = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-post", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_POST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteEmployerPost = (data) => (dispatch, getState) => {
  axios
    .post("/delete-employer-post", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_EMPLOYER_POST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateEmployerLogo = (data) => (dispatch, getState) => {
  axios
    .post("/update-employer-logo", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_EMPLOYER_LOGO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateUserLogo = (data) => (dispatch, getState) => {
  axios
    .post("/update-user-logo", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_USER_LOGO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const checkUserExistence = (email) => (dispatch, getState) => {
  axios
    .get(`accounts/check-user-existence?email=${email}`)
    .then((res) => {
      dispatch({
        type: CHECK_USER_EXISTENCE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const checkCompanyNameExistence = (companyName) => (dispatch, getState) => {
  axios
    .get(`accounts/check-company-name-existence?companyName=${companyName}`)
    .then((res) => {
      dispatch({
        type: CHECK_COMPANY_NAME_EXISTENCE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const createProfile = (data) => (dispatch, getState) => {
  axios
    .post("/accounts/create-profile", data)
    .then((res) => {
      dispatch({
        type: CREATE_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateJobType = (data) => (dispatch, getState) => {
  axios
    .post("accounts/update-job-type", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_JOB_TYPE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateSkills = (data) => (dispatch, getState) => {
  axios
    .post("accounts/update-skills", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SKILLS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateLanguages = (data) => (dispatch, getState) => {
  axios
    .post("accounts/update-languages", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_LANGUAGES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateProfileSharing = (data) => (dispatch, getState) => {
  axios
    .post("accounts/update-profile-sharing", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE_SHARING,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const createEmployerProfile = (data) => (dispatch, getState) => {
  axios
    .post("/accounts/create-employer-profile", data)
    .then((res) => {
      dispatch({
        type: CREATE_EMPLOYER_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getSourcingData = (data) => (dispatch, getState) => {
  axios
    .post("accounts/get-sourcing-data", data)
    .then((res) => {
      dispatch({
        type: GET_SOURCING_DATA,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteProfileEducation = (data) => (dispatch, getState) => {
  axios
    .post("accounts/delete-profile-education", data)
    .then((res) => {
      dispatch({
        type: DELETE_PROFILE_EDUCATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteProfileWorkExp = (data) => (dispatch, getState) => {
  axios
    .post("accounts/delete-profile-work-exp", data)
    .then((res) => {
      dispatch({
        type: DELETE_PROFILE_WORK_EXP,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};