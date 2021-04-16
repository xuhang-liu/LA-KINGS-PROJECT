import {
    ADD_NEW_JOB,
    GET_ALL_JOBS,
    UPDATE_JOB,
    ARCHIVE_JOB,
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