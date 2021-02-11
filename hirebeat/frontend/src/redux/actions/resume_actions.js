import axios from "axios";
import { GET_RESUMES, ADD_RESUME, INCREASE_RESUME_COUNT, DELETE_RESUME } from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getResumes = () => (dispatch, getState) => {
  axios
    .get("/api/resume/", tokenConfig(getState))
    .then((res) => {
      console.log("get resumes");
      console.log(res.data);
      dispatch({
        type: GET_RESUMES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addResume = (resume) => (dispatch, getState) => {
  axios
    .post("/api/resume/", resume, tokenConfig(getState))
    .then((res) => {
      //dispatch(createMessage({ successMessage: "Video Saved" }));
      dispatch({
        type: ADD_RESUME,
        payload: res.data,
      });
      dispatch({
        type: INCREASE_RESUME_COUNT,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInterviewResume = (resume) => (dispatch) => {
  axios
    .post("/add-interview-resume", resume)
    .then((res) => {
      //dispatch(createMessage({ successMessage: "Video Saved" }));
      console.log("I have added Interview Resume without getting error")
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteResume = (resumeId) => (dispatch, getState) => {
  axios
    .post("/api/resume/deletion", resumeId, tokenConfig(getState))
    .then((res) => {
      console.log("resume deleted")
      dispatch({
        type: DELETE_RESUME,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};