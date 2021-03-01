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
    const um_counter_comment_1 = "Great Job! Your UM/UH counter is "+props.v.ai_um_counter_score+" per 100 words, which falls within the most natural and engaging range of 0 to 4.";
    const um_counter_comment_2 = "You can do better! Your UM/UH counter is "+props.v.ai_um_counter_score+" per 100 words. When you are unsure about your speech, it’s better to slow it down or make occasional pauses";
    var um_counter_comment = "";
    var um_counter_url = "";
    if(Number((props.v.ai_um_counter_score) >= 0) && (Number(props.v.ai_um_counter_score) < 4)){
        um_counter_url = um_counter_url_1;
        um_counter_comment=um_counter_comment_1;
    }else if ((Number(props.v.ai_um_counter_score) >= 4) && (Number(props.v.ai_um_counter_score) < 8)){
        um_counter_url = um_counter_url_2;
        um_counter_comment=um_counter_comment_2;
    }else if ((Number(props.v.ai_um_counter_score) >= 8) && (Number(props.v.ai_um_counter_score) <= 100)){
        um_counter_url = um_counter_url_3;
        um_counter_comment=um_counter_comment_2;
    }
    const filter_words_comment_1 = "Fantastic! Your average number of filler words per minute is "+props.v.ai_filter_words_score+", which falls within the range of 0 - 7 words per minute. Your response is real polished and ready-to-go!";
    const filter_words_comment_2 = "You can do better! Your average number of filler words per minute is "+props.v.ai_filter_words_score+", which falls out of the range of 0 - 7 words per minute. Keep practicing to minimize filler words!";
    var filter_words_comment = "";
    var filter_words_url = "";
    if((Number(props.v.ai_filter_words_score) >= 0) && (Number(props.v.ai_filter_words_score) <= 7)){
        filter_words_url = um_counter_url_1;
        filter_words_comment = filter_words_comment_1;
    }else if ((Number(props.v.ai_filter_words_score) >= 8) && (Number(props.v.ai_filter_words_score) <= 14)){
        filter_words_url = um_counter_url_2;
        filter_words_comment = filter_words_comment_2;
    }else if ((Number(props.v.ai_filter_words_score) >= 15) && (Number(props.v.ai_filter_words_score) <= 100)){
        filter_words_url = um_counter_url_3;
        filter_words_comment = filter_words_comment_2;
    }
    const pace_speech_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-2.png";
    const pace_speech_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-3.png";
    const pace_speech_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/milometer-1.png";
    const pace_speech_comment_1 = "Excellent! You did a good job. Your overall rate of speech is "+props.v.ai_pace_of_speech_score+" words per minute, which falls within the most natural and engaging range of 105 to 160 words per minute.";
    const pace_speech_comment_2 = "You can do better! Your overall rate of speech is "+props.v.ai_pace_of_speech_score+" words per minute, which falls under the most natural and engaging range of 105 to 160 words per minute.";
    const pace_speech_comment_3 = "You can do better! Your overall rate of speech is "+props.v.ai_pace_of_speech_score+" words per minute, which falls above the most natural and engaging range of 105 to 160 words per minute.";
    var pace_speech_comment = "";
    var pace_speech_url = "";
    if((Number(props.v.ai_pace_of_speech_score) >= 105) && (Number(props.v.ai_pace_of_speech_score) <= 160)){
        pace_speech_url = pace_speech_url_1;
        pace_speech_comment = pace_speech_comment_1;
    }else if ((Number(props.v.ai_pace_of_speech_score) < 105)){
        pace_speech_url = pace_speech_url_3;
        pace_speech_comment = pace_speech_comment_2;
    }else if ((Number(props.v.ai_pace_of_speech_score) > 160)){
        pace_speech_url = pace_speech_url_2;
        pace_speech_comment = pace_speech_comment_3;
    }
    const power_words_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/ai-rate-1.png";
    const power_words_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/ai-rate-2.png";
    const power_words_comment_1 = "You can do better! Your average number of powerful words is "+props.v.ai_power_words_score+" per 100 words, which falls under the suggested 6 powerful words per 100 words. Using more powerful words can empower your speech!";
    const power_words_comment_2 = "Marvelous! Your average number of powerful words is "+props.v.ai_power_words_score+" per 100 words, which reaches the suggested 6 powerful words per 100 words. Your response reflects you as an enthusiastic, confident candidate!";
    var power_words_comment = "";
    var power_words_url = "";
    if((Number(props.v.ai_power_words_score) >= 6)){
        power_words_url = power_words_url_1;
        power_words_comment = power_words_comment_2;
    }else if ((Number(props.v.ai_power_words_score) >= 0) && (Number(props.v.ai_power_words_score) <= 5)){
        power_words_url = power_words_url_2;
        power_words_comment = power_words_comment_1;
    }
    const pause_counter_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-1.png";
    const pause_counter_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-2.png";
    const pause_counter_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/pause-button-3.png";
    const pause_counter_comment_1 = "Excellent! Your average pause length is "+props.v.ai_pause_counter_score+", which falls within the most natural and engaging range of 2 to 3 seconds. Your speech flows naturally and beautifully!";
    const pause_counter_comment_2 = "You can improve for better! Your average pause length is "+props.v.ai_pause_counter_score+", which falls under the most natural and engaging range of 2 to 3 seconds. Be aware that lack of pauses might make you sound that you are reading off a script to the audience.";
    const pause_counter_comment_3 = "You can do better! Your average pause length is "+props.v.ai_pause_counter_score+", which falls over the most natural and engaging range of 2 to 3 seconds. Longer pauses are noticeable to the audience. It might make you sound unprepared and unengaged to the conversation.";
    var pause_counter_comment = "";
    var pause_counter_url = "";
    if((props.v.ai_pause_counter_score).toLowerCase().includes("green")){
        pause_counter_url=pause_counter_url_1;
        pause_counter_comment = pause_counter_comment_1;
    }else if((props.v.ai_pause_counter_score).toLowerCase().includes("yellow")){
        pause_counter_url=pause_counter_url_2;
        pause_counter_comment = pause_counter_comment_2;
    }else if((props.v.ai_pause_counter_score).toLowerCase().includes("red")){
        pause_counter_url=pause_counter_url_3;
        pause_counter_comment = pause_counter_comment_3;
    }
    const vocabulary_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/positive-vote-2.png";
    const vocabulary_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/Performance-icon/negative-vote-1.png";
    const vocabulary_comment_1 = "Excellent! You did a good job. Your vocabulary score indicates that you sound polished and smart, but not at all pretentious.";
    const vocabulary_comment_2 = "You can do better! Your vocabulary score indicates that your answer is easy to understand, but can be more polished. We recommend using more power words and industry terminology.";
    const vocabulary_comment_3 = "You can do better! Your vocabulary score indicates that your answer is very polished, but can be a bit hard to understand for interviewers. Vocabulary sophistication is important, but make sure that your answer has a good balance between smart and accessible.";
    var vocabulary_comment = "";
    var vocabulary_url = "";
    if((props.v.ai_vocabulary_score).toLowerCase().includes("sophi")){
        vocabulary_url=vocabulary_url_1;
        vocabulary_comment=vocabulary_comment_3;
    }else if ((props.v.ai_vocabulary_score).toLowerCase().includes("smart")){
        vocabulary_url=vocabulary_url_1;
        vocabulary_comment=vocabulary_comment_1;
    }else if((props.v.ai_vocabulary_score).toLowerCase().includes("simple")){
        vocabulary_url=vocabulary_url_2;
        vocabulary_comment=vocabulary_comment_2;
    }
    const medal_url_1 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/gold-medal.png";
    const medal_url_2 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/silver-medal.png";
    const medal_url_3 = "https://hirebeat-assets.s3.amazonaws.com/User-dash/bronze-medal.png";
    const medal_comment_1 = "Exceptional Congratulations! Based on our analysis, you did very well on this question!";
    const medal_comment_2 = "Good! Some work may be needed. Based on our analysis, you could make some improvements in some areas.";
    const medal_comment_3 = "weak answer. Based on our analysis, you need to make improvements in a few important areas.";
    var medal_comment = "";
    var medal_url = "";
    if((Number(props.v.ai_performance_total_score) >= 0) && (Number(props.v.ai_performance_total_score) < 65)){
        medal_url=medal_url_3;
        medal_comment=medal_comment_3;
    }else if((Number(props.v.ai_performance_total_score) >= 65) && (Number(props.v.ai_performance_total_score) < 82)){
        medal_url=medal_url_2;
        medal_comment=medal_comment_2;
    }else if((Number(props.v.ai_performance_total_score) >= 82) && (Number(props.v.ai_performance_total_score) <= 100)){
        medal_url=medal_url_1;
        medal_comment=medal_comment_1;
    }

    return <div className="container-flud row">
        <div className="col-5 pl-5">
            <h3 className="ml-4 mb-3" style={{color:"#4A6F8A"}}>{props.v.q_description} </h3>
            <div className="ml-4" style={{maxWidth:"40rem"}}>
            {
            (props.isAudio) ?
                    <div className="py-4">
                    <AudioPlayer url={props.v.url}/>
                    </div>
                : <VideoPlayer url={props.v.url} />
            }
            </div>
            <div className="row ml-3 my-4">
                <div className="col-2">
                    <img src={medal_url} alt="icon" style={{width:"3rem"}}></img>
                </div>
                <div className="col-10">
                <h6 style={{color:"#13C4A1"}}>
                    {medal_comment}
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
                        <div className="col-5 card m-3" style={{height:"auto"}}>
                            <VideoCard 
                                imgurl={um_counter_url}
                                setLeft={()=>{setLeft("UM COUNTER")}}
                                green={props.v.ai_um_counter_score}
                                toper="Disfluencies"
                                lower="/100 words"
                                comment={um_counter_comment}
                                score="5"
                                title="UM COUNTER"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"auto"}}>
                            <VideoCard 
                                imgurl={filter_words_url}
                                setLeft={()=>{setLeft("FILTER WORDS")}}
                                green={props.v.ai_filter_words_score}
                                toper="Filter words"
                                lower="/100 words"
                                comment={filter_words_comment}
                                score="3"
                                title="FILTER WORDS"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"auto"}}>
                            <VideoCard 
                                imgurl={pace_speech_url}
                                setLeft={()=>{setLeft("PACE OF SPEECH")}}
                                green={props.v.ai_pace_of_speech_score}
                                toper="Words"
                                lower="/min"
                                comment={pace_speech_comment}
                                score="149"
                                title="PACE OF SPEECH"
                            />
                        </div>
                        <div className="col-5 card m-3" style={{height:"auto"}}>
                            <VideoCard 
                                imgurl={power_words_url}
                                setLeft={()=>{setLeft("POWER WORDS")}}
                                green={props.v.ai_power_words_score}
                                toper="Power"
                                lower="words"
                                comment={power_words_comment}   
                                score="12"
                                title="POWER WORDS"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"auto"}}>
                            <VideoCardII 
                                imgurl={pause_counter_url}
                                setLeft={()=>{setLeft("PAUSE COUNTER")}}
                                comment={pause_counter_comment}
                                score={props.v.ai_pause_counter_score}
                                title="PAUSE COUNTER"
                            />
                        </div>
                        <div className="col-5 card m-3 mb-5" style={{height:"auto"}}>
                            <VideoCardII 
                                imgurl={vocabulary_url}
                                setLeft={()=>{setLeft("VOCABULARY")}}
                                comment={vocabulary_comment}
                                score={props.v.ai_vocabulary_score}
                                title="VOCABULARY"
                            />
                        </div>
                    </div>
                    
                }
                {filter == "right" && <div>
                    <DetailCard 
                        v={props.v}
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
                <h5 className="col-6 my-auto" style={{color:"#090D3A", fontSize:"0.9rem", fontWeight:"600"}}>{props.title} </h5>
                <button className="col-6 btn btn-link" onClick={()=>{props.setLeft()}} style={{textDecoration:"none"}}>
                    Learn more <i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
            <h6 className="mb-0" style={{color:"#090D3A", marginTop:"-0.3rem"}}>Average Score: {props.score}</h6>
            <img style={{height:"8rem", margin:"auto", display:"block"}} 
                src={props.imgurl} />
            <div className="row">
                <h1 className="col-6 pr-2" style={{color:"#13C4A1", textAlign:"right"}}>{props.green}</h1>
                <div className="col-6 mt-1 pl-0" style={{color:"#4A6F8A"}}>
                    <h6 className="mb-0">{props.toper}</h6>
                    <h6>{props.lower}</h6>
                </div>
            </div>
            <h6 style={{color:"#4A6F8A", marginBottom:"1rem"}}>{props.comment}</h6>
        </div>
    )
};

