import {
    GET_ALL_JOBS,
    GET_CURRENT_JOBS,
    GET_JOBID_LIST,
    GET_COMAPNY_BRANDING_INFO,
    GET_RESUME_FROM_JOB_APPLICATION,
    CREATE_MERGE_LINK_TOKEN,
} from "../actions/action_types";

const initialState = {
  jobs: [],
  isLoaded: false,
  job: {},
  jobid_list: [],
  jobs_branding: [],
  company_logo: "",
  summary: "",
  video_url: "",
  website: "",
  location: "",
  company_size: "",
  company_type: "",
  linkedin: "",
  twitter: "",
  facebook: "",
  jobApplicationResume: "",
  contact_email: "",
  link_token: "",
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
        summary: action.payload.summary,
        video_url: action.payload.video_url,
        website: action.payload.website,
        location: action.payload.location,
        company_size: action.payload.company_size,
        company_type: action.payload.company_type,
        linkedin: action.payload.linkedin,
        twitter: action.payload.twitter,
        facebook: action.payload.facebook,
        contact_email: action.payload.contact_email,
      }
    case GET_RESUME_FROM_JOB_APPLICATION:
      return {
        ...state,
        jobApplicationResume: action.payload.data.resume_url,
      }
    case CREATE_MERGE_LINK_TOKEN:
      return {
        ...state,
        link_token: action.payload.link_token
      }
    default:
      return state;
  }
}
