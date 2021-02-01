import React, { useEffect, useState, Component } from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player';
//import Rating from 'react-simple-star-rating';
import { updateComments } from "./../../../redux/actions/video_actions";
//import SelectSubcategory from "../../review/SelectSubcategory";
import { confirmAlert } from 'react-confirm-alert';

export function ApplicationVideoPanel (props) {
 //   console.log("The props now", props)
    const [ratings, setRating] = useState(props.stars);
    const [comments, setComment] = useState(props.comments);
    const [page, setPage] = useState(props.page);
 //   setTimeout(()=>{console.log("The props after 1 sec", props)}, 1000);
 //   console.log("the State after constructor", ratings, comments, page);

    const handleRating = (x) => {
        var new_rating = [...ratings];
        new_rating[page] = x;
        setRating(new_rating);
    }

    const updateTheComment = (event) => {
        var new_comment = [...comments];
        new_comment[page] = event.target.value;
        setComment(new_comment);
    }

    useEffect(() => {
      if (page != props.page) { 
        setPage(props.page);
      }
    });

    function updateCommentsFunc ()
    {
        var data = {"stars": ratings[page], "comment": comments[page], "pk": props.videopk};
        props.updateComments(data);
        alert("Comment Updated!");
    }

    return (
        <div className="mb-4">
            <div>
                <h4>
                    <span style={{color:"#67A3F3"}}>Question: </span>{props.question}
                </h4>
            </div>
            <div>
                <div className="row">
                    <div className="col-12">
                    <ReactPlayer id="rw-video" url={props.url} controls={true}
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
                            stars={ratings[page]}
                            changeStar={handleRating}
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
                                    value={comments[page]}
                                    onChange={updateTheComment}
                            >
                            </textarea>
                        </div>
                        <div className="row" style={{float:"right"}}>
                            <button className="default-btn py-2 mr-4 mb-2" 
                                    style={{float:"right"}}
                                    onClick={updateCommentsFunc}
                            ><i className="bx bxs-send"></i>Post</button>
                        </div>
                    </div>
                </div>

            
        </div>
    );
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
