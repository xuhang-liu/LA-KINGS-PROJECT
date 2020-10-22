import axios from "axios";
import {
  GET_VIDEOSENTENCES,
} from "./action_types";
import { createMessage, returnErrors } from "./message_actions";
import { tokenConfig } from "./auth_actions";

export const getSentences = (videoId) => (dispatch, getState) => {
  axios
    .get(`/api/video-sentences?videoId=${videoId}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_VIDEOSENTENCES,
        payload: res.data,
      });
      console.log("get video sentences");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};