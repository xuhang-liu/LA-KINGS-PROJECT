import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player';
import { updateComments } from "./../../../redux/actions/video_actions";

class ApplicationVideoPanel extends Component{

    state = {
        ratings: this.props.stars,
        comments: this.props.comments,
        page: this.props.page
    };

    handleRating = (x) => {
        var new_star = [...this.state.ratings];
        new_star[this.state.page] = x;
        this.setState({ ratings: new_star });
    };

    updateTheComment = (event) => {
        var new_comment = [...this.state.comments];
        new_comment[this.state.page] = event.target.value;
        this.setState({ comments: new_comment });
    }

    componentDidMount () {
        this.setState({
            ratings: this.props.stars,
        });
    }

    componentWillUnmount () {
        console.log("bye bye");
    }

    componentDidUpdate () {
        if(this.state.page != this.props.page) { 
            this.setState({page: this.props.page});
          }
    }

    updateCommentsFunc = () =>
    {
        var data = {"stars": this.state.ratings[this.state.page], "comment": this.state.comments[this.state.page], "pk": this.props.videopk};
        this.props.updateComments(data);
        alert("Comment Updated!");
    }

    render() {
        return (
            <div className="mb-4">
                <div>
                    <h4>
                        <span style={{color:"#67A3F3"}}>Question: </span>{this.props.question}
                    </h4>
                </div>
                <div>
                    <div className="row">
                        <div className="col-12">
                        <ReactPlayer id="rw-video" url={this.props.url} controls={true}
                        // Disable download button
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        width="32vw" height="auto"/>
                        </div>
                    </div>
                </div>
    
                    <div className="row mt-3">
                        <div className="col-3">
                            <h4 style={{fontWeight:"500", color:"#090D3A"}}>Rating</h4>
                        </div>
                        <div className="col">
                            <Stars 
                                stars={this.state.ratings[this.state.page]}
                                changeStar={this.handleRating}
                            />
                        </div>
                    </div>
                
                    <div className="row mt-3">
                        <div className="col-3">
                            <h4 style={{fontWeight:"500", color:"#090D3A"}}>Comment</h4>
                        </div>
                        <div style={{border:"2px solid #E8EDFC", borderRadius:"0.2rem", width:"63%"}}>
                            <div className="col pl-0">
                                <textarea style={{height:"20vh", marginBottom:"-3.4rem", border:"none", outline:"none", width:"104%", overflow: "auto", resize:"none", backgroundColor:"transparent"}}
                                        value={this.state.comments[this.state.page]}
                                        onChange={this.updateTheComment}
                                >
                                </textarea>
                            </div>
                            <div className="row" style={{float:"right"}}>
                                <button className="default-btn py-2 mr-4 mb-2" 
                                        style={{float:"right"}}
                                        onClick={this.updateCommentsFunc}
                                ><i className="bx bxs-send"></i>Post</button>
                            </div>
                        </div>
                    </div>
    
                
            </div>
        );
    }
    
}

const Stars = (props) => {
    var stars = props.stars;
        return(
            <div>
                <div className="row">
                    <a href="#" onClick={()=>{props.changeStar(1)}} className="pr-2">
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                    </a>
                    <a href="#" onClick={()=>{props.changeStar(2)}} className="pr-2">
                        {stars >= 2 ?
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                        : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                        }                 
                    </a>
                    <a href="#" onClick={()=>{props.changeStar(3)}} className="pr-2">
                        {stars >= 3 ?
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                        : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                        }                 
                    </a>
                    <a href="#" onClick={()=>{props.changeStar(4)}} className="pr-2">
                        {stars >= 4 ?
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                        : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                        }                 
                    </a>
                    <a href="#" onClick={()=>{props.changeStar(5)}} className="pr-2">
                        {stars == 5 ?
                        <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-blue.png" alt="Blue" />
                        : <img src="https://hirebeat-assets.s3.amazonaws.com/Employer/star-grey.png" alt="Gray" />
                        }                 
                    </a>
                </div>
            </div>
        )
}

export default connect(null, { updateComments })(ApplicationVideoPanel);
