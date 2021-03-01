import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
//import {loadProfile, loadUserFullname, updateProfile} from "../../redux/actions/auth_actions";
//import {Dashboard} from "./Dashboard";
import {get_practice_info, get_interview_job_info} from "../../redux/actions/practice_info_actions";
import {getApplicantsData} from "../../redux/actions/question_actions";
import React from "react";
import { connect } from "react-redux";
import { RateScore, VideoChart, ApplicationChart } from "./DashboardComponents";
const RowBox = (props) => {
    return (
        <div className="col-xxl col-xl col-lg col-sm col-md ">
            {/* <!-- Single Category --> */}
            {props.isEmployer ? (
                <a
                    className="d-flex align-items-center justify-content-around bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 mt-5 shadow-8"
                    style={{"text-decoration": "none", height: "100%"}}
                >
                    <div className="hirebeat-blue-bg circle-56 font-size-6 ml-2 mr-0" >
                        <i className={`fas bx ${props.icon}`} style={{color:"white"}}/>
                    </div>
                    <div className="mr-2 ml-0">
                        <h5 className="d-flex font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-0 mt-2 ">
                        <LazyLoad>
                            <span className="counter">
                                {props.isRate ? (<CountUp duration={6} end={props.count} suffix={"%"}/>) :
                                    (<CountUp duration={6} end={props.count}/>)}
                            </span>
                        </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mt-0 mb-2">
                        {props.children}
                    </p>
                    </div>
                </a>
            ) : (
                <a
                    href={"#"}
                    onClick={props.onClick}
                    className="d-flex align-items-center justify-content-around bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 mt-5 shadow-8"
                    style={{"text-decoration": "none", height: "100%"}}
                >
                    <div className="hirebeat-blue-bg circle-56 font-size-6 ml-2 mr-0" >
                        <i className={`fas bx ${props.icon}`} style={{color:"white"}}/>
                    </div>
                    <div className="mr-2 ml-0">
                        <h5 className="d-flex font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-0 mt-2 ">
                            <LazyLoad>
                                <span className="counter">
                                    <CountUp duration={6} end={props.count}/>
                                </span>

                            </LazyLoad>
                        </h5>
                        <p className="font-size-4 font-weight-normal text-gray mt-0 mb-2">
                            {props.children}
                        </p>
                    </div>
                </a>
            )}
            {/* <!-- End Single Category --> */}
        </div>
    )
};
class RowBoxes extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.isEmployer) {
            this.props.get_interview_job_info(this.props.userId);
            this.props.getApplicantsData(this.props.userId);
        } else {
            this.props.get_practice_info(this.props.userId);
        }
    }
    render() {
        return (
            <div className="mt-25 mt-lg-31">
                <div className={"container-xl"}>
                    <div className={this.props.isEmployer ? "row" : "row mb-7"}>
                        {this.props.isEmployer ? (
                            <React.Fragment>
                                {/*<RowBox isEmployer={this.props.isEmployer} count={this.props.jobs_posted} icon={"bxs-briefcase-alt"} >Jobs Posted&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</RowBox>
                                <RowBox isEmployer={this.props.isEmployer} count={this.props.total_applicants} icon={"bxs-user-pin"}>Total Applicants</RowBox>
                                <RowBox isEmployer={this.props.isEmployer} count={this.props.videos_received} icon={"bxs-video"} >Videos Received&nbsp;</RowBox>
                                <RowBox isEmployer={this.props.isEmployer} count={this.props.recorded_rate} icon={"bxs-pie-chart"} isRate={true}>Recorded Rate&nbsp;&nbsp;&nbsp;</RowBox>*/}
                                <div className="chart-bg">
                                    <div style={{padding: "0.6rem"}}>
                                        <div className="row" style={{alignItems: "center"}}>
                                            <i className="bx bxs-user-pin bx-md" style={{color: "#67A3F3", paddingLeft: "1rem"}}></i>
                                            <h3 className="chart-legend">Applicants</h3>
                                        </div>
                                        <ApplicationChart
                                            dates={this.props.applicantsData["date"]}
                                            total={this.props.applicantsData["total"]}
                                            accepted={this.props.applicantsData["accepted"]}
                                            height={200} width={400}
                                        />
                                    </div>
                                </div>
                                <div className="chart-bg" style={{marginLeft: "2rem"}}>
                                     <div style={{padding: "0.6rem"}}>
                                        <div className="row" style={{alignItems: "center"}}>
                                            <i className="bx bxs-video bx-md" style={{color: "#67A3F3", paddingLeft: "1rem"}}></i>
                                            <h3 className="chart-legend">Videos</h3>
                                        </div>
                                        <VideoChart dates={this.props.applicantsData["date"]} videos={this.props.applicantsData["recorded"]} height={200} width={400} />
                                    </div>
                                </div>
                                <div className="chart-bg" style={{marginLeft: "2rem"}}>
                                     <div style={{padding: "0.6rem"}}>
                                        <div className="row" style={{alignItems: "center", marginBottom: "2rem"}}>
                                            <i className="bx bxs-pie-chart bx-md" style={{color: "#67A3F3", paddingLeft: "1rem"}}></i>
                                            <h3 className="chart-legend">Recorded Rate</h3>
                                        </div>
                                        <RateScore percent={Math.round(this.props.recorded_rate)} bgColor={"#FFFFFF"} barColor={"#67A3F3"} label={"%"} ftSize={"20px"} ftColor={"#090D3A"} height={150} width={200}/>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <RowBox onClick={this.props.renderVideos} count={this.props.videos_practiced} icon={"bxs-video"}>Video Practiced&nbsp;&nbsp;&nbsp;</RowBox>
                                <RowBox onClick={this.props.renderResume} count={this.props.resume_scanned} icon={"bxs-file-pdf"}>Resume Scanned&nbsp;&nbsp;&nbsp;&nbsp;</RowBox>
                                <RowBox onClick={this.props.renderVideos} count={this.props.videos_reviewed} icon={"bxs-bot"}>Videos Reviewed&nbsp;&nbsp;&nbsp;</RowBox>
                                <RowBox onClick={this.props.renderInterview} count={this.props.interviews_recorded} icon={"bxs-briefcase-alt"} >Recorded Interview</RowBox>
                            </React.Fragment>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    videos_practiced : state.practice_info_reducers.videos_practiced,
    resume_scanned : state.practice_info_reducers.resume_scanned,
    videos_reviewed : state.practice_info_reducers.videos_reviewed,
    interviews_recorded : state.practice_info_reducers.interviews_recorded,
    jobs_posted: state.practice_info_reducers.jobs_posted,
    total_applicants: state.practice_info_reducers.total_applicants,
    videos_received: state.practice_info_reducers.videos_received,
    recorded_rate: state.practice_info_reducers.recorded_rate,
    applicantsData: state.question_reducer.applicantsData,
});

export default connect(mapStateToProps, {get_practice_info, get_interview_job_info, getApplicantsData})(
    RowBoxes
);