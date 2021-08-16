import React, {Component} from "react";
import Select from 'react-select';

export class JobTypeSelection extends Component {
    state = {
        jobType: this.props.jobType,
    }

    onFilter = (jobType) => {
        this.setState({ jobType: jobType });
        this.props.setJobType(jobType.value);
    };

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)" }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Avenir Next,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    };

    options = [
        { value: 'Accounting', label: 'Accounting' },
        { value: 'Administrative', label: 'Administrative' },
        { value: 'Arts and Design', label: 'Arts and Design' },
        { value: 'Audit', label: 'Audit' },
        { value: 'Business Development', label: 'Business Development' },
        { value: 'Community and Social Services', label: 'Community and Social Services' },
        { value: 'Consulting', label: 'Consulting' },
        { value: 'Education', label: 'Education' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Healthcare Services', label: 'Healthcare Services' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Legal', label: 'Legal' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Media and Communication', label: 'Media and Communication' },
        { value: 'Operations', label: 'Operations' },
        { value: 'Product Management', label: 'Product Management' },
        { value: 'Program and Project Management', label: 'Program and Project Management' },
        { value: 'Quality Assurance', label: 'Quality Assurance' },
        { value: 'Real Estate', label: 'Real Estate' },
        { value: 'Research', label: 'Research' },
        { value: 'Sales', label: 'Sales' },
        { value: 'Support', label: 'Support' },
        { value: 'Supply Chain', label: 'Supply Chain' },
        { value: 'Tax', label: 'Tax' },
    ];
    render() {
        return (
            <div>
                <Select value={this.state.jobType} onChange={this.onFilter} options={this.options} styles={this.customStyles} />
            </div>
        );
    }
}

export default JobTypeSelection;