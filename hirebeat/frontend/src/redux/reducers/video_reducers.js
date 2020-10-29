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
} from "../actions/action_types";

const initialState = {
  videos: [],
  unreviewed_videos: [],
  q_type: '',
  q_category: '',
  q_description: '',
  loaded: false,
  review_count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loaded: true,
      };
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
        unreviewed_videos: action.payload.video_list,
        loaded: true,
        review_count: action.payload.review_count,
      };
    case GET_REVIEW_COUNT:
      return {
        review_count: action.payload.review_count,
      };
    case DELETE_VIDEO:
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== action.payload),
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
    default:
      return state;
  }
}
