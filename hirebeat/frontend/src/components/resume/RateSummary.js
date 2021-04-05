import React from 'react';
//import { Link } from "react-router-dom";
import {FacebookShareButton,  LinkedinShareButton} from "react-share";
import { OverallScore, ProgressBar } from "./Components";
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
        <section className="funfacts-inner" style={{width: "80%", marginTop: "2rem"}}>
            <div className="row single-funfacts funfact-style-two">
                <div className="col-2">
                    <OverallScore percent={result_rate} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
                </div>
                <div className="col-10">
                    <p className="resume-res" style={{textAlign: "left"}}>YOUR RESULTS</p>
                    <h1 className="resume-h1" style={{textAlign: "left"}}>{result_rate}% out of 100%</h1>
                    <p className="resume-text1" style={{color: '#4A6F8A', textAlign: "left"}}>
                        {result_rate >= 75 ? goodResult : badResult}
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-4 col-sm-12" style={{paddingLeft: "0px"}}>
                    <div className="single-funfacts funfact-style-two">
                        <p className="resume-res" style={{fontWeight: '600', marginBottom: "1rem"}}>ATS Findings</p>
                        <ProgressBar percent={ats_findings_count} max={ats_findings_count_total} height={7.5} />
                    </div>
                </div>
                <div className="col-lg-4 col-4 col-sm-12">
                    <div className="single-funfacts funfact-style-two">
                        <p className="resume-res" style={{fontWeight: '600', marginBottom: "1rem"}}>Recruiter Findings</p>
                        <ProgressBar percent={rec_findings_count} max={rec_findings_count_total} height={7.5} />
                    </div>
                </div>
                <div className="col-lg-4 col-4 col-sm-12" style={{paddingRight: "0px"}}>
                    <div className="single-funfacts funfact-style-two">
                        <p className="resume-res" style={{fontWeight: '600', marginBottom: "1rem"}}>Skills Match</p>
                        <ProgressBar percent={skills_match_count} max={skills_match_count_total} height={7.5} />
                    </div>
                </div>
            </div>
            <div className="row single-footer-widget1">
               <p className="resume-res" style={{color: '#67A3F3'}}>SHARE WITH YOUR FRIENDS TO MATCH RESUME TOO!</p>
                <div className="social" style={{width: "2.5rem", marginTop: "0px"}}>
                    <li className="col-lg-1">
                        <FacebookShareButton
                            url={"https://hirebeat.co/resume"}
                            quote={"Match Resume"}
                            hashtag="#hirebeat"
                        >
                            <a target="_blank">
                                <i className="bx bxl-facebook"></i>
                            </a>
                        </FacebookShareButton>
                    </li>
                </div>
                <div className="social" style={{width: "2.5rem", marginTop: "0px"}}>
                    <li className="col-lg-1">
                        <LinkedinShareButton
                            url={"https://hirebeat.co/resume"}
                            title={"Match Resume"}
                            source={"HireBeat"}
                        >
                            <a target="_blank">
                                <i className="bx bxl-linkedin"></i>
                            </a>
                        </LinkedinShareButton>
                    </li>
                </div>
            </div>
        </section>
    );
};
