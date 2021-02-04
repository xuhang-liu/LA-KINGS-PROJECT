import React, { Component } from "react";
//import ButtonPanel from "./panel/ButtonPanel";
import { Link } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";

//import { JobApplication } from "./applications/JobApplication";
import { CreatePosition } from "./position/CreatePosition";
import { ApplicationCover } from "./applications/ApplicationCover";

//import ReviewApplication from "./ReviewApplication";
import PageTitleArea from '../Common/PageTitleArea';
import { updateProfile, loadProfile, loadUserFullname, getReceivedInterview, getRecordStatus } from "../../redux/actions/auth_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../redux/actions/video_actions";
import { addPosition, getPostedJobs, addInterviews, resendInvitation, updateCommentStatus } from "../../redux/actions/question_actions";
import { connect } from "react-redux";
//import { DbRow, DbCenterRow, } from "./DashboardComponents";
import RowBoxes from "./Rowboxes"
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";
import SubpageSetting from './SubpageSetting';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import safariAlert from "../basic/SafariAlert";
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

  componentDidMount() {
    safariAlert();
    this.props.loadProfile();
    this.activateEmail();
    this.verifyEmail();
    var user = {"id": this.props.user.id};
    this.props.loadUserFullname(user);
    this.props.getPostedJobs(user.id);
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

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "applications":
        return <ApplicationCover
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
            username_candidate={this.props.username_candidate}
            email_candidate={this.props.email_candidate}
            phone_candidate={this.props.phone_candidate}
            location_candidate={this.props.location_candidate}
            resendInvitation={this.props.resendInvitation}
            updateCommentStatus={this.props.updateCommentStatus}
            renderPosition={this.renderPosition}
        />;
      case "position":
        return <CreatePosition
            user={this.props.user}
            profile={this.props.profile}
            renderApplications={this.renderApplications}
            addPosition={this.props.addPosition}
        />;
      case "settings":
        return <SubpageSetting
            user={this.props.user}
            profile={this.props.profile}
            location={this.props.profile.location}
            phone_number={this.props.profile.phone_number}
            renderApplications={this.renderApplications}
        />;
      {/*case "reviewApplication":
        return <ReviewApplication
                  int_ques={this.props.int_ques}
                  renderVideos={this.renderVideos}
                  username_candidate={this.props.username_candidate}
                  email_candidate={this.props.email_candidate}
                  phone_candidate={this.props.phone_candidate}
                  location_candidate={this.props.location_candidate}
    />;*/}
      default:
        //Do nothing
    }
  };

  render() {
    return (
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
                      subpage={this.state.subpage}
                  />
                </div>
              </div>
              <div className='col-11'>
                <div className="dashboard-main">
                  {this.state.subpage === "settings" ? null : <RowBoxes userId={this.props.user.id} isEmployer={true}/>}
                  <div className="container" style={{marginBottom: "0%"}}>
                    <div className=""
                         style={{marginBottom: "auto", height: "auto", paddingBottom: '10%', paddingTop: '5%'}}>
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
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  userfullname: state.auth_reducer.userfullname,
  isAuthenticated: state.auth_reducer.isAuthenticated,
  loaded: state.question_reducer.loaded,
  postedJobs: state.question_reducer.postedJobs,
  dataLoaded: state.auth_reducer.dataLoaded,
  isRecorded: state.auth_reducer.isRecorded,
  int_ques: state.video_reducer.int_ques,
  username_candidate: state.video_reducer.username_candidate,
  email_candidate: state.video_reducer.email_candidate,
  phone_candidate: state.video_reducer.phone_candidate,
  location_candidate: state.video_reducer.location_candidate,
});

export default connect(mapStateToProps, { loadProfile, updateProfile, loadUserFullname,
    addPosition, getPostedJobs, addInterviews, getApplicantsVideos, getApplicantsInfo, getReceivedInterview,
    getRecordStatus, resendInvitation, updateCommentStatus})(
    EmployerDashboard
);
