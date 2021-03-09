import React, { Component } from "react";
import ApplicationVideoPanel from "./ApplicationVideoPanel";
import { connect } from "react-redux";
import 'boxicons';

export class ApplicationVideo extends Component {
      constructor(props) {
        super(props);

        this.state = {
                currentVideo: 0,
        };
      }

        setPage = (number) => {
              this.setState({
                currentVideo: number,
              });
      }

render() {
        return (
                <React.Fragment>
                {this.props.int_ques.length == 0 && <div><h3 style={{marginTop:"10%", textAlign:"center"}}>Candidate does not record any videos.</h3></div>}
                {this.props.int_ques.length != 0 &&
                <div>
                                <div>
                                    <ApplicationVideoPanel
                                            question={this.props.quesiton_array[this.state.currentVideo]}
                                            url={this.props.video_array[this.state.currentVideo]}
                                            stars={this.props.stars}
                                            comments={this.props.comments}
                                            videopk={this.props.pk[this.state.currentVideo]}
                                            page={this.state.currentVideo}
                                            refresh={this.props.refresh}
                                    />
                                </div>
                                <div className="row container-fliud" style={{marginLeft:"-5rem"}}>
                                        <div className="col-8 mt-3 ml-0">
                                                <div className="row">
                                                        <div className="col-2 p-0 pt-2">
                                                                <h4 style={{fontWeight:"500", color:"#090D3A"}}>Action</h4>
                                                        </div>
                                                        <div className="col p-0">
                                                        {this.props.comment_status == 1 ? <button className="default-btn btn-success ml-0" style={{marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(1);}}>
                                                        <i class='bx bx-bookmark-plus'></i>Shortlist
                                                        </button>
                                                        : <button className="default-btn ml-0" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(1);}}>
                                                        <i class='bx bx-bookmark-plus'></i>Shortlist
                                                        </button>
                                                        }
                                                        {this.props.comment_status == 2 ? <button className="default-btn btn-warning ml-2" style={{marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(2);}}>
                                                        <i class='bx bx-help-circle'></i>Hold
                                                        </button>
                                                        : <button className="default-btn ml-2" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(2);}}>
                                                        <i class='bx bx-help-circle'></i>Hold
                                                        </button>
                                                        }
                                                        {this.props.comment_status == 3 ? <button className="default-btn btn-danger ml-2" style={{marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(3);}}>
                                                        <i class='bx bx-x' ></i>Reject
                                                        </button>
                                                        : <button className="default-btn ml-2" style={{color:"#090D3A", backgroundColor:"#E8EDFC", marginBottom:"10%", width:"9rem"}} onClick={() => {this.props.updateStatus(3);}}>
                                                        <i class='bx bx-x' ></i>Reject
                                                        </button>
                                                        }
                                                        </div>
                                                </div>
                                                
                                        </div> 
                                        <div className="col">
                                                <Pagination
                                                        totalVideos = {this.props.int_ques.length}
                                                        setPage={this.setPage}
                                                        page={this.state.currentVideo}
                                                />
                                        </div>
                                </div>
                          
                                </div>}
                </React.Fragment>
        );
  }
}

const Pagination = (props) => {
        const pageNumbers = ([]);
        for(var i = 1; i <= props.totalVideos; i++)
                pageNumbers.push(i);

        return(
                <nav className="mt-3">
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
