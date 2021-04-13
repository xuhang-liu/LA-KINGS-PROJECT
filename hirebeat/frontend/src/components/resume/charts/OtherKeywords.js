import React from 'react';
import { KeywordsRow } from "./../Components";

export function OtherKeywords(props) {
    var r = props.resume;
    var other_skill_skills_list = [];
    var other_skill_resume_list = [];
    var other_skill_jd_list = [];

    if (r.other_skill_skills_list != null) { other_skill_skills_list = r.other_skill_skills_list; }
    if (r.other_skill_resume_list != null) { other_skill_resume_list = r.other_skill_resume_list; }
    if (r.other_skill_jd_list != null) { other_skill_jd_list = r.other_skill_jd_list; }

    return (
        <div>
            <h4 className="resume-text2 my-4">Other Keywords</h4>
            <KeywordsRow
                className={"resume-text3"}
                skills={["SKILLS"]}
                resume={["RESUMES"]}
                jd={["JOB DESCRIPTION"]}
            />
            <KeywordsRow
                className={"resume-text5"}
                style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                skills={other_skill_skills_list}
                resume={other_skill_resume_list}
                jd={other_skill_jd_list}
            />
        </div>
    );
};
