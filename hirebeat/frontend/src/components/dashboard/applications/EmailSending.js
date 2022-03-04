import React, { Component } from "react";
import Select from 'react-select';
import RichTextEditor from 'react-rte';
import parse from 'html-react-parser';
import { MessageClient } from "cloudmailin";
import axios from "axios";

const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'HISTORY_BUTTONS'],
    INLINE_STYLE_BUTTONS: [
        { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
        { label: 'Italic', style: 'ITALIC' },
        { label: 'Underline', style: 'UNDERLINE' }
    ],
    BLOCK_TYPE_BUTTONS: [
        { label: 'UL', style: 'unordered-list-item' },
        { label: 'OL', style: 'ordered-list-item' }
    ]
};

export class EmailSending extends Component {

    state = {
        emailTemp: { value: "1", label: '1' },
        emailFrom: { value: (this.props.employerProfileDetail?.name + '<' + window.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window.btoa(this.props.job.id) + '@hirebeat.email' + '>'), label: 'Company Name' },
        emailVal: { value: "INSERT VARIABLE", label: 'INSERT VARIABLE' },
        emailVal1: { value: "INSERT VARIABLE", label: 'INSERT VARIABLE' },
        emailSubject: "",
        cursorPosition1: 0,
        emailBody: RichTextEditor.createEmptyValue(),
        cursorPosition2: 0,
        addOnBottom: '<hr style="margin-top:4rem; border:2px solid rgba(202, 217, 252, 0.5)"/><p style="color:#d0d0d0; font-size:0.8rem">If you have got questions or want to give us some feedback, you can reply to this email and it will go straight to the hiring team responsible for this role.</p>'
    }

    onFilter = (emailTemp) => {
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
        let converttext = this.state.emailBody.toString("markdown");
        let newtext = converttext + emailVal1.value;
        let newrichtext = RichTextEditor.createValueFromString(newtext, 'html');
        this.onChange1(newrichtext);
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onChange1 = (emailBody) => {
        this.setState({ emailBody });
    };

    onKeydown = (e) => {
        this.setState({
            cursorPosition1: e.target.selectionStart
        })
    };

    sendEmail = () => {
        const client = new MessageClient({ username: "f70b2f948c506dea", apiKey: "QGkNZHiEHn5VfDqez9RkspVa" });
        client.sendMessage({
            to: this.props.email,
            from: this.state.emailFrom.value,
            html: this.state.emailBody.toString("html") + this.state.addOnBottom,
            subject: this.state.emailSubject
        });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = {}
        if (this.state.emailFrom.label == "no-reply@hirebeat.email") {
            data = { "to": this.props.email, "from": (this.props.employerProfileDetail?.name + '<' + window.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window.btoa(this.props.job.id) + '@hirebeat.email' + '>'), "plain": this.state.emailBody.toString("markdown"), "subject":"No-reply: "+this.state.emailSubject };
        }else{
            data = { "to": this.props.email, "from": (this.props.employerProfileDetail?.name + '<' + window.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window.btoa(this.props.job.id) + '@hirebeat.email' + '>'), "plain": this.state.emailBody.toString("markdown"), "subject":this.state.emailSubject };
        }
        axios.post("jobs/send-email-from-cloudmail", data, config).then((res) => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
        alert("Email Sent!");
        this.props.hideEmailSending();
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
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
        ]

        var options1 = [
            { value: (this.props.employerProfileDetail?.name + '<' + window.btoa(this.props.employerProfileDetail?.f_name?.toLowerCase() + this.props.employerProfileDetail?.l_name?.toLowerCase()) + '-' + window.btoa(this.props.job.id) + '@hirebeat.email' + '>'), label: 'Company Name' },
            { value: 'no-reply@hirebeat.email', label: 'no-reply@hirebeat.email' },
        ]

        var options2 = [
            { value: 'val 1', label: 'val 1' },
            { value: 'val 2', label: 'val 2' },
        ]

        var options3 = [
            { value: 'val 123', label: 'val 123' },
            { value: 'val 456', label: 'val 456' },
        ]

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
                            <h3 className="profile-h3" style={{ fontSize: "1rem", display: "inline-block", marginTop: "1rem", marginBottom: "0.5rem" }}>Body</h3>
                            <Select value={this.state.emailVal1} onChange={this.onFilter3} options={options3} styles={customStyles1} isSearchable={false} />
                            <RichTextEditor
                                value={this.state.emailBody}
                                onChange={this.onChange1}
                                toolbarConfig={toolbarConfig}
                                className="text-editor3"
                            />
                        </div>

                        {/*Right */}
                        <div className="col-7" style={{ backgroundColor: "rgba(232, 237, 252, 0.2)", borderRadius: "4px" }}>
                            <h3 className="profile-h3 pl-4" style={{ fontSize: "1rem", paddingTop: "3rem" }}>Email Preview</h3>
                            <div style={{ backgroundColor: "#fff", border: "2px solid #E8EDFC", borderRadius: "4px", margin: "1.6rem" }}>
                                <div className="d-flex justify-content-center" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                                    {(this.props.employerProfileDetail.logo_url != "" && this.props.employerProfileDetail.logo_url != null) &&
                                        <img style={{ maxWidth: "6rem" }} src={this.props.employerProfileDetail.logo_url} alt="logo"></img>}
                                </div>
                                <div className="d-flex justify-content-center">
                                    <h3 className="profile-h3" style={{ fontSize: "1.4rem", fontWeight: "600" }}>{this.state.emailSubject}</h3>
                                </div>
                                <div className="d-flex justify-content-start px-5 py-4" style={{ minHeight: "20rem" }}>
                                    <div>
                                        {parse('' + this.state.emailBody.toString("html") + this.state.addOnBottom + '')}
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