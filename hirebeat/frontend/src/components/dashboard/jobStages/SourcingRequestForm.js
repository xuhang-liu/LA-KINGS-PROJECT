import React, { Component } from "react";
import Select from 'react-select';
import { IndustryOptions } from '../../accounts/Constants';
import { SkillSet } from "../jobBoard/Constants";
import axios from "axios";

export class SourcingRequestForm extends Component {

    constructor(props) {
        super(props);
    }

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', border: "2px solid #E8EDFC", borderRadius: "5px" }),
        singleValue: styles => ({
            ...styles,
            color: '#090d3a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '400'
        }),
        menuList: styles => ({
            ...styles,
            maxHeight: '10rem'
        }),
    };

    options = [
        { value: 'Less than 1 year', label: 'Less than 1 year' },
        { value: '1-2 years', label: '1-2 years' },
        { value: '3 to 5 years', label: '3 to 5 years' },
        { value: '6 to 10 years', label: '6 to 10 years' },
        { value: 'More than 10 years', label: 'More than 10 years' },
    ];

    options1 = [
        { value: 'Entry', label: 'Entry' },
        { value: 'Senior', label: 'Senior' },
        { value: 'Manager', label: 'Manager' },
        { value: 'Director', label: 'Director' },
        { value: 'VP', label: 'VP' },
        { value: 'CXO', label: 'CXO' },
        { value: 'Partner', label: 'Partner' },
    ];

    options2 = [
        { value: 'High school diploma', label: 'High school diploma' },
        { value: 'Some college', label: 'Some college' },
        { value: 'Associate degree', label: 'Associate degree' },
        { value: "Bachelor's degree", label: "Bachelor's degree" },
        { value: 'Professional degree (MD, JD)', label: 'Professional degree (MD, JD)' },
        { value: "MBA, master's", label: "MBA, master's" },
        { value: 'Doctorate', label: 'Doctorate' },
        { value: 'Other', label: 'Other' },
    ];

    state = {
        currentTitle: "",
        locationPref: "",
        additionalComment: "",
        yearExp: [this.options[0]],
        seniorLevel: [this.options1[0]],
        requireSkill: [SkillSet[1]],
        preferSkill: null,
        industry: [IndustryOptions[0]],
        educationLevel: null
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onFilter = (yearExp) => {
        this.setState({ yearExp: yearExp })
    };
    onFilter1 = (seniorLevel) => {
        this.setState({ seniorLevel: seniorLevel })
    };
    onFilter2 = (requireSkill) => {
        this.setState({ requireSkill: requireSkill })
    };
    onFilter3 = (preferSkill) => {
        this.setState({ preferSkill: preferSkill })
    };
    onFilter4 = (industry) => {
        this.setState({ industry: industry })
    };
    onFilter5 = (educationLevel) => {
        this.setState({ educationLevel: educationLevel })
    };

    saveRequest = (e) => {
        e.preventDefault();
        if (this.state.yearExp == null || this.state.seniorLevel == null || this.state.requireSkill == null || this.state.industry == null) {
            return (
                alert("Please fill up all the required sections.")
            )
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = {
            "user_id": this.props.user.id, 
            "job_id": this.props.job.id,
            "title": this.state.currentTitle,
            "location": this.state.locationPref,
            "additionalComment": this.state.additionalComment,
            "year_of_exp": this.state.yearExp,
            "sen_level": this.state.seniorLevel,
            "req_skill_set": this.state.requireSkill,
            "pre_skill_set": this.state.preferSkill,
            "industry_set": this.state.industry,
            "education_level": this.state.educationLevel,
        };
        axios.post("jobs/create-new-sourcing-request", data, config).then((res) => {
            console.log(res)
            this.props.setHideRequest();
        }).catch(error => {
            console.log(error)
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container px-5" style={{ marginTop: "1%", marginBottom: "3%" }}>
                    <form onSubmit={this.saveRequest}>
                        <div className="form-row" style={{ justifyContent: "center", marginTop: "1rem" }}>
                            <p className="db-txt5">What’s your ideal candidate profile for this position?</p>
                        </div>
                        <div className="form-row mt-3" style={{ justifyContent: "center" }}>
                            <p className="db-txt3">
                                On-demand sourcing is a fast and effective way to fill your recruitment pipeline with quality candidates. You will specify the ideal candidate profile for each soucing request and get 50 matching prospects within 24 hours.
                            </p>
                        </div>
                        <div className="form-row mt-5">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Current Title
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="currentTitle" value={this.state.currentTitle}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} required />
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Location Preference
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="locationPref" value={this.state.locationPref}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Years of Experience
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.yearExp} onChange={this.onFilter} options={this.options} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Seniority Level
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.seniorLevel} onChange={this.onFilter1} options={this.options1} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Required Skill Sets
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.requireSkill} onChange={this.onFilter2} options={SkillSet.sort((a, b) => {
                                        let fa = a.value.toLowerCase(), fb = b.value.toLowerCase();
                                        if (fa < fb) {
                                            return -1;
                                        }
                                        if (fa > fb) {
                                            return 1;
                                        }
                                        return 0;
                                    })} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Prefer Skill Sets
                                </label>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.preferSkill} onChange={this.onFilter3} options={SkillSet.sort((a, b) => {
                                        let fa = a.value.toLowerCase(), fb = b.value.toLowerCase();
                                        if (fa < fb) {
                                            return -1;
                                        }
                                        if (fa > fb) {
                                            return 1;
                                        }
                                        return 0;
                                    })} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Industry
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.industry} onChange={this.onFilter4} options={IndustryOptions} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Education Level
                                </label>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.educationLevel} onChange={this.onFilter5} options={this.options2} styles={this.customStyles} isMulti />
                                </div>
                            </div>
                        </div>
                        <div className="form-row mt-3">
                            <div className="form-group col-12">
                                <label className="db-txt2" style={{ color: "#7e8993" }}>
                                    Additional Comment (eg. language skills, certificates, major, etc.)
                                </label>
                                <textarea name="additionalComment" value={this.state.additionalComment}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", minHeight: "8rem", padding: "1rem" }} />
                            </div>
                        </div>
                        <div style={{ float: "left" }}>
                            <button
                                type="submit"
                                className="default-btn5" style={{ marginBottom: "1.5%", paddingLeft: "25px", marginRight: "1rem" }}
                            >
                                $99 | Checkout
                            </button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default SourcingRequestForm;