import React, { useState } from 'react';
import VideoPlayer from "../../videos/VideoPlayer";
import AudioPlayer from "../../audios/AudioPlayer";
import { Link } from "react-router-dom";

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
    const um_counter_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/feedback-1.png";
    const um_counter_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/feedback-2.png";
    const um_counter_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/feedback-3.png";
    var um_counter_url = "";
    if(Number((props.v.ai_um_counter_score) >= 0) && (Number(props.v.ai_um_counter_score) <= 33)){
        um_counter_url = um_counter_url_1;
    }else if ((Number(props.v.ai_um_counter_score) >= 34) && (Number(props.v.ai_um_counter_score) <= 66)){
        um_counter_url = um_counter_url_2;
    }else if ((Number(props.v.ai_um_counter_score) >= 67) && (Number(props.v.ai_um_counter_score) <= 100)){
        um_counter_url = um_counter_url_3;
    }
    var filter_words_url = "";
    if((Number(props.v.ai_filter_words_score) >= 0) && (Number(props.v.ai_filter_words_score) <= 33)){
        filter_words_url = um_counter_url_1;
    }else if ((Number(props.v.ai_filter_words_score) >= 34) && (Number(props.v.ai_filter_words_score) <= 66)){
        filter_words_url = um_counter_url_2;
    }else if ((Number(props.v.ai_filter_words_score) >= 67) && (Number(props.v.ai_filter_words_score) <= 100)){
        filter_words_url = um_counter_url_3;
    }
    const pace_speech_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-2.png";
    const pace_speech_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-3.png";
    const pace_speech_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-1.png";
    var pace_speech_url = "";
    if((Number(props.v.ai_pace_of_speech_score) >= 125) && (Number(props.v.ai_pace_of_speech_score) <= 175)){
        pace_speech_url = pace_speech_url_1;
    }else if ((Number(props.v.ai_pace_of_speech_score) >= 100) && (Number(props.v.ai_pace_of_speech_score) <= 124) || (Number(props.v.ai_pace_of_speech_score) >= 176) && (Number(props.v.ai_pace_of_speech_score) <= 200)){
        pace_speech_url = pace_speech_url_2;
    }else if ((Number(props.v.ai_pace_of_speech_score) > 200) || (Number(props.v.ai_pace_of_speech_score) < 100)){
        pace_speech_url = pace_speech_url_3;
    }
    const power_words_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/ai-rate-1.png";
    const power_words_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/ai-rate-2.png";
    var power_words_url = "";
    if((Number(props.v.ai_power_words_score) >= 7)){
        power_words_url = power_words_url_1;
    }else if ((Number(props.v.ai_power_words_score) >= 0) && (Number(props.v.ai_power_words_score) <= 6)){
        power_words_url = power_words_url_2;
    }
    const pause_counter_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-1.png";
    const pause_counter_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-2.png";
    const pause_counter_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-3.png";
    var pause_counter_url = "";
    if((props.v.ai_pause_counter_score).toLowerCase().includes("green")){
        pause_counter_url=pause_counter_url_1;
    }else if((props.v.ai_pause_counter_score).toLowerCase().includes("yellow")){
        pause_counter_url=pause_counter_url_2;
    }else if((props.v.ai_pause_counter_score).toLowerCase().includes("red")){
        pause_counter_url=pause_counter_url_3;
    }
    const vocabulary_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/positive-vote-2.png";
    const vocabulary_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/negative-vote-1.png";
    var vocabulary_url = "";
    if((props.v.ai_vocabulary_score).toLowerCase().includes("smart") || (props.v.ai_vocabulary_score).toLowerCase().includes("sophi")){
        vocabulary_url=vocabulary_url_1;
    }else if((props.v.ai_vocabulary_score).toLowerCase().includes("simple")){
        vocabulary_url=vocabulary_url_2;
    }
    const medal_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/gold-medal.png";
    const medal_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/silver-medal.png";
    const medal_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bronze-medal.png";
    var medal_url = "";
    if((Number(props.v.ai_performance_total_score) >= 0) && (Number(props.v.ai_performance_total_score) <= 33)){
        medal_url=medal_url_3;
    }else if((Number(props.v.ai_performance_total_score) >= 34) && (Number(props.v.ai_performance_total_score) <= 66)){
        medal_url=medal_url_2;
    }else if((Number(props.v.ai_performance_total_score) >= 67) && (Number(props.v.ai_performance_total_score) <= 100)){
        medal_url=medal_url_1;
    }

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
            <div className="row ml-3 my-4">
                <div className="col-2">
                    <img src={medal_url} alt="icon" style={{width:"6rem"}}></img>
                </div>
                <div className="col-10">
                <h6 style={{color:"#13C4A1"}}>
                    You really aced this question!  You have scored higher than 90% of other candidates.
                </h6>
                </div>
            </div>
            <h6 className="ml-4" style={{color:"#4A6F8A"}}>
                Review your score breakdown by category to learn more about what you’re doing well what could be improved.
            </h6>
            <hr className="ml-4" style={{height:"1px", borderWidth:"2", color:"E8EDFC",backgroundColor:"E8EDFC"}}></hr>
            <h6 className="ml-4" style={{color:"#4A6F8A "}}>
                Check our personalized action plan to help you improve.
            </h6>
            <div className="row pl-4">
                {filter == "left" &&
                <button className='default-btn ml-2 mb-5 mt-4' style={{paddingLeft:"25px"}} onClick={() => (setFilter("right"))}>My Action Plan</button>}
                {filter == "right" &&
                <button className='default-btn ml-2 mb-5 mt-4' style={{paddingLeft:"25px"}} onClick={() => (setFilter("left"))}>Performance Report</button>}
                <Link to={"/practice/modes/retry"}>
                  <button className='default-btn ml-5 my-4' onClick={props.retry}
                  style={{color:"#090d3a", backgroundColor:"#e8edfc"}}><i class='bx bx-revision' style={{color:"#090d3a"}}></i>Re-practice</button>
                </Link>
            </div>
        </div>
        <div className="col-7 pl-5">
            <div style={{height:"2rem"}}>
                    <button
                    className={decideClassName(filter, "left")}
                    style={{background:"white"}}
                    onClick={() => (setFilter("left"))}
                    >
                    Performance Report
                    </button>
                    <button
                    className={decideClassName(filter, "right")}
                    style={{marginLeft: "2rem", background:"white"}}
                    onClick={() => (setFilter("right"))}
                    >
                    Action Plan
                    </button>
            </div>
            {filter == "left" && <div className="row" style={{height:"90%"}}>
                        <div className="col-5 card m-3" style={{height:"36.76vh"}}>
                            <VideoCard 
                                imgurl={um_counter_url}
                                setLeft={()=>{setLeft("UM COUNTER")}}
                                green={props.v.ai_um_counter_score}
                                toper="Disfluencies"
                                lower="/100 words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="5"
                                title="UM COUNTER"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"36.76vh"}}>
                            <VideoCard 
                                imgurl={filter_words_url}
                                setLeft={()=>{setLeft("FILTER WORDS")}}
                                green={props.v.ai_filter_words_score}
                                toper="Filter words"
                                lower="/100 words"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="3"
                                title="FILTER WORDS"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"36.76vh"}}>
                            <VideoCard 
                                imgurl={pace_speech_url}
                                setLeft={()=>{setLeft("PACE OF SPEECH")}}
                                green={props.v.ai_pace_of_speech_score}
                                toper="Words"
                                lower="/min"
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score="149"
                                title="PACE OF SPEECH"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"36.76vh"}}>
                            <VideoCard 
                                imgurl={power_words_url}
                                setLeft={()=>{setLeft("POWER WORDS")}}
                                green={props.v.ai_power_words_score}
                                toper="Power"
                                lower="words"
                                comment="the testing comments for every card is here let me know what else you want to put here"    
                                score="12"
                                title="POWER WORDS"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"auto"}}>
                            <VideoCardII 
                                imgurl={pause_counter_url}
                                setLeft={()=>{setLeft("PAUSE COUNTER")}}
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score={props.v.ai_pause_counter_score}
                                title="PAUSE COUNTER"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"auto"}}>
                            <VideoCardII 
                                imgurl={vocabulary_url}
                                setLeft={()=>{setLeft("VOCABULARY")}}
                                comment="the testing comments for every card is here let me know what else you want to put here"
                                score={props.v.ai_vocabulary_score}
                                title="VOCABULARY"
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
                <h5 className="col-6 my-auto" style={{color:"#090D3A", fontSize:"0.9rem"}}>{props.title} </h5>
                <button className="col-6 btn btn-link" onClick={()=>{props.setLeft()}} style={{textDecoration:"none"}}>
                    Learn more <i class='bx bx-right-arrow-alt'></i>
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
            <h6 style={{color:"#4A6F8A"}}>{props.comment}</h6>
        </div>
    )
};

