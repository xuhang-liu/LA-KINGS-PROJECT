import {FETCH_PRACTICE_INFO, FETCH_INTERVIEW_JOB_INFO} from "../actions/action_types"
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
            return {
                ...state,
                videos_practiced : action.payload.videos_practiced,
                resume_scanned : action.payload.resume_scanned,
                videos_reviewed : action.payload.videos_reviewed,
                interviews_recorded : action.payload.interviews_recorded,
            };
        case FETCH_INTERVIEW_JOB_INFO:
            return {
                ...state,
                jobs_posted: action.payload.jobs_posted,
                total_applicants: action.payload.total_applicants,
                videos_received: action.payload.videos_received,
                recorded_rate: action.payload.recorded_rate,
            };
        default:
            return {...state}
    }
}