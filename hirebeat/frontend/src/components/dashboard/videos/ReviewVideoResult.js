import React, { useState } from 'react';
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";

const ReviewVideoResult = (props) => {
    const decideClassName = (filter, text) => {
        return filter == text ? "btn-selected2" : "btn-unselected2";
    };
    const [filter, setFilter] = useState("left");
    const [subFilter, setSubFilter] = useState("PACE OF SPEECH");

    const setLeft = (filter) =>
    {
        setFilter("right");
        setSubFilter(filter);
    }

    console.log(props);
    return <div className="container-flud row">
        <div className="col-5 pl-5">
            <h3 className="ml-4 mb-3" style={{color:"#4A6F8A"}}>{props.v.q_description} </h3>
            <div className="ml-4" style={{maxWidth:"40rem"}}>
            {
            (props.isAudio) ?
                    <AudioPlayer url={props.v.url} />
                : <VideoPlayer url={props.v.url} />
            }
            </div>
            <h6 className="ml-5 my-5" style={{color:"#13C4A1"}}>
                You really aced this question!  You have scored higher than 90% of other candidates.
            </h6>
            <h6 className="ml-4" style={{color:"#4A6F8A"}}>
                Review your score breakdown by category to learn more about what you’re doing well what could be improved.
            </h6>
            <hr className="ml-4" style={{height:"1px", borderWidth:"2", color:"E8EDFC",backgroundColor:"E8EDFC"}}></hr>
            <h6 className="ml-4" style={{color:"#4A6F8A "}}>
                Check our personalized action plan to help you improve.
            </h6>
            <div className="row pl-4">
                <button className='default-btn ml-2 mb-5 mt-4' style={{paddingLeft:"25px"}}> My Action Plan</button>
                {filter && 
                <button className='btn btn-secondary ml-5 mb-5 mt-4' style={{paddingLeft:"25px", paddingRight:"25px"}}><i class='bx bx-revision'></i>Re-practice</button>}
            </div>
        </div>
        <div className="col-7 pl-5">
            <div style={{height:"2rem"}}>
                    <button
                    className={decideClassName(filter, "left")}
                    style={{background:"white"}}
                    onClick={() => (setFilter("left"))}
                    >
                    Waitlist
                    </button>
                    <button
                    className={decideClassName(filter, "right")}
                    style={{marginLeft: "2rem", background:"white"}}
                    onClick={() => (setFilter("right"))}
                    >
                    Approved
                    </button>
            </div>
            {filter == "left" && <div className="row" style={{height:"90%"}}>
                        <div className="col-5 card m-3" style={{height:"17.5vw"}}>
                            <VideoCard 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-1.png"
                                setLeft={()=>{setLeft("UM COUNTER")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="78"
                                title="the testing title"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"17.5vw"}}>
                            <VideoCard 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-1.png"
                                setLeft={()=>{setLeft("FILTER WORDS")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="78"
                                title="the testing title"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"17.5vw"}}>
                            <VideoCard 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/feedback-1.png"
                                setLeft={()=>{setLeft("PACE OF SPEECH")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="78"
                                title="the testing title"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"17.5vw"}}>
                            <VideoCard 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/ai-rate-1.png"
                                setLeft={()=>{setLeft("POWER WORDS")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"    
                                score="78"
                                title="the testing title"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"17.5vw"}}>
                            <VideoCardII 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-1.png"
                                setLeft={()=>{setLeft("PAUSE COUNTER")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="78"
                                title="the testing title"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"17.5vw"}}>
                            <VideoCardII 
                                imgurl="https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/feedback-1.png"
                                setLeft={()=>{setLeft("VOCABULARY")}}
                                green="100"
                                toper="topper words"
                                lower="/lower words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="78"
                                title="the testing title"
                            />
                        </div>
                    </div>
                    
                }
                {filter == "right" && <div>
                    <DetailCard 
                        setSubFilter={setSubFilter}
                        subFilter={subFilter}
                    />
                </div>}
        </div>
    </div>
};

export default ReviewVideoResult;

