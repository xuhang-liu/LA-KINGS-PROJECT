import {
  GET_VIDEOUSER,
} from "../actions/action_types";

const initialState = {
  email: '',
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOUSER:
      return {
        ...state,
        email: action.payload.email,
        loaded: true,
      };
    default:
      return state;
  }
}
 