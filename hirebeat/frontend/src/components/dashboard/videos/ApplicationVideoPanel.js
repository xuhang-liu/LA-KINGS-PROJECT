import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ReactPlayer from 'react-player';
import Rating from 'react-simple-star-rating';
import { updateComments } from "./../../../redux/actions/video_actions"
import reducers from "video-react/lib/reducers";
//import { data } from "jquery";

export function ApplicationVideoPanel (props) {

    const [ratings, setRating] = useState(props.stars);
    const [comments, setComment] = useState(props.comments);
    const [page, setPage] = useState(props.page);

    const handleRating = (x) => {
        var new_rating = [...ratings];
        new_rating[page] = x;
        setRating(new_rating);
        console.log(new_rating);
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
                <Rating
                    onClick={handleRating}
                    ratingValue={ratings[page]}
                    size={24}
                    label={false}    
                    transition={true}
                    fillColor='#56a3fa'
                    emptyColor='gray'
                />

            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <h4 style={{fontWeight:"500", color:"#090D3A"}}>Comment</h4>
                </div>
                <div className="col pl-0">
                    <textarea style={{height:"20vh", border:"1px solid #dfe1e5", borderRadius:"0.2rem", width:"88%", overflow: "auto"}}
                              value={comments[page]}
                              onChange={updateTheComment}
                    >
                    </textarea>
                </div>
            </div>
            <div className="row" style={{float:"right"}}>
                <button className="default-btn px-3 mt-3 mr-5" 
                        style={{float:"right"}}
                        onClick={updateCommentsFunc}
                >Update Stars and Comment</button>
            </div>
            
        </div>
    );
    }

export default connect(null, { updateComments })(ApplicationVideoPanel);
