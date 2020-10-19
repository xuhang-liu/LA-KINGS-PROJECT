import React, { Component } from "react";
import Select from "react-select";
import Switch from "react-switch"; 

const s = {
    //Dropdown style
    control: (styles) => ({
      ...styles,
      WebkitBorderRadius: "20px",
      boxShadow: "0px 4px 25px rgba(70, 137, 250, 0.15)",
      border: "none",
      width: "80%",
      marginBottom:"5px",
    }),
    dropdownIndicator: () => ({
      color: "#98b8f6",
      alignItems: "center",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: () => ({
      width: "80%",
      display: "flex",
      justifyContent: "center",
    }),
    indicatorsContainer: () => ({
      width: "20%",
      display: "flex",
      justifyContent: "center",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#538af2",
      fontSize: "8px",
    }),
};

export const CardRow = (props) => {
    return <div className="row card-row">{props.children}</div>;
};

export const SelectCol = (props) => {
    return (
        <div className="react-select-container">{props.children}</div>
    );
};



export const PASubcategory = [
    { value: 1, label: "Discuss past mistakes or failures without becoming overly negative", checked: false},
    { value: 2, label: "Willing to try new things and embrace the challenges", checked: false},
    { value: 3, label: "Passionate about using knowledge and technical skills to apply to work", checked: false},
    { value: 4, label: "Never badmouth your previous employer or colleagues", checed: false},
    { value: 5, label: "Open minded for rejection and criticism", checked: false},
];

class SelectSubcategory extends Component {
    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeCatogary = this.handleChangeCatogary.bind(this);
    }
    
    state = {
        category: "Positive Attitude",
        checked: true,
        categoryOfQuestion: { value: 1, label: "Discuss past mistakes or failures without becoming overly negative", checked: false},
    };

    handleChangeCatogary = (categoryOfQuestion) => {
      this.setState({ categoryOfQuestion });
      this.setState(state => ({checked: PASubcategory[state.categoryOfQuestion.value - 1].checked}));
    }
    

    handleChange(checked) {
        this.setState(state => ({checked: !state.checked}));
        PASubcategory[this.state.categoryOfQuestion.value - 1].checked = this.state.checked;
    }
  
  
    render() {
        const {category} = this.state
        console.log(this.state);
        console.log(PASubcategory);
        if (category == "Positive Attitude"){
            return(
                <div className="row align-items-center" >
                    <div className="col-9">
                        <div className="react-select-container">
                            <Select className="select-category" 
                            value={this.state.categoryOfQuestion} 
                            onChange={this.handleChangeCatogary} 
                            options={PASubcategory} 
                            styles={s} 
                            isSearchable={false} />
                        </div>
                    </div>
                    <div className="col-3">
                        <CardRow>
                            <Switch onChange={this.handleChange} checked={this.state.checked} />
                        </CardRow>
                    </div>
                </div>
            );
        }
    }
}

export default SelectSubcategory;