import axios from "axios";
import { ADD_RESUME, INCREASE_RESUME_COUNT } from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

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