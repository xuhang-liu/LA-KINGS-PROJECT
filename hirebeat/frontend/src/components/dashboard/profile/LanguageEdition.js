import React, {Component} from "react";
import Select from 'react-select';
import {LanguageOptions} from "./Constants";

export class LanguageEdition extends Component {
    state = {
        languages: this.props.languages,
    }

    onFilter = (languages) => {
        this.setState({ languages: languages });
        let validLanguages = []
        for (let i = 0; i < languages.length; i++) {
            validLanguages.push(languages[i].value);
        }
        this.props.setLanguages(validLanguages);
    };

    customStyles = {
        control: styles => ({ ...styles, backgroundColor: '#ffffff', boxShadow: "0px 0px 50px rgba(70, 137, 250, 0.1)" }),
        singleValue: styles => ({
            ...styles,
            color: '#4a6f8a',
            fontSize: '0.9375rem',
            fontFamily: 'Inter,Segoe UI, sans-serif',
            fontWeight: '500'
        }),
    };

    render() {
        return (
            <div>
                <Select isMulti value={this.state.languages} onChange={this.onFilter} options={LanguageOptions} styles={this.customStyles} />
            </div>
        );
    }
}

export default LanguageEdition;

