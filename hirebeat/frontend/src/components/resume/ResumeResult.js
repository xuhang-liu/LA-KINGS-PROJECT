import React, { useState } from 'react';
import { RateSummary } from "./RateSummary";
import { AtsFindings } from "./charts/AtsFindings";
import { RecruiterFindings } from "./charts/RecruiterFindings";
import { HardSkillsMatch } from "./charts/HardSkillsMatch";
import { SoftSkillsMatch } from "./charts/SoftSkillsMatch";
import { OtherKeywords } from "./charts/OtherKeywords";
import { ButtonPanel } from "./panel/ButtonPanel";
import { ResumeFooter } from "./Components";

export function ResumeResult(props) {
    var resume = props.resume;
    const [subpage, setSubpage] = useState("atsFindings");

    function renderATS() {
        setSubpage("atsFindings")
    };

    function renderRCF() {
        setSubpage("recFindings")
    };

    function renderHSM() {
        setSubpage("hardSkills")
    };

    function renderSSM() {
        setSubpage("softSkills")
    };

    function renderOKW() {
        setSubpage("keywords")
    };

    function renderSubpage(resume) {
        switch (subpage) {
            case "atsFindings":
                return <AtsFindings resume={resume} />;
            case "recFindings":
                return <RecruiterFindings resume={resume} />;
            case "hardSkills":
                return <HardSkillsMatch resume={resume} />;
            case "softSkills":
                return <SoftSkillsMatch resume={resume} />;
            case "keywords":
               return <OtherKeywords resume={resume} />;
            default:
            //Do nothing
        }
    };

    return (
        <div>
            <RateSummary resume={resume} />
            <div className="container" style={{marginTop: "4rem", width: "90%"}}>
                <div className="row">
                    <div className="col-3" style={{marginBottom:"auto"}}>
                        <ButtonPanel
                            renderATS={renderATS}
                            renderRCF={renderRCF}
                            renderHSM={renderHSM}
                            renderSSM={renderSSM}
                            renderOKW={renderOKW}
                            subpage={subpage}
                        />
                    </div>
                    <div className="col-9" id="subpage_scroll_overflow" style={{marginBottom:"auto"}}>
                        {renderSubpage(resume)}
                    </div>
                </div>
            </div>
            <ResumeFooter />
        </div>
    );
};