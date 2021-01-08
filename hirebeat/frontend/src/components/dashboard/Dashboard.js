import React, { Component } from "react";
import { Link } from "react-router-dom";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
//import VideoPreviewList from "./videos/VideoPreviewList";
//import { Analytics } from "./videos/Analytics";
import { Interview } from "./videos/Interview";
import { Resume } from "./videos/Resume";
import PageTitleArea from '../Common/PageTitleArea';
import { updateProfile, loadProfile, loadUserFullname } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow, DbCenterRow, RowBoxes} from "./DashboardComponents";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class Dashboard extends Component {
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
        return <Resume/>;
      //case "analytics":
        //return <Analytics />;
      case "resume":
        return <Resume/>;
      default:
      //Do nothing
    }
  };

  render() {
    return (
      <React.Fragment>
        <ScrollToTopOnMount />
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
                      />
              </div>  
            </div>
            <div className='col-9'>
              <div className="dashboard-main">
                {this.state.subpage === "settings" ? null : <RowBoxes/>}
                <div className="container" style={{marginBottom:"0%"}}>
                  <div className="" style={{marginBottom:"auto", height:"auto", paddingBottom:'10%', paddingTop:'5%'}}>
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
      {/* </div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
  userfullname: state.auth_reducer.userfullname,
});

export default connect(mapStateToProps, { loadProfile, updateProfile, loadUserFullname })(
  Dashboard
);
