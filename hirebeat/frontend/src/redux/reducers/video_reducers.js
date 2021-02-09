import {
  GET_VIDEOS,
  DELETE_VIDEO,
  ADD_VIDEO,
  ADD_REVIEWS,
  ADD_LABELS,
  GET_UNREVIEWED_VIDEO,
  GET_UNREVIEWED_VIDEO_LIST,
  GET_REVIEW_COUNT,
  VIDEO_UNDER_REVIEW,
  GET_VIDEOS_APPLICANT,
  GET_APPLICANT_INFO,
  UPDATE_VIDEO_COMMENTS,
  GET_RESUME_URL,
} from "../actions/action_types";

const initialState = {
  videos: [],
  unreviewed_videos: [],
  q_type: '',
  q_category: '',
  q_description: '',
  loaded: false,
  review_count: 0,
  nums: 0,
  deleted_video_id: 0,
  int_ques: [],
  username_candidate: '',
  email_candidate: '',
  phone_candidate: '',
  location_candidate: '',
  new_comment: '',
  new_stars: 0,
  recordTime: null,
  resumeURL: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loaded: true,
      };
    case UPDATE_VIDEO_COMMENTS:
      return{
        ...state,
        new_stars: action.payload.new_stars,
        new_comment: action.payload.new_comment,
      }
    case GET_UNREVIEWED_VIDEO:
      return {
        q_type: action.payload.video.q_type,
        q_category: action.payload.video.q_category,
        q_description: action.payload.video.q_description,
        videos: action.payload.video,
        loaded: true,
        review_count: action.payload.review_count,
      };
    case GET_UNREVIEWED_VIDEO_LIST:
      return {
        unreviewed_videos: action.payload.data,
        nums: action.payload.nums,
        review_count: action.payload.review_count,
        loaded: true,
      };
    case GET_REVIEW_COUNT:
      return {
        review_count: action.payload.review_count,
      };
    case DELETE_VIDEO:
      return {
        ...state,
        deleted_video_id: action.payload.deleted_video_id,
//        videos: state.videos.filter((video) => video.id !== action.payload),
      };
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case VIDEO_UNDER_REVIEW:
      return {
        ...state,
        videos: state.videos.map((video) => {
          if (video.id == action.payload.id) {
            return {
              ...video,
              needed_expert_review: action.payload.needed_expert_review,
              needed_ai_review: action.payload.needed_ai_review,
            };
          }
          return video;
        }),
      };
    case ADD_REVIEWS:
    case ADD_LABELS:
    case GET_VIDEOS_APPLICANT:
      return {
        ...state,
        int_ques: action.payload.int_ques,
      }
    case GET_APPLICANT_INFO:
      return {
        ...state,
        username_candidate: action.payload.username_candidate,
        email_candidate: action.payload.email_candidate,
        phone_candidate: action.payload.phone_candidate,
        location_candidate: action.payload.location_candidate,
      }
    case GET_RESUME_URL:
      return {
        ...state,
        resumeURL: action.payload.resumeURL,
        recordTime: action.payload.recordTime,
      }
    default:
      return state;
  }
}
