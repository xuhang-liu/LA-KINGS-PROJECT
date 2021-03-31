import React from "react";
import Modal from "react-bootstrap/Modal";
import Chart from "react-apexcharts";
import { customBarData, customBarData2 } from "../../constants/constants";
import MediaQuery from 'react-responsive';
//import CountUp from "react-countup";
//import LazyLoad from "react-lazyload";
//import axios from "axios";
export const DbRow = (props) => {
    return <div className="dashboard-row">{props.children}</div>;
};

export const DbCenterRow = (props) => {
    return <div className="dashboard-align-center-row">{props.children}</div>;
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
                    marginLeft: props.textMarginLeft,
                    marginRight: props.textMarginLeft,
                    color: props.textColor ?? "#ffffff",
                    textDecoration: props.textDecoration ?? "none",
                    wordWrap: "break-word",
                    textAlign: "center",
                    wordBreak: "break-word",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const IconEmployerText = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="icon-employer-text align-items-center" style={{background: props.backColor}}>
            {props.hasIcon != "hasIcon" && <img src={props.iconSrc} style={{width:"36px", height:"36px"}}></img>}
            <p
                style={{
                    fontWeight: props.textWeight,
                    fontSize: props.textSize,
                    color: props.textColor ?? "#7d7d7d",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const IconUserText = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="icon-user-text align-items-center" style={{background: props.backColor}}>
            {props.hasIcon != "hasIcon" && <img src={props.iconSrc} style={{width:"36px", height:"36px"}}></img>}
            <p
                className="pt-2"
                style={{
                    fontWeight: props.textWeight,
                    fontSize: props.textSize,
                    color: props.textColor ?? "#7d7d7d",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const IconUserText1 = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="icon-user-text1 align-items-center" style={{background: props.backColor}}>
            {props.hasIcon != "hasIcon" && <img src={props.iconSrc} style={{width:"36px", height:"36px"}}></img>}
            <p
                className="pt-2"
                style={{
                    fontWeight: props.textWeight,
                    fontSize: props.textSize,
                    color: props.textColor ?? "#7d7d7d",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const renderQDes = (des) => {
    var length = 48;
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
    fontFamily: "Avenir Next, Segoe UI",
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

export const MyModal80 = (props) => {
    return (
        <Modal
            {...props}
            dialogClassName= {!props.isResume ? "my-modal-80" : "resume-modal"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{border: "none", height: "6px"}}/>
            {props.children}
        </Modal>
    );
};

export const MyVideoModal = (props) => {
    return (
        <Modal
            {...props}
            dialogClassName= {!props.isResume ? "my-video-modal" : "resume-modal"}
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

export const RateScore = (props) => {
  var options = customBarData2(props.percent, props.bgColor, props.barColor, props.label, props.ftSize, props.ftColor);
  return (
    <Chart
      options={options.options}
      series={options.series}
      type="radialBar"
      height={props.height}
      width={props.width}
      key={"rate"}
    />
  );
};

export const VideoChart = (props) => {
    var labelFormatter = function(value) {
        // remove decimal
        return value.toFixed(0);
    };
    return (
        <Chart
            options= {{
                chart: {
                    type: 'line',
                    height: 350,
                },
                grid: {
                    show: true,
                },
                stroke: {
                    curve: 'smooth',
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [0]
                },
                labels: props.dates,
                xaxis:{
                    labels: {
                        show: true,
                    },
                },
                yaxis:{
                    labels: {
                        show:true,
                        formatter: labelFormatter,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
            }}
            series={[{
                name: 'videos',
                data: props.videos,
                },
            ]}
            type="line"
            height={props.height}
            width={props.width}
        />
    )
}

export const InterviewChart = (props) => {
    var labelFormatter = function(value) {
        // remove decimal
        return value.toFixed(0);
    };
    return (
        <Chart
            options= {{
                chart: {
                    type: 'line',
                    height: 350,
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                      },
                },
                markers: {
                    size: 5,
                },
                grid: {
                    show: true,
                },
                stroke: {
                    curve: 'smooth',
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [0]
                },
                labels: props.dates,
                xaxis:{
                    labels: {
                        show: true,
                    },
                },
                yaxis:{
                    labels: {
                        show:true,
                        formatter: labelFormatter,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
            }}
            series={[{
                name: 'The number of interviews',
                data: props.videos,
                },
            ]}
            type="line"
            height={props.height}
            width={props.width}
        />
    )
}

export const ApplicationChart = (props) => {
    var labelFormatter = function(value) {
        // remove decimal
        return value.toFixed(0);
    };
    return (
        <Chart
            options= {{
                chart: {
                    type: 'line',
                },
                grid: {
                    show: true,
                },
                stroke: {
                    curve: 'smooth',
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [0]
                },
                labels: props.dates,
                xaxis:{
                    labels: {
                        show: true,
                    },
                },
                yaxis:{
                    labels: {
                        show:true,
                        formatter: labelFormatter,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
            }}
            series={[
                {
                    name: 'total applicants',
                    data: props.total,
                },
                {
                    name: 'accepted applicants',
                    data: props.accepted,
                },
            ]}
            type="line"
            height={props.height}
            width={props.width}
        />
    )
}

export const tourConfig = [
  {
    selector: '[data-tut="reactour-dashoboard"]',
    content: () => (
      <div>
        <h3 className="tour-title">Start with a guided tour!</h3>
        <div className="justify-items">
          <img src="https://hirebeat-assets.s3.amazonaws.com/guide1.png" />
        </div>
        <p className="tour-text">To get a feel of the place, take our guided tour where we'll show you our amazing products to get your hired!</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-myVideo"]',
    content: () => (
      <div>
        <h3 className="tour-title">Interview Practice</h3>
        <p className="tour-text">Have your ever felt nervous during an interview? Build your confidence by practicing
        them under recording. Remember to visit back the videos for improvements.</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-myResume"]',
    content: () => (
      <div>
        <h3 className="tour-title">Resume Screen</h3>
        <p className="tour-text">Resume Screening is always the most competitive stage of the hiring cycle. Get your
        resume past the ATS by tailoring it towards the job description!</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-myInterview"]',
    content: () => (
      <div>
        <p className="tour-text">HireBeat collaborates with company affiliates to send candidate interview invitations!
        Once you receive them, enter the tab to start the virtual interview, and always feel free to visit back to see
        how you can improve for the betterment!</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-rowbox"]',
    content: () => (
      <div>
        <p className="tour-title">Here is a summary of your activities. keep motivated!</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-bq"]',
    content: () => (
      <div>
        <h3 className="tour-title">Behavior Questions</h3>
        <p className="tour-text">Questions designed to learn how you would respond to a specific situation to achieve the best outcome.
Technical Questions are questions specific to the roles you've applied for — usually involving expertise and knowledge.</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-tq"]',
    content: () => (
      <div>
        <h3 className="tour-title">Technical Questions</h3>
        <p className="tour-text">Questions specific to the roles you've applied for — usually involving expertise and knowledge.</p>
      </div>
    )
  },
  {
    selector: '[data-tut="reactour-practice"]',
     content: () => (
      <div>
        <h3 className="tour-title">You've completed the tour</h3>
        <div className="justify-items">
          <img src="https://hirebeat-assets.s3.amazonaws.com/guide2.png" />
        </div>
        <p className="tour-text">Begin practice today to receive your dream offer tomorrow!</p>
      </div>
    )
  },
];