import { UPDATE_STARS_LIST, GET_QUESTIONS, NEXT_QUESTION, UPDATE_SECONDROUND_STATUS, GET_RANDOM_QUESTION, GET_INTERVIEW_QUESTIONS, NEXT_INTERVIEW_QUESTION, GET_POSTED_JOBS, UPDATE_COMMENT_STATUS, GET_APPLICANTS_DATA, GET_QUESTION_LIST, GET_ANALYTICS_INFO, GET_REVIEW_NOTE } from "../actions/action_types";

const initialState = {
  questions: [],
  q_index: 0,
  q_count: 0,
  last_q: false,
  loaded: false,
  random_question: "",
  random_question_id: 0,
  interview_questions: [],
  interview_question_ids: [],
  questionTime: 0,
  postedJobs: [],
  int_dots: 0,
  job_dots: 0,
  applicantsData: {},
  star_list: {1: 100},
  resume_list: {1:0},
  bqList: [],
  analyticsInfo: {},
  position_list: [],
  interview_session: {},
  interview_position: {},
  reviews: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loaded: true,
        last_q: false,
        q_index: 0,
        questions: action.payload,
        q_count: action.payload.length,
      };
    case NEXT_QUESTION:
      if (state.q_index == state.q_count - 2) {
        return {
          ...state,
          last_q: true,
          q_index: state.q_index + 1,
        };
      } else if (state.q_index == state.q_count - 1) {
        return state;
      }
      return {
        ...state,
        q_index: state.q_index + 1,
      };
    case GET_RANDOM_QUESTION:
      return {
        ...state,
        loaded: true,
        random_question: action.payload.question,
        random_question_id: action.payload.id,
      };
    case GET_INTERVIEW_QUESTIONS:
      return {
        ...state,
        loaded: true,
        last_q: action.payload.questions.length == 1 ? true : false,
        q_index: 0,
        q_count: action.payload.questions.length,
        interview_questions: action.payload.questions,
        interview_question_ids: action.payload.question_ids,
        questionTime: action.payload.questionTime,
        interview_position: action.payload.position,
      };
    case NEXT_INTERVIEW_QUESTION:
      if (state.q_index == state.q_count - 2) {
        return {
          ...state,
          last_q: true,
          q_index: state.q_index + 1
        };
      } else if (state.q_index == state.q_count - 1) {
        return state;
      }
      return {
        ...state,
        q_index: state.q_index + 1,
      };
    case GET_POSTED_JOBS:
      return {
        ...state,
        loaded: true,
        postedJobs: action.payload.data,
        int_dots: action.payload.int_dots,
        job_dots: action.payload.job_dots,
      };
    case UPDATE_COMMENT_STATUS:
      return {
        ...state,
      }
    case GET_APPLICANTS_DATA:
      return {
        ...state,
        loaded: true,
        applicantsData: action.payload.data,
      };
    case UPDATE_SECONDROUND_STATUS:
      return {
        ...state,
        postedJobs: action.payload.data,
      }
    case UPDATE_STARS_LIST:
      return {
        ...state,
        star_list: action.payload.data,
        resume_list: action.payload.data1,
      }
    case GET_QUESTION_LIST:
      return {
        ...state,
        bqList: action.payload.data,
      }
    case GET_ANALYTICS_INFO:
      return {
        ...state,
        analyticsInfo: action.payload.analyticsInfo,
        position_list: action.payload.position_list,
        interview_session: action.payload.interview_session,
      }
    case GET_REVIEW_NOTE:
      return {
        ...state,
        reviews: action.payload.data,
      }
    default:
      return state;
  }
}
