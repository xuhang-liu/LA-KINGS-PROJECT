import React, { useEffect, useRef } from 'react';
//import { Link } from "react-router-dom";
import {FacebookShareButton,  LinkedinShareButton} from "react-share";
import { OverallScore, ProgressBarResume } from "./Components";
import {goodResult, badResult} from "./../../constants/constants";

export function RateSummary(props) {
    var r = props.resume;
    var result_rate = "0";
    var ats_findings_count = "0";
    var ats_findings_count_total = "0";
    var rec_findings_count = "0";
    var rec_findings_count_total = "0";
    var skills_match_count = "0";
    var skills_match_count_total = "0";

    if (r.result_rate != null) { result_rate = r.result_rate; }
    if (r.ats_findings_count != null) { ats_findings_count = r.ats_findings_count; }
    if (r.ats_findings_count_total != null) { ats_findings_count_total = r.ats_findings_count_total; }
    if (r.rec_findings_count != null) { rec_findings_count = r.rec_findings_count; }
    if (r.rec_findings_count_total != null) { rec_findings_count_total = r.rec_findings_count_total; }
    if (r.skills_match_count != null) { skills_match_count = r.skills_match_count; }
    if (r.skills_match_count_total != null) { skills_match_count_total = r.skills_match_count_total; }

    return (
        <section className="funfacts-inner container" style={{width: "90%", marginTop: "2rem"}}>
            <div className="row">
                <div className="col-4 pl-0" style={{}}>
                    <div className="single-funfacts funfact-style-two resume-box pb-2">
                        <h2 style={{color:"#090D3A"}}>Match Rate</h2>
                        <OverallScore percent={result_rate} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
                    </div>
                </div>
                <div className="col-8 pr-0" style={{}}>
                    <div className="px-4 single-funfacts funfact-style-two resume-box">
                        <div className="row pl-3 ">
                            <h2  className="resume-res" style={{textAlign: "left", fontWeight:"600", fontSize:"1.5rem", display:"block"}}>Your resume match rate reached {result_rate}% out of 100%</h2>
                        </div>
                        <ProgressBar result_rate={result_rate} />
                        <p className="resume-text1" style={{color: '#4A6F8A', textAlign: "left"}}>
                            {result_rate >= 75 ? goodResult : badResult}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-4 col-sm-12 pl-0">
                    <div className="single-funfacts funfact-style-two resume-box" onClick={props.renderATS}>
                        <p className="resume-res ml-4" style={{fontWeight: '600', marginBottom: "1rem"}}>ATS Findings</p>
                        <ProgressBarResume percent={ats_findings_count} max={ats_findings_count_total} height={7.5} />
                    </div>
                </div>
                <div className="col-lg-4 col-4 col-sm-12">
                    <div className="single-funfacts funfact-style-two resume-box" onClick={props.renderRCF}>
                        <p className="resume-res ml-4" style={{fontWeight: '600', marginBottom: "1rem"}}>Recruiter Findings</p>
                        <ProgressBarResume percent={rec_findings_count} max={rec_findings_count_total} height={7.5} />
                    </div>
                </div>
                <div className="col-lg-4 col-4 col-sm-12" style={{paddingRight: "0px"}}>
                    <div className="single-funfacts funfact-style-two resume-box" onClick={props.renderHSM}>
                        <p className="resume-res ml-4" style={{fontWeight: '600', marginBottom: "1rem"}}>Skills Match</p>
                        <ProgressBarResume percent={skills_match_count} max={skills_match_count_total} height={7.5} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const ProgressBar = (props) =>{
    const percentage = useRef();

    useEffect(() => {
        var temp = props.result_rate * 90 / 100;
        percentage.current = temp + "%";
    }, []);

    return <div className="mt-3 mb-2" style={{position:"relative"}}>
        <div style={{zIndex:"2", height:"1.2rem", width:"100%", background:"green", backgroundImage:"linear-gradient(to left, green, yellow, red)", borderRadius:"0.75rem"}} />
        <i class='bx bxs-up-arrow' style={{zIndex:"5", background:"none", position:"absolute", top:"-0.7rem", left:`${percentage.current}`}}></i>
        <div className="row mt-3">
            <p className="ml-3">0</p>
            <p style={{position:"absolute", right:"0%"}}>100</p>
        </div>
    </div>
}