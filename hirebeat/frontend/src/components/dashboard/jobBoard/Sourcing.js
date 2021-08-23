import React, { Component } from "react";
import { MyModal80 } from "./../DashboardComponents";
import SourcingFilter from "./SourcingFilter";

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
        this.setState({skills: skills});
    }

    setLocation = (location) => {
        this.setState({location: location});
    }

    openFilter = () => {
        this.setState({showFilter: true});
    }

    hideFilter = () => {
        this.setState({showFilter: false});
    }

    openProfileDetail = () => {
        this.setState({showProfileDetail: true});
    }

    hideProfileDetail = () => {
        this.setState({showProfileDetail: false});
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

    render() {
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
                                    <div className="container" style={{padding: "2rem", paddingTop: "0rem"}}>
                                        <SourcingFilter
                                            onHide={this.hideFilter}
                                            keywords={this.state.keywords}
                                            location={this.state.location}
                                            skills={this.state.skills}
                                            position={this.state.position}
                                            hasVideo={this.hasVideo}
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
                                <p style={{ color: "#090d3a" }}>Result:  {this.props.sourcingData.profiles.length} / {this.props.sourcingData.total_records}</p>
                                {/* Map profile here */}
                                <div className="row">
                                    {this.props.sourcingData.profiles.map(p => {
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
                                            <div className="col-6" style={{marginBottom: "2rem"}}>
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
                            </div>
                        </div> :
                        <div>
                            <h3 onClick={this.hideProfileDetail}>Go Back</h3>
                        </div>
                    ) : null
                }
            </React.Fragment>
        )
    }
}

export default Sourcing;