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
    UPDATE_CANDIDATA_VIEWED_STATUS,
    GET_ZR_FEED_XML,
    GET_ZR_PREMIUM_FEED_XML,
    GET_COMAPNY_BRANDING_INFO,
    GET_RESUME_FROM_JOB_APPLICATION,
    CREATE_MERGE_LINK_TOKEN,
    RETRIEVE_MERGE_ACCOUNT_TOKEN,
    CHECK_FREE_ACCOUNT_ACTIVE_JOBS,
    SEND_MERGE_API_REQUEST,
    ADD_CAND_FROM_MERGE,
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

export const updateCandidateViewedStatus = (data) => (dispatch, getState) => {
  axios
    .post("jobs/update-viewed-status", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_CANDIDATA_VIEWED_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getZRFeedXML = () => (dispatch, getState) => {
  axios
    .get(`jobs/get-zr-xml`)
    .then((res) => {
      dispatch({
        type: GET_ZR_FEED_XML,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getZRPremiumFeedXML = () => (dispatch, getState) => {
  axios
    .get(`jobs/get-zr-premium-xml`)
    .then((res) => {
      dispatch({
        type: GET-GET_ZR_PREMIUM_FEED_XML,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getCompanyBrandingInfo = (companyName) => (dispatch, getState) => {
  axios
    .get(`${companyName}/get-company-branding-info`)
    .then((res) => {
      dispatch({
        type: GET_COMAPNY_BRANDING_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getResumeFromJobApplication = (positionId, email) => (dispatch, getState) => {
  axios
    .get(`jobs/get-resume-from-job-application?positionId=${positionId}&email=${email}`)
    .then((res) => {
      dispatch({
        type: GET_RESUME_FROM_JOB_APPLICATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const createMergeLinkToken = (userid) => (dispatch, getState) => {
  axios
    .get(`jobs/create-merge-link-token?userId=${userid}`)
    .then((res) => {
      dispatch({
        type: CREATE_MERGE_LINK_TOKEN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const retrieveMergeAccountToken = (data) => (dispatch, getState) => {
  axios
    .post("jobs/retrieve-merge-account-token", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: RETRIEVE_MERGE_ACCOUNT_TOKEN,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const checkFreeAccountActiveJobs = (data) => (dispatch, getState) => {
  axios
    .post("jobs/check-free-account-active-jobs", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHECK_FREE_ACCOUNT_ACTIVE_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const sendMergeApiRequest = (data) => (dispatch, getState) => {
  axios
    .post("jobs/send-merge-api-request", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SEND_MERGE_API_REQUEST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addCandFromMerge = (data) => (dispatch, getState) => {
  axios
    .post("jobs/add-cand-from-merge", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_CAND_FROM_MERGE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}