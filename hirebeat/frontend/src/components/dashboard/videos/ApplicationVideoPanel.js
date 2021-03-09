import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player';
import { updateComments, getApplicantsVideos } from "./../../../redux/actions/video_actions";


class ApplicationVideoPanel extends Component {

    state = {
        ratings: this.props.stars,
        comments: "",
        page: this.props.page,
        playbackRate: 1.0,
        selectedSpeed: 1.0,
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

    componentDidUpdate () {
        if(this.state.page != this.props.page) { 
            this.setState({page: this.props.page});
          }
    }

    updateCommentsFunc = () =>
    {
        let s = this.props.name + ": " + this.state.comments;
        var data = {"stars": this.state.ratings[this.state.page], "comment": s, "pk": this.props.videopk};
        this.props.updateComments(data);
        this.setState({comments: ""});
        this.props.refresh();
        alert("Comment Updated!");
    }

    handleSetPlaybackRate = e => {
        this.setState({ playbackRate: parseFloat(e.target.value) });
        this.setState({ selectedSpeed: parseFloat(e.target.value) });
    }

    render() {
        var selectedColor1 = "#56a3fa";
        var selectedColor2 = "#56a3fa";
        var selectedColor3 = "#56a3fa";
        if (this.state.selectedSpeed == 1.0){
            selectedColor1 = "#090d3a";
        }else if (this.state.selectedSpeed == 1.5){
            selectedColor2 = "#090d3a";
        }else if (this.state.selectedSpeed == 2.0) {
            selectedColor3 = "#090d3a";
        }
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
                        <ReactPlayer id="rw-video" url={this.props.url} controls={true} playbackRate={this.state.playbackRate}
                        // Disable download button
                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                        // Disable right click
                        onContextMenu={e => e.preventDefault()}
                        width="29vw" height="auto"/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3">
                            <h4 style={{fontWeight:"500", color:"#090D3A"}}>Speed</h4>
                        </div>
                        <div className="col-6">
                            <button className="default-btn2" style={{fontSize:"0.8rem", marginLeft:"-1rem", padding:"6px", backgroundColor: selectedColor1}}
                            onClick={this.handleSetPlaybackRate} value={1}>Normal</button>
                            <button className="default-btn2 ml-2" style={{fontSize:"0.8rem", padding:"6px", backgroundColor: selectedColor2}}
                            onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                            <button className="default-btn2 ml-2" style={{fontSize:"0.8rem", padding:"6px", backgroundColor: selectedColor3}}
                            onClick={this.handleSetPlaybackRate} value={2}>2x</button>
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
                        <div style={{width:"63%"}}>
                            <div className="col px-0">
                                <div className="pl-1" style={{overflow:"auto", height:"10rem", border:"2px solid #E8EDFC", borderRadius:"0.2rem"}}>
                                    {this.props.comments[this.state.page].map((comment)=>{
                                            return <div > {comment}</div> 
                                    })}
                                </div>
                            </div>
                            <textarea className="mt-3 p-1" style={{display:"inline", height:"3rem", border:"2px solid #E8EDFC", outline:"none", width:"100%", overflow: "auto", resize:"none", backgroundColor:"transparent"}}
                                        value={this.state.comments}
                                        placeholder="Type your comment here"
                                        onChange={(e)=>{this.setState({comments :e.target.value})}}
                                >
                                </textarea>
                            <div className="mt-2">
                                <button className="default-btn py-2 mr-4 mb-2" 
                                        style={{position: "absolute", right: "10"}}
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

const mapStateToProps = (state) => ({
    name: state.auth_reducer.user.username
})

export default connect(mapStateToProps, { updateComments, getApplicantsVideos })(ApplicationVideoPanel);
