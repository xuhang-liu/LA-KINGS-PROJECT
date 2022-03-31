import React, { Component } from "react";
//import ButtonPanel from "./panel/ButtonPanel";
import { Link } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import MergeIntergration from "./essentials/MergeIntergration";
//import { JobApplication } from "./applications/JobApplication";
import { CreatePosition } from "./position/CreatePosition";
import { ApplicationCover } from "./applications/ApplicationCover";
import ShortList from "./ShortList";
import { MyModalUpgrade } from "./DashboardComponents";
//import ReviewApplication from "./ReviewApplication";
import PageTitleArea from '../Common/PageTitleArea';
import {
  updateProfile, loadProfile, loadUserFullname, getReceivedInterview, getRecordStatus, subreviewerUpdateComment,
  getEmployerProfileDetail, updateEmployerInfo, updateEmployerSocialMedia, updateEmployerBasicInfo, updateEmployerVideo,
  updateEmployerSummary, getEmployerPost, addEmployerPost, updateEmployerPost, deleteEmployerPost, updateEmployerLogo, checkUserExistence,
  getSourcingData, logout
}
  from "../../redux/actions/auth_actions";
import {
  addNewJob, getAllJobs, updateJob, getjobidlist, getZRFeedXML, getZRPremiumFeedXML, createMergeLinkToken, retrieveMergeAccountToken,
  checkFreeAccountActiveJobs, sendMergeApiRequest, addCandFromMerge, checkIfMasterActive, checkPremiumJobList
} from "../../redux/actions/job_actions";
import { getApplicantsVideos, getApplicantsInfo } from "../../redux/actions/video_actions";
import {
  addPosition, getPostedJobs, addInterviews, resendInvitation, updateCommentStatus,
  getQuestionList, updateViewStatus, getAnalyticsInfo, getReviewNote, getReviewerEvaluation, getReviewersList, removeReviewerFromList,
  getCurrentReviewerEvaluation
} from "../../redux/actions/question_actions";
import { connect } from "react-redux";
//import { DbRow, DbCenterRow, } from "./DashboardComponents";
//import RowBoxes from "./Rowboxes";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";
import SubpageSetting from './SubpageSetting';
import AnalyticsCover from './AnalyticsCover';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import DocumentMeta from 'react-document-meta';
import { EmployerProfile } from "./employerProfile/EmployerProfile";
import { JobCover } from "./jobBoard/JobCover";
import { JobCreation } from "./jobBoard/JobCreation";
import { Sourcing } from "./jobBoard/Sourcing";
import JobEdition from "./jobBoard/JobEdition";
import EmployerHelp from "./EmployerHelp";
import Footer from "../layout/Footer";
import axios from "axios";
import IdleTimer from 'react-idle-timer'
//import ReviewCandidate from "./applications/ReviewCandidate";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class EmployerDashboard extends Component {

  constructor(props) {
    super(props);
    let subpage = this.getInitialSubpage();
    this.state = {
      subpage: subpage,
      jobInfo: {},
      showUpgradeM: false,
      showUpgradeM1: false,
      showUpgradeM2: false,
      showUpgradeM3: false,
      job_back_home: false,
    }
    // store user info to sessionStorage
    sessionStorage.setItem('user', JSON.stringify(this.props.user));
    sessionStorage.setItem("isAuthenticated", this.props.isAuthenticated);

    this.idleTimer = null
    this.handleOnAction = this.handleOnAction.bind(this)
    this.handleOnActive = this.handleOnActive.bind(this)
    this.handleOnIdle = this.handleOnIdle.bind(this)
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    int_ques: PropTypes.array.isRequired,
    position_list: PropTypes.array.isRequired,
    user_existence: PropTypes.bool,
  };

  setJob_back_home = () => {
    this.setState({
      job_back_home: false
    })
  }

  setShowUpgradeM = () => {
    this.setState({
      showUpgradeM: true
    });
  }

  setShowUpgradeM1 = () => {
    this.setState({
      showUpgradeM1: true
    });
  }

  setShowUpgradeM2 = () => {
    this.setState({
      showUpgradeM2: true
    });
  }

  setShowUpgradeM3 = () => {
    this.setState({
      showUpgradeM3: true
    });
  }

  setHideUpgradeM = () => {
    this.setState({
      showUpgradeM: false
    });
  }

  setHideUpgradeM1 = () => {
    this.setState({
      showUpgradeM1: false
    });
  }

  setHideUpgradeM2 = () => {
    this.setState({
      showUpgradeM2: false
    });
  }

  setHideUpgradeM3 = () => {
    this.setState({
      showUpgradeM3: false
    });
  }

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
    if (!this.props.profile.email_confirmed) {
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
    var user = { "id": this.props.user.id };
    this.props.getPostedJobs(user.id, 1, sessionStorage.getItem("selectedSubpage") || "");
  }


  componentDidMount() {
    this.props.loadProfile();
    this.activateEmail();
    this.verifyEmail();
    var user = { "id": this.props.user.id };
    this.props.loadUserFullname(user);
    this.props.getPostedJobs(user.id, 1, sessionStorage.getItem("selectedSubpage") || "");
    this.props.getAnalyticsInfo(this.props.user.id);
    this.props.getEmployerProfileDetail(this.props.user.id);
    this.props.getEmployerPost(this.props.user.id, 0);
    this.props.getAllJobs(this.props.user.id, 1, sessionStorage.getItem("selectedSubpageForJob") || "", "", "");
    this.props.getQuestionList();
    this.props.getReviewersList(user.id);
    this.props.checkPremiumJobList(user);
    this.props.getZRFeedXML();
    this.props.getZRPremiumFeedXML();
    var data = {
      "id": this.props.user.id,
      "limit": this.props.profile.position_limit,
    }
    if (((this.props.profile.position_count) > (this.props.profile.position_limit)) && ((this.props.profile.plan_interval == "Pro") || this.props.profile.membership == "Regular")) {
      this.props.checkFreeAccountActiveJobs(data);
      var user = { "id": this.props.user.id };
      this.props.loadProfile();
      this.props.getPostedJobs(user.id, 1, sessionStorage.getItem("selectedSubpage") || "");
      this.props.getAllJobs(this.props.user.id, 1, sessionStorage.getItem("selectedSubpageForJob") || "", "", "");
      this.props.getQuestionList();
      this.props.getReviewersList(user.id);
    }
    let data1 = {
      "user_id": this.props.user.id
    };
    this.props.checkIfMasterActive(data1);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let user_id = { "user_id": this.props.user.id };
    axios.post("api/check_freetrial_expire", user_id, config).then((res) => {
      if (res.data.data) {
        var data = {
          "id": this.props.user.id,
          "limit": this.props.profile.position_limit,
        }
        this.props.checkFreeAccountActiveJobs(data);
        setTimeout(() => {
          this.props.getPostedJobs(this.props.user.id, 1, sessionStorage.getItem("selectedSubpage") || "");
          this.props.getAllJobs(this.props.user.id, 1, sessionStorage.getItem("selectedSubpageForJob") || "", "", "");
        }, 300)
        sessionStorage.setItem('subpage', "employerProfile");
        this.setState({
          subpage: "employerProfile"
        });
        var user = { "id": this.props.user.id };
        this.props.loadProfile();
        this.props.loadUserFullname(user);
        this.props.getEmployerProfileDetail(this.props.user.id);
        this.props.getEmployerPost(this.props.user.id, 0);
        this.setShowUpgradeM3();
      }
    }).catch(error => {
      console.log(error)
    });
    let queryData = {
      keywords: "",
      location: "",
      skills: [],
      position: "",
      has_video: false,
      page: 1,
      has_filter: false,
      loc_radius: 0,
    }
    this.props.getSourcingData(queryData);
  }

  getInitialSubpage = () => {
    let subpage = sessionStorage.getItem('subpage') || "employerProfile";
    if (this.props.profile.is_external_reviewer || this.props.profile.is_subreviwer) {
      subpage = "jobs";
    }
    return subpage;

  }

  refreshPage = () => {
    window.location.reload(false);
  }

  renderJobs = () => {
    if (this.state.subpage == "jobs") {
      this.props.getAllJobs(this.props.user.id, 1, "", "", "");
      this.setState({
        job_back_home: true
      });
    }
    // else if (this.props.profile.membership == "Regular") {
    //   this.setShowUpgradeM();
    // }
    else if (!this.props.master_is_active) {
      this.setShowUpgradeM2();
    }
    else {
      sessionStorage.setItem('subpage', "jobs");
      this.setState({
        subpage: "jobs",
      });
    }
    window.scrollTo(0, 0);
  };

  renderJobEdition = () => {
    this.setState({
      subpage: "jobEdition",
    });
  };

  setJobInfo = (jobInfo) => {
    this.setState({ jobInfo: jobInfo });
  }

  renderJobCreation = () => {
    if (this.props.employerProfileDetail.summary == "" || this.props.employerProfileDetail.summary == null) {
      confirmAlert({
        title: 'One More Step!',
        message: 'Please complete your Company Overview before posting a job position.',
        buttons: [
          {
            label: 'Ok',
          }
        ]
      });
      this.setState({
        subpage: "employerProfile",
      }
      )
      // } else if ((this.props.profile.position_count) >= (this.props.profile.position_limit)) {
      //   this.setShowUpgradeM();
    } else {
      this.setState({
        subpage: "jobCreation",
      }
      )
    }
  }

  renderApplications = () => {
    if (this.state.subpage == "applications") {
      this.refreshPage();
    }
    else if (this.props.profile.membership == "Regular" && (!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer)) {
      this.setShowUpgradeM();
    } else {
      sessionStorage.setItem('subpage', "applications");
      this.setState({
        subpage: "applications",
      });
    }
  };

  renderPosition = () => {
    if (this.props.profile.company_name == "" || this.props.profile.company_name == null) {
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
    } else if ((this.props.profile.position_count) >= (this.props.profile.position_limit)) {
      confirmAlert({
        title: 'Upgrade Now!',
        message: 'Exceed max number of positions! Upgrade now to create more positions',
        buttons: [
          { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
          { label: 'OK' },
        ]
      });
    } else {
      this.setState({
        subpage: "position",
      }
      )
    }
  }

  renderSetting = () => {
    if (this.state.subpage == "settings") {
      this.refreshPage();
    }
    sessionStorage.setItem('subpage', "settings");
    this.setState({
      subpage: "settings",
    }
    )
  }

  renderHelp = () => {
    if (this.state.subpage == 'help'){
      this.refreshPage();
    }
    sessionStorage.setItem('subpage', 'help');
    this.setState({subpage: "help"})
  }

  renderReviewApplication = () => {
    this.setState({
      subpage: "reviewApplication",
    }
    )
  }

  renderShortlist = () => {
    if (this.state.subpage == "shortlist") {
      this.refreshPage();
    }
    else if (this.props.profile.membership == "Regular" && (!this.props.profile.is_subreviwer) && (!this.props.profile.is_external_reviewer)) {
      this.setShowUpgradeM();
    } else {
      sessionStorage.setItem('subpage', "shortlist");
      this.setState({
        subpage: "shortlist",
      });
    }
  };

  renderAnalytics = () => {
    if (this.state.subpage == "analytics") {
      this.refreshPage();
    }
    this.props.getAnalyticsInfo(this.props.user.id);
    sessionStorage.setItem('subpage', "analytics");
    setTimeout(() => {
      this.setState({
        subpage: "analytics",
      });
    }, 200)
  };

  renderEmployerProfile = () => {
    if (this.state.subpage == "employerProfile") {
      this.refreshPage();
    }
    sessionStorage.setItem('subpage', "employerProfile");
    this.setState({
      subpage: "employerProfile",
    }
    )
  }

  renderMergeIntergration = () => {
    if (this.state.subpage == "mergeintergration") {
      this.refreshPage();
    }
    if (this.props.profile.membership == "Premium") {
      this.props.createMergeLinkToken(this.props.user.id);
      sessionStorage.setItem('subpage', "mergeintergration");
      this.setState({
        subpage: "mergeintergration",
      });
    } else {
      this.setShowUpgradeM();
    }
  }

  renderEmployerSourcing = () => {
    if (this.state.subpage == "employerSourcing") {
      this.refreshPage();
    } else if (this.props.profile.membership == "Regular") {
      this.setShowUpgradeM();
    } else {
      sessionStorage.setItem('subpage', "employerSourcing");
      this.setState({
        subpage: "employerSourcing",
      });
    }
  }

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "jobs":
        return <JobCover
          user={this.props.user}
          profile={this.props.profile}
          renderJobs={this.renderJobs}
          renderJobCreation={this.renderJobCreation}
          jobs={this.props.jobs}
          renderJobEdition={this.renderJobEdition}
          setJobInfo={this.setJobInfo}
          isLoaded={this.props.isLoaded}
          getAllJobs={this.props.getAllJobs}
          getPJobs={this.getPJobs}
          postedJobs={this.props.postedJobs}
          companyName={this.props.profile.company_name}
          loaded={this.props.loaded}
          addInterviews={this.props.addInterviews}
          getReceivedInterview={this.props.getReceivedInterview}
          getApplicantsVideos={this.props.getApplicantsVideos}
          getApplicantsInfo={this.props.getApplicantsInfo}
          getRecordStatus={this.props.getRecordStatus}
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
          updateViewStatus={this.props.updateViewStatus}
          subreviewerUpdateComment={this.props.subreviewerUpdateComment}
          checkUserExistence={this.props.checkUserExistence}
          user_existence={this.props.user_existence}
          getPostedJobs={this.props.getPostedJobs}
          employerProfileDetail={this.props.employerProfileDetail}
          job_back_home={this.state.job_back_home}
          setJob_back_home={this.setJob_back_home}
        />;
      case "jobCreation":
        return <JobCreation
          user={this.props.user}
          profile={this.props.profile}
          renderJobs={this.renderJobs}
          addNewJob={this.props.addNewJob}
          getAllJobs={this.props.getAllJobs}
          getPJobs={this.getPJobs}
          jobid_list={this.props.jobid_list}
          getjobidlist={this.props.getjobidlist}
          getZRFeedXML={this.props.getZRFeedXML}
          getZRPremiumFeedXML={this.props.getZRPremiumFeedXML}
          employerProfileDetail={this.props.employerProfileDetail}
          jobs={this.props.jobs}
          companyName={this.props.profile.company_name}
          loadProfile={this.props.loadProfile}
        />;
      case "jobEdition":
        return <JobEdition
          user={this.props.user}
          profile={this.props.profile}
          renderJobs={this.renderJobs}
          updateJob={this.props.updateJob}
          getAllJobs={this.props.getAllJobs}
          jobInfo={this.state.jobInfo}
          getPJobs={this.getPJobs}
          employerProfileDetail={this.props.employerProfileDetail}
          loadProfile={this.props.loadProfile}
        />;
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
          checkUserExistence={this.props.checkUserExistence}
          user_existence={this.props.user_existence}
          getPostedJobs={this.props.getPostedJobs}
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
          renderEmployerProfile={this.renderEmployerProfile}
          renderJobs={this.renderJobs}
          sub_r_list={this.props.sub_r_list}
          ext_r_list={this.props.ext_r_list}
          removeReviewerFromList={this.props.removeReviewerFromList}
          getReviewersList={this.props.getReviewersList}
          getPJobs={this.getPJobs}
          employerProfileDetail={this.props.employerProfileDetail}
          getEmployerProfileDetail={this.props.getEmployerProfileDetail}
        />;
      case "analytics":
        return <AnalyticsCover
          user={this.props.user}
          profile={this.props.profile}
          renderApplications={this.renderApplications}
          analyticsInfo={this.props.analyticsInfo}
          getAnalyticsInfo={this.props.getAnalyticsInfo}
          position_list={this.props.position_list}
          interview_session={this.props.interview_session}
          alljobAnaInfo={this.props.alljobAnaInfo}
        />
      case "shortlist":
        if (Object.keys(this.props.jobL).length > 0) {
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
            user={this.props.user}
            companyName={this.props.profile.company_name}
            getReviewNote={this.props.getReviewNote}
            getReviewerEvaluation={this.props.getReviewerEvaluation}
            getCurrentReviewerEvaluation={this.props.getCurrentReviewerEvaluation}
          />
        } else {
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
          updateEmployerLogo={this.props.updateEmployerLogo}
          profile={this.props.profile}
        />;
      case "mergeintergration":
        return <MergeIntergration
          user={this.props.user}
          profile={this.props.profile}
          link_token={this.props.link_token}
          retrieveMergeAccountToken={this.props.retrieveMergeAccountToken}
          sendMergeApiRequest={this.props.sendMergeApiRequest}
          interview_stages_api_response={this.props.interview_stages_api_response}
          jobs_api_response={this.props.jobs_api_response}
          addCandFromMerge={this.props.addCandFromMerge}
          renderJobs={this.renderJobs}
        />;
      case "employerSourcing":
        return <Sourcing
          user={this.props.user}
          profile={this.props.profile}
          sourcingData={this.props.sourcingData}
          sourcingDataLoaded={this.props.sourcingDataLoaded}
          getSourcingData={this.props.getSourcingData}
        />;
      case "help":
        return <EmployerHelp />
      default:
        return null;
      //Do nothing
    }
  };

  handleOnAction (event) {
    // console.log('user did something', event)
  }

  handleOnActive (event) {
    // console.log('user is active', event)
    // console.log('time remaining', this.idleTimer.getRemainingTime())
  }

  handleOnIdle (event) {
    console.log('user is idle', event)
    console.log('last active', this.idleTimer.getLastActiveTime())
    sessionStorage.clear();
    setTimeout(() => { this.props.logout() }, 300)
  }

  render() {
    const meta = {
      title: 'HireBeat - Employer Dashboard',
      description: 'Employer Dashboard Info',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
        }
      }
    };
    //    console.log(this.props.postedJobs, this.props.jobs);
    return (
      <DocumentMeta {...meta}>
        <React.Fragment>
          <IdleTimer
            ref={ref => { this.idleTimer = ref }}
            timeout={1000 * 60 * 30}
            onActive={this.handleOnActive}
            onIdle={this.handleOnIdle}
            onAction={this.handleOnAction}
            debounce={250}
          />
          {this.props.employerDetailLoaded ?
            <div>
              <MyModalUpgrade
                show={this.state.showUpgradeM}
                onHide={this.setHideUpgradeM}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Your Free Trial Has Expired</h3>
                  <p className="pt-3">Want to continue using HireBeat? Select a Subscription Plan today!</p>
                  <div className="row" style={{ margin: "auto", width: "80%" }}>
                    <div className="col-6">
                      <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                    </div>
                    <div className="col-6">
                      <button onClick={this.setHideUpgradeM} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                    </div>
                  </div>
                </div>
              </MyModalUpgrade>
              <MyModalUpgrade
                show={this.state.showUpgradeM1}
                onHide={this.setHideUpgradeM1}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>You need upgrade to use intergration</h3>
                  <p className="pt-3">Want to continue using intergration? Select the Premium Plan today!</p>
                  <div className="row" style={{ margin: "auto", width: "80%" }}>
                    <div className="col-6">
                      <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                    </div>
                    <div className="col-6">
                      <button onClick={this.setHideUpgradeM1} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                    </div>
                  </div>
                </div>
              </MyModalUpgrade>
              <MyModalUpgrade
                show={this.state.showUpgradeM2}
                onHide={this.setHideUpgradeM2}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Account Disabled</h3>
                  <p className="pt-3">You can no longer access the content because your company has stopped the HireBeat subscription.</p>
                  <p className="pt-3">Please get in touch with your admin for more details.</p>
                  <div className="row" style={{ margin: "auto", width: "30%" }}>
                    <div className="col-12">
                      <button onClick={this.setHideUpgradeM2} className="default-btn1" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px" }}>OK</button>
                    </div>
                  </div>
                </div>
              </MyModalUpgrade>
              <MyModalUpgrade
                show={this.state.showUpgradeM3}
                onHide={this.setHideUpgradeM3}
              >
                <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                  <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Your Free Trial Has Expired</h3>
                  <p className="pt-3">Your 14-Day Free Trial has expired. Please purchase a plan to continue using HireBeat.</p>
                  <div className="row" style={{ margin: "auto", width: "80%" }}>
                    <div className="col-6">
                      <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                    </div>
                    <div className="col-6">
                      <button onClick={this.setHideUpgradeM3} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                    </div>
                  </div>
                </div>
              </MyModalUpgrade>
              <ScrollToTopOnMount />
              {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Inter"}}> */}
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
                        renderJobs={this.renderJobs}
                        renderEmployerSourcing={this.renderEmployerSourcing}
                        subpage={this.state.subpage}
                        job_dots={this.props.job_dots}
                        createMergeLinkToken={this.props.createMergeLinkToken}
                        renderMergeIntergration={this.renderMergeIntergration}
                        renderHelp={this.renderHelp}
                      />
                    </div>
                  </div>
                  <div className='col-11' style={{ backgroundColor: "#f3f6f9" }}>
                    <div className="dashboard-main" style={{ backgroundColor: "#f3f6f9" }}>
                      {/* {((this.state.subpage === "settings") || (this.state.subpage === "shortlist") ||
                        (this.props.profile.is_subreviwer) || (this.state.subpage === "analytics") ||
                        (this.state.subpage === "applications") || (this.state.subpage === "jobs") ||
                        (this.state.subpage === "jobCreation") || (this.state.subpage === "jobEdition") || (this.state.subpage === "mergeintergration") || (this.state.subpage === "employerSourcing")) || (this.state.subpage == "") ? null :
                        <div className="container-fluid" style={{ height: "22rem" }} data-tut="reactour-rowbox">
                          <RowBoxes userId={this.props.user.id} isEmployer={true} />
                        </div>} */}
                      <div className="container-fluid" style={{ marginBottom: "20vh" }}>
                        <div style={{ marginBottom: "auto", height: "auto", paddingTop: '2%' }}>
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
              <Footer />
            </div> : null}
        </React.Fragment>
      </DocumentMeta>
    );
  }
}

