import {FETCH_PRACTICE_INFO} from "../actions/action_types"
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