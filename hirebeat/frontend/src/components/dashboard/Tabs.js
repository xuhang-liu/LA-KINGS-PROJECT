import React from "react";
export default class Tabs extends React.Component {
  state = {
    selected: this.props.selected || 0,
  };

  handleChange(index){
      this.setState({selected: index})
  }

  render() {
    return (
      <>
        <ul>
          {this.props.children.map((ele, index) => {
            let style = index === this.state.selected ? "selected" : "";
            let classes = `tab_employer_request_support ${style}`
            return (
              <li
                className= {classes}
                key={index}
                onClick={() => this.handleChange(index)}
              >
                {ele.props.title}
              </li>
            );
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
      </>
    );
  }
}
