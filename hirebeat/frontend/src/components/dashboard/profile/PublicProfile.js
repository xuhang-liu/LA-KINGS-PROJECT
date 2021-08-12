import React, { Component } from "react";
import { connect } from "react-redux";
import { getProfileDetail } from "../../../redux/actions/auth_actions";
import { MyModal80, MyModalContact } from "./../DashboardComponents";
import ReactPlayer from 'react-player';
import DocumentMeta from 'react-document-meta';

const uri = window.location.search;
const user_id = uri.split("=")[1];
export class PublicProfile extends Component {

    state = {
        showResume: false,
        showContact: false,
    }

    componentDidMount() {
        if (user_id != "" && user_id != null) {
            this.props.getProfileDetail(user_id);
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
        const schools = ["school1", "school2", "school3"];
        const majors = ["major1", "major2", "major3"];
        const gpas = ["gpa1", "gpa2", "gpa3"];
        const graduationDates = ["graduation_date1", "graduation_date2", "graduation_date3"];

        const companies = ["company1", "company2", "company3", "company4", "company5"];
        const titles = ["title1", "title2", "title3", "title4", "title5"];
        const startDates = ["start_date1", "start_date2", "start_date3", "start_date4", "start_date5"];
        const endDates = ["end_date1", "end_date2", "end_date3", "end_date4", "end_date5"];
        const workDescriptions = ["work_description1", "work_description2", "work_description3", "work_description4", "work_description5"];
        return (
            <DocumentMeta {...meta}>
                <React.Fragment>
                    {(user_id == "" || user_id == null || this.props.profileDetail.name == null || this.props.profileDetail.name == "") ?
                        <div><h1>No Valid Infomation</h1></div> :
                        <div className="py-5" style={{ background: "#E8EDFC", minWidth: "1290px", minHeight: "93vh" }}>
                            <div className="container min-width-1290">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="chart-bg1">
                                            <div style={{ textAlign: "center", paddingTop:"0.5rem", paddingBottom:"0.5rem" }}>
                                                {(this.props.profileDetail.logo_url !== null && this.props.profileDetail.logo_url !== "") ?
                                                    <img src={this.props.profileDetail.logo_url} /> :
                                                    <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                                }
                                                <h3 style={{ textAlign: "center", color: "#090d3a", fontWeight: "600", marginTop: "0.5rem" }}>
                                                    {(this.props.profileDetail.name !== null && this.props.profileDetail.name !== "") ? this.props.profileDetail.name : "No Name"}
                                                </h3>
                                                <p style={{ textAlign: "center", color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                    {(this.props.profileDetail.location !== null && this.props.profileDetail.location !== "") ? this.props.profileDetail.location : "No Location"}
                                                </p>
                                                <button className="default-btn" type="button" style={{ marginTop: "0.5rem", paddingLeft: "25px", borderRadius:"8px" }} onClick={this.openContact}>Contact Info</button>
                                                <MyModalContact
                                                    show={this.state.showContact}
                                                    onHide={() => { this.disableShowContact() }}
                                                    contactName={this.props.profileDetail.name}
                                                >
                                                    <div class="container py-4">
                                                        <h3 className="profile-h3">Contact Info</h3>
                                                        <div className="row" style={{margin:"auto", width:"60%"}}>
                                                            <div className="col-3">
                                                                <i class='bx bxl-linkedin-square' style={{color: "#67A3F3", fontSize:"50px"}}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{color:"#090d3a", fontWeight:"500", fontSize:"1rem"}}>LinkedIn</p>
                                                                <p style={{marginTop:"-1rem", color:"#4a6f8a", fontWeight:"400", fontSize:"0.9rem"}}>{(this.props.profileDetail.linkedin !== null && this.props.profileDetail.linkedin !== "") ? this.props.profileDetail.linkedin : ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{margin:"auto", width:"60%", paddingTop:"0.5rem"}}>
                                                            <div className="col-3">
                                                                <i class='bx bxs-network-chart' style={{color: "#67A3F3", fontSize:"50px"}}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{color:"#090d3a", fontWeight:"500", fontSize:"1rem"}}>Website</p>
                                                                <p style={{marginTop:"-1rem", color:"#4a6f8a", fontWeight:"400", fontSize:"0.9rem"}}>{(this.props.profileDetail.website !== null && this.props.profileDetail.website !== "") ? this.props.profileDetail.website : ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row" style={{margin:"auto", width:"60%", paddingTop:"0.5rem"}}>
                                                            <div className="col-3">
                                                                <i class='bx bxl-github' style={{color: "#67A3F3", fontSize:"50px"}}></i>
                                                            </div>
                                                            <div className="col-9">
                                                                <p style={{color:"#090d3a", fontWeight:"500", fontSize:"1rem"}}>Github</p>
                                                                <p style={{marginTop:"-1rem", color:"#4a6f8a", fontWeight:"400", fontSize:"0.9rem"}}>{(this.props.profileDetail.github !== null && this.props.profileDetail.github !== "") ? this.props.profileDetail.github : ""}</p>
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
                                                    <p className="circle-tags">Design</p>
                                                    <p className="circle-tags">Java</p>
                                                    <p className="circle-tags">Java</p>
                                                    <p className="circle-tags">Java</p>
                                                    <p className="circle-tags">Java</p>
                                                    <p className="circle-tags">Java</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chart-bg1 mt-2">
                                            <div className="py-3 px-5">
                                                <h3 className="profile-h3">Languages</h3>
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
                                                    {schools.map((s, index) => {
                                                        if ((this.props.profileDetail[schools[index]] != "" && this.props.profileDetail[schools[index]] != null)) {
                                                            return (
                                                                <div>
                                                                    {
                                                                        (this.props.profileDetail[schools[index]] != null && this.props.profileDetail[schools[index]] != "") &&
                                                                        <p className="profile-p3" style={{ marginBottom: "0.5rem", fontWeight: "500" }}>{this.props.profileDetail[schools[index]]}</p>
                                                                    }
                                                                    {
                                                                        (this.props.profileDetail[majors[index]] != "" && this.props.profileDetail[majors[index]] != null) &&
                                                                        <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.profileDetail[majors[index]]} | {this.props.profileDetail[gpas[index]]}</p>
                                                                    }
                                                                    {
                                                                        (this.props.profileDetail[graduationDates[index]] != "" && this.props.profileDetail[graduationDates[index]] != null) &&
                                                                        <p className="profile-p4" style={{ marginBottom: "0.5rem", color: "#7D7D7D" }}>{this.props.profileDetail[graduationDates[index]]}</p>
                                                                    }
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
                                                    {companies.map((s, index) => {
                                                        if ((this.props.profileDetail[companies[index]] != "" && this.props.profileDetail[companies[index]] != null)) {
                                                            return (
                                                                <div>
                                                                    {
                                                                        (this.props.profileDetail[titles[index]] != null && this.props.profileDetail[titles[index]] != "") &&
                                                                        <p className="profile-p3" style={{ marginBottom: "0.5rem", fontWeight: "500" }}>{this.props.profileDetail[titles[index]]}</p>
                                                                    }
                                                                    {
                                                                        (this.props.profileDetail[companies[index]] != null && this.props.profileDetail[companies[index]] != "") &&
                                                                        <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.profileDetail[companies[index]]}</p>
                                                                    }
                                                                    {(this.props.profileDetail[startDates[index]] != "" && this.props.profileDetail[startDates[index]] != null) &&
                                                                        <p className="profile-p4" style={{ marginBottom: "0.5rem", color: "#7D7D7D" }}>
                                                                            {this.props.profileDetail[startDates[index]]} - {this.props.profileDetail[endDates[index]]}
                                                                        </p>
                                                                    }
                                                                    {(this.props.profileDetail[workDescriptions[index]] != "" && this.props.profileDetail[workDescriptions[index]] != null) &&
                                                                        <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.profileDetail[workDescriptions[index]]}</p>
                                                                    }
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
                        </div>}
                </React.Fragment>
            </DocumentMeta>
        )
    }
}

const mapStateToProps = (state) => ({
    profileDetail: state.auth_reducer.profileDetail,
});

export default connect(mapStateToProps, { getProfileDetail })(PublicProfile);