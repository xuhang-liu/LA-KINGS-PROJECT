import {
    GET_ALL_JOBS,
    GET_CURRENT_JOBS,
} from "../actions/action_types";

const initialState = {
  jobs: [],
  isLoaded: false,
  job: {},
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
    default:
      return state;
  }
}
