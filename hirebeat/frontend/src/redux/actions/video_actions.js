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
  GET_VIDEOS_APPLICANT,
  ADD_WP_VIDEO,
  GET_APPLICANT_INFO,
  UPDATE_COMMENT_STATUS,
  UPDATE_VIDEO_COMMENTS,
  ADD_TQ_VIDEO_LIMIT,
} from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getApplicantsVideos = (email, positionId) => (dispatch, getState) => {
  axios
    .get(`get-applicants-videos?email=${email}&positionId=${positionId}`, tokenConfig(getState))
    .then((res) => {
      console.log("get applicant video");
      console.log(res.data);
      dispatch({
        type: GET_VIDEOS_APPLICANT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getApplicantsInfo = (email) => (dispatch, getState) => {
  axios
    .get(`get-applicants-info?email=${email}`, tokenConfig(getState))
    .then((res) => {
      console.log("get applicant info");
      console.log(res.data);
      dispatch({
        type: GET_APPLICANT_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

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

export const deleteVideo = (videoId) => (dispatch, getState) => {
  axios
    .post("/api/video/deletion", videoId, tokenConfig(getState))
    .then((res) => {
      console.log("video deleted")
      dispatch({
        type: DELETE_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
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
//      dispatch({
//        type: INCREASE_VIDEO_COUNT,
//      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addWPVideo = (video) => (dispatch) => {
  axios
    .post("/api/wp-videos", video)
    .then((res) => {
      dispatch({
        type: ADD_WP_VIDEO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateComments = (data) => (dispatch) =>
{
  axios
    .post("updating-video-comments", data)
    .then((res) => {
      dispatch({
        type: UPDATE_VIDEO_COMMENTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addTQVideoLimit = (owner_id, id, type) => (dispatch, getState) => {
  const body = JSON.stringify({
    owner_id,
    id,
    type
  });
  return axios
    .post(`add-tq-video-limit`, body, tokenConfig(getState))
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADD_TQ_VIDEO_LIMIT,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};