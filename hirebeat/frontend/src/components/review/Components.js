import React from "react";

export const LabelRow = (props) => {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-1" style={{textAlign: "center"}}>
                    <p className="review-text2">Time</p>
                </div>
                <div className="col-5" style={{textAlign: "center"}}>
                    <p className="review-text2">Sentence</p>
                </div>
                <div className="col-5" style={{textAlign: "center"}}>
                    <p className="review-text2">Subcategory</p>
                </div>
                <div className="col-1" style={{textAlign: "center"}}>
                    <p className="review-text2">Match</p>
                </div>
            </div>
        </div>
    );
};