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

        this.state = {
                currentVideo: 0,
        };

        console.log("this is the state on the end of the constractor", this.state);
      }

        setPage = (number) => {
              this.setState({
                currentVideo: number,
              });
      }

render() {
        console.log("this is the state, right at the beginning of rendering", this.state);
        return (
                <React.Fragment>
                {this.props.int_ques.length == 0 && <div><h3 style={{marginTop:"10%", textAlign:"center"}}>Candidate does not record any videos.</h3></div>}
                {this.props.int_ques.length != 0 &&
                                <div>
                                    <ApplicationVideoPanel
                                            question={this.props.quesiton_array[this.state.currentVideo]}
                                            url={this.props.video_array[this.state.currentVideo]}
                                            stars={this.props.stars}
                                            comments={this.props.comments}
                                            videopk={this.props.pk[this.state.currentVideo]}
                                            page={this.state.currentVideo}
                                    />
                                    <Pagination 
                                        totalVideos = {this.props.int_ques.length}
                                        setPage={this.setPage}
                                        page={this.state.currentVideo}
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
                                {pageNumbers.map((number) => {
                                        if(number == props.page + 1)
                                        {
                                                return  <li className="page-item">
                                                                <a href="#"  style={{color:"white", backgroundColor:"#56a3fa"}} onClick={ () => { props.setPage(number-1) } } className='page-link'>
                                                                        {number}
                                                                </a>
                                                        </li>
                                        }
                                        return   <li className="page-item">
                                                        <a href="#" onClick={ () => { props.setPage(number-1) } } className='page-link'>
                                                                {number}
                                                        </a>
                                                </li>
                                })}
                        </ul>
                </nav>
        )
}


export default connect(null)(
        ApplicationVideo
      );
