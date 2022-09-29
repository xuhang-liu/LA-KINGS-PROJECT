import React, { Component } from "react";
import AnalyticsVideoInterview from "./analytics/AnalyticsVideoInterview";
import AnalyticsAllJob from "./analytics/AnalyticsAllJob";

export class AnalyticsCover extends Component {
    constructor(props) {
        super(props);
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
        //Segment info
        if (tabNmae == 'tab1'){
            window?.analytics?.track("Analytics_View All Jobs", {
                eventTime: Date()?.toLocaleString()
            });
        }else{
            window?.analytics?.track("Analytics_View Video Interview", {
                eventTime: Date()?.toLocaleString()
            });
        }
    }

    render() {
        return (
            <div className="container-xl">
                <div style={{ marginBottom: "30px" }}><h3><b style={{color:"#090d3a", fontSize:"1.2rem"}}><i className="bx-fw bx bx-bar-chart-square"></i><span className="ml-2">Analytics</span></b></h3></div>
                <div className="tab pricing-list-tab">
                    {/* Pricing Tab List */}
                    <ul className="tabs">
                        <li
                            className="current"
                            onClick={(e) => this.openTabSection(e, 'tab1')}
                        >
                            <span style={{ border: "1px solid #090D3A" }}>
                                <i className="bx bx-tab"></i> &nbsp;&nbsp;All Jobs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </li>

                        <li
                            onClick={(e) => this.openTabSection(e, 'tab2')}
                        >
                            <span style={{ border: "1px solid #090D3A" }}>
                                <i className="bx bx-tab"></i> Video Inteview
                            </span>
                        </li>
                    </ul>
                    <div className="tab_content">
                        {/*all jobs*/}
                        <div id="tab1" className="tabs_item">
                            <AnalyticsAllJob
                                user={this.props.user}
                                profile={this.props.profile}
                                getAnalyticsInfo={this.props.getAnalyticsInfo}
                                alljobAnaInfo={this.props.alljobAnaInfo}
                            />
                        </div>
                        {/*video interview*/}
                        <div id="tab2" className="tabs_item">
                            <AnalyticsVideoInterview
                                user={this.props.user}
                                profile={this.props.profile}
                                analyticsInfo={this.props.analyticsInfo}
                                getAnalyticsInfo={this.props.getAnalyticsInfo}
                                position_list={this.props.position_list}
                                interview_session={this.props.interview_session}
                                alljobAnaInfo={this.props.alljobAnaInfo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AnalyticsCover;