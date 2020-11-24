import { GET_QUESTIONS, NEXT_QUESTION } from "../actions/action_types";

const initialState = {
  questions: [],
  q_index: 0,
  q_count: 0,
  last_q: false,
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loaded: true,
        last_q: false,
        q_index: 0,
        questions: action.payload,
        q_count: action.payload.length,
      };
    case NEXT_QUESTION:
      if (state.q_index == state.q_count - 2) {
        console.log("last q");
        return {
          ...state,
          last_q: true,
          q_index: state.q_index + 1,
        };
      } else if (state.q_index == state.q_count - 1) {
        return state;
      }
      return {
        ...state,
        q_index: state.q_index + 1,
      };
    default:
      return state;
  }
}
