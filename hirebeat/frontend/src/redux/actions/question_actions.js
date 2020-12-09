import { GET_QUESTIONS, NEXT_QUESTION, RETRY_B_QUESTION , RETRY_T_QUESTION, GET_RANDOM_QUESTION } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";
import { useDispatch } from 'react-redux';

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

export const retryBQuestion = (video, isAudio, dispatch) => {
    const data = {
        q_type: video.q_type,
        q_description: video.q_description,
        q_category: video.q_category,
        q_answer: video.q_answer,
        q_explain: video.q_explain,
        ai_review_categories: video.ai_review_categories,
        expert_review_categories: video.expert_review_categories,
        isAudio: isAudio,
    };
    dispatch({type: RETRY_B_QUESTION, payload: data});
};

export const getRandomQuestion = () => (dispatch) => {
  axios
    .get("/random-question")
    .then((res) => {
      console.log("get random question");
      console.log(res.data);
      dispatch({
        type: GET_RANDOM_QUESTION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};