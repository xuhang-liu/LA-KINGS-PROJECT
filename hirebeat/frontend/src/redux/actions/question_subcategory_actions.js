import { GET_SUBCATEGORIES } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";

export const getSubcategories = (category) => (dispatch, getState) => {
  axios
    .get(`/subcategories?category=${category}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SUBCATEGORIES,
        payload: res.data,
      });
      console.log("question subcategories loaded");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
