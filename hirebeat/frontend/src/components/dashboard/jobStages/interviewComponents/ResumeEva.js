import React, { Component } from "react";

export class ResumeEva extends Component {

    constructor(props) {
        super(props);
        let matchCount = this.getSkillsMatchCount();
        this.state = {
            matchCount: matchCount,
            totalSkillsCount: this.props.interviewResume.required_skills_name?.length + this.props.interviewResume.extra_skills_name?.length || 0,
            transferableSkillsCount: this.props.interviewResume.transferable_skills_name?.length || 0,
        };
    }

    getSkillsMatchCount = () => {
        let matchCount = 0;
        // count required skills part
        let requiredSkills = this.props.interviewResume.required_skills_on_resume;
        for (let i = 0; i < requiredSkills?.length; i++) {
            if (requiredSkills[i]) {
                matchCount++;
            }
        }
        // count extra skills part
        let extraSkills = this.props.interviewResume.extra_skills_on_resume;
        for (let i = 0; i < extraSkills?.length; i++) {
            if (extraSkills[i]) {
                matchCount++;
            }
        }
        return matchCount;
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h4 className="resume-text2">Required Skills <span style={{color: "#67A3F3"}}>({this.state.matchCount}/{this.state.totalSkillsCount})</span></h4>
                        </div>
                        <div className="col-6">
                            <h4 className="resume-text2">Transferable Skills <span style={{color: "#67A3F3"}}>({this.state.transferableSkillsCount})</span></h4>
                        </div>
                    </div>
                    <div className="row" style={{marginBottom: "2rem"}}>
                        <div className="col-6">
                            <div className="col-12 resume-border">
                                <KeywordsRow
                                    background={"#e8edfc"}
                                    className={"resume-text3"}
                                    style={{ color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem", paddingTop: "0.5rem", paddingBottom: "0.5rem"}}
                                    jd={["Skills"]}
                                    resume={["Resume"]}
                                    info={["Occurrence"]}
                                />
                                <KeywordsRow
                                    background={"#ffffff"}
                                    className={"resume-text5"}
                                    style={{ color: "#090D3A", fontWeight: "600", fontSize: "0.9375rem" }}
                                    jd={this.props.interviewResume.required_skills_name}
                                    resume={this.props.interviewResume.required_skills_on_resume}
                                    info={this.props.interviewResume.required_skills_occurrence}
                                />
                                {this.props.interviewResume.extra_skills_name?.length > 0 &&
                                    <hr
                                        style={{
                                            color: "#E8EDFC",
                                            backgroundColor: "#E8EDFC",
                                            height: 3,
                                            marginBottom: "0.5rem",
                                            marginTop: "0.5rem"
                                        }}
                                    />
                                }
                                <KeywordsRow
                                    background={"#ffffff"}
                                    className={"resume-text5"}
                                    style={{ color: "#090D3A", fontWeight: "600", fontSize: "0.9375rem" }}
                                    jd={this.props.interviewResume.extra_skills_name}
                                    resume={this.props.interviewResume.extra_skills_on_resume}
                                    info={this.props.interviewResume.extra_skills_occurrence}
                                />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="col-12 resume-border">
                                <KeywordsRow
                                    background={"#e8edfc"}
                                    className={"resume-text3"}
                                    style={{ color: "#4A6F8A", fontWeight: "600", fontSize: "0.9375rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                                    jd={["Skills"]}
                                    resume={["Resume"]}
                                    info={["Occurrence"]}
                                />
                                <KeywordsRow
                                    background={"#ffffff"}
                                    className={"resume-text5"}
                                    style={{ color: "#090D3A", fontWeight: "600", fontSize: "0.9375rem" }}
                                    jd={this.props.interviewResume.transferable_skills_name}
                                    resume={this.props.interviewResume.transferable_skills_on_resume}
                                    info={this.props.interviewResume.transferable_skills_occurrence}
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
        <div>
            {props.jd?.map((s, index) => {
                return (
                    <div className="row align-items-center" style={{ background: props.background }}>
                        <div className="col-4" style={{ textAlign: "center"}}>
                            <p className={props.className} style={props.style}>{props?.jd[index]}</p>
                        </div>
                        <div className="col-4" style={{ textAlign: "center"}}>
                            {
                                props?.resume[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{ color: "#FF0000" }}></i>)
                                    : props?.resume[index] == "1" ? (
                                        <i className='bx bx-check bx-md' style={{ color: "#13C4A1" }}></i>) : (
                                        <p className={props.className} style={props.style}>{props?.resume[index]}</p>)
                            }
                        </div>
                        <div className="col-4" style={{ textAlign: "center"}}>
                            <p className={props.className} style={props.style}>{props?.info[index]}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default ResumeEva;