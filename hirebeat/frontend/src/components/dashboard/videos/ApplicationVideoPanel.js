import React, { Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player';
import AudioPlayer from "../../audios/AudioPlayer";
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
        let readOnly = this.props?.readOnly || false;
        if (this.props.filter == "closed") {
            return alert("Current job is closed, you can't make any change");
        }
        else if (readOnly) {
            return alert("You can't change the video score");
        }
        var new_star = [...this.state.ratings];
        new_star[this.state.page] = x;
        this.setState({ ratings: new_star }, ()=>{
            var data = {"stars": this.state.ratings[this.state.page], "comment": "", "pk": this.props.videopk};
            this.props.updateComments(data);
            this.props.refresh();
        });
    };

    updateTheComment = (event) => {
        var new_comment = [...this.state.comments];
        new_comment[this.state.page] = event.target.value;
        this.setState({ comments: new_comment });
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
        if(this.props.profile.is_subreviwer){
            let subreviewr_update = {
                "video_pk": this.props.videopk,
                "positionId": this.props.positionId,
                "profile_id": this.props.profile.id,
            };
            this.props.subreviewerUpdateComment(subreviewr_update);
        }
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
        var selectedColor4 = "#56a3fa";
        if (this.state.selectedSpeed == 1.0){
            selectedColor1 = "#090d3a";
        }else if (this.state.selectedSpeed == 1.5){
            selectedColor2 = "#090d3a";
        }else if (this.state.selectedSpeed == 1.75) {
            selectedColor3 = "#090d3a";
        }else if (this.state.selectedSpeed == 2.0) {
            selectedColor4 = "#090d3a";
        }
        return (
            <div className="mb-4 pl-0" style={{marginLeft:"-2rem"}}>
                <div className="mt-3">
                    <h4>
                        <span style={{color:"#67A3F3", fontWeight:"600"}}>Question: </span><span style={{color:"#090d3a", fontWeight:"600"}}>{this.props.question}</span>
                    </h4>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col-12 d-flex m-3 mt-4">
                                {/* determine video or audio*/}
                                {this.props.url?.slice(-3) == "wav" ?
                                    <AudioPlayer url={this.props.url} /> :
                                    <ReactPlayer id="rw-video" url={this.props.url} controls={true} playbackRate={this.state.playbackRate}
                                        // Disable download button
                                        config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                                        // Disable right click
                                        onContextMenu={e => e.preventDefault()}
                                        width="36vw" height="auto"
                                    />
                                }
                            </div>
                        </div>
                        <div className="row mt-3 ml-1">
                            <div className="col-3">
                                <h4 style={{fontWeight:"500", color:"#090D3A"}}>Speed</h4>
                            </div>
                            <div className="col-9">
                                <button className="default-btn2" style={{fontSize:"0.8rem", marginLeft:"-1rem", padding:"6px", backgroundColor: selectedColor1}}
                                onClick={this.handleSetPlaybackRate} value={1}>Normal</button>
                                <button className="default-btn2 ml-2" style={{fontSize:"0.8rem", padding:"6px", backgroundColor: selectedColor2}}
                                onClick={this.handleSetPlaybackRate} value={1.5}>1.5x</button>
                                <button className="default-btn2 ml-2" style={{fontSize:"0.8rem", padding:"6px", backgroundColor: selectedColor3}}
                                onClick={this.handleSetPlaybackRate} value={1.75}>1.75x</button>
                                <button className="default-btn2 ml-2" style={{fontSize:"0.8rem", padding:"6px", backgroundColor: selectedColor4}}
                                onClick={this.handleSetPlaybackRate} value={2}>2x</button>
                            </div>
                        </div>
                    </div>
                    {!this.props.profile.is_external_reviewer &&
                        <div className='col'>
                            <div className="row mt-3 px-4">
                                <div style={{width:"100%"}}>
                                    <h5 style={{fontWeight:"500", color:"#090D3A"}}>Transcript</h5>
                                    <div className="col px-0">
                                        {this.props.url?.slice(-3) == "wav" ?
                                            <div className="p-1" style={{overflow:"auto", maxHeight:"24rem", border:"2px solid #E8EDFC", borderRadius:"0.2rem"}}>
                                                <p className="py-3 px-3">{this.props.transcripts}</p>
                                            </div> :
                                            <div className="p-1" style={{overflow:"auto", maxHeight:"24rem", border:"2px solid #E8EDFC", borderRadius:"0.2rem", minHeight:"20rem"}}>
                                                <p className="py-3 px-3">{this.props.transcripts}</p>
                                            </div>
                                        }
                                    </div>
                                    {/*<div className="mt-3 p-0 col" style={{height:"3.07rem", border:"2px solid #E8EDFC", width:"100%", backgroundColor:"transparent"}}>
                                        <div className="row">
                                            <div className="col-7 pl-3 pr-0">
                                                <textarea
                                                            style={{display:"inline-block", outline:"none", overflow: "auto", border:"none", resize:"none", width:"105%", height:"2.94rem"}}
                                                            value={this.state.comments}
                                                            placeholder="Write your comments and leave your score"
                                                            onChange={(e)=>{this.setState({comments :e.target.value})}}
                                                    >
                                                </textarea>
                                            </div>
                                            <div className="mt-0 col" style={{display:"inline-block"}}>
                                                <button className="default-btn d-flex py-2 mr-3 mt-1 ml-1"
                                                        style={{position: "absolute", right: "0.1rem"}}
                                                        onClick={this.updateCommentsFunc}
                                                ><i className="bx bxs-send"></i>Post</button>
                                            </div>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                            {/* <div className="row pl-2 mt-3">
                                    <div className="col-5">
                                        <h5 style={{fontWeight:"500", color:"#090D3A"}}>Your Rating</h5>
                                    </div>
                                    <div className="col-7">
                                        <Stars
                                            stars={this.props.stars[this.state.page]}
                                            changeStar={this.handleRating}
                                        />
                                    </div>
                            </div> */}
                        </div>
                    }
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
