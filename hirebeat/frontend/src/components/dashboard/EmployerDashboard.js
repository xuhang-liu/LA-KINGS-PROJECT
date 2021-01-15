import React, { Component } from "react";
//import ButtonPanel from "./panel/ButtonPanel";
import { Link, Redirect } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import { JobApplication } from "./applications/JobApplication";
import {CreatePosition} from "./position/CreatePosition";
import PageTitleArea from '../Common/PageTitleArea';
import { updateProfile, loadProfile, loadUserFullname } from "../../redux/actions/auth_actions";
import { addPosition, getPostedJobs, addInterviews } from "../../redux/actions/question_actions";
import { connect } from "react-redux";
//import { DbRow, DbCenterRow, } from "./DashboardComponents";
import RowBoxes from "./Rowboxes"
import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";
import SubpageSetting from './SubpageSetting';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
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

  componentDidMount() {
    this.props.loadProfile();
    this.activateEmail();
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

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "applications":
        return <JobApplication
            companyName={this.props.profile.company_name}
            loaded={this.props.loaded}
            postedJobs={this.props.postedJobs}
            addInterviews={this.props.addInterviews}
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
            <div className="row no-gutters">
              <div className='col-3'>
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
              <div className='col-9'>
                <div className="dashboard-main">
                  {this.state.subpage === "settings" ? null : <RowBoxes userId={this.props.user.id}/>}
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
});

export default connect(mapStateToProps, { loadProfile, updateProfile, loadUserFullname,
    addPosition, getPostedJobs, addInterviews })(
    EmployerDashboard
);
