import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ReviewWindow from "./ReviewWindow";
import ReactPaginate from 'react-paginate';
import MediaList from "./MediaList";

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
          index: 0,
        };
    };

    loadDataFromServer() {
        fetch("http://127.0.0.1:8000/get-unreviewed-video-list")  // change here in production
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                pageCount: result.data[0].length,
                isLoaded: true,
                data: result.data,
                index: this.state.offset,
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
            <div className="commentBox" style={{ marginBottom: "5%"}}>
                {this.state.pageCount != 0 ?
                    <div>
                        <MediaList data={this.state.data} index={this.state.index} />
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
                    </div> : <h2 style={{padding: "3rem", textAlign: "center"}}>No videos need to be reviewed!</h2>}
            </div>
        );
    };

};

export default ReviewList;
