import React, { Component } from "react";
import Select from 'react-select';
import parse from 'html-react-parser';
import { MessageClient } from "cloudmailin";
import axios from "axios";

export class EmailSending extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        job: {},
        emailTemp: { value: 0, label: 'Template' },
        emailFrom: { value: (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), label: this.props.employerProfileDetail?.name },
        emailVal: { value: "INSERT VARIABLE", label: 'INSERT VARIABLE' },
        emailVal1: { value: "INSERT VARIABLE", label: 'INSERT VARIABLE' },
        emailSubject: "",
        cursorPosition1: 0,
        emailSalute: "",
        emailBody: "",
        cursorPosition2: 0,
        addOnBottom: '<hr style="margin-top:4rem; border:2px solid rgba(202, 217, 252, 0.5)"/><p style="color:#d0d0d0; font-size:0.8rem">If you have got questions or want to give us some feedback, you can reply to this email and it will go straight to the hiring team responsible for this role.</p>'
    }

    componentDidMount() {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "jobid": this.props.jobid };
        axios.post("jobs/get-single-job-details", data, config).then((res) => {
            this.setState({ job: res.data.data })
        }).catch(error => {
            console.log(error)
        });
        if (this.props.handleStatusChange2 != null) {
            this.setState({ emailFrom: { value: 'no-reply@hirebeat.email', label: 'no-reply@hirebeat.email' } });
            this.setState({ addOnBottom: '<hr style="margin-top:4rem; border:2px solid rgba(202, 217, 252, 0.5)"/><p style="color:#d0d0d0; font-size:0.8rem">This message was sent from an unmonitored e-mail address. Please do not reply to this message.</p>' });
        }
    }

    onFilter = (emailTemp) => {
        if (emailTemp.value == 2) {
            this.setState({
                emailSubject: this.props.employerProfileDetail.name + " Interview Request"
            });
            this.setState({
                emailSalute: "Dear"
            });
            let newtext2 = "Thanks for your interest in the " + this.state.job.job_title + " position at " + this.props.employerProfileDetail.name + ". We're excited to move forward with the interview process.\n\nTo help us schedule your next interview(s), please select a time through the Calendly link below.\n\n<b>[PLEASE REPLACE THIS LINE WITH YOUR CALENDLY LINK]</b>\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            if (typeof this.props.email == "string") {
                newtext2 = "Hi " + this.props.first_name + ",\n\nThanks for your interest in the " + this.state.job.job_title + " position at " + this.props.employerProfileDetail.name + ". We're excited to move forward with the interview process.\n\nTo help us schedule your next interview(s), please select a time through the Calendly link below.\n\n<b>[PLEASE REPLACE THIS LINE WITH YOUR CALENDLY LINK]</b>\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            }
            this.setState({
                emailBody: newtext2
            });
        }
        if (emailTemp.value == 3) {
            this.setState({
                emailSubject: this.props.employerProfileDetail.name + " Interview Availability"
            });
            this.setState({
                emailSalute: "Dear"
            });
            let newtext3 = "Thanks for your interest in the " + this.state.job.job_title + " position at " + this.props.employerProfileDetail.name + ". We're excited to move forward with the interview process.\n\nTo help us schedule your next interview(s), please let us know when you're available by selecting the online calendar link below.\n\n<b>[PLEASE REPLACE THIS LINE WITH YOUR CALENDLY LINK]</b>\n\nWe'll coordinate with our team and confirm a time with you.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            if (typeof this.props.email == "string") {
                newtext3 = "Hi " + this.props.first_name + ",\n\nThanks for your interest in the " + this.state.job.job_title + " position at " + this.props.employerProfileDetail.name + ". We're excited to move forward with the interview process.\n\nTo help us schedule your next interview(s), please let us know when you're available by selecting the online calendar link below.\n\n<b>[PLEASE REPLACE THIS LINE WITH YOUR CALENDLY LINK]</b>\n\nWe'll coordinate with our team and confirm a time with you.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            }
            this.setState({
                emailBody: newtext3
            });
        }
        if (emailTemp.value == 4) {
            this.setState({
                emailSubject: this.props.employerProfileDetail.name + " Interview Confirmation"
            });
            this.setState({
                emailSalute: "Dear"
            });
            let newtext4 = "Thanks for submitting your availability for the <b>" + this.state.job.job_title + "</b> position.\n\nYou're confirmed for your interview on:\n\n<b>[PLEASE REPLACE THIS LINE WITH THE CONFIRMED INTERVIEW DATE, TIME AND DURATION]</b>\n\nLet us know if you have any other questions before your interview.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            if (typeof this.props.email == "string") {
                newtext4 = "Hi " + this.props.first_name + ",\n\nThanks for submitting your availability for the <b>" + this.state.job.job_title + "</b> position.\n\nYou're confirmed for your interview on:\n\n<b>[PLEASE REPLACE THIS LINE WITH THE CONFIRMED INTERVIEW DATE, TIME AND DURATION]</b>\n\nLet us know if you have any other questions before your interview.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            }
            this.setState({
                emailBody: newtext4
            });
        }
        if (emailTemp.value == 5) {
            this.setState({
                emailSubject: "Your application for " + this.state.job.job_title
            });
            this.setState({
                emailSalute: "Dear"
            });
            let newtext5 = "We have reviewed your application for the " + this.state.job.job_title + " position, and have decided not to move forward at this time.\n\nWhile it might not be the right fit now, we will keep you in mind for future opportunities.\n\nThank you for considering us " + this.props.employerProfileDetail.name + " your next place of work and we wish you luck in your search.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            if (typeof this.props.email == "string") {
                newtext5 = "Hi " + this.props.first_name + ",\n\nWe have reviewed your application for the " + this.state.job.job_title + " position, and have decided not to move forward at this time.\n\nWhile it might not be the right fit now, we will keep you in mind for future opportunities.\n\nThank you for considering us " + this.props.employerProfileDetail.name + " your next place of work and we wish you luck in your search.\n\nRegards,\n\n" + this.props.employerProfileDetail.f_name;
            }
            this.setState({
                emailBody: newtext5
            });
        }
        if (emailTemp.value == 6) {
            this.setState({
                emailSubject: "New vacancy available with " + this.props.employerProfileDetail.name
            });
            this.setState({
                emailSalute: "Dear"
            });
            let newtext6 = "We've just posted a vacancy we think you may be interested in. Click the link below to learn more about the role and to apply.\n\n" + "Job Basic Information:\n" + this.state.job.job_title + " - " + this.state.job.job_location + "\n\nJob Description and Application link:\n" + this.state.job.job_url?.replaceAll(" ", "%20") + "\n\nRegards,\n\n" + this.props.employerProfileDetail.name;
            if (typeof this.props.email == "string") {
                newtext6 = "Hi " + this.props.first_name + ",\n\nWe've just posted a vacancy we think you may be interested in. Click the link below to learn more about the role and to apply.\n\n" + "Job Basic Information:\n" + this.state.job.job_title + " - " + this.state.job.job_location + "\n\nJob Description and Application link:\n" + this.state.job.job_url?.replaceAll(" ", "%20") + "\n\nRegards,\n\n" + this.props.employerProfileDetail.name;
            }
            this.setState({
                emailBody: newtext6
            });
        }
        if (emailTemp.value == 0) {
            this.setState({
                emailSubject: ""
            });
            this.setState({
                emailSalute: ""
            });
            let newtext0 = "";
            this.setState({
                emailBody: newtext0
            });
        }
        this.setState({ emailTemp: emailTemp });
    };

    onFilter1 = (emailFrom) => {
        this.setState({ emailFrom: emailFrom });
        if (emailFrom.label == "no-reply@hirebeat.email") {
            this.setState({ addOnBottom: '<hr style="margin-top:4rem; border:2px solid rgba(202, 217, 252, 0.5)"/><p style="color:#d0d0d0; font-size:0.8rem">This message was sent from an unmonitored e-mail address. Please do not reply to this message.</p>' });
        } else {
            this.setState({ addOnBottom: '<hr style="margin-top:4rem; border:2px solid rgba(202, 217, 252, 0.5)"/><p style="color:#d0d0d0; font-size:0.8rem">If you have got questions or want to give us some feedback, you can reply to this email and it will go straight to the hiring team responsible for this role.</p>' });
        }
    };

    onFilter2 = (emailVal) => {
        let textBeforeCursorPosition = this.state.emailSubject.substring(0, this.state.cursorPosition1)
        let textAfterCursorPosition = this.state.emailSubject.substring(this.state.cursorPosition1, this.state.emailSubject.length)
        let newSubject = textBeforeCursorPosition + emailVal.value + textAfterCursorPosition
        this.setState({ emailSubject: newSubject });
    };

    onFilter3 = (emailVal1) => {
        let textBeforeCursorPosition = this.state.emailBody.substring(0, this.state.cursorPosition2)
        let textAfterCursorPosition = this.state.emailBody.substring(this.state.cursorPosition2, this.state.emailBody.length)
        let newBody = textBeforeCursorPosition + emailVal1.value + textAfterCursorPosition
        this.setState({ emailBody: newBody });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onChange1 = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onKeydown = (e) => {
        this.setState({
            cursorPosition1: e.target.selectionStart
        })
    };

    onKeydown1 = (e) => {
        this.setState({
            cursorPosition2: e.target.selectionStart
        })
    };

    sendEmail = () => {
        if (this.state.emailSubject == "" || this.state.emailBody == "") {
            return alert("Email Empty!");
        } else {
            const client = new MessageClient({ username: "f70b2f948c506dea", apiKey: "QGkNZHiEHn5VfDqez9RkspVa" });
            if (typeof this.props.email != "string") {
                if (confirm("You have selected multiple candidates. Are you sure you want to send this email to all?")) {
                    for (let i = 0; i < this.props.email.length; i++) {
                        client.sendMessage({
                            to: this.props.email[i].email,
                            from: this.state.emailFrom.value,
                            html: this.state.emailSalute + " " + this.props.email[i].first_name + ",<br/><br/>" + this.state.emailBody?.replaceAll(/\n/g, "<br/>") + this.state.addOnBottom,
                            subject: this.state.emailSubject
                        });
                    }
                } else {
                    return;
                }
            } else {
                client.sendMessage({
                    to: this.props.email,
                    from: this.state.emailFrom.value,
                    html: this.state.emailBody?.replaceAll(/\n/g, "<br />") + this.state.addOnBottom,
                    subject: this.state.emailSubject
                });
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            let data = {}
            if (this.props.handleStatusChange2 == null) {
                if (typeof this.props.email != "string") {
                    for (let i = 0; i < this.props.email.length; i++) {
                        if (this.state.emailFrom.label == "no-reply@hirebeat.email") {
                            data = { "to": this.props.email[i].first_name + " " + this.props.email[i].last_name + "<" + this.props.email[i].email + ">", "from": (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + " " + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), "plain": this.state.emailBody?.replaceAll(/\n/g, "<br />"), "subject": "No-reply: " + this.state.emailSubject };
                        } else {
                            data = { "to": this.props.email[i].first_name + " " + this.props.email[i].last_name + "<" + this.props.email[i].email + ">", "from": (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + " " + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), "plain": this.state.emailBody?.replaceAll(/\n/g, "<br />"), "subject": this.state.emailSubject };
                        }
                        axios.post("jobs/send-email-from-cloudmail", data, config).then((res) => {
                            console.log(res)
                        }).catch(error => {
                            console.log(error)
                        });
                    }
                } else {
                    if (this.state.emailFrom.label == "no-reply@hirebeat.email") {
                        data = { "to": this.props.first_name + " " + this.props.last_name + "<" + this.props.email + ">", "from": (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + " " + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), "plain": this.state.emailBody?.replaceAll(/\n/g, "<br />"), "subject": "No-reply: " + this.state.emailSubject };
                    } else {
                        data = { "to": this.props.first_name + " " + this.props.last_name + "<" + this.props.email + ">", "from": (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + " " + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), "plain": this.state.emailBody?.replaceAll(/\n/g, "<br />"), "subject": this.state.emailSubject };
                    }
                    axios.post("jobs/send-email-from-cloudmail", data, config).then((res) => {
                        console.log(res)
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }

            alert("Email Sent!");
            this.props.hideEmailSending();
            if (this.props.handleStatusChange2 != null) {
                this.props.handleStatusChange2();
            }
            //Segment info
            window?.analytics?.track("Send Email", {
                eventTime: Date()?.toLocaleString()
            });
        }
    }

    render() {
        var customStyles = {
            control: styles => ({ ...styles, backgroundColor: '#ffffff', borderRadius: "3px", border: "2px solid #67A3F3", height: '2.4rem' }),
            singleValue: styles => ({
                ...styles,
                color: '#4a6f8a',
                fontSize: '0.9375rem',
                fontFamily: 'Inter,Segoe UI, sans-serif',
                fontWeight: '500'
            }),
            menuPortal: provided => ({ ...provided, zIndex: 2 }),
            menu: provided => ({ ...provided, zIndex: 2 }),
            indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
            dropdownIndicator: styles => ({ ...styles, color: "#67A3F3" }),
        };

        var customStyles1 = {
            control: styles => ({ ...styles, backgroundColor: '#ffffff', border: "none", float: "right", height: '2.4rem', width: "9rem", marginTop: "-2.3rem" }),
            singleValue: styles => ({
                ...styles,
                color: '#666666',
                fontSize: '0.7rem',
                fontFamily: 'Inter,Segoe UI, sans-serif',
                fontWeight: '500',
            }),
            menuPortal: provided => ({ ...provided, zIndex: 99 }),
            menu: provided => ({ ...provided, zIndex: 99 }),
            indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
            dropdownIndicator: styles => ({ ...styles, color: "#67A3F3" }),
        };

        var options = [
            { value: 2, label: 'Interview Request with Calendly' },
            { value: 3, label: 'Candidate Availability Request' },
            { value: 4, label: 'Candidate Interview Confirmation' },
            { value: 5, label: 'Default Rejection' },
            { value: 0, label: 'No Selection' },
        ]
        if (this.props.handleStatusChange2 != null) {
            options = [
                { value: 6, label: 'Invitation to Apply Job' },
                { value: 2, label: 'Interview Request with Calendly' },
                { value: 3, label: 'Candidate Availability Request' },
                { value: 4, label: 'Candidate Interview Confirmation' },
                { value: 5, label: 'Default Rejection' },
                { value: 0, label: 'No Selection' },
            ]
        }

        var options1 = [
            { value: (this.props.employerProfileDetail?.name + '<' + window?.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window?.btoa(this.props.jobid) + '@hirebeat.email' + '>'), label: this.props.employerProfileDetail?.name },
            { value: 'no-reply@hirebeat.email', label: 'no-reply@hirebeat.email' },
        ]
        if (this.props.handleStatusChange2 != null) {
            options1 = [
                { value: 'no-reply@hirebeat.email', label: 'no-reply@hirebeat.email' },
            ]
        }

        var options2 = [
            { value: this.props.employerProfileDetail.name, label: 'Company Name' },
            { value: this.props.employerProfileDetail.website, label: 'Company Website' },
            { value: "https://app.hirebeat.co/company-branding/" + this.props.employerProfileDetail.name?.replaceAll(" ", "%20"), label: 'Company Career Portal' },
            { value: this.state.job.job_title, label: 'Job Title' },
            { value: this.props.employerProfileDetail.f_name + " " + this.props.employerProfileDetail.l_name, label: 'Sender Full Name' },
            { value: this.props.employerProfileDetail.f_name, label: 'Sender First Name' },
            { value: this.props.employerProfileDetail.l_name, label: 'Sender Last Name' },
        ]
        if (this.props.handleStatusChange2 != null) {
            options2 = [
                { value: this.state.job.job_location, label: 'Job Location' },
                { value: this.state.job.job_url?.replaceAll(" ", "%20"), label: 'Job URL' },
                { value: this.props.employerProfileDetail.name, label: 'Company Name' },
                { value: this.props.employerProfileDetail.website, label: 'Company Website' },
                { value: "https://app.hirebeat.co/company-branding/" + this.props.employerProfileDetail.name?.replaceAll(" ", "%20"), label: 'Company Career Portal' },
                { value: this.state.job.job_title, label: 'Job Title' },
                { value: this.props.employerProfileDetail.f_name + " " + this.props.employerProfileDetail.l_name, label: 'Sender Full Name' },
                { value: this.props.employerProfileDetail.f_name, label: 'Sender First Name' },
                { value: this.props.employerProfileDetail.l_name, label: 'Sender Last Name' },
            ]

            if (typeof this.props.email == "string") {
                options2 = [
                    { value: this.props.first_name + " " + this.props.last_name, label: 'Candidate Full Name' },
                    { value: this.props.first_name, label: 'Candidate First Name' },
                    { value: this.props.last_name, label: 'Candidate Last Name' },
                    { value: this.state.job.job_location, label: 'Job Location' },
                    { value: this.state.job.job_url?.replaceAll(" ", "%20"), label: 'Job URL' },
                    { value: this.props.employerProfileDetail.name, label: 'Company Name' },
                    { value: this.props.employerProfileDetail.website, label: 'Company Website' },
                    { value: "https://app.hirebeat.co/company-branding/" + this.props.employerProfileDetail.name?.replaceAll(" ", "%20"), label: 'Company Career Portal' },
                    { value: this.state.job.job_title, label: 'Job Title' },
                    { value: this.props.employerProfileDetail.f_name + " " + this.props.employerProfileDetail.l_name, label: 'Sender Full Name' },
                    { value: this.props.employerProfileDetail.f_name, label: 'Sender First Name' },
                    { value: this.props.employerProfileDetail.l_name, label: 'Sender Last Name' },
                ]
            }
        }

        return (
            <React.Fragment>
                <div className="container-fluid px-5 py-5">
                    <h3 className="profile-h3">Send Email</h3>
                    <div className="row mt-5">
                        {/*Left */}
                        <div className="col-5">
                            <h3 className="profile-h3" style={{ fontSize: "1rem" }}>Template <span style={{ color: "#4a6f8a", fontSize: "0.8rem", fontWeight: "500" }}>(optional)</span></h3>
                            <Select value={this.state.emailTemp} onChange={this.onFilter} options={options} styles={customStyles} isSearchable={false} />
                            <h3 className="profile-h3" style={{ fontSize: "1rem", marginTop: "1rem" }}>From</h3>
                            <Select value={this.state.emailFrom} onChange={this.onFilter1} options={options1} styles={customStyles} isSearchable={false} />
                            {this.state.emailFrom.label == "no-reply@hirebeat.email" &&
                                <p style={{ color: "#ff0000", fontSize: "0.8rem" }}>* Please note: your candidates will not be able to reply to this email.</p>}
                            <hr style={{ border: "2px solid rgba(202, 217, 252, 0.5)", marginTop: "4rem", marginBottom: "2rem" }} />
                            <h3 className="profile-h3" style={{ fontSize: "1rem", display: "inline-block" }}>Subject</h3>
                            <Select value={this.state.emailVal} onChange={this.onFilter2} options={options2} styles={customStyles1} isSearchable={false} />
                            <input type="text" style={{ marginTop: "0.5rem", width: "100%", borderRadius: "3px", border: "2px solid #67A3F3", height: '2.4rem', color: '#4a6f8a', fontSize: '0.9375rem', fontFamily: 'Inter,Segoe UI, sans-serif', fontWeight: "500" }} name="emailSubject" value={this.state.emailSubject} onChange={this.onChange} onPointerMove={this.onKeydown}></input>
                            {(typeof this.props.email != "string") &&
                                <h3 className="profile-h3" style={{ fontSize: "1rem", display: "inline-block", marginTop: "1rem", marginBottom: "0.5rem" }}>Salutation</h3>}
                            {(typeof this.props.email != "string") &&
                                <div>
                                    <input type="text" style={{ marginTop: "0.5rem", width: "50%", borderRadius: "3px", border: "2px solid #67A3F3", height: '2.4rem', color: '#4a6f8a', fontSize: '0.9375rem', fontFamily: 'Inter,Segoe UI, sans-serif', fontWeight: "500" }} name="emailSalute" value={this.state.emailSalute} onChange={this.onChange}></input>
                                    <p style={{ display: "inline-block", color: "#090d3a", marginLeft: "0.5rem" }}>{"{{first_name}},"}</p>
                                </div>}
                            <h3 className="profile-h3" style={{ fontSize: "1rem", display: "inline-block", marginTop: "1rem", marginBottom: "0.5rem" }}>Body</h3>
                            <Select value={this.state.emailVal1} onChange={this.onFilter3} options={options2} styles={customStyles1} isSearchable={false} />
                            <textarea style={{ marginTop: "0.5rem", width: "100%", borderRadius: "3px", border: "2px solid #67A3F3", height: '14rem', color: '#4a6f8a', fontSize: '0.9375rem', fontFamily: 'Inter,Segoe UI, sans-serif', fontWeight: "500" }} name="emailBody" value={this.state.emailBody} onChange={this.onChange1} onPointerMove={this.onKeydown1}>{this.state.emailBody}</textarea>
                        </div>

                        {/*Right */}
                        <div className="col-7" style={{ backgroundColor: "rgba(232, 237, 252, 0.2)", borderRadius: "4px" }}>
                            <h3 className="profile-h3 pl-4" style={{ fontSize: "1rem", paddingTop: "3rem" }}>Email Preview</h3>
                            {(typeof this.props.email != "string") &&
                                <p className="profile-p pl-4" style={{ fontSize: "0.8rem" }}>The salutation placeholder is only for display purposes. When the email is sent to each candidate, it will be replaced by real information.</p>
                            }
                            <div style={{ backgroundColor: "#fff", border: "2px solid #E8EDFC", borderRadius: "4px", margin: "1.6rem" }}>
                                <div className="d-flex justify-content-center px-5 py-4" style={{ paddingTop: "2rem" }}>
                                    <h3 className="profile-h3" style={{ fontSize: "1.4rem", fontWeight: "600" }}>{this.state.emailSubject}</h3>
                                </div>
                                {(typeof this.props.email != "string") &&
                                    <div className="d-flex justify-content-start px-5 py-1">
                                        <p style={{ color: "#444444", fontSize: "0.8rem" }}>{this.state.emailSalute + " {{first_name}},"}</p>
                                    </div>}
                                <div className="d-flex justify-content-start px-5 py-4" style={{ minHeight: "20rem" }}>
                                    <div>
                                        {parse("" + this.state.emailBody?.replaceAll(/\n/g, "<br />") + this.state.addOnBottom + "")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Bottom */}
                    <div className="row d-flex justify-content-end" style={{ marginTop: "5rem" }}>
                        <button onClick={this.sendEmail} className="default-btn1" style={{ paddingLeft: "25px" }}>Send</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EmailSending;