import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
//import { Link, Redirect } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
//import VideoPreviewList from "./videos/VideoPreviewList";
//import { Analytics } from "./videos/Analytics";
import { Interview } from "./videos/Interview";
import { Resume } from "./videos/Resume";
//import PageTitleArea from '../Common/PageTitleArea';
import { updateProfile, loadProfile, loadUserFullname } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";
import { DbCenterRow } from "./DashboardComponents";
//import MediaQuery from 'react-responsive';
import { useEffect } from "react";
import PropTypes from "prop-types";

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
    if (this.props.user.email == "" || this.props.user.email == null ) {
      var profile = this.makeProfile();
      this.props.updateProfile(profile);
    }
  };

  componentDidMount() {
    this.props.loadProfile();
    this.activateEmail();
    var user = { "id": this.props.user.id};
    this.props.loadUserFullname(user);
  }

  // params passed from resume page
  param = this.props.location.params;
  page = (typeof(this.param) == "undefined" ? "" : this.param.subpage);

  state = {
    subpage: (this.page == "" ? "videos" : this.page),
  };

  renderVideos = () => {
    this.setState({
      subpage: "videos",
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

  renderSubpage = () => {
    switch (this.state.subpage) {
      case "videos":
        return <Interview />;
      //case "analytics":
        //return <Analytics />;
      case "resume":
        return <Resume />;
      default:
      //Do nothing
    }
  };

  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
        {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Avenir Next"}}> */}
          <DbRow>
            <div className="col-12" style={{padding:"0%"}}>
              <div className="page-title-area">
                <div className="container">
                  <div className="page-title-content" style={{color:"#FFFFFF"}}>
                    <EssentialUserInfo
                      userfullname={this.props.userfullname}
                      user={this.props.user}
                      profile={this.props.profile}
                      updateProfile={this.props.updateProfile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </DbRow>
          <br />
          <br />
          <div className="container" style={{marginBottom:"0%"}}>
            <DbCenterRow>
              <div className="col-2" style={{marginBottom:"auto", paddingBottom:'10%'}}>
                <ButtonPanel
                  profile={this.props.profile}
                  renderVideos={this.renderVideos}
                  renderProfile={this.renderProfile}
                  renderAnalytics={this.renderAnalytics}
                  renderResume={this.renderResume}
                  subpage={this.state.subpage}
                />
              </div>
              <div className="col-11" style={{marginBottom:"auto", height:"auto", paddingBottom:'10%'}}>{this.renderSubpage()}</div>
            </DbCenterRow>
          </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  userfullname: state.auth_reducer.userfullname,
  isAuthenticated: state.auth_reducer.isAuthenticated,
});

export default connect(mapStateToProps, { loadProfile, updateProfile, loadUserFullname })(
  EmployerDashboard
);
