import React, { Component , useEffect } from "react";
import ApplicationVideoPanel from "./ApplicationVideoPanel";
import { connect } from "react-redux";
import 'boxicons';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
}

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
                <ScrollToTopOnMount />
                {this.props.recordedVideoCount == 0 ?
                    <div>
                        <h3 style={{marginTop:"10%", textAlign:"center"}}>Candidate does not record any videos.</h3>
                    </div> :
                    <div style={{paddingLeft: "2rem"}}>
                        <div>
                            <ApplicationVideoPanel
                                    question={this.props.quesiton_array[this.state.currentVideo]}
                                    url={this.props.video_array[this.state.currentVideo]}
                                    stars={this.props.stars}
                                    comments={this.props.comments}
                                    videopk={this.props.pk[this.state.currentVideo]}
                                    page={this.state.currentVideo}
                                    refresh={this.props.refresh}
                                    positionId={this.props.positionId}
                                    profile={this.props.profile}
                                    subreviewerUpdateComment={this.props.subreviewerUpdateComment}
                                    transcripts={this.props.transcripts[this.state.currentVideo]}
                                    filter={this.props.filter}
                                    readOnly={this.props.readOnly}
                            />
                        </div>
                        <div className='row ml-1'>
                            <Pagination
                                totalVideos = {this.props.int_ques.length}
                                setPage={this.setPage}
                                page={this.state.currentVideo}
                            />
                        </div>
                        <div className="row container-fliud">
                            {!this.props.profile.is_external_reviewer &&
                                <div className="col-8 mt-3 ml-0">
                                        {/*this.props.hasSwitch &&
                                            <div style={{marginTop: "1.5rem", marginBottom: "1rem"}}>
                                                <div style={{textAlign: "center"}}>
                                                    <button
                                                        className={this.props.current == this.props.start ? "disable-btn" : "enable-btn"}
                                                        disabled={this.props.current == this.props.start ? true : false}
                                                        onClick={() => this.props.viewPrevResult(this.props.current)}
                                                    >
                                                        &lt; Prev
                                                    </button>
                                                    <button
                                                        className={this.props.current == this.props.end ? "disable-btn" : "enable-btn"}
                                                        disabled={this.props.current == this.props.end ? true : false}
                                                        onClick={() => this.props.viewNextResult(this.props.current)}
                                                        style={{marginLeft: "2rem"}}
                                                    >
                                                        Next &gt;
                                                    </button>
                                                </div>
                                            </div>
                                        */}
                                </div>
                            }
                        </div>
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
                <h4
                    style={{fontWeight:"500", color:"#090D3A", marginLeft: "-15px", display: "flex", alignItems: "center",paddingTop: "0.5rem", marginRight: "3rem"}}>
                        Question
                </h4>
                {pageNumbers.map((number) => {
                    if(number == props.page + 1)
                    {
                        return  <li className="page-item">
                                        <a href="#"  style={{color:"white", backgroundColor:"#006dff"}} onClick={ () => { props.setPage(number-1) } } className='page-link'>
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
