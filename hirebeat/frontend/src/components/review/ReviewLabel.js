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

    componentWillMount() {
        this.props.getSubcategories(this.props.q_category);
    }

    collectData = () => {
        let data = [];

        let sentences = [];
        let subcategories = [];
        let labels = [];

        let num = this.props.sentences.length;
        for (let i = 0; i < num; i++) {
            let input = document.getElementById(i.toString());
            let index = input.value - 1;
            let status = index == -1 ? false : true;

            sentences.push(this.props.sentences[i].id);
            // -1 means all the metrics are false regarding to current sentence
            index == -1 ? subcategories.push(0) : subcategories.push(this.props.subcategories[index].id);
            labels.push(status);
        }

        data.push(sentences);
        data.push(subcategories);
        data.push(labels);

        return data;
    }

    saveData = (data) => {
        let num = data[0].length;

        for (let i = 0; i < num; i++) {
            let metaData = {
                    sentence: data[0][i],
                    subCategory: data[1][i],
                    label: data[2][i],
                }
            this.props.addVideoLabels(metaData);
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

const mapStateToProps = (state) => ({
  subcategories: state.question_subcategory_reducer.subcategories,
});

export default connect(mapStateToProps, { getSubcategories, addVideoLabels })(ReviewLabel);