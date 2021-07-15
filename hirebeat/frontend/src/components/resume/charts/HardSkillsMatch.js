import React from 'react';
import { SkillsRow } from "./../Components";

export function HardSkillsMatch(props) {
    var r = props.resume;
    var hard_skill_skills_list = [];
    var hard_skill_variations_list = [];
    var hard_skill_resume_list = [];
    var hard_skill_jd_list = [];

    if (r.hard_skill_skills_list != null) { hard_skill_skills_list = r.hard_skill_skills_list; }
    if (r.hard_skill_variations_list != null) { hard_skill_variations_list = r.hard_skill_variations_list; }
    if (r.hard_skill_resume_list != null) { hard_skill_resume_list = r.hard_skill_resume_list; }
    if (r.hard_skill_jd_list != null) { hard_skill_jd_list = r.hard_skill_jd_list; }

    return (
        <div>
            <h4 className="resume-text2 my-4">Industry Knowledge</h4>
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
                skills={hard_skill_skills_list}
                variations={hard_skill_variations_list}
                resume={hard_skill_resume_list}
                jd={hard_skill_jd_list}
            />
        </div>
    );
};
