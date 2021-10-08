import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileDetail } from "../../../redux/actions/auth_actions";
import { MyModal80, MyModalContact } from "./../DashboardComponents";
import ReactPlayer from 'react-player';
import DocumentMeta from 'react-document-meta';

export class PublicProfile extends Component {

    state = {
        showResume: false,
        showContact: false,
        user_id: window?.atob(window.location.search?.split("&")[1]?.substring(3)),
    }

    componentDidMount() {
        if (this.state.user_id != "" && this.state.user_id != null) {
            this.props.getProfileDetail(this.state.user_id);
        }
    }

    enableShowResume = () => {
        if (this.props.profileDetail.resume_url == null || this.props.profileDetail.resume_url == "") {
            return alert("No Resume");
        }
        else {
            this.setState({ showResume: true });
        }
    }

    disableShowResume = () => {
        this.setState({ showResume: false });
    }

    openContact = () => {
        this.setState({ showContact: true });
    }

    disableShowContact = () => {
        this.setState({ showContact: false });
    }

    render() {
        const meta = {
            title: 'HireBeat – Talent Profiles',
            description: 'Jobseekers Info',
            canonical: 'https://hirebeat.co/talent-profile',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'Interview, resume screening, behabioral question, internship, career quiz'
                }
            }
        };
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    {( (this.state.user_id != "" && this.state.user_id != null) && ((this.props.profileDetail.share_profile) || (this.state.user_id == this.props.user?.id)) ) ?
                        <div className="py-5" style={{ background: "#E8EDFC", minWidth: "1290px", minHeight: "93vh" }}>
                            <div className="container min-width-1290">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="chart-bg1">
                                            <div style={{ textAlign: "center", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                                {(this.props.profileDetail.logo_url !== null && this.props.profileDetail.logo_url !== "") ?
                                                    <img src={this.props.profileDetail.logo_url} /> :
                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                                }
                                                <h3 style={{ textAlign: "center", color: "#090d3a", fontWeight: "600", marginTop: "1rem" }}>
                                                    {(this.props.profileDetail.f_name !== null && this.props.profileDetail.f_name !== "") ? this.props.profileDetail.f_name + " " + this.props.profileDetail.l_name : "No Name"}
                                                </h3>
                                                <p style={{ textAlign: "center", color: "#090d3a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                    {(this.props.profileDetail.current_job_title !== null && this.props.profileDetail.current_job_title !== "") ? this.props.profileDetail.current_job_title + " at " + this.props.profileDetail.current_company : "No Position"}
                                                </p>
                                                <p style={{ textAlign: "center", color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                    {(this.props.profileDetail.location !== null && this.props.profileDetail.location !== "") ? this.props.profileDetail.location : "No Location"}
                                                </p>
                                                <button className="default-btn" type="button" style={{ marginTop: "0.5rem", paddingLeft: "25px", borderRadius: "8px" }} onClick={this.openContact}>Contact Info</button>
                                                <MyModalContact
                                                    show={this.state.showContact}
                                                    onHide={() => { this.disableShowContact() }}
                                                    contactName={this.props.profileDetail.f_name + " " + this.props.profileDetail.l_name}
                                                >
                                                    <div class="container py-4">
                                                        <h3 className="profile-h3">Contact Info</h3>
                                                        <div className="row" style={{ margin: "auto", width: "60%" }}>
                                                            <div className="col-3">
                                                                <i class='bx bxl-linkedin-square' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>LinkedIn</p>
                                                                <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.profileDetail.linkedin !== null && this.props.profileDetail.linkedin !== "") ? this.props.profileDetail.linkedin : ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{ margin: "auto", width: "60%", paddingTop: "0.5rem" }}>
                                                            <div className="col-3">
                                                                <i class='bx bxs-network-chart' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>Website</p>
                                                                <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.profileDetail.website !== null && this.props.profileDetail.website !== "") ? this.props.profileDetail.website : ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{ margin: "auto", width: "60%", paddingTop: "0.5rem" }}>
                                                            <div className="col-3">
                                                                <i class='bx bxl-github' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>Github</p>
                                                                <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.profileDetail.github !== null && this.props.profileDetail.github !== "") ? this.props.profileDetail.github : ""}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </MyModalContact>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Resume</h3>
                                                <button className="default-btn" type="button" style={{ marginTop: "0.5rem", paddingLeft: "80px", paddingRight: "80px", backgroundColor: "#ffffff", color: "#090d3a", border: "1px solid #E8EDFC", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }} onClick={this.enableShowResume}>View Resume</button>
                                                <MyModal80
                                                    show={this.state.showResume}
                                                    onHide={() => { this.disableShowResume() }}
                                                >
                                                    <div class="iframe-container">
                                                        <iframe className="responsive-iframe" src={this.props.profileDetail.resume_url} />
                                                    </div>
                                                </MyModal80>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Skills</h3>
                                                <div>
                                                    {(this.props.profileDetail?.skills)?.map((skill) => {
                                                        return (
                                                            <span className="circle-tags">{skill}</span>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Languages</h3>
                                                <div>
                                                    {(this.props.profileDetail?.languages)?.map((language) => {
                                                        return (
                                                            <span className="circle-tags">{language}</span>
                                                        )
                                                    })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="chart-bg1">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Summary</h3>
                                                <p style={{ color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                    {(this.props.profileDetail.summary !== null && this.props.profileDetail.summary !== "") ? this.props.profileDetail.summary : "No Summary"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Video Profile</h3>
                                                {(this.props.profileDetail.video_url !== null && this.props.profileDetail.video_url !== "") ?
                                                    <div style={{ marginTop: "0.5rem" }}>
                                                        <ReactPlayer id="rw-video" url={this.props.profileDetail.video_url} controls={true} width={"100%"} height={"100%"} />
                                                    </div> :
                                                    <p style={{ textAlign: "center", color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                        No Video
                                                    </p>
                                                }
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Education</h3>
                                                <div style={{ marginTop: "0.5rem" }}>
                                                    {this.props.profileDetail?.educations?.map((edu) => {
                                                        if (edu.school != "" && edu.school != null) {
                                                            return (
                                                                <div style={{marginBottom: "2rem"}}>
                                                                    <div className="row">
                                                                        <div className="col-8">
                                                                            <p className="profile-p3">{edu.school}</p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>
                                                                        {edu.degree} {edu.degree?.length > 0 && " | "}
                                                                        {edu.major} {edu.major?.length > 0 && " | "} {edu.gpa}
                                                                    </p>
                                                                    {(edu.extra_major != "" && edu.extra_major != null) &&
                                                                        <p className="profile-p4" style={{marginBottom: "0.5rem"}}>Minor: {edu.extra_major}</p>
                                                                    }
                                                                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{edu.graduation_date}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Experience</h3>
                                                <div style={{ marginTop: "0.5rem" }}>
                                                    {this.props.profileDetail?.experiences?.map((exp) => {
                                                        if (exp.company != "" && exp.company != null) {
                                                            return (
                                                                <div style={{marginBottom: "2rem"}}>
                                                                    <div className="row">
                                                                        <div className="col-8">
                                                                            <p className="profile-p3">{exp.title}</p>
                                                                        </div>
                                                                    </div>
                                                                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{exp.company}</p>
                                                                    {(exp.startDate != "" && exp.startDate != null) &&
                                                                        <p className="profile-p4" style={{marginBottom: "0.5rem", color: "#7D7D7D"}}>
                                                                            {exp.start_date} - {exp.end_date}
                                                                        </p>
                                                                    }
                                                                    <p className="profile-p4" style={{marginBottom: "0.5rem"}}>{exp.work_description}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div><h1>No Valid Infomation</h1></div>}
                </React.Fragment>
            </DocumentMeta>
        )
    }
}

const mapStateToProps = (state) => ({
    profileDetail: state.auth_reducer.profileDetail,
    profile: state.auth_reducer.profile,
    user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { getProfileDetail })(PublicProfile);