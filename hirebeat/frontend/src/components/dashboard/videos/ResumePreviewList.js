import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getResumes } from "../../../redux/actions/resume_actions";
import { ResumePreview } from "./ResumePreview";

export class Resume extends Component {
  static propTypes = {
    resumes: PropTypes.array.isRequired,
    loaded: PropTypes.bool.isRequired,
    getResumes: PropTypes.func.isRequired,
  };

  state = {
    resumes: [],
    loaded: false,
  }

  componentDidMount() {
    this.props.getResumes();
  }

  render() {
      return (
        <React.Fragment>
          {this.props.loaded ?
            this.props.resumes.map((r) => {
              return (
                <ResumePreview
                  resume={r}
                  percent={r.result_rate}
                  jobTitle={r.job_title}
                  jdText={r.jd_text}
                  getResumes={this.props.getResumes}
                  createdAt={r.created_at.slice(0, 10)}
                />
              )
            }) : null
          }
        </React.Fragment>
      );
  }
};

const mapStateToProps = (state) => ({
  resumes: state.resume_reducer.resumes,
  loaded: state.resume_reducer.loaded,
});

export default connect(mapStateToProps, {
  getResumes,
})(Resume);
