import React from 'react';
import { SkillsRow } from "./../Components";

export function SoftSkillsMatch(props) {
    var r = props.resume;
    return (
        <div>
            <h4 className="resume-text2">Soft Skills Match</h4>
            <SkillsRow
                className={"resume-text3"}
                skills={["SKILLS"]}
                variations={["VARIATIONS"]}
                resume={["RESUMES"]}
                jd={["JOB DESCRIPTION"]}
            />
            <SkillsRow
                className={"resume-text5"}
                style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                vStyle={{fontSize: "0.75rem"}}
                skills={r.soft_skill_skills_list}
                variations={r.soft_skill_variations_list}
                resume={r.soft_skill_resume_list}
                jd={r.soft_skill_jd_list}
            />
        </div>
    );
};
