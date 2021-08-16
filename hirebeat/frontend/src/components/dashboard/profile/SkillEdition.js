import React, {Component} from "react";
import Select from 'react-select';
import {SkillOptions} from "./Constants";

export class SkillEdition extends Component {
    state = {
        skills: this.props.skills,
    }

    onFilter = (skills) => {
        this.setState({ skills: skills });
        let validSkills = []
        for (let i = 0; i < skills.length; i++) {
            validSkills.push(skills[i].value);
        }
        this.props.setSkills(validSkills);
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

    render() {
        return (
            <div>
                <Select isMulti value={this.state.skills} onChange={this.onFilter} options={SkillOptions} styles={this.customStyles} />
            </div>
        );
    }
}

export default SkillEdition;

