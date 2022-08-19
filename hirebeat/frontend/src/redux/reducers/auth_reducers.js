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
  GET_PROFILE_DETAIL,
  GET_EMPLOYER_PROFILE_DETAIL,
  GET_EMPLOYER_POST,
  CHECK_USER_EXISTENCE,
  CHECK_COMPANY_NAME_EXISTENCE,
  GET_SOURCING_DATA,
  SEARCH_SEEKER_JOBS,
  GET_TOP_SEARCH_KEYWORDS
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
  companyName: "",
  dataLoaded: false,
  isRecorded: false,
  urlClicked: false,
  received_interview: [],
  loaded: false,
  profileDetail: {},
  employerProfileDetail: {},
  employerPost: {},
  employerDetailLoaded: false,
  user_existence: false,
  company_name_existence: false,
  jobTitle: "",
  sourcingData: {},
  sourcingDataLoaded: false,
  seekerJobs: {},
  topKeywords: ["All Jobs"]
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
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      }
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
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
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
    case GET_TOP_SEARCH_KEYWORDS:
      return {
        ...state,
        topKeywords: action.payload.data,
      };
    case SEARCH_SEEKER_JOBS:
      return {
        ...state,
        seekerJobs: action.payload.data,
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
        jobTitle: action.payload.job_title,
      };
    case GET_RECORD_STATUS:
      return {
        ...state,
        dataLoaded: true,
        isRecorded: action.payload.is_recorded,
        urlClicked: action.payload.url_clicked,
      };
    case GET_RECEIVED_INTERVIEW:
      return {
        ...state,
        received_interview: action.payload.received_interview,
        loaded: true,
      }
    case GET_PROFILE_DETAIL:
      return {
        ...state,
        profileDetail: action.payload.data,
      }
    case GET_EMPLOYER_PROFILE_DETAIL:
      return {
        ...state,
        employerProfileDetail: action.payload.data,
      }
    case GET_EMPLOYER_POST:
      return {
        ...state,
        employerDetailLoaded: true,
        employerPost: action.payload,
      }
    case CHECK_USER_EXISTENCE:
      return {
        ...state,
        user_existence: action.payload.data,
      }
    case CHECK_COMPANY_NAME_EXISTENCE:
      return {
        ...state,
        company_name_existence: action.payload.data
      }
    case GET_SOURCING_DATA:
      return {
        ...state,
        sourcingData: action.payload.data,
        sourcingDataLoaded: true,
      }
    default:
      return state;
  }
}
