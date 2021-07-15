import React from 'react';
import { SkillsRow } from "./../Components";

export function SoftSkillsMatch(props) {
    var r = props.resume;
    var soft_skill_skills_list = [];
    var soft_skill_variations_list = [];
    var soft_skill_resume_list = [];
    var soft_skill_jd_list = [];

    if (r.soft_skill_skills_list != null) { soft_skill_skills_list = r.soft_skill_skills_list; }
    if (r.soft_skill_variations_list != null) { soft_skill_variations_list = r.soft_skill_variations_list; }
    if (r.soft_skill_resume_list != null) { soft_skill_resume_list = r.soft_skill_resume_list; }
    if (r.soft_skill_jd_list != null) { soft_skill_jd_list = r.soft_skill_jd_list; }

    return (
        <div>
            <h4 className="resume-text2 my-4">Tools and Technologies</h4>
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
                skills={soft_skill_skills_list}
                variations={soft_skill_variations_list}
                resume={soft_skill_resume_list}
                jd={soft_skill_jd_list}
            />
        </div>
    );
};
