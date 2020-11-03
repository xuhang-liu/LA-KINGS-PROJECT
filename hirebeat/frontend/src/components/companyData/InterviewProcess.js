import React, {useState} from 'react';
import ContentList from './ContentList';
import {Switchbutton} from './Components';


export default function InterviewProcess(){
    const [filter, setFilter] = useState("swe");
    return(
            <div style={{marginTop: '5%'}}>
                <h3 className="companydata-text1">Interview Process</h3>
                {Switchbutton(filter, setFilter)}
                <ContentList filter={filter}/>
            </div>
        // <OverallScore percent={10} bgColor={"#FAC046"} barColor={"#FF6B00"}/>
    )
}
