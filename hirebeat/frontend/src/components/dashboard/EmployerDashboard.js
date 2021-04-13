import React, { Component } from "react";
//import ButtonPanel from "./panel/ButtonPanel";
import { Link } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
//import { JobApplication } from "./applications/JobApplication";
import { CreatePosition } from "./position/CreatePosition";
import { ApplicationCover } from "./applications/ApplicationCover";
import ShortList from "./ShortList";
//import ReviewApplication from "./ReviewApplication";
import PageTitleArea from '../Common/PageTitleArea';
import { updateProfile, loadProfile, loadUserFullname, getReceivedInterview, getRecordStatus, subreviewerUpdateComment,
    getEmployerProfileDetail, updateEmployerInfo, updateEmployerSocialMedia, updateEmployerBasicInfo, updateEmployerVideo,
    updateEmployerSummary, getEmployerPost, addEmployerPost, updateEmployerPost, deleteEmployerPost
 }
from "../../redux/actions/auth_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../redux/actions/video_actions";
import { addPosition, getPostedJobs, addInterviews, resendInvitation, updateCommentStatus, getQuestionList, updateViewStatus, getAnalyticsInfo } from "../../redux/actions/question_actions";
import { connect } from "react-redux";
//import { DbRow, DbCenterRow, } from "./DashboardComponents";
import RowBoxes from "./Rowboxes"
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";
import SubpageSetting from './SubpageSetting';
import Analytics from './Analytics';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DocumentMeta from 'react-document-meta';
import { EmployerProfile } from "./employerProfile/EmployerProfile";
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class EmployerDashboard extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    int_ques: PropTypes.array.isRequired,
    position_list: PropTypes.array.isRequired,
  };

  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      email_confirmed: true,
    };
  };

  activateEmail = () => {
    // only for FB social login
    if (this.props.user.email == "" || this.props.user.email == null) {
      var profile = this.makeProfile();
      this.props.updateProfile(profile);
    }
  };

  redirectToEmailVerification = () => {
    const { history } = this.props;
    if (history) history.push(`/email-verification`);
  }; 

  verifyEmail = () => {
    if(!this.props.profile.email_confirmed){
      this.redirectToEmailVerification();
      return this.alert("Account Activation Needed", "Please check the activation email and activate your account");
    }
  }

  alert = (title, message) => {
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
  }
  
  getPJobs = () => {
    var user = {"id": this.props.user.id};
    this.props.getPostedJobs(user.id);
  }


  componentDidMount() {
    this.props.loadProfile();
    this.activateEmail();
    this.verifyEmail();
    var user = {"id": this.props.user.id};
    this.props.loadUserFullname(user);
    this.props.getPostedJobs(user.id);
    this.props.getAnalyticsInfo(this.props.user.id);
    this.props.getEmployerProfileDetail(this.props.user.id);
    this.props.getEmployerPost(this.props.user.id, 0);
  }

  state = {
    subpage: "applications",
  };

  renderApplications = () => {
    this.setState({
      subpage: "applications",
    });
  };

  renderPosition = () => {
    if(this.props.profile.company_name == "" || this.props.profile.company_name == null){
      confirmAlert({
        title: 'One More Step!',
        message: 'We Need Your Company Name to Start 😢',
        buttons: [
          {
            label: 'Ok',
          }
        ]
        });
      this.setState({
        subpage: "settings",
        }
      )
    }else if((this.props.profile.position_count)>=(this.props.profile.position_limit)){
      confirmAlert({
        title: 'Upgrade Now!',
        message: 'Exceed max number of positions! Upgrade now to create more positions',
        buttons: [
          {label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing"},
          {label: 'OK'},
        ]
      });
    }else{
      this.setState({
        subpage: "position",
        }
      )
    }
  }

  renderSetting = () => {
    this.setState({
          subpage: "settings",
        }
    )
  }

  renderReviewApplication = () => {
    this.setState({
          subpage: "reviewApplication",
        }
    )
  }

  renderShortlist = () => {
    this.setState({
      subpage: "shortlist",
    });
  };

  renderAnalytics = () => {
    this.props.getAnalyticsInfo(this.props.user.id);
    setTimeout(()=>{this.setState({
      subpage: "analytics",
    });}, 200)
  };

  renderEmployerProfile = () => {
    this.setState({
          subpage: "employerProfile",
        }
    )
  }

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "applications":
        return <ApplicationCover
            renderPostedjobs={this.renderPostedjobs}
            getPJobs={this.getPJobs}
            companyName={this.props.profile.company_name}
            loaded={this.props.loaded}
            postedJobs={this.props.postedJobs}
            addInterviews={this.props.addInterviews}
            getReceivedInterview={this.props.getReceivedInterview}
            getApplicantsVideos={this.props.getApplicantsVideos}
            getApplicantsInfo={this.props.getApplicantsInfo}
            getRecordStatus={this.props.getRecordStatus}
            renderVideos={this.renderVideos}
            dataLoaded={this.props.dataLoaded}
            isRecorded={this.props.isRecorded}
            int_ques={this.props.int_ques}
            id_candidate={this.props.id_candidate}
            username_candidate={this.props.username_candidate}
            email_candidate={this.props.email_candidate}
            phone_candidate={this.props.phone_candidate}
            location_candidate={this.props.location_candidate}
            resendInvitation={this.props.resendInvitation}
            updateCommentStatus={this.props.updateCommentStatus}
            renderPosition={this.renderPosition}
            user={this.props.user}
            profile={this.props.profile}
            updateViewStatus={this.props.updateViewStatus}
            subreviewerUpdateComment={this.props.subreviewerUpdateComment}
        />;
      case "position":
        return <CreatePosition
            getPJobs={this.getPJobs}
            user={this.props.user}
            profile={this.props.profile}
            renderApplications={this.renderApplications}
            addPosition={this.props.addPosition}
            getQuestionList={this.props.getQuestionList}
            bqList={this.props.bqList}
        />;
      case "settings":
        return <SubpageSetting
            user={this.props.user}
            profile={this.props.profile}
            location={this.props.profile.location}
            phone_number={this.props.profile.phone_number}
            renderApplications={this.renderApplications}
        />;
      case "analytics":
        if (Object.keys(this.props.position_list).length > 0){
        return <Analytics
            user={this.props.user}
            profile={this.props.profile}
            renderApplications={this.renderApplications}
            analyticsInfo={this.props.analyticsInfo}
            getAnalyticsInfo={this.props.getAnalyticsInfo}
            position_list={this.props.position_list}
            interview_session={this.props.interview_session}
          />}
          else{
            return <p>You Don't have any active position.</p>
          };
      case "shortlist":
        if (Object.keys(this.props.jobL).length > 0){
          return <ShortList 
            getPJobs={this.getPJobs}
            postedJobs={this.props.jobL}
            int_ques={this.props.int_ques}
            getApplicantsVideos={this.props.getApplicantsVideos}
            getApplicantsInfo={this.props.getApplicantsInfo}
            id_candidate={this.props.id_candidate}
            username_candidate={this.props.username_candidate}
            email_candidate={this.props.email_candidate}
            phone_candidate={this.props.phone_candidate}
            location_candidate={this.props.location_candidate}
            star_list={this.props.star_list}
            resume_list={this.props.resume_list}
            updateCommentStatus={this.props.updateCommentStatus}
            profile={this.props.profile}
            subreviewerUpdateComment={this.props.subreviewerUpdateComment}
            />
        }else{
            return null
        }
      case "employerProfile":
        return <EmployerProfile
                    userId={this.props.user.id}
                    employerProfileDetail={this.props.employerProfileDetail}
                    getEmployerProfileDetail={this.props.getEmployerProfileDetail}
                    updateEmployerInfo={this.props.updateEmployerInfo}
                    updateEmployerSocialMedia={this.props.updateEmployerSocialMedia}
                    updateEmployerBasicInfo={this.props.updateEmployerBasicInfo}
                    updateEmployerVideo={this.props.updateEmployerVideo}
                    updateEmployerSummary={this.props.updateEmployerSummary}
                    getEmployerPost={this.props.getEmployerPost}
                    addEmployerPost={this.props.addEmployerPost}
                    updateEmployerPost={this.props.updateEmployerPost}
                    deleteEmployerPost={this.props.deleteEmployerPost}
                    employerPost={this.props.employerPost}
                    email={this.props.user.email}
                    companyName={this.props.profile.company_name}
                />;
      default:
        //Do nothing
    }
  };

  render() {
    const meta = {
      title: 'HireBeat – Your First Step to A Better Recruiting Journey',
      description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
      canonical: 'https://hirebeat.co/employer_dashboard',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount/>
          {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Avenir Next"}}> */}
          <MediaQuery minDeviceWidth={1224}>
            <div className="row no-gutters min-width-1290">
              <div className='col-1'>
                <div className='dashboard-sidebar'>
                  <EssentialUserInfo
                      userfullname={this.props.userfullname}
                      user={this.props.user}
                      profile={this.props.profile}
                      updateProfile={this.props.updateProfile}
                      renderSetting={this.renderSetting}
                      renderApplications={this.renderApplications}
                      renderPosition={this.renderPosition}
                      renderShortlist={this.renderShortlist}
                      renderAnalytics={this.renderAnalytics}
                      renderEmployerProfile={this.renderEmployerProfile}
                      subpage={this.state.subpage}
                  />
                </div>
              </div>
              <div className='col-11' style={{backgroundColor:"#e8edfc"}}>
                <div className="dashboard-main">
                {((this.state.subpage === "settings") || (this.state.subpage === "shortlist") ||
                (this.props.profile.is_subreviwer) || (this.state.subpage === "analytics") ||
                (this.state.subpage === "employerProfile")) ? null :
                <div className="container-fluid" style={{height: "22rem"}} data-tut="reactour-rowbox">
                  <RowBoxes userId={this.props.user.id} isEmployer={true}/>
                </div>}
                  <div className="container-fluid" style={{marginBottom: "20vh"}}>
                    <div style={{marginBottom: "auto", height: "auto", paddingTop: '5%'}}>
                      {this.renderSubpage()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1223}>
            <PageTitleArea
              pageTitle="Welcome to Hirebeat!"
              pageDescription="Our mobile functionality is currently under construction, we apologized for the inconvenience.Please login on your PC to get the full experience."
            />
            <div style={{textAlign: "center"}}>
            <Link to="/">
              <a className="default-btn" style={{color:"white", backgroundColor:"#FF6B00", marginTop:"1rem",marginBottom:"1rem"}}>
                <i className="bx bxs-hot"></i>
                Back to Home Page
              </a>
            </Link>
            </div>
          </MediaQuery>
        </React.Fragment>
        </DocumentMeta>
    );
  }
}

