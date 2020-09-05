import axios from "axios";
import {
  GET_AUDIOS,
  DELETE_AUDIO,
  ADD_AUDIO,
  ADD_REVIEWS,
  GET_UNREVIEWED_AUDIO,
  AUDIO_UNDER_REVIEW,
  INCREASE_AUDIO_COUNT,
} from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getAudios = () => (dispatch, getState) => {
  axios
    .get("/api/audios/", tokenConfig(getState))   // NOTICE HERE
    .then((res) => {
      console.log("get audios");
      console.log(res.data);
      dispatch({
        type: GET_AUDIOS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteAudio = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/audios/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ successMessage: "Audio Deleted" }));
      dispatch({
        type: DELETE_AUDIO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addAudio = (audio) => (dispatch, getState) => {
  axios
    .post("/api/audios/", audio, tokenConfig(getState))
    .then((res) => {
      //dispatch(createMessage({ successMessage: "Video Saved" }));
      dispatch({
        type: ADD_AUDIO,
        payload: res.data,
      });
      dispatch({
        type: INCREASE_AUDIO_COUNT,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getUnreviewedAudio = () => (dispatch, getState) => {
  console.log("getting unreviewed audio");
  axios
    .get("get_unreviewed_audio", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_UNREVIEWED_AUDIO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addAudioReviews = (
  ai_score,
  ai_category_score,
  expert_score,
  expert_category_score,
  comments,
  audio_id
) => (dispatch, getState) => {
  const body = JSON.stringify({
    ai_score,
    ai_category_score,
    expert_score,
    expert_category_score,
    comments,
  });

  return axios
    .patch(`api/audios/${audio_id}/`, body, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_REVIEWS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const sendAudioForReview = (type, id) => (dispatch, getState) => {
  const body = JSON.stringify({
    type, // "ai" or "expert"
    id,
  });
  return axios
    .post(`mark_audio_as_needed_review`, body, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: AUDIO_UNDER_REVIEW,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
