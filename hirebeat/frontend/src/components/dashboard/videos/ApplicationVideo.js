import React, { Component } from "react";
//import PropTypes from "prop-types";
import ApplicationVideoPanel from "./ApplicationVideoPanel";
import { connect } from "react-redux";
import ReactPaginate from 'react-paginate';
import { number } from "prop-types";

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

      state={
        currentVideo: 0,
      };

        setPage = (number) => {
              this.setState({
                currentVideo: number,
              });
      }

render() {
        var quesiton_array = [];
        var video_array = [];
        var stars = [];
        var comments = [];
        var pk = [];

        this.props.int_ques.map((i) => {
                stars.push(i.video_stars);
                comments.push(i.video_comment)
                quesiton_array.push(i.question_desc);
                video_array.push(i.url);
                pk.push(i.id)
        });

        return (
                <React.Fragment>
                {this.props.int_ques.length == 0 && <div><h3 style={{marginTop:"10%", textAlign:"center"}}>Candidate does not record any videos.</h3></div>}
                {this.props.int_ques.length != 0 &&
                                <div>
                                    <ApplicationVideoPanel
                                            question={quesiton_array[this.state.currentVideo]}
                                            url={video_array[this.state.currentVideo]}
                                            stars={stars}
                                            comments={comments}
                                            videopk={pk[this.state.currentVideo]}
                                            page={this.state.currentVideo}
                                    />
                                    <Pagination 
                                        totalVideos = {this.props.int_ques.length}
                                        setPage={this.setPage}
                                    />
                                </div>
                }

                </React.Fragment>
        );
  }
}

const Pagination = (props) => {
        const pageNumbers = ([]);
        for(var i = 1; i <= props.totalVideos; i++)
                pageNumbers.push(i);

        return(
                <nav>
                        <ul className="pagination">
                                {pageNumbers.map(number => (
                                        <li className="page-item">
                                                <a onClick={ () => { props.setPage(number-1) } } className='page-link'>
                                                        {number}
                                                </a>
                                        </li>
                                ))}
                        </ul>
                </nav>
        )
}


export default connect(null)(
        ApplicationVideo
      );
