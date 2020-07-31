import React, { Component } from "react";
import ButtonPanel from "./panel/ButtonPanel";
import EssentialUserInfo from "./essentials/EssentialUserInfo";
import VideoPreviewList from "./videos/VideoPreviewList";
import { Analytics } from "./videos/Analytics";
import { Resume } from "./videos/Resume";
import { updateProfile, loadProfile } from "../../redux/actions/auth_actions";
import { connect } from "react-redux";
import { DbRow } from "./DashboardComponents";
import safariAlert from "../basic/SafariAlert";

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

  renderAnalytics = () => {
    this.setState({
      subpage: "analytics",
    });
  };

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
      <div className="dashboard-container">
        <DbRow>
          <div className="col-11">
            <EssentialUserInfo
              user={this.props.user}
              profile={this.props.profile}
              updateProfile={this.props.updateProfile}
            />
          </div>
        </DbRow>
        <br />
        <br />
        <DbRow>
          <div className="col-2">
            <ButtonPanel
              renderVideos={this.renderVideos}
              renderProfile={this.renderProfile}
              renderAnalytics={this.renderAnalytics}
              renderResume={this.renderResume}
              subpage={this.state.subpage}
            />
          </div>
          <div className="col-10">{this.renderSubpage()}</div>
        </DbRow>
      </div>
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
