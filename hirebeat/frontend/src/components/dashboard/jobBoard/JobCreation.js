import React, { Component } from "react";
import 'boxicons';
import RichTextEditor from 'react-rte';
import PropTypes from "prop-types";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
//import Switch from "react-switch";
import { loadStripe } from '@stripe/stripe-js';
import parse from 'html-react-parser';
import { SkillSet } from "./Constants";
import { MyShareModal, MyModalUpgrade } from "./../DashboardComponents";
import ShareJob from "./ShareJob";
import Autocomplete from "react-google-autocomplete";
import ScreenQuestion from "./ScreenQuestion";

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' }
    ],
    // BLOCK_TYPE_DROPDOWN: [
    //     { label: 'Normal', style: 'unstyled' },
    //     { label: 'Heading Large', style: 'header-one' },
    //     { label: 'Heading Medium', style: 'header-two' },
    //     { label: 'Heading Small', style: 'header-three' }
    // ],
    BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' }
    ]
};

function getClientReferenceId() {
    return window?.Rewardful && window?.Rewardful.referral || ('checkout_'+(new Date).getTime());
}

export class JobCreation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            jobId: "",
            jobLocation: "",
            jobDescription: RichTextEditor.createEmptyValue(),
            loc_req: 1,
            pho_req: 1,
            lin_req: 1,
            eeo_req: 0,
            eeo_ques_req: 0,
            job_post: 1,
            jobType: { value: 'Full-Time', label: 'Full-Time' },
            jobLevel: { value: 'Entry Level', label: 'Entry Level' },
            remote: { value: 0, label: 'On Site' }, //0 means onsite, 1 means hybrid, 2 means remote
            skills: null,
            showShare: false,
            questionCount: 0,
            questions: [],
            showUpgradeM: false,
            showUpgradeM1: false,
        }
        this.props.getjobidlist(this.props.user.id);
        this.handleChange = this.handleChange.bind(this);
    }

    static propTypes = {
        onChange: PropTypes.func,
    };

    setHideUpgradeM = () => {
        this.setState({ showUpgradeM: false });
    }

    setHideUpgradeM1 = () => {
        this.setState({ showUpgradeM1: false });
    }

    onFilter = (jobType) => {
        this.setState({ jobType: jobType })
    };
    onFilter1 = (jobLevel) => {
        this.setState({ jobLevel: jobLevel })
    };
    onFilter2 = (skills) => {
        this.setState({ skills: skills })
    };
    onFilter3 = (remote) => {
        this.setState({ remote: remote })
    };
    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', border: "2px solid #E8EDFC", borderRadius: "5px" }),
        singleValue: styles => ({
            ...styles,
            color: '#090d3a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '400'
        }),
    };
    options = [
        { value: 'Full-Time', label: 'Full-Time' },
        { value: 'Part-Time', label: 'Part-Time' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Temporary', label: 'Temporary' },
        { value: 'Other', label: 'Other' },
    ];
    options1 = [
        { value: 'Entry Level', label: 'Entry Level' },
        { value: 'Mid Level', label: 'Mid Level' },
        { value: 'Senior', label: 'Senior' },
        { value: 'Director', label: 'Director' },
        { value: 'Executive', label: 'Executive' },
    ];
    options2 = [
        { value: 0, label: 'On Site' },
        { value: 1, label: 'Hybrid' },
        { value: 2, label: 'Remote' },
    ];

    setJobPost(type) {
        // if ((this.props.profile.is_freetrial || this.props.profile.plan_interval == "Pro") && type == 2) {
        //     confirmAlert({
        //         title: 'Upgrade Now!',
        //         message: "Please upgrade your account to use the Premium advertising service, or you may select the Standard service to broadcast this job posting.",
        //         buttons: [
        //             { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
        //             { label: 'OK' },
        //         ]
        //     });
        // }
        // else {
        //     this.setState({ job_post: type });
        // }
        this.setState({ job_post: type });
    }

    //    setJobPostTure = () => {
    //        if (this.props.profile.membership == "Regular") {
    //            confirmAlert({
    //                title: 'Upgrade Now!',
    //                message: 'Upgrade now to broadcast your job posting!',
    //                buttons: [
    //                    { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
    //                    { label: 'OK' },
    //                ]
    //            });
    //        } else {
    //            this.setState({
    //                job_post: true
    //            });
    //        }
    //    };
    //    setJobPostFalse = () => {
    //        this.setState({
    //            job_post: false
    //        });
    //    };
    setLocReq0 = () => {
        this.setState({
            loc_req: 0
        });
    };
    setLocReq1 = () => {
        this.setState({
            loc_req: 1
        });
    };
    setLocReq2 = () => {
        this.setState({
            loc_req: 2
        });
    };
    setPhoReq0 = () => {
        this.setState({
            pho_req: 0
        });
    };
    setPhoReq1 = () => {
        this.setState({
            pho_req: 1
        });
    };
    setPhoReq2 = () => {
        this.setState({
            pho_req: 2
        });
    };
    setLinReq0 = () => {
        this.setState({
            lin_req: 0
        });
    };
    setLinReq1 = () => {
        this.setState({
            lin_req: 1
        });
    };
    setLinReq2 = () => {
        this.setState({
            lin_req: 2
        });
    };
    setEeoReq0 = () => {
        this.setState({
            eeo_req: 0
        });
    };
    setEeoReq1 = () => {
        this.setState({
            eeo_req: 1
        });
    };
    setEeoQuesReq0 = () => {
        this.setState({
            eeo_ques_req: 0
        });
    };
    setEeoQuesReq1 = () => {
        this.setState({
            eeo_ques_req: 1
        });
    };

    onChange = (jobDescription) => {
        this.setState({ jobDescription });
    };

    handleLocation = (location) => {
        if (location.address_components.length == 3) {
            this.setState({ jobLocation: location.address_components[0].short_name + ", " + location.address_components[1].short_name + ", " + location.address_components[2].short_name });
        }
        if (location.address_components.length > 3) {
            this.setState({ jobLocation: location.address_components[0].short_name + ", " + location.address_components[2].short_name + ", " + location.address_components[3].short_name });
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleChange(remote) {
        this.setState({ remote });
    }

    //    handleChangeJobType = (jobType) => {
    //        this.setState({ jobType });
    //    }

    handlePremiumJobUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1KUDqYKxU1MN2zWM9fkagRXl', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://app.hirebeat.co/pjobpayment',
            cancelUrl: 'https://app.hirebeat.co/pjobfail',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    savePosition = (e) => {
        e.preventDefault();
        let using_credit = false;
        var r = true;
        if (this.props.profile.membership == "Regular" && this.state.job_post == 2) {
            return (
                confirmAlert({
                    title: 'Upgrade Now!',
                    message: "Please upgrade your account to use the Premium advertising service, or you may select the Standard service to broadcast this job posting.",
                    buttons: [
                        { label: 'Upgrade Now', onClick: () => window.location.href = "/employer-pricing" },
                        { label: 'OK' },
                    ]
                })
            )
        }
        if (this.state.questions?.length > 0) {
            for (const q of this.state.questions) {
                if (q.question?.length == 0) {
                    return (
                        confirmAlert({
                            title: 'Question Empty!',
                            message: "One of your screening questions is empty, please fill in your question to continue.",
                            buttons: [
                                { label: 'OK' },
                            ]
                        })
                    )
                }
            }
        }
        if (this.state.jobDescription.toString('html') == "<p><br></p>") {
            return (
                confirmAlert({
                    title: 'Job Description Empty',
                    message: "Please fill in your job description to continue.",
                    buttons: [
                        { label: 'OK' },
                    ]
                })
            )
        }
        if (this.state.jobLocation == "" || this.state.jobLocation == null) {
            return (
                confirmAlert({
                    title: 'Job Location Invalid',
                    message: "Please select suggested location to continue.",
                    buttons: [
                        { label: 'OK' },
                    ]
                })
            )
        }
        if (this.props.profile.payg_credit <= 0) {
            if (this.props.profile.membership == "Regular") {
                return this.setState({
                    showUpgradeM: true
                });
            } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") {
                if (this.props.profile.position_count >= this.props.profile.position_limit) {
                    return this.setState({
                        showUpgradeM1: true
                    });
                }
            }
        } else if (this.props.profile.payg_credit > 0) {
            if (this.props.profile.membership == "Regular") {
                using_credit = true;
                r = confirm("You now have " + this.props.profile.payg_credit + " credits available. Please confirm you want to apply ONE credit on this specific job. This action is non-revertible. \n\n Once published, the unique job URL will be available on the internet and can be shared immediately. \n\n The job will also appear on other applicable job boards within 24 hours.");
            } else if (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") {
                if (this.props.profile.position_count >= this.props.profile.position_limit) {
                    using_credit = true;
                    r = confirm("You now have " + this.props.profile.payg_credit + " credits available. Please confirm you want to apply ONE credit on this specific job. This action is non-revertible. \n\n Once published, the unique job URL will be available on the internet and can be shared immediately. \n\n The job will also appear on other applicable job boards within 24 hours.");
                }
            }
        }
        if (r) {
            let data = {
                jobTitle: this.state.jobTitle,
                jobId: this.state.jobId,
                jobDescription: this.state.jobDescription.toString('html'),
                jobLevel: this.state.jobLevel["value"],
                jobLocation: this.state.jobLocation,
                userId: this.props.user.id,
                jobType: this.state.jobType["value"],
                loc_req: this.state.loc_req,
                pho_req: this.state.pho_req,
                lin_req: this.state.lin_req,
                eeo_req: this.state.eeo_req,
                eeo_ques_req: this.state.eeo_ques_req,
                job_post: this.state.job_post,
                skills: this.state.skills,
                questions: this.state.questions,
                is_closed: 0,
                using_credit: using_credit
            };
            if (this.state.remote.value == 2) {
                data = {
                    jobTitle: this.state.jobTitle,
                    jobId: this.state.jobId,
                    jobDescription: this.state.jobDescription.toString('html'),
                    jobLevel: this.state.jobLevel["value"],
                    jobLocation: this.state.jobLocation + "| Remote",
                    userId: this.props.user.id,
                    jobType: this.state.jobType["value"],
                    loc_req: this.state.loc_req,
                    pho_req: this.state.pho_req,
                    lin_req: this.state.lin_req,
                    eeo_req: this.state.eeo_req,
                    eeo_ques_req: this.state.eeo_ques_req,
                    job_post: this.state.job_post,
                    skills: this.state.skills,
                    questions: this.state.questions,
                    is_closed: 0,
                    using_credit: using_credit
                };
            }
            else if (this.state.remote.value == 1) {
                data = {
                    jobTitle: this.state.jobTitle,
                    jobId: this.state.jobId,
                    jobDescription: this.state.jobDescription.toString('html'),
                    jobLevel: this.state.jobLevel["value"],
                    jobLocation: this.state.jobLocation + "| Hybrid",
                    userId: this.props.user.id,
                    jobType: this.state.jobType["value"],
                    loc_req: this.state.loc_req,
                    pho_req: this.state.pho_req,
                    lin_req: this.state.lin_req,
                    eeo_req: this.state.eeo_req,
                    eeo_ques_req: this.state.eeo_ques_req,
                    job_post: this.state.job_post,
                    skills: this.state.skills,
                    questions: this.state.questions,
                    is_closed: 0,
                    using_credit: using_credit
                };
            }
            if (this.props.jobid_list.includes(this.state.jobId) && this.state.jobId != "" && this.state.jobId != null) {
                alert("Duplicate Job ID detected.");
            } else {
                this.props.addNewJob(data);
                setTimeout(() => { this.props.loadProfile(); this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getPJobs(); this.props.getZRFeedXML(); this.props.getZRPremiumFeedXML() }, 300);
                setTimeout(() => { this.showSharePrompt() }, 300);
                if (this.state.job_post == 2) {
                    this.handlePremiumJobUpgrade();
                }
            }
        }
    }

    saveDraft = () => {
        let data = {
            jobTitle: this.state.jobTitle,
            jobId: this.state.jobId,
            jobDescription: this.state.jobDescription.toString('html'),
            jobLevel: this.state.jobLevel["value"],
            jobLocation: this.state.jobLocation,
            userId: this.props.user.id,
            jobType: this.state.jobType["value"],
            loc_req: this.state.loc_req,
            pho_req: this.state.pho_req,
            lin_req: this.state.lin_req,
            eeo_req: this.state.eeo_req,
            eeo_ques_req: this.state.eeo_ques_req,
            job_post: this.state.job_post,
            skills: this.state.skills,
            questions: this.state.questions,
            is_closed: 3,
            using_credit: false
        };
        if (this.state.remote.value == 2) {
            data = {
                jobTitle: this.state.jobTitle,
                jobId: this.state.jobId,
                jobDescription: this.state.jobDescription.toString('html'),
                jobLevel: this.state.jobLevel["value"],
                jobLocation: this.state.jobLocation + "| Remote",
                userId: this.props.user.id,
                jobType: this.state.jobType["value"],
                loc_req: this.state.loc_req,
                pho_req: this.state.pho_req,
                lin_req: this.state.lin_req,
                eeo_req: this.state.eeo_req,
                eeo_ques_req: this.state.eeo_ques_req,
                job_post: this.state.job_post,
                skills: this.state.skills,
                questions: this.state.questions,
                is_closed: 3,
                using_credit: false
            };
        }
        else if (this.state.remote.value == 1) {
            data = {
                jobTitle: this.state.jobTitle,
                jobId: this.state.jobId,
                jobDescription: this.state.jobDescription.toString('html'),
                jobLevel: this.state.jobLevel["value"],
                jobLocation: this.state.jobLocation + "| Hybrid",
                userId: this.props.user.id,
                jobType: this.state.jobType["value"],
                loc_req: this.state.loc_req,
                pho_req: this.state.pho_req,
                lin_req: this.state.lin_req,
                eeo_req: this.state.eeo_req,
                eeo_ques_req: this.state.eeo_ques_req,
                job_post: this.state.job_post,
                skills: this.state.skills,
                questions: this.state.questions,
                is_closed: 3,
                using_credit: false
            };
        }
        if (this.props.jobid_list.includes(this.state.jobId) && this.state.jobId != "" && this.state.jobId != null) {
            alert("Duplicate Job ID detected.");
        } else {
            this.props.addNewJob(data);
            setTimeout(() => { this.props.getAllJobs(this.props.user.id, 1, "", "", ""); this.props.getPJobs() }, 300);
            setTimeout(() => { this.props.renderJobs() }, 300);
        }
    }

    previewJob = () => {
        confirmAlert({
            closeOnEscape: true,
            closeOnClickOutside: true,
            customUI: ({ onClose }) => {
                return (
                    <div className="container-fluid" style={{ fontFamily: "Inter, Segoe UI", margin: "auto", width: "80%", overflow: "auto", height: "80vh", backgroundColor: "#ffffff", borderRadius: "5px" }}>
                        <div onClick={() => { onClose(); }} style={{ float: "right", cursor: "pointer", marginTop: "3rem" }}><i className="bx bx-x bx-md"></i></div>
                        <img style={{ height: "12rem", width: "100%" }} src="https://hirebeat-assets.s3.amazonaws.com/Employer/Top-Section.png" alt="icon" />
                        <img style={{ width: "7rem", marginLeft: "2rem", marginTop: "-3.5rem" }} src={this.props.employerProfileDetail.logo_url} alt="icon" />
                        <h1 className="ml-5 mt-5" style={{ fontWeight: "600", fontSize: "2.5rem", color: "#090D3A" }}>{this.state.jobTitle}</h1>
                        <h2 className="ml-5 mt-2" style={{ fontWeight: "600", fontSize: "1.5rem", color: "#006dff" }}>{this.props.employerProfileDetail.name}
                        </h2>
                        <div className="row pl-3">
                            <div className="col-8 pl-5" style={{ paddingRight: "3.7rem" }}>
                                <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{this.state.jobLevel["value"]} • {this.state.jobType["value"]}</p>
                                <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{(this.state.remote.value == 2) ? "Remote" : (this.state.remote.value == 1) ? (this.state.jobLocation + " | Hybrid") : this.state.jobLocation}</p>
                                <p style={{ fontWeight: "600", fontSize: "0.9rem", color: "#7C94B5", lineHeight: "0.6rem" }}>{this.state.jobId}</p>
                                <div>
                                    <div>
                                        <h2 className="mb-3">Company Overview</h2>
                                        <div className="mb-3">
                                            {parse('' + this.props.employerProfileDetail.summary + '')}
                                        </div>
                                    </div>
                                    <h2 className="mb-3 mt-5">Job Description</h2>
                                    <div className="mb-3">
                                        {parse('' + (this.state.jobDescription.toString('html')) + '')}
                                    </div>
                                    {this.state.eeo_req == "1" &&
                                        <div>
                                            <h2 className="mb-2 mt-3">EEO Statement</h2>
                                            <p className="mb-4 mt-1" style={{ color: "#090d3a" }}>{this.props.employerProfileDetail.name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                                        </div>}
                                </div>
                                <div>
                                    <div>
                                        <button className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mt-5">
                                <a className="default-btn" style={{ paddingLeft: "5rem", paddingRight: "5rem", textDecoration: "none", color: "#fff", cursor: "pointer" }}>
                                    Apply Now
                                </a>
                                <p className="mt-5">Link to this job</p>
                                <div className="row ml-0" style={{ position: "relative", background: "#E8EDFC", borderRadius: "5px", border: "2px solid #006dff", width: "90%", height: "3rem" }}>
                                    <div className="pt-2 pl-2" style={{ color: "#090D3A", fontSize: "1.4rem", fontWeight: "500", alignItems: "center" }}>
                                        <p style={{ fontSize: "0.8rem" }}>https://link-to-this-job</p>
                                    </div>
                                    <div className="py-1">
                                        <button className="default-btn pt-1" style={{ fontSize: "1.1rem", background: "#FF6B00", borderRadius: "5px", height: "2.2rem", alignItems: "center", paddingLeft: "2rem", paddingRight: "0.6rem", position: "absolute", right: "0.3rem" }}>
                                            <i className='bx bx-share-alt' style={{ left: "0.5rem" }}></i>Copy
                                        </button>
                                    </div>
                                </div>
                                {this.props.employerProfileDetail.website != null && this.props.employerProfileDetail.website != "" &&
                                    <div className="single-footer-widget1 mt-2">
                                        <p style={{ marginBottom: "0rem" }}>Website</p>
                                        <a className="website" target="_blank" rel="noreferrer" href={this.props.employerProfileDetail.website}>{this.props.employerProfileDetail.website} <i class='bx-fw bx bx-link-external bx-xs'></i></a>
                                    </div>
                                }
                            </div>
                        </div>
                        <button onClick={() => { onClose(); }} className="default-btn1" style={{ paddingLeft: "25px", float: "right", marginTop: "2rem", marginBottom: '2rem', marginRight: "2rem" }}>Confirm</button>
                    </div>
                );
            }
        });
    };

    showSharePrompt = () => {
        this.setState({ showShare: true });
    }

    disableShowShare = () => {
        this.setState({ showShare: false });
        this.props.renderJobs();
    }

    overWhelm = () => {
        confirmAlert({
            title: 'Question Limit',
            message: "You can add at most 3 screening questions for each postion",
            buttons: [
                { label: 'OK' },
            ]
        });
    }

    addQuestion = () => {
        if (this.state.questionCount >= 3) {
            return this.overWhelm();
        }
        let questions = this.state.questions;
        questions.push(new Object({
            question: "",
            responseType: "Yes/No",
            ans: "Yes",
            numAns: "0",
            isMustHave: "false",
        }))
        this.setState({ questionCount: this.state.questionCount + 1, questions: questions });
    }

    removeQuestion = (i) => {
        let questions = [...this.state.questions];
        questions.splice(i, 1);
        this.setState({ questions: questions, questionCount: this.state.questionCount - 1 });
    }

    handleQFormChange = (i, key, e) => {
        let questions = [...this.state.questions];
        questions[i][key] = e.target.value;
        if (key == "isMustHave") {
            if (e.target.checked) {
                questions[i][key] = "true";
            } else {
                questions[i][key] = "";
            }
        }
        this.setState({ questions: questions });
    }

    handleQFormChange2 = (i, key, value) => {
        let questions = [...this.state.questions];
        questions[i][key] = value;
        this.setState({ questions: questions });
    }

    render() {
        return (
            <div className="container" style={{ width: '95%' }}>
                <div style={{ marginBottom: "30px" }}><h3><b><i className="bx bx-briefcase"></i><span className="ml-2">Jobs / Create New Position</span></b></h3></div>
                <div className="row">
                    <div className="col d-flex align-items-center">
                        <button
                            type="button"
                            className="panel-button"
                            onClick={this.props.renderJobs}
                            style={{ outline: "none", margin: "0%", padding: "0px", background: "#f3f6f9" }}
                        >
                            <div className="center-items">
                                <i style={{ color: "#006dff" }} className="bx bx-arrow-back bx-sm"></i>
                                <p style={{ color: "#006dff", fontSize: "1.25rem" }}>Back</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="chart-bg1 container" style={{ marginTop: "1%", paddingBottom: "4rem", paddingLeft: "1.2rem" }}>
                    <form onSubmit={this.savePosition}>
                        <div className="form-row mt-4">
                            <div className="col-12">
                                <label className="db-txt2" style={{ fontSize: "1rem" }}><b>Position Details</b></label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Job Title
                                </label><span className="job-apply-char2">*</span>
                                <input type="text" name="jobTitle" value={this.state.jobTitle}
                                    onChange={this.handleInputChange} className="form-control" required="required" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} />
                            </div>
                            <div className="form-group col-3">
                                <label className="db-txt2">
                                    Job ID
                                </label>
                                <span className="job-apply-char2" style={{ visibility: "hidden" }}>*</span>
                                <input type="text" name="jobId" value={this.state.jobId}
                                    onChange={this.handleInputChange} className="form-control" style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Employment Type
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Experience Level
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.jobLevel} onChange={this.onFilter1} options={this.options1} styles={this.customStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                <label className="db-txt2">
                                    Workplace Policy
                                </label><span className="job-apply-char2">*</span>
                                <div style={{ zIndex: "9999" }}>
                                    <Select value={this.state.remote} onChange={this.onFilter3} options={this.options2} styles={this.customStyles} />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-6">
                                {this.state.remote.value == 2 ?
                                    <label className="db-txt2">
                                        Preferred Location
                                        <span className="tool_tip ml-2">
                                            <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                            <p className="tool_submenu container" style={{ width: "18rem", zIndex: "99999" }}>
                                                <div>
                                                    We need a location to help promote your opening to other job boards. We suggest inputting either the company's registered location or preferred candidate location.
                                                </div>
                                            </p>
                                        </span>
                                    </label> :
                                    <label className="db-txt2">
                                        Job Location
                                    </label>}
                                <span className="job-apply-char2">*</span>
                                <Autocomplete
                                    className="form-control"
                                    style={{ border: "2px solid #E8EDFC", borderRadius: "5px", height: "2.5rem" }}
                                    language="en"
                                    apiKey={"AIzaSyDEplgwaPXJn38qEEnE5ENlytHezUfq56U"}
                                    onPlaceSelected={(place, inputRef, autocomplete) => {
                                        this.handleLocation(place);
                                    }}
                                    required="required"
                                />
                            </div>
                        </div>
                        {/*<div className="form-row">
                            <div className="center-items db-txt2" style={{marginRight: "1rem", marginLeft: "1rem"}}>Job Type</div>
                            <Select value={this.state.jobType} onChange={this.handleChangeJobType} options={options} className="select-category3" styles={customStyles} />
                        </div>*/}
                        <div className="form-row">
                            <div className="col-6">
                                <label className="db-txt2">
                                    Job Description
                                </label><span className="job-apply-char2">*</span>
                            </div>
                            <div className="form-group col-12">
                                <RichTextEditor
                                    value={this.state.jobDescription}
                                    onChange={this.onChange}
                                    toolbarConfig={toolbarConfig}
                                    className="text-editor2"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    Preferred Skills
                                    <span className="tool_tip ml-2">
                                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                        <p className="tool_submenu container" style={{ width: "14rem", zIndex: "99999" }}>
                                            <div>
                                                These skills will be part of the resume evaluation and are not visible to applicants.
                                            </div>
                                        </p>
                                    </span>
                                </label>
                            </div>
                            <div className="form-group col-6" style={{ zIndex: "9999" }}>
                                <Select isMulti value={this.state.skills} onChange={this.onFilter2} options={SkillSet.sort((a, b) => {
                                    let fa = a.value.toLowerCase(), fb = b.value.toLowerCase();
                                    if (fa < fb) {
                                        return -1;
                                    }
                                    if (fa > fb) {
                                        return 1;
                                    }
                                    return 0;
                                })} styles={this.customStyles} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    EEO Statement
                                    <span className="tool_tip ml-2">
                                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                        <p className="tool_submenu container" style={{ width: "14rem", zIndex: "99999" }}>
                                            <div>
                                                Use our standard statement by enabling, or put your own in the Job Description above and leave this disabled.
                                            </div>
                                        </p>
                                    </span>
                                </label>
                            </div>
                            <div className="form-group col-12">
                                {this.state.eeo_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Enabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoReq1}>Enabled</button>
                                }
                                {this.state.eeo_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoReq0}>Disabled</button>
                                }
                            </div>
                            {this.state.eeo_req == 1 &&
                                <div className="form-group col-12">
                                    <p className="ml-5 mr-5" style={{ color: "#4a6f8a", fontWeight: "600", fontSize: "1rem", marginBottom: "0rem" }}>The following statement will be displayed at the bottom of your job description:</p>
                                    <p className="ml-5 mr-5" style={{ color: "#090d3a", fontWeight: "500", fontSize: "1rem", marginBottom: "0rem" }}>{this.props.profile.company_name} is an Equal Opportunity employer. We celebrate diversity and do not discriminate based on race, religion, color, national origin, sex, sexual orientation, age, veteran status, disability status, or any other applicable characteristics protected by law.</p>
                                </div>}
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    EEO Question
                                </label>
                            </div>
                            <div className="form-group col-12">
                                {this.state.eeo_ques_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Enabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoQuesReq1}>Enabled</button>
                                }
                                {this.state.eeo_ques_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setEeoQuesReq0}>Disabled</button>
                                }
                            </div>
                            {this.state.eeo_ques_req == 1 &&
                                <div className="form-group col-12">
                                    <p className="ml-5 mr-5" style={{ color: "#4a6f8a", fontWeight: "600", fontSize: "1rem" }}>Enabling EEO questions will allow you to collect EEO data from your candidates for use in compliance and diversity and inclusion efforts.</p>
                                </div>}
                        </div>
                        <hr style={{ border: "1.5px solid #E8EDFC" }} />
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2" style={{ fontSize: "1rem" }}><b>Application Form</b>
                                    <span className="tool_tip ml-2">
                                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                        <p className="tool_submenu container" style={{ width: "14rem", zIndex: "99999" }}>
                                            This will be filled out by applicants. Name, Email, and Resume are mandatory by default.
                                        </p>
                                    </span>
                                </label>
                            </div>
                        </div>
                        {/*<div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Name
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button>
                        </div>
                        <div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Email Address
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button>
                        </div>
                        <div className="form-row mt-3">
                            <label className="db-txt2" style={{ marginTop: "2%" }}>
                                Resume
                            </label>
                        </div>
                        <div className="form-row mt-3">
                            <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button>
                        </div>
                        <hr style={{ border: "1.5px solid #E8EDFC" }} />*/}
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    Location
                                </label>
                            </div>
                        </div>
                        <div className="form-row" style={{ marginBottom: "1rem" }}>
                            <div className="col-12">
                                {this.state.loc_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq0}>Required</button>
                                }
                                {this.state.loc_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Optional</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq1}>Optional</button>
                                }
                                {this.state.loc_req == 2 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLocReq2}>Disabled</button>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    Phone Number
                                </label>
                            </div>
                        </div>
                        <div className="form-row" style={{ marginBottom: "1rem" }}>
                            <div className="col-12">
                                {this.state.pho_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq0}>Required</button>
                                }
                                {this.state.pho_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Optional</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq1}>Optional</button>
                                }
                                {this.state.pho_req == 2 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setPhoReq2}>Disabled</button>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    LinkedIn URL
                                </label>
                            </div>
                        </div>
                        <div className="form-row" style={{ marginBottom: "1rem" }}>
                            <div className="col-12">
                                {this.state.lin_req == 0 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Required</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq0}>Required</button>
                                }
                                {this.state.lin_req == 1 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Optional</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq1}>Optional</button>
                                }
                                {this.state.lin_req == 2 ?
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                    <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={this.setLinReq2}>Disabled</button>
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-12">
                                <label className="db-txt2">
                                    Screening Questions
                                    <span className="tool_tip ml-2">
                                        <i class='bx-fw bx bxs-info-circle' style={{ color: "#dfdfdf" }}></i>
                                        <p className="tool_submenu container" style={{ width: "14rem", zIndex: "99999" }}>
                                            <div>
                                                Add up to three questions to determine whether an applicant meets your minimum requirements.
                                            </div>
                                        </p>
                                    </span>
                                </label>
                            </div>
                        </div>
                        {this.state.questions.map((q, index) => {
                            let responseType = { value: q?.responseType, label: q?.responseType } || { value: "Yes/No", label: "Yes/No" };
                            let ans = { value: q?.ans, label: q?.ans } || { value: "Yes/No", label: "Yes/No" };
                            return (
                                <div key={index} className="form-row" style={{ marginBottom: "1rem" }} required>
                                    <div className="col-12">
                                        <ScreenQuestion
                                            questionObj={q}
                                            handleQFormChange={this.handleQFormChange}
                                            handleQFormChange2={this.handleQFormChange2}
                                            index={index}
                                            removeQuestion={this.removeQuestion}
                                            responseType={responseType}
                                            ans={ans}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                        {this.state.questionCount < 3 &&
                            <div className="form-row" style={{ marginBottom: "1rem" }}>
                                <span style={{ cursor: "pointer" }} className="profile-edit" onClick={this.addQuestion}>
                                    + Add Screening Questions
                                </span>
                            </div>
                        }
                        <div>
                            <hr style={{ border: "1.5px solid #E8EDFC" }} />
                            <div className="form-row">
                                <div className="col-12">
                                    <label className="db-txt2" style={{ fontSize: "1rem" }}><b>Broadcast Your Job Posting</b></label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-4">
                                    {this.state.job_post == 0 ?
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Disabled</button> :
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(0)}>Disabled</button>
                                    }
                                    {this.state.job_post == 1 ?
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Standard</button> :
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(1)}>Standard</button>
                                    }
                                    {this.state.job_post == 2 ?
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#e8edfc", color: "#090d3a", border: "2px solid #006dff" }}>Premium</button> :
                                        <button type="button" className="default-btn2" style={{ fontSize: "12px", backgroundColor: "#fff", color: "#090d3a", border: "2px solid #e8edfc" }} onClick={() => this.setJobPost(2)}>Premium</button>
                                    }
                                </div>
                                <div className="form-group col-12">
                                    {this.state.job_post == 0 &&
                                        <label className="db-txt2" style={{ fontWeight: "500" }}>
                                            Your position will be posted on HireBeat job board and your company career page.
                                        </label>
                                    }
                                    {this.state.job_post == 1 &&
                                        <label className="db-txt2" style={{ fontWeight: "500" }}>
                                            Standard advertising: your position will appear on ZipRecruiter and other 200+ job boards within 24 hours.
                                        </label>
                                    }
                                    {this.state.job_post == 2 &&
                                        <label className="db-txt2" style={{ fontWeight: "500" }}>
                                            Premium advertising: your position will be posted on 200+ job boards within 24 hours and will be actively promoted for 30 days.
                                            <div style={{ fontWeight: "600", marginTop: "0.8rem" }}>
                                                30-Day Promotion - $200
                                            </div>
                                            <div>
                                                You will be redirected to the payment page once you click Save to publish.
                                            </div>
                                        </label>

                                    }
                                </div>
                            </div>
                        </div>
                        <MyShareModal
                            show={this.state.showShare}
                            onHide={() => { this.disableShowShare() }}
                        >
                            <div className="container" style={{ padding: "2rem" }}>
                                <ShareJob
                                    disableShowShare={this.disableShowShare}
                                    shareLink={"https://app.hirebeat.co/apply-job/" + this.props.companyName + "?id=" + window?.btoa(Object.keys(this.props.jobs).sort(function (a, b) { return b - a; })[0])}
                                    companyName={this.props.companyName}
                                    jobTitle={this.state.jobTitle}
                                />
                            </div>
                        </MyShareModal>
                        <MyModalUpgrade
                            show={this.state.showUpgradeM}
                            onHide={this.setHideUpgradeM}
                        >
                            <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Upgrade needed</h3>
                                <p className="pt-3">You do not have an active plan or PAYG job credit left.</p>
                                <p>Please upgrade or purchase a plan to publish your job.</p>
                                <div className="row" style={{ margin: "auto", width: "80%" }}>
                                    <div className="col-6">
                                        <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                                    </div>
                                    <div className="col-6">
                                        <button onClick={this.setHideUpgradeM} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                                    </div>
                                </div>
                            </div>
                        </MyModalUpgrade>
                        <MyModalUpgrade
                            show={this.state.showUpgradeM1}
                            onHide={this.setHideUpgradeM1}
                        >
                            <div className="container" style={{ borderRadius: "10px", boxShadow: "2px 2px 4px rgba(128, 128, 128, 0.16)", padding: "2rem" }}>
                                <h3 style={{ color: "#090d3a", fontWeight: "600", fontSize: "1.6rem" }}>Upgrade Needed</h3>
                                <p className="pt-3">You have reached your job publish limit.</p>
                                <p>Please upgrade or purchase a plan to publish your job.</p>
                                <div className="row" style={{ margin: "auto", width: "80%" }}>
                                    <div className="col-6">
                                        <Link to="/employer-pricing" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", textDecoration: "none" }}>Select Plan</Link>
                                    </div>
                                    <div className="col-6">
                                        <button onClick={this.setHideUpgradeM1} className="default-btn" style={{ paddingLeft: "25px", paddingTop: "8px", paddingBottom: "8px", backgroundColor: "#979797" }}>Maybe Later</button>
                                    </div>
                                </div>
                            </div>
                        </MyModalUpgrade>
                        <div style={{ float: "left", marginBottom: "1rem", display: "inline-block" }}>
                            <button
                                type="submit"
                                className="default-btn" style={{ marginBottom: "1.5%", paddingLeft: "25px", marginRight: "1rem" }}
                            >
                                Save & Publish
                            </button>
                            <button
                                type="button"
                                className="default-btn" style={{ marginBottom: "1.5%", marginRight: "1rem", backgroundColor: "#fff", color: "#006dff", border: "2px solid #006dff", paddingTop: "9px", paddingBottom: "8px", paddingLeft: "25px" }}
                                onClick={() => { this.saveDraft() }}
                            >
                                Save Draft
                            </button>
                            <button
                                type="button"
                                className="default-btn" style={{ marginBottom: "1.5%", marginRight: "1rem", backgroundColor: "#fff", color: "#006dff", border: "2px solid #006dff", paddingTop: "9px", paddingBottom: "8px" }}
                                onClick={() => { this.previewJob() }}
                            >
                                <i className="bx bx-show" style={{ color: "#006dff" }}></i>Preview
                            </button>
                            <button className="default-btn" type="button" style={{ paddingLeft: "25px", backgroundColor: "#fff", color: "#979797" }} onClick={this.props.renderJobs}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
};

export default JobCreation;