import React, { Component } from "react";
import { LabelRow } from "./Components";
import { connect } from "react-redux";
import ContentRow from "./ContentRow";
import { getSubcategories } from "../../redux/actions/question_subcategory_actions";
import { addVideoLabels } from "../../redux/actions/video_actions";
import { confirmAlert } from 'react-confirm-alert';

export class ReviewLabel extends Component {

    state = {
        disabled: false,
    }

    setDisabled = () => {
        this.setState({ ...this.state, disabled: true });
    }

    collectData = () => {
        let data = [];

        let sentences = [];
        let subcategories = [];
        let labels = [];

        let num = this.props.sentences.length;
        let total = this.props.subcategories.length;
        let allInputs = document.getElementsByClassName("label-input");
        let count = 0;

        for (let i = 0; i < num; i++) {
            let tempSubcats = [];
            let tempLabels = [];

            for (let j = 0; j < total; j++) {
                let subcatValue = this.props.subcategories[j].id;
                let inputValue = allInputs[count].value;
                let labelValue = false;
                if (inputValue == "T" || inputValue == "t") {
                    labelValue = true;
                }

                tempSubcats.push(subcatValue);
                tempLabels.push(labelValue);
                count++;
            }

            sentences.push(this.props.sentences[i].id);
            subcategories.push(tempSubcats);
            labels.push(tempLabels);
        }

        data.push(sentences);
        data.push(subcategories);
        data.push(labels);

        return data;
    }

    saveData = (data) => {
        let num = data[0].length;
        let total = data[1][0].length;

        let sentences = data[0];
        let subcategories = data[1];
        let labels = data[2];

        for (let i = 0; i < num; i++) {
            let curr_sentence = sentences[i];
            let curr_subcategories = subcategories[i];
            let curr_labels = labels[i];

            for (let j = 0; j < total; j++) {
                let metaData = {
                    sentence: curr_sentence,
                    subCategory: curr_subcategories[j],
                    label: curr_labels[j],
                }
                this.props.addVideoLabels(metaData);
            }
        }
    }

    submitLabel = () => {
        let data = this.collectData();
        this.saveData(data);

        // pop up alert and bolck submit button
        alert("Submission Success", "You submitted the labeling data successfully!");
        this.setDisabled();
    }

    render() {
        return (
            <div>
                <div><h4 className="review-text1">Labeling</h4></div>
                <div>
                  <LabelRow />
                  <ContentRow
                    sentences={this.props.sentences}
                    subcategories={this.props.subcategories}
                  />
                </div>
                <div className="row" style={{justifyContent: "center", marginTop: "2rem"}}>
                    <button
                        className= {this.state.disabled ? "under-review text-15" : "not-reviewed text-15"}
                        onClick={this.submitLabel}
                        disabled={this.state.disabled}
                        style={{color: "#FFFFFF", display:"inline-block", width:"10rem"}}>
                            Submit Label
                    </button>
                </div>
            </div>
        );
    }
};

function  alert(title, message){
    confirmAlert({
      title: title,
      message: message,
      buttons: [
        {
          label: 'Ok'
        }
      ]
      });
  };

export default connect(null, { addVideoLabels })(ReviewLabel);