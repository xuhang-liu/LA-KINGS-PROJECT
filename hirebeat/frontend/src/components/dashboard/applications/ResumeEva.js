import React, { Component } from "react";

export class ResumeEva extends Component {

    render() {
        var hard_skill_jd_list = [];
        var hard_skill_resume_list = [];
        var hard_skill_info_list = [];
        var soft_skill_jd_list = [];
        var soft_skill_resume_list = [];
        var soft_skill_info_list = [];
        var other_keyword_jd_list = [];
        var other_keyword_resume_list = [];
        var other_keyword_info_list = [];
        var basic_cri_jd_list = [];
        var basic_cri_resume_list = [];
        var basic_cri_info_list = [];
        if (this.props.interviewResume.hard_skill_jd_list != null) { hard_skill_jd_list = this.props.interviewResume.hard_skill_jd_list; }
        if (this.props.interviewResume.hard_skill_resume_list != null) { hard_skill_resume_list = this.props.interviewResume.hard_skill_resume_list; }
        if (this.props.interviewResume.hard_skill_info_list != null) { hard_skill_info_list = this.props.interviewResume.hard_skill_info_list; }
        if (this.props.interviewResume.soft_skill_jd_list != null) { soft_skill_jd_list = this.props.interviewResume.soft_skill_jd_list; }
        if (this.props.interviewResume.soft_skill_resume_list != null) { soft_skill_resume_list = this.props.interviewResume.soft_skill_resume_list; }
        if (this.props.interviewResume.soft_skill_info_list != null) { soft_skill_info_list = this.props.interviewResume.soft_skill_info_list; }
        if (this.props.interviewResume.other_keyword_jd_list != null) { other_keyword_jd_list = this.props.interviewResume.other_keyword_jd_list; }
        if (this.props.interviewResume.other_keyword_resume_list != null) { other_keyword_resume_list = this.props.interviewResume.other_keyword_resume_list; }
        if (this.props.interviewResume.other_keyword_info_list != null) { other_keyword_info_list = this.props.interviewResume.other_keyword_info_list; }
        if (this.props.interviewResume.basic_cri_jd_list != null) { basic_cri_jd_list = this.props.interviewResume.basic_cri_jd_list; }
        if (this.props.interviewResume.basic_cri_resume_list != null) { basic_cri_resume_list = this.props.interviewResume.basic_cri_resume_list; }
        if (this.props.interviewResume.basic_cri_info_list != null) { basic_cri_info_list = this.props.interviewResume.basic_cri_info_list; }
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                        <h4 className="resume-text2">Hard Skills Match</h4>
                        <div style={{margin:"0.6rem"}}>
                        <KeywordsRow
                            background={"#e8edfc"}
                            className={"resume-text3"}
                            jd={["Job Description"]}
                            resume={["Resume"]}
                            info={["Info"]}
                        />
                        <KeywordsRow
                            background={"#ffffff"}
                            className={"resume-text5"}
                            style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                            jd={hard_skill_jd_list}
                            resume={hard_skill_resume_list}
                            info={hard_skill_info_list}
                        />
                        </div>
                        </div>
                        <div className="col-6">
                        <h4 className="resume-text2">Soft Skills Match</h4>
                        <div style={{margin:"0.6rem"}}>
                        <KeywordsRow
                            background={"#e8edfc"}
                            className={"resume-text3"}
                            jd={["Job Description"]}
                            resume={["Resume"]}
                            info={["Info"]}
                        />
                        <KeywordsRow
                            background={"#ffffff"}
                            className={"resume-text5"}
                            style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                            jd={soft_skill_jd_list}
                            resume={soft_skill_resume_list}
                            info={soft_skill_info_list}
                        />
                        </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                        <h4 className="resume-text2">Other Keywords</h4>
                        <div style={{margin:"0.6rem"}}>
                        <KeywordsRow
                            background={"#e8edfc"}
                            className={"resume-text3"}
                            jd={["Job Description"]}
                            resume={["Resume"]}
                            info={["Info"]}
                        />
                        <KeywordsRow
                            background={"#ffffff"}
                            className={"resume-text5"}
                            style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                            jd={other_keyword_jd_list}
                            resume={other_keyword_resume_list}
                            info={other_keyword_info_list}
                        />
                        </div>
                        </div>
                        <div className="col-6">
                        <h4 className="resume-text2">Basic Criteria</h4>
                        <div style={{margin:"0.6rem"}}>
                        <KeywordsRow
                            background={"#e8edfc"}
                            className={"resume-text3"}
                            jd={["Job Description"]}
                            resume={["Resume"]}
                            info={["Info"]}
                        />
                        <KeywordsRow
                            background={"#ffffff"}
                            className={"resume-text5"}
                            style={{color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem"}}
                            jd={basic_cri_jd_list}
                            resume={basic_cri_resume_list}
                            info={basic_cri_info_list}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export const KeywordsRow = (props) => {
    return (
        <div style={{borderBottom:'1px dashed white'}}>
            {props.jd.map((s, index) => {
                return (
                    <div className="row align-items-center" style={{background: props.background}}>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            <p className={props.className} style={props.style}>{props.jd[index]}</p>
                        </div>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            {
                                props.resume[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>)
                                : props.resume[index] == "1" ? (
                                    <i className='bx bx-check bx-md' style={{color: "#13C4A1"}}></i>): (
                                    <p className={props.className}>{props.resume[index]}</p>)
                            }
                        </div>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                        <p className={props.className} style={props.style}>{props.info[index]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ResumeEva;