import React, { Component } from "react";
//import PropTypes from "prop-types";
import ApplicationVideoPanel from "./ApplicationVideoPanel";
import { connect } from "react-redux";

export class ApplicationVideo extends Component {
//   static propTypes = {
//     videos: PropTypes.array.isRequired,
//     loaded: PropTypes.bool.isRequired,
//     getVideos: PropTypes.func.isRequired,
//     deleteVideo: PropTypes.func.isRequired,
//     filter: PropTypes.string,
//   };
constructor(props) {
        super(props);
      }

  render() {
        return (
                <React.Fragment>
                {this.props.int_ques.length == 0 && <div><h3 style={{marginTop:"10%", textAlign:"center"}}>Candidate does not record any videos.</h3></div>}
                {this.props.int_ques.map((i) => {
                return (
                    <div>
                    <ApplicationVideoPanel
                            question={i.question_desc}
                            url={i.url}
                    />
                    </div>) })}
                </React.Fragment>
        );
  }
}


export default connect(null)(
        ApplicationVideo
      );
