import {
    GET_ALL_JOBS,
    GET_CURRENT_JOBS,
    GET_JOBID_LIST,
    GET_COMAPNY_BRANDING_INFO,
} from "../actions/action_types";

const initialState = {
  jobs: [],
  isLoaded: false,
  job: {},
  jobid_list: [],
  jobs_branding: [],
  company_logo: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        isLoaded: true,
        jobs: action.payload.data,
      };
    case GET_CURRENT_JOBS:
      return {
        ...state,
        job: action.payload.data,
      };
    case GET_JOBID_LIST:
      return {
        ...state,
        jobid_list: action.payload.data,
      }
    case GET_COMAPNY_BRANDING_INFO:
      return {
        ...state,
        jobs_branding: action.payload.data,
        company_logo: action.payload.company_logo,
      }
    default:
      return state;
  }
}
