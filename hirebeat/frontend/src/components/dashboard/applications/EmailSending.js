import React, { Component } from "react";
import Select from 'react-select';

export class EmailSending extends Component {

    state = {
        emailTemp: { value: "1", label: '1' },
        emailFrom: { value: "Company_name", label: 'Company_name' },
        emailVal: { value: "INSERT VARIABLE", label: 'INSERT VARIABLE' },
        emailSubject: "",
        cursorPosition1: 0
    }

    onFilter = (emailTemp) => {
        this.setState({ emailTemp: emailTemp });
    };

    onFilter1 = (emailFrom) => {
        this.setState({ emailFrom: emailFrom });
    };

    onFilter2 = (emailVal) => {
        let textBeforeCursorPosition = this.state.emailSubject.substring(0, this.state.cursorPosition1)
        let textAfterCursorPosition = this.state.emailSubject.substring(this.state.cursorPosition1, this.state.emailSubject.length)
        let newSubject = textBeforeCursorPosition + emailVal.value + textAfterCursorPosition
        this.setState({ emailSubject: newSubject });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onKeydown = (e) => {
        this.setState({
            cursorPosition1: e.target.selectionStart
        })
    };

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
            menuPortal: provided => ({ ...provided, zIndex: 2 }),
            menu: provided => ({ ...provided, zIndex: 2 }),
            indicatorSeparator: styles => ({ ...styles, visibility: "hidden" }),
            dropdownIndicator: styles => ({ ...styles, color: "#67A3F3" }),
        };

        var options = [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
        ]

        var options1 = [
            { value: 'Company_name', label: 'Company_name' },
            { value: 'No_reply', label: 'No_reply' },
        ]

        var options2 = [
            { value: 'val 1', label: 'val 1' },
            { value: 'val 2', label: 'val 2' },
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
                            <hr style={{ border: "2px solid rgba(202, 217, 252, 0.5)", marginTop: "4rem", marginBottom: "2rem" }} />
                            <h3 className="profile-h3" style={{ fontSize: "1rem", display: "inline-block" }}>Subject</h3>
                            <Select value={this.state.emailVal} onChange={this.onFilter2} options={options2} styles={customStyles1} isSearchable={false} />
                            <textarea  style={{ width: "100%", borderRadius: "3px", border: "2px solid #67A3F3", height: '2.4rem', color: '#4a6f8a', fontSize: '0.9375rem', fontFamily: 'Inter,Segoe UI, sans-serif', fontWeight: "500" }} name="emailSubject" value={this.state.emailSubject} onChange={this.onChange} onPointerMove={this.onKeydown}></textarea>
                        </div>

                        {/*Right */}
                        <div className="col-7">
                            <p>{this.state.cursorPosition}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EmailSending;