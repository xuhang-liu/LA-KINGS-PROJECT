import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ReviewWindow from "./ReviewWindow";
import ReactPaginate from 'react-paginate';

export class ReviewList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          data: [],
          offset: 0,
          perPage: 1,
          pageCount: 0,
          error: null,
          isLoaded: false,
        };
    };

    loadDataFromServer() {
        fetch("http://127.0.0.1:8000/get-unreviewed-video-list")  // change here in production
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                pageCount: result.video_list.length,
                isLoaded: true,
                data: result.video_list.slice(this.state.offset, this.state.offset + this.state.perPage)
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: false,
                error
              });
            }
          )
    };

    componentDidMount() {
        this.loadDataFromServer();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.state.perPage);

        this.setState({ offset: offset }, () => {
            this.loadDataFromServer();
        });
    };

    render() {
        return (
            <div className="commentBox" style={{ marginBottom: "10%"}}>
                {this.state.isLoaded ?
                    <div>
                        <MediaList data={this.state.data} />
                        <ReactPaginate
                          previousLabel={'previous'}
                          nextLabel={'next'}
                          breakLabel={'...'}
                          breakClassName={'break-me'}
                          pageCount={this.state.pageCount}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={this.handlePageClick}
                          containerClassName={'pagination'}
                          subContainerClassName={'pages pagination'}
                          activeClassName={'active'}
                        />
                    </div> : null}
            </div>
        );
    };

};

export class MediaList extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        let mediaNodes = this.props.data.map(function (media, index) {
            return <ReviewWindow
                        q_types={media.q_type}
                        q_category={media.q_category}
                        q_description={media.q_description}
                        video={media}
                        loaded={true}
                    />
        });

        return (
            <div>{mediaNodes}</div>
        );
    }
};

export default ReviewList;
