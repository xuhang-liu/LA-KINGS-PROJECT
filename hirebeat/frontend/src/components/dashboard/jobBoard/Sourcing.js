import React, { Component } from "react";
import SourcingFilter from "./SourcingFilter";
import { IconText, MyModal80, MyModalContact } from "../DashboardComponents";
import ReactPlayer from 'react-player';
import ReactPaginate from 'react-paginate';

export class Sourcing extends Component {
    state = {
        showFilter: false,
        showProfileDetail: false,
        keywordsOutLayer: "",
        keywords: "",
        location: "",
        skills: [],
        position: "",
        hasVideo: false,
        page: 1,
        can_index: 0,
        showResume: false,
        showContact: false,
        pageCount: this.props.sourcingData.total_page,
    }

    componentDidMount() {
        let queryData = {
            keywords: "",
            location: "",
            skills: [],
            position: "",
            has_video: false,
            page: 1,
            has_filter: false,
        }
        this.props.getSourcingData(queryData);
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    updateState = (key, value) => {
        this.setState({
            [key]: value,
        });
    }

    clearState = () => {
        this.setState({
            keywords: "",
            location: "",
            skills: [],
            position: "",
            hasVideo: false,
        })
    }

    setSkills = (skills) => {
        this.setState({ skills: skills });
    }

    setLocation = (location) => {
        this.setState({ location: location });
    }

    openFilter = () => {
        this.setState({ showFilter: true });
    }

    hideFilter = () => {
        this.setState({ showFilter: false });
    }

    openProfileDetail = (index) => {
        this.setState({ showProfileDetail: true, can_index: index });
    }

    hideProfileDetail = () => {
        this.setState({ showProfileDetail: false });
    }

    checkFilterConditions = () => {
        let hasFilter = false;
        if (this.state.keywords.length > 0 ||
            this.state.location.length > 0 ||
            this.state.skills.length > 0 ||
            this.state.position.length > 0 ||
            this.state.hasVideo
        ) {
            hasFilter = true;
        }
        return hasFilter;
    }

    getFilterProfiles = () => {
        let queryData = {
            keywords: this.state.keywords,
            location: this.state.location,
            skills: this.state.skills,
            position: this.state.position,
            has_video: this.state.hasVideo,
            page: 1,
            has_filter: this.checkFilterConditions(),
        }
        this.props.getSourcingData(queryData);
    }

    enableShowResume = () => {
        this.setState({ showResume: true });
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

    handlePageClick = (data) => {
        let selectedPage = data.selected; // 0 index based
        let queryData = {
            keywords: this.state.keywords,
            location: this.state.location,
            skills: this.state.skills,
            position: this.state.position,
            has_video: this.state.hasVideo,
            page: selectedPage + 1,
            has_filter: this.checkFilterConditions(),
        }
        this.props.getSourcingData(queryData);

    };

    render() {
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
            <React.Fragment>
                {this.props.sourcingDataLoaded ?
                    (!this.state.showProfileDetail ?
                        <div className="container min-width-980">
                            <div style={{ marginBottom: "30px" }}>
                                <h3><b><i className="bx-fw bx bx-user-circle"></i><span className="ml-2">Sourcing</span></b></h3>
                            </div>
                            <div>
                                <div className="input-sourcing-outter-box">
                                    <i style={{ color: "#67a3fa" }} className="bx-fw bx bx-search bx-xs"></i><input name="keywords" onChange={this.handleInput} className="sourcing-input-search" placeholder="Enter keywords"></input>
                                </div>
                                <span className="input-sourcing-outter-box1" style={{ cursor: "pointer" }} onClick={this.openFilter}><i style={{ color: "#67a3fa" }} className="bx-fw bx bx-slider-alt bx-xs"></i>All Fillters</span>
                                <span className="input-sourcing-outter-box2" onClick={this.getFilterProfiles} style={{ marginLeft: "0.5rem", cursor: "pointer" }}>Search</span>
                                <MyModal80
                                    show={this.state.showFilter}
                                    onHide={this.hideFilter}
                                >
                                    <div className="container" style={{ padding: "2rem", paddingTop: "0rem" }}>
                                        <SourcingFilter
                                            onHide={this.hideFilter}
                                            keywords={this.state.keywords}
                                            location={this.state.location}
                                            skills={this.state.skills}
                                            position={this.state.position}
                                            hasVideo={this.state.hasVideo}
                                            updateState={this.updateState}
                                            setSkills={this.setSkills}
                                            setLocation={this.setLocation}
                                            clearState={this.clearState}
                                            page={this.state.page}
                                            getFilterProfiles={this.getFilterProfiles}
                                        />
                                    </div>
                                </MyModal80>
                                <p style={{ color: "#090d3a", fontSize: "0.9rem", fontWeight: "normal", marginTop: "1rem" }}>Didn{"'"}t find what you are looking for? Let us help you! <a style={{ color: "#ff6b00", fontWeight: "600", marginLeft: "0.5rem", textDecoration: "none" }} target="_blank" href="/employer_talent_sourcing">GO >></a></p>
                            </div>
                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-3 d-flex" style={{alignItems: "center"}}>
                                        <p className="sourcing-p2" style={{textDecoration: "none"}}>Result:  {this.props.sourcingData.profiles.length} / {this.props.sourcingData.total_records}</p>
                                    </div>
                                    <div className="col d-flex justify-content-end">
                                        <ReactPaginate
                                              previousLabel={'< prev'}
                                              nextLabel={'next >'}
                                              breakLabel={'...'}
                                              breakClassName={'break-me'}
                                              pageCount={this.props.sourcingData.total_page}
                                              marginPagesDisplayed={2}
                                              pageRangeDisplayed={5}
                                              onPageChange={this.handlePageClick}
                                              containerClassName={'pagination2'}
                                              activeClassName={'active'}
                                        />
                                    </div>
                                </div>
                                {/* Map profile here */}
                                <div className="row">
                                    {this.props.sourcingData.profiles.map((p, index) => {
                                        let name = p.f_name + " " + p.l_name;
                                        let description = "";
                                        if (p.current_job_title?.length > 0 && p.current_company?.length > 0) {
                                            description = p.current_job_title + " at " + p.current_company;
                                        }
                                        else {
                                            description = p.current_job_title || p.current_company;
                                        }
                                        let location = "";
                                        if (p.location?.length > 0) {
                                            let locArray = p.location.split(",");
                                            location = locArray[0] + "," + locArray[1];
                                        }
                                        return (
                                            <div className="col-6" style={{ marginBottom: "2rem", cursor: "pointer" }} onClick={() => this.openProfileDetail(index)}>
                                                <div className="profile-bg" style={{ textAlign: "left", padding: "2rem" }}>
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img src={p.logo_url?.length > 0 ? p.logo_url : "https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png"} />
                                                        </div>
                                                        <div className="col-9">
                                                            <div>
                                                                <p className="profile-p3" style={{ display: "inline-block", marginRight: "0.5rem" }}>{name}</p>
                                                                {p.video_url?.length > 0 && <span className="input-sourcing-outter-box3">Video Profile</span>}
                                                            </div>
                                                            <p className="profile-p">{description}</p>
                                                            <p className="profile-p" style={{ marginTop: "-1rem" }}>{location}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="row">
                                    <div className="col-3" />
                                    <div className="col d-flex justify-content-end">
                                        <ReactPaginate
                                              previousLabel={'< prev'}
                                              nextLabel={'next >'}
                                              breakLabel={'...'}
                                              breakClassName={'break-me'}
                                              pageCount={this.props.sourcingData.total_page}
                                              marginPagesDisplayed={2}
                                              pageRangeDisplayed={5}
                                              onPageChange={this.handlePageClick}
                                              containerClassName={'pagination2'}
                                              activeClassName={'active'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="container min-width-980">
                            <div style={{ marginBottom: "30px" }}>
                                <h3><b><i className="bx-fw bx bx-user-circle"></i><span className="ml-2">Sourcing</span></b></h3>
                            </div>
                            <div className="row" >
                                <div className="col d-flex align-items-center" style={{ marginTop: "1%" }}>
                                    <button type="button" style={{ backgroundColor: "#e8edfc", border: "none" }} onClick={this.hideProfileDetail}>
                                        <IconText
                                            iconName={"bx-fw bx bx-arrow-back bx-sm"}
                                            textDisplayed={"Back To All Result"}
                                            textSize={"16px"}
                                            textColor={"#56a3fa"}
                                            iconMargin={"3px"}
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="row mt-2 pb-5">
                                <div className="col-4">
                                    <div className="chart-bg1">
                                        <div style={{ textAlign: "center", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
                                            {(this.props.sourcingData.profiles[this.state.can_index].logo_url !== null && this.props.sourcingData.profiles[this.state.can_index].logo_url !== "") ?
                                                <img src={this.props.sourcingData.profiles[this.state.can_index].logo_url} /> :
                                                <img src="https://hirebeat-assets.s3.amazonaws.com/User-dash/bxs-user-circle-2.png" />
                                            }
                                            <h3 style={{ textAlign: "center", color: "#090d3a", fontWeight: "600", marginTop: "1rem" }}>
                                                {(this.props.sourcingData.profiles[this.state.can_index].f_name !== null && this.props.sourcingData.profiles[this.state.can_index].f_name !== "") ? this.props.sourcingData.profiles[this.state.can_index].f_name + " " + this.props.sourcingData.profiles[this.state.can_index].l_name : "No Name"}
                                            </h3>
                                            <p style={{ textAlign: "center", color: "#090d3a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                {(this.props.sourcingData.profiles[this.state.can_index].current_job_title !== null && this.props.sourcingData.profiles[this.state.can_index].current_job_title !== "") ? this.props.sourcingData.profiles[this.state.can_index].current_job_title + " at " + this.props.sourcingData.profiles[this.state.can_index].current_company : "No Position"}
                                            </p>
                                            <p style={{ textAlign: "center", color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                {(this.props.sourcingData.profiles[this.state.can_index].location !== null && this.props.sourcingData.profiles[this.state.can_index].location !== "") ? this.props.sourcingData.profiles[this.state.can_index].location : "No Location"}
                                            </p>
                                            <button className="default-btn" type="button" style={{ marginTop: "0.5rem", paddingLeft: "25px", borderRadius: "8px" }} onClick={this.openContact}>Contact Info</button>
                                            <MyModalContact
                                                show={this.state.showContact}
                                                onHide={() => { this.disableShowContact() }}
                                                contactName={this.props.sourcingData.profiles[this.state.can_index].f_name + " " + this.props.sourcingData.profiles[this.state.can_index].l_name}
                                            >
                                                <div class="container py-4">
                                                    <h3 className="profile-h3">Contact Info</h3>
                                                    <div className="row" style={{ margin: "auto", width: "60%" }}>
                                                        <div className="col-3">
                                                            <i class='bx bx-mail-send' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                        </div>
                                                        <div className="col-9">
                                                            <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>Email</p>
                                                            <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.sourcingData.profiles[this.state.can_index].email !== null && this.props.sourcingData.profiles[this.state.can_index].email !== "") ? this.props.sourcingData.profiles[this.state.can_index].email : ""}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ margin: "auto", width: "60%", paddingTop: "0.5rem"  }}>
                                                        <div className="col-3">
                                                            <i class='bx bxl-linkedin-square' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                        </div>
                                                        <div className="col-9">
                                                            <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>LinkedIn</p>
                                                            <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.sourcingData.profiles[this.state.can_index].linkedin !== null && this.props.sourcingData.profiles[this.state.can_index].linkedin !== "") ? this.props.sourcingData.profiles[this.state.can_index].linkedin : ""}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ margin: "auto", width: "60%", paddingTop: "0.5rem" }}>
                                                        <div className="col-3">
                                                            <i class='bx bxs-network-chart' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                        </div>
                                                        <div className="col-9">
                                                            <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>Website</p>
                                                            <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.sourcingData.profiles[this.state.can_index].website !== null && this.props.sourcingData.profiles[this.state.can_index].website !== "") ? this.props.sourcingData.profiles[this.state.can_index].website : ""}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row" style={{ margin: "auto", width: "60%", paddingTop: "0.5rem" }}>
                                                        <div className="col-3">
                                                            <i class='bx bxl-github' style={{ color: "#67A3F3", fontSize: "50px" }}></i>
                                                        </div>
                                                        <div className="col-9">
                                                            <p style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem" }}>Github</p>
                                                            <p style={{ marginTop: "-1rem", color: "#4a6f8a", fontWeight: "400", fontSize: "0.9rem" }}>{(this.props.sourcingData.profiles[this.state.can_index].github !== null && this.props.sourcingData.profiles[this.state.can_index].github !== "") ? this.props.sourcingData.profiles[this.state.can_index].github : ""}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </MyModalContact>
                                        </div>
                                    </div>
                                    <div className="chart-bg1 mt-2">
                                        <div className="py-3 px-5">
                                            <h3 className="profile-h3">Resume</h3>
                                            {(this.props.sourcingData.profiles[this.state.can_index].resume_url == null || this.props.sourcingData.profiles[this.state.can_index].resume_url == "")?
                                            <p className="profile-p">Not available</p>:
                                            <button className="default-btn" type="button" style={{ marginTop: "0.5rem", width:"100%", backgroundColor: "#ffffff", color: "#090d3a", border: "1px solid #E8EDFC", boxShadow: "2px 2px 10px rgba(128, 128, 128, 0.16)" }} onClick={this.enableShowResume}>View Resume</button>}
                                            <MyModal80
                                                show={this.state.showResume}
                                                onHide={() => { this.disableShowResume() }}
                                            >
                                                <div class="iframe-container">
                                                    <iframe className="responsive-iframe" src={this.props.sourcingData.profiles[this.state.can_index].resume_url} />
                                                </div>
                                            </MyModal80>
                                        </div>
                                    </div>
                                    <div className="chart-bg1 mt-2">
                                        <div className="py-3 px-5">
                                            <h3 className="profile-h3">Skills</h3>
                                            <div>
                                                {(this.props.sourcingData.profiles[this.state.can_index]?.skills)?.map((skill) => {
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
                                                {(this.props.sourcingData.profiles[this.state.can_index]?.languages)?.map((language) => {
                                                    return (
                                                        <span className="circle-tags">{language}</span>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chart-bg1 mt-2">
                                        <div className="py-3 px-5">
                                            <h3 className="profile-h3">Job Preference</h3>
                                            <p className="profile-p">
                                                {(this.props.sourcingData.profiles[this.state.can_index].job_type !== "") ?
                                                    this.props.sourcingData.profiles[this.state.can_index].job_type : ""
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="chart-bg1">
                                        <div className="py-3 px-5">
                                            <h3 className="profile-h3">Summary</h3>
                                            <p style={{ color: "#4a6f8a", fontWeight: "500", marginTop: "0.5rem" }}>
                                                {(this.props.sourcingData.profiles[this.state.can_index].summary !== null && this.props.sourcingData.profiles[this.state.can_index].summary !== "") ? this.props.sourcingData.profiles[this.state.can_index].summary : "No Summary"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chart-bg1 mt-2">
                                        <div className="py-3 px-5">
                                            <h3 className="profile-h3">Video Profile</h3>
                                            {(this.props.sourcingData.profiles[this.state.can_index].video_url !== null && this.props.sourcingData.profiles[this.state.can_index].video_url !== "") ?
                                                <div style={{ marginTop: "0.5rem" }}>
                                                    <ReactPlayer id="rw-video" url={this.props.sourcingData.profiles[this.state.can_index].video_url} controls={true} width={"100%"} height={"100%"} />
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
                                                    if ((this.props.sourcingData.profiles[this.state.can_index][schools[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][schools[index]] != null)) {
                                                        return (
                                                            <div>
                                                                {
                                                                    (this.props.sourcingData.profiles[this.state.can_index][schools[index]] != null && this.props.sourcingData.profiles[this.state.can_index][schools[index]] != "") &&
                                                                    <p className="profile-p3" style={{ marginBottom: "0.5rem", fontWeight: "500" }}>{this.props.sourcingData.profiles[this.state.can_index][schools[index]]}</p>
                                                                }
                                                                {
                                                                    (this.props.sourcingData.profiles[this.state.can_index][majors[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][majors[index]] != null) &&
                                                                    <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.sourcingData.profiles[this.state.can_index][majors[index]]} | {this.props.sourcingData.profiles[this.state.can_index][gpas[index]]}</p>
                                                                }
                                                                {
                                                                    (this.props.sourcingData.profiles[this.state.can_index][graduationDates[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][graduationDates[index]] != null) &&
                                                                    <p className="profile-p4" style={{ marginBottom: "0.5rem", color: "#7D7D7D" }}>{this.props.sourcingData.profiles[this.state.can_index][graduationDates[index]]}</p>
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
                                                    if ((this.props.sourcingData.profiles[this.state.can_index][companies[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][companies[index]] != null)) {
                                                        return (
                                                            <div>
                                                                {
                                                                    (this.props.sourcingData.profiles[this.state.can_index][titles[index]] != null && this.props.sourcingData.profiles[this.state.can_index][titles[index]] != "") &&
                                                                    <p className="profile-p3" style={{ marginBottom: "0.5rem", fontWeight: "500" }}>{this.props.sourcingData.profiles[this.state.can_index][titles[index]]}</p>
                                                                }
                                                                {
                                                                    (this.props.sourcingData.profiles[this.state.can_index][companies[index]] != null && this.props.sourcingData.profiles[this.state.can_index][companies[index]] != "") &&
                                                                    <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.sourcingData.profiles[this.state.can_index][companies[index]]}</p>
                                                                }
                                                                {(this.props.sourcingData.profiles[this.state.can_index][startDates[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][startDates[index]] != null) &&
                                                                    <p className="profile-p4" style={{ marginBottom: "0.5rem", color: "#7D7D7D" }}>
                                                                        {this.props.sourcingData.profiles[this.state.can_index][startDates[index]]} - {this.props.sourcingData.profiles[this.state.can_index][endDates[index]]}
                                                                    </p>
                                                                }
                                                                {(this.props.sourcingData.profiles[this.state.can_index][workDescriptions[index]] != "" && this.props.sourcingData.profiles[this.state.can_index][workDescriptions[index]] != null) &&
                                                                    <p className="profile-p4" style={{ marginBottom: "0.5rem" }}>{this.props.sourcingData.profiles[this.state.can_index][workDescriptions[index]]}</p>
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
                    ) : null
                }
            </React.Fragment>
        )
    }
}

export default Sourcing;