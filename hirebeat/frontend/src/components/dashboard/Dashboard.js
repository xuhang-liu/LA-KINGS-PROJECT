import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import VideoPreviewList from "./videos/VideoPreviewList";
import { Analytics } from "./videos/Analytics";
import { Resume } from "./videos/Resume";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";
import { DbCenterRow } from "./DashboardComponents";
import safariAlert from "../basic/SafariAlert";
import MediaQuery from 'react-responsive';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


export class Dashboard extends Component {
  componentDidMount() {
    safariAlert();
    this.props.loadProfile();
  }

  state = {
    subpage: "videos", // or analytics
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
        return <VideoPreviewList />;
      case "analytics":
        return <Analytics />;
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
        {/* <div className="dashboard-container" style={{marginBottom:"10%", fontFamily:"Poppins"}}> */}
          <MediaQuery minDeviceWidth={1224}>
          <DbRow>
            <div className="col-12" style={{padding:"0%"}}>
              <div className="page-title-area">
                <div className="container">
                  <div className="page-title-content" style={{color:"#FFFFFF"}}>
                    <EssentialUserInfo
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
          <div className="container" style={{marginBottom:"10%"}}>
            <DbCenterRow>
              <div className="col-3" style={{marginBottom:"auto"}}>
                <ButtonPanel
                  profile={this.props.profile}
                  renderVideos={this.renderVideos}
                  renderProfile={this.renderProfile}
                  renderAnalytics={this.renderAnalytics}
                  renderResume={this.renderResume}
                  subpage={this.state.subpage}
                />
              </div>
              <div className="col-10" style={{marginBottom:"auto"}}>{this.renderSubpage()}</div>
            </DbCenterRow>
          </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1224}>
          <div style={{fontSize:"1.6rem"}}><b>Please Login with your computer for the full functionalities.</b></div>
        </MediaQuery>
      {/* </div> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, { loadProfile, updateProfile })(
  Dashboard
);
