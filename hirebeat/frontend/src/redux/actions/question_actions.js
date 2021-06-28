import {
    GET_QUESTIONS,
    NEXT_QUESTION,
    RETRY_B_QUESTION ,
    RETRY_T_QUESTION,
    GET_RANDOM_QUESTION,
    GET_INTERVIEW_QUESTIONS,
    ADD_POSITION,
    GET_POSTED_JOBS,
    ADD_INTERVIEWS,
    SUBMIT_FEEDBACK,
    RESEND_INVITATION,
    UPDATE_COMMENT_STATUS,
    CLOSE_POSITION,
    DELETE_POSITION,
    GET_RESUME_URL,
    GET_APPLICANTS_DATA,
    UPDATE_SECONDROUND_STATUS,
    GET_RESUME_URL_ERROR,
    UPDATE_STARS_LIST,
    ADD_SUB_REVIEWER,
    REMOVE_SUB_REVIEWER,
    GET_QUESTION_LIST,
    UPDATE_VIEW_STATUS,
    GET_ANALYTICS_INFO,
    DELETE_INTERVIEW_QUESTIONS,
    ADD_EXTERNAL_REVIEWER,
    DELETE_EXTERNAL_REVIEWER,
    MOVE_CANDIDATE_TO_INTERVIEW,
    SEND_VIDEO_INTERVIEWS,
    ADD_REVIEW_NOTE,
    GET_REVIEW_NOTE,
    ADD_OR_UPDATE_REVIEWER_EVALUATION,
    GET_REVIEWER_EVALUATION,
    GET_CURRENT_EVALUATION,
    GET_REVIEWERS_LIST,
    REMOVE_REVIEWER_FROM_LIST,
    } from "./action_types";
import axios from "axios";
import { tokenConfig } from "./auth_actions";
import { returnErrors } from "./message_actions";
//import { useDispatch } from 'react-redux';