const mapStateToProps = (state) => {
  var job_list = {};

  Object.keys(state.question_reducer.postedJobs).map((key) => {
    if (!state.question_reducer.postedJobs[key].is_closed) {
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
    job_dots: state.question_reducer.job_dots,
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
    alljobAnaInfo: state.question_reducer.alljobAnaInfo,
    employerProfileDetail: state.auth_reducer.employerProfileDetail,
    employerPost: state.auth_reducer.employerPost,
    jobs: state.job_reducer.jobs,
    isLoaded: state.job_reducer.isLoaded,
    jobid_list: state.job_reducer.jobid_list,
    employerDetailLoaded: state.auth_reducer.employerDetailLoaded,
    user_existence: state.auth_reducer.user_existence,
    sub_r_list: state.question_reducer.sub_r_list,
    ext_r_list: state.question_reducer.ext_r_list,
    link_token: state.job_reducer.link_token,
    interview_stages_api_response: state.job_reducer.interview_stages_api_response,
    jobs_api_response: state.job_reducer.jobs_api_response,
    sourcingData: state.auth_reducer.sourcingData,
    sourcingDataLoaded: state.auth_reducer.sourcingDataLoaded,
    master_is_active: state.job_reducer.master_is_active
  }
};

export default connect(mapStateToProps, {
  loadProfile, updateProfile, loadUserFullname,
  addPosition, getPostedJobs, addInterviews, getApplicantsVideos, getApplicantsInfo, getReceivedInterview,
  getRecordStatus, resendInvitation, updateCommentStatus, getQuestionList, updateViewStatus, getAnalyticsInfo, subreviewerUpdateComment,
  getEmployerProfileDetail, updateEmployerInfo, updateEmployerSocialMedia, updateEmployerBasicInfo, updateEmployerVideo,
  updateEmployerSummary, getEmployerPost, addEmployerPost, updateEmployerPost, deleteEmployerPost, addNewJob, getAllJobs,
  updateJob, updateEmployerLogo, getjobidlist, getZRFeedXML, getZRPremiumFeedXML, checkUserExistence, getReviewNote, getReviewerEvaluation, getReviewersList, removeReviewerFromList,
  getCurrentReviewerEvaluation, createMergeLinkToken, retrieveMergeAccountToken, checkFreeAccountActiveJobs, sendMergeApiRequest, addCandFromMerge, getSourcingData, checkIfMasterActive,
  checkPremiumJobList, logout
})(
  EmployerDashboard
);
