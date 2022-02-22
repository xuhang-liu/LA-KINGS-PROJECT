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
    GET_PIPELINE_ANALYTICS,
    ADD_NEW_APPLY_CANDIDATE_BY_CV,
    CHECK_IF_MASTER_ACTIVE,
    UPDATE_APPLICANT_BASIC_INFO,
    SWITCH_JOB_CLOSED_STATUS,
    ASSIGN_CREDIT_TO_JOB,
    CHECK_PREMIUM_JOB_LIST
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

export const getAllJobs = (userId, page, subpage, status, sort) => (dispatch, getState) => {
  axios
    .get(`get-all-jobs?userId=${userId}&page=${page}&subpage=${subpage}&status=${status}&sort=${sort}`)
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
    .post("/add-new-apply-candidate", data)
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

export const getCurrentJobs = (jobid, companyName) => (dispatch, getState) => {
  axios
    .get(`${companyName}/get-current-jobs?jobid=${jobid}`)
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

export const getPipelineAnalytics = (data) => (dispatch, getState) => {
  axios
    .post("jobs/get-pipeline-analytics", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PIPELINE_ANALYTICS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addNewApplyCandidateByCv = (data) => (dispatch, getState) => {
  axios
    .post("jobs/add-new-apply-candidate-by-cv", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_NEW_APPLY_CANDIDATE_BY_CV,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const checkIfMasterActive = (data) => (dispatch, getState) => {
  axios
    .post("jobs/check_if_master_active", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHECK_IF_MASTER_ACTIVE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const updateApplicantBasicInfo = (data) => (dispatch, getState) => {
  axios
    .post("jobs/update-applicant-basic-info", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_APPLICANT_BASIC_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const switchJobClosedStatus = (data) => (dispatch, getState) => {
  axios
    .post("jobs/switch-job-closed-status", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SWITCH_JOB_CLOSED_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const assignCreditToJob = (data) => (dispatch, getState) => {
  axios
    .post("jobs/assign-credit-to-job", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ASSIGN_CREDIT_TO_JOB,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const checkPremiumJobList = (data) => (dispatch, getState) => {
  axios
    .post("jobs/check-premium-job-list", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CHECK_PREMIUM_JOB_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}