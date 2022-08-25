import {
    GET_EMAIL_TEMPLATES,
    UPDATE_EMAIL_PREFERENCES,
    GET_EMAIL_PREFERENCES
} from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";

const baseUrl = "http://localhost:3001/api/v1";

export const getEmailTemplates = () => (dispatch) => {
    axios
        .get(`${baseUrl}/mail/templates`)
        .then((res) => {
            dispatch({
                type: GET_EMAIL_TEMPLATES,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const getEmailPreferences = (userId) => (dispatch) => {
    axios
        .get(`${baseUrl}/mail/preferences/user/${userId}`)
        .then((res) => {
            dispatch({
                type: GET_EMAIL_PREFERENCES,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};


export const updateEmailPreferences = (data) => (dispatch, getState) => {
    axios
        .post(`${baseUrl}/mail/preferences`, data, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: UPDATE_EMAIL_PREFERENCES,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
}
