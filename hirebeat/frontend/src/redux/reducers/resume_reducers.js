import {
  GET_RESUMES,
  ADD_RESUME,
  DELETE_RESUME,
} from "../actions/action_types";

const initialState = {
  resumes: [],
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESUMES:
      return {
        ...state,
        resumes: action.payload,
        loaded: true,
      };
    case DELETE_RESUME:
      return {
        ...state,
        resumes: state.resumes.filter((resume) => resume.id !== action.payload),
      };
    case ADD_RESUME:
      return {
        ...state,
        resumes: [...state.resumes, action.payload],
      };
    default:
      return state;
  }
}
