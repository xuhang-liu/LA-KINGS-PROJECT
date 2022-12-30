import React from "react";
import AnalyticsVideoInterview from "./analytics/AnalyticsVideoInterview";
import AnalyticsAllJob from "./analytics/AnalyticsAllJob";
import { Box, Stack, Container, Heading } from '@chakra-ui/react';

export const AnalyticsCover = (props) => {

    const openTabSection = (evt, tabNmae) => {
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
        if (tabNmae == 'tab1') {
            window?.analytics?.track("Analytics_View All Jobs", {
                eventTime: Date()?.toLocaleString()
            });
        } else {
            window?.analytics?.track("Analytics_View Video Interview", {
                eventTime: Date()?.toLocaleString()
            });
        }
    }

    return (
        <React.Fragment>
            <Box
                bg="bg-canvas"
                borderTopLeftRadius={{
                    base: 'none',
                    lg: '2rem',
                }}
                height="full"
                mb="5"
            >
                <Container height="full" mt='12' mb='14' alignItems='center'>
                    <Stack
                        spacing={{
                            base: '8',
                            lg: '6',
                        }}
                        height="full"
                    >
                        <Heading as='h5' size='sm' color="muted"><i className="bx-fw bx bx-bar-chart-square pl-3"></i><span style={{ marginLeft: "1.2rem" }}>Analytics</span></Heading>
                        <div className="tab pricing-list-tab">
                            {/* Pricing Tab List */}
                            <ul className="tabs">
                                <li
                                    className="current"
                                    onClick={(e) => openTabSection(e, 'tab1')}
                                >
                                    <span style={{ border: "1px solid #090D3A" }}>
                                        <i className="bx bx-tab"></i> &nbsp;&nbsp;All Jobs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </li>

                                <li
                                    onClick={(e) => openTabSection(e, 'tab2')}
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
                                        user={props.user}
                                        profile={props.profile}
                                        getAnalyticsInfo={props.getAnalyticsInfo}
                                        alljobAnaInfo={props.alljobAnaInfo}
                                    />
                                </div>
                                {/*video interview*/}
                                <div id="tab2" className="tabs_item">
                                    <AnalyticsVideoInterview
                                        user={props.user}
                                        profile={props.profile}
                                        analyticsInfo={props.analyticsInfo}
                                        getAnalyticsInfo={props.getAnalyticsInfo}
                                        position_list={props.position_list}
                                        interview_session={props.interview_session}
                                        alljobAnaInfo={props.alljobAnaInfo}
                                    />
                                </div>
                            </div>
                        </div>
                    </Stack>
                </Container>
            </Box>
        </React.Fragment>
    )
}

export default AnalyticsCover;