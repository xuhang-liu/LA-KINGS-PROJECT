import React from 'react';
import { AtsRow, AtsMultipleRows } from "./../Components";

export function AtsFindings(props) {
    var r = props.resume;
    return (
        <div>
            <h4 className="resume-text2">ATS Findings</h4>
            <AtsRow name={"SKILLS AND KEYWORDS"} status={r.skills_keywords_bool} desc={r.skills_keywords} />
            <AtsRow name={"EDUCATION MATCH"} status={r.education_match_bool} desc={r.education_match} />
            <AtsRow name={"SECTION HEADINGS"} status={r.section_headings_bool} desc={r.section_headings} />
            <AtsMultipleRows name={"FILE TYPE"} status={r.file_type_list_bool} desc={r.file_type_list} />
            <AtsRow name={"DATE FORMATTING"} status={r.data_formating_bool} desc={r.data_formating} />
        </div>
    );
};
