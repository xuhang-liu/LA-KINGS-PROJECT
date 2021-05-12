import {
    ADD_NEW_JOB,
    GET_ALL_JOBS,
    UPDATE_JOB,
    ARCHIVE_JOB,
    ADD_NEW_APPLY_CANDIDATE,
    GET_CURRENT_JOBS,
    ADD_INTERVIEW_QUESTION,
    UPDATE_INVITE_STATUS,
    DELETE_JOB,
    GET_JOBID_LIST,
    } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";

export const addNewJob = (data) => (dispatch, getState) => {
  axios
    .post("/add-new-job", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_NEW_JOB,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getAllJobs = (userId) => (dispatch, getState) => {
  axios
    .get(`get-all-jobs?userId=${userId}`)
    .then((res) => {
      dispatch({
        type: GET_ALL_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateJob = (data) => (dispatch, getState) => {
  axios
    .post("/update-job", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_JOB,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const archiveJob = (data) => (dispatch, getState) => {
  axios
    .post("/archive-job", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ARCHIVE_JOB,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addNewApplyCandidate = (data) => (dispatch, getState) => {
  axios
    .post("/add-new-apply-candidate", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_NEW_APPLY_CANDIDATE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getCurrentJobs = (jobid) => (dispatch, getState) => {
  axios
    .get(`get-current-jobs?jobid=${jobid}`)
    .then((res) => {
      dispatch({
        type: GET_CURRENT_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInterviewQuestion = (data) => (dispatch, getState) => {
  axios
    .post("/add-interview-question", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_INTERVIEW_QUESTION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const updateInviteStatus = (data) => (dispatch, getState) => {
  axios
    .post("/update-invite-status", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_INVITE_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const deleteJob = (data) => (dispatch, getState) => {
  axios
    .post("/jobs/delete-job", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_JOB,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getjobidlist = (userId) => (dispatch, getState) => {
  axios
    .get(`get-jobid-list?userId=${userId}`)
    .then((res) => {
      dispatch({
        type: GET_JOBID_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}