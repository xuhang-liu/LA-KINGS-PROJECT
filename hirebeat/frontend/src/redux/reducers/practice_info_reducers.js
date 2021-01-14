import {FETCH_PRACTICE_INFO} from "../actions/action_types"
const initialState = {
    videos_practiced : 0,
    resume_scanned : 0,
    videos_reviewed : 0,
    interviews_recorded : 0,
    jobs_posted: 0,
    total_applicants: 0,
    videos_received: 0,
    recorded_rate: 0,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRACTICE_INFO:
            return action.payload;
        default:
            return {...state}
    }
}