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
  INCREASE_VIDEO_COUNT,
  INCREASE_RESUME_COUNT,
  UPGRADE_ACCOUNTS,
  GET_ZP_JOBS,
  CHECK_USER_REGISTRATION,
  GET_COMPANY_NAME,
  GET_RECORD_STATUS,
  GET_RECEIVED_INTERVIEW,
} from "../actions/action_types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  profile: {},
  premiums: [],
  userfullname: "",
  zpJobs: [],
  isRegistered: false,
  company_name: "",
  isRecorded: false,
  received_interview: [],
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case USER_FULLNAME_LOADED:
      return {
        ...state,
        userfullname: action.payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case PROFILE_LOADED:
    case PROFILE_UPDATED:
      return {
        ...state,
        profile: action.payload,
      };
    case INCREASE_VIDEO_COUNT:
      return {
        ...state,
        profile: {
          ...state.profile,
          saved_video_count: state.profile.saved_video_count + 1,
        },
      };
    case INCREASE_RESUME_COUNT:
      return {
        ...state,
        profile: {
          ...state.profile,
          saved_resume_count: state.profile.saved_resume_count + 1,
        },
      };
    case UPGRADE_ACCOUNTS:
      return {
        ...state,
        premiums: action.payload,
      };
    case GET_ZP_JOBS:
      return {
        ...state,
        zpJobs: action.payload.data,
      };
    case CHECK_USER_REGISTRATION:
      return {
        ...state,
        isRegistered: action.payload.is_registered,
      };
    case GET_COMPANY_NAME:
      return {
        ...state,
        companyName: action.payload.company_name,
      };
    case GET_RECORD_STATUS:
      return {
        ...state,
        isRecorded: action.payload.is_recorded,
      };
    case GET_RECEIVED_INTERVIEW:
      return {
        ...state,
        received_interview: action.payload.received_interview,
        loaded: true,
      }
    default:
      return state;
  }
}
