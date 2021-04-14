import {
    ADD_NEW_JOB,
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