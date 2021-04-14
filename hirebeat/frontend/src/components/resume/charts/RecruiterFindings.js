import React from 'react';
import { AtsRow, RecMultipleRows } from "./../Components";

export function RecruiterFindings(props) {
    var r = props.resume;
    var word_count_bool = false;
    var word_count_text = "";
    var measureable_results_bool = false;
    var measureable_results_list = [];
    var job_level_text_bool = false;
    var job_level_text = "";
    var avoid_words_bool = false;
    var avoid_words_text = "";

    if (r.word_count_bool) { word_count_bool = r.word_count_bool; }
    if (r.word_count_text != null) { word_count_text = r.word_count_text; }
    if (r.measureable_results_bool) { measureable_results_bool = r.measureable_results_bool; }
    if (r.measureable_results_list != null) { measureable_results_list = r.measureable_results_list; }
    if (r.job_level_text_bool) { job_level_text_bool = r.job_level_text_bool; }
    if (r.job_level_text != null) { job_level_text = r.job_level_text; }
    if (r.avoid_words_bool) { avoid_words_bool = r.avoid_words_bool; }
    if (r.avoid_words_text != null) { avoid_words_text = r.avoid_words_text; }

    return (
        <div>
            <h4 className="resume-text2 my-4">Recruiter Findings</h4>
            <AtsRow name={"WORD COUNT"} status={word_count_bool} desc={word_count_text} />
            <RecMultipleRows name={"MEASURABLE RESULTS"} status={measureable_results_bool} desc={measureable_results_list} />
            <AtsRow name={"JOB LEVEL MATCH"} status={job_level_text_bool} desc={job_level_text} />
            <AtsRow name={"WORDS TO AVOID"} status={avoid_words_bool} desc={avoid_words_text} />
        </div>
    );
};
