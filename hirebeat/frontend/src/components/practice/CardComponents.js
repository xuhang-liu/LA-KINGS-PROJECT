import React from "react";
import Select from "react-select";
import techIcon from "../../assets/tech_icon.png";

// Styled components
// Some styles are kept b/c the element's className can't be overwritten

function CardHeader() {
  return <div style={{ padding: 2, backgroundColor: "#538af2" }} />;
}

export const SetupCard = (props) => {
  return (
    <div className="container card-container" style={{marginBottom:"10%"}}>
      <div className="card mb-3 setup-card">
        {CardHeader()}
        <div className="card-body setup-card-body">{props.children}</div>
      </div>
    </div>
  );
};

export const PracticeCard = (props) => {
  return (
    <div className="container" style={{marginBottom:"10%"}}>
      <div className="card mb-3 practice-card">
        {CardHeader()}
        <div className="card-body" style={{ paddingTop: 0 }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const TestDeviceCard = (props) => {
  return (
    <div className="container practice-card-container" style={{marginBottom:"10%"}}>
      <div className="card mb-3 practice-card">
        {CardHeader()}
        <div className="card-body test-card-body" style={{ paddingTop: 0 }}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export const CardRow = (props) => {
  return <div className="row card-row">{props.children}</div>;
};

export const CardRowHigh = (props) => {
  return <div className="card-row-high">{props.children}</div>;
};

export const CardRowMidHigh = (props) => {
  return <div className="card-row-mid-high">{props.children}</div>;
};

export const CardButton = (props) => {
  // buttonWidth, onTap, textDisplayed, btnClassName
  return (
    <button
      className={props.btnClassName ?? "btn btn-warning"}
      style={{
        WebkitBorderRadius: "1.5rem",
//        width: props.buttonWidth,
        width: "18.625rem",
        height: "3.75rem",
        borderRadius: "3.125rem",
        background:
          props.btnClassName && props.btnClassName != "btn btn-warning"
            ? ""
            : "#FF6B00",
        boxShadow:
          "0px 0px 8px" +
          (props.btnClassName == "btn btn-success" ? " #14CC75" : "#FF6B00"),
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontFamily: "Lato",
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "1.2rem",
          lineHeight: "1.875rem",
          display: "block",
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
          marginBottom: "0px",
          textTransform: "capitalize",
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

export const BglessCardButton = (props) => {
  return (
    <CardRowMidHigh>
      <button
        onClick={props.onTap}
        style={{
          border: "none",
          backgroundColor: "transparent",
          width: props.buttonWidth,
        }}
      >
        <a style={{ fontSize: "1vw", fontWeight: "bold", color: "#f3a542" }}>
          {props.textDisplayed}
        </a>
      </button>
    </CardRowMidHigh>
  );
};

export const RecordDoneButton = (props) => {
  return (
    <CardRowHigh>
      <CardButton
        onTap={props.onTap}
        textDisplayed={props.textDisplayed}
        buttonWidth={props.buttonWidth}
      />
    </CardRowHigh>
  );
};

export const VideoNumberLinkRow = (props) => {
  return (
    <CardRowMidHigh>
      <div className="d-flex justify-content-around" style={{ width: "100%" }}>
        <h6>Free video save left: {props.number_of_videos_to_save} </h6>
        {/* <a
          onClick={props.upgrade}
          style={{
            color: "#f3a340",
            textDecoration: "underline",
          }}
        >
          Upgrade >
        </a> */}
      </div>
    </CardRowMidHigh>
  );
};

export const ButtonContainer = (src, onTap, textDisplayed, btnClassName) => {
  return (
    <div className="setup-card-button-container">
      <CardRow>
        <img src={src} width={src == techIcon ? "39%" : "40%"} />
      </CardRow>
      <CardRow>
        <CardButton
          onTap={onTap}
          textDisplayed={textDisplayed}
          buttonWidth={"85%"}
          WebkitBorderRadius={"40px"}
          btnClassName={btnClassName ?? "btn btn-warning"}
        />
      </CardRow>
    </div>
  );
};

const s = {
  //Dropdown style
  control: (styles) => ({
    ...styles,
    WebkitBorderRadius: "20px",
    boxShadow: "2px 8px rgba(70, 137, 250, 0.15)",
    border: "none",
    width: "80%",
  }),
  dropdownIndicator: () => ({
    color: "#98b8f6",
    alignItems: "center",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  valueContainer: () => ({
    width: "60%",
    display: "flex",
    justifyContent: "center",
  }),
  indicatorsContainer: () => ({
    width: "40%",
    display: "flex",
    justifyContent: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#538af2",
    fontWeight: "bold",
    fontSize: "15px",
  }),
};

export const selectParam = (question, value, onTap, options) => {
  return (
    <CardRow className="vertically-center">
      <div className="col-sm-1" />
      <QuestionCol>
        <h5>{question}</h5>
      </QuestionCol>
      <SelectCol>
        <Select value={value} onChange={onTap} options={options} styles={s} />
      </SelectCol>
      <div className="col-sm-1" />
    </CardRow>
  );
};

export const QuestionCol = (props) => {
  return <div className="col-6">{props.children}</div>;
};

export const SelectCol = (props) => {
  return (
    <div className="col-2">
      <div className="react-select-container">{props.children}</div>
    </div>
  );
};

export const StyledLink = (props) => {
  return (
    <a
      style={{
        color: "#f3a340",
        textDecoration: "underline",
      }}
    >
      {props.children}
    </a>
  );
};