const VideoCard = (props) => {
    return(
        <div>
            <div className="row">
                <h5 className="col-7 my-auto" style={{color:"#090D3A"}}>{props.title} </h5>
                <button className="col-5 btn btn-link" onClick={()=>{props.setLeft()}}>
                    Learn more<i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
            <h6 className="mb-0" style={{color:"#090D3A", marginTop:"-0.3rem"}}>Average Score: {props.score}</h6>
            <img style={{height:"37%", margin:"auto", display:"block"}} 
                src={props.imgurl} />
            <div className="row" style={{marginTop:"-0.3rem"}}>
                <h1 className="col-6 pr-2" style={{color:"#13C4A1", textAlign:"right"}}>{props.green}</h1>
                <div className="col-6 mt-1 pl-0" style={{color:"#4A6F8A"}}>
                    <h6 className="mb-0">{props.toper}</h6>
                    <h6>{props.lower}</h6>
                </div>
            </div>
            <h6 style={{color:"#4A6F8A", marginBottom:"0.3rem"}}>{props.comment}</h6>
        </div>
    )
};

const VideoCardII = (props) => {
    return(
        <div>
            <div className="row">
                <h5 className="col-7 my-auto" style={{color:"#090D3A"}}>{props.title} </h5>
                <button className="col-5 btn btn-link" onClick={()=>{props.setLeft()}}>
                    Learn more<i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
            <h6 className="mb-0" style={{color:"#090D3A", marginTop:"-0.3rem"}}>Average Score: {props.score}</h6>
            <img style={{height:"60%", margin:"auto", display:"block"}} 
                src={props.imgurl} />
            <h6 style={{color:"#4A6F8A", marginBottom:"0.3rem"}}>{props.comment}</h6>
        </div>
    )
};

const DetailCard = (props) => {
    const renderClass = (filter, button) => {
        if(filter == button)
            return "selectedTag";
        else
            return "unselectedTag"
    };

    const renderText = filter => {
        return "ASDF 3 is the current successor to Daniel Barlow's ASDF (created on August 1st 2001) and François-René Rideau's ASDF 2 (released May 31st 2010). It was rewritten for improved portability, robustness, usability, extensibility, configurability, internal consistency, and the ability to deliver standalone executables, all while maintaining substantial backward compatibility. Its notable versions include pre-release 2.27 on February 1st 2013, first stable release 3.0.1 on May 16th 2013, major releases 3.1.2 on May 6th 2014, 3.2.0 on January 10th 2017 and 3.3.0 on October 6th 2017. The latest release is 3.3.4, published on February 14th, 2019."
    }

    return (
        <div className="container-fluid row">
            <div className="col-2 px-0 mt-3">
                <button onClick={() => {props.setSubFilter("PACE OF SPEECH")}} className={renderClass(props.subFilter, "PACE OF SPEECH")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC", borderRadius:"5px 0px 0px 0px"}}>
                    PACE OF SPEECH
                </button>
                <button onClick={() => {props.setSubFilter("UM COUNTER")}} className={renderClass(props.subFilter, "UM COUNTER")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC"}}>
                    UM COUNTER
                </button>
                <button onClick={() => {props.setSubFilter("FILTER WORDS")}} className={renderClass(props.subFilter, "FILTER WORDS")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC"}}>
                    FILTER WORDS
                </button>
                <button onClick={() => {props.setSubFilter("POWER WORDS")}} className={renderClass(props.subFilter, "POWER WORDS")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC"}}>
                    POWER WORDS
                </button>
                <button onClick={() => {props.setSubFilter("PAUSE COUNTER")}} className={renderClass(props.subFilter, "PAUSE COUNTER")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC"}}>
                    PAUSE COUNTER
                </button>
                <button onClick={() => {props.setSubFilter("VOCABULARY")}} className={renderClass(props.subFilter, "VOCABULARY")} style={{height:"2.5rem", width:"101%", border:"1px solid #E8EDFC", borderRadius:"0px 0px 0px 5px"}}>
                    VOCABULARY
                </button>
            </div>
            <div className="col-10 mt-3" style={{border:"2px solid #E8EDFC", borderRadius:"0px 5px 5px 5px", height:"42vw"}}>
                {renderText(props.subFilter)}
            </div>
        </div>
    )
}