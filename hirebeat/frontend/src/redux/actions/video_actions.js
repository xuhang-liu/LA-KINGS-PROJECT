import axios from "axios";
import {
  GET_VIDEOS,
  DELETE_VIDEO,
  ADD_VIDEO,
  ADD_REVIEWS,
  ADD_LABELS,
  GET_UNREVIEWED_VIDEO,
  GET_UNREVIEWED_VIDEO_LIST,
  GET_REVIEW_COUNT,
  VIDEO_UNDER_REVIEW,
  INCREASE_VIDEO_COUNT,
} from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getVideos = () => (dispatch, getState) => {
  axios
    .get("/api/videos/", tokenConfig(getState))
    .then((res) => {
      console.log("get videos");
      console.log(res.data);
      dispatch({
        type: GET_VIDEOS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteVideo = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/videos/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ successMessage: "Video Deleted" }));
      dispatch({
        type: DELETE_VIDEO,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addVideo = (video) => (dispatch, getState) => {
  axios
    .post("/api/videos/", video, tokenConfig(getState))
    .then((res) => {
      //dispatch(createMessage({ successMessage: "Video Saved" }));
      dispatch({
        type: ADD_VIDEO,
        payload: res.data,
      });
      // dispatch({
      //   type: INCREASE_VIDEO_COUNT,
      // });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getUnreviewedVideo = () => (dispatch, getState) => {
  console.log("getting unreviewed video");
  axios
    .get("get_unreviewed_video", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_UNREVIEWED_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getUnreviewedVideoList = () => (dispatch, getState) => {
  console.log("getting unreviewed video list");
  axios
    .get("get-unreviewed-video-list", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_UNREVIEWED_VIDEO_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getReviewCount = () => (dispatch, getState) => {
  console.log("getting review count");
  axios
    .get("get-review-count", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_REVIEW_COUNT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addVideoReviews = (
  ai_score,
  ai_category_score,
  expert_score,
  expert_category_score,
  comments,
  video_id
) => (dispatch, getState) => {
  const body = JSON.stringify({
    ai_score,
    ai_category_score,
    expert_score,
    expert_category_score,
    comments,
  });

  return axios
    .patch(`api/videos/${video_id}/`, body, tokenConfig(getState))
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

export const addVideoLabels = (label) => (dispatch, getState) => {
  axios
    .post("/api/video-labels", label, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_LABELS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const sendVideoForReview = (type, id) => (dispatch, getState) => {
  const body = JSON.stringify({
    type, // "ai" or "expert"
    id,
  });
  return axios
    .post(`mark_video_as_needed_review`, body, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: VIDEO_UNDER_REVIEW,
        payload: res.data,
      });
      dispatch({
        type: INCREASE_VIDEO_COUNT,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