const mapStateToProps = (state) => {
  var job_list = {};

  Object.keys(state.question_reducer.postedJobs).map((key)=>{
    if(!state.question_reducer.postedJobs[key].is_closed) {
        job_list[key] = state.question_reducer.postedJobs[key];
    };
  });

  return {
  jobL: job_list,
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  userfullname: state.auth_reducer.userfullname,
  isAuthenticated: state.auth_reducer.isAuthenticated,
  loaded: state.question_reducer.loaded,
  postedJobs: state.question_reducer.postedJobs,
  dataLoaded: state.auth_reducer.dataLoaded,
  isRecorded: state.auth_reducer.isRecorded,
  int_ques: state.video_reducer.int_ques,
  id_candidate: state.video_reducer.id_candidate,
  username_candidate: state.video_reducer.username_candidate,
  email_candidate: state.video_reducer.email_candidate,
  phone_candidate: state.video_reducer.phone_candidate,
  location_candidate: state.video_reducer.location_candidate,
  star_list: state.question_reducer.star_list,
  resume_list: state.question_reducer.resume_list,
  bqList: state.question_reducer.bqList,
  analyticsInfo: state.question_reducer.analyticsInfo,
  position_list: state.question_reducer.position_list,
  interview_session: state.question_reducer.interview_session,
  employerProfileDetail: state.auth_reducer.employerProfileDetail,
  employerPost: state.auth_reducer.employerPost,
}
};

export default connect(mapStateToProps, { loadProfile, updateProfile, loadUserFullname,
    addPosition, getPostedJobs, addInterviews, getApplicantsVideos, getApplicantsInfo, getReceivedInterview,
    getRecordStatus, resendInvitation, updateCommentStatus, getQuestionList, updateViewStatus, getAnalyticsInfo, subreviewerUpdateComment,
    getEmployerProfileDetail, updateEmployerInfo, updateEmployerSocialMedia, updateEmployerBasicInfo, updateEmployerVideo,
    updateEmployerSummary, getEmployerPost, addEmployerPost, updateEmployerPost, deleteEmployerPost
    })(
    EmployerDashboard
);
