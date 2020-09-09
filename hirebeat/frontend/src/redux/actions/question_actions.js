import { GET_QUESTIONS, NEXT_QUESTION } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";

export const getQuestions = (number, category) => (dispatch, getState) => {
  axios
    .get(`/questions?number=${number}&category=${category}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data,
      });
      console.log("question loaded");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};
