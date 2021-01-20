import {
    GET_QUESTIONS,
    NEXT_QUESTION,
    RETRY_B_QUESTION ,
    RETRY_T_QUESTION,
    GET_RANDOM_QUESTION,
    GET_INTERVIEW_QUESTIONS,
    ADD_POSITION,
    GET_POSTED_JOBS,
    ADD_INTERVIEWS,
    SUBMIT_FEEDBACK,
    RESEND_INVITATION,
    } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";
import { useDispatch } from 'react-redux';

export const addPosition = (jobtitle, jobid, userid, question1, question2, question3) => (dispatch, getState) => {
  const body = JSON.stringify({jobtitle, jobid, userid, question1, question2, question3});
  axios
    .post("add-position", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_POSITION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

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

export const getInterviewQuestions = (positionId) => (dispatch, getState) => {
  axios
    .get(`/get-interview-questions?position_id=${positionId}`)
    .then((res) => {
      dispatch({
        type: GET_INTERVIEW_QUESTIONS,
        payload: res.data,
      });
      console.log("question loaded");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getPostedJobs = (userId) => (dispatch, getState) => {
  axios
    .get(`/get-posted-jobs?user_id=${userId}`, tokenConfig(getState))
    .then((res) => {
      console.log("get posted jobs");
      dispatch({
        type: GET_POSTED_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInterviews = (data) => (dispatch, getState) => {
  axios
    .post("add-interviews", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_INTERVIEWS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const submitFeedback = (rating, feedback, email) => (dispatch, getState) => {
  const body = JSON.stringify({rating, feedback, email});
  axios
    .post("submit-feedback", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SUBMIT_FEEDBACK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const resendInvitation = (data) => (dispatch, getState) => {
  axios
    .post("resend-invitation", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: RESEND_INVITATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};