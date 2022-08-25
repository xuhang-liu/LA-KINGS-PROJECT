import {
    GET_EMAIL_TEMPLATES,
    UPDATE_EMAIL_PREFERENCES,
    GET_EMAIL_PREFERENCES
} from "../actions/action_types";

const initialState = {
    preferences: [],
    templates: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EMAIL_TEMPLATES:
            state.templates = action.payload.data;
            break;
        case UPDATE_EMAIL_PREFERENCES:
            state.preferences = action.payload.data;
            break;
        case GET_EMAIL_PREFERENCES:
            state.preferences = action.payload.data;
            break;
        default:
            state = state;
    }

    return state;
}
