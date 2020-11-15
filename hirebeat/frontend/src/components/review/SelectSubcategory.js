import React, { Component } from "react";
//import Select from "react-select";
//import Switch from "react-switch"; 

const s = {
    //  Dropdown style
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
      fontSize: "0.9375rem",
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



export const Subcategory = [
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
      this.handleInputChange = this.handleInputChange.bind(this);
    };
    
    state = {
        labelValue: "F",
        checked: false,
        categoryOfQuestion: { value: 1, label: "Discuss past mistakes or failures without becoming overly negative", checked: false},
    };

//   Subcategory = [
//        { value: 1, label: this.props.subcategories[0]["sub_category"], checked: false},
//        { value: 2, label: this.props.subcategories[1]["sub_category"], checked: false},
//        { value: 3, label: this.props.subcategories[2]["sub_category"], checked: false},
//        { value: 4, label: this.props.subcategories[3]["sub_category"], checked: false},
//        { value: 5, label: this.props.subcategories[4]["sub_category"], checked: false},
//    ];

   handleChangeCatogary = (categoryOfQuestion) => {
      this.setState({ categoryOfQuestion });
      this.setState(state => ({checked: this.Subcategory[state.categoryOfQuestion.value - 1].checked}));
   };
    

   handleChange(checked) {
        this.setState(state => ({checked: !state.checked}));
        this.Subcategory[this.state.categoryOfQuestion.value - 1].checked = this.state.checked;
   };

   handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
   };

    render() {
        return(
            <div>
                {this.props.subcategories.map((s, index) =>  {
                    return(
                        <div className="row align-items-center">
                            <div className="col-10">
                                 <div className="react-select-container">
                                    <p className="review-text2">{ (index + 1) + ". " + s.sub_category}</p>
                                 </div>
                            </div>
                            <div className="col-2">
                                <CardRow>
                                    <input
                                        type="text"
                                        minlength="1"
                                        maxlength="1"
                                        class="form-control review-text"
                                        className="label-input"
                                        required="required"
                                        style={{width:"50%",height:"50%", padding:"7%",
                                                border:"1px solid #E5E5E5", borderRadius:"5px",
                                                textAlign:"center",color:"#FF6B00", fontSize:"15px"}}
                                    />
                                </CardRow>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    };
}

export default SelectSubcategory;