const VideoCardII = (props) => {
    return(
        <div>
            <div className="row">
                <h5 className="col-6 my-auto" style={{color:"#090D3A", fontSize:"0.9rem"}}>{props.title} </h5>
                <button className="col-6 btn btn-link" onClick={()=>{props.setLeft()}} style={{textDecoration:"none"}}>
                    Learn more <i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
            <h6 className="mb-0" style={{color:"#090D3A", marginTop:"-0.3rem"}}>Average Score: {props.score}</h6>
            <img className="my-3" style={{height:"50%", margin:"auto", display:"block"}} 
                src={props.imgurl} />
            <h6 style={{color:"#4A6F8A", marginBottom:"0.3rem"}}>{props.comment}</h6>
        </div>
    )};
const DetailCard = (props) => {
    const renderClass = (filter, button) => {
        if(filter == button)
            return "selectedTag";
        else
            return "unselectedTag"
    };

    const renderText = filter => {
        switch (filter){
            case "PACE OF SPEECH":
                return <p className="ml-2 mt-2">
                        ASDF 3 is the current successor to Daniel Barlow's ASDF (created on August 1st 2001) and François-René Rideau's ASDF 2 (released May 31st 2010). It was rewritten for improved portability, robustness, usability, extensibility, configurability, internal consistency, and the ability to deliver standalone executables, all while maintaining substantial backward compatibility. Its notable versions include pre-release 2.27 on February 1st 2013, first stable release 3.0.1 on May 16th 2013, major releases 3.1.2 on May 6th 2014, 3.2.0 on January 10th 2017 and 3.3.0 on October 6th 2017. The latest release is 3.3.4, published on February 14th, 2019.
                       </p>
            case "UM COUNTER":
                return <p className="ml-2 mt-2">
                        UM COUNTER
                      </p>
            case "FILTER WORDS":
                return <p className="ml-2 mt-2">
                        FILTER WORDS
                       </p>
            case "POWER WORDS":
                return <p className="ml-2 mt-2">
                        POWER WORDS
                       </p>
            case "PAUSE COUNTER":
                return <p className="ml-2 mt-2">
                    PAUSE COUNTER
                </p>
            case "VOCABULARY":
                return <p className="ml-2 mt-2">
                    VOCABULARY
                </p>
        }
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