import React from 'react';
import { KeywordsRow } from "./../Components";

export function OtherKeywords(props) {
    var r = props.resume;
    return (
        <div>
            <h4 className="resume-text2">Other Keywords</h4>
            <KeywordsRow
                className={"resume-text3"}
                skills={["SKILLS"]}
                resume={["RESUMES"]}
                jd={["JOB DESCRIPTION"]}
            />
            <KeywordsRow
                className={"resume-text5"}
                style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                skills={r.other_skill_skills_list}
                resume={r.other_skill_resume_list}
                jd={r.other_skill_jd_list}
            />
        </div>
    );
};
