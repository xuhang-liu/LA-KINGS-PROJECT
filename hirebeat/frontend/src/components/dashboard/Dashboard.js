import React, { Component } from "react";
//import ButtonPanel from "./panel/ButtonPanel";
import { Link, Redirect } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
//import VideoPreviewList from "./videos/VideoPreviewList";
//import { Analytics } from "./videos/Analytics";
import { Interview } from "./videos/Interview";
import { Resume } from "./videos/Resume";
import { ReceivedInterviewList } from "./position/ReceivedInterviewList";
import { Profile } from "./profile/Profile";
import PageTitleArea from '../Common/PageTitleArea';
import {
  updateProfile, loadProfile, loadUserFullname, getReceivedInterview, getProfileDetail,
  updatePersonalInfo, updateSocialMedia, updateBasicInfo, updateVideo, updateSummary,
  updateResume, updateEducation, updateWorkExp, updateProfileRate, updateUserLogo
} from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
//import { DbRow, DbCenterRow, } from "./DashboardComponents";
import RowBoxes from "./Rowboxes"
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";
import SubpageSetting from './SubpageSetting';
import { tourConfig } from "./DashboardComponents";
import Tour from 'reactour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import DocumentMeta from 'react-document-meta';
function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.renderInterview = this.renderInterview.bind(this);
    this.renderResume = this.renderResume.bind(this);
    this.renderSetting = this.renderSetting.bind(this);
    this.renderVideos = this.renderVideos.bind(this);
    this.renderProfile = this.renderProfile.bind(this);
    // store user info to sessionStorage
    sessionStorage.setItem('user', JSON.stringify(this.props.user));
    sessionStorage.setItem("isAuthenticated", JSON.stringify(this.props.isAuthenticated));
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    getReceivedInterview: PropTypes.func.isRequired,
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
    if (this.props.user.email == "" || this.props.user.email == null || (this.props.user.email.toLowerCase().includes("gmail.com"))) {
      var profile = this.makeProfile();
      this.props.updateProfile(profile);
    }
  };

  componentDidMount() {
    this.props.loadProfile();
    this.activateEmail();
    this.props.getReceivedInterview(this.props.user.email);
    var user = { "id": this.props.user.id };
    this.props.loadUserFullname(user);
    this.props.getProfileDetail(this.props.user.id);
  }

  // params passed from resume page
  param = this.props.location.params;
  page = (typeof (this.param) == "undefined" ? "" : this.param.subpage);

  state = {
    subpage: (this.page == "" ? "videos" : this.page),
    isTourOpen: this.props.profile.saved_video_count == 0 && !this.props.profile.viewed_tutorial ? true : false,
  };

  // tour functions
  disableBody = (target) => disableBodyScroll(target);
  enableBody = (target) => enableBodyScroll(target);

  closeTour = () => {
    this.setState({ isTourOpen: false });
    // mark user has viewed tutorial
    let profile = {
      user: this.props.user.id,
      id: this.props.profile.id,
      viewed_tutorial: true,
    }
    this.props.updateProfile(profile);
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  renderVideos = () => {
    this.setState({
      subpage: "videos",
    });
  };

  renderInterview = () => {
    this.setState({
      subpage: "interview",
    });
  };

  /*renderAnalytics = () => {
    this.setState({
      subpage: "analytics",
    });
  };*/

  renderResume = () => {
    this.setState({
      subpage: "resume",
    });
  };

  renderSetting = () => {
    this.setState({
      subpage: "settings",
    }
    )
  }

  renderProfile = () => {
    // solve async problem
    this.props.getProfileDetail(this.props.user.id);
    this.setState({
      subpage: "profile",
    }
    )
  }

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "videos":
        return <Interview />;
      //case "analytics":
      //return <Analytics />;
      case "resume":
        return <Resume />;
      case "interview":
        return <ReceivedInterviewList
          received_interview={this.props.received_interview}
          user={this.props.user}
          loaded={this.props.loaded}
        />;
      case "settings":
        return <SubpageSetting
          user={this.props.user}
          profile={this.props.profile}
          location={this.props.profile.location}
          phone_number={this.props.profile.phone_number}
          subpage={this.state.subpage}
          renderVideos={this.renderVideos}
        />;
      case "profile":
        return <Profile
          userId={this.props.user.id}
          getProfileDetail={this.props.getProfileDetail}
          updatePersonalInfo={this.props.updatePersonalInfo}
          updateSocialMedia={this.props.updateSocialMedia}
          updateBasicInfo={this.props.updateBasicInfo}
          updateVideo={this.props.updateVideo}
          updateSummary={this.props.updateSummary}
          updateResume={this.props.updateResume}
          updateEducation={this.props.updateEducation}
          updateWorkExp={this.props.updateWorkExp}
          profileDetail={this.props.profileDetail}
          updateProfileRate={this.props.updateProfileRate}
          updateUserLogo={this.props.updateUserLogo}
        />;
      default:
      //Do nothing
    }
  };

  render() {
    const meta = {
      title: 'HireBeat – Your First Step to A Better Recruiting Journey',
      description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
        }
      }
    };
    let user = JSON.parse(sessionStorage.getItem("user")) || this.props.user;
    const { isTourOpen } = this.state;
    const accentColor = "#5cb7b7";
    if (this.props.profile.is_employer) {
      return <Redirect to="/employer_dashboard" />;
    } else {
      return (
        <DocumentMeta {...meta}>
        <React.Fragment>
          <ScrollToTopOnMount />
          {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Avenir Next"}}> */}
          <MediaQuery minDeviceWidth={1224}>
            <Tour
              onRequestClose={this.closeTour}
              steps={tourConfig}
              isOpen={isTourOpen}
              className="helper"
              rounded={5}
              accentColor={accentColor}
              onAfterOpen={this.disableBody}
              onBeforeClose={this.enableBody}
              closeWithMask={false}
              prevButton={<i className="tour-prev-btn">Back</i>}
              nextButton={<i className="tour-next-btn">Next</i>}
            />
            <div className="row no-gutters min-width-1290" data-tut="reactour-dashboard">
              <div className='col-1'>
                <div className='dashboard-sidebar'>
                  <EssentialUserInfo
                    userfullname={this.props.userfullname}
                    user={this.props.user}
                    profile={this.props.profile}
                    updateProfile={this.props.updateProfile}
                    renderSetting={this.renderSetting}
                    renderVideos={this.renderVideos}
                    renderResume={this.renderResume}
                    renderInterview={this.renderInterview}
                    renderProfile={this.renderProfile}
                    subpage={this.state.subpage}
                  />
                </div>
              </div>
              <div className='col-11' style={{ backgroundColor: "#e8edfc" }}>
                <div className="dashboard-main">
                  {this.state.subpage === "settings" || this.state.subpage === "profile" ? null :
                    <div className="container-fluid" style={{ height: "12rem" }} data-tut="reactour-rowbox">
                      <RowBoxes
                        renderVideos={this.renderVideos}
                        renderResume={this.renderResume}
                        renderInterview={this.renderInterview}
                        userId={user.id}
                        isEmployer={false}
                      />
                    </div>}
                  <div className="container-fluid" style={{ marginBottom: "10%" }}>
                    <div style={{ marginBottom: "auto", height: "auto", paddingTop: '5%' }}>
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
            <div style={{ textAlign: "center" }}>
              <Link to="/">
                <a className="default-btn" style={{ color: "white", backgroundColor: "#FF6B00", marginTop: "1rem", marginBottom: "1rem" }}>
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
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  userfullname: state.auth_reducer.userfullname,
  isAuthenticated: state.auth_reducer.isAuthenticated,
  received_interview: state.auth_reducer.received_interview,
  loaded: state.auth_reducer.loaded,
  profileDetail: state.auth_reducer.profileDetail,
});

export default connect(mapStateToProps, {
  loadProfile, updateProfile, loadUserFullname, getReceivedInterview,
  getProfileDetail, updatePersonalInfo, updateSocialMedia, updateBasicInfo, updateVideo, updateSummary,
  updateResume, updateEducation, updateWorkExp, updateProfileRate, updateUserLogo
})(
  Dashboard
);
