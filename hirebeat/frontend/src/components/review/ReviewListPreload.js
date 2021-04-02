import React, { Component } from "react";
import { connect } from "react-redux";
//import { useEffect } from "react";
import PropTypes from "prop-types";
//import ReviewWindow from "./ReviewWindow";
import ReactPaginate from 'react-paginate';
import MediaList from "./MediaList";
import { getUnreviewedVideoList } from "../../redux/actions/video_actions";

export class ReviewList extends Component {
    static propTypes = {
    unreviewed_videos: PropTypes.array.isRequired,
    nums: PropTypes.number.isRequired,
    loaded: PropTypes.bool.isRequired,
    review_count: PropTypes.number.isRequired,
    getUnreviewedVideoList: PropTypes.func.isRequired,
  };

    constructor(props) {
        super(props);

        this.state = {
          data: [],
          offset: 0,
          perPage: 1,
          error: null,
          isLoaded: false,
        };
    };

    componentDidMount() {
        this.props.getUnreviewedVideoList();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.props.getUnreviewedVideoList();  // todo check here, maybe its redundant
        });
    };

    render() {
        return (
            <div className="commentBox" style={{ marginBottom: "5%"}}>
                {this.props.loaded ?
                    (this.props.nums > 0 ?
                        <div>
                            <MediaList
                                data={this.props.unreviewed_videos}
                                index={this.state.offset}
                                review_count={this.props.review_count}
                            />
                            <ReactPaginate
                              previousLabel={'previous'}
                              nextLabel={'next'}
                              breakLabel={'...'}
                              breakClassName={'break-me'}
                              pageCount={this.props.nums}
                              marginPagesDisplayed={2}
                              pageRangeDisplayed={5}
                              onPageChange={this.handlePageClick}
                              containerClassName={'pagination'}
                              subContainerClassName={'pages pagination'}
                              activeClassName={'active'}
                            />
                        </div> : <h2 style={{padding: "3rem", textAlign: "center"}}>No videos need to be reviewed!</h2>)
                    : null}
            </div>
        );
    };

};

const mapStateToProps = (state) => ({
  unreviewed_videos: state.video_reducer.unreviewed_videos,
  nums: state.video_reducer.nums,
  loaded: state.video_reducer.loaded,
  review_count: state.video_reducer.review_count,
});

export default connect(mapStateToProps, {getUnreviewedVideoList})(ReviewList);
