import {
    GET_ALL_JOBS
} from "../actions/action_types";

const initialState = {
  jobs: [],
  isLoaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_JOBS:
      return {
        ...state,
        isLoaded: true,
        jobs: action.payload.data,
      };
    default:
      return state;
  }
}
