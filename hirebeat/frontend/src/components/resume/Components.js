import React from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { customBarData } from "../../constants/constants";

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

export const ProgressScore = (props) => {
  //percent, height
  var scoreClassName = props.height == 30 ? "text-30 " : "text-15 ";
  var percentage = props.percent / props.max
  if (percentage > 0.85) {
    scoreClassName += "text-success";
  } else if (percentage > 0.5) {
    scoreClassName += "text-primary";
  } else if (percentage > 0.3) {
    scoreClassName += "text-warning";
  } else {
    scoreClassName += "text-danger";
  }
  return (
    <div className="d-flex align-items-end">
      <p className={scoreClassName}>{props.percent}</p>
      <p style={{ fontSize: props.height / 1.5, fontWeight: "bold" }}>/{props.max}</p>
    </div>
  );
};

export const ProgressBar = (props) => {
  // color, percent, height
  var barClassName = "progress-bar gradient-progress-green"
  return (
    <div className="row d-flex align-items-center" style={{width: "95%", margin: "auto"}}>
      <div className="col-10">
        <div
          className="progress"
          style={{ height: props.height, borderRadius: "20px" }}
        >
          <div
            className={barClassName}
            role="progressbar"
            style={{
              width: ((props.percent / props.max) * 100).toString() + "%",
            }}
            aria-valuemin="0"
            aria-valuemax={props.max}
          ></div>
        </div>
      </div>
      <div className="col-2">
        <ProgressScore percent={props.percent} height={props.height * 2} max={props.max} />
      </div>
    </div>
  );
};

export const IconText = (props) => {
    //textSize, textDisplayed, iconName, textColor?
    return (
        <div className="d-flex align-items-center">
            <p
                style={{
                    fontSize: props.textSize,
                    marginBottom: "10px",
                    marginLeft:"5px",
                    color: props.textColor ?? "#7d7d7d",
                    textDecoration: props.textDecoration ?? "none",
                    fontWeight: props.textWeight ?? "normal",
                    wordWrap: "revert",
                    textAlign: "center",
                }}
            >
                {props.textDisplayed}
            </p>
        </div>
    );
};

export const AtsRow = (props) => {
    return (
        <div style={{borderBottom:'2px dashed white'}}>
            <div className="row align-items-center" style={{background: "#F4F5FE"}}>
                <div className="col-3">
                    <p className="resume-text3">{props.name}</p>
                </div>
                <div className="col-1">
                    {
                        props.status ? (
                            <i className='bx bx-check bx-md' style={{color: "#14CC75"}}></i>) : (
                            <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>)
                    }
                </div>
                <div className="col-8">
                    <p className="resume-text4">{props.desc}</p>
                </div>
            </div>
        </div>
    );
};

export const AtsMultipleRows = (props) => {
    return (
        <div style={{borderBottom:'2px dashed white'}}>
            <div className="row align-items-center" style={{background: "#F4F5FE"}}>
                <div className="col-3">
                    <p className="resume-text3">{props.name}</p>
                </div>
                <div className="col-9">
                    {props.status.map((s, index) => {
                        if (s) {
                            return (
                                <div className="row">
                                    <div className="col-1" style={{width:'11.5%', flex:'0 0 11.5%', maxWidth:'11.5%'}}>
                                        <i className='bx bx-check bx-md' style={{color: "#14CC75"}}></i>
                                    </div>
                                    <div className="col-10" style={{paddingTop: "5px", borderBottom:'2px dashed white'}}>
                                        <p className="resume-text4">{props.desc[index]}</p>
                                    </div>
                                </div>
                            );
                        }
                        else {
                            return (
                                <div className="row">
                                    <div className="col-1" style={{width:'11.5%', flex:'0 0 11.5%', maxWidth:'11.5%'}}>
                                        <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>
                                    </div>
                                    <div className="col-10" style={{paddingTop: "5px", borderBottom:'2px dashed white'}}>
                                        <p className="resume-text4">{props.desc[index]}</p>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export const RecMultipleRows = (props) => {
    return (
        <div style={{borderBottom:'2px dashed white'}}>
            <div className="row align-items-center" style={{background: "#F4F5FE"}}>
                <div className="col-3">
                    <p className="resume-text3">{props.name}</p>
                </div>
                <div className="col-1">
                    {
                        props.status ? (
                            <i className='bx bx-check bx-md' style={{color: "#14CC75"}}></i>) : (
                            <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>)
                    }
                </div>
                <div className="col-8">
                    {props.desc != null ? (props.desc.map((d) => {
                        return (
                            <p className="resume-text4" style={{marginBottom: "0px", borderBottom:'2px dashed white'}}>{d}</p>
                        );
                    })) : null}
                </div>
            </div>
        </div>
    );
};

export const SkillsRow = (props) => {
    return (
        <div style={{borderBottom:'1px dashed white'}}>
            {props.skills != null ? (props.skills.map((s, index) => {
                return (
                    <div className="row align-items-center" style={{background: "#F4F5FE"}}>
                        <div className="col-3" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            <p className={props.className} style={props.style}>{props.skills[index]}</p>
                        </div>
                        <div className="col-3" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            <p className={props.className} style={props.vStyle}>{props.variations[index]}</p>
                        </div>
                        <div className="col-3" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            {
                                props.resume[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>) : (
                                    <p className={props.className}>{props.resume[index]}</p>)
                            }
                        </div>
                        <div className="col-3" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            {
                                props.jd[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>) : (
                                    <p className={props.className}>{props.jd[index]}</p>)
                            }
                        </div>
                    </div>
                )
            })) : null}
        </div>
    );
};

export const KeywordsRow = (props) => {
    return (
        <div style={{borderBottom:'1px dashed white'}}>
            {props.skills.map((s, index) => {
                return (
                    <div className="row align-items-center" style={{background: "#F4F5FE"}}>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            <p className={props.className} style={props.style}>{props.skills[index]}</p>
                        </div>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            {
                                props.resume[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>) : (
                                    <p className={props.className}>{props.resume[index]}</p>)
                            }
                        </div>
                        <div className="col-4" style={{textAlign: "center", borderBottom:'2px dashed white', height:'2.5rem'}}>
                            {
                                props.jd[index] == "0" ? (
                                    <i className='bx bx-x bx-md' style={{color: "#FF0000"}}></i>) : (
                                    <p className={props.className}>{props.jd[index]}</p>)
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export function ResumeFooter() {
    return (
        <div style={{marginBottom: "2rem"}}>
            <div className="contact-cta-box mwidth-200" style={{width: "80%"}}>
                <h3 className="quiz-title">Want to land your dream role?</h3>
                <p className="quiz-text">We are here to enhance your resume performance</p>
                <Link to="/resume">
                    <a className="default-btn" style={{color:"white", fontFamily:"Avenir Next, Segoe UI"}}>
                    Optimize with HireBeat
                        <span></span>
                    </a>
                </Link>
            </div>
            <div style={{width: "80%", margin: "auto"}}>
            <Link to="/company" style={{textDecoration: "none"}}>
                <p style={{marginLeft:"9%"}} className="mode-col-text2">Explore more about HireBeat -></p>
            </Link>
            </div>
        </div>
    );
};