const VideoCardII = (props) => {
    return(
        <div>
            <div className="row">
                <h5 className="col-6 my-auto" style={{color:"#090D3A", fontSize:"0.9rem", fontWeight:"600"}}>{props.title} </h5>
                <button className="col-6 btn btn-link" onClick={()=>{props.setLeft()}} style={{textDecoration:"none"}}>
                    Learn more <i class='bx bx-right-arrow-alt'></i>
                </button>
            </div>
            <h6 className="mb-0" style={{color:"#090D3A", marginTop:"-0.3rem"}}>Average Score: {props.score}</h6>
            <img className="my-3" style={{height:"10rem", margin:"auto", display:"block"}} 
                src={props.imgurl} />
            <h6 style={{color:"#4A6F8A", marginBottom:"1rem"}}>{props.comment}</h6>
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
                return <div>
                <p className="ml-2 mt-2">Your overall rate of speech is {props.v.ai_pace_of_speech_score} words per minute</p>
                <p className="ml-2 mt-2">A good speaker tends to vary their speed based on the subject and the audience. It is important to make your story engaging by speeding up to show enthusiasm and slowing down to emphasize important points.</p>
                <p className="ml-2 mt-2">The goal is to not speak too fast, so that your points can be well conveyed and understood. Speaking quickly can also make you appear nervous or unpolished. A slow speech, on the other hand, might appear as low-energy or not interested.</p>
                </div>
            case "UM COUNTER":
                return <div>
                <p className="ml-2 mt-2">You have {props.v.ai_um_counter_score} um/uh counters per minute.</p>
                <p className="ml-2 mt-2">Um/uhs are the most frequently used filler words during the speech. In daily life, it’s irresistible to use such words. However, they distract interviewers from comprehending your responses.</p>
                <p className="ml-2 mt-2">Thus, how to eliminate um/uh counters? Here are our recommendations:</p>
                <ul className="ml-2 mt-2">
                    <li><p>1. Use pause instead of filler words</p>
                    <p className="mt-0 mb-2">As long as you make a pause properly, it doesn’t hurt your interview performance.</p></li>
                    <li><p>2. Slower your speech</p>
                    <p className="mt-0 mb-2">If you slow down, it allows you to have more time processing your thoughts. It is always helpful to organize your thoughts before the speech.</p></li>
                    <li><p>3. Practice and Build confidence</p>
                    <p className="mt-0">The only way to perfection is practice. Use our service to record your speech, and pay attention to places where filler words are used frequently.</p></li>
                </ul>
                </div>
            case "FILTER WORDS":
                return <div>
                    <p className="ml-2 mt-2">Research studies have shown that frequent use of filler words hinder an audience's comprehension. Interviewers perceive candidates using filler words frequently as being unprepared or dishonest.</p>
                    <p className="ml-2 mt-2">How to eliminate filler words? Here are our recommendations:</p>
                    <ul className="ml-2 mt-2">
                    <li><p>1. Use pause instead of filler words</p>
                    <p className="mt-0 mb-2">As long as you make a pause properly, it doesn't hurt your interview performance.</p></li>
                    <li><p>2. Slower speech</p>
                    <p className="mt-0 mb-2">If you slow down, it allows you to have more time processing your thoughts. It is always helpful to organize your thoughts before the speech.</p></li>
                    <li><p>3. Practice and Build confidence</p>
                    <p>The only way to perfection is practice. Use our service to record your speech, and pay attention to places where filler words are used frequently.</p></li>
                </ul>
                </div>
            case "POWER WORDS":
                return <div>
                    <p className="ml-2 mt-2">The words you use in your response make a big difference in how you are perceived. Positive and confident language will present you as a more capable and engaging candidate.</p>
                    <p className="ml-2 mt-2">We created our power word score based on our database of words that are associated with confidence, passion, initiative, and strategic thinking. The score is calculated based on your use of power words from this database. It indicates if you come off as a confident and effective candidate.</p>
                    <p className="ml-2 mt-2">By using more power words, you will showcase your problem-solving skills and imply your leadership and executive presence.</p>
                    <p className="ml-2 mt-2">If you want to improve your usage of power words, we recommend you try the following:</p>
                    <ul className="ml-2 mt-2">
                    <li><p>1. Think about what skills you are showcasing in each story and highlight those skills at the end of the story. For example: When I look back at this experience, I would not have completed this task without collaborating with my team members.</p></li>
                    <li><p>2. Showcase your accomplishment by using stronger action words. For example, The solution I proposed and implemented resulted in a 10% increase in our work efficiency.</p></li>
                    <li><p>3. Showcase your passion for your work. For example, I enjoyed working on this challenging project.</p></li>
                </ul>
                </div>
            case "PAUSE COUNTER":
                return <div>
                <p className="ml-2 mt-2">Your pauses are "{props.v.ai_pause_counter_score}". Using pauses during sentences are for understanding and emphasis. During pauses, listeners reflect on the content of the previous sentence. We consider a pause length between 2 - 3 seconds as natural. A pause of less than 1 second is too short. It might cause interviewers to doubt whether you are reading off a script. A pause of more than 3 second is considered long.</p>
                <p className="ml-2 mt-2">These are the good places to make pauses:</p>
                <ul className="ml-2 mt-2">
                <li><p>1. Add emphasis to key points. For example, in this sentence “The result is that we deliver a product with three newly implemented features”, we can emphasize the “result” by pausing briefly between “that” and “we”.</p></li>
                <li><p>2. Indicate a change in tone or topic. Pausing between the parts can inform your audience that something new is starting, thereby raising their attention to the topic. We use pauses during contrasting conjunctions, such as however, but, nevertheless, etc. Other places to use pauses are between paragraphs. For example, during self-introduction, if you talked about your experiences and are going to talk about your passions, you should pause between the two parts.</p></li>
                </ul>
                <p className="ml-2 mt-2">Two ways you can improve to make your pauses sound natural:</p>
                <ul className="ml-2 mt-2">
                <li><p>1. Stay conscientious when you make a pause</p>
                    <p className="mt-0 mb-2">You can control your pause time by paying attention to your pauses. When you foster the habit of pausing properly, your speech will flow naturally during the interview.</p></li>
                <li><p>2. Practice, as always</p>
                    <p className="mt-0 mb-2">When you often use long pauses, it might indicate that you are less familiar with the speech’s content. By recording, replaying, and practicing, you can improve your overall speech fluency.</p></li>
                </ul>
            </div>
            case "VOCABULARY":
                return <div>
                <p className="ml-2 mt-2">Your vocabulary score is based on the Flesch Kincaid grade level test, which evaluates the sophistication of your language. Flesch Kincaid is used extensively in the field of education and presents a score as a U.S grade level, indicating the level of education required to understand the text.</p>
                <p className="ml-2 mt-2">The grade-level designation is based on the complexity of the language, including the length of sentences and the number of syllables per word. This is not a perfect test for spoken English, but it helps us understand the sophistication of your language.</p>
                <p className="ml-2 mt-2">It is important to make sure that your answer sounds polished but understandable. For reference, the rule of thumb is that one should aim for a grade 8 level to be understood by 80% of American.</p>
                <p className="ml-2 mt-2">In addition to using polished words, we also recommend to look at your power word score to better evaluate your performance. The use of power words during your interview sometimes is more important than the sophistication of your vocabulary.</p>
                <p className="ml-2 mt-2">With this score, you likely sound polished and educated, but not at all pretentious.</p>
            </div>
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
            <div className="col-10 mt-3 mb-3" style={{border:"2px solid #E8EDFC", borderRadius:"0px 5px 5px 5px", height:"auto", minHeight:"80vh"}}>
                {renderText(props.subFilter)}
            </div>
        </div>
    )
}