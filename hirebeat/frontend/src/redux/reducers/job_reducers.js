import {
    GET_ALL_JOBS,
    GET_CURRENT_JOBS,
    GET_JOBID_LIST,
    GET_COMAPNY_BRANDING_INFO,
    GET_RESUME_FROM_JOB_APPLICATION
} from "../actions/action_types";

const initialState = {
  jobs: [],
  isLoaded: false,
  job: {},
  jobid_list: [],
  jobs_branding: [],
  company_logo: "",
  jobApplicationResume: "",
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
    case GET_RESUME_FROM_JOB_APPLICATION:
      return {
        ...state,
        jobApplicationResume: action.payload.data.resume_url,
      }
    default:
      return state;
  }
}
