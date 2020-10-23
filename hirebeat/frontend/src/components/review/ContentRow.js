import React, { Component } from "react";
import SelectSubcategory from "./SelectSubcategory";

export class ContentRow extends Component {

    render() {
        let subcategories = this.props.subcategories;
        return (
            <div>
                {this.props.sentences.map((s, index) => createRow(s, index, subcategories))}
            </div>
        );
    }

};

function createRow(s, index, subcategories) {
    return(
        <div className="row align-items-center" style={{marginTop: "2.5rem"}}>
            <div className="col-1" style={{textAlign: "center"}}>
                <p className="review-text2">{s.timestamp}</p>
            </div>
            <div className="col-5" style={{textAlign: "center"}}>
                <p className="review-text2">{s.sentence}</p>
            </div>
            <div className="col-6" style={{textAlign: "center"}}>
                <SelectSubcategory subcategories={subcategories} switchID={index.toString()} />
            </div>
        </div>
    );

};

export default ContentRow;