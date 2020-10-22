import { GET_SUBCATEGORIES } from "../actions/action_types";

const initialState = {
  subcategories: [],
  loaded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
      case GET_SUBCATEGORIES:
      return {
        ...state,
        loaded: true,
        subcategories: action.payload.subcategories,
      };
    default:
      return state;
  }
}
