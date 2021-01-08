import React from "react";
import Modal from "react-bootstrap/Modal";
import Chart from "react-apexcharts";
import { customBarData } from "../../constants/constants";
import MediaQuery from 'react-responsive';
import CountUp from "react-countup";
import LazyLoad from "react-lazyload";
export const DbRow = (props) => {
    return <div className="dashboard-row">{props.children}</div>;
};

export const DbCenterRow = (props) => {
    return <div className="dashboard-align-center-row">{props.children}</div>;
};
const RowBox = (props) => {
    return (
        <div className="col-xxl col-xl col-lg col-sm col-md ">
            {/* <!-- Single Category --> */}
            <a
                href="/#"
                className="d-flex align-items-center justify-content-around bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 mt-5 shadow-8"
                style={{"text-decoration": "none", height: "100%"}}
            >
                <div className="hirebeat-blue-bg circle-56 font-size-6 ml-2 mr-0" >
                    <i className={`fas bx ${props.icon}`} style={{color:"white"}}/>
                </div>
                {/* <!-- Category Content --> */}
                <div className="mr-2 ml-0">
                    <h5 className="d-flex font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-0 mt-2 ">
                        <LazyLoad>
                        <span className="counter">
                          <CountUp duration={6} end={props.count} />
                        </span>
                        </LazyLoad>
                    </h5>
                    <p className="font-size-4 font-weight-normal text-gray mt-0 mb-2">
                        {props.children}
                    </p>
                </div>
            </a>
            {/* <!-- End Single Category --> */}
        </div>
    )
};
export const RowBoxes = (props) => {
    let video_practiced = 5;
    let resume_scanned = 256;
    let video_reviewed = 160;
    let recorded_interviewed = 0;

    return (
        <div className="mt-25 mt-lg-31">
            <div className={"container"}>
                <div className="row mb-7">
                    <RowBox count={video_practiced} icon={"bxs-video"}>Video Practiced</RowBox>
                    <RowBox count={resume_scanned} icon={"bxs-file-pdf"}>Resume Scanned</RowBox>
                    <RowBox count={video_reviewed} icon={"bxs-bot"}>Videos Reviewed</RowBox>
                    <RowBox count={recorded_interviewed} icon={"bx-brain"}>Recorded Interview</RowBox>
                </div>
            </div>
        </div>
    )
};
const Icon = (props) => {
    return (
        <i
            className= {props.iconName}
            style={{
                fontSize: props.iconSize,
                marginRight: props.iconMargin,
                marginBottom: "5px",
                color: props.iconColor ?? "#7d7d7d",
            }}
        >
        </i>
    );
};

export const IconButton = (props) => {
    //iconSize, iconName, iconColor, onTap
    return (
        <button
            className="btn-sm"
            style={{border: "none", outline: "none", background: "white"}}
            onClick={props.onTap}
        >
            <Icon
                iconSize={props.iconSize}
                iconColor={props.iconColor}
                iconName={props.iconName}
            />
        </button>
    );
};
export const IconText = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="d-flex align-items-center">
            <Icon
                iconName={props.iconName}
                iconSize={props.textSize}
                iconMargin={props.iconMargin}
                iconColor={props.textColor}
            />
            <p
                style={{
                    fontSize: props.textSize,
                    marginBottom: "10px",
                    marginLeft:"5px",
                    color: props.textColor ?? "#7d7d7d",
                    textDecoration: props.textDecoration ?? "none",
                    wordWrap: "revert",
                    textAlign: "center",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const renderQDes = (des) => {
    var length = 65;
    var i = 0;
    if (des.length > length) {
        var ans = des.substring(0, length);
        //while (des[length + i] !== " " || des[length + i] !== null) {
            // Make sure the des ends with a complete word
            //ans = ans + des[length + i];
            //i++;
        //}
        return ans + "...";
    }
    return des;
};

export const renderSuccessTag = (text) => {
    return (
        <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}}>
            <div className="d-flex justify-content-start">
                <span
                    className="text-success"
                    style={{color: "#14CC75", fontSize: "15px", marginRight: "10px"}}
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export const renderWaitTag = (text) => {
    return (
        <div className="height-30 d-flex justify-content-start align-items-end" style={{marginBottom: "0.8rem"}}>
            <div className="d-flex justify-content-start">
                <span
                    style={{color: "#7D7D7D", fontSize: "15px", marginRight: "10px"}}
                >
                    {text}
                </span>
            </div>
        </div>
    );
};

export const ReviewHeader = (props) => {
    return (
        <DbRow>
            <div className="col-2"/>
            <MediaQuery minDeviceWidth={1224}>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <strong className="text-20" style={{color: "#7D7D7D"}}>Review Your Performance</strong>
            </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <div className="col-8 d-flex justify-content-center align-items-center">
                <strong className="text-12" style={{color: "#7D7D7D"}}>Review Your Performance</strong>
            </div>
            </MediaQuery>
            <div className="col-2"/>
        </DbRow>
    );
};

export const QuestionTitle = (props) => {
    return (
        <div className="row" style={{marginLeft: "10px", marginBottom: "10px"}}>
            <MediaQuery minDeviceWidth={1224}>
            <h2 className="review-text" style={{color: "#98b8f6"}}>Q:</h2>
            <h2 className="review-text" style={{color: "#000000"}}>{props.title}</h2>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1223}>
            <h4 className="review-text" style={{color: "#98b8f6"}}>Q:</h4>
            <h4 className="review-text" style={{color: "#000000"}}>{props.title}</h4>
            </MediaQuery>
        </div>
    );
};

export const Comments = (props) => {
    return (
        <div className="container">
            <p className="comments">{props.comments}</p>
        </div>
    );
};

const sectionTitleStyle = {
    fontFamily: "Avenir Next",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#7D7D7D",
};

export const CategoryTitle = (props) => {
    return <p style={sectionTitleStyle}>{props.title}</p>;
};

export const MyModal = (props) => {
    return (
        <Modal
            {...props}
            dialogClassName= {!props.isResume ? "my-modal" : "resume-modal"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{border: "none", height: "6px"}}/>
            {props.children}
        </Modal>
    );
};

export const OverallScore = (props) => {
  var options = customBarData(props.percent, props.bgColor, props.barColor);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={150}
      key={"overall"}
    />
  );
};