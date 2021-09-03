import React, { Component } from "react";
import Select from 'react-select';
import {SkillOptions} from "./../profile/Constants";
import Autocomplete from "react-google-autocomplete";

export class SourcingFilter extends Component {
    selectRef = null;
    constructor(props) {
        super(props);
        const skills = this.generateSkills();
        this.state = {
            keywords: this.props.keywords,
            location: this.props.location,
            skills: skills,
            position: this.props.position,
        }
    }

    generateSkills = () => {
        let skills = [];
        for (let i = 0; i < this.props.skills.length; i++) {
            let pair = {
                value: this.props.skills[i],
                label: this.props.skills[i],
            }
            skills.push(pair);
        }
        return skills;
    }

    onFilter = (skills) => {
        this.setState({ skills: skills });
        let validSkills = []
        for (let i = 0; i < skills.length; i++) {
            validSkills.push(skills[i].value);
        }
        this.props.setSkills(validSkills);
    };

    handleInput = (e) => {
        this.props.updateState(e.target.name, e.target.value);
    }

    handleRadioBtn = () => {
        let value = document.querySelector('input[name="hasVideo"]:checked')?.value;
        if (value === "optional") {
            this.props.updateState("hasVideo", false);
        }
        else {
            this.props.updateState("hasVideo", true);
        }
    }

    handleSave = () => {
        // reset location when its empty
        let element = document.getElementById("location");
        if (element.value == null || element.value == "") {
            this.props.setLocation("");
            this.props.getFilterProfiles2();
        } else {
            this.props.getFilterProfiles();
        }
        this.props.onHide();
    }

    clearForm = () => {
        let keywords = document.getElementById("keywords");
        keywords.value = "";
        let location = document.getElementById("location");
        location.value = "";
        let position = document.getElementById("position");
        position.value = "";
        // empty select drop down
        this.selectRef.select.clearValue();
        // make optional btn default
        let btns = document.getElementsByName("hasVideo");
        btns[0].checked = true;
        this.props.clearState();
    }

    customStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: '#ffffff',
            boxSizing: "border-box",
            borderRadius: "5px",
            border: "2px solid #E8EDFC"
            }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
        placeholder: styles => ({
            ...styles,
             fontFamily: "Avenir Next, Segoe UI",
             color: "#4A6F8A",
             fontSize: "12px",
             fontWeight: "normal",
             fontStyle: "normal",
        }),
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-4">
                        <p className="sourcing-filter-p" style={{margin: "0rem"}}>Search</p>
                        <input
                            id="keywords" name="keywords" className="sourcing-input sourcing-filter-p"
                            defaultValue={this.state.keywords} style={{width: "100%"}} onChange={this.handleInput}
                            placeholder="Enter a keyword"
                        >

                        </input>
                    </div>
                    <div className="col-4">
                        <p className="sourcing-filter-p" style={{margin: "0rem"}}>Location</p>
                        <Autocomplete
                            id="location"
                            className="sourcing-input sourcing-filter-p"
                            style={{width: "100%"}}
                            language="en"
                            apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                            onPlaceSelected={(place, inputRef, autocomplete) => {
                                this.props.setLocation(place.formatted_address);
                            }}
                            defaultValue={this.state.location}
                        />
                    </div>
                    <div className="col">
                        <p className="sourcing-filter-p" style={{margin: "0rem"}}>Skills</p>
                        <Select
                             ref={ref => {this.selectRef = ref;}}
                             isMulti value={this.state.skills} onChange={this.onFilter} options={SkillOptions} styles={this.customStyles}
                             placeholder="Type your skills here"
                        />
                    </div>
                </div>
                <div className="row" style={{marginTop: "2rem"}}>
                    <div className="col-4">
                        <p className="sourcing-filter-p" style={{margin: "0rem"}}>Current Position</p>
                        <input
                            id="position" name="position" className="sourcing-input sourcing-filter-p"
                            defaultValue={this.state.position} style={{width: "100%"}} onChange={this.handleInput}
                            placeholder="Enter position name"
                            >
                        </input>
                    </div>
                    <div className="col-3">
                        <p className="sourcing-filter-p" style={{margin: "0rem"}}>Video Profile</p>
                        <div className="d-flex" style={{paddingTop: "0.5rem"}}>
                             <div>
                                <label className="sourcing-radio">
                                    <input onChange={this.handleRadioBtn} checked={!this.props.hasVideo} type="radio" name="hasVideo" value="optional" style={{ marginRight: "1rem" }}></input>Optional
                                </label>
                             </div>
                             <div style={{marginLeft: "1rem"}}>
                                <label className="sourcing-radio">
                                    <input onChange={this.handleRadioBtn} checked={this.props.hasVideo} type="radio" name="hasVideo" value="must" style={{ marginRight: "1rem" }}></input>Must Have
                                </label>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginTop: "2rem"}}>
                    <div className="col-2" style={{display: "flex", alignItems: "center", justifyContent: "left"}}>
                        <span className="sourcing-p2" style={{cursor: "pointer"}} onClick={this.clearForm}>Clear Filter</span>
                    </div>
                    <div className="profile-edit" style={{marginLeft: "auto"}}>
                        <button className="default-btn" style={{background: "#E5E5E5", color: "#7D7D7D", paddingLeft: "25px", zIndex: "0"}} onClick={this.props.onHide}>Cancel</button>
                    </div>
                    <div className="profile-edit" style={{marginRight: "15px"}}>
                        <button className="default-btn" style={{background: "#67A3F3", paddingLeft: "25px", marginLeft: "1rem", zIndex: "0"}} onClick={this.handleSave}>Apply</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SourcingFilter;