import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { SetupCard, CardRow, CardButton } from "./CardComponents";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";

const techFields = [
  "Design",
  "Law",
  "Retail",
  "Accounting",
  "Marketing",
  "Consulting",
  "Banking & Finance",
  "Risk Management",
  "Human Resources",
  "Project Management",
  "Computer Engineering",
];

const FieldButtonGroup = (props) => {
  const [field, setField] = useState("None");

  const handleOnTap = () => {
    const profile = {
      user: props.user.id,
      id: props.profile.id,
      profession: field,
    };
    props.updateProfile(profile);
    props.createMessage({ successMessage: "Feature coming soon" });
  };

  return (
    <div style={{marginBottom:"10%"}}>
      <div
        className="btn-group btn-group-toggle"
        data-toggle="buttons"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "around" }}
      >
        {techFields.map((t, index) => {
          return (
            <label
              className="btn btn-primary"
              style={{
                borderRadius: "5px",
                marginRight: "15px",
                marginBottom: "15px",
                background: field == t ? "#4689FA" : "transparent",
                boxShadow: "none",
                border: "2px solid #91B8FB",
                color: field == t ? "white" : "#91B8FB",
              }}
              key={index + "1"}
            >
              <input
                type="radio"
                name="options"
                id={index}
                key={index}
                onClick={() => setField(t)}
              />
              {t}
            </label>
          );
        })}
      </div>
      <br />
      <br />
      <CardRow>
        <CardButton
          onTap={handleOnTap}
          textDisplayed={"Next"}
          buttonWidth={"20%"}
          btnClassName={"btn btn-warning"}
        />
      </CardRow>
    </div>
  );
};

export class TechFields extends Component {
  render() {
    return (
      <SetupCard>
        <CardRow>
          <h5>Create A New Mock Interview</h5>
        </CardRow>
        <CardRow>
          <h1>Choose Your Field</h1>
        </CardRow>
        <FieldButtonGroup
          updateProfile={this.props.updateProfile}
          createMessage={this.props.createMessage}
          user={this.props.user}
          profile={this.props.profile}
        />
      </SetupCard>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth_reducer.profile,
  user: state.auth_reducer.user,
});
export default connect(mapStateToProps, { updateProfile, createMessage })(
  TechFields
);
