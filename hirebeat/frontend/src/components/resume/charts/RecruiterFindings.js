import React from 'react';
import { AtsRow, RecMultipleRows } from "./../Components";

export function RecruiterFindings(props) {
    var r = props.resume;
    return (
        <div>
            <h4 className="resume-text2">Recruiter Findings</h4>
            <AtsRow name={"WORD COUNT"} status={r.word_count_bool} desc={r.word_count_text} />
            <RecMultipleRows name={"MEASURABLE RESULTS"} status={r.measureable_results_bool} desc={r.measureable_results_list} />
            <AtsRow name={"JOB LEVEL MATCH"} status={r.job_level_text_bool} desc={r.job_level_text} />
            <AtsRow name={"WORDS TO AVOID"} status={r.avoid_words_bool} desc={r.avoid_words_text} />
        </div>
    );
};
