import React from 'react';
import { LabelRow, ContentRow } from "./Components";

export function ReviewLabel() {
    return (
        <section style={{paddingBottom: "10%", paddingTop:"5%"}}>
            <div className="row align-items-center">
                <div className="col-6" />
                <div className="col-6 review-align">
                    <h4 className="review-text1">Labeling</h4>
                    <br/>
                    <LabelRow /> 
                    <ContentRow  
                        time={["-5.27", "-6.10", "-12.41"]}
                        sentence={["Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                            "Lorem ipsum dolor ",
                            "Lorem ipsum dolor sit amet, consectetur "]}
                    /> 
                </div>
            </div>
        </section>
    );
};