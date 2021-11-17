import React, { useEffect, useRef, useState } from 'react';
import { RateSummary } from "./RateSummary";
import { AtsFindings } from "./charts/AtsFindings";
import { RecruiterFindings } from "./charts/RecruiterFindings";
import { HardSkillsMatch } from "./charts/HardSkillsMatch";
import { SoftSkillsMatch } from "./charts/SoftSkillsMatch";
import { OtherKeywords } from "./charts/OtherKeywords";
import { ButtonPanel } from "./panel/ButtonPanel";
import { ResumeFooter } from "./Components";
import ReactToPrint from "react-to-print";

export function ResumeResult(props) {
    var resume = props.resume;
    const [subpage, setSubpage] = useState("atsFindings");
    const printingRef = useRef();

    const ATS = useRef();
    const RCF = useRef();
    const HSM = useRef();
    const SSM = useRef();
    const OKW = useRef();

    function renderATS() {
        setSubpage("atsFindings");
        ATS.current.scrollIntoView({ behavior: 'smooth' });
    };

    function renderRCF() {
        setSubpage("recFindings");
        RCF.current.scrollIntoView({ behavior: 'smooth' });
    };

    function renderHSM() {
        setSubpage("hardSkills");
        HSM.current.scrollIntoView({ behavior: 'smooth' });
    };

    function renderSSM() {
        setSubpage("softSkills");
        SSM.current.scrollIntoView({ behavior: 'smooth' });
    };

    function renderOKW() {
        setSubpage("keywords");
        OKW.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        <div className="row">
            <div className="col-1 pl-5" style={{color:"#006dff", textAlign:"right", display:"flex", alignItems:"center", cursor:"pointer"}} onClick={()=>{
                props.onHide();
            }}>
                <i class='bx bx-left-arrow-alt bx-sm'></i><span style={{fontSize:"1.2rem"}}>Back</span>
            </div>
            <div className="col-10">
            </div>
            <div className="col-1">
                <ReactToPrint
                trigger={() => <i style={{color:"#006dff", cursor:"pointer"}} className='bx bx-printer bx-sm'></i>}
                content={() => printingRef.current}
                />
            </div>
        </div>
    
        <div ref={printingRef}>
            <RateSummary resume={resume} 
                        renderATS={renderATS}
                        renderRCF={renderRCF}
                        renderHSM={renderHSM}
                        />
            <div className="container" style={{width: "90%"}}>
                <div className="row">
                    <div className="col-2 px-0" style={{marginBottom:"auto", position:"sticky", top:"2rem"}}>
                        <ButtonPanel
                            renderATS={renderATS}
                            renderRCF={renderRCF}
                            renderHSM={renderHSM}
                            renderSSM={renderSSM}
                            renderOKW={renderOKW}
                            subpage={subpage}
                        />
                    </div>
                    <div className="col-10 pl-5" style={{marginBottom:"auto"}}>
                        <div ref={ATS}>
                            <AtsFindings resume={resume} />
                        </div>
                        <div ref={RCF}>
                            <RecruiterFindings id="RCF" resume={resume} />
                        </div>
                        <div ref={HSM}>
                            <HardSkillsMatch ref={HSM} resume={resume} />
                        </div>
                        <div ref={SSM}>
                            <SoftSkillsMatch resume={resume} />
                        </div>
                        <div ref={OKW}>
                            <OtherKeywords resume={resume} />
                        </div>
                        
                    </div>
                </div>
            </div>
            <ResumeFooter />
        </div>
        </>
    );
};