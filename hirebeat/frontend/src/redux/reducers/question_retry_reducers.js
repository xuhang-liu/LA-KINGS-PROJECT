import {RETRY_B_QUESTION} from "../actions/action_types";
import {RETRY_T_QUESTION} from "../actions/action_types";

const initialState = {
    q_type: "",
    q_description: "",
    q_category: "",
    q_answer: "",
    q_explain: "",
    ai_review_categories: "",
    expert_review_categories: "",
    isAudio: false,
};
export default function(state = initialState, action) {
    switch (action.type) {
        case RETRY_T_QUESTION:
            return state;

        case RETRY_B_QUESTION:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}