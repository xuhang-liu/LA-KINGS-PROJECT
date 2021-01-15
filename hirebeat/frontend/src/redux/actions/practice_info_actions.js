import {FETCH_PRACTICE_INFO, FETCH_INTERVIEW_JOB_INFO} from "../actions/action_types"
import axios from "axios";
export const get_practice_info = (userId) => (dispatch) => {
    axios.get(`get_practice_info/${userId}`).then((res) => {
            dispatch({
                type: FETCH_PRACTICE_INFO,
                payload: {
                    videos_practiced : res.data.videos_practiced,
                    resume_scanned : res.data.resume_scanned,
                    videos_reviewed : res.data.videos_reviewed,
                    interviews_recorded : res.data.interviews_recorded,
                }
            })
    });
};
export const get_interview_job_info = (employerId) => (dispatch) => {
    axios.get(`get_interview_job/${employerId}`).then((res) => {
            dispatch({
                type: FETCH_INTERVIEW_JOB_INFO,
                payload: {
                    jobs_posted : res.data.jobs_posted,
                    total_applicants : res.data.total_applicants,
                    videos_received : res.data.videos_received,
                    recorded_rate : res.data.recorded_rate,
                }
            })
    });
};