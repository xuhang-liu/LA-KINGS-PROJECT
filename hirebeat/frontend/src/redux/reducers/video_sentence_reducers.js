import {
  GET_VIDEOSENTENCES,
} from "../actions/action_types";

const initialState = {
  sentences: [],
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOSENTENCES:
      return {
        ...state,
        sentences: action.payload.sentences,
        loaded: true,
      };
    default:
      return state;
  }
}
