import React from "react";
import SelectSubcategory from "./SelectSubcategory";

export const LabelRow = (props) => {
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-2" style={{textAlign: "center"}}>
                    <p className="review-text2">Time</p>
                </div>
                <div className="col-2" style={{textAlign: "center"}}>
                    <p className="review-text2">Sentence</p>
                </div>
                <div className="col-6" style={{textAlign: "center"}}>
                    <p className="review-text2">Subcategory</p>
                </div>
                <div className="col-2" style={{textAlign: "center"}}>
                    <p className="review-text2">Match</p>
                </div>
            </div>
        </div>
    );
};

export const ContentRow = (props) => {

    return (
        <div>
            {props.time.map((t, index) => {
                return(
                    <div className="row align-items-center">
                        <div className="col-2" style={{textAlign: "center"}}>
                            <p className="review-text2">{t}</p>
                        </div>
                        <div className="col-2" style={{textAlign: "center"}}>
                            <p className="review-text2">{props.sentence[index]}</p>
                        </div>
                        <div className="col-8" style={{textAlign: "center"}}>
                            <SelectSubcategory />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};