export const addPosition = (jobtitle, jobid, jobdescription, userid, questions, questionTime) => (dispatch, getState) => {
  const body = JSON.stringify({jobtitle, jobid, jobdescription, userid, questions, questionTime});
  axios
    .post("add-position", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_POSITION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getQuestions = (number, category, level) => (dispatch, getState) => {
  axios
    .get(`/questions?number=${number}&category=${category}&level=${level}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data,
      });
      console.log("question loaded");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

export const retryBQuestion = (video, isAudio, dispatch) => {
    const data = {
        q_type: video.q_type,
        q_description: video.q_description,
        q_category: video.q_category,
        q_answer: video.q_answer,
        q_explain: video.q_explain,
        ai_review_categories: video.ai_review_categories,
        expert_review_categories: video.expert_review_categories,
        isAudio: isAudio,
    };
    dispatch({type: RETRY_B_QUESTION, payload: data});
};

export const getRandomQuestion = () => (dispatch) => {
  axios
    .get("/random-question")
    .then((res) => {
      console.log("get random question");
      console.log(res.data);
      dispatch({
        type: GET_RANDOM_QUESTION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getInterviewQuestions = (positionId) => (dispatch, getState) => {
  axios
    .get(`/get-interview-questions?position_id=${positionId}`)
    .then((res) => {
      dispatch({
        type: GET_INTERVIEW_QUESTIONS,
        payload: res.data,
      });
      console.log("question loaded");
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getPostedJobs = (userId) => (dispatch, getState) => {
  axios
    .get(`/get-posted-jobs?user_id=${userId}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_POSTED_JOBS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addInterviews = (data) => (dispatch, getState) => {
  axios
    .post("add-interviews", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_INTERVIEWS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const moveCandidateToInterview = (data) => (dispatch, getState) => {
  axios
    .post("questions/move-candidate-to-interview", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: MOVE_CANDIDATE_TO_INTERVIEW,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const sendInterviews = (data) => (dispatch, getState) => {
  axios
    .post("questions/send-video-interviews", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SEND_VIDEO_INTERVIEWS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const submitFeedback = (rating, feedback, email) => (dispatch, getState) => {
  const body = JSON.stringify({rating, feedback, email});
  axios
    .post("submit-feedback", body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SUBMIT_FEEDBACK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const resendInvitation = (data) => (dispatch, getState) => {
  axios
    .post("resend-invitation", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: RESEND_INVITATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateCommentStatus = (data) => (dispatch, getState) => {
  axios
    .post("update-comment-status", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_COMMENT_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const updateSecondroundStatus = (data) => (dispatch) => {
  axios
    .post("update-secondround-status", data)
    .then((res) => {
      
      dispatch({
        type: UPDATE_SECONDROUND_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const closePosition = (positionId) => (dispatch, getState) => {
  axios
    .post("close-job", positionId, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CLOSE_POSITION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const deletePosition = (positionId) => (dispatch, getState) => {
  axios
    .post("delete-job", positionId, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_POSITION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getResumeURL = (positionId, userId) => (dispatch) => {
  var data = {"positionId": positionId, "userId": userId};
  axios
    .post("get-resume-url", data)
    .then((res) => {
      dispatch({
        type: GET_RESUME_URL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_RESUME_URL_ERROR,
      });
      // Used to suppress error message printed by Chrome
      console.clear();
    });
}

export const getApplicantsData = (employerId) => (dispatch, getState) => {
  axios
    .get(`/get-applicants-data?employerId=${employerId}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_APPLICANTS_DATA,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const loadStarList = JobId => dispatch => {
  axios
    .get(`/get-the-star-list?job_id=${JobId}`)
    .then((res) => {
      console.log("returned res are", res)
      dispatch({
        type: UPDATE_STARS_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addSubReviewer = (data) => (dispatch, getState) => {
  axios
    .post("add_sub_reviewer", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_SUB_REVIEWER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const removeSubReviewer = (data) => (dispatch, getState) => {
  axios
    .post("remove_sub_reviewer", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: REMOVE_SUB_REVIEWER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getQuestionList = () => (dispatch) => {
  axios
    .get("/get-question-list")
    .then((res) => {
      dispatch({
        type: GET_QUESTION_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getAnalyticsInfo = (userId) => (dispatch, getState) => {
  axios
    .get(`/get-analytics-info?user_id=${userId}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ANALYTICS_INFO,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const updateViewStatus = (data) => (dispatch, getState) => {
  axios
    .post("/update-view-status", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_VIEW_STATUS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const deleteInterviewQuestions = (data) => (dispatch, getState) => {
  axios
    .post("questions/delete-interview-questions", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_INTERVIEW_QUESTIONS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addExReviewer = (data) => (dispatch, getState) => {
  axios
    .post("questions/add-external-reviewer", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_EXTERNAL_REVIEWER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const delExReviewer = (data) => (dispatch, getState) => {
  axios
    .post("questions/delete-external-reviewer", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_EXTERNAL_REVIEWER,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addReviewNote = (data) => (dispatch, getState) => {
  axios
    .post("questions/add-review-note", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_REVIEW_NOTE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getReviewNote = (position_id, applicant_email) => (dispatch, getState) => {
  axios
    .get(`/questions/get-review-note?position_id=${position_id}&applicant_email=${applicant_email}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_REVIEW_NOTE,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const addOrUpdateReviewerEvaluation = (data) => (dispatch, getState) => {
  axios
    .post("questions/add-or-update-reviewer-evaluation", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_OR_UPDATE_REVIEWER_EVALUATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getReviewerEvaluation = (position_id, applicant_email) => (dispatch, getState) => {
  axios
    .get(`/questions/get-reviewer-evaluation?position_id=${position_id}&applicant_email=${applicant_email}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_REVIEWER_EVALUATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getCurrentReviewerEvaluation = (position_id, applicant_email, reviewer_email) => (dispatch, getState) => {
  axios
    .get(`/questions/get-current-reviewer-evaluation?position_id=${position_id}&applicant_email=${applicant_email}&reviewer_email=${reviewer_email}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_CURRENT_EVALUATION,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const getReviewersList = (user_id) => (dispatch, getState) => {
  axios
    .get(`/questions/get-reviewers-list?user_id=${user_id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_REVIEWERS_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

export const removeReviewerFromList = (data) => (dispatch, getState) => {
  axios
    .post("questions/remove-reviewer-from-list", data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: REMOVE_REVIEWER_FROM_LIST,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}