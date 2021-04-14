import React from 'react';
import { AtsRow, AtsMultipleRows } from "./../Components";

export function AtsFindings(props) {
    var r = props.resume;
    var skills_keywords_bool = false;
    var skills_keywords = "";
    var education_match_bool = false;
    var education_match = "";
    var section_headings_bool = false;
    var section_headings = "";
    var file_type_list_bool = [];
    var file_type_list = [];
    var data_formating_bool = false;
    var data_formating = "";

    if (r.skills_keywords_bool) { skills_keywords_bool = r.skills_keywords_bool; }
    if (r.skills_keywords != null) { skills_keywords = r.skills_keywords; }
    if (r.education_match_bool) { education_match_bool = r.education_match_bool; }
    if (r.education_match != null) { education_match = r.education_match; }
    if (r.section_headings_bool) { section_headings_bool = r.section_headings_bool; }
    if (r.section_headings != null) { section_headings = r.section_headings; }
    if (r.file_type_list_bool != null) { file_type_list_bool = r.file_type_list_bool; }
    if (r.file_type_list != null) { file_type_list = r.file_type_list; }
    if (r.data_formating_bool) { data_formating_bool = r.data_formating_bool; }
    if (r.data_formating != null) { data_formating = r.data_formating; }

    return (
        <div>
            <h4 className="resume-text2 mb-4">ATS Findings</h4>
            <AtsRow name={"SKILLS AND KEYWORDS"} status={skills_keywords_bool} desc={skills_keywords} />
            <AtsRow name={"EDUCATION MATCH"} status={education_match_bool} desc={education_match} />
            <AtsRow name={"SECTION HEADINGS"} status={section_headings_bool} desc={section_headings} />
            <AtsMultipleRows name={"FILE TYPE"} status={file_type_list_bool} desc={file_type_list} />
            <AtsRow name={"DATE FORMATTING"} status={data_formating_bool} desc={data_formating} />
        </div>
    );
};
